import type { MoneyValue } from "@/domain/entities";

export interface ExtractedListingData {
  readonly name: string | null;
  readonly rentMonthly: number | null;
  readonly electricity: MoneyValue;
  readonly water: MoneyValue;
  readonly deposit: MoneyValue;
  readonly gender: "all" | "male" | "female" | null;
  readonly facilityCodes: readonly string[];
  readonly ruleValues: Readonly<Record<string, boolean>>;
  readonly contactPhone: string | null;
  readonly confidence: "high" | "medium" | "low";
  readonly extractedSummary: readonly string[];
}

/**
 * Ekstraktor teks iklan kos cerdas (Tahap C Roadmap ML/DL).
 * Mengurai teks mentah (dari chat WhatsApp, OLX, atau postingan media sosial)
 * menjadi data terstruktur dengan origin "estimated".
 */
export function extractListingFromText(rawText: string): ExtractedListingData {
  const text = rawText.toLowerCase();
  const summary: string[] = [];

  // 1. Ekstraksi Harga Sewa (rentMonthly)
  let rentMonthly: number | null = null;

  // Cari angka harga yang masuk akal (misal: 1.200.000, 1.2jt, 1200k, 850rb)
  const explicitRentRegex = /(?:harga|sewa|biaya|rp\.?|idr)\s*[:=]?\s*(\d+(?:[.,]\d+)?)\s*(jt|juta|rb|ribu|k)?/i;
  const generalPriceRegex = /(?:rp\.?|idr)\s*(\d{1,3}(?:[.,]\d{3})+)/i;
  const shortJutaRegex = /(\d+(?:[.,]\d+)?)\s*(?:jt|juta)\s*(?:\/|\sper\s*)?(?:bln|bulan)?/i;

  if (explicitRentRegex.test(text)) {
    const m = text.match(explicitRentRegex)!;
    let val = parseFloat(m[1].replace(/,/g, "."));
    const unit = m[2]?.toLowerCase();
    if (unit === "jt" || unit === "juta") val *= 1000000;
    else if (unit === "rb" || unit === "ribu" || unit === "k") val *= 1000;
    else if (val < 1000) val *= 1000000; // Misal "1.5" -> 1.5jt
    if (val >= 200000 && val <= 15000000) {
      rentMonthly = Math.round(val);
    }
  } else if (generalPriceRegex.test(text)) {
    const m = text.match(generalPriceRegex)!;
    const cleanNum = parseInt(m[1].replace(/[.,]/g, ""), 10);
    if (cleanNum >= 200000 && cleanNum <= 15000000) {
      rentMonthly = cleanNum;
    }
  } else if (shortJutaRegex.test(text)) {
    const m = text.match(shortJutaRegex)!;
    const val = parseFloat(m[1].replace(/,/g, ".")) * 1000000;
    if (val >= 200000 && val <= 15000000) {
      rentMonthly = Math.round(val);
    }
  }

  if (rentMonthly !== null) {
    summary.push(`Sewa: Rp ${rentMonthly.toLocaleString("id-ID")}/bln`);
  }

  // 2. Ekstraksi Utilitas (Listrik & Air)
  let electricity: MoneyValue = { amount: null, origin: "unknown" };
  if (text.includes("free listrik") || text.includes("termasuk listrik") || text.includes("include listrik") || text.includes("sudah listrik")) {
    electricity = { amount: 0, origin: "estimated" };
    summary.push("Listrik: Termasuk (Gratis)");
  } else if (text.includes("token") || text.includes("listrik sendiri") || text.includes("bayar listrik")) {
    electricity = { amount: null, origin: "unknown" };
    summary.push("Listrik: Token Mandiri");
  }

  let water: MoneyValue = { amount: null, origin: "unknown" };
  if (text.includes("free air") || text.includes("termasuk air") || text.includes("include air") || text.includes("sudah air") || text.includes("air pdam")) {
    water = { amount: 0, origin: "estimated" };
    summary.push("Air: Termasuk (Gratis)");
  }

  // 3. Ekstraksi Deposit
  let deposit: MoneyValue = { amount: null, origin: "unknown" };
  const depositRegex = /deposit\s*[:=]?\s*(\d+(?:[.,]\d+)?)\s*(jt|juta|rb|k)?/i;
  if (depositRegex.test(text)) {
    const m = text.match(depositRegex)!;
    let depVal = parseFloat(m[1].replace(/,/g, "."));
    const unit = m[2]?.toLowerCase();
    if (unit === "jt" || unit === "juta") depVal *= 1000000;
    else if (unit === "rb" || unit === "k") depVal *= 1000;
    else if (depVal < 1000) depVal *= 1000000;
    deposit = { amount: Math.round(depVal), origin: "estimated" };
    summary.push(`Deposit: Rp ${depVal.toLocaleString("id-ID")}`);
  }

  // 4. Ekstraksi Gender
  let gender: "all" | "male" | "female" | null = null;
  if (text.includes("putri") || text.includes("cewek") || text.includes("wanita") || text.includes("akhwat")) {
    gender = "female";
    summary.push("Gender: Khusus Putri");
  } else if (text.includes("putra") || text.includes("cowok") || text.includes("pria") || text.includes("ikhwan")) {
    gender = "male";
    summary.push("Gender: Khusus Putra");
  } else if (text.includes("campur") || text.includes("pasutri")) {
    gender = "all";
    summary.push("Gender: Campur");
  }

  // 5. Ekstraksi Fasilitas (Mapping ke facilityCodes)
  const facilities: string[] = [];
  if (text.includes("ac") || text.includes("air conditioner")) facilities.push("ac");
  if (text.includes("km dalam") || text.includes("kamar mandi dalam") || text.includes("wc dalam") || text.includes("private bathroom")) facilities.push("private_bathroom");
  if (text.includes("wifi") || text.includes("wi-fi") || text.includes("internet") || text.includes("indihome") || text.includes("biznet")) facilities.push("wifi");
  if (text.includes("kasur") || text.includes("springbed") || text.includes("tempat tidur") || text.includes("bed")) facilities.push("bed");
  if (text.includes("lemari") || text.includes("wardrobe")) facilities.push("wardrobe");
  if (text.includes("meja") || text.includes("belajar") || text.includes("desk")) facilities.push("study_desk");
  if (text.includes("water heater") || text.includes("air panas") || text.includes("waterheater")) facilities.push("water_heater");
  if (text.includes("dapur") || text.includes("kitchen")) facilities.push("shared_kitchen");
  if (text.includes("parkir") || text.includes("garasi")) facilities.push("parking");

  if (facilities.length > 0) {
    summary.push(`Fasilitas: ${facilities.join(", ")}`);
  }

  // 6. Ekstraksi Aturan
  const ruleValues: Record<string, boolean> = {};
  if (text.includes("akses 24 jam") || text.includes("bebas jam malam") || text.includes("kunci masing2") || text.includes("gerbang 24 jam")) {
    ruleValues["access_24h"] = true;
    summary.push("Aturan: Akses 24 Jam");
  } else if (text.includes("jam malam") || text.includes("maksimal jam") || text.includes("pukul 22") || text.includes("pukul 23")) {
    ruleValues["access_24h"] = false;
    summary.push("Aturan: Ada Jam Malam");
  }

  if (text.includes("dilarang lawan jenis") || text.includes("tidak boleh lawan jenis") || text.includes("lawan jenis dilarang")) {
    ruleValues["no_opposite_sex"] = true;
    summary.push("Aturan: Lawan Jenis Dilarang Masuk Kamar");
  }

  // 7. Ekstraksi Nomor Kontak WhatsApp / Telepon
  let contactPhone: string | null = null;
  const phoneMatch = text.match(/(?:08|\+628)\d{8,11}/);
  if (phoneMatch) {
    contactPhone = phoneMatch[0];
    summary.push(`Kontak: ${contactPhone}`);
  }

  // 8. Ekstraksi Nama Kos (Cari kata "kos" atau "kost")
  let name: string | null = null;
  const nameMatch = rawText.match(/(?:kos|kost|wisma|pondok)\s+([A-Za-z0-9\s]+?)(?:,|\.|\n|$)/i);
  if (nameMatch) {
    name = nameMatch[0].trim().slice(0, 40);
  }

  // Tentukan Confidence
  let confidence: "high" | "medium" | "low" = "low";
  if (rentMonthly !== null && facilities.length >= 2) confidence = "high";
  else if (rentMonthly !== null || facilities.length >= 1) confidence = "medium";

  return {
    name,
    rentMonthly,
    electricity,
    water,
    deposit,
    gender,
    facilityCodes: facilities,
    ruleValues,
    contactPhone,
    confidence,
    extractedSummary: summary,
  };
}
