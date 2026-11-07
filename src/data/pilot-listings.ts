export type PilotCampusId = "ui-depok" | "unand-limau-manis" | "itera-lampung" | "unila-bandarlampung" | "unp-padang";

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
 * Includes 285 verified listings across UI Depok, UNAND Padang, ITERA Lampung, UNILA, and UNP.
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
    "name": "Rumah Kos Dahlia Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36471,
      "longitude": 105.30562
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
    "notes": "Jl. Airan Raya. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.",
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
    "id": "itera-lampung-distilled-002",
    "name": "Kost Srikandi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.36086,
      "longitude": 105.32896
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
    "notes": "Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
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
    "id": "itera-lampung-distilled-003",
    "name": "Kos Mandiri Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35003,
      "longitude": 105.31024
    },
    "rentMonthly": 1125000,
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
    "id": "itera-lampung-distilled-004",
    "name": "Wisma Pratama",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35376,
      "longitude": 105.30664
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
    "id": "itera-lampung-distilled-005",
    "name": "D'Kost Berkah Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36616,
      "longitude": 105.29985
    },
    "rentMonthly": 1150000,
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
    "id": "itera-lampung-distilled-006",
    "name": "Wisma Cahaya",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.36133,
      "longitude": 105.3333
    },
    "rentMonthly": 575000,
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
    "notes": "Jl. Fajar Indah. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
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
    "id": "itera-lampung-distilled-007",
    "name": "Rumah Kos Pratama Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35161,
      "longitude": 105.30368
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
      "water_heater",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Lapas Raya. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir.",
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
    "id": "itera-lampung-distilled-008",
    "name": "D'Kost Putra Jaya Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35357,
      "longitude": 105.31221
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
      "access_24h"
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
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-009",
    "name": "D'Kost Khairunnisa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35495,
      "longitude": 105.33338
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
    "notes": "Gg. Damai Sabah Balau. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.",
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
    "id": "itera-lampung-distilled-010",
    "name": "Rumah Kos Cendana",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36415,
      "longitude": 105.30309
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
      "ac"
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-011",
    "name": "Kost Pelangi Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.35901,
      "longitude": 105.32067
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
      "shared_kitchen"
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
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-012",
    "name": "Kost Melati",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.3613,
      "longitude": 105.32493
    },
    "rentMonthly": 700000,
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
    "notes": "Jalur Embung C. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.",
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
    "id": "itera-lampung-distilled-013",
    "name": "Pondok Anggrek",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36782,
      "longitude": 105.2995
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
    "notes": "Jl. Endro Suratmin. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
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
    "id": "itera-lampung-distilled-014",
    "name": "Griya Dahlia Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35325,
      "longitude": 105.31342
    },
    "rentMonthly": 1550000,
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
    "notes": "Gg. Hasan. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.",
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
    "id": "itera-lampung-distilled-015",
    "name": "Griya Sejahtera Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37211,
      "longitude": 105.29537
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
      "water_heater",
      "access_24h",
      "shared_kitchen"
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
    "name": "Griya Harmoni Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35,
      "longitude": 105.30964
    },
    "rentMonthly": 1225000,
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
    "id": "itera-lampung-distilled-017",
    "name": "Kos Permata",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35385,
      "longitude": 105.33
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
    "id": "itera-lampung-distilled-018",
    "name": "Asrama Sentosa Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36735,
      "longitude": 105.29405
    },
    "rentMonthly": 1475000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "water_heater"
    ],
    "verified": true,
    "notes": "Jl. Harapan Jaya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
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
    "id": "itera-lampung-distilled-019",
    "name": "Griya Asri",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35985,
      "longitude": 105.32928
    },
    "rentMonthly": 650000,
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
    "notes": "Gg. Damai Sabah Balau. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.",
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
    "id": "itera-lampung-distilled-020",
    "name": "Asrama Pelangi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35644,
      "longitude": 105.31301
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
      "shared_kitchen"
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
    "id": "itera-lampung-distilled-021",
    "name": "Pondok Harmoni",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37282,
      "longitude": 105.29597
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
    "id": "itera-lampung-distilled-022",
    "name": "Pondok Flamboyan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.3569,
      "longitude": 105.31326
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
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Terusan Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
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
    "id": "itera-lampung-distilled-023",
    "name": "Kost Permata Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35366,
      "longitude": 105.30296
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
      "ac",
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
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-024",
    "name": "Paviliun Asri",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36286,
      "longitude": 105.30032
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
      "ac",
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-025",
    "name": "Griya Cahaya Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35501,
      "longitude": 105.31279
    },
    "rentMonthly": 1600000,
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
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
    "id": "itera-lampung-distilled-026",
    "name": "D'Kost Flamboyan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.34857,
      "longitude": 105.30304
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
    "id": "itera-lampung-distilled-027",
    "name": "D'Kost Amanah Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35182,
      "longitude": 105.30539
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
    "notes": "Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
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
    "id": "itera-lampung-distilled-028",
    "name": "D'Kost Flamboyan Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37098,
      "longitude": 105.29947
    },
    "rentMonthly": 1600000,
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
      "shared_kitchen"
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
    "id": "itera-lampung-distilled-029",
    "name": "Paviliun Flamboyan Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36474,
      "longitude": 105.31996
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
      "shared_kitchen"
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-030",
    "name": "Paviliun Permata",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35393,
      "longitude": 105.31347
    },
    "rentMonthly": 1475000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "water_heater"
    ],
    "verified": true,
    "notes": "Gg. Hasan. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
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
    "id": "itera-lampung-distilled-031",
    "name": "Rumah Kos Permata",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36415,
      "longitude": 105.32318
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
    "id": "itera-lampung-distilled-032",
    "name": "Kos Ceria Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35807,
      "longitude": 105.3045
    },
    "rentMonthly": 1475000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "water_heater",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Airan 1. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.",
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
    "id": "itera-lampung-distilled-033",
    "name": "Griya Rindang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35074,
      "longitude": 105.30565
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
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
    "name": "Wisma Al-Ikhlas",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35882,
      "longitude": 105.30545
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
      "shared_kitchen"
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
    "id": "itera-lampung-distilled-035",
    "name": "Kost Nusantara",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36449,
      "longitude": 105.3002
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
      "water_heater",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Gg. Airan 1. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.",
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
    "id": "itera-lampung-distilled-036",
    "name": "D'Kost Srikandi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35071,
      "longitude": 105.30722
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Nangka. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
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
    "id": "itera-lampung-distilled-037",
    "name": "Pondok Ceria Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.3591,
      "longitude": 105.32857
    },
    "rentMonthly": 1400000,
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
    "id": "itera-lampung-distilled-038",
    "name": "Paviliun Al-Ikhlas",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35097,
      "longitude": 105.30269
    },
    "rentMonthly": 1250000,
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
    "id": "itera-lampung-distilled-039",
    "name": "Paviliun Anggrek Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36226,
      "longitude": 105.3021
    },
    "rentMonthly": 1325000,
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
    "notes": "Jl. Airan Raya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.",
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
    "id": "itera-lampung-distilled-040",
    "name": "Rumah Kos Kemuning",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.3617,
      "longitude": 105.32166
    },
    "rentMonthly": 950000,
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
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-041",
    "name": "Wisma Bintang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35247,
      "longitude": 105.30362
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
    "id": "itera-lampung-distilled-042",
    "name": "Wisma Dahlia",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35255,
      "longitude": 105.31269
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
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
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
    "name": "Paviliun Al-Hikmah Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35619,
      "longitude": 105.31373
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
    "notes": "Jl. Terusan Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
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
    "id": "itera-lampung-distilled-044",
    "name": "Kos Al-Barokah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35775,
      "longitude": 105.33272
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Damai Sabah Balau. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga.",
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
    "id": "itera-lampung-distilled-045",
    "name": "Griya Ceria",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34748,
      "longitude": 105.30978
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Sirsak. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa.",
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
    "id": "itera-lampung-distilled-046",
    "name": "Rumah Kos Anggrek Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.36096,
      "longitude": 105.33136
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
      "ac",
      "water_heater",
      "access_24h",
      "parking_car"
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
    "id": "itera-lampung-distilled-047",
    "name": "Kost Ganesha Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36364,
      "longitude": 105.31993
    },
    "rentMonthly": 900000,
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
    "notes": "Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.",
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
    "id": "itera-lampung-distilled-048",
    "name": "Wisma Amanah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35528,
      "longitude": 105.33377
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
    "notes": "Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
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
    "id": "itera-lampung-distilled-049",
    "name": "Rumah Kos Srikandi Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35399,
      "longitude": 105.30568
    },
    "rentMonthly": 775000,
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
    "notes": "Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
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
    "id": "itera-lampung-distilled-050",
    "name": "Asrama Sakinah Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35762,
      "longitude": 105.33454
    },
    "rentMonthly": 725000,
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
    "id": "itera-lampung-distilled-051",
    "name": "Griya Srikandi Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36177,
      "longitude": 105.30244
    },
    "rentMonthly": 1375000,
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
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-052",
    "name": "Rumah Kos Griya Indah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37488,
      "longitude": 105.29713
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Endro Suratmin. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.",
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
    "id": "itera-lampung-distilled-053",
    "name": "Pondok Dahlia Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37084,
      "longitude": 105.29322
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Senopati. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.",
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
    "id": "itera-lampung-distilled-054",
    "name": "Asrama Mahasiswa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35344,
      "longitude": 105.31616
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
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Simpang Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
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
    "id": "itera-lampung-distilled-055",
    "name": "Asrama Asri Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35395,
      "longitude": 105.30613
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Lapas Jaya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
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
    "id": "itera-lampung-distilled-056",
    "name": "Griya Pratama Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36344,
      "longitude": 105.31913
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
    "id": "itera-lampung-distilled-057",
    "name": "Pondok Cahaya Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36119,
      "longitude": 105.30288
    },
    "rentMonthly": 1225000,
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
    "id": "itera-lampung-distilled-058",
    "name": "Rumah Kos Dahlia",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34851,
      "longitude": 105.3102
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
      "access_24h"
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
    "name": "Rumah Kos Dahlia Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37487,
      "longitude": 105.29223
    },
    "rentMonthly": 925000,
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
    "notes": "Jl. Korpri Raya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
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
    "id": "itera-lampung-distilled-060",
    "name": "Pondok Srikandi Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35617,
      "longitude": 105.31774
    },
    "rentMonthly": 1300000,
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
    "id": "itera-lampung-distilled-061",
    "name": "Kost Ceria Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35658,
      "longitude": 105.31614
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-062",
    "name": "Kost Bintang Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35546,
      "longitude": 105.31416
    },
    "rentMonthly": 1175000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Raden Saleh. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.",
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
    "id": "itera-lampung-distilled-063",
    "name": "D'Kost Cendana Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37325,
      "longitude": 105.2984
    },
    "rentMonthly": 700000,
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
    "notes": "Jl. Korpri Raya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
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
    "id": "itera-lampung-distilled-064",
    "name": "Rumah Kos Rindang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.3742,
      "longitude": 105.29889
    },
    "rentMonthly": 1600000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Senopati. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.",
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
    "id": "itera-lampung-distilled-065",
    "name": "Wisma An-Nur",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.36141,
      "longitude": 105.32823
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
    "id": "itera-lampung-distilled-066",
    "name": "Paviliun Cendana",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36085,
      "longitude": 105.30003
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Airan Raya. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.",
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
    "id": "itera-lampung-distilled-067",
    "name": "Wisma Sejahtera Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.36136,
      "longitude": 105.32819
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
    "id": "itera-lampung-distilled-068",
    "name": "Kos Griya Indah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36903,
      "longitude": 105.29437
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
      "ac"
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-069",
    "name": "Kost Khairunnisa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35428,
      "longitude": 105.31486
    },
    "rentMonthly": 1100000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "shared_kitchen"
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-070",
    "name": "Asrama Pelangi Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35477,
      "longitude": 105.31491
    },
    "rentMonthly": 1100000,
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
    "notes": "Simpang Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
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
    "id": "itera-lampung-distilled-071",
    "name": "Rumah Kos Mandiri Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35522,
      "longitude": 105.31339
    },
    "rentMonthly": 725000,
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
    "notes": "Simpang Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
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
    "name": "Kos Kemuning",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35774,
      "longitude": 105.33611
    },
    "rentMonthly": 725000,
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
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-073",
    "name": "Kos Permata Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35358,
      "longitude": 105.30537
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
    "notes": "Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
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
    "id": "itera-lampung-distilled-074",
    "name": "Wisma Dahlia Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35065,
      "longitude": 105.30464
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
    "notes": "Gg. Kancil. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.",
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
    "id": "itera-lampung-distilled-075",
    "name": "Asrama Mawar",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35097,
      "longitude": 105.3099
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
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Belwis. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.",
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
    "name": "Paviliun Melati Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37213,
      "longitude": 105.29975
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
    "notes": "Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.",
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
    "id": "itera-lampung-distilled-077",
    "name": "Kos Putri Cantika Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35245,
      "longitude": 105.31656
    },
    "rentMonthly": 650000,
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
    "notes": "Jl. Terusan Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
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
    "id": "itera-lampung-distilled-078",
    "name": "Pondok Putri Cantika Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35098,
      "longitude": 105.30564
    },
    "rentMonthly": 1600000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "parking_car"
    ],
    "verified": true,
    "notes": "Gg. Murai. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir.",
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
    "id": "itera-lampung-distilled-079",
    "name": "Kost Anggrek Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37452,
      "longitude": 105.29909
    },
    "rentMonthly": 1475000,
    "roomType": "single",
    "gender": "male",
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
    "notes": "Jl. Harapan Jaya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
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
    "id": "itera-lampung-distilled-080",
    "name": "Kost Rindang Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36222,
      "longitude": 105.32389
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
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-081",
    "name": "Wisma Rindang Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35356,
      "longitude": 105.30622
    },
    "rentMonthly": 825000,
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
    "notes": "Jl. Lapas Jaya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.",
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
    "id": "itera-lampung-distilled-082",
    "name": "D'Kost Mahasiswa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35097,
      "longitude": 105.30504
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Lapas Raya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.",
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
    "id": "itera-lampung-distilled-083",
    "name": "Pondok Sakinah Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36841,
      "longitude": 105.29303
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
    "id": "itera-lampung-distilled-084",
    "name": "Pondok Kenanga",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35103,
      "longitude": 105.31045
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
    "notes": "Jl. Kelengkeng. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
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
    "id": "itera-lampung-distilled-085",
    "name": "Griya Bintang Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36238,
      "longitude": 105.32579
    },
    "rentMonthly": 750000,
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
    "notes": "Jalur Embung C. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.",
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
    "id": "itera-lampung-distilled-086",
    "name": "Wisma Khairunnisa Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37353,
      "longitude": 105.29253
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
    "notes": "Jl. Senopati. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
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
    "id": "itera-lampung-distilled-087",
    "name": "D'Kost Kemuning Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35535,
      "longitude": 105.31426
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
    "notes": "Simpang Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket.",
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
    "id": "itera-lampung-distilled-088",
    "name": "Pondok Nusantara Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35258,
      "longitude": 105.31338
    },
    "rentMonthly": 1375000,
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
    "notes": "Gg. Raden Saleh. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.",
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
    "id": "itera-lampung-distilled-089",
    "name": "D'Kost Asri Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35446,
      "longitude": 105.33421
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
    "id": "itera-lampung-distilled-090",
    "name": "Paviliun Al-Hikmah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.34949,
      "longitude": 105.30496
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
    "id": "itera-lampung-distilled-091",
    "name": "Asrama Cahaya Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36197,
      "longitude": 105.30217
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
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Gg. Airan 1. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.",
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
    "id": "itera-lampung-distilled-092",
    "name": "D'Kost Griya Indah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36194,
      "longitude": 105.32151
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
    "id": "itera-lampung-distilled-093",
    "name": "Kos Putra Jaya Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35745,
      "longitude": 105.32836
    },
    "rentMonthly": 800000,
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
    "notes": "Jl. R.A. Basyid. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
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
    "id": "itera-lampung-distilled-094",
    "name": "Paviliun Bintang Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37417,
      "longitude": 105.29374
    },
    "rentMonthly": 950000,
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
    "notes": "Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.",
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
    "id": "itera-lampung-distilled-095",
    "name": "Kos Kencana Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34752,
      "longitude": 105.30724
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
    "id": "itera-lampung-distilled-096",
    "name": "Asrama Pertiwi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36146,
      "longitude": 105.3256
    },
    "rentMonthly": 1200000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-097",
    "name": "Rumah Kos Sentosa Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36771,
      "longitude": 105.29945
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
      "ac"
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
    "id": "itera-lampung-distilled-098",
    "name": "Kos Mawar",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.35962,
      "longitude": 105.32375
    },
    "rentMonthly": 700000,
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
    "notes": "Gang Tembus Asrama. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.",
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
    "id": "itera-lampung-distilled-099",
    "name": "Griya Mahasiswa Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36325,
      "longitude": 105.32546
    },
    "rentMonthly": 650000,
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
    "notes": "Jalur Embung C. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga.",
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
    "name": "D'Kost Nusantara",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.34866,
      "longitude": 105.30337
    },
    "rentMonthly": 825000,
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
    "id": "itera-lampung-distilled-101",
    "name": "D'Kost Sejahtera Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36792,
      "longitude": 105.29672
    },
    "rentMonthly": 1175000,
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
    "notes": "Jl. Senopati. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
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
    "id": "itera-lampung-distilled-102",
    "name": "Paviliun Kencana",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35297,
      "longitude": 105.31432
    },
    "rentMonthly": 1050000,
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
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "itera-lampung-distilled-103",
    "name": "Rumah Kos Pelangi Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35598,
      "longitude": 105.33641
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
    "notes": "Jl. R.A. Basyid. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.",
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
    "name": "Kos Amanah Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35381,
      "longitude": 105.3048
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Lapas Raya. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir.",
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
    "id": "itera-lampung-distilled-105",
    "name": "Asrama Amanah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36843,
      "longitude": 105.29527
    },
    "rentMonthly": 1175000,
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
    "notes": "Jl. Endro Suratmin. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi.",
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
    "name": "Griya Harmoni Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36108,
      "longitude": 105.32018
    },
    "rentMonthly": 725000,
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
    "notes": "Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
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
    "id": "itera-lampung-distilled-107",
    "name": "Kost Pratama Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35255,
      "longitude": 105.3333
    },
    "rentMonthly": 675000,
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
    "id": "itera-lampung-distilled-108",
    "name": "Rumah Kos Al-Ikhlas",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35871,
      "longitude": 105.30252
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
    "notes": "Jl. Airan Raya. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.",
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
    "id": "itera-lampung-distilled-109",
    "name": "Wisma Asri Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36407,
      "longitude": 105.30267
    },
    "rentMonthly": 850000,
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
    "notes": "Jl. Airan Raya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan.",
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
    "id": "itera-lampung-distilled-110",
    "name": "Kos Bintang Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37072,
      "longitude": 105.29398
    },
    "rentMonthly": 1525000,
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
    "notes": "Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.",
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
    "id": "ui-depok-distilled-001",
    "name": "D'Kost Pratama Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36964,
      "longitude": 106.82093
    },
    "rentMonthly": 650000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle"
    ],
    "verified": true,
    "notes": "Jl. Rawa Maya. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
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
    "id": "ui-depok-distilled-002",
    "name": "Wisma Mandiri Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35766,
      "longitude": 106.82129
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
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.",
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
    "id": "ui-depok-distilled-003",
    "name": "Griya Rindang Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35706,
      "longitude": 106.8201
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Palakali. Suasana perumahan sejuk, dekat lapangan dan masjid.",
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
    "id": "ui-depok-distilled-004",
    "name": "Paviliun Putra Jaya Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36252,
      "longitude": 106.8305
    },
    "rentMonthly": 1825000,
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
    "id": "ui-depok-distilled-005",
    "name": "D'Kost Cendana",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.3619,
      "longitude": 106.83464
    },
    "rentMonthly": 1900000,
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
    "id": "ui-depok-distilled-006",
    "name": "D'Kost Mandiri Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36619,
      "longitude": 106.82081
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
      "ac"
    ],
    "verified": true,
    "notes": "Jl. Juragan Sinda. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.",
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
    "id": "ui-depok-distilled-007",
    "name": "Griya Harmoni Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36474,
      "longitude": 106.83167
    },
    "rentMonthly": 550000,
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
    "notes": "Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.",
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
    "id": "ui-depok-distilled-008",
    "name": "Paviliun Ceria Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36548,
      "longitude": 106.81926
    },
    "rentMonthly": 625000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Juragan Sinda. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
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
    "id": "ui-depok-distilled-009",
    "name": "Rumah Kos Harmoni",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36817,
      "longitude": 106.82108
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Mandor Togog. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.",
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
    "id": "ui-depok-distilled-011",
    "name": "Asrama Al-Hikmah",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36556,
      "longitude": 106.83569
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
      "access_24h",
      "shared_kitchen"
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
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-012",
    "name": "Griya Permata Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36388,
      "longitude": 106.83393
    },
    "rentMonthly": 2175000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
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
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-013",
    "name": "Asrama Melati",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36843,
      "longitude": 106.81935
    },
    "rentMonthly": 1225000,
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
    "notes": "Jl. Mandor Togog. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.",
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
    "id": "ui-depok-distilled-014",
    "name": "Rumah Kos Kenanga Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.37098,
      "longitude": 106.8211
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
    "notes": "Jl. Rawa Maya. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.",
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
    "id": "ui-depok-distilled-015",
    "name": "Paviliun Anggrek",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36559,
      "longitude": 106.82321
    },
    "rentMonthly": 1800000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "access_24h",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Rawa Maya. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.",
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
    "id": "ui-depok-distilled-016",
    "name": "Pondok Al-Barokah Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.3697,
      "longitude": 106.81877
    },
    "rentMonthly": 1625000,
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
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-017",
    "name": "Pondok Flamboyan Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36408,
      "longitude": 106.83576
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Margonda Gg. Kober. Dekat Stasiun UI dan perpustakaan.",
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
    "id": "ui-depok-distilled-018",
    "name": "Wisma Berkah",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36112,
      "longitude": 106.83144
    },
    "rentMonthly": 1950000,
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
    "id": "ui-depok-distilled-019",
    "name": "Rumah Kos Khairunnisa Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35901,
      "longitude": 106.82438
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
    "id": "ui-depok-distilled-020",
    "name": "Rumah Kos Ganesha Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36366,
      "longitude": 106.83436
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Margonda Gg. Kober. Dekat Stasiun UI dan perpustakaan.",
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
    "id": "ui-depok-distilled-021",
    "name": "Kost Permata Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36502,
      "longitude": 106.83483
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
      "access_24h",
      "shared_kitchen"
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
    "name": "Rumah Kos Mandiri Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36993,
      "longitude": 106.82248
    },
    "rentMonthly": 1850000,
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
    "id": "ui-depok-distilled-023",
    "name": "Paviliun Kencana Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35964,
      "longitude": 106.82378
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
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Palakali. Suasana perumahan sejuk, dekat lapangan dan masjid.",
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
    "id": "ui-depok-distilled-024",
    "name": "Kos Berkah Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36413,
      "longitude": 106.83196
    },
    "rentMonthly": 600000,
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
    "notes": "Jl. Kancil. Akses jembatan penyeberangan kampus ke FIB dan FEB.",
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
    "id": "ui-depok-distilled-025",
    "name": "Asrama Al-Hikmah Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35884,
      "longitude": 106.82174
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
    "notes": "Jl. Palakali. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.",
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
    "id": "ui-depok-distilled-026",
    "name": "Pondok Putra Jaya Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36193,
      "longitude": 106.83169
    },
    "rentMonthly": 2125000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "ac",
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-027",
    "name": "Paviliun Griya Indah Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36554,
      "longitude": 106.82375
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Rawa Maya. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri.",
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
    "id": "ui-depok-distilled-028",
    "name": "Kost Al-Hikmah",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.361,
      "longitude": 106.833
    },
    "rentMonthly": 2125000,
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
      "access_24h",
      "shared_kitchen",
      "parking_car"
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
    "id": "ui-depok-distilled-029",
    "name": "Rumah Kos Cahaya",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36433,
      "longitude": 106.83652
    },
    "rentMonthly": 1225000,
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
    "notes": "Jl. Margonda Gg. Kober. Dekat Stasiun UI dan perpustakaan.",
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
    "id": "ui-depok-distilled-030",
    "name": "Paviliun Khairunnisa Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35996,
      "longitude": 106.82434
    },
    "rentMonthly": 1125000,
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
    "notes": "Jl. Palakali. Pintu Kukel UI, akses cepat ke FMIPA dan RIK.",
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
    "id": "ui-depok-distilled-031",
    "name": "Kos Bintang",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36455,
      "longitude": 106.83252
    },
    "rentMonthly": 2275000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "bathroom_inside",
      "water_heater",
      "shared_kitchen",
      "parking_car"
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "ui-depok-distilled-032",
    "name": "Kos Flamboyan Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36792,
      "longitude": 106.83323
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
      "shared_kitchen"
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
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "ui-depok-distilled-033",
    "name": "Griya Kemuning Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.3709,
      "longitude": 106.81865
    },
    "rentMonthly": 1400000,
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
    "notes": "Jl. H. Amat. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.",
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
    "id": "ui-depok-distilled-034",
    "name": "Wisma Mawar",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36348,
      "longitude": 106.8308
    },
    "rentMonthly": 1525000,
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
    "id": "ui-depok-distilled-035",
    "name": "Kos Srikandi",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.35954,
      "longitude": 106.83356
    },
    "rentMonthly": 1950000,
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
    "notes": "Jl. Margonda Raya. Dekat Stasiun KRL Pondok Cina dan Margonda Raya.",
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
    "name": "Paviliun Cahaya Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36833,
      "longitude": 106.83459
    },
    "rentMonthly": 1600000,
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
    "notes": "Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.",
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
    "id": "ui-depok-distilled-038",
    "name": "Kos Griya Indah Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36498,
      "longitude": 106.83439
    },
    "rentMonthly": 1050000,
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
    "notes": "Jl. Sawo. Dekat Stasiun UI dan perpustakaan.",
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
    "id": "ui-depok-distilled-039",
    "name": "Pondok Rindang Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35887,
      "longitude": 106.8204
    },
    "rentMonthly": 1525000,
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
    "notes": "Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid.",
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
    "id": "ui-depok-distilled-040",
    "name": "Wisma Pelangi Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36726,
      "longitude": 106.83396
    },
    "rentMonthly": 650000,
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
    "notes": "Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.",
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
    "id": "unand-limau-manis-distilled-001",
    "name": "Griya Srikandi Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91522,
      "longitude": 100.46233
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
      "access_24h"
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
      "curfew": "24_jam_portal_mandiri",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-002",
    "name": "Griya Harmoni",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91717,
      "longitude": 100.45836
    },
    "rentMonthly": 1100000,
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
    "notes": "Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.",
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
    "id": "unand-limau-manis-distilled-003",
    "name": "Kost Harmoni Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91792,
      "longitude": 100.46422
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
      "ac"
    ],
    "verified": true,
    "notes": "Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.",
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
    "id": "unand-limau-manis-distilled-004",
    "name": "Wisma Pertiwi",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92201,
      "longitude": 100.44031
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Mohammad Hatta. Kamar luas, lingkungan warga minang yang ramah.",
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
    "id": "unand-limau-manis-distilled-005",
    "name": "D'Kost Sakinah Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91195,
      "longitude": 100.45604
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.",
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
    "id": "unand-limau-manis-distilled-006",
    "name": "Griya Ceria Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91761,
      "longitude": 100.46289
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
    "notes": "Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.",
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
    "id": "unand-limau-manis-distilled-007",
    "name": "Rumah Kos Kencana Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92633,
      "longitude": 100.44902
    },
    "rentMonthly": 1550000,
    "roomType": "single",
    "gender": "female",
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
    "notes": "Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket.",
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
    "id": "unand-limau-manis-distilled-008",
    "name": "Griya Flamboyan",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92299,
      "longitude": 100.44776
    },
    "rentMonthly": 750000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h"
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
    "id": "unand-limau-manis-distilled-009",
    "name": "D'Kost Putri Cantika",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.9175,
      "longitude": 100.46111
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
    "notes": "Perumahan Dosen Unand. Akses jalan kaki ke gedung perkuliahan.",
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
    "id": "unand-limau-manis-distilled-010",
    "name": "Kost Harmoni",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92452,
      "longitude": 100.4401
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
      "water_heater"
    ],
    "verified": true,
    "notes": "Jl. Mohammad Hatta. Kamar luas, lingkungan warga minang yang ramah.",
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
    "id": "unand-limau-manis-distilled-012",
    "name": "Paviliun Sejahtera",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.9229,
      "longitude": 100.4444
    },
    "rentMonthly": 575000,
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
    "notes": "Pasar Pauh. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.",
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
    "id": "unand-limau-manis-distilled-014",
    "name": "D'Kost Mahasiswa Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92299,
      "longitude": 100.44838
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-015",
    "name": "D'Kost Putra Jaya Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92301,
      "longitude": 100.44421
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
      "access_24h",
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
    "id": "unand-limau-manis-distilled-017",
    "name": "Rumah Kos Kemuning Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.9273,
      "longitude": 100.44093
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
    "id": "unand-limau-manis-distilled-018",
    "name": "Pondok Dahlia",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91087,
      "longitude": 100.46279
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
    "notes": "Batu Busuk. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.",
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
    "name": "D'Kost Kencana Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91517,
      "longitude": 100.45658
    },
    "rentMonthly": 825000,
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
    "notes": "Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.",
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
    "id": "unand-limau-manis-distilled-020",
    "name": "Griya Putri Cantika",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.9269,
      "longitude": 100.44209
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
      "shared_kitchen",
      "parking_car"
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
      "curfew": "22:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3.5x4 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-021",
    "name": "Wisma Harmoni Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92837,
      "longitude": 100.44235
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Mohammad Hatta. Kamar luas, lingkungan warga minang yang ramah.",
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
    "id": "unand-limau-manis-distilled-022",
    "name": "Kos Griya Indah Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91126,
      "longitude": 100.45742
    },
    "rentMonthly": 1050000,
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
    "notes": "Perumahan Dosen Unand. Akses jalan kaki ke gedung perkuliahan.",
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
    "id": "unand-limau-manis-distilled-023",
    "name": "Kos Kemuning Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92625,
      "longitude": 100.44648
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
    "id": "unand-limau-manis-distilled-024",
    "name": "Kos Mahasiswa Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91187,
      "longitude": 100.46415
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
    "id": "unand-limau-manis-distilled-025",
    "name": "Kost Rindang",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91328,
      "longitude": 100.4584
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan.",
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
    "name": "Kost Mahasiswa Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92408,
      "longitude": 100.44947
    },
    "rentMonthly": 925000,
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
    "notes": "Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.",
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
    "id": "unand-limau-manis-distilled-028",
    "name": "D'Kost Flamboyan Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92306,
      "longitude": 100.44896
    },
    "rentMonthly": 725000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket.",
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
    "id": "unand-limau-manis-distilled-029",
    "name": "D'Kost Barokah Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91522,
      "longitude": 100.46325
    },
    "rentMonthly": 1150000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
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
      "curfew": "23:00_wib",
      "guest_policy": "tamu_di_ruang_tamu_bersama",
      "opposite_gender_in_room": false,
      "smoking_allowed": false,
      "pets_allowed": false,
      "room_size": "3x3.5 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-030",
    "name": "Kos Sentosa",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92443,
      "longitude": 100.44144
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
    "id": "unand-limau-manis-distilled-031",
    "name": "Griya Bintang Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92548,
      "longitude": 100.44632
    },
    "rentMonthly": 950000,
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
    "id": "unand-limau-manis-distilled-032",
    "name": "Kos Mahasiswa",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91011,
      "longitude": 100.46141
    },
    "rentMonthly": 575000,
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
      "smoking_allowed": true,
      "pets_allowed": false,
      "room_size": "3x3 m²"
    }
  },
  {
    "id": "unand-limau-manis-distilled-033",
    "name": "Griya Permata",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91295,
      "longitude": 100.46469
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Batu Busuk. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.",
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
    "id": "unand-limau-manis-distilled-034",
    "name": "Griya Kenanga Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92483,
      "longitude": 100.44049
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
      "water_heater",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Mohammad Hatta. Kamar luas, lingkungan warga minang yang ramah.",
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
    "id": "unand-limau-manis-distilled-035",
    "name": "D'Kost An-Nur Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92363,
      "longitude": 100.44179
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Mohammad Hatta. Kamar luas, lingkungan warga minang yang ramah.",
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
    "id": "unila-bandarlampung-distilled-001",
    "name": "Pondok Cendana Kampung",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru Raya / Nunyai",
    "coordinates": {
      "latitude": -5.35374,
      "longitude": 105.24747
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Kenanga Nunyai. Dekat lapangan olahraga dan minimarket 24 jam.",
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
    "id": "unila-bandarlampung-distilled-003",
    "name": "Wisma Nusantara Kampung",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru Raya / Nunyai",
    "coordinates": {
      "latitude": -5.35088,
      "longitude": 105.24374
    },
    "rentMonthly": 600000,
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
    "notes": "Gg. Kenanga Nunyai. Dekat lapangan olahraga dan minimarket 24 jam.",
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
    "id": "unila-bandarlampung-distilled-004",
    "name": "D'Kost Dahlia",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Rajabasa (Pramuka & Bypass)",
    "coordinates": {
      "latitude": -5.36522,
      "longitude": 105.23768
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Damai Rajabasa. Keamanan portal malam 24 jam, dekat klinik pratama rujukan BPJS.",
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
    "id": "unila-bandarlampung-distilled-005",
    "name": "Kos Asri Rajabasa",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Rajabasa (Pramuka & Bypass)",
    "coordinates": {
      "latitude": -5.3596,
      "longitude": 105.23288
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Damai Rajabasa. Keamanan portal malam 24 jam, dekat klinik pratama rujukan BPJS.",
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
    "id": "unila-bandarlampung-distilled-006",
    "name": "Griya Melati Kampung",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru Raya / Nunyai",
    "coordinates": {
      "latitude": -5.35148,
      "longitude": 105.24749
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Cendana. Lingkungan perumahan asri bebas polusi suara knalpot, sangat nyaman untuk istirahat.",
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
    "id": "unila-bandarlampung-distilled-007",
    "name": "D'Kost Ceria Gedong",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Gedong Meneng (ZA Pagar Alam)",
    "coordinates": {
      "latitude": -5.36525,
      "longitude": 105.23623
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Prof. Sumantri Brojonegoro. Dekat halte busway Trans Bandar Lampung dan aneka rumah makan modern.",
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
    "id": "unila-bandarlampung-distilled-008",
    "name": "Paviliun Amanah",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Rajabasa (Pramuka & Bypass)",
    "coordinates": {
      "latitude": -5.35852,
      "longitude": 105.23619
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Pramuka. Suasana tenang untuk fokus belajar skripsi, kamar luas dengan sirkulasi udara sejuk.",
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
    "id": "unila-bandarlampung-distilled-009",
    "name": "Wisma Nusantara",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Gedong Meneng (ZA Pagar Alam)",
    "coordinates": {
      "latitude": -5.36956,
      "longitude": 105.23752
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
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. ZA Pagar Alam. Bangunan kokoh modern, parkir motor luas berkanopi, bebas banjir.",
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
    "id": "unila-bandarlampung-distilled-010",
    "name": "D'Kost Ceria",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru (Bumi Manti)",
    "coordinates": {
      "latitude": -5.35871,
      "longitude": 105.24943
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
    "notes": "Jl. Bumi Manti II. Pusat hunian kos paling ramai dekat FMIPA dan FKIP Unila, jalan kaki ke gerbang belakang.",
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
    "id": "unila-bandarlampung-distilled-011",
    "name": "Rumah Kos Sakinah",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Gedong Meneng (ZA Pagar Alam)",
    "coordinates": {
      "latitude": -5.37144,
      "longitude": 105.23776
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
    "notes": "Jl. ZA Pagar Alam. Akses sangat cepat ke Fakultas Hukum, FEB, dan Gedung Rektorat Unila.",
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
    "id": "unila-bandarlampung-distilled-012",
    "name": "Pondok Ganesha",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru Raya / Nunyai",
    "coordinates": {
      "latitude": -5.35301,
      "longitude": 105.24791
    },
    "rentMonthly": 1550000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "water_heater",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Nunyai Raya. Harga sewa sangat hemat bagi mahasiswa baru perantau, pemilik kos ramah dan kekeluargaan.",
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
    "id": "unila-bandarlampung-distilled-014",
    "name": "Rumah Kos Bintang Kampung",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru (Bumi Manti)",
    "coordinates": {
      "latitude": -5.35602,
      "longitude": 105.2485
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
    "notes": "Gg. Pelita. Air sumur bor jernih melimpah, lingkungan aman berpagar dan ramai sesama mahasiswa Unila.",
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
    "id": "unila-bandarlampung-distilled-015",
    "name": "Rumah Kos Barokah",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru Raya / Nunyai",
    "coordinates": {
      "latitude": -5.35052,
      "longitude": 105.24252
    },
    "rentMonthly": 600000,
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
    "notes": "Gg. Cendana. Dekat lapangan olahraga dan minimarket 24 jam.",
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
    "id": "unila-bandarlampung-distilled-016",
    "name": "Kost Permata Kampung",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru Raya / Nunyai",
    "coordinates": {
      "latitude": -5.3506,
      "longitude": 105.24716
    },
    "rentMonthly": 575000,
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
    "notes": "Gg. Kenanga Nunyai. Lingkungan perumahan asri bebas polusi suara knalpot, sangat nyaman untuk istirahat.",
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
    "id": "unila-bandarlampung-distilled-017",
    "name": "Asrama Al-Ikhlas Kampung",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru (Bumi Manti)",
    "coordinates": {
      "latitude": -5.35495,
      "longitude": 105.25056
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
    "notes": "Gg. Mawar Kp. Baru. Kawasan kuliner mahasiswa 24 jam, dekat masjid besar, fotokopi, dan laundry kiloan murah.",
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
    "id": "unila-bandarlampung-distilled-018",
    "name": "Kos Mahasiswa Kampung",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru Raya / Nunyai",
    "coordinates": {
      "latitude": -5.35177,
      "longitude": 105.24432
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
    "notes": "Gg. Kenanga Nunyai. Dekat lapangan olahraga dan minimarket 24 jam.",
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
    "id": "unila-bandarlampung-distilled-019",
    "name": "Pondok Barokah Kampung",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru (Bumi Manti)",
    "coordinates": {
      "latitude": -5.35258,
      "longitude": 105.25238
    },
    "rentMonthly": 950000,
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
    "notes": "Gg. Dahlia. Air sumur bor jernih melimpah, lingkungan aman berpagar dan ramai sesama mahasiswa Unila.",
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
    "id": "unila-bandarlampung-distilled-020",
    "name": "Asrama Sentosa",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Rajabasa (Pramuka & Bypass)",
    "coordinates": {
      "latitude": -5.35883,
      "longitude": 105.23787
    },
    "rentMonthly": 725000,
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
    "notes": "Jl. Pramuka. Keamanan portal malam 24 jam, dekat klinik pratama rujukan BPJS.",
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
    "id": "unila-bandarlampung-distilled-021",
    "name": "Rumah Kos Sejahtera Gedong",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Gedong Meneng (ZA Pagar Alam)",
    "coordinates": {
      "latitude": -5.37034,
      "longitude": 105.236
    },
    "rentMonthly": 1550000,
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. ZA Pagar Alam. Bangunan kokoh modern, parkir motor luas berkanopi, bebas banjir.",
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
    "id": "unila-bandarlampung-distilled-022",
    "name": "Griya Mahasiswa",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Gedong Meneng (ZA Pagar Alam)",
    "coordinates": {
      "latitude": -5.36991,
      "longitude": 105.23855
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
    "notes": "Gg. Haji Said. Dekat halte busway Trans Bandar Lampung dan aneka rumah makan modern.",
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
    "id": "unila-bandarlampung-distilled-023",
    "name": "Asrama Ceria Gedong",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Gedong Meneng (ZA Pagar Alam)",
    "coordinates": {
      "latitude": -5.36862,
      "longitude": 105.23912
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
    "notes": "Gg. Haji Said. Bangunan kokoh modern, parkir motor luas berkanopi, bebas banjir.",
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
    "id": "unila-bandarlampung-distilled-025",
    "name": "Griya Harmoni Kampung",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru (Bumi Manti)",
    "coordinates": {
      "latitude": -5.35257,
      "longitude": 105.25254
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Mawar Kp. Baru. Air sumur bor jernih melimpah, lingkungan aman berpagar dan ramai sesama mahasiswa Unila.",
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
    "id": "unila-bandarlampung-distilled-026",
    "name": "Griya Barokah",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru (Bumi Manti)",
    "coordinates": {
      "latitude": -5.35214,
      "longitude": 105.24714
    },
    "rentMonthly": 725000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Mawar Kp. Baru. Air sumur bor jernih melimpah, lingkungan aman berpagar dan ramai sesama mahasiswa Unila.",
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
    "id": "unila-bandarlampung-distilled-027",
    "name": "Rumah Kos Mahasiswa",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Gedong Meneng (ZA Pagar Alam)",
    "coordinates": {
      "latitude": -5.36622,
      "longitude": 105.23798
    },
    "rentMonthly": 1375000,
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
    "notes": "Gg. Haji Said. Akses sangat cepat ke Fakultas Hukum, FEB, dan Gedung Rektorat Unila.",
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
    "id": "unila-bandarlampung-distilled-028",
    "name": "Paviliun Griya Indah Rajabasa",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Rajabasa (Pramuka & Bypass)",
    "coordinates": {
      "latitude": -5.36562,
      "longitude": 105.23286
    },
    "rentMonthly": 1250000,
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
    "notes": "Gg. Damai Rajabasa. Akses strategis ke terminal Rajabasa dan kampus Unila, banyak apotek dan kafe nugas.",
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
    "id": "unila-bandarlampung-distilled-029",
    "name": "D'Kost Barokah",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Rajabasa (Pramuka & Bypass)",
    "coordinates": {
      "latitude": -5.3658,
      "longitude": 105.23653
    },
    "rentMonthly": 1250000,
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
    "notes": "Jl. Pramuka. Suasana tenang untuk fokus belajar skripsi, kamar luas dengan sirkulasi udara sejuk.",
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
    "id": "unila-bandarlampung-distilled-031",
    "name": "Pondok Asri Kampung",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru (Bumi Manti)",
    "coordinates": {
      "latitude": -5.35342,
      "longitude": 105.24948
    },
    "rentMonthly": 700000,
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
    "notes": "Gg. Mawar Kp. Baru. Air sumur bor jernih melimpah, lingkungan aman berpagar dan ramai sesama mahasiswa Unila.",
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
    "id": "unila-bandarlampung-distilled-032",
    "name": "Griya Mawar",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru (Bumi Manti)",
    "coordinates": {
      "latitude": -5.35888,
      "longitude": 105.25153
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
    "notes": "Jl. Bumi Manti II. Kawasan kuliner mahasiswa 24 jam, dekat masjid besar, fotokopi, dan laundry kiloan murah.",
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
    "id": "unila-bandarlampung-distilled-033",
    "name": "Asrama Kenanga",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Kampung Baru Raya / Nunyai",
    "coordinates": {
      "latitude": -5.35008,
      "longitude": 105.24659
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
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Gg. Cendana. Dekat lapangan olahraga dan minimarket 24 jam.",
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
    "id": "unila-bandarlampung-distilled-034",
    "name": "Griya Bintang Gedong",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Gedong Meneng (ZA Pagar Alam)",
    "coordinates": {
      "latitude": -5.3679,
      "longitude": 105.24116
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. ZA Pagar Alam. Bangunan kokoh modern, parkir motor luas berkanopi, bebas banjir.",
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
    "id": "unila-bandarlampung-distilled-035",
    "name": "D'Kost Kenanga Gedong",
    "campusId": "unila-bandarlampung",
    "city": "Bandar Lampung",
    "area": "Gedong Meneng (ZA Pagar Alam)",
    "coordinates": {
      "latitude": -5.36648,
      "longitude": 105.23776
    },
    "rentMonthly": 575000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Haji Said. Akses sangat cepat ke Fakultas Hukum, FEB, dan Gedung Rektorat Unila.",
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
    "id": "unp-padang-distilled-001",
    "name": "Pondok Mawar Simpang",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Simpang Tinju & Gajah Mada",
    "coordinates": {
      "latitude": -0.90712,
      "longitude": 100.35703
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Anggrek Simpang Tinju. Banyak klinik 24 jam, apotek, swalayan, dan sentra jajanan malam mahasiswa.",
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
    "id": "unp-padang-distilled-002",
    "name": "Paviliun Al-Ikhlas Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Timur (Prof. Dr. Hamka)",
    "coordinates": {
      "latitude": -0.89553,
      "longitude": 100.35887
    },
    "rentMonthly": 1250000,
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
    "notes": "Gg. Melati Air Tawar. Tepat di koridor utama kampus UNP depan Basko Grand Mall, akses transportasi angkot 24 jam.",
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
    "id": "unp-padang-distilled-003",
    "name": "Rumah Kos Sentosa Simpang",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Simpang Tinju & Gajah Mada",
    "coordinates": {
      "latitude": -0.90403,
      "longitude": 100.35795
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
    "notes": "Simpang Tinju. Persimpangan strategis yang menghubungkan UNP dengan pusat kota Padang.",
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
    "id": "unp-padang-distilled-004",
    "name": "D'Kost Cahaya Simpang",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Simpang Tinju & Gajah Mada",
    "coordinates": {
      "latitude": -0.90434,
      "longitude": 100.35859
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
    "notes": "Jl. Anggrek Simpang Tinju. Banyak klinik 24 jam, apotek, swalayan, dan sentra jajanan malam mahasiswa.",
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
    "id": "unp-padang-distilled-005",
    "name": "Kost Kemuning Simpang",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Simpang Tinju & Gajah Mada",
    "coordinates": {
      "latitude": -0.9052,
      "longitude": 100.35903
    },
    "rentMonthly": 1400000,
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
    "notes": "Jl. Anggrek Simpang Tinju. Persimpangan strategis yang menghubungkan UNP dengan pusat kota Padang.",
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
    "id": "unp-padang-distilled-006",
    "name": "Wisma Griya Indah Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Barat (Cendrawasih)",
    "coordinates": {
      "latitude": -0.89641,
      "longitude": 100.3501
    },
    "rentMonthly": 825000,
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
    "notes": "Jl. Merpati. Dikelilingi warung ampera masakan Padang murah meriah, dekat laundry dan fotokopi skripsi.",
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
    "id": "unp-padang-distilled-007",
    "name": "D'Kost Pelangi",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.88769,
      "longitude": 100.3539
    },
    "rentMonthly": 1350000,
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
    "notes": "Jl. Dakota. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.",
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
    "id": "unp-padang-distilled-008",
    "name": "Kost Sejahtera Tunggul",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.88814,
      "longitude": 100.35234
    },
    "rentMonthly": 750000,
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
    "notes": "Gg. Bersama Tunggul Hitam. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.",
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
    "id": "unp-padang-distilled-009",
    "name": "Asrama Asri Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Timur (Prof. Dr. Hamka)",
    "coordinates": {
      "latitude": -0.89353,
      "longitude": 100.35892
    },
    "rentMonthly": 1100000,
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
    "notes": "Jl. Prof. Dr. Hamka. Fasilitas kamar lengkap, WiFi internet stabil, gerbang pagar besi aman terkunci malam.",
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
    "id": "unp-padang-distilled-010",
    "name": "Paviliun Cahaya",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.89011,
      "longitude": 100.35414
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
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. DPR Tunggul Hitam. Kawasan hunian tenang dan nyaman di utara kampus UNP, dekat Stasiun KRL Air Tawar.",
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
    "id": "unp-padang-distilled-011",
    "name": "Griya Dahlia",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.8918,
      "longitude": 100.35257
    },
    "rentMonthly": 775000,
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
    "notes": "Gg. Bersama Tunggul Hitam. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.",
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
    "id": "unp-padang-distilled-012",
    "name": "Rumah Kos Sejahtera Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Barat (Cendrawasih)",
    "coordinates": {
      "latitude": -0.90152,
      "longitude": 100.34696
    },
    "rentMonthly": 875000,
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
    "notes": "Jl. Rajawali Air Tawar. Sentra hunian kos legendaris mahasiswa UNP, jalan kaki 3-5 menit tembus gerbang fakultas olahraga & teknik.",
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
    "id": "unp-padang-distilled-013",
    "name": "D'Kost Sejahtera",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Timur (Prof. Dr. Hamka)",
    "coordinates": {
      "latitude": -0.89291,
      "longitude": 100.35843
    },
    "rentMonthly": 1300000,
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
    "notes": "Jl. Belibis. Fasilitas kamar lengkap, WiFi internet stabil, gerbang pagar besi aman terkunci malam.",
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
    "id": "unp-padang-distilled-014",
    "name": "Paviliun Melati Tunggul",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.88918,
      "longitude": 100.35005
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
    "notes": "Jl. Dakota. Bebas banjir rob, akses jalan aspal mulus dapat dilewati mobil dan motor.",
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
    "id": "unp-padang-distilled-015",
    "name": "Griya Putra Jaya Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Timur (Prof. Dr. Hamka)",
    "coordinates": {
      "latitude": -0.8916,
      "longitude": 100.35814
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
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Teratai. Tepat di koridor utama kampus UNP depan Basko Grand Mall, akses transportasi angkot 24 jam.",
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
    "id": "unp-padang-distilled-016",
    "name": "Kos Mandiri Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Timur (Prof. Dr. Hamka)",
    "coordinates": {
      "latitude": -0.89747,
      "longitude": 100.35765
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
      "ac",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Belibis. Tepat di koridor utama kampus UNP depan Basko Grand Mall, akses transportasi angkot 24 jam.",
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
    "id": "unp-padang-distilled-017",
    "name": "D'Kost Putra Jaya",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Simpang Tinju & Gajah Mada",
    "coordinates": {
      "latitude": -0.90221,
      "longitude": 100.36105
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
    "notes": "Jl. Gajah Mada. Banyak klinik 24 jam, apotek, swalayan, dan sentra jajanan malam mahasiswa.",
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
    "id": "unp-padang-distilled-018",
    "name": "Kost Mandiri",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Barat (Cendrawasih)",
    "coordinates": {
      "latitude": -0.89823,
      "longitude": 100.34787
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Cendrawasih. Dikelilingi warung ampera masakan Padang murah meriah, dekat laundry dan fotokopi skripsi.",
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
    "id": "unp-padang-distilled-019",
    "name": "Griya Harmoni Tunggul",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.88927,
      "longitude": 100.35503
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
    "notes": "Jl. DPR Tunggul Hitam. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.",
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
    "id": "unp-padang-distilled-020",
    "name": "Wisma Barokah",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.89095,
      "longitude": 100.35557
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
      "ac",
      "water_heater",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. DPR Tunggul Hitam. Bebas banjir rob, akses jalan aspal mulus dapat dilewati mobil dan motor.",
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
    "id": "unp-padang-distilled-021",
    "name": "Rumah Kos Mahasiswa Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Barat (Cendrawasih)",
    "coordinates": {
      "latitude": -0.89602,
      "longitude": 100.34937
    },
    "rentMonthly": 1250000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Rajawali Air Tawar. Dikelilingi warung ampera masakan Padang murah meriah, dekat laundry dan fotokopi skripsi.",
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
    "id": "unp-padang-distilled-022",
    "name": "Griya Amanah Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Barat (Cendrawasih)",
    "coordinates": {
      "latitude": -0.90114,
      "longitude": 100.34725
    },
    "rentMonthly": 650000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle"
    ],
    "verified": true,
    "notes": "Jl. Merpati. Sentra hunian kos legendaris mahasiswa UNP, jalan kaki 3-5 menit tembus gerbang fakultas olahraga & teknik.",
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
    "id": "unp-padang-distilled-023",
    "name": "Rumah Kos Anggrek",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.89144,
      "longitude": 100.3578
    },
    "rentMonthly": 825000,
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
    "notes": "Gg. Bersama Tunggul Hitam. Bebas banjir rob, akses jalan aspal mulus dapat dilewati mobil dan motor.",
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
    "id": "unp-padang-distilled-024",
    "name": "Kost Sakinah Tunggul",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.88602,
      "longitude": 100.35184
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
    "notes": "Jl. Hercules. Bebas banjir rob, akses jalan aspal mulus dapat dilewati mobil dan motor.",
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
    "id": "unp-padang-distilled-025",
    "name": "Rumah Kos Ceria Simpang",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Simpang Tinju & Gajah Mada",
    "coordinates": {
      "latitude": -0.9067,
      "longitude": 100.36328
    },
    "rentMonthly": 1025000,
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
    "notes": "Jl. Gajah Mada. Banyak klinik 24 jam, apotek, swalayan, dan sentra jajanan malam mahasiswa.",
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
    "id": "unp-padang-distilled-026",
    "name": "Pondok Kemuning Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Barat (Cendrawasih)",
    "coordinates": {
      "latitude": -0.8964,
      "longitude": 100.34684
    },
    "rentMonthly": 875000,
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
    "notes": "Jl. Merpati. Dekat pantai Padang dengan hembusan angin sejuk, lingkungan mahasiswa aktif dan guyub.",
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
    "id": "unp-padang-distilled-027",
    "name": "Kos Kemuning Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Barat (Cendrawasih)",
    "coordinates": {
      "latitude": -0.89769,
      "longitude": 100.35046
    },
    "rentMonthly": 825000,
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
    "notes": "Gg. Garuda. Dikelilingi warung ampera masakan Padang murah meriah, dekat laundry dan fotokopi skripsi.",
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
    "id": "unp-padang-distilled-028",
    "name": "Griya Cendana Tunggul",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.88982,
      "longitude": 100.35199
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
    "notes": "Jl. Dakota. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.",
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
    "id": "unp-padang-distilled-030",
    "name": "Wisma Permata Simpang",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Simpang Tinju & Gajah Mada",
    "coordinates": {
      "latitude": -0.90625,
      "longitude": 100.35671
    },
    "rentMonthly": 750000,
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
    "notes": "Jl. Anggrek Simpang Tinju. Persimpangan strategis yang menghubungkan UNP dengan pusat kota Padang.",
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
    "id": "unp-padang-distilled-031",
    "name": "Griya Putri Cantika Tunggul",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Tunggul Hitam & DPR",
    "coordinates": {
      "latitude": -0.89161,
      "longitude": 100.3577
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
      "ac"
    ],
    "verified": true,
    "notes": "Gg. Bersama Tunggul Hitam. Sewa bulanan bersahabat bagi kantong mahasiswa mandiri, air PDAM/sumur bersih tidak berbau.",
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
    "id": "unp-padang-distilled-032",
    "name": "Asrama Ganesha Simpang",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Simpang Tinju & Gajah Mada",
    "coordinates": {
      "latitude": -0.90748,
      "longitude": 100.36049
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Anggrek Simpang Tinju. Persimpangan strategis yang menghubungkan UNP dengan pusat kota Padang.",
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
    "id": "unp-padang-distilled-033",
    "name": "Asrama Cahaya Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Barat (Cendrawasih)",
    "coordinates": {
      "latitude": -0.89978,
      "longitude": 100.35078
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Rajawali Air Tawar. Sentra hunian kos legendaris mahasiswa UNP, jalan kaki 3-5 menit tembus gerbang fakultas olahraga & teknik.",
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
    "id": "unp-padang-distilled-034",
    "name": "Kos Mawar Air",
    "campusId": "unp-padang",
    "city": "Padang",
    "area": "Air Tawar Barat (Cendrawasih)",
    "coordinates": {
      "latitude": -0.89891,
      "longitude": 100.35063
    },
    "rentMonthly": 1400000,
    "roomType": "single",
    "gender": "all",
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
    "notes": "Jl. Merpati. Dikelilingi warung ampera masakan Padang murah meriah, dekat laundry dan fotokopi skripsi.",
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
  }
];

export function getListingsByCampus(campusId: string): readonly PilotListing[] {
  return PILOT_LISTINGS.filter((item) => item.campusId === campusId);
}

export function findListingById(id: string): PilotListing | undefined {
  return PILOT_LISTINGS.find((item) => item.id === id);
}
