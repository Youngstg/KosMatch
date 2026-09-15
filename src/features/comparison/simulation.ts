import { calculateCost } from "@/domain/costing";
import type {
  AccommodationOption,
  ComparisonProject,
  CostResult,
  MoneyValue,
} from "@/domain/entities";

export const SIMULATABLE_RECURRING_FIELDS = [
  "electricity",
  "water",
  "internet",
  "laundry",
  "otherRecurring",
] as const;

export type SimulatableRecurringField = (typeof SIMULATABLE_RECURRING_FIELDS)[number];

export interface RecurringItemSimulation {
  readonly field: SimulatableRecurringField;
  readonly value: MoneyValue;
}

export interface CostSimulationChanges {
  readonly commuteDaysPerMonth?: number;
  readonly roundTripTransportCost?: MoneyValue;
  readonly recurringItem?: RecurringItemSimulation;
}

export interface CostSimulationAssumptions {
  readonly commuteDaysPerMonth: number;
  readonly roundTripTransportCost: MoneyValue;
  readonly recurringItem: RecurringItemSimulation | null;
}

export interface CostSimulationResult {
  readonly currentEstimate: CostResult;
  readonly simulatedEstimate: CostResult;
  readonly differencePerMonth: number;
  readonly differenceOverSixMonths: number;
  readonly differenceOverTwelveMonths: number;
  readonly differenceUsesMinimumEstimate: boolean;
  readonly assumptions: CostSimulationAssumptions;
  readonly simulatedProject: ComparisonProject;
  readonly simulatedOption: AccommodationOption;
}

function cloneMoneyValue(value: MoneyValue): MoneyValue {
  return { ...value };
}

function cloneProject(project: ComparisonProject): ComparisonProject {
  return {
    ...project,
    weights: { ...project.weights },
    facilityPreferences: project.facilityPreferences.map((preference) => ({ ...preference })),
    rulePreferences: project.rulePreferences.map((preference) => ({ ...preference })),
  };
}

function cloneOption(option: AccommodationOption): AccommodationOption {
  return {
    ...option,
    rent: cloneMoneyValue(option.rent),
    electricity: cloneMoneyValue(option.electricity),
    water: cloneMoneyValue(option.water),
    internet: cloneMoneyValue(option.internet),
    laundry: cloneMoneyValue(option.laundry),
    otherRecurring: cloneMoneyValue(option.otherRecurring),
    deposit: cloneMoneyValue(option.deposit),
    administrationFee: cloneMoneyValue(option.administrationFee),
    roundTripTransportCost: cloneMoneyValue(option.roundTripTransportCost),
    facilityCodes: [...option.facilityCodes],
    facilityValues: { ...option.facilityValues },
    ruleValues: { ...option.ruleValues },
    pros: [...option.pros],
    concerns: [...option.concerns],
    verificationQuestions: option.verificationQuestions.map((question) => ({ ...question })),
  };
}

function applyRecurringItem(
  option: AccommodationOption,
  recurringItem: RecurringItemSimulation | undefined,
): AccommodationOption {
  if (recurringItem === undefined) return option;

  const value = cloneMoneyValue(recurringItem.value);
  switch (recurringItem.field) {
    case "electricity":
      return { ...option, electricity: value };
    case "water":
      return { ...option, water: value };
    case "internet":
      return { ...option, internet: value };
    case "laundry":
      return { ...option, laundry: value };
    case "otherRecurring":
      return { ...option, otherRecurring: value };
  }
}

/**
 * Calculates a temporary cost scenario. The returned project and option are
 * detached copies; persisting them remains an explicit caller action.
 */
export function simulateCost(
  project: ComparisonProject,
  option: AccommodationOption,
  changes: CostSimulationChanges,
): CostSimulationResult {
  const currentEstimate = calculateCost(project, option);
  const simulatedProject: ComparisonProject = {
    ...cloneProject(project),
    commuteDaysPerMonth: changes.commuteDaysPerMonth ?? project.commuteDaysPerMonth,
  };
  const optionWithTransport: AccommodationOption = {
    ...cloneOption(option),
    roundTripTransportCost:
      changes.roundTripTransportCost === undefined
        ? cloneMoneyValue(option.roundTripTransportCost)
        : cloneMoneyValue(changes.roundTripTransportCost),
  };
  const simulatedOption = applyRecurringItem(optionWithTransport, changes.recurringItem);
  const simulatedEstimate = calculateCost(simulatedProject, simulatedOption);
  const differencePerMonth =
    simulatedEstimate.knownMonthlyTotal - currentEstimate.knownMonthlyTotal;

  return {
    currentEstimate,
    simulatedEstimate,
    differencePerMonth,
    differenceOverSixMonths: differencePerMonth * 6,
    differenceOverTwelveMonths: differencePerMonth * 12,
    differenceUsesMinimumEstimate:
      currentEstimate.hasUnknownMonthlyValues || simulatedEstimate.hasUnknownMonthlyValues,
    assumptions: {
      commuteDaysPerMonth: simulatedProject.commuteDaysPerMonth,
      roundTripTransportCost: cloneMoneyValue(simulatedOption.roundTripTransportCost),
      recurringItem:
        changes.recurringItem === undefined
          ? null
          : {
              field: changes.recurringItem.field,
              value: cloneMoneyValue(changes.recurringItem.value),
            },
    },
    simulatedProject,
    simulatedOption,
  };
}
