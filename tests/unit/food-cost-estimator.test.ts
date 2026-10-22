import { describe, expect, it } from "vitest";
import { estimateFoodCost } from "@/domain/costing/food-cost-estimator";

describe("Food Cost Estimator (Tahap B Roadmap ML/DL)", () => {
  it("menghitung estimasi biaya makan warung hemat untuk area Kukusan UI", () => {
    const result = estimateFoodCost("ui-depok", "Kukusan Teknik", 8, 80);
    expect(result.clusterType).toBe("warung_hemat");
    expect(result.costPerMealMedian).toBe(15000);
    expect(result.dailyCostEstimate.median).toBe(37500); // 15000 * 2.5
    expect(result.monthlyCostEstimate.median).toBe(1125000); // 37500 * 30
    expect(result.explanation).toContain("Kukusan");
  });

  it("menghitung estimasi biaya makan komersial untuk area Margonda UI", () => {
    const result = estimateFoodCost("ui-depok", "Margonda Raya", 2, 200);
    expect(result.clusterType).toBe("kafe_komersial");
    expect(result.costPerMealMedian).toBe(35000);
    expect(result.monthlyCostEstimate.median).toBeGreaterThan(2000000);
  });

  it("menghitung estimasi untuk UNAND Limau Manis dengan harga lokal Padang", () => {
    const result = estimateFoodCost("unand-limau-manis", "Pasar Baru", 10, 50);
    expect(result.clusterType).toBe("warung_hemat");
    expect(result.costPerMealMedian).toBe(12000);
    expect(result.monthlyCostEstimate.median).toBe(900000); // 12000 * 2.5 * 30
  });

  it("menghitung estimasi untuk ITERA Lampung", () => {
    const result = estimateFoodCost("itera-lampung", "Way Huwi", 5, 120);
    expect(result.costPerMealMedian).toBe(12000);
    expect(result.monthlyCostEstimate.min).toBeGreaterThan(0);
    expect(result.monthlyCostEstimate.max).toBeGreaterThan(result.monthlyCostEstimate.min);
  });
});
