import { describe, expect, it } from "vitest";

import { demoOptions, demoProject } from "@/data/demo";
import { calculateMatch, matchAndRank, rankMatches } from "@/domain/scoring";
import type { MatchResult } from "@/domain/entities";

const [anggrek, mentari, tamanSelatan] = demoOptions;

if (anggrek === undefined || mentari === undefined || tamanSelatan === undefined) throw new Error("Fixture demo tidak lengkap.");

describe("calculateMatch", () => {
  it("menghitung weighted score dengan precision penuh", () => {
    const result = calculateMatch(demoProject, anggrek);

    expect(result.eligible).toBe(true);
    expect(result.score).toBeCloseTo(89.4444444444);
    expect(result.criteria.map(({ key, score }) => [key, score])).toEqual([
      ["cost", 100],
      ["commute", 100],
      ["facilities", 50],
      ["environment", 80],
      ["ruleFit", 100],
    ]);
    expect(result.confidence).toBe("high");
    expect(result.strengths).toHaveLength(2);
  });

  it("mengecualikan kriteria unknown dari denominator", () => {
    const result = calculateMatch(demoProject, mentari);
    const cost = result.criteria.find((item) => item.key === "cost");
    const ruleFit = result.criteria.find((item) => item.key === "ruleFit");

    expect(cost?.score).toBeNull();
    expect(ruleFit?.score).toBeNull();
    expect(result.score).toBeCloseTo(92);
    expect(result.confidence).toBe("low");
    expect(result.tradeoffs).toContain("Biaya bulanan belum lengkap: electricity.");
  });

  it("memisahkan opsi yang tidak memenuhi fasilitas wajib", () => {
    const result = calculateMatch(demoProject, tamanSelatan);

    expect(result.eligible).toBe(false);
    expect(result.missingRequiredFacilities).toEqual(["Kamar mandi dalam"]);
    expect(result.tradeoffs[0]).toBe("Belum memenuhi kebutuhan wajib: Kamar mandi dalam.");
  });
});

describe("ranking deterministik", () => {
  it("menempatkan eligible lebih dulu", () => {
    expect(matchAndRank(demoProject, demoOptions).map((item) => item.optionId)).toEqual([
      "demo-option-mentari",
      "demo-option-anggrek",
      "demo-option-taman-selatan",
    ]);
  });

  it("memecahkan tie berdasarkan confidence lalu nama dan id", () => {
    const base: MatchResult = {
      optionId: "2",
      optionName: "Beta",
      eligible: true,
      missingRequiredFacilities: [],
      unknownRequiredFacilities: [],
      criteria: [],
      score: 80,
      confidence: "medium",
      strengths: [],
      tradeoffs: [],
      overview: "",
    };
    const results: MatchResult[] = [
      base,
      { ...base, optionId: "3", optionName: "Alfa", confidence: "high" },
      { ...base, optionId: "1", optionName: "Alfa" },
    ];

    expect(rankMatches(results).map((item) => item.optionId)).toEqual(["3", "1", "2"]);
  });
});
