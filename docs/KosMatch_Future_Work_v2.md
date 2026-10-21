# KosMatch v2 — Pivot ke Platform Pencarian Kos Berbasis Peta + ML (Tech Stack Gratis)

**Tanggal:** 21 Oktober 2026
**Status:** Rencana kerja. Semua kode di dokumen ini adalah **sketsa yang belum diuji**.
**Keputusan produk:** klaim "privasi 100% / tanpa server / tanpa scraping" **dilepas**. Fokus pada pertumbuhan dan kecerdasan produk.
**Batasan:** biaya infrastruktur Rp 0 pada tahap awal.

---

## 1. Arah Baru Produk

**Dari:** kalkulator perbandingan lokal, data diisi manual, satu pengguna per browser.
**Menjadi:** platform pencarian kos berbasis peta, dengan data lingkungan otomatis, estimasi biaya hidup nyata, dan rekomendasi pintar.

**Diferensiasi yang dipertahankan:** biaya hidup nyata (sewa + transport + makan + utilitas), bukan sekadar harga sewa. Ini yang tidak dilakukan marketplace biasa, dan sekarang bisa dihitung otomatis dari data peta.

### Fitur inti v2
1. **Pencarian peta**: cari kos di sekitar kampus/kantor, filter harga dan fasilitas.
2. **Profil lingkungan otomatis**: jumlah dan jarak tempat makan, laundry, minimarket, apotek, masjid, halte dalam radius jalan kaki.
3. **Waktu tempuh nyata** ke tujuan (kampus/kantor), bukan angka ketikan pengguna.
4. **Biaya hidup nyata otomatis**: sewa + transport dari rute + estimasi makan dari kerapatan dan kelas tempat makan sekitar + utilitas.
5. **Listing dari komunitas**: pengguna dan pemilik kos menambah/mengoreksi data, dengan status verifikasi.
6. **Indikator kewajaran harga** per area (mulai dari statistik sederhana, nanti model ML).
7. **Pencarian bahasa alami**: "kos cewek dekat kampus X, tenang, ada AC, di bawah 1,5 jt".
8. **Isi listing otomatis dari teks iklan/WhatsApp** (ekstraksi LLM, hasil berlabel `estimated` sampai dikonfirmasi).
9. **Skor kecocokan** tetap deterministik dan bisa dijelaskan; ML hanya memberi fitur dan pembobotan.

---

## 2. Tech Stack Gratis

Angka batas di bawah berasal dari sumber pihak ketiga yang dicek Oktober 2026 dan **sering berubah**. Cek ulang halaman harga resmi sebelum bergantung padanya.

| Lapisan | Pilihan | Batas gratis (ringkas) | Catatan |
|---|---|---|---|
| **Frontend** | Next.js 16 + TypeScript + Tailwind (kode yang ada) | - | Pertahankan. Update Next.js dulu (lihat Bagian 9). |
| **Peta (render)** | **MapLibre GL JS** (open-source) | Gratis | Bukan Google Maps JS. Tanpa biaya per muat peta. |
| **Tile peta** | Kandidat: OpenFreeMap, atau Protomaps (PMTiles di Cloudflare R2) | Cek kebijakan masing-masing | Jangan memakai tile server OSM resmi untuk produksi. |
| **Hosting & CDN** | **Cloudflare** (DNS, CDN, WAF) di depan server; opsi pindah ke Cloudflare Workers/Pages | Static tak terbatas; 100.000 request Worker/hari | Free tier Cloudflare mengizinkan penggunaan komersial. Vercel Hobby **hanya non-komersial**, hindari jika berencana monetisasi. |
| **Database + Auth + Storage** | **Supabase** (Postgres + **PostGIS** + **pgvector**, Auth, Storage, RLS) | 500 MB DB, 2 proyek aktif, 50.000 MAU, 1 GB file, **pause setelah 7 hari tanpa aktivitas** | Cocok karena butuh query geospasial. Pause dan batas 500 MB adalah jebakan utamanya (Bagian 7). |
| **Data tempat (POI)** | **OpenStreetMap** via ekstrak Geofabrik, dimuat dengan `osm2pgsql` | Gratis (lisensi ODbL) | Impor batch bulanan ke Postgres, **bukan** memanggil Overpass tiap permintaan pengguna. |
| **Geocoding** | Nominatim publik hanya untuk aksi pengguna, di-cache; nanti self-host Nominatim/Photon | 1 request/detik, wajib User-Agent jelas | Baca https://operations.osmfoundation.org/policies/nominatim/. Dilarang untuk geocoding massal/berkala. |
| **Routing** | **OpenRouteService** (free API), cache hasil di Postgres; nanti OSRM/Valhalla di Oracle Cloud Always Free | ±2.000 rute/hari | Cek ketersediaan profil sepeda motor, kendaraan utama pencari kos. |
| **Job terjadwal** | GitHub Actions cron + `pg_cron` | Gratis (batas menit untuk repo privat) | Untuk ETL OSM, retraining, dan ping keep-alive. |
| **Pelatihan ML** | Python (scikit-learn, LightGBM), Kaggle/Colab/GitHub Actions | Gratis | Ekspor ke **ONNX**. |
| **Inferensi ML** | `onnxruntime-web` di browser, atau Cloudflare Worker / Hugging Face Spaces | Gratis | Model tabular kecil cukup jalan di browser. |
| **Embedding & pencarian semantik** | Model multibahasa kecil via `transformers.js` atau Spaces, simpan di **pgvector** | Gratis | Dukungan bahasa Indonesia harus diuji sendiri. |
| **LLM (ekstraksi teks iklan)** | Gemini API free tier lewat **lapisan abstraksi provider** | Tidak stabil | Lihat peringatan di bawah tabel. |
| **Analitik** | Cloudflare Web Analytics atau Umami self-hosted | Gratis | Sekarang boleh memakai analitik, klaim privasi sudah dilepas. |
| **Observabilitas** | Log Supabase + Sentry free tier | Cek | Opsional di awal. |
| **Test & CI** | Vitest + Playwright (sudah ada) + GitHub Actions | Gratis | Perbaiki pipeline dulu (Bagian 9). |

