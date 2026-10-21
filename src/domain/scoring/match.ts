import { calculateCost } from "@/domain/costing";
import type { AccommodationOption, Availability, ComparisonProject, Confidence, CriterionKey, CriterionResult, MatchResult, ScoreRange } from "@/domain/entities";

const criterionOrder: readonly CriterionKey[] = ["cost", "commute", "facilities", "environment", "ruleFit"];
const confidenceRank: Readonly<Record<Confidence, number>> = { high: 3, medium: 2, low: 1 };

const clamp = (value: number): number => Math.min(100, Math.max(0, value));

export function decliningScore(value: number, limit: number): number {
  if (limit <= 0) return value <= limit ? 100 : 0;
  return value <= limit ? 100 : clamp((100 * (2 * limit - value)) / limit);
}

/**
 * Menghitung skor biaya kontinu yang memprioritaskan kos lebih hemat (V-05):
 * - Kos dengan biaya Rp 0 mendapat skor 100.
 * - Kos tepat di batas anggaran mendapat skor 80.
 * - Kos antara 0 dan anggaran mendapat skor proporsional antara 80 dan 100.
 * - Kos di atas anggaran menurun proporsional dari 80 menuju 0 pada 2x limit.
 */
export function calculateProgressiveCostScore(costMonthly: number, budgetMonthly: number): number {
  if (budgetMonthly <= 0) return costMonthly <= budgetMonthly ? 100 : 0;
  if (costMonthly <= 0) return 100;
  if (costMonthly <= budgetMonthly) {
    return clamp(80 + (20 * (budgetMonthly - costMonthly)) / budgetMonthly);
  }
  return clamp((80 * (2 * budgetMonthly - costMonthly)) / budgetMonthly);
}

function facilityValue(option: AccommodationOption, code: string): Availability {
  return option.facilityValues[code] ?? option.facilityCodes.includes(code);
}

function criterion(key: CriterionKey, score: number | null, project: ComparisonProject, explanation: string): CriterionResult {
  return { key, score, weight: project.weights[key], explanation };
}

function calculateConfidence(project: ComparisonProject, option: AccommodationOption): Confidence {
  const statuses: boolean[] = [
    option.rent.origin !== "unknown" && option.rent.amount !== null,
    option.electricity.origin !== "unknown" && option.electricity.amount !== null,
    option.water.origin !== "unknown" && option.water.amount !== null,
    option.internet.origin !== "unknown" && option.internet.amount !== null,
    option.laundry.origin !== "unknown" && option.laundry.amount !== null,
    option.otherRecurring.origin !== "unknown" && option.otherRecurring.amount !== null,
    option.oneWayCommuteMinutes !== null,
    option.roundTripTransportCost.origin !== "unknown" && option.roundTripTransportCost.amount !== null,
    ...project.facilityPreferences.filter((item) => item.level === "required").map((item) => facilityValue(option, item.code) !== "unknown"),
    ...project.rulePreferences.map((item) => option.ruleValues[item.code] !== undefined && option.ruleValues[item.code] !== "unknown"),
  ];
  const known = statuses.filter(Boolean).length;
  const unknown = statuses.length - known;
  const completeness = statuses.length === 0 ? 1 : known / statuses.length;
  const rentConfirmed = option.rent.origin === "confirmed" && option.rent.amount !== null;
  const recurringAndTransportConfirmed = [
    option.electricity,
    option.water,
    option.internet,
    option.laundry,
    option.otherRecurring,
    option.roundTripTransportCost,
  ].every((value) => value.origin === "confirmed" && value.amount !== null);
  const commuteKnown = option.oneWayCommuteMinutes !== null;
  const commuteConfirmed = commuteKnown && option.commuteOrigin !== "estimated";
  if (completeness >= 0.9 && rentConfirmed && recurringAndTransportConfirmed && commuteConfirmed) return "high";
  if (completeness >= 0.65 && unknown <= 1 && option.rent.amount !== null && commuteKnown) return "medium";
  return "low";
}

