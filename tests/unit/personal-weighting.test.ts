import { describe, expect, it } from "vitest";
import {
  CRITERION_KEYS,
  DEFAULT_PAIRWISE_SCENARIOS,
  fitBradleyTerryWeights,
  type PairwiseChoice,
} from "@/domain/preferences/personal-weighting";

describe("Tahap F: Personal Preference Weighting (Bradley-Terry Model)", () => {
  it("has 5 valid default trade-off scenarios covering key criteria", () => {
    expect(DEFAULT_PAIRWISE_SCENARIOS.length).toBe(5);

    for (const sc of DEFAULT_PAIRWISE_SCENARIOS) {
      expect(sc.id).toBeTruthy();
      expect(sc.tradeOffTitle).toBeTruthy();
      expect(sc.contextText).toBeTruthy();

      // Check option A and B criteria
      for (const k of CRITERION_KEYS) {
        expect(sc.optionA.criteriaScores[k]).toBeGreaterThanOrEqual(0);
        expect(sc.optionA.criteriaScores[k]).toBeLessThanOrEqual(100);
        expect(sc.optionB.criteriaScores[k]).toBeGreaterThanOrEqual(0);
        expect(sc.optionB.criteriaScores[k]).toBeLessThanOrEqual(100);
      }
    }
  });

  it("returns balanced default weights summing to 100 when no choices are given", () => {
    const result = fitBradleyTerryWeights([]);

    const sum = Object.values(result.weights).reduce((a, b) => a + b, 0);
    expect(sum).toBe(100);
    expect(result.confidenceScore).toBe(50);
    expect(result.persona.title).toContain("Pragmatis");
  });

  it("identifies 'Pencari Efisiensi & Hemat' when user consistently chooses cheaper options", () => {
    // Choose cheaper options across cost trade-offs
    const choices: PairwiseChoice[] = [
      { scenarioId: "sc-1", selectedOption: "B" }, // Option B is Rp 850rb (Hemat)
      { scenarioId: "sc-2", selectedOption: "B" }, // Option B is Rp 900rb (Hemat)
      { scenarioId: "sc-4", selectedOption: "B" }, // Option B is Rp 950rb (Hemat)
    ];

    const result = fitBradleyTerryWeights(choices);

    // Sum must be exactly 100
    const sum = Object.values(result.weights).reduce((a, b) => a + b, 0);
    expect(sum).toBe(100);

    // Each criterion must have at least 5%
    for (const k of CRITERION_KEYS) {
      expect(result.weights[k]).toBeGreaterThanOrEqual(5);
    }

    // Cost weight should be the highest
    expect(result.weights.cost).toBeGreaterThan(result.weights.commute);
    expect(result.weights.cost).toBeGreaterThan(result.weights.facilities);
    expect(result.persona.primaryCriterion).toBe("cost");
    expect(result.persona.title).toBe("Pencari Efisiensi & Hemat");
  });

  it("identifies 'Pemburu Waktu & Lokasi Strategis' when user prioritizes proximity to campus", () => {
    // Choose close-to-campus options
    const choices: PairwiseChoice[] = [
      { scenarioId: "sc-1", selectedOption: "A" }, // Option A is 3 mnt jalan kaki
      { scenarioId: "sc-3", selectedOption: "B" }, // Option B is 5 mnt ke kampus
    ];

    const result = fitBradleyTerryWeights(choices);

    const sum = Object.values(result.weights).reduce((a, b) => a + b, 0);
    expect(sum).toBe(100);

    // Commute weight should be high
    expect(result.weights.commute).toBeGreaterThan(result.weights.cost);
    expect(result.persona.primaryCriterion).toBe("commute");
    expect(result.persona.title).toBe("Pemburu Waktu & Lokasi Strategis");
  });

  it("identifies 'Pencari Kenyamanan Personal' when user chooses AC and high-tier facilities", () => {
    const choices: PairwiseChoice[] = [
      { scenarioId: "sc-2", selectedOption: "A" }, // AC & KM dalam
      { scenarioId: "sc-5", selectedOption: "A" }, // Water heater & kamar luas
    ];

    const result = fitBradleyTerryWeights(choices);

    const sum = Object.values(result.weights).reduce((a, b) => a + b, 0);
    expect(sum).toBe(100);

    expect(result.weights.facilities).toBeGreaterThan(result.weights.cost);
    expect(result.persona.primaryCriterion).toBe("facilities");
    expect(result.persona.title).toBe("Pencari Kenyamanan Personal");
  });

  it("handles all 5 choices with high confidence and deterministic normalized output", () => {
    const allChoices: PairwiseChoice[] = [
      { scenarioId: "sc-1", selectedOption: "A" },
      { scenarioId: "sc-2", selectedOption: "A" },
      { scenarioId: "sc-3", selectedOption: "A" },
      { scenarioId: "sc-4", selectedOption: "A" },
      { scenarioId: "sc-5", selectedOption: "A" },
    ];

    const result = fitBradleyTerryWeights(allChoices);

    const sum = Object.values(result.weights).reduce((a, b) => a + b, 0);
    expect(sum).toBe(100);
    expect(result.confidenceScore).toBe(100);
    expect(result.explanation).toContain("5 perbandingan");
  });
});

