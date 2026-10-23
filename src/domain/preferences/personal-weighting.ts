import type { CriterionKey } from "@/domain/entities/types";

export interface PairwiseOption {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly criteriaScores: Record<CriterionKey, number>;
  readonly highlights: readonly string[];
}

export interface PairwiseScenario {
  readonly id: string;
  readonly tradeOffTitle: string;
  readonly contextText: string;
  readonly optionA: PairwiseOption;
  readonly optionB: PairwiseOption;
}

export interface PairwiseChoice {
  readonly scenarioId: string;
  readonly selectedOption: "A" | "B";
}

export interface PersonaProfile {
  readonly title: string;
  readonly description: string;
  readonly primaryCriterion: CriterionKey;
  readonly badgeColor: string;
}

export interface BradleyTerryResult {
  readonly weights: Record<CriterionKey, number>;
  readonly persona: PersonaProfile;
  readonly rawCoefficients: Record<CriterionKey, number>;
  readonly confidenceScore: number; // 0 - 100
  readonly explanation: string;
}

export const CRITERION_KEYS: readonly CriterionKey[] = [
  "cost",
  "commute",
  "facilities",
  "environment",
  "ruleFit",
];

export const CRITERION_LABELS: Record<CriterionKey, string> = {
  cost: "Biaya Total",
  commute: "Waktu Tempuh & Lokasi",
  facilities: "Fasilitas Kamar",
  environment: "Lingkungan & Fasilitas Sekitar",
  ruleFit: "Aturan & Fleksibilitas Kos",
};

/**
 * 5 Skenario A-vs-B standar untuk mahasiswa pencari kos di Indonesia.
 * Dirancang untuk menguji trade-off klasik:
 * 1. Biaya vs Jarak/Waktu Tempuh
 * 2. Fasilitas Kamar vs Biaya
 * 3. Ketenangan Lingkungan vs Akses Cepat Jalan Raya
 * 4. Aturan/Jam Malam 24 Jam vs Biaya
 * 5. Fasilitas Mewah vs Kemudahan Warung/Minimarket Sekitar
 */