export function calculateMatch(project: ComparisonProject, option: AccommodationOption): MatchResult {
  const cost = calculateCost(project, option);
  const required = project.facilityPreferences.filter((item) => item.level === "required");
  const desired = project.facilityPreferences.filter((item) => item.level === "desired");
  const missingRequired = required.filter((item) => facilityValue(option, item.code) === false).map((item) => item.label);
  const unknownRequired = required.filter((item) => facilityValue(option, item.code) === "unknown").map((item) => item.label);
  const matchedDesired = desired.filter((item) => facilityValue(option, item.code) === true).length;
  const knownRules = project.rulePreferences.filter((item) => {
    const value = option.ruleValues[item.code];
    return value === true || value === false;
  });
  const matchedRules = knownRules.filter((item) => option.ruleValues[item.code] === item.expectedValue).length;

  // V-05: Hitung penghematan anggaran bulanan
  const savingsVsBudget =
    !cost.hasUnknownMonthlyValues && cost.knownMonthlyTotal <= project.monthlyBudget
      ? project.monthlyBudget - cost.knownMonthlyTotal
      : null;

  let costExplanation = "";
  if (cost.hasUnknownMonthlyValues) {
    costExplanation = `Biaya bulanan belum lengkap: ${cost.unknownMonthlyFields.join(", ")}.`;
  } else if (cost.knownMonthlyTotal <= project.monthlyBudget) {
    costExplanation = "Total bulanan masih dalam anggaran Anda.";
  } else {
    costExplanation = "Total bulanan melebihi anggaran Anda.";
  }

  const criteria: CriterionResult[] = [
    criterion("cost", cost.hasUnknownMonthlyValues ? null : decliningScore(cost.knownMonthlyTotal, project.monthlyBudget), project, costExplanation),
    criterion("commute", option.oneWayCommuteMinutes === null ? null : decliningScore(option.oneWayCommuteMinutes, project.maxOneWayCommuteMinutes), project,
      option.oneWayCommuteMinutes === null ? "Waktu perjalanan belum diketahui." : option.oneWayCommuteMinutes <= project.maxOneWayCommuteMinutes ? `Perjalanan ${option.oneWayCommuteMinutes} menit sesuai batas Anda.` : `Perjalanan ${option.oneWayCommuteMinutes} menit melebihi batas Anda.`),
    criterion("facilities", desired.length === 0 ? null : (100 * matchedDesired) / desired.length, project,
      desired.length === 0 ? "Tidak ada fasilitas tambahan yang dipilih." : `${matchedDesired} dari ${desired.length} fasilitas pilihan tersedia.`),
    criterion("environment", option.environmentRating === null ? null : option.environmentRating * 20, project,
      option.environmentRating === null ? "Penilaian lingkungan belum tersedia." : `Penilaian lingkungan ${option.environmentRating} dari 5.`),
    criterion("ruleFit", knownRules.length === 0 ? null : (100 * matchedRules) / knownRules.length, project,
      knownRules.length === 0 ? "Kesesuaian aturan belum dapat dihitung." : `${matchedRules} dari ${knownRules.length} aturan yang diketahui sesuai.`),
  ];

  const scored = criteria.filter((item): item is CriterionResult & { score: number } => item.score !== null);
  const weightTotal = scored.reduce((total, item) => total + item.weight, 0);
  const score = weightTotal === 0 ? null : scored.reduce((total, item) => total + item.score * item.weight, 0) / weightTotal;
  const prioritized = [...criteria].sort((a, b) => b.weight - a.weight || criterionOrder.indexOf(a.key) - criterionOrder.indexOf(b.key));
  const strengths = prioritized.filter((item) => item.score !== null && item.score >= 75).slice(0, 2).map((item) => item.explanation);
  const mandatoryTradeoffs = [
    ...missingRequired.map((label) => `Belum memenuhi kebutuhan wajib: ${label}.`),
    ...unknownRequired.map((label) => `Perlu dikonfirmasi untuk kebutuhan wajib: ${label}.`),
  ];
  const criterionTradeoffs = prioritized.filter((item) => item.score === null || item.score < 60).map((item) => item.explanation);
  const tradeoffs = [...mandatoryTradeoffs, ...criterionTradeoffs].slice(0, 2);
  const eligible = missingRequired.length === 0 && unknownRequired.length === 0;

  // V-06: Hitung rentang skor (skenario pesimis vs optimis) saat ada data kriteria kosong
  const weightTotalAll = criteria.reduce((sum, item) => sum + item.weight, 0);
  const minSum = criteria.reduce((sum, item) => sum + (item.score ?? 0) * item.weight, 0);
  const maxSum = criteria.reduce((sum, item) => sum + (item.score ?? 100) * item.weight, 0);
  const minScore = weightTotalAll > 0 ? clamp(minSum / weightTotalAll) : 0;
  const maxScore = weightTotalAll > 0 ? clamp(maxSum / weightTotalAll) : 100;

  const hasMissingCriticalData = criteria.some(
    (item) => (item.key === "cost" || item.key === "commute") && item.score === null
  );
  const isTentative = hasMissingCriticalData;
  const scoreRange: ScoreRange = {
    min: Math.round(minScore),
    max: Math.round(maxScore),
  };

  const tentativeWarning = isTentative
    ? `Data penting belum lengkap (rentang estimasi ${scoreRange.min}% – ${scoreRange.max}%). Skor bersifat perkiraan sementara.`
    : null;

  const overview = !eligible
    ? `Pilihan ini belum memenuhi atau belum mengonfirmasi ${missingRequired.length + unknownRequired.length} kebutuhan wajib.`
    : score === null
    ? "Skor belum dapat dihitung karena data belum lengkap."
    : isTentative
    ? `Pilihan ini memiliki estimasi skor sementara ${Math.round(score)} dari 100 (rentang kemungkinan ${scoreRange.min}% – ${scoreRange.max}%).`
    : `Pilihan ini memiliki skor kecocokan ${Math.round(score)} dari 100 berdasarkan prioritas Anda.`;

  return {
    optionId: option.id,
    optionName: option.name,
    eligible,
    missingRequiredFacilities: missingRequired,
    unknownRequiredFacilities: unknownRequired,
    criteria,
    score,
    scoreRange,
    isTentative,
    tentativeWarning,
    savingsVsBudget,
    confidence: calculateConfidence(project, option),
    strengths,
    tradeoffs,
    overview,
  };
}

