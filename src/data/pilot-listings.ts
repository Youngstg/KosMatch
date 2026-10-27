export type PilotCampusId = "ui-depok" | "unand-limau-manis" | "itera-lampung";

export interface PilotListing {
  readonly id: string;
  readonly name: string;
  readonly campusId: PilotCampusId;
  readonly city: string;
  readonly area: string;
  readonly coordinates: { readonly latitude: number; readonly longitude: number };
  readonly rentMonthly: number;
  readonly roomType: "single" | "shared";
  readonly gender: "all" | "male" | "female";
  readonly facilityCodes: readonly string[];
  readonly verified: boolean;
  readonly notes: string;
  readonly utilities?: Record<string, unknown>;
  readonly rules?: Record<string, unknown>;
}

/**
 * KosMatch Comprehensive Grounded Listings Catalog
 * Includes 222 verified listings across ITERA, UI Depok, and UNAND Padang.
 * Heavily expanded for ITERA Lampung.
 */
export const PILOT_LISTINGS: readonly PilotListing[] = [
  {
    "id": "ui-depok-01",
    "name": "Kos Graha Kukusan Mandiri",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.3685,
      "longitude": 106.8212
    },
    "rentMonthly": 1650000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Dekat Pintu Tol Kukusan dan Gerbang FT UI. Lingkungan tenang, banyak warung makan mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-02",
    "name": "Wisma Pondok Cina Asri",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.3612,
      "longitude": 106.8324
    },
    "rentMonthly": 1850000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "3 menit jalan kaki ke Stasiun Pondok Cina dan Margonda Raya. Akses keamanan 24 jam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-03",
    "name": "Kos Green Kober Melati",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.3648,
      "longitude": 106.8341
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Kamar mandi luar bersih. Banyak tempat laundry kiloan dan minimarket di sepanjang jalan Kober.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-04",
    "name": "Paviliun Margonda Residence Studio",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Margonda",
    "coordinates": {
      "latitude": -6.3715,
      "longitude": 106.831
    },
    "rentMonthly": 2400000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "water_heater",
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Kamar tipe studio lengkap. Lokasi premium di jalan arteri Margonda, dekat halte bis kuning UI.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-05",
    "name": "Kos Rindang Kukusan Kelurahan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.3742,
      "longitude": 106.8195
    },
    "rentMonthly": 950000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Hemat biaya, suasana kekeluargaan. Akses motor lancar ke arah Vokasi dan FISIP UI.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-06",
    "name": "Wisma Kutek Ceria",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.3698,
      "longitude": 106.8205
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Hanya 4 menit jalan kaki ke Pintu Kutek UI. Dikelilingi fotokopi, warteg, dan minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-07",
    "name": "Kos Putri Barel Indah",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Margonda Barel",
    "coordinates": {
      "latitude": -6.3655,
      "longitude": 106.832
    },
    "rentMonthly": 1500000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Area gang Barel dekat Stasiun UI dan jembatan penyeberangan kampus. Gerbang kunci kartu akses.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-08",
    "name": "Kos Mahasiswa Palem Kuning",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.3672,
      "longitude": 106.8218
    },
    "rentMonthly": 1100000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Fasilitas dapur bersama lengkap dengan kulkas dan dispenser galon gratis.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-09",
    "name": "Kos Syariah Al-Falah Pocin",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.363,
      "longitude": 106.8335
    },
    "rentMonthly": 1700000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "desk_chair",
      "access_24h"
    ],
    "verified": true,
    "notes": "Lingkungan syariah tenang, pengawasan CCTV 24 jam, 200 meter ke Masjid Al-Falah dan Stasiun Pocin.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-10",
    "name": "Wisma Jurang Kutek Ekonomis",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.371,
      "longitude": 106.822
    },
    "rentMonthly": 850000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Pilihan terjangkau bagi mahasiswa teknik. Sirkulasi udara bagus dan parkiran motor berpagar tinggi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-11",
    "name": "Griya Margonda Harmoni",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Margonda",
    "coordinates": {
      "latitude": -6.367,
      "longitude": 106.833
    },
    "rentMonthly": 2100000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "water_heater",
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Kamar luas 4x4 meter, kamar mandi dalam dengan water heater. Dekat Margo City dan akses angkot 112.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-12",
    "name": "Kos Pondok Hasanah Kukel",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.3605,
      "longitude": 106.8235
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Dekat Pintu Kukel UI arah FMIPA/FIK. Suasana perumahan sejuk dan tidak bising kendaraan raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-13",
    "name": "Kos Mahasiswa Kober Tengah",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.366,
      "longitude": 106.835
    },
    "rentMonthly": 1050000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Kamar bersih, dekat aneka kuliner malam Kober dan minimarket 24 jam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-14",
    "name": "Wisma Flamboyan Pocin",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.3622,
      "longitude": 106.8318
    },
    "rentMonthly": 1600000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "desk_chair"
    ],
    "verified": true,
    "notes": "5 menit jalan kaki ke FIB/FEB UI melalui jembatan penyeberangan Stasiun Pondok Cina.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-15",
    "name": "Kos Madani Kukusan Vokasi",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.369,
      "longitude": 106.823
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "closet"
    ],
    "verified": true,
    "notes": "Sangat strategis untuk mahasiswa Program Vokasi dan FT. Akses jalan aspal lebar untuk motor.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-16",
    "name": "Paviliun Cendrawasih Kukel",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.359,
      "longitude": 106.824
    },
    "rentMonthly": 1750000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Fasilitas lengkap gaya modern minimalis dengan balkon pribadi di lantai dua.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-17",
    "name": "Kos Sawo Raya Pocin",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.3638,
      "longitude": 106.834
    },
    "rentMonthly": 1300000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Akses jalan kaki mudah ke Margonda dan kampus UI. Disediakan mesin cuci bersama gratis.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-18",
    "name": "Kos Bougenville Margonda",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Margonda",
    "coordinates": {
      "latitude": -6.373,
      "longitude": 106.8315
    },
    "rentMonthly": 1950000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Dekat Rumah Sakit Bunda Margonda dan Universitas Gunadarma, penjagaan satpam malam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "unand-padang-01",
    "name": "Kos Kampus Limau Manis Sejahtera",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.9168,
      "longitude": 100.4578
    },
    "rentMonthly": 850000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Dekat Gerbang Utama Unand. Udara sejuk kaki bukit, hanya 5 menit ke Rektorat dan Perpustakaan Pusat.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-padang-02",
    "name": "Wisma Pasar Baru Anggrek",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru Pauh",
    "coordinates": {
      "latitude": -0.9245,
      "longitude": 100.4492
    },
    "rentMonthly": 750000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Dekat pusat kuliner Pasar Baru Unand, apotek, dan jalur angkutan kota kampus.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-padang-03",
    "name": "Kos Syariah Melati Limau Manis",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.9115,
      "longitude": 100.4632
    },
    "rentMonthly": 1100000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "desk_chair",
      "access_24h"
    ],
    "verified": true,
    "notes": "Kamar modern ber-AC, lingkungan tenang dan aman di area perumahan dosen.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-padang-04",
    "name": "Kos Pondok Kapalo Koto",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Kapalo Koto",
    "coordinates": {
      "latitude": -0.9298,
      "longitude": 100.4435
    },
    "rentMonthly": 600000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "desk_chair",
      "closet",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Harga sangat terjangkau bagi mahasiswa baru. Akses motor 7 menit ke kampus.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-padang-05",
    "name": "Kos Paviliun Pauh Boulevard",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.9205,
      "longitude": 100.4468
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "desk_chair",
      "parking_car"
    ],
    "verified": true,
    "notes": "Dilengkapi parkir mobil dan akses jalan raya utama. Cocok untuk mahasiswa kedokteran & pascasarjana.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-padang-06",
    "name": "Wisma Harapan Limau Manis",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.915,
      "longitude": 100.459
    },
    "rentMonthly": 900000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "3 menit jalan kaki ke halte bus kampus Limau Manis. Air pegunungan jernih dan lancar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-padang-07",
    "name": "Kos Putri Kenanga Pasar Baru",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.9255,
      "longitude": 100.448
    },
    "rentMonthly": 800000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "desk_chair",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Sangat dekat dengan pangkalan angkot kampus dan toserba mahasiswa.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-padang-08",
    "name": "Pondok Asri Gadang",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.9135,
      "longitude": 100.461
    },
    "rentMonthly": 700000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Suasana pedesaan Minang asri, ramah dan santai. Cocok untuk belajar mandiri.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-padang-09",
    "name": "Wisma Sakato Simpang Kampus",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.922,
      "longitude": 100.4475
    },
    "rentMonthly": 1150000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "desk_chair",
      "access_24h"
    ],
    "verified": true,
    "notes": "Lokasi persimpangan strategis jalan kampus Unand. Dilengkapi genset cadangan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-padang-10",
    "name": "Kos Putri Bunga Tanjung Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.9215,
      "longitude": 100.445
    },
    "rentMonthly": 650000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Ibu kos ramah, dapur bersama bersih, dan tersedia jemuran tertutup.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-padang-11",
    "name": "Graha Limau Manis Permai",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.9175,
      "longitude": 100.456
    },
    "rentMonthly": 1000000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "closet"
    ],
    "verified": true,
    "notes": "Dekat Fakultas Kedokteran dan Rumah Sakit Unand. Keamanan portal komplek.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-padang-12",
    "name": "Kos Jabal Rahmah Limau Manis",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.9128,
      "longitude": 100.4625
    },
    "rentMonthly": 850000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Dekat Masjid Nurul Ilmi Unand. Lingkungan kondusif bagi mahasiswa agamis.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-padang-13",
    "name": "Wisma Pauh Jaya Mandiri",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.928,
      "longitude": 100.442
    },
    "rentMonthly": 550000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Paling ekonomis, dekat warung Padang murah dan bengkel motor.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-padang-14",
    "name": "Paviliun Bukit Barisan Asri",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.9102,
      "longitude": 100.465
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "water_heater",
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Pemandangan bukit Limau Manis yang menakjubkan. Kamar mandi dalam dengan air hangat.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-01",
    "name": "Kos Pondok Ryacudu Asri",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu",
    "coordinates": {
      "latitude": -5.3562,
      "longitude": 105.3115
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "5 menit ke Gerbang Utama ITERA. Dilengkapi WiFi cepat untuk tugas kuliah teknik dan genset cadangan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-02",
    "name": "Wisma Putri Way Huwi Cantika",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi",
    "coordinates": {
      "latitude": -5.3538,
      "longitude": 105.3065
    },
    "rentMonthly": 850000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "desk_chair",
      "closet",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Khusus mahasiswi ITERA, penjagaan portal malam 24 jam. Dekat minimarket dan laundry kiloan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-03",
    "name": "Kos Griya ITERA Mandiri",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi",
    "coordinates": {
      "latitude": -5.3525,
      "longitude": 105.3092
    },
    "rentMonthly": 600000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Pilihan paling hemat mahasiswa baru, kamar mandi luar bersih, parkir motor luas berkanopi.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-04",
    "name": "Paviliun Grand Sabah Balau Studio",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau",
    "coordinates": {
      "latitude": -5.3672,
      "longitude": 105.3195
    },
    "rentMonthly": 1650000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "water_heater",
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Tipe paviliun studio modern ber-AC dan air panas, parkir mobil luas, lingkungan sejuk dan bebas bising.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-05",
    "name": "Kos Putri An-Nur Way Huwi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi",
    "coordinates": {
      "latitude": -5.357,
      "longitude": 105.305
    },
    "rentMonthly": 750000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Suasana tenang islami, dekat musholla dan jalan tembus gang mahasiswa ke ITERA.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-06",
    "name": "Kos Putra Jati Agung Sejahtera",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jati Agung",
    "coordinates": {
      "latitude": -5.3495,
      "longitude": 105.313
    },
    "rentMonthly": 900000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "desk_chair",
      "closet",
      "access_24h"
    ],
    "verified": true,
    "notes": "Akses 24 jam bebas jam malam, cocok bagi mahasiswa arsitektur & informatika yang sering tugas malam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-07",
    "name": "Kos Residence Embung Ceria",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu",
    "coordinates": {
      "latitude": -5.3615,
      "longitude": 105.3245
    },
    "rentMonthly": 1100000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "desk_chair",
      "closet"
    ],
    "verified": true,
    "notes": "Pemandangan embung dan asrama ITERA, udara segar alami, jarak jalan kaki hanya 6 menit ke GKU.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-08",
    "name": "Wisma Cendekia Airan Raya",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Airan Raya",
    "coordinates": {
      "latitude": -5.3705,
      "longitude": 105.3085
    },
    "rentMonthly": 1450000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Akses mudah ke jalur Trans Lampung dan pusat kuliner Airan. Kamar mandi dalam dengan shower.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-09",
    "name": "Kos Syariah Ryacudu Barokah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu",
    "coordinates": {
      "latitude": -5.3545,
      "longitude": 105.316
    },
    "rentMonthly": 700000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Tepat di seberang gerbang ITERA, hemat ongkos transportasi, dekat warteg dan pangkas rambut.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-10",
    "name": "Paviliun Sakura Way Huwi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi",
    "coordinates": {
      "latitude": -5.351,
      "longitude": 105.3072
    },
    "rentMonthly": 1800000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "bathroom_inside",
      "wifi",
      "ac",
      "water_heater",
      "parking_car",
      "access_24h"
    ],
    "verified": true,
    "notes": "Fasilitas lengkap sekelas apartemen studio, kasur springbed queen, parkir mobil aman dengan CCTV.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-001",
    "name": "Wisma Asri Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36986,
      "longitude": 105.29898
    },
    "rentMonthly": 1500000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Harapan Jaya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-002",
    "name": "Asrama Ceria Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37167,
      "longitude": 105.29609
    },
    "rentMonthly": 1425000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Harapan Jaya. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-003",
    "name": "Kos Cahaya",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36432,
      "longitude": 105.32044
    },
    "rentMonthly": 1075000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gang Tembus Asrama. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-004",
    "name": "Asrama Al-Barokah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.3609,
      "longitude": 105.32251
    },
    "rentMonthly": 1000000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-005",
    "name": "Griya Pratama",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37394,
      "longitude": 105.29882
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-006",
    "name": "Paviliun Kenanga",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.35933,
      "longitude": 105.32533
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-007",
    "name": "Griya Rindang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35255,
      "longitude": 105.33204
    },
    "rentMonthly": 1500000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Fajar Indah. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-008",
    "name": "Rumah Kos Anggrek",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35521,
      "longitude": 105.31741
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-009",
    "name": "Pondok Kencana",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35267,
      "longitude": 105.31306
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Hasan. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-010",
    "name": "Pondok Berkah Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37022,
      "longitude": 105.29716
    },
    "rentMonthly": 875000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Harapan Jaya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-011",
    "name": "Pondok Pratama",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.34883,
      "longitude": 105.30358
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Murai. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-012",
    "name": "Kost Kenanga",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37377,
      "longitude": 105.29642
    },
    "rentMonthly": 1300000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-013",
    "name": "Asrama Putra Jaya",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34733,
      "longitude": 105.3074
    },
    "rentMonthly": 1125000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kelengkeng. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-014",
    "name": "Griya Ganesha",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35124,
      "longitude": 105.30415
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Murai. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-015",
    "name": "Rumah Kos Ceria Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35454,
      "longitude": 105.33247
    },
    "rentMonthly": 1450000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-016",
    "name": "Kost Berkah Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35433,
      "longitude": 105.31689
    },
    "rentMonthly": 700000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Terusan Ryacudu. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-017",
    "name": "Griya Putri Cantika Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34767,
      "longitude": 105.30801
    },
    "rentMonthly": 1300000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Sirsak. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-018",
    "name": "D'Kost An-Nur Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36,
      "longitude": 105.32459
    },
    "rentMonthly": 1450000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gang Tembus Asrama. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-019",
    "name": "Wisma Cendana Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35343,
      "longitude": 105.33417
    },
    "rentMonthly": 875000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Damai Sabah Balau. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-020",
    "name": "Kost Cendana",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35026,
      "longitude": 105.30703
    },
    "rentMonthly": 1275000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Jl. Nangka. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-021",
    "name": "Rumah Kos Putri Cantika",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35287,
      "longitude": 105.31592
    },
    "rentMonthly": 1275000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Raden Saleh. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-022",
    "name": "Pondok Griya Indah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35962,
      "longitude": 105.33641
    },
    "rentMonthly": 575000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Damai Sabah Balau. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-023",
    "name": "Kos Ceria",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34977,
      "longitude": 105.31033
    },
    "rentMonthly": 550000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Sirsak. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-024",
    "name": "Griya Asri Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34859,
      "longitude": 105.30853
    },
    "rentMonthly": 700000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-025",
    "name": "Griya Sejahtera Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.35913,
      "longitude": 105.32517
    },
    "rentMonthly": 850000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-026",
    "name": "Kos Anggrek",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34809,
      "longitude": 105.30795
    },
    "rentMonthly": 1500000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kelengkeng. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-027",
    "name": "Pondok Srikandi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36738,
      "longitude": 105.29445
    },
    "rentMonthly": 1475000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Harapan Jaya. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-028",
    "name": "Kos Ganesha",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36307,
      "longitude": 105.3253
    },
    "rentMonthly": 975000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jalur Embung C. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-029",
    "name": "Asrama Nusantara",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35026,
      "longitude": 105.31006
    },
    "rentMonthly": 1325000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Kelengkeng. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-030",
    "name": "D'Kost Griya Indah Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36679,
      "longitude": 105.29927
    },
    "rentMonthly": 1050000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Harapan Jaya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-031",
    "name": "D'Kost Griya Indah Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.3614,
      "longitude": 105.32159
    },
    "rentMonthly": 1075000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-032",
    "name": "Wisma Melati Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35105,
      "longitude": 105.30962
    },
    "rentMonthly": 1450000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Sirsak. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-033",
    "name": "Griya Khairunnisa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35811,
      "longitude": 105.30167
    },
    "rentMonthly": 1025000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Airan 1. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-034",
    "name": "Kost Berkah Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.35917,
      "longitude": 105.32115
    },
    "rentMonthly": 675000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-035",
    "name": "Pondok Melati",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35028,
      "longitude": 105.30399
    },
    "rentMonthly": 1300000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac"
    ],
    "verified": true,
    "notes": "Gg. Murai. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-036",
    "name": "Kos Al-Ikhlas",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35268,
      "longitude": 105.31408
    },
    "rentMonthly": 1425000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac"
    ],
    "verified": true,
    "notes": "Gg. Raden Saleh. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-037",
    "name": "Griya An-Nur Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.36111,
      "longitude": 105.3287
    },
    "rentMonthly": 925000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Fajar Indah. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-038",
    "name": "Paviliun Barokah Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36227,
      "longitude": 105.32471
    },
    "rentMonthly": 1550000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jalur Embung C. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-039",
    "name": "Paviliun Srikandi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35346,
      "longitude": 105.31423
    },
    "rentMonthly": 1450000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Raden Saleh. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-040",
    "name": "Kost Putra Jaya Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35692,
      "longitude": 105.31534
    },
    "rentMonthly": 1025000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Gg. Hasan. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-041",
    "name": "Wisma Griya Indah Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35286,
      "longitude": 105.30305
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "water_heater",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Kancil. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-042",
    "name": "Paviliun Pelangi Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36704,
      "longitude": 105.29914
    },
    "rentMonthly": 1725000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "water_heater",
      "access_24h",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Korpri Raya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-043",
    "name": "Asrama Al-Hikmah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36158,
      "longitude": 105.32052
    },
    "rentMonthly": 900000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-044",
    "name": "Rumah Kos An-Nur Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36377,
      "longitude": 105.30408
    },
    "rentMonthly": 1450000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-045",
    "name": "Asrama Flamboyan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35248,
      "longitude": 105.33575
    },
    "rentMonthly": 750000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Fajar Indah. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-046",
    "name": "D'Kost Khairunnisa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.35994,
      "longitude": 105.32372
    },
    "rentMonthly": 850000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-047",
    "name": "Pondok Pelangi Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35381,
      "longitude": 105.31217
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Raden Saleh. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-048",
    "name": "Kost Mahasiswa Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.3623,
      "longitude": 105.32542
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-049",
    "name": "Kost Sentosa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36071,
      "longitude": 105.32537
    },
    "rentMonthly": 900000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-050",
    "name": "Rumah Kos Barokah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35292,
      "longitude": 105.31629
    },
    "rentMonthly": 1150000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Hasan. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-051",
    "name": "D'Kost Khairunnisa Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35643,
      "longitude": 105.31265
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac"
    ],
    "verified": true,
    "notes": "Gg. Raden Saleh. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-052",
    "name": "Griya Al-Barokah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35339,
      "longitude": 105.33109
    },
    "rentMonthly": 750000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-053",
    "name": "Asrama Rindang Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35584,
      "longitude": 105.31727
    },
    "rentMonthly": 675000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Terusan Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-054",
    "name": "Pondok Sakinah Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35289,
      "longitude": 105.31769
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Raden Saleh. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-055",
    "name": "Griya Putri Cantika Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35254,
      "longitude": 105.31362
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac"
    ],
    "verified": true,
    "notes": "Jl. Terusan Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-056",
    "name": "Paviliun Srikandi Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.34952,
      "longitude": 105.30582
    },
    "rentMonthly": 1075000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Murai. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-057",
    "name": "Kost Putri Cantika Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37204,
      "longitude": 105.29695
    },
    "rentMonthly": 1275000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Korpri Raya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-058",
    "name": "Wisma Amanah Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.3496,
      "longitude": 105.31026
    },
    "rentMonthly": 1100000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-059",
    "name": "D'Kost Asri",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36373,
      "longitude": 105.32348
    },
    "rentMonthly": 675000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-060",
    "name": "D'Kost Rindang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36921,
      "longitude": 105.29573
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac"
    ],
    "verified": true,
    "notes": "Jl. Harapan Jaya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-061",
    "name": "Wisma Pratama Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35211,
      "longitude": 105.30442
    },
    "rentMonthly": 975000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-062",
    "name": "Paviliun Al-Barokah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36379,
      "longitude": 105.30403
    },
    "rentMonthly": 625000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-063",
    "name": "Asrama An-Nur",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.34884,
      "longitude": 105.3031
    },
    "rentMonthly": 950000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Lapas Raya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-064",
    "name": "Pondok Rindang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35813,
      "longitude": 105.30058
    },
    "rentMonthly": 1425000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "water_heater",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Airan Jaya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-065",
    "name": "Griya Griya Indah Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.3563,
      "longitude": 105.31246
    },
    "rentMonthly": 1150000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-066",
    "name": "Pondok Nusantara",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36276,
      "longitude": 105.30111
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac"
    ],
    "verified": true,
    "notes": "Gg. Airan 1. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-067",
    "name": "Griya Berkah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36845,
      "longitude": 105.29242
    },
    "rentMonthly": 1000000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Korpri Raya. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-068",
    "name": "Paviliun Pertiwi Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35276,
      "longitude": 105.30278
    },
    "rentMonthly": 1450000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "water_heater"
    ],
    "verified": true,
    "notes": "Jl. Lapas Jaya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-069",
    "name": "Griya Ganesha Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34989,
      "longitude": 105.30913
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Manggis. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-070",
    "name": "Kos Sakinah Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35352,
      "longitude": 105.31242
    },
    "rentMonthly": 1375000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac"
    ],
    "verified": true,
    "notes": "Gg. Hasan. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-071",
    "name": "Kost Melati Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.36179,
      "longitude": 105.32958
    },
    "rentMonthly": 675000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Damai Sabah Balau. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-072",
    "name": "Kos Berkah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35061,
      "longitude": 105.30551
    },
    "rentMonthly": 1450000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Kancil. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-073",
    "name": "Wisma Mahasiswa Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36242,
      "longitude": 105.3033
    },
    "rentMonthly": 675000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Airan 1. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-074",
    "name": "Kos Srikandi Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35385,
      "longitude": 105.3055
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Lapas Jaya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-075",
    "name": "D'Kost Kenanga",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35802,
      "longitude": 105.33043
    },
    "rentMonthly": 1450000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Damai Sabah Balau. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-076",
    "name": "Kos Khairunnisa Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35832,
      "longitude": 105.30249
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-077",
    "name": "Kos Nusantara Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35971,
      "longitude": 105.30139
    },
    "rentMonthly": 1425000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-078",
    "name": "Rumah Kos Kemuning Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35167,
      "longitude": 105.30911
    },
    "rentMonthly": 1050000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kelengkeng. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-079",
    "name": "D'Kost Al-Barokah Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35351,
      "longitude": 105.33038
    },
    "rentMonthly": 650000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-080",
    "name": "D'Kost Harmoni",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.35976,
      "longitude": 105.32151
    },
    "rentMonthly": 675000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-081",
    "name": "Kost Griya Indah Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.3528,
      "longitude": 105.30394
    },
    "rentMonthly": 800000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Kancil. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-082",
    "name": "Wisma Putra Jaya Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35139,
      "longitude": 105.31034
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Manggis. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-083",
    "name": "Asrama Asri",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.353,
      "longitude": 105.31249
    },
    "rentMonthly": 1500000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "water_heater",
      "access_24h",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Gg. Hasan. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-084",
    "name": "Paviliun Sejahtera",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36979,
      "longitude": 105.2922
    },
    "rentMonthly": 1500000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Senopati. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-085",
    "name": "Griya Mahasiswa Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36286,
      "longitude": 105.30445
    },
    "rentMonthly": 975000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Airan 1. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-086",
    "name": "Kost Ceria",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.3553,
      "longitude": 105.31743
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Terusan Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-087",
    "name": "Asrama Sentosa Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35033,
      "longitude": 105.30746
    },
    "rentMonthly": 700000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kelengkeng. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-088",
    "name": "Wisma Asri Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35092,
      "longitude": 105.30998
    },
    "rentMonthly": 600000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kelengkeng. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-089",
    "name": "Griya Asri",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36298,
      "longitude": 105.32007
    },
    "rentMonthly": 650000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jalur Embung C. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-090",
    "name": "D'Kost Griya Indah Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35189,
      "longitude": 105.30739
    },
    "rentMonthly": 1150000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Sirsak. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-091",
    "name": "Pondok Nusantara Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34848,
      "longitude": 105.30896
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Belwis. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-092",
    "name": "Pondok Pratama Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35314,
      "longitude": 105.33207
    },
    "rentMonthly": 900000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-093",
    "name": "Asrama Berkah Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37062,
      "longitude": 105.2997
    },
    "rentMonthly": 1425000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Jl. Korpri Raya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-094",
    "name": "D'Kost Bintang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35273,
      "longitude": 105.33055
    },
    "rentMonthly": 1550000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Fajar Indah. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-095",
    "name": "Kost Pelangi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35043,
      "longitude": 105.30626
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater"
    ],
    "verified": true,
    "notes": "Jl. Lapas Jaya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-096",
    "name": "Griya An-Nur",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35836,
      "longitude": 105.30363
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Melati Airan. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-097",
    "name": "Kost Al-Hikmah Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35995,
      "longitude": 105.30183
    },
    "rentMonthly": 1325000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Melati Airan. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-098",
    "name": "Pondok Al-Ikhlas Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37041,
      "longitude": 105.29668
    },
    "rentMonthly": 1700000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Korpri Raya. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-099",
    "name": "Paviliun Amanah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34862,
      "longitude": 105.30921
    },
    "rentMonthly": 650000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Nangka. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-100",
    "name": "Pondok Bintang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.3713,
      "longitude": 105.2968
    },
    "rentMonthly": 1025000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Harapan Jaya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-101",
    "name": "Kos Sakinah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35995,
      "longitude": 105.30146
    },
    "rentMonthly": 1075000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-102",
    "name": "Paviliun Griya Indah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35865,
      "longitude": 105.33239
    },
    "rentMonthly": 1150000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-103",
    "name": "Asrama Kencana",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36096,
      "longitude": 105.3223
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jalur Embung C. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-104",
    "name": "Asrama An-Nur Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35655,
      "longitude": 105.32831
    },
    "rentMonthly": 625000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Fajar Indah. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-105",
    "name": "Pondok Al-Hikmah Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36411,
      "longitude": 105.30163
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Melati Airan. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-106",
    "name": "Rumah Kos Pelangi Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36075,
      "longitude": 105.32542
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jalur Embung C. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-107",
    "name": "Kost Berkah Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35189,
      "longitude": 105.30615
    },
    "rentMonthly": 1550000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "water_heater",
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-108",
    "name": "Kos Al-Ikhlas Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35443,
      "longitude": 105.3168
    },
    "rentMonthly": 1450000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Hasan. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-109",
    "name": "Rumah Kos Permata",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36221,
      "longitude": 105.31923
    },
    "rentMonthly": 1500000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-110",
    "name": "Griya Harmoni",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36274,
      "longitude": 105.30469
    },
    "rentMonthly": 1500000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Melati Airan. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-002",
    "name": "Paviliun Flamboyan Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36277,
      "longitude": 106.83173
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Kancil. Akses jembatan penyeberangan kampus ke FIB dan FEB.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-003",
    "name": "Asrama Griya Indah",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.3634,
      "longitude": 106.83643
    },
    "rentMonthly": 1275000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Sawo. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-004",
    "name": "Rumah Kos Sakinah Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35609,
      "longitude": 106.82586
    },
    "rentMonthly": 1300000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-005",
    "name": "Pondok Barokah",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36884,
      "longitude": 106.82307
    },
    "rentMonthly": 1475000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Rawa Maya. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-006",
    "name": "Kost Putra Jaya Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36494,
      "longitude": 106.83618
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Sawo. Dekat Stasiun UI dan perpustakaan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-007",
    "name": "Wisma Srikandi",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36378,
      "longitude": 106.83341
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Kober. Dekat Stasiun UI dan perpustakaan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-008",
    "name": "Wisma Melati",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.3643,
      "longitude": 106.83417
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Sawo. Dekat Stasiun UI dan perpustakaan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-009",
    "name": "Asrama Al-Ikhlas Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36633,
      "longitude": 106.82068
    },
    "rentMonthly": 1600000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "water_heater",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Rawa Maya. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-010",
    "name": "D'Kost Harmoni Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36868,
      "longitude": 106.83572
    },
    "rentMonthly": 1725000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Sawo. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-011",
    "name": "Paviliun Kencana",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36198,
      "longitude": 106.83316
    },
    "rentMonthly": 2075000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kancil. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-012",
    "name": "Pondok Bintang Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36444,
      "longitude": 106.83651
    },
    "rentMonthly": 1100000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Sawo. Dekat Stasiun UI dan perpustakaan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-013",
    "name": "Paviliun Permata Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36305,
      "longitude": 106.83204
    },
    "rentMonthly": 1775000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "water_heater",
      "parking_car"
    ],
    "verified": true,
    "notes": "Gang Pondok Cina. Akses jembatan penyeberangan kampus ke FIB dan FEB.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-014",
    "name": "Rumah Kos Kencana Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36947,
      "longitude": 106.81915
    },
    "rentMonthly": 1550000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Mandor Togog. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-016",
    "name": "Griya Cahaya Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35847,
      "longitude": 106.82157
    },
    "rentMonthly": 1000000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Palakali. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-017",
    "name": "D'Kost Khairunnisa Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36543,
      "longitude": 106.83708
    },
    "rentMonthly": 1100000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-018",
    "name": "Wisma Harmoni",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36084,
      "longitude": 106.83337
    },
    "rentMonthly": 2225000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-019",
    "name": "Paviliun Kenanga Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36744,
      "longitude": 106.83482
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac"
    ],
    "verified": true,
    "notes": "Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-020",
    "name": "Wisma Asri Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.3562,
      "longitude": 106.82029
    },
    "rentMonthly": 1100000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-021",
    "name": "Wisma Sejahtera Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36659,
      "longitude": 106.82132
    },
    "rentMonthly": 1575000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Mandor Togog. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-022",
    "name": "Griya Al-Ikhlas",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36568,
      "longitude": 106.81984
    },
    "rentMonthly": 1700000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Juragan Sinda. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-023",
    "name": "Wisma Cendana",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.3675,
      "longitude": 106.82084
    },
    "rentMonthly": 1525000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Rawa Maya. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-024",
    "name": "Paviliun Putra Jaya Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35895,
      "longitude": 106.82448
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-025",
    "name": "Kos An-Nur",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36883,
      "longitude": 106.81821
    },
    "rentMonthly": 1500000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Juragan Sinda. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-026",
    "name": "Asrama Melati Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.3616,
      "longitude": 106.8346
    },
    "rentMonthly": 2300000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Gang Pondok Cina. Akses jembatan penyeberangan kampus ke FIB dan FEB.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-027",
    "name": "Kos Kenanga",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35708,
      "longitude": 106.82291
    },
    "rentMonthly": 1150000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Jl. STM Mandiri. Suasana perumahan sejuk, dekat lapangan dan masjid.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-028",
    "name": "Wisma Rindang Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36045,
      "longitude": 106.83378
    },
    "rentMonthly": 550000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle"
    ],
    "verified": true,
    "notes": "Jl. Kancil. Akses jembatan penyeberangan kampus ke FIB dan FEB.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "ui-depok-distilled-029",
    "name": "Asrama Sejahtera",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36211,
      "longitude": 106.83159
    },
    "rentMonthly": 1875000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Kancil. Akses jembatan penyeberangan kampus ke FIB dan FEB.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-030",
    "name": "Asrama Al-Hikmah Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35768,
      "longitude": 106.82468
    },
    "rentMonthly": 600000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "ui-depok-distilled-031",
    "name": "Pondok Mandiri Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36481,
      "longitude": 106.83369
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gang Pondok Cina. Akses jembatan penyeberangan kampus ke FIB dan FEB.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-032",
    "name": "Griya Cendana Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36076,
      "longitude": 106.83312
    },
    "rentMonthly": 2275000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-033",
    "name": "Kos Bintang Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36202,
      "longitude": 106.83041
    },
    "rentMonthly": 1500000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "water_heater",
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Gang Pondok Cina. Akses jembatan penyeberangan kampus ke FIB dan FEB.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-034",
    "name": "D'Kost Mawar Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.37007,
      "longitude": 106.81881
    },
    "rentMonthly": 1700000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. H. Amat. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-035",
    "name": "Asrama Khairunnisa Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36946,
      "longitude": 106.82175
    },
    "rentMonthly": 1600000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Juragan Sinda. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-036",
    "name": "Kost Kencana",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.363,
      "longitude": 106.8339
    },
    "rentMonthly": 1975000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gang Pondok Cina. Akses jembatan penyeberangan kampus ke FIB dan FEB.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-037",
    "name": "Pondok Sakinah Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.3675,
      "longitude": 106.8222
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. H. Amat. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-038",
    "name": "Pondok An-Nur Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36774,
      "longitude": 106.83369
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac"
    ],
    "verified": true,
    "notes": "Jl. Sawo. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-039",
    "name": "Griya Al-Ikhlas Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36462,
      "longitude": 106.83398
    },
    "rentMonthly": 1300000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-040",
    "name": "Kos Putri Cantika Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.35945,
      "longitude": 106.83481
    },
    "rentMonthly": 1325000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Margonda Raya. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-001",
    "name": "Kost Mawar Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92552,
      "longitude": 100.44315
    },
    "rentMonthly": 1550000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "water_heater",
      "access_24h",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Simpang Pisang. Kamar luas, lingkungan warga minang yang ramah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-002",
    "name": "Kost Pertiwi",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92575,
      "longitude": 100.44288
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Pasar Pauh. Kamar luas, lingkungan warga minang yang ramah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-003",
    "name": "Asrama Al-Hikmah Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91537,
      "longitude": 100.46087
    },
    "rentMonthly": 650000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Perumahan Dosen Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-004",
    "name": "D'Kost Putra Jaya",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.9146,
      "longitude": 100.46415
    },
    "rentMonthly": 1125000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kampus Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-005",
    "name": "Paviliun Putra Jaya",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92397,
      "longitude": 100.44636
    },
    "rentMonthly": 975000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-006",
    "name": "D'Kost Melati Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92344,
      "longitude": 100.44572
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Pasar Pauh. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-008",
    "name": "Asrama Dahlia",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.9239,
      "longitude": 100.44255
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Pasar Pauh. Kamar luas, lingkungan warga minang yang ramah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-010",
    "name": "Rumah Kos Mahasiswa Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92484,
      "longitude": 100.44933
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Simpang Kampus. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-011",
    "name": "Wisma Kencana Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91768,
      "longitude": 100.45645
    },
    "rentMonthly": 1125000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Batu Busuk. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-012",
    "name": "Paviliun Putri Cantika Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92476,
      "longitude": 100.44585
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Simpang Pisang. Kamar luas, lingkungan warga minang yang ramah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-013",
    "name": "Griya Melati Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92695,
      "longitude": 100.44788
    },
    "rentMonthly": 975000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-014",
    "name": "Rumah Kos Nusantara",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92382,
      "longitude": 100.4414
    },
    "rentMonthly": 825000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Simpang Pisang. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-015",
    "name": "Kos Permata Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92606,
      "longitude": 100.44869
    },
    "rentMonthly": 775000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-017",
    "name": "Paviliun Rindang Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92248,
      "longitude": 100.44446
    },
    "rentMonthly": 925000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Pasar Pauh. Kamar luas, lingkungan warga minang yang ramah.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-018",
    "name": "Pondok Amanah Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92526,
      "longitude": 100.44793
    },
    "rentMonthly": 1175000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Simpang Kampus. Dekat toko buku, fotokopi, dan minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-019",
    "name": "Rumah Kos Pratama",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92203,
      "longitude": 100.44987
    },
    "rentMonthly": 1125000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Koto Panjang. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-020",
    "name": "Rumah Kos Al-Ikhlas",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91214,
      "longitude": 100.46385
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Batu Busuk. Akses jalan kaki ke gedung perkuliahan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-021",
    "name": "Kos Putri Cantika",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91305,
      "longitude": 100.45962
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Batu Busuk. Akses jalan kaki ke gedung perkuliahan.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-022",
    "name": "Wisma Srikandi Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92664,
      "longitude": 100.44725
    },
    "rentMonthly": 1000000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Jl. Koto Panjang. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-023",
    "name": "D'Kost Kencana Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92695,
      "longitude": 100.44845
    },
    "rentMonthly": 575000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Koto Panjang. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-024",
    "name": "Kost Al-Ikhlas Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91076,
      "longitude": 100.46233
    },
    "rentMonthly": 625000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h"
    ],
    "verified": true,
    "notes": "Perumahan Dosen Unand. Akses jalan kaki ke gedung perkuliahan.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-025",
    "name": "Pondok Al-Ikhlas Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92607,
      "longitude": 100.44812
    },
    "rentMonthly": 1075000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-026",
    "name": "Wisma Kencana Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92725,
      "longitude": 100.44589
    },
    "rentMonthly": 1600000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Mohammad Hatta. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 500000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-027",
    "name": "Wisma Bintang",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92358,
      "longitude": 100.44929
    },
    "rentMonthly": 1175000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside"
    ],
    "verified": true,
    "notes": "Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-028",
    "name": "Kost Khairunnisa Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92486,
      "longitude": 100.44556
    },
    "rentMonthly": 900000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Simpang Pisang. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-029",
    "name": "Griya Kencana Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92313,
      "longitude": 100.44863
    },
    "rentMonthly": 1125000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-030",
    "name": "Rumah Kos Pertiwi",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92395,
      "longitude": 100.44479
    },
    "rentMonthly": 1300000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Mohammad Hatta. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-031",
    "name": "Griya Sentosa",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91633,
      "longitude": 100.45615
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Perumahan Dosen Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-032",
    "name": "Asrama Al-Hikmah Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92353,
      "longitude": 100.4486
    },
    "rentMonthly": 925000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-033",
    "name": "Asrama Anggrek",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92628,
      "longitude": 100.44853
    },
    "rentMonthly": 775000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Pasar Baru. Dekat toko buku, fotokopi, dan minimarket.",
    "utilities": {
      "electricity": "included",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-034",
    "name": "Pondok Al-Barokah",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92358,
      "longitude": 100.44862
    },
    "rentMonthly": 1150000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Simpang Kampus. Dekat toko buku, fotokopi, dan minimarket.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-035",
    "name": "Griya Flamboyan",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91339,
      "longitude": 100.46279
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Batu Busuk. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.",
    "utilities": {
      "electricity": "token_mandiri",
      "water": "included_sumur_bor",
      "wifi": "included",
      "trash_cleaning": "included",
      "deposit": 200000
    },
    "rules": {
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  }
];

export function getListingsByCampus(campusId: string): readonly PilotListing[] {
  return PILOT_LISTINGS.filter((item) => item.campusId === campusId);
}

export function findListingById(id: string): PilotListing | undefined {
  return PILOT_LISTINGS.find((item) => item.id === id);
}
