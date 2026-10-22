import type { PilotListing } from "@/data/pilot-listings";
import { formatRupiah } from "@/lib/currency";

export interface SemanticQueryFilter {
  readonly rawQuery: string;
  readonly detectedCampusId: string | null;
  readonly detectedArea: string | null;
  readonly gender: "male" | "female" | "all" | null;
  readonly maxRentMonthly: number | null;
  readonly minRentMonthly: number | null;
  readonly preferCheap: boolean;
  readonly requiredFacilityCodes: readonly string[];
  readonly preferCloseToCampus: boolean;
  readonly quietPreferred: boolean;
  readonly access24hPreferred: boolean;
  readonly keywords: readonly string[];
}

export interface SemanticMatchResult {
  readonly listing: PilotListing;
  readonly relevanceScore: number; // 0 - 100
  readonly isEligible: boolean;
  readonly matchedCriteria: readonly string[];
  readonly unmetCriteria: readonly string[];
  readonly matchExplanation: string;
}

export interface SemanticSearchResult {
  readonly parsedFilter: SemanticQueryFilter;
  readonly matches: readonly SemanticMatchResult[];
  readonly totalMatches: number;
}

/**
 * Normalisasi dan ekstraksi token/entitas bahasa alami Bahasa Indonesia
 * untuk pencarian semantik kos (Tahap D Roadmap ML/DL).
 */
export function parseSemanticQuery(rawQuery: string): SemanticQueryFilter {
  const query = rawQuery.toLowerCase().trim();

  // 1. Deteksi Kampus
  let detectedCampusId: string | null = null;
  if (query.includes("ui") || query.includes("depok")) {
    detectedCampusId = "ui-depok";
  } else if (query.includes("unand") || query.includes("padang") || query.includes("limau manis")) {
    detectedCampusId = "unand-limau-manis";
  } else if (query.includes("itera") || query.includes("lampung")) {
    detectedCampusId = "itera-lampung";
  }

  // 2. Deteksi Area Spesifik
  let detectedArea: string | null = null;
  const knownAreas = [
    "kukusan", "kutek", "pocin", "pondok cina", "margonda", "kober",
    "pasar baru", "limau manis", "kapalo koto", "kuranji",
    "way huwi", "sukarame", "jatiagung"
  ];
  for (const a of knownAreas) {
    if (query.includes(a)) {
      detectedArea = a;
      break;
    }
  }

  // 3. Deteksi Gender
  let gender: "male" | "female" | "all" | null = null;
  if (
    query.includes("cewek") ||
    query.includes("putri") ||
    query.includes("wanita") ||
    query.includes("akhwat") ||
    query.includes("perempuan")
  ) {
    gender = "female";
  } else if (
    query.includes("cowok") ||
    query.includes("putra") ||
    query.includes("pria") ||
    query.includes("ikhwan") ||
    query.includes("laki")
  ) {
    gender = "male";
  } else if (
    query.includes("campur") ||
    query.includes("pasutri") ||
    query.includes("bebas gender")
  ) {
    gender = "all";
  }

  // 4. Deteksi Batas Anggaran (Maksimal Harga Sewa)
  let maxRentMonthly: number | null = null;
  let minRentMonthly: number | null = null;

  // Regex mendeteksi: "di bawah 1jt", "< 1.5 juta", "dibawah 800rb", "maks 2 jt", "budget 1.2jt"
  const maxPriceRegex = /(?:di\s*bawah|dibawah|<\s*|maks(?:imal)?|budget|anggaran|harga)\s*[:=]?\s*(\d+(?:[.,]\d+)?)\s*(jt|juta|rb|ribu|k)?/i;
  const matchMax = query.match(maxPriceRegex);
  if (matchMax) {
    let val = parseFloat(matchMax[1].replace(/,/g, "."));
    const unit = matchMax[2]?.toLowerCase();
    if (unit === "jt" || unit === "juta") val *= 1000000;
    else if (unit === "rb" || unit === "ribu" || unit === "k") val *= 1000;
    else if (val < 1000) val *= 1000000; // Misal 1.2 -> 1.200.000
    if (val >= 200000 && val <= 15000000) {
      maxRentMonthly = Math.round(val);
    }
  }

  const preferCheap = query.includes("murah") || query.includes("hemat") || query.includes("terjangkau");

  // 5. Deteksi Fasilitas yang Diminta
  const requiredFacilities: string[] = [];
  if (query.includes("ac") || query.includes("air conditioner")) {
    requiredFacilities.push("ac");
  }
  if (
    query.includes("km dalam") ||
    query.includes("kamar mandi dalam") ||
    query.includes("wc dalam") ||
    query.includes("bathroom")
  ) {
    requiredFacilities.push("bathroom_inside");
  }
  if (
    query.includes("wifi") ||
    query.includes("wi-fi") ||
    query.includes("internet")
  ) {
    requiredFacilities.push("wifi");
  }
  if (query.includes("kasur") || query.includes("springbed") || query.includes("bed")) {
    requiredFacilities.push("springbed");
  }
  if (query.includes("meja") || query.includes("meja belajar") || query.includes("desk")) {
    requiredFacilities.push("desk_chair");
  }
  if (query.includes("lemari") || query.includes("wardrobe") || query.includes("closet")) {
    requiredFacilities.push("closet");
  }
  if (query.includes("parkir") || query.includes("garasi") || query.includes("motor") || query.includes("mobil")) {
    requiredFacilities.push("parking_motor");
  }

  // 6. Preferensi Jarak & Lingkungan
  const preferCloseToCampus =
    query.includes("dekat") ||
    query.includes("jalan kaki") ||
    query.includes("dekat kampus") ||
    query.includes("nempel");

  const quietPreferred = query.includes("tenang") || query.includes("adem") || query.includes("sunyi");
  const access24hPreferred = query.includes("24 jam") || query.includes("bebas jam malam") || query.includes("tanpa jam malam");

  // Kumpulkan sisa kata kunci bersih
  const stopWords = new Set(["kos", "kost", "di", "yang", "ada", "dan", "dengan", "ke", "dari", "untuk", "cari"]);
  const keywords = query
    .split(/\s+/)
    .filter((w) => w.length > 2 && !stopWords.has(w));

  return {
    rawQuery,
    detectedCampusId,
    detectedArea,
    gender,
    maxRentMonthly,
    minRentMonthly,
    preferCheap,
    requiredFacilityCodes: requiredFacilities,
    preferCloseToCampus,
    quietPreferred,
    access24hPreferred,
    keywords,
  };
}

