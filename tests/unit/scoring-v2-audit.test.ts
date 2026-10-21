import { describe, expect, it } from "vitest";
import { demoOptions, demoProject } from "@/data/demo";
import {
  calculateMatch,
  calculateProgressiveCostScore,
  rankMatches,
} from "@/domain/scoring";
import type { AccommodationOption, ComparisonProject, MatchResult } from "@/domain/entities";

const [anggrek] = demoOptions;
if (!anggrek) throw new Error("Demo options missing");

describe("V-05: Monotonisitas Biaya & Keunggulan Kos Lebih Hemat", () => {
  it("skor biaya progresif memberi nilai lebih tinggi pada kos yang lebih murah di bawah anggaran", () => {
    const budget = 5_000_000;
    const scoreCheap = calculateProgressiveCostScore(500_000, budget);
    const scoreMid = calculateProgressiveCostScore(1_400_000, budget);
    const scoreAtBudget = calculateProgressiveCostScore(5_000_000, budget);

    // Kos Rp 500rb harus dinilai lebih tinggi daripada kos Rp 1,4jt
    expect(scoreCheap).toBeGreaterThan(scoreMid);
    // Kos Rp 1,4jt harus dinilai lebih tinggi daripada kos tepat di batas Rp 5jt
    expect(scoreMid).toBeGreaterThan(scoreAtBudget);
    expect(scoreAtBudget).toBe(80);
    expect(scoreCheap).toBeCloseTo(98.0);
    expect(scoreMid).toBeCloseTo(94.4);
  });

  it("menghitung savingsVsBudget secara akurat", () => {
    const project: ComparisonProject = {
      ...demoProject,
      monthlyBudget: 3_000_000,
    };
    const option: AccommodationOption = {
      ...anggrek,
      rent: { amount: 1_800_000, origin: "confirmed" },
      electricity: { amount: 100_000, origin: "confirmed" },
      water: { amount: 50_000, origin: "confirmed" },
      internet: { amount: 50_000, origin: "confirmed" },
      laundry: { amount: 0, origin: "confirmed" },
      otherRecurring: { amount: 0, origin: "confirmed" },
      roundTripTransportCost: { amount: 0, origin: "confirmed" },
    };

    const match = calculateMatch(project, option);
    expect(match.savingsVsBudget).toBe(1_000_000); // 3jt - 2jt = 1jt
  });

  it("memecahkan tie di rankMatches dengan mengunggulkan opsi yang menghemat biaya lebih banyak", () => {
    const base: MatchResult = {
      optionId: "kos-a",
      optionName: "Kos A (Mahal)",
      eligible: true,
      missingRequiredFacilities: [],
      unknownRequiredFacilities: [],
      criteria: [],
      score: 85,
      confidence: "high",
      strengths: [],
      tradeoffs: [],
      overview: "",
      savingsVsBudget: 200_000,
      isTentative: false,
    };

    const cheapKos: MatchResult = {
      ...base,
      optionId: "kos-b",
      optionName: "Kos B (Hemat)",
      savingsVsBudget: 1_200_000, // Menghemat Rp 1,2 juta
    };

    const ranked = rankMatches([base, cheapKos]);
    expect(ranked[0]?.optionId).toBe("kos-b");
  });
});

describe("V-06: Rentang Skor & Penanganan Data Kosong / Tentatif", () => {
  it("menghasilkan scoreRange dan isTentative ketika data biaya atau perjalanan belum lengkap", () => {
    const incompleteOption: AccommodationOption = {
      ...anggrek,
      rent: { amount: null, origin: "unknown" },
      electricity: { amount: null, origin: "unknown" },
      oneWayCommuteMinutes: null,
    };

    const result = calculateMatch(demoProject, incompleteOption);

    expect(result.isTentative).toBe(true);
    expect(result.scoreRange).toBeDefined();
    expect(result.scoreRange?.min).toBeLessThan(result.scoreRange?.max ?? 0);
    expect(result.tentativeWarning).toContain("Data penting belum lengkap");
    expect(result.overview).toContain("estimasi skor sementara");
  });

  it("mendahulukan opsi definitif di atas opsi tentatif jika skornya imbang", () => {
    const tentativeMatch: MatchResult = {
      optionId: "tentative-1",
      optionName: "Kos Data Kosong",
      eligible: true,
      missingRequiredFacilities: [],
      unknownRequiredFacilities: [],
      criteria: [],
      score: 88,
      confidence: "medium",
      strengths: [],
      tradeoffs: [],
      overview: "",
      isTentative: true,
    };

    const confirmedMatch: MatchResult = {
      ...tentativeMatch,
      optionId: "confirmed-1",
      optionName: "Kos Terverifikasi Penuh",
      isTentative: false,
    };

    const ranked = rankMatches([tentativeMatch, confirmedMatch]);
    expect(ranked[0]?.optionId).toBe("confirmed-1");
  });
});
