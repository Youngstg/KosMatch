import { describe, expect, it } from "vitest";
import {
  calculateAllModesCommute,
  calculateCommute,
  COMMUTE_PROFILES,
  estimateCommuteQuick,
  getOriginCell,
} from "@/features/map/services/routing-service";

describe("Routing Service & Commute Calculation (Fase 1)", () => {
  const origin = { latitude: -6.3685, longitude: 106.8212 }; // Kukusan Teknik
  const destination = { latitude: -6.362, longitude: 106.827 }; // Gerbatama UI

  it("menghasilkan grid cell yang terkuantisasi (~110m)", () => {
    const cell = getOriginCell(origin, 3);
    expect(cell).toBe("-6.369,106.821");

    // Titik sangat dekat (selisih < 50m) harus berada di cell yang sama
    const nearby = { latitude: -6.3686, longitude: 106.8214 };
    expect(getOriginCell(nearby, 3)).toBe(cell);
  });

  it("menghitung estimasi cepat sinkronus untuk berbagai mode transportasi", () => {
    const zero = estimateCommuteQuick(origin, origin, "walking");
    expect(zero.minutes).toBe(0);
    expect(zero.distanceMeters).toBe(0);

    const walk = estimateCommuteQuick(origin, destination, "walking");
    const motor = estimateCommuteQuick(origin, destination, "motorcycle");
    const car = estimateCommuteQuick(origin, destination, "driving-car");

    expect(walk.distanceMeters).toBeGreaterThan(500);
    expect(walk.minutes).toBeGreaterThan(0);

    // Motor lebih cepat dari jalan kaki
    expect(motor.minutes).toBeLessThanOrEqual(walk.minutes);

    // Detour mobil lebih besar atau sama dengan jalan kaki
    expect(car.distanceMeters).toBeGreaterThanOrEqual(walk.distanceMeters);
  });

  it("menghormati batas minimum menit per moda", () => {
    const veryClose = { latitude: -6.36851, longitude: 106.82121 };
    const walk = estimateCommuteQuick(origin, veryClose, "walking");
    expect(walk.minutes).toBe(COMMUTE_PROFILES.walking.minMinutes);

    const car = estimateCommuteQuick(origin, veryClose, "driving-car");
    expect(car.minutes).toBe(COMMUTE_PROFILES["driving-car"].minMinutes);
  });

  it("melakukan caching in-memory pada pemanggilan berulang", async () => {
    const res1 = await calculateCommute(origin, destination, "dest-ui-gerbatama", "walking");
    expect(res1.minutes).toBeGreaterThan(0);
    expect(res1.source).toBe("detour-model");

    // Panggilan kedua harus membaca dari cache
    const res2 = await calculateCommute(origin, destination, "dest-ui-gerbatama", "walking");
    expect(res2.isCached).toBe(true);
    expect(res2.source).toBe("cache");
    expect(res2.minutes).toBe(res1.minutes);
  });

  it("menghitung semua mode transportasi sekaligus dengan calculateAllModesCommute", async () => {
    const all = await calculateAllModesCommute(origin, destination, "dest-ui-all");
    expect(all.walking).toBeDefined();
    expect(all.motorcycle).toBeDefined();
    expect(all["driving-car"]).toBeDefined();

    expect(all.walking.mode).toBe("walking");
    expect(all.motorcycle.mode).toBe("motorcycle");
    expect(all["driving-car"].mode).toBe("driving-car");

    expect(all.motorcycle.minutes).toBeLessThanOrEqual(all.walking.minutes);
  });
});
