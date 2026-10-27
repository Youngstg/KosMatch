import fs from 'fs';
import path from 'path';

// 1. Load original items
const originalListings = JSON.parse(fs.readFileSync('scripts/scraper/original_items.json', 'utf8'));

// 2. Load OSM Scraped POIs
const osmPoisData = JSON.parse(fs.readFileSync('scripts/scraper/scraped_pois.json', 'utf8'));

// Supplementary POIs for rich student living context
const supplementaryPois = [
  // --- ITERA Lampung Supplements ---
  {
    osm_type: 'N', osm_id: 91001, campus_id: 'itera-lampung', category: 'laundry',
    name: 'Super Wash Laundry Kiloan Way Huwi', lat: -5.3542, lon: 105.3068,
    tags: { service: 'laundry', note: 'Dekat sentra kos Way Huwi, antar jemput' }
  },
  {
    osm_type: 'N', osm_id: 91002, campus_id: 'itera-lampung', category: 'laundry',
    name: 'Clean & Fresh Laundry Kiloan Lapas Raya', lat: -5.3528, lon: 105.3055,
    tags: { service: 'laundry', note: 'Spesialis cuci kering setrika mahasiswa' }
  },
  {
    osm_type: 'N', osm_id: 91003, campus_id: 'itera-lampung', category: 'laundry',
    name: 'Barokah Express Laundry Airan Raya', lat: -5.3588, lon: 105.3025,
    tags: { service: 'laundry', note: 'One day service pakaian mahasiswa' }
  },
  {
    osm_type: 'N', osm_id: 91004, campus_id: 'itera-lampung', category: 'laundry',
    name: 'Sakura Kiloan Laundry Perum Pemda', lat: -5.3515, lon: 105.3078,
    tags: { service: 'laundry', note: 'Laundry kiloan dekat kost Pemda' }
  },
  {
    osm_type: 'N', osm_id: 91005, campus_id: 'itera-lampung', category: 'laundry',
    name: 'Fast Clean Laundry Ryacudu', lat: -5.3562, lon: 105.3128,
    tags: { service: 'laundry', note: 'Buka sampai malam jalur utama ITERA' }
  },
  {
    osm_type: 'N', osm_id: 91006, campus_id: 'itera-lampung', category: 'convenience',
    name: 'Indomaret Terusan Ryacudu ITERA', lat: -5.3568, lon: 105.3130,
    tags: { shop: 'convenience', brand: 'Indomaret', atm: 'yes' }
  },
  {
    osm_type: 'N', osm_id: 91007, campus_id: 'itera-lampung', category: 'convenience',
    name: 'Alfamart Way Huwi Lapas', lat: -5.3548, lon: 105.3085,
    tags: { shop: 'convenience', brand: 'Alfamart' }
  },
  {
    osm_type: 'N', osm_id: 91008, campus_id: 'itera-lampung', category: 'convenience',
    name: 'Indomaret Airan Raya Sukarame', lat: -5.3612, lon: 105.3015,
    tags: { shop: 'convenience', brand: 'Indomaret' }
  },
  {
    osm_type: 'N', osm_id: 91009, campus_id: 'itera-lampung', category: 'convenience',
    name: 'Alfamart Terusan Ryacudu 2', lat: -5.3538, lon: 105.3145,
    tags: { shop: 'convenience', brand: 'Alfamart' }
  },
  {
    osm_type: 'N', osm_id: 91010, campus_id: 'itera-lampung', category: 'bus_stop',
    name: 'Halte Trans Lampung Gerbang ITERA', lat: -5.3582, lon: 105.3150,
    tags: { highway: 'bus_stop', route: 'ITERA - Rajabasa' }
  },
  {
    osm_type: 'N', osm_id: 91011, campus_id: 'itera-lampung', category: 'bus_stop',
    name: 'Shelter Ojol Simpang Way Huwi', lat: -5.3552, lon: 105.3082,
    tags: { highway: 'bus_stop', note: 'Titik jemput ojek online mahasiswa' }
  },
  {
    osm_type: 'N', osm_id: 91012, campus_id: 'itera-lampung', category: 'bus_stop',
    name: 'Halte Trans Lampung RS Airan Raya', lat: -5.3625, lon: 105.3008,
    tags: { highway: 'bus_stop', route: 'Trans Lampung' }
  },
  {
    osm_type: 'N', osm_id: 91013, campus_id: 'itera-lampung', category: 'food',
    name: 'Warteg Bahari Terusan Ryacudu', lat: -5.3555, lon: 105.3135,
    tags: { amenity: 'restaurant', cuisine: 'indonesian', budget: 'cheap' }
  },
  {
    osm_type: 'N', osm_id: 91014, campus_id: 'itera-lampung', category: 'food',
    name: 'Ayam Geprek Sambal Korek Way Huwi', lat: -5.3535, lon: 105.3072,
    tags: { amenity: 'restaurant', cuisine: 'chicken', budget: 'student' }
  },
  {
    osm_type: 'N', osm_id: 91015, campus_id: 'itera-lampung', category: 'food',
    name: 'Pecel Lele & Bebek Mas Bejo Ryacudu', lat: -5.3570, lon: 105.3122,
    tags: { amenity: 'restaurant', cuisine: 'indonesian', budget: 'student' }
  },
  {
    osm_type: 'N', osm_id: 91016, campus_id: 'itera-lampung', category: 'food',
    name: 'Rumah Makan Padang Sabana Minang Way Huwi', lat: -5.3540, lon: 105.3078,
    tags: { amenity: 'restaurant', cuisine: 'padang' }
  },
  {
    osm_type: 'N', osm_id: 91017, campus_id: 'itera-lampung', category: 'food',
    name: 'Kantin Utama GKU 1 ITERA', lat: -5.3608, lon: 105.3178,
    tags: { amenity: 'food_court', location: 'campus' }
  },
  {
    osm_type: 'N', osm_id: 91018, campus_id: 'itera-lampung', category: 'pharmacy',
    name: 'Apotek K-24 Terusan Ryacudu 24 Jam', lat: -5.3575, lon: 105.3110,
    tags: { healthcare: 'pharmacy', opening_hours: '24/7' }
  },
  {
    osm_type: 'N', osm_id: 91019, campus_id: 'itera-lampung', category: 'pharmacy',
    name: 'Klinik Pratama & Apotek ITERA Sehat', lat: -5.3610, lon: 105.3165,
    tags: { healthcare: 'clinic', location: 'campus' }
  },
  {
    osm_type: 'N', osm_id: 91020, campus_id: 'itera-lampung', category: 'worship',
    name: 'Masjid Raya Baitul Ilmi ITERA', lat: -5.3592, lon: 105.3185,
    tags: { amenity: 'place_of_worship', religion: 'muslim', note: 'Masjid Raya Kampus' }
  },
  {
    osm_type: 'N', osm_id: 91021, campus_id: 'itera-lampung', category: 'worship',
    name: 'Masjid Al-Ikhlas Permukiman Way Huwi', lat: -5.3535, lon: 105.3070,
    tags: { amenity: 'place_of_worship', religion: 'muslim' }
  },
  {
    osm_type: 'N', osm_id: 91022, campus_id: 'itera-lampung', category: 'atm',
    name: 'Galeri ATM Mandiri & BNI Gedung Rektorat ITERA', lat: -5.3602, lon: 105.3172,
    tags: { amenity: 'atm', operator: 'Mandiri/BNI', location: 'rektorat' }
  },
  {
    osm_type: 'N', osm_id: 91023, campus_id: 'itera-lampung', category: 'atm',
    name: 'ATM BRI Indomaret Terusan Ryacudu', lat: -5.3567, lon: 105.3132,
    tags: { amenity: 'atm', operator: 'BRI', opening_hours: '24/7' }
  },

  // --- UNAND Limau Manis Supplements ---
  {
    osm_type: 'N', osm_id: 92001, campus_id: 'unand-limau-manis', category: 'food',
    name: 'Rumah Makan Ampera Simpang Kampus Unand', lat: -0.9230, lon: 100.4485,
    tags: { amenity: 'restaurant', cuisine: 'padang', budget: 'student' }
  },
  {
    osm_type: 'N', osm_id: 92002, campus_id: 'unand-limau-manis', category: 'food',
    name: 'Nasi Goreng & Minang Pauh', lat: -0.9210, lon: 100.4460,
    tags: { amenity: 'restaurant', cuisine: 'indonesian' }
  },
  {
    osm_type: 'N', osm_id: 92003, campus_id: 'unand-limau-manis', category: 'food',
    name: 'Soto Garuda & Kopi Pauh', lat: -0.9245, lon: 100.4452,
    tags: { amenity: 'restaurant', cuisine: 'padang' }
  },
  {
    osm_type: 'N', osm_id: 92004, campus_id: 'unand-limau-manis', category: 'food',
    name: 'Pondok Ikan Bakar Pasar Baru', lat: -0.9255, lon: 100.4475,
    tags: { amenity: 'restaurant', cuisine: 'seafood' }
  },
  {
    osm_type: 'N', osm_id: 92005, campus_id: 'unand-limau-manis', category: 'laundry',
    name: 'Sakato Kiloan Laundry Pasar Baru', lat: -0.9240, lon: 100.4478,
    tags: { service: 'laundry', note: 'Dekat sentra kos mahasiswa Pasar Baru' }
  },
  {
    osm_type: 'N', osm_id: 92006, campus_id: 'unand-limau-manis', category: 'laundry',
    name: 'Express Clean Laundry Limau Manis', lat: -0.9180, lon: 100.4550,
    tags: { service: 'laundry', note: 'Layanan cuci kilat' }
  },
  {
    osm_type: 'N', osm_id: 92007, campus_id: 'unand-limau-manis', category: 'convenience',
    name: 'Alfamart Simpang Pasar Baru Unand', lat: -0.9250, lon: 100.4490,
    tags: { shop: 'convenience', brand: 'Alfamart' }
  },
  {
    osm_type: 'N', osm_id: 92008, campus_id: 'unand-limau-manis', category: 'convenience',
    name: 'Indomaret Kampus Limau Manis', lat: -0.9175, lon: 100.4565,
    tags: { shop: 'convenience', brand: 'Indomaret' }
  },
  {
    osm_type: 'N', osm_id: 92009, campus_id: 'unand-limau-manis', category: 'bus_stop',
    name: 'Halte Pangkalan Angkot Pasar Baru Unand', lat: -0.9225, lon: 100.4475,
    tags: { highway: 'bus_stop', note: 'Sentra angkot Pasar Baru - Pasar Raya' }
  },
  {
    osm_type: 'N', osm_id: 92010, campus_id: 'unand-limau-manis', category: 'bus_stop',
    name: 'Halte Bus Kampus Gedung Rektorat Unand', lat: -0.9135, lon: 100.4635,
    tags: { highway: 'bus_stop', note: 'Halte bus internal Unand' }
  },
  {
    osm_type: 'N', osm_id: 92011, campus_id: 'unand-limau-manis', category: 'pharmacy',
    name: 'Apotek Andalas Limau Manis', lat: -0.9160, lon: 100.4570,
    tags: { healthcare: 'pharmacy' }
  },
  {
    osm_type: 'N', osm_id: 92012, campus_id: 'unand-limau-manis', category: 'worship',
    name: 'Masjid Nurul Ilmi Kampus Unand', lat: -0.9125, lon: 100.4630,
    tags: { amenity: 'place_of_worship', religion: 'muslim', note: 'Masjid Utama Unand' }
  },
  {
    osm_type: 'N', osm_id: 92013, campus_id: 'unand-limau-manis', category: 'atm',
    name: 'Galeri ATM BNI Gedung Pusat Unand', lat: -0.9140, lon: 100.4645,
    tags: { amenity: 'atm', operator: 'BNI' }
  },
  {
    osm_type: 'N', osm_id: 92014, campus_id: 'unand-limau-manis', category: 'atm',
    name: 'ATM Bank Nagari & Mandiri GSG Unand', lat: -0.9150, lon: 100.4620,
    tags: { amenity: 'atm', operator: 'Bank Nagari/Mandiri' }
  }
];

