export interface PilotListing {
  readonly id: string;
  readonly name: string;
  readonly campusId: "ui-depok" | "unand-limau-manis";
  readonly city: string;
  readonly area: string;
  readonly coordinates: { readonly latitude: number; readonly longitude: number };
  readonly rentMonthly: number;
  readonly roomType: "single" | "shared";
  readonly gender: "all" | "male" | "female";
  readonly facilityCodes: readonly string[];
  readonly verified: boolean;
  readonly notes: string;
}

export const PILOT_LISTINGS: readonly PilotListing[] = [
  // --- UI Depok (Margonda, Kukusan, Kober, Pondok Cina) ---
  {
    id: "ui-depok-01",
    name: "Kos Graha Kukusan Mandiri",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan Teknik",
    coordinates: { latitude: -6.3685, longitude: 106.8212 },
    rentMonthly: 1_650_000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "closet"],
    verified: true,
    notes: "Dekat Pintu Tol Kukusan dan Gerbang FT UI. Lingkungan tenang, banyak warung makan mahasiswa.",
  },
  {
    id: "ui-depok-02",
    name: "Wisma Pondok Cina Asri",
    campusId: "ui-depok",
    city: "Depok",
    area: "Pondok Cina",
    coordinates: { latitude: -6.3612, longitude: 106.8324 },
    rentMonthly: 1_850_000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "water_heater", "access_24h"],
    verified: true,
    notes: "3 menit jalan kaki ke Stasiun Pondok Cina dan Margonda Raya. Akses keamanan 24 jam.",
  },
  {
    id: "ui-depok-03",
    name: "Kos Green Kober Melati",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kober",
    coordinates: { latitude: -6.3648, longitude: 106.8341 },
    rentMonthly: 1_250_000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Kamar mandi luar bersih. Banyak tempat laundry kiloan dan minimarket di sepanjang jalan Kober.",
  },
  {
    id: "ui-depok-04",
    name: "Paviliun Margonda Residence Studio",
    campusId: "ui-depok",
    city: "Depok",
    area: "Margonda",
    coordinates: { latitude: -6.3715, longitude: 106.831 },
    rentMonthly: 2_400_000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "water_heater", "access_24h", "parking_car"],
    verified: true,
    notes: "Kamar tipe studio lengkap. Lokasi premium di jalan arteri Margonda, dekat halte bis kuning UI.",
  },
  {
    id: "ui-depok-05",
    name: "Kos Rindang Kukusan Kelurahan",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan Kelurahan",
    coordinates: { latitude: -6.3742, longitude: 106.8195 },
    rentMonthly: 950_000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Hemat biaya, suasana kekeluargaan. Akses motor lancar ke arah Vokasi dan FISIP UI.",
  },

  // --- Unand Padang (Limau Manis, Pasar Baru, Pauh) ---
  {
    id: "unand-padang-01",
    name: "Kos Kampus Limau Manis Sejahtera",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Limau Manis",
    coordinates: { latitude: -0.9168, longitude: 100.4578 },
    rentMonthly: 850_000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Dekat Gerbang Utama Unand. Udara sejuk kaki bukit, hanya 5 menit ke Rektorat dan Perpustakaan Pusat.",
  },
  {
    id: "unand-padang-02",
    name: "Wisma Pasar Baru Anggrek",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Pasar Baru Pauh",
    coordinates: { latitude: -0.9245, longitude: 100.4492 },
    rentMonthly: 750_000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Dekat pusat kuliner Pasar Baru Unand, apotek, dan jalur angkutan kota kampus.",
  },
  {
    id: "unand-padang-03",
    name: "Kos Syariah Melati Limau Manis",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Limau Manis",
    coordinates: { latitude: -0.9115, longitude: 100.4632 },
    rentMonthly: 1_100_000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "access_24h"],
    verified: true,
    notes: "Kamar modern ber-AC, lingkungan tenang dan aman di area perumahan dosen.",
  },
  {
    id: "unand-padang-04",
    name: "Kos Pondok Kapalo Koto",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Kapalo Koto",
    coordinates: { latitude: -0.9298, longitude: 100.4435 },
    rentMonthly: 600_000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Harga sangat terjangkau bagi mahasiswa baru. Akses motor 7 menit ke kampus.",
  },
  {
    id: "unand-padang-05",
    name: "Kos Paviliun Pauh Boulevard",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Pauh",
    coordinates: { latitude: -0.9205, longitude: 100.4468 },
    rentMonthly: 1_250_000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "parking_car"],
    verified: true,
    notes: "Dilengkapi parkir mobil dan akses jalan raya utama. Cocok untuk mahasiswa kedokteran & pascasarjana.",
  },
];

export function getListingsByCampus(campusId: string): readonly PilotListing[] {
  return PILOT_LISTINGS.filter((item) => item.campusId === campusId);
}