export function rankMatches(results: readonly MatchResult[]): MatchResult[] {
  return [...results].sort((a, b) => {
    // 1. Kelayakan kebutuhan wajib
    if (Number(b.eligible) !== Number(a.eligible)) {
      return Number(b.eligible) - Number(a.eligible);
    }
    // 2. Skor kecocokan
    const aScore = a.score ?? Number.NEGATIVE_INFINITY;
    const bScore = b.score ?? Number.NEGATIVE_INFINITY;
    if (Math.abs(bScore - aScore) >= 0.001) {
      return bScore - aScore;
    }
    // 3. Tingkat keyakinan data (confidence)
    if (confidenceRank[b.confidence] !== confidenceRank[a.confidence]) {
      return confidenceRank[b.confidence] - confidenceRank[a.confidence];
    }
    // 4. Data definitif didahulukan sebelum opsi tentatif jika skor mirip (V-06)
    if (Number(Boolean(a.isTentative)) !== Number(Boolean(b.isTentative))) {
      return Number(Boolean(a.isTentative)) - Number(Boolean(b.isTentative));
    }
    // 5. Tie-breaker penghematan anggaran bulanan (V-05)
    const aSavings = a.savingsVsBudget ?? -Infinity;
    const bSavings = b.savingsVsBudget ?? -Infinity;
    if (bSavings !== aSavings) {
      return bSavings - aSavings;
    }
    // 6. Nama dan ID
    return a.optionName.localeCompare(b.optionName, "id") || a.optionId.localeCompare(b.optionId);
  });
}

export function matchAndRank(project: ComparisonProject, options: readonly AccommodationOption[]): MatchResult[] {
  return rankMatches(options.map((option) => calculateMatch(project, option)));
}
