const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  currencyDisplay: "symbol",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const MAX_RUPIAH = 100_000_000_000;
export const MAX_FIELD_RUPIAH = 100_000_000;

export function isValidRupiah(value: number, max: number = MAX_RUPIAH): boolean {
  return Number.isSafeInteger(value) && value >= 0 && value <= max;
}

export function assertRupiah(value: number, max: number = MAX_RUPIAH): number {
  if (!isValidRupiah(value, max)) {
    throw new RangeError(`Nilai Rupiah harus berupa integer antara 0 dan ${max}.`);
  }
  return value;
}

export function formatRupiah(value: number): string {
  assertRupiah(value);
  return rupiahFormatter.format(value).replace(/\s/g, "");
}