/**
 * Menilai relevansi semantik satu listing kos terhadap SemanticQueryFilter.
 */
export function scoreListingSemantics(
  listing: PilotListing,
  filter: SemanticQueryFilter
): SemanticMatchResult {
  const matchedCriteria: string[] = [];
  const unmetCriteria: string[] = [];
  let isEligible = true;

  // Evaluasi 1: Kampus (Hard check bila terdeteksi spesifik di query)
  if (filter.detectedCampusId && listing.campusId !== filter.detectedCampusId) {
    return {
      listing,
      relevanceScore: 0,
      isEligible: false,
      matchedCriteria: [],
      unmetCriteria: ["Bukan kampus yang dicari"],
      matchExplanation: "Tidak sesuai kampus yang dicari.",
    };
  }

  // Evaluasi 2: Gender (Hard constraint)
  if (filter.gender) {
    if (filter.gender === "female" && listing.gender !== "female" && listing.gender !== "all") {
      isEligible = false;
      unmetCriteria.push("Bukan kos putri");
    } else if (filter.gender === "male" && listing.gender !== "male" && listing.gender !== "all") {
      isEligible = false;
      unmetCriteria.push("Bukan kos putra");
    } else if (filter.gender === "all" && listing.gender !== "all") {
      isEligible = false;
      unmetCriteria.push("Bukan kos campur");
    } else {
      matchedCriteria.push(
        listing.gender === "female" ? "Khusus Putri" : listing.gender === "male" ? "Khusus Putra" : "Kos Campur"
      );
    }
  }

  // Evaluasi 3: Anggaran Maksimal (Hard constraint)
  if (filter.maxRentMonthly !== null) {
    if (listing.rentMonthly > filter.maxRentMonthly) {
      isEligible = false;
      unmetCriteria.push(`Melebihi anggaran maks (${formatRupiah(filter.maxRentMonthly)})`);
    } else {
      matchedCriteria.push(`Harga dalam anggaran (≤ ${formatRupiah(filter.maxRentMonthly)})`);
    }
  }

  if (!isEligible) {
    return {
      listing,
      relevanceScore: 0,
      isEligible: false,
      matchedCriteria,
      unmetCriteria,
      matchExplanation: `Belum memenuhi syarat mutlak: ${unmetCriteria.join(", ")}.`,
    };
  }

  // Hitung Skor Relevansi Semantik (0 - 100)
  let score = 50;

  // Fasilitas
  for (const req of filter.requiredFacilityCodes) {
    // Normalisasi check: misal ac, bathroom_inside, wifi, springbed, dll.
    const hasFac =
      listing.facilityCodes.includes(req) ||
      (req === "bathroom_inside" && (listing.facilityCodes.includes("private_bathroom") || listing.facilityCodes.includes("bathroom_inside"))) ||
      (req === "springbed" && (listing.facilityCodes.includes("bed") || listing.facilityCodes.includes("springbed"))) ||
      (req === "desk_chair" && (listing.facilityCodes.includes("study_desk") || listing.facilityCodes.includes("desk_chair")));

    if (hasFac) {
      score += 15;
      matchedCriteria.push(`Tersedia ${req.replace("_", " ")}`);
    } else {
      score -= 8;
      unmetCriteria.push(`Belum ada ${req.replace("_", " ")}`);
    }
  }

  // Area
  if (filter.detectedArea) {
    if (listing.area.toLowerCase().includes(filter.detectedArea)) {
      score += 15;
      matchedCriteria.push(`Area ${listing.area}`);
    }
  }

  // Kata kunci tambahan (misal: "tenang", "bersih", "strategis") di nama atau catatan
  const notesAndName = (listing.name + " " + listing.notes).toLowerCase();
  for (const kw of filter.keywords) {
    if (notesAndName.includes(kw)) {
      score += 6;
      matchedCriteria.push(`Cocok kata kunci: ${kw}`);
    }
  }

  if (filter.quietPreferred && (notesAndName.includes("tenang") || notesAndName.includes("adem"))) {
    score += 10;
    matchedCriteria.push("Lingkungan tenang");
  }

  if (filter.access24hPreferred && (notesAndName.includes("24 jam") || notesAndName.includes("bebas jam malam"))) {
    score += 10;
    matchedCriteria.push("Akses 24 jam");
  }

  if (filter.preferCheap && listing.rentMonthly <= 1200000) {
    score += 12;
    matchedCriteria.push("Harga ekonomis terjangkau");
  }

  const finalScore = Math.min(100, Math.max(30, Math.round(score)));
  const explanation = `${finalScore}% Relevan: ${matchedCriteria.slice(0, 3).join(" · ")}`;

  return {
    listing,
    relevanceScore: finalScore,
    isEligible: true,
    matchedCriteria,
    unmetCriteria,
    matchExplanation: explanation,
  };
}

/**
 * Menjalankan pencarian semantik terhadap kumpulan data kos.
 */
export function searchListingsSemantically(
  listings: readonly PilotListing[],
  query: string
): SemanticSearchResult {
  if (!query.trim()) {
    const emptyFilter = parseSemanticQuery("");
    const matches: SemanticMatchResult[] = listings.map((l) => ({
      listing: l,
      relevanceScore: 100,
      isEligible: true,
      matchedCriteria: [],
      unmetCriteria: [],
      matchExplanation: "Semua kos ditampilkan.",
    }));
    return { parsedFilter: emptyFilter, matches, totalMatches: matches.length };
  }

  const parsedFilter = parseSemanticQuery(query);
  const scored = listings.map((l) => scoreListingSemantics(l, parsedFilter));

  // Saring yang eligible dan urutkan berdasarkan relevance score tertinggi
  const eligibleMatches = scored
    .filter((m) => m.isEligible)
    .sort((a, b) => b.relevanceScore - a.relevanceScore);

  return {
    parsedFilter,
    matches: eligibleMatches,
    totalMatches: eligibleMatches.length,
  };
}
