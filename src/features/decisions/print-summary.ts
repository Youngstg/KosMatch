import { calculateCost } from "@/domain/costing";
import type {
  AccommodationOption,
  ComparisonProject,
  CostResult,
  CriterionKey,
  Importance,
  MatchResult,
  VerificationQuestion,
} from "@/domain/entities";
import { calculateMatch } from "@/domain/scoring";

export const PRINT_SUMMARY_DISCLAIMER =
  "Ringkasan ini merupakan estimasi berdasarkan input dan prioritas pengguna, bukan jaminan kualitas, harga, ketersediaan, atau kecocokan kos. Periksa kembali informasi kepada pemilik kos sebelum memutuskan.";

export interface PrintSummaryPrivacy {
  readonly includeSourceUrls?: boolean;
  readonly includePrivateNotes?: boolean;
}

export interface BuildPrintSummaryInput {
  readonly project: ComparisonProject;
  readonly options: readonly AccommodationOption[];
  readonly generatedAt: string;
  readonly privacy?: PrintSummaryPrivacy;
}

export interface PrintProjectSummary {
  readonly id: string;
  readonly name: string;
  readonly destinationLabel: string;
  readonly monthlyBudget: number;
  readonly maxOneWayCommuteMinutes: number;
  readonly commuteDaysPerMonth: number;
  readonly weights: Readonly<Record<CriterionKey, Importance>>;
  readonly requiredFacilities: readonly string[];
  readonly desiredFacilities: readonly string[];
}

export interface PrintOptionSummary {
  readonly id: string;
  readonly name: string;
  readonly area: string;
  readonly lastCheckedAt: string | null;
  readonly shortlisted: boolean;
  readonly favorite: boolean;
  readonly cost: CostResult;
  readonly match: MatchResult;
  readonly pros: readonly string[];
  readonly concerns: readonly string[];
  readonly verificationQuestions: readonly VerificationQuestion[];
  readonly sourceUrl?: string | null;
  readonly notes?: string;
}

export interface PrintSummaryData {
  readonly generatedAt: string;
  readonly disclaimer: string;
  readonly privacy: Readonly<{
    includeSourceUrls: boolean;
    includePrivateNotes: boolean;
  }>;
  readonly project: PrintProjectSummary;
  readonly options: readonly PrintOptionSummary[];
}

function copyMatchResult(result: MatchResult): MatchResult {
  return {
    ...result,
    missingRequiredFacilities: [...result.missingRequiredFacilities],
    unknownRequiredFacilities: [...result.unknownRequiredFacilities],
    criteria: result.criteria.map((criterion) => ({ ...criterion })),
    strengths: [...result.strengths],
    tradeoffs: [...result.tradeoffs],
  };
}

function copyCostResult(result: CostResult): CostResult {
  return {
    ...result,
    unknownMonthlyFields: [...result.unknownMonthlyFields],
    unknownMoveInFields: [...result.unknownMoveInFields],
  };
}

/** Builds serializable print data without source URLs or private notes by default. */
export function buildPrintSummary({
  project,
  options,
  generatedAt,
  privacy,
}: BuildPrintSummaryInput): PrintSummaryData {
  if (generatedAt.trim().length === 0) {
    throw new RangeError("Waktu pembuatan ringkasan tidak boleh kosong.");
  }
  const unrelatedOption = options.find((option) => option.projectId !== project.id);
  if (unrelatedOption !== undefined) {
    throw new RangeError(
      `Pilihan ${unrelatedOption.id} bukan bagian dari proyek ${project.id}.`,
    );
  }

  const includeSourceUrls = privacy?.includeSourceUrls ?? false;
  const includePrivateNotes = privacy?.includePrivateNotes ?? false;
  const optionSummaries = options.map((option): PrintOptionSummary => {
    const common: PrintOptionSummary = {
      id: option.id,
      name: option.name,
      area: option.area,
      lastCheckedAt: option.lastCheckedAt,
      shortlisted: option.shortlisted,
      favorite: project.favoriteOptionId === option.id,
      cost: copyCostResult(calculateCost(project, option)),
      match: copyMatchResult(calculateMatch(project, option)),
      pros: [...option.pros],
      concerns: [...option.concerns],
      verificationQuestions: option.verificationQuestions.map((question) => ({
        ...question,
      })),
    };

    return {
      ...common,
      ...(includeSourceUrls ? { sourceUrl: option.sourceUrl } : {}),
      ...(includePrivateNotes ? { notes: option.notes } : {}),
    };
  });

  return {
    generatedAt,
    disclaimer: PRINT_SUMMARY_DISCLAIMER,
    privacy: { includeSourceUrls, includePrivateNotes },
    project: {
      id: project.id,
      name: project.name,
      destinationLabel: project.destinationLabel,
      monthlyBudget: project.monthlyBudget,
      maxOneWayCommuteMinutes: project.maxOneWayCommuteMinutes,
      commuteDaysPerMonth: project.commuteDaysPerMonth,
      weights: { ...project.weights },
      requiredFacilities: project.facilityPreferences
        .filter((preference) => preference.level === "required")
        .map((preference) => preference.label),
      desiredFacilities: project.facilityPreferences
        .filter((preference) => preference.level === "desired")
        .map((preference) => preference.label),
    },
    options: optionSummaries,
  };
}
