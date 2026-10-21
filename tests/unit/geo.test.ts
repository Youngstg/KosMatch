import { describe, expect, it } from "vitest";
import { CAMPUSES } from "@/data/campuses";
import {
  estimateMinutes, estimateRoadMeters, formatDistance, haversineMeters, isValidGeoPoint, isWithinIndonesia, parseCoordinates,
} from "@/lib/geo";

describe("haversineMeters", () => {
  it("satu derajat bujur di khatulistiwa ≈ 111,2 km", () => {
    const d = haversineMeters({ latitude: 0, longitude: 100 }, { latitude: 0, longitude: 101 });
    expect(d).toBeGreaterThan(111_000);
    expect(d).toBeLessThan(111_400);
  });
  it("jarak titik yang sama adalah 0 dan simetris", () => {
    const a = { latitude: -6.2, longitude: 106.8 };
    const b = { latitude: -6.9, longitude: 107.6 };
    expect(haversineMeters(a, a)).toBe(0);
    expect(haversineMeters(a, b)).toBeCloseTo(haversineMeters(b, a), 6);
  });
});

describe("estimasi", () => {
  it("jarak jalan = garis lurus × 1,3", () => expect(estimateRoadMeters(1_000)).toBe(1_300));
  it("menit dibulatkan ke atas dan minimal 1 untuk jarak > 0", () => {
    expect(estimateMinutes(1_300, "walk")).toBe(18); // 1,3 km / 4,5 km/j
    expect(estimateMinutes(1_300, "motorcycle")).toBe(4); // 1,3 km / 22 km/j
    expect(estimateMinutes(5, "motorcycle")).toBe(1);
    expect(estimateMinutes(0, "walk")).toBe(0);
  });
  it("format jarak", () => {
    expect(formatDistance(850)).toBe("850 m");
    expect(formatDistance(1_240)).toBe("1,2 km");
    expect(formatDistance(3)).toBe("10 m");
  });
});

describe("parseCoordinates", () => {
  const expected = { latitude: -0.9143, longitude: 100.4602 };
  it.each([
    ["-0.9143, 100.4602"],
    ["-0.9143,100.4602"],
    ["(-0.9143; 100.4602)"],
    ["-0.9143 100.4602"],
    ["geo:-0.9143,100.4602"],
    ["https://www.google.com/maps/place/Kampus/@-0.9143,100.4602,17z/data=!4m6"],
    ["https://www.google.com/maps?q=-0.9143,100.4602"],
    ["https://www.google.com/maps/search/?api=1&query=-0.9143%2C100.4602"],
  ])("membaca %s", (input) => expect(parseCoordinates(input)).toEqual(expected));

  it("pin (!3d!4d) didahulukan daripada pusat peta (@)", () => {
    const url = "https://www.google.com/maps/place/X/@-1.0,100.0,15z/data=!3d-0.9143!4d100.4602";
    expect(parseCoordinates(url)).toEqual(expected);
  });
  it.each([[""], ["halo"], ["95, 200"], ["https://maps.app.goo.gl/abc123"], ["-0.9143"], ["1,2,3"]])("menolak %j", (input) =>
    expect(parseCoordinates(input)).toBeNull());
  it("menolak input terlalu panjang", () => expect(parseCoordinates("1".repeat(3_000))).toBeNull());
});

describe("validasi titik", () => {
  it("rentang global dan Indonesia", () => {
    expect(isValidGeoPoint({ latitude: 91, longitude: 0 })).toBe(false);
    expect(isValidGeoPoint({ latitude: Number.NaN, longitude: 0 })).toBe(false);
    expect(isWithinIndonesia({ latitude: -6.2, longitude: 106.8 })).toBe(true);
    expect(isWithinIndonesia({ latitude: 100.4602, longitude: -0.9143 })).toBe(false);
  });
});

describe("daftar kampus", () => {
  it("id unik, titik valid, dan berada di Indonesia", () => {
    expect(new Set(CAMPUSES.map((c) => c.id)).size).toBe(CAMPUSES.length);
    for (const campus of CAMPUSES) {
      expect(isValidGeoPoint(campus)).toBe(true);
      expect(isWithinIndonesia(campus), campus.id).toBe(true);
      expect(campus.name.length).toBeLessThanOrEqual(120);
    }
  });
});
