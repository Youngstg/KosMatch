import type { AccommodationOption, ComparisonProject, CostResult, MoneyValue, MonthlyCostField, MoveInCostField } from "@/domain/entities";
import { assertRupiah } from "@/lib/currency";

const monthlyFields = ["rent", "electricity", "water", "internet", "laundry", "otherRecurring"] as const;
const moveInFields = ["deposit", "administrationFee"] as const;

function knownAmount(value: MoneyValue): number | null {
  if (value.origin === "unknown" || value.amount === null) return null;
  return assertRupiah(value.amount);
}

export function calculateCost(project: ComparisonProject, option: AccommodationOption): CostResult {
  if (!Number.isInteger(project.commuteDaysPerMonth) || project.commuteDaysPerMonth < 0 || project.commuteDaysPerMonth > 31) {
    throw new RangeError("Hari perjalanan per bulan harus berupa integer antara 0 dan 31.");
  }

  const unknownMonthlyFields: MonthlyCostField[] = [];
  let knownMonthlyTotal = 0;
  for (const field of monthlyFields) {
    const amount = knownAmount(option[field]);
    if (amount === null) unknownMonthlyFields.push(field);
    else knownMonthlyTotal += amount;
  }

  const transportPerTrip = knownAmount(option.roundTripTransportCost);
  const monthlyTransport = transportPerTrip === null ? null : assertRupiah(transportPerTrip * project.commuteDaysPerMonth);
  if (monthlyTransport === null) unknownMonthlyFields.push("monthlyTransport");
  else knownMonthlyTotal += monthlyTransport;

  const unknownMoveInFields: MoveInCostField[] = [];
  let knownMoveInTotal = 0;
  for (const field of moveInFields) {
    const amount = knownAmount(option[field]);
    if (amount === null) unknownMoveInFields.push(field);
    else knownMoveInTotal += amount;
  }
  const firstRent = knownAmount(option.rent);
  if (firstRent === null) unknownMoveInFields.push("firstRentPayment");
  else knownMoveInTotal += firstRent;

  return {
    knownMonthlyTotal: assertRupiah(knownMonthlyTotal),
    hasUnknownMonthlyValues: unknownMonthlyFields.length > 0,
    unknownMonthlyFields,
    monthlyTransport,
    knownMoveInTotal: assertRupiah(knownMoveInTotal),
    unknownMoveInFields,
  };
}
