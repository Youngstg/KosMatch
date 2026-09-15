import { describe, expect, it } from "vitest";

import { demoOptions, demoProject } from "@/data/demo";
import { simulateCost } from "@/features/comparison/simulation";

const [anggrek, mentari] = demoOptions;

if (anggrek === undefined || mentari === undefined) {
  throw new Error("Fixture demo tidak lengkap.");
}

describe("simulateCost", () => {
  it("menghitung perubahan perjalanan, transportasi, dan satu biaya rutin", () => {
    const result = simulateCost(demoProject, anggrek, {
      commuteDaysPerMonth: 20,
      roundTripTransportCost: { amount: 25_000, origin: "estimated" },
      recurringItem: {
        field: "electricity",
        value: { amount: 200_000, origin: "estimated" },
      },
    });

    expect(result.currentEstimate.knownMonthlyTotal).toBe(2_435_000);
    expect(result.simulatedEstimate.knownMonthlyTotal).toBe(2_545_000);
    expect(result.simulatedEstimate.monthlyTransport).toBe(500_000);
    expect(result.differencePerMonth).toBe(110_000);
    expect(result.differenceOverSixMonths).toBe(660_000);
    expect(result.differenceOverTwelveMonths).toBe(1_320_000);
    expect(result.differenceUsesMinimumEstimate).toBe(false);
  });

  it("tidak memutasi atau membocorkan reference input", () => {
    const projectBefore = structuredClone(demoProject);
    const optionBefore = structuredClone(anggrek);

    const result = simulateCost(demoProject, anggrek, {
      commuteDaysPerMonth: 10,
    });

    expect(demoProject).toEqual(projectBefore);
    expect(anggrek).toEqual(optionBefore);
    expect(result.simulatedProject).not.toBe(demoProject);
    expect(result.simulatedProject.weights).not.toBe(demoProject.weights);
    expect(result.simulatedOption).not.toBe(anggrek);
    expect(result.simulatedOption.pros).not.toBe(anggrek.pros);
  });

  it("tetap menandai perbandingan minimum ketika ada nilai unknown", () => {
    const result = simulateCost(demoProject, mentari, {
      roundTripTransportCost: { amount: 20_000, origin: "estimated" },
    });

    expect(result.currentEstimate.hasUnknownMonthlyValues).toBe(true);
    expect(result.simulatedEstimate.hasUnknownMonthlyValues).toBe(true);
    expect(result.simulatedEstimate.unknownMonthlyFields).toContain("electricity");
    expect(result.differenceUsesMinimumEstimate).toBe(true);
  });

  it("mengubah nilai unknown menjadi estimasi hanya pada skenario", () => {
    const result = simulateCost(demoProject, mentari, {
      recurringItem: {
        field: "electricity",
        value: { amount: 175_000, origin: "estimated" },
      },
    });

    expect(result.simulatedEstimate.hasUnknownMonthlyValues).toBe(false);
    expect(result.simulatedOption.electricity).toEqual({
      amount: 175_000,
      origin: "estimated",
    });
    expect(mentari.electricity.origin).toBe("unknown");
  });
});
