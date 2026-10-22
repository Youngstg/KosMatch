export interface PilotPoi {
  readonly id: string;
  readonly campusId: "ui-depok" | "unand-limau-manis";
  readonly category: "food" | "laundry" | "convenience" | "pharmacy" | "worship" | "bus_stop" | "atm";
  readonly name: string;
  readonly coordinates: { readonly latitude: number; readonly longitude: number };
  readonly description?: string;
}

export const POI_CATEGORY_CONFIG: Record<
  string,
  { label: string; color: string; bgLight: string; iconSymbol: string }
> = {
  food: {
    label: "Warung & Cafe",
    color: "#F97316", // Vibrant Warm Orange
    bgLight: "rgba(249, 115, 22, 0.18)",
    iconSymbol: "🍲",
  },
  laundry: {
    label: "Laundry Kiloan",
    color: "#06B6D4", // Electric Cyan
    bgLight: "rgba(6, 182, 212, 0.18)",
    iconSymbol: "🧺",
  },
  convenience: {
    label: "Minimarket",
    color: "#10B981", // Emerald Green
    bgLight: "rgba(16, 185, 129, 0.18)",
    iconSymbol: "🏪",
  },
  pharmacy: {
    label: "Apotek & Klinik",
    color: "#F43F5E", // Rose Red
    bgLight: "rgba(244, 63, 94, 0.18)",
    iconSymbol: "💊",
  },
  worship: {
    label: "Tempat Ibadah",
    color: "#8B5CF6", // Royal Violet
    bgLight: "rgba(139, 92, 246, 0.18)",
    iconSymbol: "🕌",
  },
  bus_stop: {
    label: "Halte & Angkot",
    color: "#EAB308", // Sun Gold
    bgLight: "rgba(234, 179, 8, 0.18)",
    iconSymbol: "🚏",
  },
  atm: {
    label: "ATM & Bank",
    color: "#3B82F6", // Electric Blue
    bgLight: "rgba(59, 130, 246, 0.18)",
    iconSymbol: "💳",
  },
};

