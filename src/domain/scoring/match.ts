import { calculateCost } from "@/domain/costing";
import type { AccommodationOption, Availability, ComparisonProject, Confidence, CriterionKey, CriterionResult, MatchResult } from "@/domain/entities";

const criterionOrder: readonly CriterionKey[] = ["cost", "commute", "facilities", "environment", "ruleFit"];
const confidenceRank: Readonly<Record<Confidence, number>> = { high: 3, medium: 2, low: 1 };

const clamp = (value: number): number => Math.min(100, Math.max(0, value));

function decliningScore(value: number, limit: number): number {
  if (limit <= 0) return value <= limit ? 100 : 0;
  return value <= limit ? 100 : clamp((100 * (2 * limit - value)) / limit);
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

  const criteria: CriterionResult[] = [
    criterion("cost", cost.hasUnknownMonthlyValues ? null : decliningScore(cost.knownMonthlyTotal, project.monthlyBudget), project,
      cost.hasUnknownMonthlyValues ? `Biaya bulanan belum lengkap: ${cost.unknownMonthlyFields.join(", ")}.` : cost.knownMonthlyTotal <= project.monthlyBudget ? "Total bulanan masih dalam anggaran Anda." : "Total bulanan melebihi anggaran Anda."),
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
  const overview = !eligible
    ? `Pilihan ini belum memenuhi atau belum mengonfirmasi ${missingRequired.length + unknownRequired.length} kebutuhan wajib.`
    : score === null ? "Skor belum dapat dihitung karena data belum lengkap." : `Pilihan ini memiliki skor kecocokan ${Math.round(score)} dari 100 berdasarkan prioritas Anda.`;

  return { optionId: option.id, optionName: option.name, eligible, missingRequiredFacilities: missingRequired, unknownRequiredFacilities: unknownRequired, criteria, score, confidence: calculateConfidence(project, option), strengths, tradeoffs, overview };
}

export function rankMatches(results: readonly MatchResult[]): MatchResult[] {
  return [...results].sort((a, b) => Number(b.eligible) - Number(a.eligible)
    || (b.score ?? Number.NEGATIVE_INFINITY) - (a.score ?? Number.NEGATIVE_INFINITY)
    || confidenceRank[b.confidence] - confidenceRank[a.confidence]
    || a.optionName.localeCompare(b.optionName, "id")
    || a.optionId.localeCompare(b.optionId));
}

export function matchAndRank(project: ComparisonProject, options: readonly AccommodationOption[]): MatchResult[] {
  return rankMatches(options.map((option) => calculateMatch(project, option)));
}
