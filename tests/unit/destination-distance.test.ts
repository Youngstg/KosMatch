import { describe, expect, it } from "vitest";
import { demoOptions, demoProject } from "@/data/demo";
import { calculateDestinationDistance } from "@/domain/distance";
import type { AccommodationOption, MoneyValue } from "@/domain/entities";
import { calculateMatch } from "@/domain/scoring";
import { accommodationOptionSchema, comparisonProjectSchema, kosMatchExportSchema } from "@/domain/validation";

const base = demoOptions[0]!;
function without(source: object, ...keys: string[]): Record<string, unknown> {
  const copy = { ...source } as Record<string, unknown>;
  for (const key of keys) delete copy[key];
  return copy;
}
const confirmed = (amount: number): MoneyValue => ({ amount, origin: "confirmed" });

describe("calculateDestinationDistance", () => {
  const campus = { latitude: -0.9143, longitude: 100.4602 };
  it("null bila titik tujuan atau lokasi kos belum ada", () => {
    expect(calculateDestinationDistance({ destinationPoint: null }, { location: campus })).toBeNull();
    expect(calculateDestinationDistance({ destinationPoint: campus }, { location: null })).toBeNull();
  });
  it("menghitung jarak dan estimasi waktu", () => {
    const kos = { latitude: -0.9143, longitude: 100.4692 }; // ±1 km ke timur
    const d = calculateDestinationDistance({ destinationPoint: campus }, { location: kos })!;
    expect(d.straightMeters).toBeGreaterThan(950);
    expect(d.straightMeters).toBeLessThan(1_050);
    expect(d.estimatedRoadMeters).toBe(Math.round(d.straightMeters * 1.3));
    expect(d.walkMinutes).toBeGreaterThan(d.motorcycleMinutes);
  });
});

describe("kompatibilitas data lama", () => {
  it("opsi tanpa field lokasi (data lama) tetap valid dengan default null", () => {
    const legacy = without(base, "location", "commuteOrigin");
    const parsed = accommodationOptionSchema.parse(legacy);
    expect(parsed.location).toBeNull();
    expect(parsed.commuteOrigin).toBeNull();
  });
  it("proyek lama tanpa destinationPoint tetap valid", () => {
    const legacy = without(demoProject, "destinationPoint");
    expect(comparisonProjectSchema.parse(legacy).destinationPoint).toBeNull();
  });
  it("menerima koordinat valid dan menolak yang di luar rentang atau berisi field asing", () => {
    expect(accommodationOptionSchema.safeParse({ ...base, location: { latitude: -0.9, longitude: 100.4 } }).success).toBe(true);
    expect(accommodationOptionSchema.safeParse({ ...base, location: { latitude: 120, longitude: 100.4 } }).success).toBe(false);
    expect(accommodationOptionSchema.safeParse({ ...base, location: { latitude: 1, longitude: 1, x: 1 } }).success).toBe(false);
    expect(accommodationOptionSchema.safeParse({ ...base, commuteOrigin: "gps" }).success).toBe(false);
  });
  it("ekspor v1 lama tanpa field baru tetap bisa diimpor", () => {
    const legacyProject = without(demoProject, "destinationPoint");
    const legacyOptions = demoOptions.map((o) => without(o, "location", "commuteOrigin"));
    const result = kosMatchExportSchema.safeParse({
      format: "kosmatch-project", version: 1, exportedAt: new Date().toISOString(), project: legacyProject, options: legacyOptions,
    });
    if (!result.success) console.error(result.error.issues.slice(0, 3));
    expect(result.success).toBe(true);
  });
});

describe("confidence dan waktu tempuh perkiraan", () => {
  const full: AccommodationOption = {
    ...base,
    rent: confirmed(1_200_000), electricity: confirmed(100_000), water: confirmed(50_000),
    internet: confirmed(80_000), laundry: confirmed(60_000), otherRecurring: confirmed(0),
    roundTripTransportCost: confirmed(20_000), oneWayCommuteMinutes: 20,
  };
  it("waktu tempuh manual dapat mencapai high, estimasi dari jarak tidak", () => {
    const manual = calculateMatch(demoProject, { ...full, commuteOrigin: "manual" });
    const estimated = calculateMatch(demoProject, { ...full, commuteOrigin: "estimated" });
    expect(manual.confidence).toBe("high");
    expect(estimated.confidence).not.toBe("high");
    expect(estimated.score).toBe(manual.score); // skor sama; hanya kepercayaan yang turun
  });
});
