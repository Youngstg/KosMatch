import { describe, expect, it } from "vitest";

import { MAX_FIELD_RUPIAH, MAX_RUPIAH, assertRupiah, formatRupiah, isValidRupiah } from "@/lib/currency";

describe("Rupiah", () => {
  it("memformat integer tanpa desimal atau spasi", () => {
    expect(formatRupiah(1_850_000)).toBe("Rp1.850.000");
    expect(formatRupiah(0)).toBe("Rp0");
  });

  it("menerima hanya integer non-negatif dalam batas aman domain", () => {
    expect(isValidRupiah(MAX_RUPIAH)).toBe(true);
    expect(isValidRupiah(MAX_FIELD_RUPIAH, MAX_FIELD_RUPIAH)).toBe(true);
    expect(isValidRupiah(MAX_FIELD_RUPIAH + 1, MAX_FIELD_RUPIAH)).toBe(false);
    expect(isValidRupiah(-1)).toBe(false);
    expect(isValidRupiah(1.5)).toBe(false);
    expect(() => assertRupiah(MAX_RUPIAH + 1)).toThrow(RangeError);
    expect(() => assertRupiah(MAX_FIELD_RUPIAH + 1, MAX_FIELD_RUPIAH)).toThrow(RangeError);
  });
});
