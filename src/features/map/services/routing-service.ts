import type { CommuteMode } from "@/lib/db/types";
import { haversineMeters } from "@/lib/geo";

export interface CommuteResult {
  readonly origin: { readonly latitude: number; readonly longitude: number };
  readonly destination: { readonly latitude: number; readonly longitude: number };
  readonly originCell: string;
  readonly destId: string;
  readonly mode: CommuteMode;
  readonly minutes: number;
  readonly distanceMeters: number;
  readonly isCached: boolean;
  readonly source: "cache" | "ors" | "detour-model";
}

/** Parameter kalibrasi faktor kelokan jalan dan kecepatan rata-rata perkotaan Indonesia */
export const COMMUTE_PROFILES: Readonly<
  Record<
    CommuteMode,
    {
      readonly label: string;
      readonly detourFactor: number;
      readonly speedKmh: number;
      readonly minMinutes: number;
      readonly orsProfile: string;
    }
  >
> = {
  walking: {
    label: "Jalan Kaki",
    detourFactor: 1.25,
    speedKmh: 4.5, // ~75 m/menit
    minMinutes: 1,
    orsProfile: "foot-walking",
  },
  motorcycle: {
    label: "Sepeda Motor",
    detourFactor: 1.3,
    speedKmh: 24.0, // ~400 m/menit (rata-rata kecepatan motor jalan lingkungan/arteri)
    minMinutes: 1,
    orsProfile: "driving-car",
  },
  "driving-car": {
    label: "Mobil",
    detourFactor: 1.35,
    speedKmh: 18.0, // ~300 m/menit (memperhitungkan kepadatan jalan & manuver gang)
    minMinutes: 2,
    orsProfile: "driving-car",
  },
  cycling: {
    label: "Sepeda",
    detourFactor: 1.25,
    speedKmh: 14.0, // ~233 m/menit
    minMinutes: 1,
    orsProfile: "cycling-regular",
  },
};

/** In-memory cache untuk performa tinggi selama sesi berjalan */
const memoryCommuteCache = new Map<string, { minutes: number; distanceMeters: number }>();

/**
 * Mengubah koordinat menjadi grid cell (~110m pada desimal ke-3)
 * untuk memaksimalkan rasio cache hit dan menghemat panggilan API.
 */
export function getOriginCell(
  coords: { readonly latitude: number; readonly longitude: number },
  precision = 3
): string {
  return `${coords.latitude.toFixed(precision)},${coords.longitude.toFixed(precision)}`;
}

/**
 * Estimasi cepat berbasis matematis (sinkronus, tanpa network),
 * ideal digunakan saat mengurutkan (sorting) puluhan listing secara instan di UI.
 */
export function estimateCommuteQuick(
  origin: { readonly latitude: number; readonly longitude: number },
  destination: { readonly latitude: number; readonly longitude: number },
  mode: CommuteMode = "walking"
): { minutes: number; distanceMeters: number } {
  const profile = COMMUTE_PROFILES[mode] ?? COMMUTE_PROFILES.walking;
  const straightMeters = haversineMeters(origin, destination);
  const roadMeters = Math.round(straightMeters * profile.detourFactor);

  if (roadMeters <= 0) {
    return { minutes: 0, distanceMeters: 0 };
  }

  const speedMetersPerMinute = (profile.speedKmh * 1000) / 60;
  const rawMinutes = Math.ceil(roadMeters / speedMetersPerMinute);
  const minutes = Math.max(profile.minMinutes, rawMinutes);

  return { minutes, distanceMeters: roadMeters };
}

/**
 * Mengambil waktu tempuh dan jarak rute antara titik asal (kos) dan tujuan (kampus/gerbang).
 * Mengecek:
 * 1. In-memory cache
 * 2. VPS PostgreSQL commute_cache via internal API
 * 3. OpenRouteService API (jika API key tersedia)
 * 4. Fallback ke model jalan & kecepatan terkalibrasi
 */
