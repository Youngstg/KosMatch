import { describe, expect, it } from "vitest";
import {
  calculateAmenityScore,
  fetchPointNeighborhoodProfile,
} from "@/features/map/services/neighborhood-service";

describe("calculateAmenityScore", () => {
  it("returns 0 for empty items", () => {
    expect(calculateAmenityScore([])).toBe(0);
  });

  it("calculates high amenity score when multiple essential facilities are present", () => {
    const fullItems = [
      { category: "food", count: 8, nearestMeters: 80 },
      { category: "laundry", count: 3, nearestMeters: 120 },
      { category: "convenience", count: 2, nearestMeters: 140 },
      { category: "worship", count: 2, nearestMeters: 200 },
      { category: "pharmacy", count: 1, nearestMeters: 300 },
      { category: "bus_stop", count: 1, nearestMeters: 250 },
      { category: "atm", count: 2, nearestMeters: 180 },
    ];

    const score = calculateAmenityScore(fullItems);
    expect(score).toBeGreaterThanOrEqual(8.0);
    expect(score).toBeLessThanOrEqual(10.0);
  });

  it("adds proximity bonus when food or convenience is within 150m", () => {
    const itemsFar = [
      { category: "food", count: 2, nearestMeters: 300 },
      { category: "convenience", count: 1, nearestMeters: 400 },
    ];
    const itemsNear = [
      { category: "food", count: 2, nearestMeters: 80 },
      { category: "convenience", count: 1, nearestMeters: 90 },
    ];

    const scoreFar = calculateAmenityScore(itemsFar);
    const scoreNear = calculateAmenityScore(itemsNear);

    expect(scoreNear).toBeGreaterThan(scoreFar);
  });
});

describe("fetchPointNeighborhoodProfile", () => {
  it("returns a complete profile with items and score for UI Depok coordinates", async () => {
    const targetLat = -6.3685;
    const targetLng = 106.8212;

    const profile = await fetchPointNeighborhoodProfile(targetLat, targetLng, 800);

    expect(profile.latitude).toBe(targetLat);
    expect(profile.longitude).toBe(targetLng);
    expect(profile.radiusMeters).toBe(800);
    expect(profile.totalPois).toBeGreaterThan(0);
    expect(profile.scoreOutOf10).toBeGreaterThan(0);
    expect(profile.items.length).toBeGreaterThanOrEqual(5);

    const foodCategory = profile.items.find((i) => i.category === "food");
    expect(foodCategory).toBeDefined();
    expect(foodCategory!.count).toBeGreaterThan(0);
    expect(foodCategory!.nearestMeters).toBeGreaterThan(0);
  });

  it("adapts count when radius increases from 500m to 1200m", async () => {
    const targetLat = -0.9168;
    const targetLng = 100.4578;

    const profile500 = await fetchPointNeighborhoodProfile(targetLat, targetLng, 500);
    const profile1200 = await fetchPointNeighborhoodProfile(targetLat, targetLng, 1200);

    expect(profile1200.totalPois).toBeGreaterThanOrEqual(profile500.totalPois);
  });
});
