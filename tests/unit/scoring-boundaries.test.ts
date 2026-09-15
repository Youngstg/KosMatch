import { describe, expect, it } from "vitest";

import { demoOptions, demoProject } from "@/data/demo";
import type { AccommodationOption, ComparisonProject, CriterionKey, MoneyValue } from "@/domain/entities";
import { calculateMatch } from "@/domain/scoring";

const baseOption = demoOptions[0];

if (baseOption === undefined) throw new Error("Fixture demo tidak lengkap.");

const boundaryProject: ComparisonProject = {
  ...demoProject,
  monthlyBudget: 2_000_000,
  maxOneWayCommuteMinutes: 40,
};

const confirmed = (amount: number): MoneyValue => ({ amount, origin: "confirmed" });

function optionWithMonthlyTotal(monthlyTotal: number, oneWayCommuteMinutes = 20): AccommodationOption {
  return {
    ...baseOption,
    rent: confirmed(monthlyTotal),
    electricity: confirmed(0),
    water: confirmed(0),
    internet: confirmed(0),
    laundry: confirmed(0),
    otherRecurring: confirmed(0),
    oneWayCommuteMinutes,
    roundTripTransportCost: confirmed(0),
  };
}

function criterionScore(project: ComparisonProject, option: AccommodationOption, key: CriterionKey): number {
  const score = calculateMatch(project, option).criteria.find((item) => item.key === key)?.score;
  if (score === undefined || score === null) throw new Error(`Skor ${key} tidak tersedia.`);
  return score;
}

describe("batas skor biaya", () => {
  it.each([
    { monthlyTotal: 2_000_000, expected: 100, label: "tepat di anggaran" },
    { monthlyTotal: 3_000_000, expected: 50, label: "1.5x anggaran" },
    { monthlyTotal: 4_000_000, expected: 0, label: "2x anggaran" },
  ])("memberi skor $expected pada $label", ({ monthlyTotal, expected }) => {
    expect(criterionScore(boundaryProject, optionWithMonthlyTotal(monthlyTotal), "cost")).toBe(expected);
  });
});

describe("batas skor perjalanan", () => {
  it.each([
    { commuteMinutes: 40, expected: 100, label: "tepat di batas" },
    { commuteMinutes: 60, expected: 50, label: "1.5x batas" },
    { commuteMinutes: 80, expected: 0, label: "2x batas" },
  ])("memberi skor $expected pada $label", ({ commuteMinutes, expected }) => {
    expect(criterionScore(boundaryProject, optionWithMonthlyTotal(1_000_000, commuteMinutes), "commute")).toBe(expected);
  });
});

describe("invariant skor", () => {
  it.each([
    { monthlyTotal: 0, commuteMinutes: 0 },
    { monthlyTotal: 1_000_000, commuteMinutes: 20 },
    { monthlyTotal: 2_000_000, commuteMinutes: 40 },
    { monthlyTotal: 3_000_000, commuteMinutes: 60 },
    { monthlyTotal: 4_000_000, commuteMinutes: 80 },
    { monthlyTotal: 6_000_000, commuteMinutes: 120 },
  ])("menjaga semua skor pada 0-100 untuk biaya $monthlyTotal dan perjalanan $commuteMinutes", ({ monthlyTotal, commuteMinutes }) => {
    const result = calculateMatch(boundaryProject, optionWithMonthlyTotal(monthlyTotal, commuteMinutes));

    expect(result.score).not.toBeNull();
    expect(result.score).toBeGreaterThanOrEqual(0);
    expect(result.score).toBeLessThanOrEqual(100);
    for (const item of result.criteria) {
      if (item.score === null) continue;
      expect(item.score).toBeGreaterThanOrEqual(0);
      expect(item.score).toBeLessThanOrEqual(100);
    }
  });

  it("tidak menaikkan skor biaya ketika biaya bertambah di atas anggaran", () => {
    const scores = [2_000_001, 2_200_000, 3_000_000, 3_600_000, 4_000_000, 5_000_000]
      .map((monthlyTotal) => criterionScore(boundaryProject, optionWithMonthlyTotal(monthlyTotal), "cost"));

    for (let index = 1; index < scores.length; index += 1) {
      expect(scores[index]).toBeLessThanOrEqual(scores[index - 1] as number);
    }
  });

  it("tidak menaikkan skor perjalanan ketika durasi bertambah di atas batas", () => {
    const scores = [41, 50, 60, 70, 80, 100]
      .map((commuteMinutes) => criterionScore(boundaryProject, optionWithMonthlyTotal(1_000_000, commuteMinutes), "commute"));

    for (let index = 1; index < scores.length; index += 1) {
      expect(scores[index]).toBeLessThanOrEqual(scores[index - 1] as number);
    }
  });
});