export const DEFAULT_PAIRWISE_SCENARIOS: readonly PairwiseScenario[] = [
  {
    id: "sc-1",
    tradeOffTitle: "Biaya vs Waktu Tempuh",
    contextText: "Pilih mana yang lebih penting bagi Anda jika harus memilih:",
    optionA: {
      id: "opt-1a",
      title: "Kos Sangat Dekat Kampus",
      description: "Jalan kaki hanya 3 menit ke gerbang kampus, namun sewa Rp 1.650.000/bln.",
      criteriaScores: { cost: 45, commute: 98, facilities: 70, environment: 70, ruleFit: 70 },
      highlights: ["3 mnt jalan kaki", "Hemat ongkos harian", "Harga lebih tinggi"],
    },
    optionB: {
      id: "opt-1b",
      title: "Kos Hemat Terjangkau",
      description: "Harga sewa Rp 850.000/bln, namun butuh jalan 20 menit atau naik angkot.",
      criteriaScores: { cost: 95, commute: 42, facilities: 70, environment: 70, ruleFit: 70 },
      highlights: ["Sangat hemat Rp 850rb", "20 mnt perjalanan", "Bisa nabung lebih banyak"],
    },
  },
  {
    id: "sc-2",
    tradeOffTitle: "Fasilitas Kamar vs Anggaran Sewa",
    contextText: "Ketika memilih kenyamanan ruangan kamar tidur Anda:",
    optionA: {
      id: "opt-2a",
      title: "Kamar AC & Kamar Mandi Dalam",
      description: "Kamar sejuk ber-AC dan kamar mandi pribadi, sewa Rp 1.500.000/bln.",
      criteriaScores: { cost: 50, commute: 70, facilities: 95, environment: 70, ruleFit: 70 },
      highlights: ["AC dingin", "Privasi KM dalam", "Biaya listrik ekstra"],
    },
    optionB: {
      id: "opt-2b",
      title: "Kamar Standar Kipas Angin",
      description: "Kamar mandi luar bersih dan kipas angin, sewa Rp 900.000/bln.",
      criteriaScores: { cost: 92, commute: 70, facilities: 42, environment: 70, ruleFit: 70 },
      highlights: ["Rp 900rb/bln", "KM luar antre berkala", "Lebih ekonomis"],
    },
  },
  {
    id: "sc-3",
    tradeOffTitle: "Ketenangan Suasana vs Kedekatan Jalan Raya",
    contextText: "Memilih lokasi sekitar tempat tinggal:",
    optionA: {
      id: "opt-3a",
      title: "Lingkungan Tenang & Hijau",
      description: "Di dalam perumahan asri, hening untuk belajar malam, 15 mnt ke kampus.",
      criteriaScores: { cost: 70, commute: 55, facilities: 70, environment: 95, ruleFit: 70 },
      highlights: ["Hening tidak bising", "Tidur berkualitas", "Akses jalan kaki sedikit jauh"],
    },
    optionB: {
      id: "opt-3b",
      title: "Pinggir Jalan Utama & Sentra Kuliner",
      description: "Ramai kendaraan, tepat di depan jalan utama dan warteg 24 jam, 5 mnt ke kampus.",
      criteriaScores: { cost: 70, commute: 92, facilities: 70, environment: 45, ruleFit: 70 },
      highlights: ["5 mnt ke kampus", "Banyak warung makan", "Cenderung bising lalu-lintas"],
    },
  },
  {
    id: "sc-4",
    tradeOffTitle: "Aturan Bebas 24 Jam vs Biaya Hemat",
    contextText: "Terkait aturan jam malam dan fleksibilitas aktivitas:",
    optionA: {
      id: "opt-4a",
      title: "Akses Kunci 24 Jam Bebas",
      description: "Kunci gerbang mandiri, bebas jam malam untuk tugas lab / organisasi, sewa Rp 1.400.000.",
      criteriaScores: { cost: 55, commute: 70, facilities: 70, environment: 70, ruleFit: 95 },
      highlights: ["Bebas 24 jam", "Fleksibel untuk rapat/lab", "Sewa menengah"],
    },
    optionB: {
      id: "opt-4b",
      title: "Tertib Jam Malam Pukul 22.00",
      description: "Gerbang dikunci pukul 22.00 ada bapak/ibu kos, sewa lebih murah Rp 950.000.",
      criteriaScores: { cost: 90, commute: 70, facilities: 70, environment: 70, ruleFit: 45 },
      highlights: ["Harga hemat Rp 950rb", "Lingkungan aman terjaga", "Wajib pulang tepat waktu"],
    },
  },
  {
    id: "sc-5",
    tradeOffTitle: "Fasilitas Kamar Mewah vs Fasilitas Sekitar Lengkap",
    contextText: "Ketika memilih prioritas fasilitas harian:",
    optionA: {
      id: "opt-5a",
      title: "Fasilitas Kamar Maksimal",
      description: "Water heater, smart TV, springbed tebal di kamar, namun minimarket dan laundry agak jauh.",
      criteriaScores: { cost: 70, commute: 70, facilities: 95, environment: 50, ruleFit: 70 },
      highlights: ["Water heater & smart TV", "Sangat nyaman di kamar", "Harus jalan untuk laundry"],
    },
    optionB: {
      id: "opt-5b",
      title: "Fasilitas Lingkungan Strategis",
      description: "Kamar esensial, namun diapit 2 minimarket, laundry kiloan cepat, dan warung makan murah.",
      criteriaScores: { cost: 70, commute: 70, facilities: 55, environment: 95, ruleFit: 70 },
      highlights: ["Laundry & makan tepat di depan", "Biaya harian praktis", "Fasilitas kamar standar"],
    },
  },
];

/**
 * Menghitung fungsi sigmoid dengan batas aman numerik
 */
function sigmoid(z: number): number {
  if (z >= 30) return 1;
  if (z <= -30) return 0;
  return 1 / (1 + Math.exp(-z));
}