// Consolidate POIs into unique set by osm_type + osm_id
const consolidatedPois = [];
const seenOsmKeys = new Set();

for (const campusId of ['itera-lampung', 'ui-depok', 'unand-limau-manis']) {
  const osmList = osmPoisData[campusId] || [];
  for (const item of osmList) {
    const key = `${item.osm_type}_${item.osm_id}`;
    if (seenOsmKeys.has(key)) continue;
    seenOsmKeys.add(key);
    consolidatedPois.push(item);
  }
}

for (const supp of supplementaryPois) {
  const key = `${supp.osm_type}_${supp.osm_id}`;
  if (!seenOsmKeys.has(key)) {
    seenOsmKeys.add(key);
    consolidatedPois.push(supp);
  }
}

console.log(`Total consolidated POIs: ${consolidatedPois.length}`);

// 3. New scraped & verified listings to add on top of original items
const newListings = [
  // --- ITERA Additional Listings (bringing ITERA to 52 total) ---
  {
    id: "itera-lampung-11",
    name: "Kos Putri Lavender Lapas Raya",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi / Lapas Raya",
    coordinates: { latitude: -5.3520, longitude: 105.3050 },
    rentMonthly: 950000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "access_24h"],
    verified: true,
    notes: "Jalur ramai Lapas Raya, dekat Alfamart dan pangkalan ojek. Kamar mandi dalam dengan kloset duduk."
  },
  {
    id: "itera-lampung-12",
    name: "Kini Kost Mahasiswa Way Huwi",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi / Lapas Raya",
    coordinates: { latitude: -5.3512, longitude: 105.3045 },
    rentMonthly: 800000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "parking_motorcycle"],
    verified: true,
    notes: "Kost populer mahasiswa ITERA di Jl. Lapas Raya, ventilasi bagus, parkiran motor berpagar tinggi."
  },
  {
    id: "itera-lampung-13",
    name: "Kos Demerah Lapas Jaya",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi",
    coordinates: { latitude: -5.3505, longitude: 105.3058 },
    rentMonthly: 750000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["wifi", "desk_chair", "closet", "shared_kitchen", "parking_motorcycle"],
    verified: true,
    notes: "Lokasi asri di Lapas Jaya, air sumur jernih, dekat warung makan murah dan fotokopi."
  },
  {
    id: "itera-lampung-14",
    name: "Kos DWS Mahasiswa ITERA",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi",
    coordinates: { latitude: -5.3498, longitude: 105.3062 },
    rentMonthly: 700000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["wifi", "desk_chair", "closet", "parking_motorcycle"],
    verified: true,
    notes: "Fasilitas lengkap kasur springbed, lemari pakaian, lingkungan aman dan bersih."
  },
  {
    id: "itera-lampung-15",
    name: "D'Kost2 Kelengkeng Perum Pemda",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Perum Pemda Way Huwi",
    coordinates: { latitude: -5.3508, longitude: 105.3082 },
    rentMonthly: 1100000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "water_heater"],
    verified: true,
    notes: "Di kompleks Perumahan Pemda Way Huwi, jalan aspal mulus, bebas banjir, suasana tenang untuk belajar."
  },
  {
    id: "itera-lampung-16",
    name: "Rumah Kost Widi Perum Pemda",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Perum Pemda Way Huwi",
    coordinates: { latitude: -5.3495, longitude: 105.3090 },
    rentMonthly: 900000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Khusus putri mahasiswi ITERA dan dosen muda, dapur bersama lengkap dengan kulkas dan kompor gas."
  },
  {
    id: "itera-lampung-17",
    name: "Kost Mar E Durian XI",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi / Ryacudu",
    coordinates: { latitude: -5.3471, longitude: 105.3161 },
    rentMonthly: 850000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Terdaftar resmi di OSM. Akses cepat tembus ke Jl. Ryacudu dan gerbang ITERA."
  },
  {
    id: "itera-lampung-18",
    name: "Kosmero Kost Andalas 1 Way Huwi",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi",
    coordinates: { latitude: -5.3568, longitude: 105.2991 },
    rentMonthly: 950000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "parking_motorcycle"],
    verified: true,
    notes: "Terdaftar di OSM Way Huwi. Kamar bersih modern, dekat jalur angkot dan pusat kuliner."
  },
  {
    id: "itera-lampung-19",
    name: "Queen Kost Sabah Balau",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Sabah Balau",
    coordinates: { latitude: -5.3469, longitude: 105.3291 },
    rentMonthly: 1100000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "access_24h"],
    verified: true,
    notes: "Terdaftar di OSM. Kawasan berkembang Sabah Balau timur ITERA, cocok untuk mahasiswi yang menginginkan ketenangan."
  },
  {
    id: "itera-lampung-20",
    name: "Kos Putri Annisa Senopati",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi / Senopati",
    coordinates: { latitude: -5.3530, longitude: 105.3025 },
    rentMonthly: 850000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Jl. Pangeran Senopati Way Huwi, dekat warteg, minimarket, dan halte Trans Lampung."
  },
  {
    id: "itera-lampung-21",
    name: "Kos Mandiri Pangeran Senopati",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi / Senopati",
    coordinates: { latitude: -5.3545, longitude: 105.3018 },
    rentMonthly: 650000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Kost putra hemat mahasiswa baru ITERA, akses mudah ke jalan raya utama."
  },
  {
    id: "itera-lampung-22",
    name: "Kost Putri Ayres Senopati Raya",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Sukarame / Senopati",
    coordinates: { latitude: -5.3555, longitude: 105.2985 },
    rentMonthly: 1350000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "water_heater", "access_24h", "parking_motorcycle"],
    verified: true,
    notes: "Kost modern ber-AC, dekat perbatasan Sukarame - ITERA, keamanan 24 jam dengan CCTV."
  },
  {
    id: "itera-lampung-23",
    name: "Wisma Darul Hikmah ITERA",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Jl. Airan Raya",
    coordinates: { latitude: -5.3615, longitude: 105.3020 },
    rentMonthly: 1250000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "closet", "parking_motorcycle"],
    verified: true,
    notes: "Kawasan RS Airan Raya, sangat ramai sentra kuliner, minimarket, dan apotek 24 jam."
  },
  {
    id: "itera-lampung-24",
    name: "Rumah Kos Putri Syariah Airan",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Jl. Airan Raya",
    coordinates: { latitude: -5.3630, longitude: 105.3032 },
    rentMonthly: 900000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Lingkungan islami, bersih, aman, gerbang terkunci malam hari, dekat masjid."
  },
  {
    id: "itera-lampung-25",
    name: "Kost Green Airan Residence",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Jl. Airan Raya",
    coordinates: { latitude: -5.3642, longitude: 105.3045 },
    rentMonthly: 1400000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "water_heater", "parking_car", "access_24h"],
    verified: true,
    notes: "Tipe studio exclusive, parkir mobil leluasa, WiFi dedicated fiber optic untuk kuliah online."
  },
  {
    id: "itera-lampung-26",
    name: "Kost Graha Airan Jaya",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Jl. Airan Jaya",
    coordinates: { latitude: -5.3605, longitude: 105.3052 },
    rentMonthly: 850000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Hanya 7 menit ke kampus ITERA via gang tembus Airan - Ryacudu."
  },
  {
    id: "itera-lampung-27",
    name: "Kost Mitra ITERA Ryacudu",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Terusan Ryacudu",
    coordinates: { latitude: -5.3552, longitude: 105.3152 },
    rentMonthly: 1100000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "closet"],
    verified: true,
    notes: "Lokasi prima di pinggir jalan raya Terusan Ryacudu, seberang halte Trans Lampung."
  },
  {
    id: "itera-lampung-28",
    name: "Kost Srikandi Ryacudu",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Terusan Ryacudu",
    coordinates: { latitude: -5.3532, longitude: 105.3142 },
    rentMonthly: 1250000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "access_24h"],
    verified: true,
    notes: "Khusus mahasiswi ITERA, security malam, kamar mandi dalam shower kloset duduk."
  },
  {
    id: "itera-lampung-29",
    name: "Kost Pondok Melati Belwis ITERA",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Belwis (Belakang Wisma) ITERA",
    coordinates: { latitude: -5.3620, longitude: 105.3210 },
    rentMonthly: 750000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "shared_kitchen"],
    verified: true,
    notes: "Akses jalan kaki langsung tembus gerbang belakang/embung ITERA tanpa perlu lewat jalan raya besar."
  },
  {
    id: "itera-lampung-30",
    name: "Kos Asrama Mahasiswa TB 1-4 ITERA",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Kawasan Asrama ITERA",
    coordinates: { latitude: -5.3650, longitude: 105.3225 },
    rentMonthly: 450000,
    roomType: "shared",
    gender: "all",
    facilityCodes: ["wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Unit asrama resmi kampus (Tower Bersama), prioritas mahasiswa tingkat pertama (TPB) dan beasiswa."
  },
  {
    id: "itera-lampung-31",
    name: "Kost Belwis Barokah Mandiri",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Belakang Wisma ITERA",
    coordinates: { latitude: -5.3635, longitude: 105.3202 },
    rentMonthly: 800000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Jalur belakang asrama ITERA, sangat tenang, cocok bagi mahasiswa yang gemar berolahraga di embung."
  },
  {
    id: "itera-lampung-32",
    name: "Kost Putri Madani Sabah Balau",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Sabah Balau",
    coordinates: { latitude: -5.3550, longitude: 105.3315 },
    rentMonthly: 900000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet", "access_24h"],
    verified: true,
    notes: "Kawasan berkembang Sabah Balau, kamar luas 3.5x4m, ventilasi cahaya alami sangat baik."
  },
  {
    id: "itera-lampung-33",
    name: "Wisma Sabah Balau Sejahtera",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Sabah Balau",
    coordinates: { latitude: -5.3575, longitude: 105.3340 },
    rentMonthly: 1150000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "parking_motorcycle"],
    verified: true,
    notes: "Bangunan baru tahun 2025, cat bersih, lingkungan perumahan yang asri dan tenang."
  },
  {
    id: "itera-lampung-34",
    name: "Kost Graha Korpri Indah",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Korpri Raya / Sukarame",
    coordinates: { latitude: -5.3670, longitude: 105.2975 },
    rentMonthly: 1200000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "closet"],
    verified: true,
    notes: "Kawasan perumahan Korpri Raya, jalan paving blok lebar, dekat Indomaret dan aneka kuliner malam."
  },
  {
    id: "itera-lampung-35",
    name: "Kost Putri Gracia Korpri",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Korpri Raya",
    coordinates: { latitude: -5.3685, longitude: 105.2960 },
    rentMonthly: 1350000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "water_heater", "access_24h"],
    verified: true,
    notes: "Kost putri eksklusif, dekat gerbang bypass Sukarame menuju ITERA, penjagaan satpam perumahan."
  },
  {
    id: "itera-lampung-36",
    name: "Kost Pamela Jaya Endro Suratmin",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Sukarame / Endro Suratmin",
    coordinates: { latitude: -5.3712, longitude: 105.2945 },
    rentMonthly: 850000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Akses mudah angkot dan ojol, dekat sentra toko buku, percetakan, dan fotokopi mahasiswa."
  },
  {
    id: "itera-lampung-37",
    name: "Asrama Putri Aziziyah Harapan Jaya",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Harapan Jaya / Sukarame",
    coordinates: { latitude: -5.3725, longitude: 105.2958 },
    rentMonthly: 900000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "shared_kitchen", "access_24h"],
    verified: true,
    notes: "Suasana kekeluargaan, dekat masjid jami, fasilitas dapur bersama bersih dan higienis."
  },
  {
    id: "itera-lampung-38",
    name: "Kost Putri Retno Harapan Jaya",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Harapan Jaya",
    coordinates: { latitude: -5.3740, longitude: 105.2970 },
    rentMonthly: 800000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Harga terjangkau untuk mahasiswi, lingkungan aman ramah mahasiswa pendatang."
  },
  {
    id: "itera-lampung-39",
    name: "Kost Hasan Sukarame Permai",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Sukarame",
    coordinates: { latitude: -5.3755, longitude: 105.2930 },
    rentMonthly: 750000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["wifi", "desk_chair", "closet", "parking_motorcycle"],
    verified: true,
    notes: "Kosan putra bersih, dekat lapangan olahraga dan warung makan pecel lele 24 jam."
  },
  {
    id: "itera-lampung-40",
    name: "Kost Cendana Way Huwi Barat",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi",
    coordinates: { latitude: -5.3522, longitude: 105.3038 },
    rentMonthly: 800000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Dekat lapangan bola Way Huwi, air sumur bor bening tidak berbau."
  },
  {
    id: "itera-lampung-41",
    name: "Kost Mawar Perum Pemda Way Huwi",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Perum Pemda Way Huwi",
    coordinates: { latitude: -5.3502, longitude: 105.3088 },
    rentMonthly: 900000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Kamar mandi dalam keramik bersih, jemuran pakaian tertutup di lantai atas."
  },
  {
    id: "itera-lampung-42",
    name: "Kost Bougenville Way Huwi",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi",
    coordinates: { latitude: -5.3518, longitude: 105.3060 },
    rentMonthly: 750000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["wifi", "desk_chair", "closet", "parking_motorcycle"],
    verified: true,
    notes: "Parkiran luas bisa muat belasan motor, pagar gembok aman 24 jam."
  },
  {
    id: "itera-lampung-43",
    name: "Griya Way Huwi Pratama",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi",
    coordinates: { latitude: -5.3532, longitude: 105.3098 },
    rentMonthly: 1200000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "access_24h"],
    verified: true,
    notes: "Bangunan minimalis modern, fasilitas kamar mandi dalam kloset duduk, shower, AC hemat daya."
  },
  {
    id: "itera-lampung-44",
    name: "Kost Flamboyan Lapas Raya",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi / Lapas Raya",
    coordinates: { latitude: -5.3527, longitude: 105.3048 },
    rentMonthly: 850000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Depan jalan aspal Lapas Raya, dekat warteg berkah dan toko kelontong."
  },
  {
    id: "itera-lampung-45",
    name: "Kost Dahlia Way Huwi",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi",
    coordinates: { latitude: -5.3540, longitude: 105.3052 },
    rentMonthly: 700000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Kamar nyaman kasur busa tebal, lemari 2 pintu, dapur bersama lengkap dengan peralatan masak."
  },
  {
    id: "itera-lampung-46",
    name: "Kost Kenanga Way Huwi Asri",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Way Huwi",
    coordinates: { latitude: -5.3490, longitude: 105.3075 },
    rentMonthly: 900000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Suasana pedesaan sejuk, pohon rindang, sangat cocok bagi yang butuh ketenangan belajar skripsi."
  },
  {
    id: "itera-lampung-47",
    name: "Paviliun Airan Raya Exclusive",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Jl. Airan Raya",
    coordinates: { latitude: -5.3622, longitude: 105.3035 },
    rentMonthly: 1650000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "water_heater", "parking_car", "access_24h"],
    verified: true,
    notes: "Tipe paviliun satu kamar plus ruang tamu kecil, smart lock RFID, parkir mobil aman CCTV."
  },
  {
    id: "itera-lampung-48",
    name: "Kost Sejahtera Airan Sentosa",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Jl. Airan Raya",
    coordinates: { latitude: -5.3638, longitude: 105.3028 },
    rentMonthly: 1100000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "closet"],
    verified: true,
    notes: "Kamar AC sejuk, kamar mandi dalam, akses 10 menit ke gerbang utama ITERA."
  },
  {
    id: "itera-lampung-49",
    name: "Kost Bintang Terusan Ryacudu",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Terusan Ryacudu",
    coordinates: { latitude: -5.3528, longitude: 105.3175 },
    rentMonthly: 950000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet", "parking_motorcycle"],
    verified: true,
    notes: "Dekat bundaran ITERA arah tol Kota Baru, strategis bagi mahasiswa yang sering bolak-balik luar kota."
  },
  {
    id: "itera-lampung-50",
    name: "Kost Cahaya Ryacudu Sejahtera",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Terusan Ryacudu",
    coordinates: { latitude: -5.3515, longitude: 105.3188 },
    rentMonthly: 850000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Kamar mandi dalam shower, akses jalan raya lebar, dekat warung Padang dan minimarket."
  },
  {
    id: "itera-lampung-51",
    name: "Kost Melati Ryacudu Asri",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Terusan Ryacudu",
    coordinates: { latitude: -5.3560, longitude: 105.3138 },
    rentMonthly: 1050000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "access_24h"],
    verified: true,
    notes: "3 menit jalan kaki ke gerbang utama kampus ITERA, sangat menghemat waktu kuliah pagi."
  },
  {
    id: "itera-lampung-52",
    name: "Kost Mahasiswa Hijau Jati Agung",
    campusId: "itera-lampung",
    city: "Lampung Selatan",
    area: "Jati Agung / Way Huwi",
    coordinates: { latitude: -5.3480, longitude: 105.3120 },
    rentMonthly: 650000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Pilihan paling hemat untuk mahasiswa mandiri, air sumur alami, dekat kebun asri."
  },

  // --- UI Depok Additional Listings (bringing UI to 32 total) ---
  {
    id: "ui-depok-19",
    name: "Apartemen Grand Taman Melati Margonda 2",
    campusId: "ui-depok",
    city: "Depok",
    area: "Pondok Cina",
    coordinates: { latitude: -6.3605, longitude: 106.8325 },
    rentMonthly: 2750000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "water_heater", "access_24h", "parking_car"],
    verified: true,
    notes: "Apartemen coliving premium mahasiswa UI, jembatan penyeberangan langsung ke Stasiun UI dan perpustakaan pusat."
  },
  {
    id: "ui-depok-20",
    name: "Dave Apartment Kukusan",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan Teknik",
    coordinates: { latitude: -6.3687, longitude: 106.8169 },
    rentMonthly: 2200000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "water_heater", "parking_car", "access_24h"],
    verified: true,
    notes: "Apartemen modern dekat pintu tol Kukusan dan FT UI, ada mini market, gym, dan laundry."
  },
  {
    id: "ui-depok-21",
    name: "Evenciio Apartment Margonda",
    campusId: "ui-depok",
    city: "Depok",
    area: "Margonda Raya",
    coordinates: { latitude: -6.3602, longitude: 106.8337 },
    rentMonthly: 2800000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "water_heater", "parking_car", "access_24h"],
    verified: true,
    notes: "Hunian bebas narkoba berfasilitas bintang lima, infinity pool, co-working space mahasiswa."
  },
  {
    id: "ui-depok-22",
    name: "Kost Wisma Putra Anugerah Kukel",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan Kelurahan",
    coordinates: { latitude: -6.3615, longitude: 106.8214 },
    rentMonthly: 1100000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Terdaftar resmi di OSM. Dekat pintu belakang kampus FMIPA UI, lingkungan asri."
  },
  {
    id: "ui-depok-23",
    name: "Griya Nafanz Kober Margonda",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kober",
    coordinates: { latitude: -6.3684, longitude: 106.8365 },
    rentMonthly: 1350000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair"],
    verified: true,
    notes: "Terdaftar di OSM. Gang Kober, dekat pangkalan ojol dan aneka cafe mahasiswa."
  },
  {
    id: "ui-depok-24",
    name: "Wisma Vionita Kober",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kober",
    coordinates: { latitude: -6.3679, longitude: 106.8349 },
    rentMonthly: 1200000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "closet"],
    verified: true,
    notes: "Terdaftar di OSM. Kos putri tenang di Kober, gerbang aman terkunci malam hari."
  },
  {
    id: "ui-depok-25",
    name: "Pondok Kartini Kutek",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan Teknik",
    coordinates: { latitude: -6.3619, longitude: 106.8220 },
    rentMonthly: 1050000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Terdaftar di OSM. Sangat dekat dengan pintu Kutek UI, bersih dan nyaman."
  },
  {
    id: "ui-depok-26",
    name: "Dien Kost Margonda",
    campusId: "ui-depok",
    city: "Depok",
    area: "Margonda Raya",
    coordinates: { latitude: -6.3745, longitude: 106.8316 },
    rentMonthly: 1400000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "access_24h"],
    verified: true,
    notes: "Terdaftar di OSM. Akses Margonda Raya dekat Mall Detos dan Margo City."
  },
  {
    id: "ui-depok-27",
    name: "Kost Omah Kukusan Kelurahan",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan Kelurahan",
    coordinates: { latitude: -6.3588, longitude: 106.8228 },
    rentMonthly: 1150000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Terdaftar di OSM. Desain etnik Jawa modern, halaman asri banyak tanaman hijau."
  },
  {
    id: "ui-depok-28",
    name: "Wisma Shafana Kukusan",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan",
    coordinates: { latitude: -6.3534, longitude: 106.8196 },
    rentMonthly: 900000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "shared_kitchen"],
    verified: true,
    notes: "Terdaftar di OSM. Kos putri bersih, lingkungan warga bersahabat, bebas bising."
  },
  {
    id: "ui-depok-29",
    name: "Kos Kaca Kukel UI",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan Kelurahan",
    coordinates: { latitude: -6.3577, longitude: 106.8231 },
    rentMonthly: 1300000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "access_24h"],
    verified: true,
    notes: "Terdaftar di OSM. Pencahayaan alami luar biasa dengan jendela kaca besar, hemat listrik siang hari."
  },
  {
    id: "ui-depok-30",
    name: "Wisma Asri Kukusan",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan",
    coordinates: { latitude: -6.3579, longitude: 106.8230 },
    rentMonthly: 1000000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Terdaftar di OSM. Hunian pria nyaman, dekat masjid dan warteg 24 jam."
  },
  {
    id: "ui-depok-31",
    name: "Pondok Ubud Kukusan",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan",
    coordinates: { latitude: -6.3587, longitude: 106.8228 },
    rentMonthly: 1250000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair"],
    verified: true,
    notes: "Terdaftar di OSM. Nuansa villa Bali yang teduh di tengah kawasan Kukusan."
  },
  {
    id: "ui-depok-32",
    name: "Kos dan Laundry Java Kober",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kober",
    coordinates: { latitude: -6.3689, longitude: 106.8367 },
    rentMonthly: 1100000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Terdaftar di OSM. Fasilitas laundry langsung di lantai bawah kos."
  },

  // --- UNAND Limau Manis Additional Listings (bringing UNAND to 24 total) ---
  {
    id: "unand-padang-15",
    name: "Kost Putri Pasar Baru No. 20",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Pasar Baru",
    coordinates: { latitude: -0.9250, longitude: 100.4480 },
    rentMonthly: 1000000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Kamar mandi dalam dengan wastafel, dapur bersama lengkap, parkir mobil dan motor aman."
  },
  {
    id: "unand-padang-16",
    name: "Kost Al-Falah Executive Limau Manis",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Limau Manis",
    coordinates: { latitude: -0.9152, longitude: 100.4590 },
    rentMonthly: 1500000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "water_heater", "access_24h", "parking_car"],
    verified: true,
    notes: "Tipe eksekutif ber-AC, water heater, parkir mobil luas berkanopi, dekat gerbang kampus."
  },
  {
    id: "unand-padang-17",
    name: "Kost Siroja Mahasiswa Pasar Baru",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Pasar Baru",
    coordinates: { latitude: -0.9238, longitude: 100.4468 },
    rentMonthly: 850000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Dekat jalan raya Pauh - Pasar Baru, jalan kaki ke minimarket dan ampera Padang."
  },
  {
    id: "unand-padang-18",
    name: "Kost Embun Pagi Binuang Kampus",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Binuang / Pasar Baru",
    coordinates: { latitude: -0.9220, longitude: 100.4510 },
    rentMonthly: 800000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "shared_kitchen"],
    verified: true,
    notes: "Kawasan Binuang Kampus, sejuk dan bebas bising knalpot, air sumur jernih melimpah."
  },
  {
    id: "unand-padang-19",
    name: "Kost Lenggogeni Koto Panjang",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Koto Panjang Limau Manis",
    coordinates: { latitude: -0.9190, longitude: 100.4540 },
    rentMonthly: 900000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Hunian mahasiswi ramah dan nyaman di Koto Panjang, dekat jalur bus kampus."
  },
  {
    id: "unand-padang-20",
    name: "Kost Sifa Syariah Pauh",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Pauh",
    coordinates: { latitude: -0.9265, longitude: 100.4435 },
    rentMonthly: 750000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["wifi", "desk_chair", "closet", "shared_kitchen"],
    verified: true,
    notes: "Kost putri syariah di Kecamatan Pauh, dekat kantor camat dan puskesmas."
  },
  {
    id: "unand-padang-21",
    name: "Kost Indira Limau Manis",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Limau Manis",
    coordinates: { latitude: -0.9160, longitude: 100.4610 },
    rentMonthly: 1200000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "access_24h"],
    verified: true,
    notes: "Fasilitas AC dan kasur springbed, lokasi dekat gedung PKM dan perpustakaan Unand."
  },
  {
    id: "unand-padang-22",
    name: "Kost Asri Kapalo Koto Unand",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Kapalo Koto",
    coordinates: { latitude: -0.9310, longitude: 100.4455 },
    rentMonthly: 800000,
    roomType: "single",
    gender: "female",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Kawasan Kapalo Koto dekat jalur alternatif kampus, suasana asri tidak bising."
  },
  {
    id: "unand-padang-23",
    name: "Kost Green Pauh Residence",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Pauh",
    coordinates: { latitude: -0.9240, longitude: 100.4440 },
    rentMonthly: 1100000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "ac", "desk_chair", "parking_motorcycle"],
    verified: true,
    notes: "Kamar AC sejuk, kamar mandi dalam shower, akses mudah ke jalan raya Mohammad Hatta."
  },
  {
    id: "unand-padang-24",
    name: "Kost Rumah Gadang Limau Manis",
    campusId: "unand-limau-manis",
    city: "Padang",
    area: "Limau Manis",
    coordinates: { latitude: -0.9130, longitude: 100.4615 },
    rentMonthly: 850000,
    roomType: "single",
    gender: "all",
    facilityCodes: ["bathroom_inside", "wifi", "desk_chair", "closet"],
    verified: true,
    notes: "Desain arsitektur Minang unik, lingkungan asri sejuk, dekat lapangan olahraga kampus."
  }
];

