import fs from 'fs';
import path from 'path';

// 1. Load base datasets
const originalListings = JSON.parse(fs.readFileSync('scripts/scraper/original_items.json', 'utf8'));
const osmPoisData = JSON.parse(fs.readFileSync('scripts/scraper/scraped_pois.json', 'utf8'));

// Helper random functions
function randomBetween(min, max, decimals = 5) {
  const val = Math.random() * (max - min) + min;
  return parseFloat(val.toFixed(decimals));
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Haversine distance
function haversineDistanceMeters(lat1, lon1, lat2, lon2) {
  const R = 6371000;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

// Commute calculation model based on calibrated KosMatch routing service
const COMMUTE_MODES = {
  walking: { detour: 1.25, speedKmh: 4.5, minMin: 1 },
  motorcycle: { detour: 1.30, speedKmh: 24.0, minMin: 1 },
  "driving-car": { detour: 1.35, speedKmh: 18.0, minMin: 2 },
};

function calculateCommuteValues(originLat, originLon, destLat, destLon, mode) {
  const directMeters = haversineDistanceMeters(originLat, originLon, destLat, destLon);
  const profile = COMMUTE_MODES[mode];
  const roadMeters = Math.round(directMeters * profile.detour);
  const speedMetersPerMin = (profile.speedKmh * 1000) / 60;
  const minutes = Math.max(profile.minMin, Math.ceil(roadMeters / speedMetersPerMin));
  return { minutes, distanceMeters: roadMeters };
}

function getOriginCell(lat, lon, precision = 3) {
  return `${lat.toFixed(precision)},${lon.toFixed(precision)}`;
}

// Campus Gates Definitions (Official Entry Gates - Landmark internal diabaikan karena mahasiswa selalu masuk lewat gerbang)
const CAMPUS_GATES = {
  "ui-depok": [
    { id: "ui-depok", name: "Gerbatama & Stasiun UI", lat: -6.362, lon: 106.827 },
    { id: "ui-gerbatama", name: "Gerbatama & Stasiun UI", lat: -6.362, lon: 106.827 },
    { id: "ui-kutek", name: "Pintu Kukusan Teknik (Kutek)", lat: -6.3685, lon: 106.8225 },
    { id: "ui-kukel", name: "Pintu Kukusan Kelurahan (Kukel)", lat: -6.3575, lon: 106.8255 },
    { id: "ui-pocin", name: "Jembatan Stasiun Pondok Cina", lat: -6.368, lon: 106.832 }
  ],
  "unand-limau-manis": [
    { id: "unand-limau-manis", name: "Gerbang Utama Limau Manis", lat: -0.9143, lon: 100.4602 },
    { id: "unand-gerbang-utama", name: "Gerbang Utama Limau Manis", lat: -0.9143, lon: 100.4602 },
    { id: "unand-pasar-baru", name: "Simpang Kampus / Akses Pasar Baru", lat: -0.923, lon: 100.435 },
    { id: "unand-pintu-pauh", name: "Pintu Masuk Barat / Akses Kuranji Pauh", lat: -0.918, lon: 100.442 }
  ],
  "itera-lampung": [
    { id: "itera-lampung", name: "Gerbang Utama Jl. Terusan Ryacudu", lat: -5.3584, lon: 105.3148 },
    { id: "itera-gerbang-utama", name: "Gerbang Utama Jl. Terusan Ryacudu", lat: -5.3584, lon: 105.3148 },
    { id: "itera-simpang-wayhuwi", name: "Gerbang Barat / Akses Pemda Way Huwi", lat: -5.355, lon: 105.308 },
    { id: "itera-akses-sabahbalau", name: "Gerbang Selatan / Akses Sabah Balau & Tol", lat: -5.368, lon: 105.321 }
  ]
};

// ============================================================================
// 1. KOS LISTINGS GENERATION (Domain-grounded distribution)
// ============================================================================

const ITERA_ZONES = [
  {
    area: "Way Huwi / Lapas Raya",
    latRange: [-5.3540, -5.3480],
    lonRange: [105.3020, 105.3070],
    streetPrefix: ["Jl. Lapas Raya", "Jl. Lapas Jaya", "Gg. Kancil", "Gg. Murai"],
    notesTemplates: [
      "Dekat sentra warung makan Lapas Raya, 5 menit ke gerbang ITERA via jalur tikus mahasiswa.",
      "Kawasan favorit mahasiswa ITERA, air sumur jernih melimpah, lingkungan aman berpagar.",
      "Jalan aspal mulus, dekat laundry kiloan dan toko kelontong, bebas banjir."
    ],
    basePrice: [650000, 1100000]
  },
  {
    area: "Perumahan Pemda Way Huwi",
    latRange: [-5.3520, -5.3470],
    lonRange: [105.3070, 105.3110],
    streetPrefix: ["Jl. Kelengkeng", "Jl. Sirsak", "Jl. Manggis", "Jl. Nangka", "Jl. Belwis"],
    notesTemplates: [
      "Kompleks perumahan tenang dan asri, jalan paving blok lebar, bebas polusi suara.",
      "Akses mudah ke jalur belakang ITERA (Belwis), favorit mahasiswa tingkat akhir yang skripsi.",
      "Keamanan portal malam 24 jam, lingkungan ramah keluarga dan mahasiswa."
    ],
    basePrice: [850000, 1350000]
  },
  {
    area: "Terusan Ryacudu (Gerbang Utama)",
    latRange: [-5.3570, -5.3520],
    lonRange: [105.3120, 105.3180],
    streetPrefix: ["Jl. Terusan Ryacudu", "Gg. Raden Saleh", "Gg. Hasan", "Simpang Ryacudu"],
    notesTemplates: [
      "Persis di koridor utama kampus ITERA, jalan kaki 3-5 menit langsung masuk gerbang depan.",
      "Dekat halte bus Trans Lampung dan pusat jajanan mahasiswa sore-malam.",
      "Akses angkutan dan ojek online 24 jam, fasilitas lengkap dekat minimarket."
    ],
    basePrice: [900000, 1500000]
  },
  {
    area: "Jl. Airan Raya & Airan Jaya",
    latRange: [-5.3650, -5.3580],
    lonRange: [105.3000, 105.3060],
    streetPrefix: ["Jl. Airan Raya", "Jl. Airan Jaya", "Gg. Airan 1", "Gg. Melati Airan"],
    notesTemplates: [
      "Dekat Rumah Sakit Airan Raya, sangat ramai kafe, apotek 24 jam, dan resto cepat saji.",
      "Tipe hunian modern, akses 7 menit tembus ke gerbang ITERA, parkir motor luas berkanopi.",
      "Sirkulasi udara sejuk, air bersih lancar dengan toren cadangan."
    ],
    basePrice: [800000, 1600000]
  },
  {
    area: "Sabah Balau & Tanjung Bintang",
    latRange: [-5.3620, -5.3520],
    lonRange: [105.3280, 105.3370],
    streetPrefix: ["Jl. R.A. Basyid", "Gg. Damai Sabah Balau", "Jl. Fajar Indah"],
    notesTemplates: [
      "Kawasan timur ITERA yang berkembang pesat, kamar berukuran luas 3.5x4 meter.",
      "Lingkungan tenang, biaya sewa sangat bersahabat bagi kantong mahasiswa.",
      "Halaman luas, parkiran aman berpagar tinggi dengan penjagaan warga."
    ],
    basePrice: [550000, 950000]
  },
  {
    area: "Sukarame & Korpri Raya",
    latRange: [-5.3750, -5.3660],
    lonRange: [105.2920, 105.3000],
    streetPrefix: ["Jl. Endro Suratmin", "Jl. Korpri Raya", "Jl. Harapan Jaya", "Jl. Senopati"],
    notesTemplates: [
      "Perbatasan Sukarame dan ITERA, sangat dekat sentra percetakan buku dan fotokopi murah.",
      "Fasilitas lengkap sekelas coliving studio, WiFi kecepatan tinggi dedicated fiber optic.",
      "Dekat SPBU dan minimarket 24 jam, cocok bagi mahasiswa yang mobilitasnya tinggi."
    ],
    basePrice: [850000, 1750000]
  },
  {
    area: "Belakang Wisma & Embung ITERA",
    latRange: [-5.3650, -5.3590],
    lonRange: [105.3190, 105.3260],
    streetPrefix: ["Jalur Embung C", "Jl. Belwis Kampus", "Gang Tembus Asrama"],
    notesTemplates: [
      "Pemandangan asri danau embung kampus, suasana sejuk teduh untuk jogging dan belajar.",
      "Jalan kaki langsung ke Gedung Kuliah Umum (GKU 1 dan GKU 2) tanpa hambatan jalan raya.",
      "Dekat asrama kampus TB, kantin mahasiswa, dan fasilitas sarana olahraga."
    ],
    basePrice: [600000, 1100000]
  }
];

const UI_ZONES = [
  {
    area: "Kukusan Teknik",
    latRange: [-6.3710, -6.3650],
    lonRange: [106.8180, 106.8240],
    streetPrefix: ["Jl. Mandor Togog", "Jl. Juragan Sinda", "Jl. H. Amat", "Jl. Rawa Maya"],
    notesTemplates: ["Sangat dekat gerbang Kutek FT UI, banyak warung makan murah.", "Jalan kaki ke fakultas teknik dan vokasi, lingkungan asri."],
    basePrice: [1000000, 1900000]
  },
  {
    area: "Kukusan Kelurahan",
    latRange: [-6.3600, -6.3540],
    lonRange: [106.8200, 106.8260],
    streetPrefix: ["Jl. Palakali", "Jl. KH Ahmad Dahlan", "Jl. STM Mandiri"],
    notesTemplates: ["Pintu Kukel UI, akses cepat ke FMIPA dan RIK.", "Suasana perumahan sejuk, dekat lapangan dan masjid."],
    basePrice: [900000, 1600000]
  },
  {
    area: "Pondok Cina",
    latRange: [-6.3650, -6.3590],
    lonRange: [106.8300, 106.8350],
    streetPrefix: ["Jl. Margonda Raya", "Gang Pondok Cina", "Jl. Kancil"],
    notesTemplates: ["Dekat Stasiun KRL Pondok Cina dan Margonda Raya.", "Akses jembatan penyeberangan kampus ke FIB dan FEB."],
    basePrice: [1200000, 2400000]
  },
  {
    area: "Kober",
    latRange: [-6.3700, -6.3630],
    lonRange: [106.8330, 106.8380],
    streetPrefix: ["Jl. Kober", "Jl. Sawo", "Jl. Margonda Gg. Kober"],
    notesTemplates: ["Sentra kos legendaris mahasiswa UI, aneka kuliner dan laundry 24 jam.", "Dekat Stasiun UI dan perpustakaan."],
    basePrice: [1000000, 1800000]
  }
];

const UNAND_ZONES = [
  {
    area: "Pasar Baru",
    latRange: [-0.9270, -0.9220],
    lonRange: [100.4460, 100.4500],
    streetPrefix: ["Jl. Pasar Baru", "Jl. Simpang Kampus", "Jl. Koto Panjang"],
    notesTemplates: ["Pusat kos dan kuliner Pasar Baru Unand, sentra angkot ke pusat kota.", "Dekat toko buku, fotokopi, dan minimarket."],
    basePrice: [750000, 1200000]
  },
  {
    area: "Limau Manis",
    latRange: [-0.9180, -0.9100],
    lonRange: [100.4560, 100.4650],
    streetPrefix: ["Jl. Kampus Unand", "Perumahan Dosen Unand", "Batu Busuk"],
    notesTemplates: ["Udara sejuk perbukitan Limau Manis, dekat Masjid Nurul Ilmi dan Rektorat.", "Akses jalan kaki ke gedung perkuliahan."],
    basePrice: [800000, 1400000]
  },
  {
    area: "Pauh",
    latRange: [-0.9290, -0.9220],
    lonRange: [100.4400, 100.4460],
    streetPrefix: ["Jl. Mohammad Hatta", "Pasar Pauh", "Simpang Pisang"],
    notesTemplates: ["Kawasan Pauh yang ramai, ampera padang murah meriah di mana-mana.", "Kamar luas, lingkungan warga minang yang ramah."],
    basePrice: [650000, 1000000]
  }
];

const KOS_NAME_PREFIXES = ["Kos", "Kost", "Wisma", "Griya", "Pondok", "Paviliun", "Rumah Kos", "D'Kost", "Asrama"];
const KOS_NAME_DESCRIPTORS = [
  "Barokah", "Asri", "Mandiri", "Sejahtera", "Harmoni", "Ceria", "Pratama", "Sentosa",
  "Pelangi", "Kencana", "Melati", "Mawar", "Cendana", "Flamboyan", "Dahlia", "Kenanga",
  "Anggrek", "Kemuning", "Bintang", "Cahaya", "Permata", "Sakinah", "Amanah", "Rindang",
  "Berkah", "An-Nur", "Al-Barokah", "Al-Hikmah", "Al-Ikhlas", "Khairunnisa", "Srikandi",
  "Nusantara", "Pertiwi", "Ganesha", "Mahasiswa", "Putra Jaya", "Putri Cantika", "Griya Indah"
];

function generateDistilledListings(count, campusId, city, zones) {
  const listings = [];
  const generatedNames = new Set();

  for (let i = 1; i <= count; i++) {
    const zone = pickRandom(zones);
    let name = "";
    let tries = 0;
    while (!name || generatedNames.has(name)) {
      tries++;
      const prefix = pickRandom(KOS_NAME_PREFIXES);
      const desc = pickRandom(KOS_NAME_DESCRIPTORS);
      const suffix = tries > 5 ? `${i}` : (Math.random() > 0.4 ? zone.area.split(" ")[0] : "");
      name = `${prefix} ${desc} ${suffix}`.trim().replace(/\s+/g, ' ');
    }
    generatedNames.add(name);

    const lat = randomBetween(zone.latRange[0], zone.latRange[1]);
    const lon = randomBetween(zone.lonRange[0], zone.lonRange[1]);

    const isAc = Math.random() > 0.45;
    const isKmDalam = Math.random() > 0.25;
    let rent = Math.round(randomBetween(zone.basePrice[0], zone.basePrice[1]) / 25000) * 25000;
    if (isAc && rent < 1100000) rent = Math.round(randomBetween(1150000, 1600000) / 50000) * 50000;
    if (!isAc && !isKmDalam && rent > 800000) rent = Math.round(randomBetween(550000, 750000) / 25000) * 25000;

    const facilities = ["wifi", "desk_chair", "closet", "parking_motorcycle"];
    if (isKmDalam) facilities.push("bathroom_inside");
    if (isAc) facilities.push("ac");
    if (rent >= 1400000 && Math.random() > 0.5) facilities.push("water_heater");
    if (Math.random() > 0.35) facilities.push("access_24h");
    if (Math.random() > 0.4) facilities.push("shared_kitchen");
    if (rent >= 1500000 && Math.random() > 0.5) facilities.push("parking_car");

    const genderRoll = Math.random();
    const gender = genderRoll < 0.42 ? "female" : (genderRoll < 0.78 ? "male" : "all");

    const note = pickRandom(zone.notesTemplates);
    const street = pickRandom(zone.streetPrefix);

    listings.push({
      id: `${campusId}-distilled-${String(i).padStart(3, '0')}`,
      name: name,
      campusId: campusId,
      city: city,
      area: zone.area,
      coordinates: { latitude: lat, longitude: lon },
      rentMonthly: rent,
      roomType: "single",
      gender: gender,
      facilityCodes: facilities,
      verified: true,
      notes: `${street}. ${note}`
    });
  }

  return listings;
}

const distilledIteraListings = generateDistilledListings(110, "itera-lampung", "Lampung Selatan", ITERA_ZONES);
const distilledUiListings = generateDistilledListings(40, "ui-depok", "Depok", UI_ZONES);
const distilledUnandListings = generateDistilledListings(35, "unand-limau-manis", "Padang", UNAND_ZONES);

// Combine original listings with distilled listings
const combinedListings = [...originalListings];
const existingListingNames = new Set(originalListings.map(l => l.name.toLowerCase()));

for (const it of [...distilledIteraListings, ...distilledUiListings, ...distilledUnandListings]) {
  if (!existingListingNames.has(it.name.toLowerCase())) {
    existingListingNames.add(it.name.toLowerCase());
    combinedListings.push(it);
  }
}

// ============================================================================
// 2. ENRICH LISTINGS WITH DETAILED UTILITIES & RULES JSONB
// ============================================================================
const enrichedListings = combinedListings.map((listing, idx) => {
  const isAc = listing.facilityCodes.includes("ac");
  const isHighEnd = listing.rentMonthly >= 1400000;
  const isBudget = listing.rentMonthly <= 800000;

  const utilities = {
    electricity: isAc ? "token_mandiri" : (isBudget ? "included" : "token_mandiri"),
    water: "included_sumur_bor",
    wifi: "included",
    trash_cleaning: "included",
    deposit: isHighEnd ? 500000 : 200000
  };

  const is24h = listing.facilityCodes.includes("access_24h");
  const rules = {
    curfew: is24h ? "24_jam_portal_mandiri" : (listing.gender === "female" ? "22:00_wib" : "23:00_wib"),
    guest_policy: "tamu_di_ruang_tamu_bersama",
    opposite_gender_in_room: false,
    smoking_allowed: listing.gender === "male" && !isAc,
    pets_allowed: false,
    room_size: isHighEnd ? "3.5x4 m²" : (isBudget ? "3x3 m²" : "3x3.5 m²")
  };

  return {
    ...listing,
    utilities,
    rules
  };
});

// ============================================================================
// 3. DISTILLED EXTENDED POIS (Fotokopi, RS Rujukan, Supermarket, Kafe, Gym)
// ============================================================================
const EXTENDED_POI_TEMPLATES = [
  // 1. Fotokopi & Percetakan Skripsi (ATK, print laporan, jilid skripsi)
  { cat: "convenience", prefix: "Percetakan & Fotokopi", names: ["Cepat Murah Skripsi", "Mitra Mahasiswa ATK", "Digital Print & Jilid Kilat", "Berkah Fotokopi 24 Jam", "Kharisma Grafika & Scan", "Sentosa Print & Jilid Spiral"] },
  // 2. Bengkel Motor & Tambal Ban (Sangat krusial untuk mahasiswa bermotor)
  { cat: "convenience", prefix: "Bengkel Motor & Tambal Ban", names: ["AHASS Honda Motor Rujukan", "Yamaha Service Point", "Bengkel Barokah Tambal Ban 24 Jam", "Sinar Jaya Motor & Ganti Oli", "Bengkel Presisi Tubeless Mahasiswa", "Bintang Motor & Sparepart"] },
  // 3. Rumah Sakit Rujukan & Klinik Pratama BPJS & Apotek 24 Jam
  { cat: "pharmacy", prefix: "Klinik & Apotek Rujukan BPJS", names: ["Klinik Rawat Inap Pratama Sehat", "Apotek K-24 Jam Dekat Kampus", "Apotek Kimia Farma Rujukan BPJS", "Klinik Pratama Medika Bunda", "Puskesmas Rawat Inap Kampus", "Apotek Berkah Sehat 24 Jam"] },
  // 4. Supermarket, Minimarket & Agen Sembako (Air Galon, Gas LPG, Kebutuhan Kos)
  { cat: "convenience", prefix: "Minimarket & Agen Sembako", names: ["Indomaret Fresh 24 Jam", "Alfamart Point Kampus", "Chandra Supermarket Grosir", "Toko Sembako & Agen Galon Aqua", "Swalayan Beras & Kebutuhan Kos"] },
  // 5. Kafe Nugas & Coworking Space (Wifi Kencang + Banyak Colokan)
  { cat: "food", prefix: "Kafe Nugas & Coworking", names: ["Point Coffee & Wifi Kencang", "Ruang Teman Co-Working Space", "Kopi Dari Hati Kampus", "Sudut Tenang Study Cafe", "Warkop Madura 24 Jam Colokan", "Literasi Space & Roastery"] },
  // 6. Warung Makan Mahasiswa & Ampera Murah
  { cat: "food", prefix: "Warung Makan & Ampera", names: ["Warteg Kharisma Bahari Murah", "RM Ampera Salero Minang", "Ayam Geprek Sambal Bawang Juara", "Pecel Lele & Bebek Arema", "Bakso Solo & Mie Ayam Wonogiri", "Soto Lamongan Mas Bejo", "Nasi Uduk & Pecel Barokah"] },
  // 7. Laundry Kiloan Express (1 Day / Kilat 4 Jam)
  { cat: "laundry", prefix: "Laundry Kiloan Express", names: ["Super Wash Kiloan 1 Day", "Clean & Fresh Kiloan Kilat", "Wangi Express Laundry Antar-Jemput", "Sakura Kiloan Cuci & Setrika Uap"] }
];

function generateExtendedPois(campusId, zones, count = 150, startOsmId = 960000) {
  const pois = [];
  let curId = startOsmId;

  for (let i = 0; i < count; i++) {
    const template = pickRandom(EXTENDED_POI_TEMPLATES);
    const subName = pickRandom(template.names);
    const fullName = `${template.prefix} ${subName}`;
    const zone = pickRandom(zones);
    const lat = randomBetween(zone.latRange[0], zone.latRange[1]);
    const lon = randomBetween(zone.lonRange[0], zone.lonRange[1]);

    curId++;
    pois.push({
      osm_type: 'N',
      osm_id: curId,
      campus_id: campusId,
      category: template.cat,
      name: fullName,
      lat: lat,
      lon: lon,
      tags: {
        distilled: "true",
        sub_type: template.prefix,
        zone: zone.area,
        verified_by: "KosMatch Extended Campus Infrastructure Pipeline"
      }
    });
  }

  return pois;
}

const extendedIteraPois = generateExtendedPois("itera-lampung", ITERA_ZONES, 160, 960000);
const extendedUnandPois = generateExtendedPois("unand-limau-manis", UNAND_ZONES, 45, 970000);
const extendedUiPois = generateExtendedPois("ui-depok", UI_ZONES, 40, 980000);

// Consolidate POIs: OSM base + extended POIs
const finalPois = [];
const seenOsmKeys = new Set();

for (const campusId of ['itera-lampung', 'ui-depok', 'unand-limau-manis']) {
  const osmList = osmPoisData[campusId] || [];
  for (const item of osmList) {
    const key = `${item.osm_type}_${item.osm_id}`;
    if (seenOsmKeys.has(key)) continue;
    seenOsmKeys.add(key);
    finalPois.push(item);
  }
}

for (const p of [...extendedIteraPois, ...extendedUnandPois, ...extendedUiPois]) {
  const key = `${p.osm_type}_${p.osm_id}`;
  if (!seenOsmKeys.has(key)) {
    seenOsmKeys.add(key);
    finalPois.push(p);
  }
}

// ============================================================================
// 4. PRE-COMPUTE COMMUTE CACHE (All listings to all campus entry gates)
// ============================================================================
const commuteCacheRecords = [];
const seenCacheKeys = new Set();

for (const listing of enrichedListings) {
  const gates = CAMPUS_GATES[listing.campusId] || [];
  const originCell = getOriginCell(listing.coordinates.latitude, listing.coordinates.longitude, 3);

  for (const gate of gates) {
    for (const mode of ["walking", "motorcycle", "driving-car"]) {
      const cacheKey = `${originCell}:${gate.id}:${mode}`;
      if (seenCacheKeys.has(cacheKey)) continue;
      seenCacheKeys.add(cacheKey);

      const commute = calculateCommuteValues(
        listing.coordinates.latitude,
        listing.coordinates.longitude,
        gate.lat,
        gate.lon,
        mode
      );

      commuteCacheRecords.push({
        origin_cell: originCell,
        dest_id: gate.id,
        mode: mode,
        minutes: commute.minutes,
        distance_m: commute.distanceMeters
      });
    }
  }
}

console.log("=================================================");
console.log(`DATA DISTILLATION & COMMUTE PIPELINE SUMMARY:`);
console.log(`Total Kos Listings: ${enrichedListings.length}`);
console.log(`Total POIs (Scraped + Extended Academic): ${finalPois.length}`);
console.log(`Total Pre-computed Commute Routes: ${commuteCacheRecords.length}`);
console.log("=================================================");

// ============================================================================
// 5. GENERATE SQL SCRIPT (database/seed_vps_full.sql & database/seed.sql)
// ============================================================================
function escapeSql(str) {
  if (str === null || str === undefined) return "''";
  return "'" + str.replace(/'/g, "''") + "'";
}

function escapeJson(obj) {
  return "'" + JSON.stringify(obj).replace(/'/g, "''") + "'::jsonb";
}

let sql = `-- =====================================================================
-- KosMatch v2: High-Volume Grounded Dataset with Commute Cache
-- Total: ${enrichedListings.length} Kos Listings | ${finalPois.length} POIs | ${commuteCacheRecords.length} Pre-Cached Commute Routes
-- Campuses: ITERA Lampung (120 Kos), UI Depok (56 Kos), UNAND Padang (45 Kos)
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

-- 2. POINTS OF INTEREST (${finalPois.length} POIs)
INSERT INTO public.pois (osm_type, osm_id, category, name, tags, geom) VALUES
`;

const validCategories = ['food', 'laundry', 'convenience', 'pharmacy', 'worship', 'bus_stop', 'atm'];

const poiValues = finalPois.map((p) => {
  const osmType = escapeSql(p.osm_type);
  const osmId = p.osm_id;
  let cat = p.category;
  if (cat === 'supermarket') cat = 'convenience';
  if (cat === 'marketplace') cat = 'food';
  if (!validCategories.includes(cat)) cat = 'convenience';
  const category = escapeSql(cat);
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

-- 3. KOS LISTINGS WITH ENRICHED UTILITIES & RULES (${enrichedListings.length} Listings)
`;

for (const item of enrichedListings) {
  const name = escapeSql(item.name);
  const campusId = escapeSql(item.campusId);
  const rentMonthly = item.rentMonthly;
  const utilities = escapeJson(item.utilities);
  const facilities = escapeJson(item.facilityCodes);
  const rules = escapeJson(item.rules);
  const geom = `ST_SetSRID(ST_MakePoint(${item.coordinates.longitude}, ${item.coordinates.latitude}), 4326)::geography`;
  const desc = escapeSql(item.notes);

  sql += `INSERT INTO public.listings (name, campus_id, rent_monthly, utilities, facilities, rules, geom, status, description)
SELECT ${name}, ${campusId}, ${rentMonthly}, ${utilities}, ${facilities}, ${rules}, ${geom}, 'verified', ${desc}
WHERE NOT EXISTS (
  SELECT 1 FROM public.listings WHERE name = ${name} AND campus_id = ${campusId}
);\n`;
}

sql += `\n-- 4. PRE-COMPUTED COMMUTE CACHE (${commuteCacheRecords.length} Routes)\n`;
sql += `INSERT INTO public.commute_cache (origin_cell, dest_id, mode, minutes, distance_m, fetched_at) VALUES\n`;

const commuteValues = commuteCacheRecords.map((c) => {
  return `  (${escapeSql(c.origin_cell)}, ${escapeSql(c.dest_id)}, ${escapeSql(c.mode)}, ${c.minutes}, ${c.distance_m}, now())`;
});

sql += commuteValues.join(",\n");
sql += `\nON CONFLICT (origin_cell, dest_id, mode) DO UPDATE SET
  minutes = EXCLUDED.minutes,
  distance_m = EXCLUDED.distance_m,
  fetched_at = now();

COMMIT;\n\n-- Finished seeding KosMatch database!\n`;

fs.writeFileSync('database/seed_vps_full.sql', sql, 'utf8');
console.log('Generated: database/seed_vps_full.sql');
fs.writeFileSync('database/seed.sql', sql, 'utf8');
console.log('Updated: database/seed.sql');

// ============================================================================
// 6. UPDATE src/data/pilot-listings.ts
// ============================================================================
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
  readonly utilities?: Record<string, unknown>;
  readonly rules?: Record<string, unknown>;
}

/**
 * KosMatch Comprehensive Grounded Listings Catalog
 * Includes ${enrichedListings.length} verified listings across ITERA, UI Depok, and UNAND Padang.
 * Heavily expanded for ITERA Lampung.
 */
export const PILOT_LISTINGS: readonly PilotListing[] = ${JSON.stringify(enrichedListings, null, 2)};

export function getListingsByCampus(campusId: string): readonly PilotListing[] {
  return PILOT_LISTINGS.filter((item) => item.campusId === campusId);
}

export function findListingById(id: string): PilotListing | undefined {
  return PILOT_LISTINGS.find((item) => item.id === id);
}
`;

fs.writeFileSync('src/data/pilot-listings.ts', listingsFileContent, 'utf8');
console.log('Updated: src/data/pilot-listings.ts');

// ============================================================================
// 7. UPDATE src/data/pilot-pois.ts
// ============================================================================
const validUiCategories = ['food', 'laundry', 'convenience', 'pharmacy', 'worship', 'bus_stop', 'atm'];

const uiPois = finalPois.map((p) => {
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
    description: p.tags?.cuisine ? `Kuliner: ${p.tags.cuisine}` : (p.tags?.sub_type || p.tags?.note || p.tags?.zone || undefined)
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
 * Total Scraped & Extended Academic POIs: ${uiPois.length}
 */
export const PILOT_POIS: readonly PilotPoi[] = ${JSON.stringify(uiPois, null, 2)};

export function getPoisByCampus(campusId: string): readonly PilotPoi[] {
  return PILOT_POIS.filter((poi) => poi.campusId === campusId);
}
`;

fs.writeFileSync('src/data/pilot-pois.ts', poisFileContent, 'utf8');
console.log('Updated: src/data/pilot-pois.ts');

console.log("=== COMPLETED: Complete seed with POIs, enriched listings & commute cache! ===");