/**
 * Menyelesaikan pembobotan personal menggunakan estimasi Maximum Likelihood Bradley-Terry
 * dengan regularisasi Ridge (L2) terhadap prior bobot netral.
 *
 * @param choices Kumpulan pilihan pengguna pada skenario A-vs-B
 * @param scenarios Daftar skenario yang digunakan (default DEFAULT_PAIRWISE_SCENARIOS)
 */
export function fitBradleyTerryWeights(
  choices: readonly PairwiseChoice[],
  scenarios: readonly PairwiseScenario[] = DEFAULT_PAIRWISE_SCENARIOS
): BradleyTerryResult {
  const K = CRITERION_KEYS.length;
  const scenarioMap = new Map<string, PairwiseScenario>(
    scenarios.map((s) => [s.id, s])
  );

  // Vektor prior netral: 0.20 untuk masing-masing kriteria
  const prior = 0.2;
  const lambda = 0.8; // Parameter regularisasi L2

  // Inisialisasi bobot koefisien awal w_k = 0.2
  const w = new Array<number>(K).fill(prior);

  // Susun data perbedaan fitur delta_x: (scoreA - scoreB) / 100
  const validChoices = choices.filter((c) => scenarioMap.has(c.scenarioId));
  const X: number[][] = [];
  const y: number[] = [];

  for (const choice of validChoices) {
    const sc = scenarioMap.get(choice.scenarioId)!;
    const delta = CRITERION_KEYS.map(
      (k) => (sc.optionA.criteriaScores[k] - sc.optionB.criteriaScores[k]) / 100
    );
    X.push(delta);
    y.push(choice.selectedOption === "A" ? 1 : 0);
  }

  // Jika belum ada data pilihan, kembalikan prior seimbang (masing-masing 20%)
  if (X.length === 0) {
    const balancedWeights: Record<CriterionKey, number> = {
      cost: 30,
      commute: 25,
      facilities: 20,
      environment: 15,
      ruleFit: 10,
    };
    return {
      weights: balancedWeights,
      persona: {
        title: "Pengambil Keputusan Pragmatis",
        description: "Prioritas Anda seimbang antara biaya, jarak, dan fasilitas.",
        primaryCriterion: "cost",
        badgeColor: "#F59E0B",
      },
      rawCoefficients: { cost: 0.3, commute: 0.25, facilities: 0.2, environment: 0.15, ruleFit: 0.1 },
      confidenceScore: 50,
      explanation: "Belum ada pilihan A/B yang dijawab. Menggunakan profil dasar seimbang.",
    };
  }

  // Optimasi Gradient Descent / Newton-Raphson (15 iterasi)
  const maxIterations = 20;
  const learningRate = 0.35;

  for (let iter = 0; iter < maxIterations; iter++) {
    const grad = new Array<number>(K).fill(0);

    for (let m = 0; m < X.length; m++) {
      const x_m = X[m]!;
      let dot = 0;
      for (let k = 0; k < K; k++) {
        dot += w[k]! * x_m[k]!;
      }
      const p = sigmoid(dot);
      const err = y[m]! - p;

      for (let k = 0; k < K; k++) {
        grad[k] += err * x_m[k]!;
      }
    }

    // Tambahkan penalti regularisasi L2: -lambda * (w_k - prior)
    for (let k = 0; k < K; k++) {
      grad[k] -= lambda * (w[k]! - prior);
      w[k] += learningRate * grad[k]!;
      // Batasi agar tidak negatif
      if (w[k]! < 0.05) w[k] = 0.05;
    }
  }

  // Normalisasi bobot sehingga totalnya menjadi 100% dan setiap kriteria minimal 5%
  const sumW = w.reduce((acc, val) => acc + val, 0);
  const normalized = w.map((val) => (val / sumW) * 100);

  // Terapkan batas minimum 5% untuk setiap kriteria
  const floorAdjusted = normalized.map((val) => Math.max(5, val));
  const sumFloor = floorAdjusted.reduce((acc, val) => acc + val, 0);

  // Rounding dengan metode Largest Remainder (Hare-Niemeyer) agar jumlah tepat 100
  const floatWeights = floorAdjusted.map((val) => (val / sumFloor) * 100);
  const integerParts = floatWeights.map((val) => Math.floor(val));
  const remainders = floatWeights.map((val, idx) => ({ idx, rem: val - integerParts[idx]! }));
  remainders.sort((a, b) => b.rem - a.rem);

  const missingSum = 100 - integerParts.reduce((acc, val) => acc + val, 0);
  for (let i = 0; i < missingSum; i++) {
    const targetIdx = remainders[i % K]!.idx;
    integerParts[targetIdx] += 1;
  }

  const finalWeights: Record<CriterionKey, number> = {
    cost: integerParts[0]!,
    commute: integerParts[1]!,
    facilities: integerParts[2]!,
    environment: integerParts[3]!,
    ruleFit: integerParts[4]!,
  };

  const rawCoeffs: Record<CriterionKey, number> = {
    cost: w[0]!,
    commute: w[1]!,
    facilities: w[2]!,
    environment: w[3]!,
    ruleFit: w[4]!,
  };

  // Tentukan persona berdasarkan kriteria dengan bobot tertinggi
  let maxCrit: CriterionKey = "cost";
  let maxVal = -1;
  for (const k of CRITERION_KEYS) {
    if (finalWeights[k] > maxVal) {
      maxVal = finalWeights[k];
      maxCrit = k;
    }
  }

  let persona: PersonaProfile;
  if (maxCrit === "cost" && finalWeights.cost >= 30) {
    persona = {
      title: "Pencari Efisiensi & Hemat",
      description: "Anda sangat memprioritaskan biaya hidup bulanan yang aman dan siap berkompromi pada jarak atau fasilitas demi menabung.",
      primaryCriterion: "cost",
      badgeColor: "#10B981",
    };
  } else if (maxCrit === "commute" && finalWeights.commute >= 28) {
    persona = {
      title: "Pemburu Waktu & Lokasi Strategis",
      description: "Waktu dan stamina harian Anda adalah aset terpenting. Anda memprioritaskan kos yang sangat dekat dengan kampus.",
      primaryCriterion: "commute",
      badgeColor: "#3B82F6",
    };
  } else if (maxCrit === "facilities" && finalWeights.facilities >= 26) {
    persona = {
      title: "Pencari Kenyamanan Personal",
      description: "Kamar kos adalah ruang istirahat dan belajar utama Anda. Kelengkapan fasilitas seperti AC dan KM dalam adalah kunci.",
      primaryCriterion: "facilities",
      badgeColor: "#8B5CF6",
    };
  } else if (maxCrit === "environment" && finalWeights.environment >= 24) {
    persona = {
      title: "Pencinta Ketenangan & Fasilitas Sekitar",
      description: "Anda belajar lebih produktif di lingkungan yang tenang, aman, serta memiliki akses mudah ke warung makan dan laundry.",
      primaryCriterion: "environment",
      badgeColor: "#06B6D4",
    };
  } else if (maxCrit === "ruleFit" && finalWeights.ruleFit >= 24) {
    persona = {
      title: "Pencari Fleksibilitas & Bebas Jam Malam",
      description: "Aktivitas organisasi atau laboratorium menuntut kebebasan akses 24 jam dan aturan kos yang mendukung kemandirian.",
      primaryCriterion: "ruleFit",
      badgeColor: "#EC4899",
    };
  } else {
    persona = {
      title: "Pengambil Keputusan Pragmatis & Seimbang",
      description: "Prioritas Anda terdistribusi proporsional antara biaya, jarak, dan fasilitas tanpa kompromi ekstrem pada satu aspek.",
      primaryCriterion: maxCrit,
      badgeColor: "#F59E0B",
    };
  }

  const confidenceScore = Math.min(100, Math.round(50 + (validChoices.length / scenarios.length) * 50));
  const explanation = `Model Bradley-Terry memetakan preferensi terungkap Anda dari ${validChoices.length} perbandingan. Prioritas utama Anda adalah ${CRITERION_LABELS[maxCrit]} (${finalWeights[maxCrit]}%).`;

  return {
    weights: finalWeights,
    persona,
    rawCoefficients: rawCoeffs,
    confidenceScore,
    explanation,
  };
}
