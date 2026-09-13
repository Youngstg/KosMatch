export type Importance = 1 | 2 | 3 | 4 | 5;
export type CriterionKey = "cost" | "commute" | "facilities" | "environment" | "ruleFit";
export type DataOrigin = "confirmed" | "estimated" | "unknown";
export type RequirementLevel = "required" | "desired";
export type VerificationStatus = "unverified" | "confirmed" | "changed";
export type Availability = boolean | "unknown";
export type Confidence = "high" | "medium" | "low";

export type MoneyValue =
  | Readonly<{ amount: number; origin: Exclude<DataOrigin, "unknown"> }>
  | Readonly<{ amount: null; origin: "unknown" }>;

export interface FacilityPreference {
  readonly code: string;
  readonly label: string;
  readonly level: RequirementLevel;
}

export interface RulePreference {
  readonly code: string;
  readonly label: string;
  readonly expectedValue: boolean;
}

export interface VerificationQuestion {
  readonly id: string;
  readonly question: string;
  readonly status: VerificationStatus;
}

export interface ComparisonProject {
  readonly id: string;
  readonly name: string;
  readonly destinationLabel: string;
  readonly monthlyBudget: number;
  readonly maxOneWayCommuteMinutes: number;
  readonly commuteDaysPerMonth: number;
  readonly weights: Readonly<Record<CriterionKey, Importance>>;
  readonly facilityPreferences: readonly FacilityPreference[];
  readonly rulePreferences: readonly RulePreference[];
  readonly favoriteOptionId: string | null;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export interface AccommodationOption {
  readonly id: string;
  readonly projectId: string;
  readonly name: string;
  readonly area: string;
  readonly sourceUrl: string | null;
  readonly lastCheckedAt: string | null;
  readonly rent: MoneyValue;
  readonly electricity: MoneyValue;
  readonly water: MoneyValue;
  readonly internet: MoneyValue;
  readonly laundry: MoneyValue;
  readonly otherRecurring: MoneyValue;
  readonly deposit: MoneyValue;
  readonly administrationFee: MoneyValue;
  readonly oneWayCommuteMinutes: number | null;
  readonly roundTripTransportCost: MoneyValue;
  readonly facilityCodes: readonly string[];
  readonly facilityValues: Readonly<Record<string, Availability>>;
  readonly ruleValues: Readonly<Record<string, Availability>>;
  readonly environmentRating: 1 | 2 | 3 | 4 | 5 | null;
  readonly notes: string;
  readonly pros: readonly string[];
  readonly concerns: readonly string[];
  readonly verificationQuestions: readonly VerificationQuestion[];
  readonly shortlisted: boolean;
  readonly createdAt: string;
  readonly updatedAt: string;
}

export type MonthlyCostField = "rent" | "electricity" | "water" | "internet" | "laundry" | "otherRecurring" | "monthlyTransport";
export type MoveInCostField = "deposit" | "administrationFee" | "firstRentPayment";

export interface CostResult {
  readonly knownMonthlyTotal: number;
  readonly hasUnknownMonthlyValues: boolean;
  readonly unknownMonthlyFields: readonly MonthlyCostField[];
  readonly monthlyTransport: number | null;
  readonly knownMoveInTotal: number;
  readonly unknownMoveInFields: readonly MoveInCostField[];
}

export interface CriterionResult {
  readonly key: CriterionKey;
  readonly score: number | null;
  readonly weight: Importance;
  readonly explanation: string;
}

export interface MatchResult {
  readonly optionId: string;
  readonly optionName: string;
  readonly eligible: boolean;
  readonly missingRequiredFacilities: readonly string[];
  readonly unknownRequiredFacilities: readonly string[];
  readonly criteria: readonly CriterionResult[];
  readonly score: number | null;
  readonly confidence: Confidence;
  readonly strengths: readonly string[];
  readonly tradeoffs: readonly string[];
  readonly overview: string;
}