**Peringatan LLM gratis:** angka batas Gemini free tier di berbagai sumber saling bertentangan (dari puluhan sampai ±1.500 request/hari) dan pernah dipangkas mendadak. Jangan jadikan jalur kritis. Rancang: antrean, cache hasil per teks, fallback ke aturan regex untuk harga/fasilitas, dan provider yang bisa ditukar. Periksa juga ketentuan penggunaan data pada free tier sebelum mengirim teks iklan/kontak pemilik.

### Mengapa bukan Google Maps Platform
Sejak Maret 2025, kuota gratis dipecah per SKU dan tidak digabung. Nearby Search Pro hanya gratis 5.000 panggilan/bulan, lalu ±US$32 per 1.000. Ketentuan Google juga hanya mengizinkan `place_id` disimpan, dan koordinat sementara maksimal 30 hari, sehingga Anda tidak bisa membangun basis data POI sendiri dari Google. OSM tidak punya pembatasan itu (cukup atribusi dan syarat ODbL). Google boleh jadi opsi tambahan nanti untuk data yang OSM tidak punya (jam buka, rating), dengan biaya terkendali.

---

## 3. Arsitektur Target

```
                 +-------------------+
 Pengguna ------>|  Cloudflare (CDN) |
                 +---------+---------+
                           |
                 +---------v----------+        +--------------------+
                 | Next.js (SSR/SSG)  |------->| Supabase           |
                 | MapLibre, ONNX web |        |  Postgres+PostGIS  |
                 +----+----------+----+        |  pgvector, Auth    |
                      |          |             |  Storage, RLS      |
         +------------v--+   +---v-----------+ +----------^---------+
         | ORS / OSRM    |   | LLM provider  |            |
         | (cache hasil) |   | (abstraksi)   |   +--------+---------+
         +---------------+   +---------------+   | GitHub Actions   |
                                                 | - ETL OSM bulanan|
                                                 | - training ML    |
                                                 | - keep-alive     |
                                                 +------------------+
```

Prinsip:
- **Batch untuk data berat** (OSM, training), **cache untuk yang mahal** (rute, LLM), **model kecil di tepi** (ONNX).
- Semua sumber eksternal di balik antarmuka (`GeoProvider`, `RoutingProvider`, `LLMProvider`) agar bisa diganti saat batas gratis berubah.

---

## 4. Model Data (sketsa)

