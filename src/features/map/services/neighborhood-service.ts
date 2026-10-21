import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

export interface NeighborhoodProfileItem {
  readonly category: string;
  readonly categoryLabel: string;
  readonly count: number;
  readonly nearestMeters: number | null;
  readonly walkMinutes: number | null;
}

export interface NeighborhoodProfileResult {
  readonly latitude: number;
  readonly longitude: number;
  readonly radiusMeters: number;
  readonly source: "supabase" | "simulated";
  readonly totalPois: number;
  readonly scoreOutOf10: number;
  readonly items: readonly NeighborhoodProfileItem[];
}

const CATEGORY_DEFINITIONS: Record<string, { label: string; maxScore: number; walkSpeedMPerMin: number }> = {
  food: { label: "Warung & Kuliner", maxScore: 2.5, walkSpeedMPerMin: 80 },
  laundry: { label: "Laundry", maxScore: 2.0, walkSpeedMPerMin: 80 },
  convenience: { label: "Minimarket", maxScore: 2.0, walkSpeedMPerMin: 80 },
  worship: { label: "Tempat Ibadah", maxScore: 1.5, walkSpeedMPerMin: 80 },
  pharmacy: { label: "Apotek & Klinik", maxScore: 1.0, walkSpeedMPerMin: 80 },
  bus_stop: { label: "Halte / Transportasi", maxScore: 1.0, walkSpeedMPerMin: 80 },
  atm: { label: "ATM & Perbankan", maxScore: 0.5, walkSpeedMPerMin: 80 },
};

/**
 * Menghitung skor kemudahan lingkungan (0.0 - 10.0) berdasarkan kelengkapan
 * dan jarak fasilitas penting sehari-hari di sekitar kos.
 */
export function calculateAmenityScore(
  items: readonly { category: string; count: number; nearestMeters: number | null }[]
): number {
  let score = 0;

  for (const item of items) {
    const def = CATEGORY_DEFINITIONS[item.category];
    if (!def) continue;

    if (item.count > 0) {
      if (item.category === "food") {
        score += Math.min(def.maxScore, item.count >= 4 ? 2.5 : item.count * 0.6);
      } else if (item.category === "laundry") {
        score += Math.min(def.maxScore, item.count >= 2 ? 2.0 : item.count * 1.0);
      } else if (item.category === "convenience") {
        score += Math.min(def.maxScore, item.count >= 2 ? 2.0 : item.count * 1.0);
      } else if (item.category === "worship") {
        score += Math.min(def.maxScore, item.count >= 1 ? 1.5 : 0);
      } else if (item.category === "pharmacy") {
        score += Math.min(def.maxScore, item.count >= 1 ? 1.0 : 0);
      } else if (item.category === "bus_stop") {
        score += Math.min(def.maxScore, item.count >= 1 ? 1.0 : 0);
      } else if (item.category === "atm") {
        score += Math.min(def.maxScore, item.count >= 1 ? 0.5 : 0);
      }

      // Bonus jika fasilitas sangat dekat (< 150 meter)
      if (item.nearestMeters !== null && item.nearestMeters <= 150 && (item.category === "food" || item.category === "convenience")) {
        score += 0.2;
      }
    }
  }

  return Math.min(10.0, Math.max(0.0, Math.round(score * 10) / 10));
}

/**
 * Simulasi data profil lingkungan realistis untuk fallback saat offline
 * atau saat Supabase POI belum terisi.
 */
function generateSimulatedProfile(
  targetLat: number,
  targetLng: number,
  radiusMeters: number
): NeighborhoodProfileResult {
  // Hash sederhana koordinat untuk menghasilkan variasi realistis yang konsisten
  const seed = Math.abs(Math.sin(targetLat * 1000 + targetLng * 1000) * 10000);
  const factor = (seed % 10) / 10;

  const rawItems = [
    {
      category: "food",
      count: Math.max(2, Math.round(6 + factor * 8 * (radiusMeters / 800))),
      nearestMeters: Math.round(60 + factor * 140),
    },
    {
      category: "laundry",
      count: Math.max(1, Math.round(2 + factor * 4 * (radiusMeters / 800))),
      nearestMeters: Math.round(120 + factor * 180),
    },
    {
      category: "convenience",
      count: Math.max(1, Math.round(2 + factor * 3 * (radiusMeters / 800))),
      nearestMeters: Math.round(180 + factor * 220),
    },
    {
      category: "worship",
      count: Math.max(1, Math.round(1 + factor * 2)),
      nearestMeters: Math.round(150 + factor * 200),
    },
    {
      category: "pharmacy",
      count: Math.round(1 + factor * 2),
      nearestMeters: Math.round(280 + factor * 320),
    },
    {
      category: "bus_stop",
      count: Math.round(1 + factor * 2),
      nearestMeters: Math.round(350 + factor * 350),
    },
    {
      category: "atm",
      count: Math.round(1 + factor * 3),
      nearestMeters: Math.round(220 + factor * 280),
    },
  ];

  const items: NeighborhoodProfileItem[] = rawItems.map((item) => ({
    category: item.category,
    categoryLabel: CATEGORY_DEFINITIONS[item.category]?.label ?? item.category,
    count: item.count,
    nearestMeters: item.nearestMeters,
    walkMinutes: item.nearestMeters ? Math.max(1, Math.ceil(item.nearestMeters / 80)) : null,
  }));

  const totalPois = items.reduce((acc, curr) => acc + curr.count, 0);
  const scoreOutOf10 = calculateAmenityScore(items);

  return {
    latitude: targetLat,
    longitude: targetLng,
    radiusMeters,
    source: "simulated",
    totalPois,
    scoreOutOf10,
    items,
  };
}

/**
 * Mengambil profil lingkungan titik koordinat dari Supabase PostGIS RPC,
 * atau menghasilkan fallback yang realistis jika Supabase belum terhubung.
 */
export async function fetchPointNeighborhoodProfile(
  targetLat: number,
  targetLng: number,
  radiusMeters = 800
): Promise<NeighborhoodProfileResult> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = getSupabaseClient();
      if (supabase) {
        const { data, error } = await supabase.rpc("get_point_neighborhood_profile", {
          target_lat: targetLat,
          target_lng: targetLng,
          radius_meters: radiusMeters,
        });

        if (!error && Array.isArray(data) && data.length > 0) {
          const items: NeighborhoodProfileItem[] = data.map((row: { category: string; count: number; nearest_meters: number | null }) => {
            const nearest = row.nearest_meters ?? null;
            return {
              category: row.category,
              categoryLabel: CATEGORY_DEFINITIONS[row.category]?.label ?? row.category,
              count: Number(row.count),
              nearestMeters: nearest,
              walkMinutes: nearest !== null ? Math.max(1, Math.ceil(nearest / 80)) : null,
            };
          });

          const totalPois = items.reduce((acc, curr) => acc + curr.count, 0);
          const scoreOutOf10 = calculateAmenityScore(items);

          return {
            latitude: targetLat,
            longitude: targetLng,
            radiusMeters,
            source: "supabase",
            totalPois,
            scoreOutOf10,
            items,
          };
        }
      }
    } catch {
      // Fallback to simulated profile on network failure
    }
  }

  return generateSimulatedProfile(targetLat, targetLng, radiusMeters);
}
