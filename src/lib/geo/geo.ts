export interface GeoPoint {
  readonly latitude: number;
  readonly longitude: number;
}

export type TravelMode = "walk" | "motorcycle";

const EARTH_RADIUS_METERS = 6_371_008.8;

/** Faktor kelokan jalan: jarak jalan rata-rata kota ≈ 1,3× jarak garis lurus (heuristik kasar). */
export const ROAD_DETOUR_FACTOR = 1.3;

/** Kecepatan rata-rata kasar dalam km/jam. Bukan hasil routing sungguhan. */
export const TRAVEL_SPEED_KMH: Readonly<Record<TravelMode, number>> = { walk: 4.5, motorcycle: 22 };

/** Batas kasar wilayah Indonesia, dipakai hanya untuk memberi peringatan input. */
export const INDONESIA_BOUNDS = { minLatitude: -11.5, maxLatitude: 6.5, minLongitude: 94.5, maxLongitude: 141.5 } as const;

export function isValidGeoPoint(point: GeoPoint): boolean {
  return (
    Number.isFinite(point.latitude) &&
    Number.isFinite(point.longitude) &&
    point.latitude >= -90 &&
    point.latitude <= 90 &&
    point.longitude >= -180 &&
    point.longitude <= 180
  );
}

export function isWithinIndonesia(point: GeoPoint): boolean {
  return (
    point.latitude >= INDONESIA_BOUNDS.minLatitude &&
    point.latitude <= INDONESIA_BOUNDS.maxLatitude &&
    point.longitude >= INDONESIA_BOUNDS.minLongitude &&
    point.longitude <= INDONESIA_BOUNDS.maxLongitude
  );
}

const toRadians = (degrees: number): number => (degrees * Math.PI) / 180;

export function haversineMeters(from: GeoPoint, to: GeoPoint): number {
  const dLat = toRadians(to.latitude - from.latitude);
  const dLng = toRadians(to.longitude - from.longitude);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(from.latitude)) * Math.cos(toRadians(to.latitude)) * Math.sin(dLng / 2) ** 2;
  return 2 * EARTH_RADIUS_METERS * Math.asin(Math.min(1, Math.sqrt(a)));
}

export function estimateRoadMeters(straightMeters: number): number {
  return Math.round(straightMeters * ROAD_DETOUR_FACTOR);
}

export function estimateMinutes(roadMeters: number, mode: TravelMode): number {
  if (roadMeters <= 0) return 0;
  return Math.max(1, Math.ceil((roadMeters / 1_000 / TRAVEL_SPEED_KMH[mode]) * 60));
}

export function formatDistance(meters: number): string {
  if (meters < 1_000) return `${Math.max(10, Math.round(meters / 10) * 10)} m`;
  return `${(meters / 1_000).toFixed(1).replace(".", ",")} km`;
}

export function formatCoordinates(point: GeoPoint): string {
  return `${point.latitude.toFixed(5)}, ${point.longitude.toFixed(5)}`;
}

export function googleMapsLink(point: GeoPoint): string {
  return `https://www.google.com/maps/search/?api=1&query=${point.latitude},${point.longitude}`;
}

export function googleDirectionsLink(from: GeoPoint, to: GeoPoint): string {
  return `https://www.google.com/maps/dir/?api=1&origin=${from.latitude},${from.longitude}&destination=${to.latitude},${to.longitude}`;
}

const NUM = "[-+]?\\d{1,3}(?:\\.\\d+)?";
const PIN_PATTERN = new RegExp(`!3d(${NUM})!4d(${NUM})`);
const AT_PATTERN = new RegExp(`@(${NUM}),(${NUM})`);
const QUERY_PATTERN = new RegExp(`[?&](?:q|query|ll|destination|center)=(${NUM})(?:,|%2C)\\s*(${NUM})`, "i");
const GEO_PATTERN = new RegExp(`^\\s*geo:(${NUM}),(${NUM})`, "i");
const PLAIN_PATTERN = new RegExp(`^\\s*\\(?\\s*(${NUM})\\s*[,;\\s]\\s*(${NUM})\\s*\\)?\\s*$`);

/**
 * Membaca koordinat dari teks: "-0.9143, 100.4602", tautan Google Maps panjang
 * (@lat,lng / !3d..!4d.. / ?q=lat,lng), atau URI geo:. Tautan pendek (maps.app.goo.gl)
 * tidak bisa dibaca tanpa membuka jaringan, sehingga mengembalikan null.
 */
export function parseCoordinates(input: string): GeoPoint | null {
  const text = input.trim();
  if (text.length === 0 || text.length > 2_048) return null;
  let decoded = text;
  try {
    decoded = decodeURIComponent(text);
  } catch {
    decoded = text;
  }
  const patterns = [PIN_PATTERN, AT_PATTERN, QUERY_PATTERN, GEO_PATTERN, PLAIN_PATTERN];
  for (const pattern of patterns) {
    const match = pattern.exec(decoded) ?? pattern.exec(text);
    if (match === null) continue;
    const point = { latitude: Number(match[1]), longitude: Number(match[2]) };
    if (isValidGeoPoint(point)) return point;
  }
  return null;
}
