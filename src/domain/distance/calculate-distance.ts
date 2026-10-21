import type { AccommodationOption, ComparisonProject } from "@/domain/entities";
import { estimateMinutes, estimateRoadMeters, haversineMeters } from "@/lib/geo";

export interface DestinationDistance {
  readonly straightMeters: number;
  readonly estimatedRoadMeters: number;
  readonly walkMinutes: number;
  readonly motorcycleMinutes: number;
}

/**
 * Estimasi jarak kos ke tujuan (kampus/kantor) dari dua koordinat.
 * Ini PERKIRAAN dari garis lurus × faktor kelokan, bukan hasil routing.
 * Mengembalikan null bila salah satu koordinat belum diisi.
 */
export function calculateDestinationDistance(
  project: Pick<ComparisonProject, "destinationPoint">,
  option: Pick<AccommodationOption, "location">,
): DestinationDistance | null {
  if (project.destinationPoint === null || option.location === null) return null;
  const straightMeters = Math.round(haversineMeters(option.location, project.destinationPoint));
  const estimatedRoadMeters = estimateRoadMeters(straightMeters);
  return {
    straightMeters,
    estimatedRoadMeters,
    walkMinutes: estimateMinutes(estimatedRoadMeters, "walk"),
    motorcycleMinutes: estimateMinutes(estimatedRoadMeters, "motorcycle"),
  };
}