```sql
create extension if not exists postgis;
create extension if not exists vector;

create table pois (
  id        bigserial primary key,
  osm_type  char(1) not null,
  osm_id    bigint  not null,
  category  text    not null,          -- food, laundry, minimart, pharmacy, worship, bus_stop, atm, ...
  name      text,
  tags      jsonb,
  geom      geography(Point, 4326) not null,
  unique (osm_type, osm_id)
);
create index pois_geom_gix on pois using gist (geom);
create index pois_cat_idx  on pois (category);

create table listings (
  id            uuid primary key default gen_random_uuid(),
  owner_id      uuid references auth.users(id),
  name          text not null,
  geom          geography(Point, 4326) not null,
  rent_monthly  integer check (rent_monthly between 0 and 100000000),
  utilities     jsonb,                 -- {electricity:{amount,origin}, water:{...}}
  facilities    jsonb,
  rules         jsonb,
  description   text,
  embedding     vector(384),
  status        text not null default 'pending',   -- pending | verified | rejected | stale
  last_confirmed_at timestamptz,
  created_at    timestamptz default now()
);
create index listings_geom_gix on listings using gist (geom);

-- cache rute agar kuota gratis tidak habis
create table commute_cache (
  origin_cell   text not null,         -- grid ~100 m (mis. geohash 8)
  dest_id       text not null,
  mode          text not null,
  minutes       real,
  distance_m    integer,
  fetched_at    timestamptz default now(),
  primary key (origin_cell, dest_id, mode)
);

alter table listings enable row level security;   -- tulis RLS: pemilik edit miliknya; publik baca yang 'verified'
```

Contoh profil lingkungan (jalan kaki 800 m):

```sql
select p.category, count(*) as n, min(ST_Distance(p.geom, l.geom)) as nearest_m
from listings l
join lateral (
  select * from pois p where ST_DWithin(p.geom, l.geom, 800)
) p on true
where l.id = $1
group by p.category;
```

Tipe `MoneyValue` (`confirmed / estimated / unknown`) dari v1 **dipertahankan**. Itu aset terbaik Anda untuk menandai hasil ML/LLM sebagai `estimated`.

---

## 5. Pipeline Data OSM (sketsa)

```bash
# 1. Ambil ekstrak wilayah (cek path persis di download.geofabrik.de)
wget https://download.geofabrik.de/asia/indonesia/<wilayah>-latest.osm.pbf

# 2. Potong per kota target + saring tag relevan (hemat 500 MB!)
osmium extract -b <minlon,minlat,maxlon,maxlat> <wilayah>-latest.osm.pbf -o kota.osm.pbf
osmium tags-filter kota.osm.pbf \
  nwr/amenity=restaurant,cafe,fast_food,food_court,pharmacy,atm,place_of_worship,marketplace \
  nwr/shop=laundry,convenience,supermarket \
  nwr/highway=bus_stop \
  -o poi.osm.pbf

# 3. Muat ke Postgres dengan osm2pgsql (flex output, definisikan kategori di Lua)
osm2pgsql -d $SUPABASE_DB_URL -O flex -S poi.lua poi.osm.pbf
```

Jalankan bulanan lewat GitHub Actions. Pantau ukuran tabel: **mulai dari 1–2 kota pilot, bukan seluruh Indonesia**, karena batas 500 MB.

Cek dulu seberapa banyak kos tertandai di OSM untuk kota pilot Anda (kemungkinan sedikit). Itu menentukan apakah data kos harus 100% dari komunitas.

---

## 6. Roadmap ML/DL

Prinsip: **model sederhana dulu, deep learning hanya jika datanya ada.** Data Anda tabular dan kecil; gradient boosting hampir selalu cukup.

| Tahap | Fitur | Prasyarat data | Model | Kriteria lanjut |
|---|---|---|---|---|
| **A** | Fitur geospasial: waktu tempuh, kerapatan makan/laundry/minimarket, jarak ke halte | OSM + routing | Bukan ML | Profil lingkungan tampil benar untuk 20 kos uji |
| **B** | **Estimasi biaya makan per area** | Harga makan dari input pengguna (survei kecil), kelas tempat makan dari OSM | Regresi sederhana / median per klaster | Galat wajar vs 30 data lapangan |
| **C** | **Ekstraksi listing dari teks** | Contoh teks iklan nyata (kumpulkan 200+) | LLM + aturan | Akurasi ≥ 90% untuk harga dan fasilitas utama pada set uji manual |
| **D** | **Pencarian semantik** | Deskripsi listing | Embedding + pgvector | Hasil relevan di 20 kueri uji |
| **E** | **Kewajaran harga** | ≥ ±500 listing terverifikasi per kota (heuristik, bukan aturan pasti) | Statistik (median/IQR), lalu LightGBM | MAE jelas lebih baik dari baseline median area |
| **F** | **Pembobotan personal** | Pilihan A-vs-B dari pengguna | Regresi logistik / Bradley-Terry | Pengguna menerima bobot hasil model di uji coba |
| **G** | Learning-to-rank | Klik, simpan, dan hasil sewa sungguhan | LightGBM LambdaRank | Hanya setelah ada ribuan interaksi |

