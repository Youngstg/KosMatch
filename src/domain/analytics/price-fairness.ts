import { formatRupiah } from "@/lib/currency";

export interface PriceFairnessResult {
  readonly status: "below_market" | "fair" | "above_market";
  readonly statusLabel: string;
  readonly badgeColorClass: "good" | "info" | "warn";
  readonly medianAreaRent: number;
  readonly differenceVsMedian: number;
  readonly savingsMonthly: number | null;
  readonly confidence: "high" | "medium" | "low";
  readonly explanation: string;
}

/**
 * Baseline statistik harga sewa bulanan kos per area kampus (Median & IQR).
 * Dihitung dari sampel sebaran kos terverifikasi di kota/kampus pilot.
 */
const AREA_RENT_BASELINES: Record<
  string,
  Record<string, { readonly median: number; readonly q1: number; readonly q3: number }>
> = {
  "ui-depok": {
    kukusan: { median: 1350000, q1: 1000000, q3: 1800000 },
    kutek: { median: 1400000, q1: 1100000, q3: 1850000 },
    pocin: { median: 1500000, q1: 1200000, q3: 1900000 },
    margonda: { median: 2200000, q1: 1750000, q3: 3000000 },
    bina_vokasi: { median: 1450000, q1: 1100000, q3: 1850000 },
    default: { median: 1500000, q1: 1100000, q3: 2000000 },
  },
  "unand-limau-manis": {
    "pasar baru": { median: 750000, q1: 550000, q3: 950000 },
    "limau manis": { median: 700000, q1: 500000, q3: 900000 },
    kapalo_koto: { median: 650000, q1: 500000, q3: 850000 },
    kuranji: { median: 800000, q1: 600000, q3: 1100000 },
    default: { median: 750000, q1: 550000, q3: 950000 },
  },
  "itera-lampung": {
    "way huwi": { median: 800000, q1: 600000, q3: 1100000 },
    jatiagung: { median: 750000, q1: 550000, q3: 1000000 },
    sukarame: { median: 850000, q1: 650000, q3: 1200000 },
    default: { median: 800000, q1: 600000, q3: 1100000 },
  },
};

const GLOBAL_DEFAULT_BASELINE = { median: 1200000, q1: 850000, q3: 1700000 };

/**
 * Menilai kewajaran harga sewa bulanan kos terhadap median area & fasilitas.
 * (Tahap E Roadmap ML/DL: Indikator Kewajaran Harga).
 */
export function evaluatePriceFairness(
  rentMonthly: number,
  campusId: string,
  area: string = "",
  hasAc: boolean = false,
  hasPrivateBathroom: boolean = false
): PriceFairnessResult {
  const campusBaselines = AREA_RENT_BASELINES[campusId] ?? { default: GLOBAL_DEFAULT_BASELINE };
  const lowerArea = area.toLowerCase();

  // Cari baseline area terdekat
  let matchedBaseline = campusBaselines.default ?? GLOBAL_DEFAULT_BASELINE;
  let detectedAreaName = "area kampus";

  for (const [key, value] of Object.entries(campusBaselines)) {
    if (key !== "default" && lowerArea.includes(key)) {
      matchedBaseline = value;
      detectedAreaName = key.toUpperCase();
      break;
    }
  }

  // Penyesuaian nilai wajar berdasarkan fasilitas utama (AC & KM Dalam bernilai premium)
  let expectedMedian = matchedBaseline.median;
  if (hasAc) expectedMedian += 300000;
  if (hasPrivateBathroom) expectedMedian += 150000;

  const diff = rentMonthly - expectedMedian;
  const tolerance = (matchedBaseline.q3 - matchedBaseline.q1) * 0.25; // 25% dari rentang interkuartil

  if (diff < -tolerance) {
    const savings = Math.abs(diff);
    return {
      status: "below_market",
      statusLabel: `Hemat ${formatRupiah(savings)}/bln vs Area`,
      badgeColorClass: "good",
      medianAreaRent: expectedMedian,
      differenceVsMedian: diff,
      savingsMonthly: savings,
      confidence: "high",
      explanation: `Harga ${formatRupiah(rentMonthly)}/bln lebih hemat ${formatRupiah(savings)} dibanding estimasi wajar ${detectedAreaName} (${formatRupiah(expectedMedian)}).`,
    };
  }

  if (diff > tolerance) {
    return {
      status: "above_market",
      statusLabel: "Di Atas Median Area",
      badgeColorClass: "warn",
      medianAreaRent: expectedMedian,
      differenceVsMedian: diff,
      savingsMonthly: null,
      confidence: "high",
      explanation: `Harga ${formatRupiah(rentMonthly)}/bln berada di atas estimasi median ${detectedAreaName} (${formatRupiah(expectedMedian)}). Pastikan spesifikasi sebanding.`,
    };
  }

  return {
    status: "fair",
    statusLabel: "Harga Wajar Area",
    badgeColorClass: "info",
    medianAreaRent: expectedMedian,
    differenceVsMedian: diff,
    savingsMonthly: null,
    confidence: "high",
    explanation: `Harga ${formatRupiah(rentMonthly)}/bln sebanding dengan median fasilitas serupa di ${detectedAreaName} (${formatRupiah(expectedMedian)}).`,
  };
}
