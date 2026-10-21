import { describe, expect, it } from "vitest";
import { PILOT_CONFIG, getPilotByCampusId, isPilotCampus } from "@/data/pilot-config";

describe("Pilot Configuration (Fase 0)", () => {
  it("menetapkan Universitas Indonesia (Depok) sebagai pilot utama", () => {
    const primary = PILOT_CONFIG.primaryPilot;
    expect(primary.id).toBe("pilot-depok-ui");
    expect(primary.campusId).toBe("ui-depok");
    expect(primary.city).toBe("Depok");
    expect(primary.initialTargetVerifiedListings).toBe(50);
    expect(primary.radiusKm).toBeGreaterThan(0);
    expect(primary.boundingBox.minLon).toBeLessThan(primary.boundingBox.maxLon);
    expect(primary.boundingBox.minLat).toBeLessThan(primary.boundingBox.maxLat);
  });

  it("menetapkan Universitas Andalas (Padang) sebagai pilot sekunder", () => {
    const secondary = PILOT_CONFIG.secondaryPilot;
    expect(secondary.id).toBe("pilot-padang-unand");
    expect(secondary.campusId).toBe("unand-limau-manis");
    expect(secondary.city).toBe("Padang");
    expect(secondary.initialTargetVerifiedListings).toBe(30);
  });

  it("dapat mencari pilot berdasarkan campusId", () => {
    expect(getPilotByCampusId("ui-depok")?.id).toBe("pilot-depok-ui");
    expect(getPilotByCampusId("unand-limau-manis")?.id).toBe("pilot-padang-unand");
    expect(getPilotByCampusId("non-existent")).toBeUndefined();
  });

  it("dapat mengecek apakah suatu kampus adalah kampus pilot", () => {
    expect(isPilotCampus("ui-depok")).toBe(true);
    expect(isPilotCampus("unand-limau-manis")).toBe(true);
    expect(isPilotCampus("ugm-bulaksumur")).toBe(false);
  });

  it("kampus pilot memiliki titik gerbang/tujuan resmi yang valid", () => {
    for (const pilot of PILOT_CONFIG.allPilots) {
      expect(pilot.gates.length).toBeGreaterThanOrEqual(3);
      for (const gate of pilot.gates) {
        expect(gate.id).toBeTruthy();
        expect(gate.name).toBeTruthy();
        expect(gate.coordinates.latitude).toBeGreaterThan(-90);
        expect(gate.coordinates.latitude).toBeLessThan(90);
        expect(gate.coordinates.longitude).toBeGreaterThan(-180);
        expect(gate.coordinates.longitude).toBeLessThan(180);
      }
    }
  });
});