**Deep learning**: tidak ada tahap yang membutuhkannya sekarang. Pertimbangkan hanya untuk embedding teks (model pra-latih, bukan dilatih dari nol) dan, jauh nanti, analisis foto, dengan hati-hati karena rawan klaim keliru.

**Aturan ML:**
- Output ML selalu berlabel `estimated` dan menampilkan alasan/fitur utamanya.
- Skor utama tetap deterministik. ML masuk sebagai fitur yang bisa dijelaskan, bukan kotak hitam.
- Simpan versi model, set data, dan metrik di repo. Evaluasi di set uji yang dipisah per kota/area, bukan acak.

---

## 7. Jebakan Gratis (harus diantisipasi)

| Risiko | Dampak | Mitigasi |
|---|---|---|
| Supabase **pause setelah 7 hari** tanpa aktivitas | Situs mati total | Cron keep-alive (GitHub Actions) + rencana pindah ke Pro (US$25/bln) begitu ada pengguna nyata |
| Supabase **500 MB** (read-only bila lewat) | Tulis gagal | Batasi kota, saring tag OSM, jangan simpan foto besar di DB, pantau ukuran mingguan |
| Gemini free tier berubah/dipangkas | Fitur ekstraksi mati | Abstraksi provider, cache, fallback regex |
| Kuota rute ORS (±2.000/hari) | Waktu tempuh gagal | Cache per grid 100 m, hitung hanya saat dibutuhkan, fallback jarak garis lurus × faktor |
| Cloudflare Worker: 100.000 req/hari dan CPU 10 ms | Error saat melonjak | Cache agresif di CDN, hitung berat di batch |
| Nominatim publik | Pemblokiran | Hanya aksi pengguna, ≤ 1 req/detik, User-Agent jelas; self-host saat tumbuh |
| Vercel Hobby non-komersial | Pelanggaran ToS jika monetisasi | Pakai Cloudflare atau server sendiri |
| Ketergantungan banyak free tier | Satu perubahan harga mematahkan alur | Antarmuka provider, anggaran darurat kecil, pantau halaman harga |

---

## 8. Roadmap Fase

### Fase 0 — Fondasi (1–2 minggu)
- Update Next.js dan dependensi produksi yang rentan; aktifkan Dependabot.
- Perbaiki CI: jalankan unit test dan e2e sebelum deploy; host key pinning; smoke test; rollback.
- Pasang Cloudflare di depan situs; header keamanan; `error.tsx`.
- Tentukan **kota/kampus pilot** dan jumlah target kos awal.
- Siapkan Supabase, aktifkan PostGIS/pgvector, tulis skema + RLS.
**Selesai bila:** CI hijau dengan test, DB dan skema berjalan, kota pilot ditetapkan.

### Fase 1 — Peta + lingkungan (3–4 minggu)
- Pipeline OSM (Bagian 5) untuk kota pilot.
- Halaman peta MapLibre, cari dan filter, profil lingkungan per titik.
- Routing dengan cache; waktu tempuh ke tujuan.
- Seed 30–50 kos dari survei sendiri dan komunitas kampus.
**Selesai bila:** pengguna bisa memilih tujuan dan melihat kos terurut dengan waktu tempuh dan profil lingkungan benar.

### Fase 2 — Akun + listing komunitas (3–4 minggu)
- Supabase Auth, form listing, unggah foto (dikompres), status verifikasi, moderasi dasar, laporan penyalahgunaan.
- Impor data v1 dari IndexedDB pengguna lama ("migrasi proyek lokal ke akun").
**Selesai bila:** ≥ 100 listing dari ≥ 20 kontributor, tingkat spam terkendali.

### Fase 3 — Skor v2 dan biaya hidup otomatis (2–3 minggu)
- Perbaiki kelemahan skor v1 (kos lebih murah harus dinilai lebih baik; data kosong menampilkan rentang skor, bukan angka tunggal).
- Biaya hidup otomatis: transport dari rute, makan dari tahap B.
- Tampilkan rincian dan alasan skor.
**Selesai bila:** uji dengan 10 pengguna nyata, mereka paham mengapa suatu kos berada di peringkat teratas.

