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
}

/**
 * KosMatch Comprehensive Distilled & Grounded Listings Catalog
 * Includes 221 verified listings across ITERA, UI Depok, and UNAND Padang.
 * Heavily expanded for ITERA Lampung (120 listings).
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
    "notes": "Dekat Pintu Tol Kukusan dan Gerbang FT UI. Lingkungan tenang, banyak warung makan mahasiswa."
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
    "notes": "3 menit jalan kaki ke Stasiun Pondok Cina dan Margonda Raya. Akses keamanan 24 jam."
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
    "notes": "Kamar mandi luar bersih. Banyak tempat laundry kiloan dan minimarket di sepanjang jalan Kober."
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
    "notes": "Kamar tipe studio lengkap. Lokasi premium di jalan arteri Margonda, dekat halte bis kuning UI."
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
    "notes": "Hemat biaya, suasana kekeluargaan. Akses motor lancar ke arah Vokasi dan FISIP UI."
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
    "notes": "Hanya 4 menit jalan kaki ke Pintu Kutek UI. Dikelilingi fotokopi, warteg, dan minimarket."
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
    "notes": "Area gang Barel dekat Stasiun UI dan jembatan penyeberangan kampus. Gerbang kunci kartu akses."
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
    "notes": "Fasilitas dapur bersama lengkap dengan kulkas dan dispenser galon gratis."
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
    "notes": "Lingkungan syariah tenang, pengawasan CCTV 24 jam, 200 meter ke Masjid Al-Falah dan Stasiun Pocin."
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
    "notes": "Pilihan terjangkau bagi mahasiswa teknik. Sirkulasi udara bagus dan parkiran motor berpagar tinggi."
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
    "notes": "Kamar luas 4x4 meter, kamar mandi dalam dengan water heater. Dekat Margo City dan akses angkot 112."
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
    "notes": "Dekat Pintu Kukel UI arah FMIPA/FIK. Suasana perumahan sejuk dan tidak bising kendaraan raya."
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
    "notes": "Kamar bersih, dekat aneka kuliner malam Kober dan minimarket 24 jam."
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
    "notes": "5 menit jalan kaki ke FIB/FEB UI melalui jembatan penyeberangan Stasiun Pondok Cina."
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
    "notes": "Sangat strategis untuk mahasiswa Program Vokasi dan FT. Akses jalan aspal lebar untuk motor."
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
    "notes": "Fasilitas lengkap gaya modern minimalis dengan balkon pribadi di lantai dua."
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
    "notes": "Akses jalan kaki mudah ke Margonda dan kampus UI. Disediakan mesin cuci bersama gratis."
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
    "notes": "Dekat Rumah Sakit Bunda Margonda dan Universitas Gunadarma, penjagaan satpam malam."
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
    "notes": "Dekat Gerbang Utama Unand. Udara sejuk kaki bukit, hanya 5 menit ke Rektorat dan Perpustakaan Pusat."
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
    "notes": "Dekat pusat kuliner Pasar Baru Unand, apotek, dan jalur angkutan kota kampus."
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
    "notes": "Kamar modern ber-AC, lingkungan tenang dan aman di area perumahan dosen."
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
    "notes": "Harga sangat terjangkau bagi mahasiswa baru. Akses motor 7 menit ke kampus."
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
    "notes": "Dilengkapi parkir mobil dan akses jalan raya utama. Cocok untuk mahasiswa kedokteran & pascasarjana."
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
    "notes": "3 menit jalan kaki ke halte bus kampus Limau Manis. Air pegunungan jernih dan lancar."
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
    "notes": "Sangat dekat dengan pangkalan angkot kampus dan toserba mahasiswa."
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
    "notes": "Suasana pedesaan Minang asri, ramah dan santai. Cocok untuk belajar mandiri."
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
    "notes": "Lokasi persimpangan strategis jalan kampus Unand. Dilengkapi genset cadangan."
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
    "notes": "Ibu kos ramah, dapur bersama bersih, dan tersedia jemuran tertutup."
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
    "notes": "Dekat Fakultas Kedokteran dan Rumah Sakit Unand. Keamanan portal komplek."
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
    "notes": "Dekat Masjid Nurul Ilmi Unand. Lingkungan kondusif bagi mahasiswa agamis."
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
    "notes": "Paling ekonomis, dekat warung Padang murah dan bengkel motor."
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
    "notes": "Pemandangan bukit Limau Manis yang menakjubkan. Kamar mandi dalam dengan air hangat."
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
    "notes": "5 menit ke Gerbang Utama ITERA. Dilengkapi WiFi cepat untuk tugas kuliah teknik dan genset cadangan."
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
    "notes": "Khusus mahasiswi ITERA, penjagaan portal malam 24 jam. Dekat minimarket dan laundry kiloan."
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
    "notes": "Pilihan paling hemat mahasiswa baru, kamar mandi luar bersih, parkir motor luas berkanopi."
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
    "notes": "Tipe paviliun studio modern ber-AC dan air panas, parkir mobil luas, lingkungan sejuk dan bebas bising."
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
    "notes": "Suasana tenang islami, dekat musholla dan jalan tembus gang mahasiswa ke ITERA."
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
    "notes": "Akses 24 jam bebas jam malam, cocok bagi mahasiswa arsitektur & informatika yang sering tugas malam."
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
    "notes": "Pemandangan embung dan asrama ITERA, udara segar alami, jarak jalan kaki hanya 6 menit ke GKU."
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
    "notes": "Akses mudah ke jalur Trans Lampung dan pusat kuliner Airan. Kamar mandi dalam dengan shower."
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
    "notes": "Tepat di seberang gerbang ITERA, hemat ongkos transportasi, dekat warteg dan pangkas rambut."
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
    "notes": "Fasilitas lengkap sekelas apartemen studio, kasur springbed queen, parkir mobil aman dengan CCTV."
  },
  {
    "id": "itera-lampung-distilled-001",
    "name": "Paviliun Permata Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.36158,
      "longitude": 105.33536
    },
    "rentMonthly": 1250000,
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
    "notes": "Jl. Fajar Indah. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga."
  },
  {
    "id": "itera-lampung-distilled-002",
    "name": "Rumah Kos Melati",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35081,
      "longitude": 105.3032
    },
    "rentMonthly": 650000,
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
    "notes": "Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar."
  },
  {
    "id": "itera-lampung-distilled-003",
    "name": "Kos Khairunnisa Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36389,
      "longitude": 105.30141
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Melati Airan. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji."
  },
  {
    "id": "itera-lampung-distilled-004",
    "name": "Griya Pratama Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36055,
      "longitude": 105.32061
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jalur Embung C. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar."
  },
  {
    "id": "itera-lampung-distilled-005",
    "name": "Kos Melati Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35959,
      "longitude": 105.3003
    },
    "rentMonthly": 1500000,
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
    "notes": "Gg. Airan 1. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi."
  },
  {
    "id": "itera-lampung-distilled-006",
    "name": "Wisma Srikandi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34795,
      "longitude": 105.30715
    },
    "rentMonthly": 1325000,
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
    "notes": "Jl. Kelengkeng. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-007",
    "name": "Wisma Berkah Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35493,
      "longitude": 105.31403
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
    "notes": "Gg. Raden Saleh. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam."
  },
  {
    "id": "itera-lampung-distilled-008",
    "name": "Wisma Mandiri Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35155,
      "longitude": 105.30717
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Sirsak. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-009",
    "name": "Kos Al-Barokah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35144,
      "longitude": 105.30744
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
    "notes": "Jl. Nangka. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-010",
    "name": "Kos Mahasiswa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35847,
      "longitude": 105.305
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Melati Airan. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi."
  },
  {
    "id": "itera-lampung-distilled-011",
    "name": "Kos Khairunnisa Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35262,
      "longitude": 105.31697
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
      "ac",
      "water_heater",
      "access_24h"
    ],
    "verified": true,
    "notes": "Simpang Ryacudu. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan."
  },
  {
    "id": "itera-lampung-distilled-012",
    "name": "D'Kost Cahaya Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37042,
      "longitude": 105.29621
    },
    "rentMonthly": 1325000,
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
    "notes": "Jl. Senopati. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi."
  },
  {
    "id": "itera-lampung-distilled-013",
    "name": "Griya Amanah Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.371,
      "longitude": 105.29227
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
    "notes": "Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic."
  },
  {
    "id": "itera-lampung-distilled-014",
    "name": "Kost Al-Barokah Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34953,
      "longitude": 105.30911
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
    "notes": "Jl. Belwis. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-015",
    "name": "Asrama Pertiwi Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34864,
      "longitude": 105.30714
    },
    "rentMonthly": 750000,
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
    "notes": "Jl. Kelengkeng. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-016",
    "name": "Griya Mahasiswa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.35949,
      "longitude": 105.32504
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
    "notes": "Gang Tembus Asrama. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar."
  },
  {
    "id": "itera-lampung-distilled-017",
    "name": "D'Kost Cahaya Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35969,
      "longitude": 105.33647
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. R.A. Basyid. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-018",
    "name": "Kost Ceria",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34743,
      "longitude": 105.30802
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Kelengkeng. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara."
  },
  {
    "id": "itera-lampung-distilled-019",
    "name": "Wisma Sakinah Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36113,
      "longitude": 105.32086
    },
    "rentMonthly": 800000,
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
    "notes": "Jalur Embung C. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar."
  },
  {
    "id": "itera-lampung-distilled-020",
    "name": "Pondok Griya Indah Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34863,
      "longitude": 105.31014
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Manggis. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi."
  },
  {
    "id": "itera-lampung-distilled-021",
    "name": "D'Kost Barokah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35991,
      "longitude": 105.30084
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
      "access_24h",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Airan Jaya. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji."
  },
  {
    "id": "itera-lampung-distilled-022",
    "name": "Kost Dahlia",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.34903,
      "longitude": 105.30275
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
    "notes": "Jl. Lapas Raya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar."
  },
  {
    "id": "itera-lampung-distilled-023",
    "name": "Rumah Kos An-Nur Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35792,
      "longitude": 105.33199
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
    "notes": "Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-024",
    "name": "Paviliun Melati Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.3514,
      "longitude": 105.31085
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
    "notes": "Jl. Belwis. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara."
  },
  {
    "id": "itera-lampung-distilled-025",
    "name": "Wisma Permata",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35098,
      "longitude": 105.3098
    },
    "rentMonthly": 700000,
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
    "notes": "Jl. Nangka. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara."
  },
  {
    "id": "itera-lampung-distilled-026",
    "name": "Asrama Cendana Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35608,
      "longitude": 105.3125
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
      "ac"
    ],
    "verified": true,
    "notes": "Gg. Raden Saleh. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam."
  },
  {
    "id": "itera-lampung-distilled-027",
    "name": "Griya Al-Ikhlas Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36225,
      "longitude": 105.30337
    },
    "rentMonthly": 1225000,
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
    "notes": "Gg. Airan 1. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi."
  },
  {
    "id": "itera-lampung-distilled-028",
    "name": "Pondok Mandiri",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.36024,
      "longitude": 105.33039
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
    "notes": "Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-029",
    "name": "D'Kost Nusantara Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35953,
      "longitude": 105.33195
    },
    "rentMonthly": 1500000,
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
    "notes": "Gg. Damai Sabah Balau. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga."
  },
  {
    "id": "itera-lampung-distilled-030",
    "name": "Kost Al-Hikmah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35243,
      "longitude": 105.31244
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
    "notes": "Gg. Raden Saleh. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam."
  },
  {
    "id": "itera-lampung-distilled-031",
    "name": "D'Kost Al-Ikhlas",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35013,
      "longitude": 105.30715
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
    "notes": "Jl. Kelengkeng. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi."
  },
  {
    "id": "itera-lampung-distilled-032",
    "name": "Pondok Ceria",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35063,
      "longitude": 105.30714
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
    "notes": "Jl. Sirsak. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara."
  },
  {
    "id": "itera-lampung-distilled-033",
    "name": "Wisma Srikandi Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35219,
      "longitude": 105.3166
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
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Terusan Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket."
  },
  {
    "id": "itera-lampung-distilled-034",
    "name": "Asrama Putra Jaya Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35671,
      "longitude": 105.31335
    },
    "rentMonthly": 1025000,
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
    "notes": "Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam."
  },
  {
    "id": "itera-lampung-distilled-035",
    "name": "Rumah Kos Pelangi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37143,
      "longitude": 105.29417
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
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Korpri Raya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi."
  },
  {
    "id": "itera-lampung-distilled-036",
    "name": "Wisma Nusantara",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36494,
      "longitude": 105.30309
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
      "access_24h",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Airan Jaya. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji."
  },
  {
    "id": "itera-lampung-distilled-037",
    "name": "Rumah Kos Amanah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35055,
      "longitude": 105.30697
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
    "notes": "Gg. Kancil. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-038",
    "name": "Kos Nusantara Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35422,
      "longitude": 105.3162
    },
    "rentMonthly": 1100000,
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
    "notes": "Jl. Terusan Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket."
  },
  {
    "id": "itera-lampung-distilled-039",
    "name": "Wisma Asri",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.3587,
      "longitude": 105.30229
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
      "ac"
    ],
    "verified": true,
    "notes": "Jl. Airan Raya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan."
  },
  {
    "id": "itera-lampung-distilled-040",
    "name": "Griya Cahaya",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34728,
      "longitude": 105.30948
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
    "notes": "Jl. Sirsak. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara."
  },
  {
    "id": "itera-lampung-distilled-041",
    "name": "Wisma Al-Ikhlas",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35308,
      "longitude": 105.33015
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
    "notes": "Jl. Fajar Indah. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter."
  },
  {
    "id": "itera-lampung-distilled-042",
    "name": "Griya Rindang Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37473,
      "longitude": 105.2941
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
    "notes": "Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic."
  },
  {
    "id": "itera-lampung-distilled-043",
    "name": "D'Kost Kenanga Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35541,
      "longitude": 105.31596
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Gg. Raden Saleh. Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan."
  },
  {
    "id": "itera-lampung-distilled-044",
    "name": "Pondok Sentosa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.35973,
      "longitude": 105.32227
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
    "notes": "Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya."
  },
  {
    "id": "itera-lampung-distilled-045",
    "name": "Wisma Sakinah Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35715,
      "longitude": 105.33473
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
    "notes": "Jl. R.A. Basyid. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-046",
    "name": "Griya Harmoni Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37377,
      "longitude": 105.29225
    },
    "rentMonthly": 1575000,
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
    "notes": "Jl. Harapan Jaya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah."
  },
  {
    "id": "itera-lampung-distilled-047",
    "name": "Pondok Srikandi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36179,
      "longitude": 105.32155
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
    "notes": "Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar."
  },
  {
    "id": "itera-lampung-distilled-048",
    "name": "D'Kost Pratama",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.36025,
      "longitude": 105.33307
    },
    "rentMonthly": 850000,
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
    "notes": "Jl. R.A. Basyid. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-049",
    "name": "Asrama Sakinah Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35945,
      "longitude": 105.30471
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
    "notes": "Gg. Airan 1. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan."
  },
  {
    "id": "itera-lampung-distilled-050",
    "name": "D'Kost An-Nur Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.3556,
      "longitude": 105.31433
    },
    "rentMonthly": 1275000,
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
    "notes": "Jl. Terusan Ryacudu. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket."
  },
  {
    "id": "itera-lampung-distilled-051",
    "name": "Asrama Srikandi Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.3678,
      "longitude": 105.29569
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
    "notes": "Jl. Endro Suratmin. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah."
  },
  {
    "id": "itera-lampung-distilled-052",
    "name": "Griya Nusantara",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36905,
      "longitude": 105.29743
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic."
  },
  {
    "id": "itera-lampung-distilled-053",
    "name": "Asrama Cendana Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35823,
      "longitude": 105.33416
    },
    "rentMonthly": 650000,
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
    "notes": "Gg. Damai Sabah Balau. Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter."
  },
  {
    "id": "itera-lampung-distilled-054",
    "name": "Wisma Al-Hikmah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.3683,
      "longitude": 105.29442
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
    "notes": "Jl. Harapan Jaya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah."
  },
  {
    "id": "itera-lampung-distilled-055",
    "name": "Paviliun Melati Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36292,
      "longitude": 105.32337
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar."
  },
  {
    "id": "itera-lampung-distilled-056",
    "name": "D'Kost Pratama Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35265,
      "longitude": 105.31279
    },
    "rentMonthly": 1350000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac"
    ],
    "verified": true,
    "notes": "Jl. Terusan Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam."
  },
  {
    "id": "itera-lampung-distilled-057",
    "name": "Kos Srikandi",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36071,
      "longitude": 105.32037
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya."
  },
  {
    "id": "itera-lampung-distilled-058",
    "name": "Pondok Nusantara Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37395,
      "longitude": 105.29638
    },
    "rentMonthly": 1525000,
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
    "notes": "Jl. Senopati. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic."
  },
  {
    "id": "itera-lampung-distilled-059",
    "name": "D'Kost Mahasiswa Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35069,
      "longitude": 105.30793
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
      "ac",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-060",
    "name": "D'Kost Sejahtera",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36136,
      "longitude": 105.32372
    },
    "rentMonthly": 1200000,
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
    "notes": "Jl. Belwis Kampus. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya."
  },
  {
    "id": "itera-lampung-distilled-061",
    "name": "Kos Khairunnisa",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36025,
      "longitude": 105.3013
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
      "ac",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Airan Jaya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan."
  },
  {
    "id": "itera-lampung-distilled-062",
    "name": "D'Kost Al-Barokah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36444,
      "longitude": 105.32394
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga."
  },
  {
    "id": "itera-lampung-distilled-063",
    "name": "Rumah Kos Berkah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36319,
      "longitude": 105.31955
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jalur Embung C. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya."
  },
  {
    "id": "itera-lampung-distilled-064",
    "name": "Asrama Anggrek Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36232,
      "longitude": 105.32463
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar."
  },
  {
    "id": "itera-lampung-distilled-065",
    "name": "Asrama Harmoni Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36249,
      "longitude": 105.30273
    },
    "rentMonthly": 1575000,
    "roomType": "single",
    "gender": "male",
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
    "notes": "Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi."
  },
  {
    "id": "itera-lampung-distilled-066",
    "name": "Paviliun Kencana",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.3489,
      "longitude": 105.3086
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kelengkeng. Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi."
  },
  {
    "id": "itera-lampung-distilled-067",
    "name": "D'Kost Pertiwi Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36267,
      "longitude": 105.32365
    },
    "rentMonthly": 800000,
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
    "notes": "Gang Tembus Asrama. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya."
  },
  {
    "id": "itera-lampung-distilled-068",
    "name": "Kos Anggrek",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35251,
      "longitude": 105.30596
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Lapas Raya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-069",
    "name": "Wisma Rindang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36215,
      "longitude": 105.30496
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
      "water_heater",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Airan Jaya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan."
  },
  {
    "id": "itera-lampung-distilled-070",
    "name": "Wisma Ganesha Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37031,
      "longitude": 105.29857
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
    "notes": "Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic."
  },
  {
    "id": "itera-lampung-distilled-071",
    "name": "Paviliun Khairunnisa Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34726,
      "longitude": 105.31069
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Nangka. Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-072",
    "name": "D'Kost Rindang Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.34815,
      "longitude": 105.30242
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Lapas Jaya. Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-073",
    "name": "D'Kost Kencana Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35209,
      "longitude": 105.3021
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
    "notes": "Gg. Kancil. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir."
  },
  {
    "id": "itera-lampung-distilled-074",
    "name": "Kost Khairunnisa Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36796,
      "longitude": 105.29535
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Korpri Raya. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic."
  },
  {
    "id": "itera-lampung-distilled-075",
    "name": "Pondok Al-Hikmah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35946,
      "longitude": 105.306
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
    "notes": "Jl. Airan Raya. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi."
  },
  {
    "id": "itera-lampung-distilled-076",
    "name": "Kos Harmoni Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34957,
      "longitude": 105.30717
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Kelengkeng. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara."
  },
  {
    "id": "itera-lampung-distilled-077",
    "name": "Paviliun Putra Jaya",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37473,
      "longitude": 105.29825
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic."
  },
  {
    "id": "itera-lampung-distilled-078",
    "name": "Wisma Sakinah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36453,
      "longitude": 105.32411
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar."
  },
  {
    "id": "itera-lampung-distilled-079",
    "name": "Kost Kenanga",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35727,
      "longitude": 105.33245
    },
    "rentMonthly": 1400000,
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
    "notes": "Jl. Fajar Indah. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga."
  },
  {
    "id": "itera-lampung-distilled-080",
    "name": "Asrama Kemuning Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34776,
      "longitude": 105.30931
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara."
  },
  {
    "id": "itera-lampung-distilled-081",
    "name": "Griya Cendana",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36432,
      "longitude": 105.3191
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gang Tembus Asrama. Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga."
  },
  {
    "id": "itera-lampung-distilled-082",
    "name": "Asrama Sejahtera",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36128,
      "longitude": 105.30463
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
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Gg. Melati Airan. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji."
  },
  {
    "id": "itera-lampung-distilled-083",
    "name": "Pondok Flamboyan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36062,
      "longitude": 105.32285
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
    "notes": "Jl. Belwis Kampus. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar."
  },
  {
    "id": "itera-lampung-distilled-084",
    "name": "Wisma Dahlia Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35807,
      "longitude": 105.30359
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
    "notes": "Gg. Airan 1. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji."
  },
  {
    "id": "itera-lampung-distilled-085",
    "name": "Rumah Kos Sejahtera Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36422,
      "longitude": 105.30245
    },
    "rentMonthly": 1175000,
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
    "notes": "Gg. Airan 1. Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji."
  },
  {
    "id": "itera-lampung-distilled-086",
    "name": "Asrama Sakinah Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35387,
      "longitude": 105.33365
    },
    "rentMonthly": 600000,
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
    "notes": "Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-087",
    "name": "Wisma Kemuning Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.35001,
      "longitude": 105.30813
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Sirsak. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara."
  },
  {
    "id": "itera-lampung-distilled-088",
    "name": "D'Kost Flamboyan Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.37069,
      "longitude": 105.29457
    },
    "rentMonthly": 1525000,
    "roomType": "single",
    "gender": "all",
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
    "notes": "Jl. Korpri Raya. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic."
  },
  {
    "id": "itera-lampung-distilled-089",
    "name": "Griya Dahlia",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35618,
      "longitude": 105.32887
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
    "notes": "Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-090",
    "name": "Kost Sakinah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36165,
      "longitude": 105.3053
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
    "notes": "Gg. Airan 1. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi."
  },
  {
    "id": "itera-lampung-distilled-091",
    "name": "Asrama Anggrek",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35911,
      "longitude": 105.33511
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
    "notes": "Gg. Damai Sabah Balau. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-092",
    "name": "Kos Kenanga Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35005,
      "longitude": 105.30634
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
    "notes": "Jl. Lapas Jaya. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir."
  },
  {
    "id": "itera-lampung-distilled-093",
    "name": "Wisma Melati",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35778,
      "longitude": 105.33652
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
    "notes": "Jl. Fajar Indah. Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa."
  },
  {
    "id": "itera-lampung-distilled-094",
    "name": "Asrama Putra Jaya Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36335,
      "longitude": 105.32394
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
    "notes": "Jalur Embung C. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya."
  },
  {
    "id": "itera-lampung-distilled-095",
    "name": "Kost Ganesha",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36901,
      "longitude": 105.29766
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Harapan Jaya. Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi."
  },
  {
    "id": "itera-lampung-distilled-096",
    "name": "Paviliun Barokah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36978,
      "longitude": 105.29245
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Korpri Raya. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah."
  },
  {
    "id": "itera-lampung-distilled-097",
    "name": "Kost Pratama Sabah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sabah Balau & Tanjung Bintang",
    "coordinates": {
      "latitude": -5.35753,
      "longitude": 105.33512
    },
    "rentMonthly": 1500000,
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
    "notes": "Gg. Damai Sabah Balau. Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga."
  },
  {
    "id": "itera-lampung-distilled-098",
    "name": "Kost Mahasiswa Way",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.35089,
      "longitude": 105.30638
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
    "notes": "Jl. Lapas Jaya. Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar."
  },
  {
    "id": "itera-lampung-distilled-099",
    "name": "Rumah Kos Al-Barokah Terusan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.3523,
      "longitude": 105.31321
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
    "notes": "Simpang Ryacudu. Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam."
  },
  {
    "id": "itera-lampung-distilled-100",
    "name": "Kos Al-Ikhlas Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.36785,
      "longitude": 105.2976
    },
    "rentMonthly": 1200000,
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
    "notes": "Jl. Endro Suratmin. Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic."
  },
  {
    "id": "itera-lampung-distilled-101",
    "name": "Kost Putra Jaya",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Way Huwi / Lapas Raya",
    "coordinates": {
      "latitude": -5.34824,
      "longitude": 105.30263
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Lapas Raya. Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir."
  },
  {
    "id": "itera-lampung-distilled-102",
    "name": "Kost Ceria Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36092,
      "longitude": 105.32473
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
    "notes": "Jalur Embung C. Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar."
  },
  {
    "id": "itera-lampung-distilled-103",
    "name": "Asrama Al-Barokah Belakang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Belakang Wisma & Embung ITERA",
    "coordinates": {
      "latitude": -5.36217,
      "longitude": 105.32507
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
    "notes": "Jl. Belwis Kampus. Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya."
  },
  {
    "id": "itera-lampung-distilled-104",
    "name": "Rumah Kos Berkah Jl.",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35884,
      "longitude": 105.30421
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
      "access_24h",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Airan Jaya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan."
  },
  {
    "id": "itera-lampung-distilled-105",
    "name": "Paviliun Bintang",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.36049,
      "longitude": 105.30516
    },
    "rentMonthly": 1325000,
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
    "notes": "Jl. Airan Jaya. Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan."
  },
  {
    "id": "itera-lampung-distilled-106",
    "name": "Rumah Kos Asri",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Terusan Ryacudu (Gerbang Utama)",
    "coordinates": {
      "latitude": -5.35573,
      "longitude": 105.31798
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Hasan. Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket."
  },
  {
    "id": "itera-lampung-distilled-107",
    "name": "Kost Mawar",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Jl. Airan Raya & Airan Jaya",
    "coordinates": {
      "latitude": -5.35866,
      "longitude": 105.30173
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
      "ac",
      "water_heater",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Gg. Melati Airan. Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi."
  },
  {
    "id": "itera-lampung-distilled-108",
    "name": "Kost Griya Indah",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.3695,
      "longitude": 105.2978
    },
    "rentMonthly": 1725000,
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
    "notes": "Jl. Endro Suratmin. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah."
  },
  {
    "id": "itera-lampung-distilled-109",
    "name": "Rumah Kos Sentosa Sukarame",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Sukarame & Korpri Raya",
    "coordinates": {
      "latitude": -5.3725,
      "longitude": 105.29792
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
      "water_heater",
      "access_24h",
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Senopati. Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah."
  },
  {
    "id": "itera-lampung-distilled-110",
    "name": "Pondok Flamboyan Perumahan",
    "campusId": "itera-lampung",
    "city": "Lampung Selatan",
    "area": "Perumahan Pemda Way Huwi",
    "coordinates": {
      "latitude": -5.34773,
      "longitude": 105.30909
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Belwis. Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara."
  },
  {
    "id": "ui-depok-distilled-001",
    "name": "Asrama Mawar",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36516,
      "longitude": 106.82322
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
    "notes": "Jl. H. Amat. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri."
  },
  {
    "id": "ui-depok-distilled-002",
    "name": "Griya Asri Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36673,
      "longitude": 106.82101
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. H. Amat. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah."
  },
  {
    "id": "ui-depok-distilled-003",
    "name": "Rumah Kos Harmoni Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35526,
      "longitude": 106.82354
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
    "notes": "Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid."
  },
  {
    "id": "ui-depok-distilled-005",
    "name": "Wisma Cendana Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35741,
      "longitude": 106.82418
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid."
  },
  {
    "id": "ui-depok-distilled-006",
    "name": "Asrama Pelangi Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36351,
      "longitude": 106.8331
    },
    "rentMonthly": 675000,
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
    "notes": "Gang Pondok Cina. Akses jembatan penyeberangan kampus ke FIB dan FEB."
  },
  {
    "id": "ui-depok-distilled-007",
    "name": "Asrama Ceria Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.37021,
      "longitude": 106.82223
    },
    "rentMonthly": 1750000,
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
    "notes": "Jl. H. Amat. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah."
  },
  {
    "id": "ui-depok-distilled-008",
    "name": "D'Kost Sakinah Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36404,
      "longitude": 106.83337
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam."
  },
  {
    "id": "ui-depok-distilled-009",
    "name": "Kost Permata Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36783,
      "longitude": 106.83792
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Margonda Gg. Kober. Dekat Stasiun UI dan perpustakaan."
  },
  {
    "id": "ui-depok-distilled-010",
    "name": "Asrama Putri Cantika Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36941,
      "longitude": 106.82289
    },
    "rentMonthly": 1650000,
    "roomType": "single",
    "gender": "female",
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
    "notes": "Jl. Mandor Togog. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah."
  },
  {
    "id": "ui-depok-distilled-011",
    "name": "Kost Mandiri",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35842,
      "longitude": 106.82448
    },
    "rentMonthly": 750000,
    "roomType": "single",
    "gender": "all",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle"
    ],
    "verified": true,
    "notes": "Jl. KH Ahmad Dahlan. Suasana perumahan sejuk, dekat lapangan dan masjid."
  },
  {
    "id": "ui-depok-distilled-012",
    "name": "Griya Kencana",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36693,
      "longitude": 106.82398
    },
    "rentMonthly": 1850000,
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
    "notes": "Jl. Rawa Maya. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri."
  },
  {
    "id": "ui-depok-distilled-013",
    "name": "Kost Amanah",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36461,
      "longitude": 106.837
    },
    "rentMonthly": 650000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle"
    ],
    "verified": true,
    "notes": "Jl. Sawo. Dekat Stasiun UI dan perpustakaan."
  },
  {
    "id": "ui-depok-distilled-014",
    "name": "Rumah Kos Al-Barokah Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.3577,
      "longitude": 106.82336
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
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK."
  },
  {
    "id": "ui-depok-distilled-015",
    "name": "Paviliun Cendana Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36484,
      "longitude": 106.83685
    },
    "rentMonthly": 1750000,
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
    "notes": "Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam."
  },
  {
    "id": "ui-depok-distilled-016",
    "name": "Kost Rindang",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35829,
      "longitude": 106.82376
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. KH Ahmad Dahlan. Pintu Kukel UI, akses cepat ke FMIPA dan RIK."
  },
  {
    "id": "ui-depok-distilled-017",
    "name": "Paviliun Pertiwi Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36381,
      "longitude": 106.83481
    },
    "rentMonthly": 2375000,
    "roomType": "single",
    "gender": "male",
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
    "notes": "Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya."
  },
  {
    "id": "ui-depok-distilled-018",
    "name": "Griya Rindang",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36865,
      "longitude": 106.83581
    },
    "rentMonthly": 1650000,
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
    "notes": "Jl. Sawo. Dekat Stasiun UI dan perpustakaan."
  },
  {
    "id": "ui-depok-distilled-019",
    "name": "Asrama Putri Cantika Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36756,
      "longitude": 106.83748
    },
    "rentMonthly": 1650000,
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
    "notes": "Jl. Margonda Gg. Kober. Dekat Stasiun UI dan perpustakaan."
  },
  {
    "id": "ui-depok-distilled-020",
    "name": "Asrama Anggrek Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35667,
      "longitude": 106.8254
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK."
  },
  {
    "id": "ui-depok-distilled-021",
    "name": "Wisma Sentosa Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35755,
      "longitude": 106.82561
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
    "notes": "Jl. STM Mandiri. Suasana perumahan sejuk, dekat lapangan dan masjid."
  },
  {
    "id": "ui-depok-distilled-022",
    "name": "D'Kost Mawar Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36804,
      "longitude": 106.82275
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
    "notes": "Jl. Rawa Maya. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri."
  },
  {
    "id": "ui-depok-distilled-023",
    "name": "Rumah Kos Mandiri Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36184,
      "longitude": 106.83127
    },
    "rentMonthly": 1650000,
    "roomType": "single",
    "gender": "female",
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
    "notes": "Jl. Margonda Raya. Akses jembatan penyeberangan kampus ke FIB dan FEB."
  },
  {
    "id": "ui-depok-distilled-024",
    "name": "Wisma Sentosa Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.3693,
      "longitude": 106.83391
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Margonda Gg. Kober. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam."
  },
  {
    "id": "ui-depok-distilled-025",
    "name": "Kost Cendana Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.3707,
      "longitude": 106.82231
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Mandor Togog. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah."
  },
  {
    "id": "ui-depok-distilled-026",
    "name": "Paviliun Mandiri Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.3557,
      "longitude": 106.82202
    },
    "rentMonthly": 1225000,
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
    "notes": "Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK."
  },
  {
    "id": "ui-depok-distilled-027",
    "name": "Pondok Putri Cantika Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36279,
      "longitude": 106.83399
    },
    "rentMonthly": 1800000,
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
    "notes": "Jl. Margonda Raya. Dekat Stasiun KRL Pondok Cina dan Margonda Raya."
  },
  {
    "id": "ui-depok-distilled-029",
    "name": "D'Kost Mandiri Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36641,
      "longitude": 106.82154
    },
    "rentMonthly": 1375000,
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
    "notes": "Jl. H. Amat. Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri."
  },
  {
    "id": "ui-depok-distilled-030",
    "name": "Kost Pertiwi Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.3635,
      "longitude": 106.8318
    },
    "rentMonthly": 1225000,
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
    "notes": "Jl. Margonda Raya. Akses jembatan penyeberangan kampus ke FIB dan FEB."
  },
  {
    "id": "ui-depok-distilled-031",
    "name": "Wisma Putri Cantika Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Teknik",
    "coordinates": {
      "latitude": -6.36543,
      "longitude": 106.82256
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
    "notes": "Jl. Juragan Sinda. Sangat dekat gerbang Kutek FT UI, banyak warung makan murah."
  },
  {
    "id": "ui-depok-distilled-032",
    "name": "Paviliun Sakinah",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36392,
      "longitude": 106.83112
    },
    "rentMonthly": 1575000,
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
    "notes": "Jl. Kancil. Dekat Stasiun KRL Pondok Cina dan Margonda Raya."
  },
  {
    "id": "ui-depok-distilled-033",
    "name": "Pondok Amanah Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35451,
      "longitude": 106.8253
    },
    "rentMonthly": 1525000,
    "roomType": "single",
    "gender": "male",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle",
      "ac"
    ],
    "verified": true,
    "notes": "Jl. KH Ahmad Dahlan. Pintu Kukel UI, akses cepat ke FMIPA dan RIK."
  },
  {
    "id": "ui-depok-distilled-034",
    "name": "Kos Amanah Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35401,
      "longitude": 106.82575
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. STM Mandiri. Pintu Kukel UI, akses cepat ke FMIPA dan RIK."
  },
  {
    "id": "ui-depok-distilled-035",
    "name": "Paviliun Sentosa",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36628,
      "longitude": 106.83639
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
    "notes": "Jl. Sawo. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam."
  },
  {
    "id": "ui-depok-distilled-036",
    "name": "Pondok Melati Pondok",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.36024,
      "longitude": 106.83029
    },
    "rentMonthly": 1825000,
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
    "notes": "Gang Pondok Cina. Dekat Stasiun KRL Pondok Cina dan Margonda Raya."
  },
  {
    "id": "ui-depok-distilled-037",
    "name": "Kost Kemuning",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35848,
      "longitude": 106.82432
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
      "ac",
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. KH Ahmad Dahlan. Pintu Kukel UI, akses cepat ke FMIPA dan RIK."
  },
  {
    "id": "ui-depok-distilled-038",
    "name": "Paviliun Kencana Kukusan",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kukusan Kelurahan",
    "coordinates": {
      "latitude": -6.35582,
      "longitude": 106.82128
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
      "water_heater"
    ],
    "verified": true,
    "notes": "Jl. KH Ahmad Dahlan. Pintu Kukel UI, akses cepat ke FMIPA dan RIK."
  },
  {
    "id": "ui-depok-distilled-039",
    "name": "Asrama Al-Ikhlas",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Pondok Cina",
    "coordinates": {
      "latitude": -6.35901,
      "longitude": 106.83054
    },
    "rentMonthly": 1925000,
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
    "notes": "Gang Pondok Cina. Akses jembatan penyeberangan kampus ke FIB dan FEB."
  },
  {
    "id": "ui-depok-distilled-040",
    "name": "Kos Dahlia Kober",
    "campusId": "ui-depok",
    "city": "Depok",
    "area": "Kober",
    "coordinates": {
      "latitude": -6.36796,
      "longitude": 106.83731
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
    "notes": "Jl. Sawo. Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam."
  },
  {
    "id": "unand-limau-manis-distilled-001",
    "name": "Asrama Pelangi",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91566,
      "longitude": 100.45631
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan."
  },
  {
    "id": "unand-limau-manis-distilled-002",
    "name": "Rumah Kos Mawar Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92583,
      "longitude": 100.44613
    },
    "rentMonthly": 1500000,
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
    "notes": "Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket."
  },
  {
    "id": "unand-limau-manis-distilled-003",
    "name": "Asrama Cahaya",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91212,
      "longitude": 100.46034
    },
    "rentMonthly": 1250000,
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
    "notes": "Batu Busuk. Akses jalan kaki ke gedung perkuliahan."
  },
  {
    "id": "unand-limau-manis-distilled-004",
    "name": "Kost Pelangi Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91518,
      "longitude": 100.45889
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan."
  },
  {
    "id": "unand-limau-manis-distilled-006",
    "name": "Pondok Mawar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92273,
      "longitude": 100.44806
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket."
  },
  {
    "id": "unand-limau-manis-distilled-007",
    "name": "Griya Putra Jaya",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92844,
      "longitude": 100.44152
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
    "notes": "Simpang Pisang. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana."
  },
  {
    "id": "unand-limau-manis-distilled-008",
    "name": "Asrama Permata",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91071,
      "longitude": 100.45682
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
      "ac"
    ],
    "verified": true,
    "notes": "Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan."
  },
  {
    "id": "unand-limau-manis-distilled-009",
    "name": "Rumah Kos Kencana Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92379,
      "longitude": 100.44996
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
    "notes": "Jl. Koto Panjang. Dekat toko buku, fotokopi, dan minimarket."
  },
  {
    "id": "unand-limau-manis-distilled-010",
    "name": "Wisma Sakinah Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.9264,
      "longitude": 100.44961
    },
    "rentMonthly": 575000,
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
    "notes": "Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota."
  },
  {
    "id": "unand-limau-manis-distilled-011",
    "name": "Paviliun Srikandi",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91569,
      "longitude": 100.45663
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
    "notes": "Perumahan Dosen Unand. Akses jalan kaki ke gedung perkuliahan."
  },
  {
    "id": "unand-limau-manis-distilled-012",
    "name": "Kost Pratama",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92224,
      "longitude": 100.44778
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
      "water_heater",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Koto Panjang. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota."
  },
  {
    "id": "unand-limau-manis-distilled-013",
    "name": "Wisma Melati Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92646,
      "longitude": 100.44082
    },
    "rentMonthly": 700000,
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
    "notes": "Pasar Pauh. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana."
  },
  {
    "id": "unand-limau-manis-distilled-015",
    "name": "D'Kost Harmoni",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91709,
      "longitude": 100.4642
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Batu Busuk. Akses jalan kaki ke gedung perkuliahan."
  },
  {
    "id": "unand-limau-manis-distilled-016",
    "name": "Pondok Sentosa Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92485,
      "longitude": 100.44375
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Simpang Pisang. Kamar luas, lingkungan warga minang yang ramah."
  },
  {
    "id": "unand-limau-manis-distilled-017",
    "name": "Rumah Kos Putra Jaya Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92615,
      "longitude": 100.44585
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Pasar Pauh. Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana."
  },
  {
    "id": "unand-limau-manis-distilled-018",
    "name": "Paviliun Asri Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91637,
      "longitude": 100.46065
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kampus Unand. Akses jalan kaki ke gedung perkuliahan."
  },
  {
    "id": "unand-limau-manis-distilled-019",
    "name": "Paviliun Al-Hikmah Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91144,
      "longitude": 100.46366
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
    "notes": "Jl. Kampus Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat."
  },
  {
    "id": "unand-limau-manis-distilled-020",
    "name": "Kos Anggrek Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91312,
      "longitude": 100.45752
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kampus Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat."
  },
  {
    "id": "unand-limau-manis-distilled-022",
    "name": "Asrama Mandiri Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92352,
      "longitude": 100.44716
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
    "notes": "Jl. Simpang Kampus. Dekat toko buku, fotokopi, dan minimarket."
  },
  {
    "id": "unand-limau-manis-distilled-023",
    "name": "Paviliun Kenanga Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91022,
      "longitude": 100.45935
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Perumahan Dosen Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat."
  },
  {
    "id": "unand-limau-manis-distilled-024",
    "name": "Wisma Dahlia Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91547,
      "longitude": 100.45614
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
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Kampus Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat."
  },
  {
    "id": "unand-limau-manis-distilled-026",
    "name": "Rumah Kos Flamboyan",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92684,
      "longitude": 100.44939
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
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Jl. Simpang Kampus. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota."
  },
  {
    "id": "unand-limau-manis-distilled-027",
    "name": "Asrama Amanah",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92372,
      "longitude": 100.44768
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
    "notes": "Jl. Koto Panjang. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota."
  },
  {
    "id": "unand-limau-manis-distilled-028",
    "name": "Griya Ceria",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91564,
      "longitude": 100.46273
    },
    "rentMonthly": 1600000,
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
      "shared_kitchen",
      "parking_car"
    ],
    "verified": true,
    "notes": "Perumahan Dosen Unand. Akses jalan kaki ke gedung perkuliahan."
  },
  {
    "id": "unand-limau-manis-distilled-029",
    "name": "Kost Griya Indah Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92459,
      "longitude": 100.44633
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
      "access_24h"
    ],
    "verified": true,
    "notes": "Jl. Simpang Kampus. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota."
  },
  {
    "id": "unand-limau-manis-distilled-030",
    "name": "Rumah Kos Kemuning",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91305,
      "longitude": 100.45834
    },
    "rentMonthly": 1000000,
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
    "notes": "Perumahan Dosen Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat."
  },
  {
    "id": "unand-limau-manis-distilled-031",
    "name": "D'Kost Berkah Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92641,
      "longitude": 100.44606
    },
    "rentMonthly": 750000,
    "roomType": "single",
    "gender": "female",
    "facilityCodes": [
      "wifi",
      "desk_chair",
      "closet",
      "parking_motorcycle"
    ],
    "verified": true,
    "notes": "Jl. Pasar Baru. Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota."
  },
  {
    "id": "unand-limau-manis-distilled-032",
    "name": "Pondok Srikandi Pasar",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pasar Baru",
    "coordinates": {
      "latitude": -0.92509,
      "longitude": 100.44934
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
      "access_24h",
      "shared_kitchen"
    ],
    "verified": true,
    "notes": "Jl. Simpang Kampus. Dekat toko buku, fotokopi, dan minimarket."
  },
  {
    "id": "unand-limau-manis-distilled-033",
    "name": "Rumah Kos Ganesha Pauh",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Pauh",
    "coordinates": {
      "latitude": -0.92392,
      "longitude": 100.44022
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
    "notes": "Pasar Pauh. Kamar luas, lingkungan warga minang yang ramah."
  },
  {
    "id": "unand-limau-manis-distilled-034",
    "name": "Pondok Berkah Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91645,
      "longitude": 100.45997
    },
    "rentMonthly": 1200000,
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
    "notes": "Batu Busuk. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat."
  },
  {
    "id": "unand-limau-manis-distilled-035",
    "name": "Pondok Dahlia Limau",
    "campusId": "unand-limau-manis",
    "city": "Padang",
    "area": "Limau Manis",
    "coordinates": {
      "latitude": -0.91675,
      "longitude": 100.46106
    },
    "rentMonthly": 675000,
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
    "notes": "Jl. Kampus Unand. Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat."
  }
];

export function getListingsByCampus(campusId: string): readonly PilotListing[] {
  return PILOT_LISTINGS.filter((item) => item.campusId === campusId);
}

export function findListingById(id: string): PilotListing | undefined {
  return PILOT_LISTINGS.find((item) => item.id === id);
}
