import { formatRupiah } from "@/lib/currency";

export interface FoodCostEstimate {
  readonly clusterType: "warung_hemat" | "kuliner_mahasiswa" | "kafe_komersial";
  readonly clusterLabel: string;
  readonly costPerMealMedian: number;
  readonly costPerMealRange: { readonly min: number; readonly max: number };
  readonly dailyCostEstimate: { readonly min: number; readonly median: number; readonly max: number };
  readonly monthlyCostEstimate: { readonly min: number; readonly median: number; readonly max: number };
  readonly explanation: string;
}

/**
 * Data patokan biaya makan per porsi mahasiswa per klaster kampus & area.
 * Berdasarkan survei lapangan harga makan harian di sekitar kampus pilot (UI, UNAND, ITERA).
 */
const CAMPUS_FOOD_BENCHMARKS: Record<
  string,
  {
    readonly warungMedian: number;
    readonly warungRange: { readonly min: number; readonly max: number };
    readonly standardMedian: number;
    readonly standardRange: { readonly min: number; readonly max: number };
    readonly commercialMedian: number;
    readonly commercialRange: { readonly min: number; readonly max: number };
  }
> = {
  "ui-depok": {
    warungMedian: 15000,
    warungRange: { min: 12000, max: 20000 },
    standardMedian: 22000,
    standardRange: { min: 18000, max: 28000 },
    commercialMedian: 35000,
    commercialRange: { min: 25000, max: 50000 },
  },
  "unand-limau-manis": {
    warungMedian: 12000,
    warungRange: { min: 10000, max: 15000 },
    standardMedian: 16000,
    standardRange: { min: 13000, max: 22000 },
    commercialMedian: 25000,
    commercialRange: { min: 20000, max: 35000 },
  },
  "itera-lampung": {
    warungMedian: 12000,
    warungRange: { min: 10000, max: 16000 },
    standardMedian: 17000,
    standardRange: { min: 14000, max: 24000 },
    commercialMedian: 27000,
    commercialRange: { min: 20000, max: 38000 },
  },
};

const DEFAULT_BENCHMARK = {
  warungMedian: 14000,
  warungRange: { min: 11000, max: 18000 },
  standardMedian: 18000,
  standardRange: { min: 15000, max: 25000 },
  commercialMedian: 30000,
  commercialRange: { min: 22000, max: 42000 },
};

/**
 * Mengestimasi biaya makan bulanan di sekitar kos berdasarkan:
 * 1. Kampus & Area (misal: Kukusan vs Margonda di UI, Pasar Baru di UNAND, Way Huwi di ITERA)
 * 2. Kerapatan dan jarak warung makan / tempat kuliner terdekat
 */
export function estimateFoodCost(
  campusId: string,
  area: string = "",
  foodPoiCount: number = 5,
  nearestFoodMeters: number | null = 100
): FoodCostEstimate {
  const benchmark = CAMPUS_FOOD_BENCHMARKS[campusId] ?? DEFAULT_BENCHMARK;
  const lowerArea = area.toLowerCase();

  // Deteksi klaster berdasarkan area dominan
  let clusterType: "warung_hemat" | "kuliner_mahasiswa" | "kafe_komersial" = "kuliner_mahasiswa";
  let clusterLabel = "Kuliner Mahasiswa Standar";

  if (
    lowerArea.includes("kukusan") ||
    lowerArea.includes("kutek") ||
    lowerArea.includes("pocin") ||
    lowerArea.includes("pasar baru") ||
    lowerArea.includes("limau manis") ||
    lowerArea.includes("way huwi") ||
    lowerArea.includes("jatiagung") ||
    foodPoiCount >= 6
  ) {
    clusterType = "warung_hemat";
    clusterLabel = "Sentra Warung Hemat Mahasiswa";
  } else if (lowerArea.includes("margonda") || lowerArea.includes("mall") || lowerArea.includes("raya")) {
    clusterType = "kafe_komersial";
    clusterLabel = "Kawasan Kuliner & Kafe Modern";
  }

  // Pilih biaya per porsi berdasarkan klaster
  let costPerMealMedian: number;
  let costPerMealRange: { min: number; max: number };

  if (clusterType === "warung_hemat") {
    costPerMealMedian = benchmark.warungMedian;
    costPerMealRange = benchmark.warungRange;
  } else if (clusterType === "kafe_komersial") {
    costPerMealMedian = benchmark.commercialMedian;
    costPerMealRange = benchmark.commercialRange;
  } else {
    costPerMealMedian = benchmark.standardMedian;
    costPerMealRange = benchmark.standardRange;
  }

  // Asumsi standar mahasiswa: 2 kali makan berat + 1 kali sarapan/snack ringan (~2.5 porsi per hari)
  const MEALS_PER_DAY = 2.5;
  const DAYS_PER_MONTH = 30;

  const dailyMin = Math.round(costPerMealRange.min * 2);
  const dailyMedian = Math.round(costPerMealMedian * MEALS_PER_DAY);
  const dailyMax = Math.round(costPerMealRange.max * 3);

  const monthlyMin = dailyMin * DAYS_PER_MONTH;
  const monthlyMedian = dailyMedian * DAYS_PER_MONTH;
  const monthlyMax = dailyMax * DAYS_PER_MONTH;

  const distanceText =
    nearestFoodMeters !== null
      ? nearestFoodMeters <= 100
        ? "tepat di depan/samping kos (<100m)"
        : `±${nearestFoodMeters}m dari kos`
      : "dalam radius jalan kaki";

  const areaPrefix = area.trim() ? `Area ${area.trim()}: ` : "";
  const explanation = `${areaPrefix}${clusterLabel} (${foodPoiCount} titik makan ${distanceText}), rata-rata ${formatRupiah(costPerMealMedian)}/porsi.`;

  return {
    clusterType,
    clusterLabel,
    costPerMealMedian,
    costPerMealRange,
    dailyCostEstimate: { min: dailyMin, median: dailyMedian, max: dailyMax },
    monthlyCostEstimate: { min: monthlyMin, median: monthlyMedian, max: monthlyMax },
    explanation,
  };
}