describe("fasilitas wajib dan prioritas penjelasan", () => {
  it("membuat fasilitas wajib unknown tidak eligible dengan alasan konfirmasi", () => {
    const option: AccommodationOption = {
      ...optionWithMonthlyTotal(1_000_000),
      facilityValues: { ...baseOption.facilityValues, wifi: "unknown" },
    };

    const result = calculateMatch(boundaryProject, option);

    expect(result.eligible).toBe(false);
    expect(result.missingRequiredFacilities).toEqual([]);
    expect(result.unknownRequiredFacilities).toEqual(["Wi-Fi"]);
    expect(result.tradeoffs[0]).toBe("Perlu dikonfirmasi untuk kebutuhan wajib: Wi-Fi.");
  });

  it("mendahulukan penjelasan kebutuhan wajib daripada tradeoff kriteria", () => {
    const option: AccommodationOption = {
      ...optionWithMonthlyTotal(1_000_000, 100),
      electricity: { amount: null, origin: "unknown" },
      facilityValues: {
        ...baseOption.facilityValues,
        wifi: false,
        "private-bathroom": "unknown",
      },
    };

    const result = calculateMatch(boundaryProject, option);

    expect(result.tradeoffs).toEqual([
      "Belum memenuhi kebutuhan wajib: Wi-Fi.",
      "Perlu dikonfirmasi untuk kebutuhan wajib: Kamar mandi dalam.",
    ]);
  });
});

describe("batas dan provenance confidence", () => {
  const confidenceProject: ComparisonProject = {
    ...boundaryProject,
    facilityPreferences: [{ code: "wifi", label: "Wi-Fi", level: "required" }],
    rulePreferences: [{ code: "no-curfew", label: "Tanpa jam malam", expectedValue: true }],
  };
  const fullyConfirmed = optionWithMonthlyTotal(1_000_000);

  it("memberi high tepat pada kelengkapan 90% ketika biaya utama confirmed", () => {
    const option: AccommodationOption = {
      ...fullyConfirmed,
      ruleValues: { "no-curfew": "unknown" },
    };

    expect(calculateMatch(confidenceProject, option).confidence).toBe("high");
  });

  it.each([
    { field: "rent", option: { ...fullyConfirmed, rent: { amount: 1_000_000, origin: "estimated" as const } } },
    { field: "recurring", option: { ...fullyConfirmed, electricity: { amount: 0, origin: "estimated" as const } } },
    { field: "transport", option: { ...fullyConfirmed, roundTripTransportCost: { amount: 0, origin: "estimated" as const } } },
  ])("memberi medium ketika provenance $field hanya estimated", ({ option }) => {
    expect(calculateMatch(confidenceProject, option).confidence).toBe("medium");
  });

  it("memberi medium pada batas satu unknown ketika provenance biaya estimated", () => {
    const option: AccommodationOption = {
      ...fullyConfirmed,
      electricity: { amount: 0, origin: "estimated" },
      ruleValues: { "no-curfew": "unknown" },
    };

    expect(calculateMatch(confidenceProject, option).confidence).toBe("medium");
  });

  it("memberi low ketika melewati batas medium dengan dua unknown", () => {
    const option: AccommodationOption = {
      ...fullyConfirmed,
      facilityValues: { ...fullyConfirmed.facilityValues, wifi: "unknown" },
      ruleValues: { "no-curfew": "unknown" },
    };

    expect(calculateMatch(confidenceProject, option).confidence).toBe("low");
  });
});