### Fase 4 — AI (4–6 minggu)
- Ekstraksi teks iklan (tahap C), pencarian semantik (D), pembobotan personal (F).
- Evaluasi terukur pada set uji; log kegagalan.
**Selesai bila:** metrik tahap C/D tercapai pada set uji.

### Fase 5 — Pertumbuhan dan keberlanjutan (berjalan)
- SEO (halaman area/kampus, data terstruktur, sitemap), berbagi hasil lewat tautan.
- Model kewajaran harga (E) setelah data cukup.
- Pilihan monetisasi: listing unggulan yang transparan, versi pro untuk pemilik kos, kemitraan kampus. Tetap pisahkan iklan dari peringkat agar kepercayaan terjaga.
- Evaluasi migrasi ke tier berbayar saat batas gratis mulai terganggu.

---

## 9. Utang Teknis dari Audit v1 yang Masih Berlaku

Perbaiki sebelum menambah permukaan serangan (akun, upload, API):
1. Next.js 16.3.5 dan `sharp`/`source-map-js` rentan di produksi → update; gerbang `npm audit --omit=dev` di CI.
2. CI/CD mendeploy tanpa test → tambahkan test, rilis atomik, rollback.
3. Tidak ada header keamanan; `X-Powered-By` aktif → `next.config.ts` dengan CSP, HSTS, dll.
4. `calculateCost` bisa melempar `RangeError` pada total besar → batas wajar per kolom, `error.tsx`.
5. Landing kosong di HTML awal → prerender statis.
6. Mesin skor: kos murah tidak dinilai lebih baik; data kosong tetap bernilai tinggi → desain ulang di Fase 3.
7. Domain gratis bersama → beli domain sendiri sebelum promosi.

---

## 10. Kepatuhan dan Etika (tetap perlu, walau klaim privasi dilepas)

- **Data pribadi pemilik kos** (nama, nomor telepon) dan pengguna: siapkan kebijakan privasi, persetujuan, dan jalur hapus data sesuai UU PDP. Saya bukan penasihat hukum; konsultasikan sebelum skala besar.
- **Jangan scraping marketplace lain**: risiko pelanggaran ToS dan hukum, dan merusak posisi "netral".
- **OSM**: tampilkan atribusi "© OpenStreetMap contributors"; pahami syarat ODbL untuk basis data turunan.
- **Konten pengguna**: moderasi, pelaporan, dan penanganan listing palsu/penipuan, karena penipuan kos adalah risiko nyata bagi pengguna.
- **Kewajaran model**: jangan menampilkan "harga wajar" tanpa data cukup; tampilkan ketidakpastiannya.

---

## 11. Metrik Keberhasilan

| Metrik | Target awal |
|---|---|
| Listing terverifikasi di kota pilot | ≥ 100 |
| Pencarian yang berujung "simpan/hubungi" | ≥ 15% |
| Waktu muat LCP (4G) | < 2,5 dtk |
| Cache hit rute | ≥ 80% |
| Galat estimasi biaya makan (vs survei) | Ditetapkan setelah baseline |
| Uptime | ≥ 99% (perhatikan pause Supabase) |

---

## 12. Pertanyaan yang Harus Dijawab Sebelum Mulai Fase 1

1. **Kota/kampus pilot mana?** Menentukan cakupan OSM, kerapatan POI, dan sumber seed kos.
2. Siapa pengisi data awal: tim sendiri, mahasiswa relawan, atau pemilik kos?
3. Server Tencent yang ada dipertahankan atau pindah ke Cloudflare (nol biaya)?
4. Model bisnis awal: murni gratis/komunitas, atau ada rencana monetisasi (memengaruhi pilihan hosting)?

---

## Sumber (dicek Oktober 2026; verifikasi ulang)
- Supabase free tier: https://supabase.com/pricing
- Cloudflare Workers/Pages free tier: https://developers.cloudflare.com/workers/platform/limits/
- Vercel Hobby (non-komersial): https://vercel.com/docs/plans/hobby
- Gemini API rate limits: https://ai.google.dev/gemini-api/docs/rate-limits
- Google Maps Platform harga: https://developers.google.com/maps/billing-and-pricing/pricing
- Google Maps Service Specific Terms (caching): https://cloud.google.com/maps-platform/terms/maps-service-terms
- Nominatim usage policy: https://operations.osmfoundation.org/policies/nominatim/
- Geofabrik (ekstrak OSM): https://download.geofabrik.de/
- OpenRouteService: https://openrouteservice.org/
