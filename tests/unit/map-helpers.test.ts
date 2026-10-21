import { describe, expect, it } from "vitest";
import { createGeoJsonCircle } from "@/features/map/utils/geo-circle";
import { PILOT_CONFIG } from "@/data/pilot-config";

describe("createGeoJsonCircle", () => {
  it("creates a closed polygon feature with correct point count", () => {
    const center: [number, number] = [106.827, -6.362]; // UI Depok [lon, lat]
    const circle = createGeoJsonCircle(center, 4.0, 32);

    expect(circle.type).toBe("Feature");
    expect(circle.geometry.type).toBe("Polygon");
    expect(circle.properties.radiusKm).toBe(4.0);

    const ring = circle.geometry.coordinates[0];
    // 32 points + 1 closing point = 33 points
    expect(ring.length).toBe(33);
    // Closed polygon: first point equals last point
    expect(ring[0][0]).toBeCloseTo(ring[32][0], 6);
    expect(ring[0][1]).toBeCloseTo(ring[32][1], 6);
  });

  it("handles secondary pilot Unand Limau Manis center correctly", () => {
    const unand = PILOT_CONFIG.secondaryPilot;
    const center: [number, number] = [
      unand.centerCoordinates.longitude,
      unand.centerCoordinates.latitude,
    ];
    const circle = createGeoJsonCircle(center, unand.radiusKm, 64);

    expect(circle.geometry.coordinates[0].length).toBe(65);
    expect(circle.properties.radiusKm).toBe(5.0);

    // Points should span around center within bounding box approx
    const lons = circle.geometry.coordinates[0].map((pt) => pt[0]);
    const lats = circle.geometry.coordinates[0].map((pt) => pt[1]);
    expect(Math.min(...lons)).toBeLessThan(center[0]);
    expect(Math.max(...lons)).toBeGreaterThan(center[0]);
    expect(Math.min(...lats)).toBeLessThan(center[1]);
    expect(Math.max(...lats)).toBeGreaterThan(center[1]);
  });
});