export const PILOT_POIS: readonly PilotPoi[] = [
  // =========================================================================
  // UI DEPOK POIS (Total: 40 POIs matching category counts)
  // =========================================================================

  // --- Warung & Kuliner (14) ---
  {
    id: "ui-poi-food-01",
    campusId: "ui-depok",
    category: "food",
    name: "Warteg Kharisma Bahari Kukusan",
    coordinates: { latitude: -6.3682, longitude: 106.8208 },
    description: "Warteg 24 jam favorit mahasiswa FT & Vokasi UI",
  },
  {
    id: "ui-poi-food-02",
    campusId: "ui-depok",
    category: "food",
    name: "Warung Makan Bu Djarwo Kutek",
    coordinates: { latitude: -6.3695, longitude: 106.8215 },
    description: "Masakan rumahan jawa dan aneka lauk murah meriah",
  },
  {
    id: "ui-poi-food-03",
    campusId: "ui-depok",
    category: "food",
    name: "Ayam Bakar Mas Mono Margonda",
    coordinates: { latitude: -6.3625, longitude: 106.8335 },
    description: "Ayam bakar bumbu manis pedas di pinggir Margonda",
  },
  {
    id: "ui-poi-food-04",
    campusId: "ui-depok",
    category: "food",
    name: "Soto Mie Bogor Stasiun Pocin",
    coordinates: { latitude: -6.3660, longitude: 106.8322 },
    description: "Soto mie daging & risol garing dekat jembatan Pocin",
  },
  {
    id: "ui-poi-food-05",
    campusId: "ui-depok",
    category: "food",
    name: "Mie Ayam & Bakso Kober Berkah",
    coordinates: { latitude: -6.3642, longitude: 106.8348 },
    description: "Mie ayam porsi kenyang dengan pangsit basah",
  },
  {
    id: "ui-poi-food-06",
    campusId: "ui-depok",
    category: "food",
    name: "Kantin Pusat Balairung UI",
    coordinates: { latitude: -6.3638, longitude: 106.8282 },
    description: "Sentra kuliner tengah kampus dan danau UI",
  },
  {
    id: "ui-poi-food-07",
    campusId: "ui-depok",
    category: "food",
    name: "RM Padang Ampera Kutek",
    coordinates: { latitude: -6.3675, longitude: 106.8212 },
    description: "Nasi padang rendang dan ayam balado hemat mahasiswa",
  },
  {
    id: "ui-poi-food-08",
    campusId: "ui-depok",
    category: "food",
    name: "Geprek Bensu Margonda Raya",
    coordinates: { latitude: -6.3610, longitude: 106.8330 },
    description: "Ayam geprek pedas level dengan keju mozzarella",
  },
  {
    id: "ui-poi-food-09",
    campusId: "ui-depok",
    category: "food",
    name: "Nasi Uduk & Pecel Lele Kukel",
    coordinates: { latitude: -6.3572, longitude: 106.8248 },
    description: "Buka malam sampai dini hari di kawasan Kukusan Kelurahan",
  },
  {
    id: "ui-poi-food-10",
    campusId: "ui-depok",
    category: "food",
    name: "Kantin Sastra FIB UI",
    coordinates: { latitude: -6.3670, longitude: 106.8295 },
    description: "Kantin legendaris FIB UI dengan suasana rindang",
  },
  {
    id: "ui-poi-food-11",
    campusId: "ui-depok",
    category: "food",
    name: "Kafe Rumpun Ilmu Kesehatan (RIK)",
    coordinates: { latitude: -6.3565, longitude: 106.8268 },
    description: "Kopi, toast, dan makanan sehat di area Fakultas Kedokteran/RIK",
  },
  {
    id: "ui-poi-food-12",
    campusId: "ui-depok",
    category: "food",
    name: "Warung Kopi & Indomie Kober",
    coordinates: { latitude: -6.3650, longitude: 106.8342 },
    description: "Tempat nongkrong malam mahasiswa dengan wifi gratis",
  },
  {
    id: "ui-poi-food-13",
    campusId: "ui-depok",
    category: "food",
    name: "Bebek Madura Pak Slamet Margonda",
    coordinates: { latitude: -6.3720, longitude: 106.8315 },
    description: "Bebek goreng bumbu hitam khas Madura",
  },
  {
    id: "ui-poi-food-14",
    campusId: "ui-depok",
    category: "food",
    name: "Kantin Vokasi UI",
    coordinates: { latitude: -6.3712, longitude: 106.8238 },
    description: "Kantin mahasiswa Program Pendidikan Vokasi UI",
  },

  // --- Laundry Kiloan (6) ---
  {
    id: "ui-poi-laundry-01",
    campusId: "ui-depok",
    category: "laundry",
    name: "Laundry Kiloan Wangi Kutek",
    coordinates: { latitude: -6.3680, longitude: 106.8205 },
    description: "Cuci komplit reguler dan kilat 1 hari selesai",
  },
  {
    id: "ui-poi-laundry-02",
    campusId: "ui-depok",
    category: "laundry",
    name: "Simply Fresh Laundry Pocin",
    coordinates: { latitude: -6.3630, longitude: 106.8330 },
    description: "Waralaba laundry terpercaya dengan deterjen ramah lingkungan",
  },
  {
    id: "ui-poi-laundry-03",
    campusId: "ui-depok",
    category: "laundry",
    name: "Super Wash Kiloan Kober",
    coordinates: { latitude: -6.3655, longitude: 106.8350 },
    description: "Bisa antar jemput kos area Kober dan Margonda",
  },
  {
    id: "ui-poi-laundry-04",
    campusId: "ui-depok",
    category: "laundry",
    name: "Cuci Kering Setrika Kukel",
    coordinates: { latitude: -6.3580, longitude: 106.8245 },
    description: "Tarif ramah kantong mahasiswa Rp7.000/kg",
  },
  {
    id: "ui-poi-laundry-05",
    campusId: "ui-depok",
    category: "laundry",
    name: "Smart Laundry Express Margonda",
    coordinates: { latitude: -6.3695, longitude: 106.8318 },
    description: "Layanan cuci koin dan express 3 jam",
  },
  {
    id: "ui-poi-laundry-06",
    campusId: "ui-depok",
    category: "laundry",
    name: "Clean & Fast Laundry Kutek",
    coordinates: { latitude: -6.3690, longitude: 106.8210 },
    description: "Spesialis cuci bed cover, sepatu, dan pakaian sehari-hari",
  },

  // --- Minimarket (4) ---
  {
    id: "ui-poi-conv-01",
    campusId: "ui-depok",
    category: "convenience",
    name: "Indomaret Kukusan Teknik",
    coordinates: { latitude: -6.3690, longitude: 106.8218 },
    description: "Buka 24 jam dengan ATM BCA di dalam toko",
  },
  {
    id: "ui-poi-conv-02",
    campusId: "ui-depok",
    category: "convenience",
    name: "Alfamart Pondok Cina Stasiun",
    coordinates: { latitude: -6.3620, longitude: 106.8328 },
    description: "Akses mudah dari pintu stasiun KRL Pondok Cina",
  },
  {
    id: "ui-poi-conv-03",
    campusId: "ui-depok",
    category: "convenience",
    name: "Indomaret Point Margonda Raya",
    coordinates: { latitude: -6.3650, longitude: 106.8338 },
    description: "Lengkap dengan Point Cafe dan tempat duduk santai",
  },
  {
    id: "ui-poi-conv-04",
    campusId: "ui-depok",
    category: "convenience",
    name: "Alfamart Kukusan Kelurahan",
    coordinates: { latitude: -6.3568, longitude: 106.8250 },
    description: "Minimarket utama di jalan raya Kukel",
  },

  // --- Apotek & Klinik (4) ---
  {
    id: "ui-poi-pharm-01",
    campusId: "ui-depok",
    category: "pharmacy",
    name: "Klinik Satelit Makara UI",
    coordinates: { latitude: -6.3645, longitude: 106.8260 },
    description: "Layanan kesehatan primer resmi sivitas akademika UI",
  },
  {
    id: "ui-poi-pharm-02",
    campusId: "ui-depok",
    category: "pharmacy",
    name: "Apotek Kimia Farma Margonda",
    coordinates: { latitude: -6.3615, longitude: 106.8332 },
    description: "Apotek lengkap dengan resep dokter dan tes kesehatan",
  },
  {
    id: "ui-poi-pharm-03",
    campusId: "ui-depok",
    category: "pharmacy",
    name: "Apotek K-24 Pondok Cina 24 Jam",
    coordinates: { latitude: -6.3638, longitude: 106.8330 },
    description: "Siaga 24 jam untuk obat darurat tengah malam",
  },
  {
    id: "ui-poi-pharm-04",
    campusId: "ui-depok",
    category: "pharmacy",
    name: "Apotek Sehat Mandiri Kukusan",
    coordinates: { latitude: -6.3675, longitude: 106.8215 },
    description: "Apotek terdekat dari kawasan kos Kukusan Teknik",
  },

  // --- Tempat Ibadah (4) ---
  {
    id: "ui-poi-worship-01",
    campusId: "ui-depok",
    category: "worship",
    name: "Masjid Ukhuwah Islamiyah (MUI) UI",
    coordinates: { latitude: -6.3610, longitude: 106.8290 },
    description: "Masjid utama kampus UI dengan kapasitas ribuan jamaah",
  },
  {
    id: "ui-poi-worship-02",
    campusId: "ui-depok",
    category: "worship",
    name: "Masjid Al-Kautsar Kukusan Teknik",
    coordinates: { latitude: -6.3700, longitude: 106.8208 },
    description: "Pusat ibadah sholat Jumat mahasiswa area Kutek",
  },
  {
    id: "ui-poi-worship-03",
    campusId: "ui-depok",
    category: "worship",
    name: "Masjid Al-Muttaqin Pondok Cina",
    coordinates: { latitude: -6.3652, longitude: 106.8340 },
    description: "Masjid pemukiman warga dan mahasiswa Pocin",
  },
  {
    id: "ui-poi-worship-04",
    campusId: "ui-depok",
    category: "worship",
    name: "Musholla Fakultas Teknik UI",
    coordinates: { latitude: -6.3688, longitude: 106.8235 },
    description: "Musholla nyaman di lantai dasar Gedung Engineering Center FT",
  },

  // --- Halte & Angkot (4) ---
  {
    id: "ui-poi-bus-01",
    campusId: "ui-depok",
    category: "bus_stop",
    name: "Halte Bus Kuning Rektorat UI",
    coordinates: { latitude: -6.3625, longitude: 106.8275 },
    description: "Halte transit utama Bus Kuning keliling kampus UI",
  },
  {
    id: "ui-poi-bus-02",
    campusId: "ui-depok",
    category: "bus_stop",
    name: "Halte Stasiun UI Margonda",
    coordinates: { latitude: -6.3618, longitude: 106.8315 },
    description: "Integrasi KRL Commuter Line dan Bus TransJakarta",
  },
  {
    id: "ui-poi-bus-03",
    campusId: "ui-depok",
    category: "bus_stop",
    name: "Pangkalan Angkot D112 Pondok Cina",
    coordinates: { latitude: -6.3642, longitude: 106.8335 },
    description: "Rute Depok - Terminal Kampung Rambutan",
  },
  {
    id: "ui-poi-bus-04",
    campusId: "ui-depok",
    category: "bus_stop",
    name: "Halte Bikun FT Vokasi",
    coordinates: { latitude: -6.3710, longitude: 106.8240 },
    description: "Pemberhentian Bus Kuning rute lurus selatan",
  },

  // --- ATM & Bank (4) ---
  {
    id: "ui-poi-atm-01",
    campusId: "ui-depok",
    category: "atm",
    name: "Sentra ATM BNI Balairung UI",
    coordinates: { latitude: -6.3632, longitude: 106.8280 },
    description: "Penarikan tunai dan setoran tunai 24 jam",
  },
  {
    id: "ui-poi-atm-02",
    campusId: "ui-depok",
    category: "atm",
    name: "Galeri ATM Mandiri & BRI Margonda",
    coordinates: { latitude: -6.3622, longitude: 106.8330 },
    description: "Galeri lengkap aneka bank BUMN dan swasta",
  },
  {
    id: "ui-poi-atm-03",
    campusId: "ui-depok",
    category: "atm",
    name: "ATM BCA Indomaret Kutek",
    coordinates: { latitude: -6.3682, longitude: 106.8215 },
    description: "Mesin tarik tunai BCA terdekat untuk anak kos Kutek",
  },
  {
    id: "ui-poi-atm-04",
    campusId: "ui-depok",
    category: "atm",
    name: "ATM Mandiri Pondok Cina",
    coordinates: { latitude: -6.3665, longitude: 106.8338 },
    description: "Dekat pintu perlintasan rel Pondok Cina",
  },

  // =========================================================================
  // UNAND LIMAU MANIS POIS
  // =========================================================================
  {
    id: "unand-poi-food-01",
    campusId: "unand-limau-manis",
    category: "food",
    name: "Ampera Lamun Ombak Pasar Baru",
    coordinates: { latitude: -0.9235, longitude: 100.4345 },
    description: "Nasi kapau & gulai tunjang andalan mahasiswa Unand",
  },
  {
    id: "unand-poi-food-02",
    campusId: "unand-limau-manis",
    category: "food",
    name: "Kantin Pusat Gedung Kuliah Bersama (GKB)",
    coordinates: { latitude: -0.9142, longitude: 100.4638 },
    description: "Tempat makan siang mahasiswa tingkat 1 di kampus",
  },
  {
    id: "unand-poi-food-03",
    campusId: "unand-limau-manis",
    category: "food",
    name: "Kedai Kopi & Teh Talua Simpang Unand",
    coordinates: { latitude: -0.9220, longitude: 100.4360 },
    description: "Minuman tradisional teh telur dan sarapan pagi",
  },
  {
    id: "unand-poi-food-04",
    campusId: "unand-limau-manis",
    category: "food",
    name: "Pecel Ayam Mas Budi Pasar Baru",
    coordinates: { latitude: -0.9240, longitude: 100.4338 },
    description: "Menu makan malam hemat mahasiswa",
  },
  {
    id: "unand-poi-laundry-01",
    campusId: "unand-limau-manis",
    category: "laundry",
    name: "Berkah Laundry Kiloan Pasar Baru",
    coordinates: { latitude: -0.9230, longitude: 100.4355 },
    description: "Layanan cuci wangi dan rapi mahasiswa Unand",
  },
  {
    id: "unand-poi-laundry-02",
    campusId: "unand-limau-manis",
    category: "laundry",
    name: "Flash Laundry Express Limau Manis",
    coordinates: { latitude: -0.9195, longitude: 100.4420 },
    description: "Bisa antar jemput asrama & kos-kosan",
  },
  {
    id: "unand-poi-conv-01",
    campusId: "unand-limau-manis",
    category: "convenience",
    name: "Indomaret Pasar Baru Unand",
    coordinates: { latitude: -0.9238, longitude: 100.4348 },
    description: "Minimarket terlengkap di sentra kos Pasar Baru",
  },
  {
    id: "unand-poi-conv-02",
    campusId: "unand-limau-manis",
    category: "convenience",
    name: "Alfamart Simpang Kampus Unand",
    coordinates: { latitude: -0.9215, longitude: 100.4365 },
    description: "Dekat pangkalan ojek dan angkot",
  },
  {
    id: "unand-poi-pharm-01",
    campusId: "unand-limau-manis",
    category: "pharmacy",
    name: "Klinik Pratama Universitas Andalas",
    coordinates: { latitude: -0.9150, longitude: 100.4585 },
    description: "Klinik kesehatan sivitas akademika Unand",
  },
  {
    id: "unand-poi-pharm-02",
    campusId: "unand-limau-manis",
    category: "pharmacy",
    name: "Apotek Sehat Farma Pasar Baru",
    coordinates: { latitude: -0.9245, longitude: 100.4340 },
    description: "Sedia obat bebas dan tebus resep",
  },
  {
    id: "unand-poi-worship-01",
    campusId: "unand-limau-manis",
    category: "worship",
    name: "Masjid Nurul Ilmi Universitas Andalas",
    coordinates: { latitude: -0.9135, longitude: 100.4610 },
    description: "Masjid megah kampus Unand di puncak bukit Limau Manis",
  },
  {
    id: "unand-poi-worship-02",
    campusId: "unand-limau-manis",
    category: "worship",
    name: "Masjid Raya Pasar Baru Pauh",
    coordinates: { latitude: -0.9250, longitude: 100.4330 },
    description: "Masjid raya kawasan permukiman Pasar Baru",
  },
  {
    id: "unand-poi-bus-01",
    campusId: "unand-limau-manis",
    category: "bus_stop",
    name: "Terminal Angkot & Bus Kampus Unand",
    coordinates: { latitude: -0.9145, longitude: 100.4600 },
    description: "Titik temu bus kampus gratis dan angkot Pasar Baru",
  },
  {
    id: "unand-poi-bus-02",
    campusId: "unand-limau-manis",
    category: "bus_stop",
    name: "Pangkalan Angkot Pasar Baru",
    coordinates: { latitude: -0.9230, longitude: 100.4352 },
    description: "Rute angkot Pasar Baru - Pasar Raya Padang",
  },
  {
    id: "unand-poi-atm-01",
    campusId: "unand-limau-manis",
    category: "atm",
    name: "Sentra ATM Bank Nagari & Mandiri Rektorat",
    coordinates: { latitude: -0.9140, longitude: 100.4635 },
    description: "Galeri ATM utama di kompleks rektorat Unand",
  },
  {
    id: "unand-poi-atm-02",
    campusId: "unand-limau-manis",
    category: "atm",
    name: "ATM BNI Simpang Pasar Baru",
    coordinates: { latitude: -0.9232, longitude: 100.4350 },
    description: "ATM tarik tunai di depan Indomaret Pasar Baru",
  },
];

export function getPoisByCampus(campusId: "ui-depok" | "unand-limau-manis"): readonly PilotPoi[] {
  return PILOT_POIS.filter((poi) => poi.campusId === campusId);
}
