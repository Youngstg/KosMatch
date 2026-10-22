import { describe, expect, it } from "vitest";
import { evaluatePriceFairness } from "@/domain/analytics/price-fairness";

describe("Price Fairness Evaluator (Tahap E Roadmap ML/DL)", () => {
  it("mendeteksi kos lebih hemat dari median Kukusan UI", () => {
    const result = evaluatePriceFairness(950000, "ui-depok", "Kukusan Teknik", false, false);
    expect(result.status).toBe("below_market");
    expect(result.savingsMonthly).toBeGreaterThan(0);
    expect(result.statusLabel).toContain("Hemat");
    expect(result.badgeColorClass).toBe("good");
  });

  it("mendeteksi harga wajar dengan fasilitas AC & KM Dalam di Margonda", () => {
    // Expected: Margonda (2.2jt) + AC (300k) + KM Dalam (150k) = 2.65jt
    const result = evaluatePriceFairness(2600000, "ui-depok", "Margonda Raya", true, true);
    expect(result.status).toBe("fair");
    expect(result.statusLabel).toBe("Harga Wajar Area");
    expect(result.badgeColorClass).toBe("info");
  });

  it("mendeteksi harga di atas median area UNAND", () => {
    // Pasar Baru baseline: 750k, tanpa AC
    const result = evaluatePriceFairness(1300000, "unand-limau-manis", "Pasar Baru", false, false);
    expect(result.status).toBe("above_market");
    expect(result.statusLabel).toBe("Di Atas Median Area");
    expect(result.badgeColorClass).toBe("warn");
  });
});