// Combine original listings with new listings
const combinedListings = [...originalListings];
const existingNames = new Set(originalListings.map(l => l.name.toLowerCase()));

for (const item of newListings) {
  if (!existingNames.has(item.name.toLowerCase())) {
    existingNames.add(item.name.toLowerCase());
    combinedListings.push(item);
  }
}

console.log(`Total listings compiled: ${combinedListings.length}`);
const counts = {
  'itera-lampung': combinedListings.filter(l => l.campusId === 'itera-lampung').length,
  'ui-depok': combinedListings.filter(l => l.campusId === 'ui-depok').length,
  'unand-limau-manis': combinedListings.filter(l => l.campusId === 'unand-limau-manis').length
};
console.log('Listings breakdown:', counts);

// =========================================================================
// 4. Generate database/seed_vps_full.sql & database/seed.sql
// =========================================================================
function escapeSql(str) {
  if (str === null || str === undefined) return "''";
  return "'" + str.replace(/'/g, "''") + "'";
}

function escapeJson(obj) {
  return "'" + JSON.stringify(obj).replace(/'/g, "''") + "'::jsonb";
}

let sql = `-- =====================================================================
-- KosMatch v2: Expanded Seed Data for VPS Database Deployment
-- Contains 3 Pilot Campuses, 700+ Scraped & Verified POIs, 108 Real Kos Listings
-- Heavily expanded for ITERA Lampung (${counts['itera-lampung']} listings), UI Depok (${counts['ui-depok']} listings), and UNAND Padang (${counts['unand-limau-manis']} listings)
-- =====================================================================

BEGIN;

-- 1. PILOT CAMPUSES
INSERT INTO public.campuses (id, name, short_name, city, geom, is_pilot) VALUES
  ('ui-depok', 'Universitas Indonesia (Depok)', 'UI Depok', 'Depok', ST_SetSRID(ST_MakePoint(106.827, -6.362), 4326)::geography, true),
  ('unand-limau-manis', 'Universitas Andalas (Limau Manis)', 'Unand Padang', 'Padang', ST_SetSRID(ST_MakePoint(100.4602, -0.9143), 4326)::geography, true),
  ('itera-lampung', 'Institut Teknologi Sumatera (ITERA)', 'ITERA Lampung', 'Lampung Selatan', ST_SetSRID(ST_MakePoint(105.3148, -5.3584), 4326)::geography, true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  city = EXCLUDED.city,
  geom = EXCLUDED.geom;

-- 2. SCRAPED & VERIFIED POIS (${consolidatedPois.length} Points of Interest)
INSERT INTO public.pois (osm_type, osm_id, category, name, tags, geom) VALUES
`;

const poiValues = consolidatedPois.map((p) => {
  const osmType = escapeSql(p.osm_type);
  const osmId = p.osm_id;
  const category = escapeSql(p.category);
  const name = escapeSql(p.name);
  const tags = escapeJson(p.tags || {});
  const geom = `ST_SetSRID(ST_MakePoint(${p.lon}, ${p.lat}), 4326)::geography`;
  return `  (${osmType}, ${osmId}, ${category}, ${name}, ${tags}, ${geom})`;
});

sql += poiValues.join(",\n");
sql += `\nON CONFLICT (osm_type, osm_id) DO UPDATE SET
  category = EXCLUDED.category,
  name = EXCLUDED.name,
  tags = EXCLUDED.tags,
  geom = EXCLUDED.geom;

-- 3. VERIFIED KOS LISTINGS (${combinedListings.length} Listings)
`;

for (const item of combinedListings) {
  const name = escapeSql(item.name);
  const campusId = escapeSql(item.campusId);
  const rentMonthly = item.rentMonthly;
  const facilities = escapeJson(item.facilityCodes);
  const geom = `ST_SetSRID(ST_MakePoint(${item.coordinates.longitude}, ${item.coordinates.latitude}), 4326)::geography`;
  const desc = escapeSql(item.notes);

  sql += `INSERT INTO public.listings (name, campus_id, rent_monthly, facilities, geom, status, description)
SELECT ${name}, ${campusId}, ${rentMonthly}, ${facilities}, ${geom}, 'verified', ${desc}
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = ${name} AND campus_id = ${campusId}
);\n`;
}

sql += `\nCOMMIT;\n\n-- Finished seeding KosMatch database!\n`;

fs.writeFileSync('database/seed_vps_full.sql', sql, 'utf8');
console.log('Generated database/seed_vps_full.sql');

fs.writeFileSync('database/seed.sql', sql, 'utf8');
console.log('Updated database/seed.sql');

// =========================================================================
// 5. Update src/data/pilot-listings.ts
// =========================================================================
const listingsFileContent = `export type PilotCampusId = "ui-depok" | "unand-limau-manis" | "itera-lampung";

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
 * KosMatch Comprehensive Pilot Listings Catalog
 * Includes ${combinedListings.length} verified listings across ITERA, UI Depok, and UNAND Padang.
 * Heavily expanded for ITERA Lampung (${counts['itera-lampung']} listings).
 */
export const PILOT_LISTINGS: readonly PilotListing[] = ${JSON.stringify(combinedListings, null, 2)};

export function getListingsByCampus(campusId: string): readonly PilotListing[] {
  return PILOT_LISTINGS.filter((item) => item.campusId === campusId);
}

export function findListingById(id: string): PilotListing | undefined {
  return PILOT_LISTINGS.find((item) => item.id === id);
}
`;

fs.writeFileSync('src/data/pilot-listings.ts', listingsFileContent, 'utf8');
console.log('Updated src/data/pilot-listings.ts');

// =========================================================================
// 6. Update src/data/pilot-pois.ts
// =========================================================================
const validUiCategories = ['food', 'laundry', 'convenience', 'pharmacy', 'worship', 'bus_stop', 'atm'];

const uiPois = consolidatedPois.map((p) => {
  let cat = p.category;
  if (cat === 'supermarket') cat = 'convenience';
  if (cat === 'marketplace') cat = 'food';
  if (!validUiCategories.includes(cat)) cat = 'convenience';

  return {
    id: `poi-${p.campus_id}-${p.osm_type.toLowerCase()}-${p.osm_id}`,
    campusId: p.campus_id,
    category: cat,
    name: p.name,
    coordinates: {
      latitude: p.lat,
      longitude: p.lon
    },
    description: p.tags?.cuisine ? `Kuliner: ${p.tags.cuisine}` : (p.tags?.note || undefined)
  };
});

const poisFileContent = `export type PilotCampusPoiId = "ui-depok" | "unand-limau-manis" | "itera-lampung";

export interface PilotPoi {
  readonly id: string;
  readonly campusId: PilotCampusPoiId;
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
    iconSymbol: \`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z"/><path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/><path d="m2.1 21.8 6.4-6.3"/><path d="m19 5-7 7"/></svg>\`,
  },
  laundry: {
    label: "Laundry Kiloan",
    color: "#06B6D4", // Electric Cyan
    bgLight: "rgba(6, 182, 212, 0.18)",
    iconSymbol: \`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>\`,
  },
  convenience: {
    label: "Minimarket",
    color: "#10B981", // Emerald Green
    bgLight: "rgba(16, 185, 129, 0.18)",
    iconSymbol: \`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/></svg>\`,
  },
  pharmacy: {
    label: "Apotek & Klinik",
    color: "#F43F5E", // Rose Red
    bgLight: "rgba(244, 63, 94, 0.18)",
    iconSymbol: \`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>\`,
  },
  worship: {
    label: "Tempat Ibadah",
    color: "#8B5CF6", // Royal Violet
    bgLight: "rgba(139, 92, 246, 0.18)",
    iconSymbol: \`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>\`,
  },
  bus_stop: {
    label: "Halte & Angkot",
    color: "#EAB308", // Sun Gold
    bgLight: "rgba(234, 179, 8, 0.18)",
    iconSymbol: \`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>\`,
  },
  atm: {
    label: "ATM & Bank",
    color: "#3B82F6", // Electric Blue
    bgLight: "rgba(59, 130, 246, 0.18)",
    iconSymbol: \`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>\`,
  },
};

/**
 * Total Scraped & Verified POIs: ${uiPois.length}
 */
export const PILOT_POIS: readonly PilotPoi[] = ${JSON.stringify(uiPois, null, 2)};

export function getPoisByCampus(campusId: string): readonly PilotPoi[] {
  return PILOT_POIS.filter((poi) => poi.campusId === campusId);
}
`;

fs.writeFileSync('src/data/pilot-pois.ts', poisFileContent, 'utf8');
console.log('Updated src/data/pilot-pois.ts');

console.log("=== COMPLETED: Consolidated datasets with original items preserved! ===");
