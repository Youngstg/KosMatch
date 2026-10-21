import { describe, expect, it } from "vitest";

import { demoOptions, demoProject } from "@/data/demo";
import { calculateCost } from "@/domain/costing";

const [anggrek, mentari] = demoOptions;

if (anggrek === undefined || mentari === undefined) throw new Error("Fixture demo tidak lengkap.");

describe("calculateCost", () => {
  it("memisahkan total bulanan dan biaya awal", () => {
    expect(calculateCost(demoProject, anggrek)).toEqual({
      knownMonthlyTotal: 2_435_000,
      hasUnknownMonthlyValues: false,
      unknownMonthlyFields: [],
      monthlyTransport: 440_000,
      knownMoveInTotal: 3_400_000,
      unknownMoveInFields: [],
    });
  });

  it("menjumlahkan hanya nilai diketahui dan mempertahankan unknown", () => {
    const result = calculateCost(demoProject, mentari);

    expect(result.knownMonthlyTotal).toBe(2_377_000);
    expect(result.monthlyTransport).toBe(352_000);
    expect(result.hasUnknownMonthlyValues).toBe(true);
    expect(result.unknownMonthlyFields).toEqual(["electricity"]);
    expect(result.knownMoveInTotal).toBe(2_850_000);
    expect(result.unknownMoveInFields).toEqual(["administrationFee"]);
  });

  it("tidak memutasi input", () => {
    const before = structuredClone(anggrek);
    calculateCost(demoProject, anggrek);
    expect(anggrek).toEqual(before);
  });

  it("menghitung batas realistis MAX_FIELD_RUPIAH tanpa RangeError", () => {
    const extremeOption = {
      ...anggrek,
      rent: { amount: 100_000_000, origin: "confirmed" as const },
      electricity: { amount: 100_000_000, origin: "confirmed" as const },
      water: { amount: 100_000_000, origin: "confirmed" as const },
      internet: { amount: 100_000_000, origin: "confirmed" as const },
      laundry: { amount: 100_000_000, origin: "confirmed" as const },
      otherRecurring: { amount: 100_000_000, origin: "confirmed" as const },
      roundTripTransportCost: { amount: 100_000_000, origin: "confirmed" as const },
      deposit: { amount: 100_000_000, origin: "confirmed" as const },
      administrationFee: { amount: 100_000_000, origin: "confirmed" as const },
    };
    const extremeProject = { ...demoProject, commuteDaysPerMonth: 31 };

    expect(() => calculateCost(extremeProject, extremeOption)).not.toThrow();
    const result = calculateCost(extremeProject, extremeOption);
    expect(result.knownMonthlyTotal).toBe(3_700_000_000);
    expect(result.knownMoveInTotal).toBe(300_000_000);
  });
});
