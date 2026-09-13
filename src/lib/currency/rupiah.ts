const rupiahFormatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  currencyDisplay: "symbol",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const MAX_RUPIAH = 100_000_000_000;

export function isValidRupiah(value: number): boolean {
  return Number.isSafeInteger(value) && value >= 0 && value <= MAX_RUPIAH;
}

export function assertRupiah(value: number): number {
  if (!isValidRupiah(value)) {
    throw new RangeError(`Nilai Rupiah harus berupa integer antara 0 dan ${MAX_RUPIAH}.`);
  }
  return value;
}

export function formatRupiah(value: number): string {
  assertRupiah(value);
  return rupiahFormatter.format(value).replace(/\s/g, "");
}
