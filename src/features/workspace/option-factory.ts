import type { AccommodationOption, MoneyValue } from "@/domain/entities";
import { FACILITY_DEFINITIONS, RULE_DEFINITIONS } from "@/domain/validation";

export function unknownMoney(): MoneyValue {
  return { amount: null, origin: "unknown" };
}

export function createEmptyOption(projectId: string): AccommodationOption {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(), projectId, name: "", area: "", sourceUrl: null, lastCheckedAt: null,
    rent: unknownMoney(), electricity: unknownMoney(), water: unknownMoney(), internet: unknownMoney(), laundry: unknownMoney(), otherRecurring: unknownMoney(),
    deposit: unknownMoney(), administrationFee: unknownMoney(), oneWayCommuteMinutes: null, commuteOrigin: null, location: null,
    roundTripTransportCost: unknownMoney(),
    facilityCodes: [],
    facilityValues: Object.fromEntries(Object.keys(FACILITY_DEFINITIONS).map((code) => [code, "unknown"])),
    ruleValues: Object.fromEntries(Object.keys(RULE_DEFINITIONS).map((code) => [code, "unknown"])),
    environmentRating: null, notes: "", pros: [], concerns: [], verificationQuestions: [], shortlisted: false,
    createdAt: now, updatedAt: now,
  };
}