export async function calculateCommute(
  origin: { readonly latitude: number; readonly longitude: number },
  destination: { readonly latitude: number; readonly longitude: number },
  destId: string,
  mode: CommuteMode = "walking"
): Promise<CommuteResult> {
  const originCell = getOriginCell(origin);
  const cacheKey = `${originCell}:${destId}:${mode}`;

  // 1. Cek in-memory cache
  const inMemory = memoryCommuteCache.get(cacheKey);
  if (inMemory) {
    return {
      origin,
      destination,
      originCell,
      destId,
      mode,
      minutes: inMemory.minutes,
      distanceMeters: inMemory.distanceMeters,
      isCached: true,
      source: "cache",
    };
  }

  // 2. Cek PostgreSQL VPS commute_cache via internal API
  try {
    const res = await fetch(`/api/commute?origin_cell=${originCell}&dest_id=${destId}&mode=${mode}`);
    if (res.ok) {
      const json = await res.json();
      if (json.cached) {
        const result = {
          minutes: Number(json.cached.minutes),
          distanceMeters: Number(json.cached.distanceMeters),
        };
        memoryCommuteCache.set(cacheKey, result);
        return {
          origin,
          destination,
          originCell,
          destId,
          mode,
          minutes: result.minutes,
          distanceMeters: result.distanceMeters,
          isCached: true,
          source: "cache",
        };
      }
    }
  } catch {
    // Abaikan kegagalan jaringan DB, lanjutkan ke opsi berikutnya
  }

  // 3. Cek OpenRouteService jika API Key tersedia
  const orsApiKey = process.env.NEXT_PUBLIC_ORS_API_KEY;
  if (orsApiKey) {
    try {
      const orsProfile = COMMUTE_PROFILES[mode]?.orsProfile ?? "foot-walking";
      const url = `https://api.openrouteservice.org/v2/directions/${orsProfile}?api_key=${orsApiKey}&start=${origin.longitude},${origin.latitude}&end=${destination.longitude},${destination.latitude}`;

      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (res.ok) {
        const json = await res.json();
        const route = json.features?.[0]?.properties?.summary;
        if (route && typeof route.duration === "number" && typeof route.distance === "number") {
          const minutes = Math.max(1, Math.ceil(route.duration / 60));
          const distanceMeters = Math.round(route.distance);

          memoryCommuteCache.set(cacheKey, { minutes, distanceMeters });

          // Simpan ke PostgreSQL commute_cache di latar belakang via API
          void fetch("/api/commute", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              origin_cell: originCell,
              dest_id: destId,
              mode,
              minutes,
              distance_m: distanceMeters,
            }),
          }).catch(() => {});

          return {
            origin,
            destination,
            originCell,
            destId,
            mode,
            minutes,
            distanceMeters,
            isCached: false,
            source: "ors",
          };
        }
      }
    } catch {
      // Fallback ke model jika request ORS gagal
    }
  }

  // 4. Model Detour Terkalibrasi (Offline Fallback)
  const quick = estimateCommuteQuick(origin, destination, mode);
  memoryCommuteCache.set(cacheKey, quick);

  // Simpan hasil estimasi ke cache API di latar belakang
  void fetch("/api/commute", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      origin_cell: originCell,
      dest_id: destId,
      mode,
      minutes: quick.minutes,
      distance_m: quick.distanceMeters,
    }),
  }).catch(() => {});

  return {
    origin,
    destination,
    originCell,
    destId,
    mode,
    minutes: quick.minutes,
    distanceMeters: quick.distanceMeters,
    isCached: false,
    source: "detour-model",
  };
}

/**
 * Menghitung waktu tempuh untuk semua mode transportasi utama sekaligus:
 * Jalan kaki, Sepeda motor, dan Mobil.
 */
export async function calculateAllModesCommute(
  origin: { readonly latitude: number; readonly longitude: number },
  destination: { readonly latitude: number; readonly longitude: number },
  destId: string
): Promise<Record<"walking" | "motorcycle" | "driving-car", CommuteResult>> {
  const [walking, motorcycle, drivingCar] = await Promise.all([
    calculateCommute(origin, destination, destId, "walking"),
    calculateCommute(origin, destination, destId, "motorcycle"),
    calculateCommute(origin, destination, destId, "driving-car"),
  ]);

  return {
    walking,
    motorcycle,
    "driving-car": drivingCar,
  };
}
