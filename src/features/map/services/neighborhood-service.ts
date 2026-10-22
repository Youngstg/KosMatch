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
  readonly source: "vps-postgres" | "simulated";
  readonly totalPois: number;
  readonly scoreOutOf10: number;
  readonly items: readonly NeighborhoodProfileItem[];
}

const CATEGORY_DEFINITIONS: Record<string, { label: string; maxScore: number; walkSpeedMPerMin: number }> = {
  food: { label: "Warung & Cafe", maxScore: 2.5, walkSpeedMPerMin: 80 },
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
 * atau saat database PostgreSQL VPS POI belum terisi.
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
      count: Math.max(4, Math.round(8 + factor * 8 * (radiusMeters / 800))),
      nearestMeters: Math.round(50 + factor * 120),
    },
    {
      category: "laundry",
      count: Math.max(2, Math.round(3 + factor * 4 * (radiusMeters / 800))),
      nearestMeters: Math.round(100 + factor * 160),
    },
    {
      category: "convenience",
      count: Math.max(2, Math.round(2 + factor * 3 * (radiusMeters / 800))),
      nearestMeters: Math.round(140 + factor * 200),
    },
    {
      category: "worship",
      count: Math.max(1, Math.round(1 + factor * 2)),
      nearestMeters: Math.round(150 + factor * 200),
    },
    {
      category: "pharmacy",
      count: Math.max(1, Math.round(1 + factor * 2)),
      nearestMeters: Math.round(240 + factor * 280),
    },
    {
      category: "bus_stop",
      count: Math.max(1, Math.round(1 + factor * 2)),
      nearestMeters: Math.round(300 + factor * 320),
    },
    {
      category: "atm",
      count: Math.max(1, Math.round(2 + factor * 3)),
      nearestMeters: Math.round(200 + factor * 250),
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
 * Mengambil profil lingkungan titik koordinat dari API internal PostgreSQL PostGIS di VPS,
 * atau menghasilkan fallback yang realistis jika database belum terhubung.
 */
export async function fetchPointNeighborhoodProfile(
  targetLat: number,
  targetLng: number,
  radiusMeters = 800
): Promise<NeighborhoodProfileResult> {
  try {
    const res = await fetch(`/api/neighborhood?lat=${targetLat}&lng=${targetLng}&radius=${radiusMeters}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.items) && data.items.length > 0) {
        const items: NeighborhoodProfileItem[] = data.items.map(
          (row: { category: string; count: number; nearest_meters: number | null }) => {
            const nearest = row.nearest_meters ?? null;
            return {
              category: row.category,
              categoryLabel: CATEGORY_DEFINITIONS[row.category]?.label ?? row.category,
              count: Number(row.count),
              nearestMeters: nearest,
              walkMinutes: nearest !== null ? Math.max(1, Math.ceil(nearest / 80)) : null,
            };
          }
        );

        const totalPois = items.reduce((acc, curr) => acc + curr.count, 0);
        const scoreOutOf10 = calculateAmenityScore(items);

        return {
          latitude: targetLat,
          longitude: targetLng,
          radiusMeters,
          source: "vps-postgres",
          totalPois,
          scoreOutOf10,
          items,
        };
      }
    }
  } catch {
    // Fallback to simulated profile on network or server offline
  }

  return generateSimulatedProfile(targetLat, targetLng, radiusMeters);
}
