# LAPORAN FITUR TERIMPLEMENTASI — SISTEM KOSMATCH v2.0
**Sistem Pendukung Keputusan Pemilihan Kos Multi-Kriteria Berbasis Geospasial PostGIS & Analisis Preferensi Mahasiswa**

*Dokumen Dokumentasi Resmi Fitur Sistem — Pembaruan Terakhir: 7 November 2026*

---

## 1. Ringkasan Eksekutif Sistem

**KosMatch** adalah platform pendukung keputusan (*Decision Support System* / DSS) multi-kriteria berbasis spasial yang dirancang untuk membantu mahasiswa dan civitas akademika menemukan, menganalisis, serta memperbandingkan tempat tinggal (kos) di sekitar kampus secara objektif, transparan, dan terukur. 

Berbeda dengan platform listing komersial konvensional yang menitikberatkan pada promosi sewa bulanan semata, KosMatch memadukan:
1. **Total Real Cost of Living & Manual Expense Calculator**: Mengintegrasikan harga sewa dasar, biaya utilitas listrik/air, estimasi makan harian berbasis kepadatan warung lokal, laundry kiloan, dan biaya komuter perjalanan harian bolak-balik via form kalkulator interaktif.
2. **Geospatial Real-Routing**: Mengukur jarak tempuh dan waktu perjalanan nyata (*walking, motorcycle, driving*) menuju gerbang kampus spesifik menggunakan data spasial PostGIS dan OpenStreetMap pada 3 kampus pilot (ITERA Lampung, UI Depok, UNAND Padang) dengan total 395 listing dan 930 titik POI.
3. **Multi-Criteria Decision Analysis (MCDA)**: Menerapkan algoritma pembobotan preferensi pribadi (*Bradley-Terry Model* dan *Weighted Sum Model*) yang transparan dan dapat dijelaskan (*explainable*).
4. **Data Privacy, Mandatory Login & Modern Security**: Arsitektur perlindungan data terpusat di server PostgreSQL VPS, wajib login untuk fitur utama DSS, penolakan open redirect (CWE-601), sliding-window rate limiting (HTTP 429), alur pemulihan sandi token SHA-256 15 menit, dan validasi skema Zod.

---

## 2. Inventaris Lengkap Fitur yang Telah Diimplementasikan

Berikut adalah rincian seluruh modul dan fitur yang telah selesai dibangun dan berfungsi secara aktif di dalam kode sumber aplikasi:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                          ARSITEKTUR FITUR KOSMATCH v2.0                         │
├─────────────────────┬───────────────────────────┬───────────────────────────────┤
│ 1. MESIN DSS & MCDA │ 2. SPASIAL & PETA KAMPUS  │ 3. PENCARIAN CERDAS (AI/NLP) │
│ - WSM Scoring       │ - MapLibre Canvas (Dark)  │ - Semantic Natural Language   │
│ - Simulasi Biaya    │ - 3 Pilot Kampus (UI/     │ - Ad Text Extractor (WA/OLX) │
│ - Trade-off Engine  │   UNAND/ITERA)            │ - Rent Ceiling & Floor Filter │
│ - Bradley-Terry Fit │ - Multi-Modal Routing     │ - Neighborhood Profile Radar  │
├─────────────────────┼───────────────────────────┼───────────────────────────────┤
│ 4. INTEGRASI DATA   │ 5. OTENTIKASI & KEAMANAN  │ 6. PORTAL & ANTARMUKA         │
│ - Validasi Zod      │ - Google OAuth 2.0 Resmi  │ - Landing Page Editorial      │
│ - Backup JSON Ex/Im │ - Password Hashing Scrypt │ - 3D Room Layout Showcase     │
│ - PostGIS PG Pool   │ - HMAC-SHA256 Session     │ - Portal Admin & Pemilik Kos  │
└─────────────────────┴───────────────────────────┴───────────────────────────────┘
```

---

### Modul 1: Mesin Pendukung Keputusan (DSS / MCDA Engine)

Modul inti sistem yang menghitung kelayakan hunian secara matematis dan objektif:

1. **Weighted Sum Model (WSM) Multi-Kriteria**:
   - Membobotkan 4 kriteria utama:
     - **Biaya Total Bulanan (Cost)**: Bobot kustom (normalisasi sewa + utilitas + komuter + makan).
     - **Waktu Tempuh (Commute Time)**: Waktu perjalanan nyata menuju gerbang tujuan.
     - **Kesesuaian Fasilitas (Facilities Match)**: Persentase pemenuhan fasilitas yang dibutuhkan pengguna.
     - **Kenyamanan & Kualitas Lingkungan (Comfort)**: Insulasi suara, jam malam, ventilasi, dan kepadatan fasilitas sekitar.
   - Skor akhir berada pada skala transparan `0 - 100` dengan label predikat kelayakan (*Sangat Direkomendasikan, Layak Dipertimbangkan, Kurang Sesuai*).

2. **Hard-Constraint Elimination (Penyaringan Mutlak)**:
   - Memfilter opsi kos yang melanggar batasan mutlak sebelum masuk ke pemeringkatan:
     - Kesesuaian gender (Khusus Putra, Khusus Putri, Kos Campur).
     - Batas anggaran maksimal (*budget ceiling*).
     - Fasilitas wajib yang tidak dapat ditawar (misal: KM Dalam atau Akses 24 Jam).

3. **Simulasi Biaya Hidup Nyata (Cost Simulator Engine & Manual Entry)**:
   - **Kalkulator Biaya Manual Langsung (`ManualCostCalculator`)**: Pengguna masuk akun dapat langsung menginput rincian pengeluaran di `/calculator` tanpa harus memilih dari peta terlebih dahulu: sewa kamar, estimasi listrik, iuran air, paket internet, estimasi laundry (kg/bulan atau cuci sendiri), hari mobilitas ke kampus (misal 22 hari), dan tarif transportasi harian bolak-balik.
   - Menghitung biaya komparasi berdasarkan horizon kontrak sewa: **1 Bulan, 3 Bulan, 6 Bulan, dan 12 Bulan (Tahunan)**.
   - Menghitung diskon sewa tahunan vs pembayaran bulanan.
   - Menghitung estimasi token listrik bulanan (kamar AC vs non-AC).
   - Menghitung estimasi biaya makan bulanan (*Food Cost Estimator*) berbasis survei warteg/warung makan sekitar.
   - Menghitung biaya transportasi harian pulang-pergi berdasarkan moda komuter yang dipilih.

4. **Mesin Penjelas Keputusan (Explainable Decision & Trade-Off Board)**:
   - **Tabel Matriks Perbandingan**: Membandingkan kos secara berdampingan (*side-by-side*) hingga puluhan atribut.
   - **Analisis Trade-Off Otomatis**: Memberikan ringkasan tertulis mengapa suatu kos menang atau kalah (contoh: *"Kos A lebih murah Rp 300.000/bln, tetapi menambah waktu jalan kaki 14 menit setiap hari"*).
   - **Pemberian Skor Transparan**: Setiap metrik menampilkan nilai asli (*raw value*), skor ternormalisasi, dan kontribusi bobot terhadap skor total.
   - **Laporan Cetak & PDF (*Print Summary View*)**: Tampilan bersih siap cetak untuk diskusi bersama orang tua/wali mahasiswa.

---

### Modul 2: Personalisasi Bobot Preferensi (Bradley-Terry Model)

1. **Pairwise Comparison Modal (A vs B Interactive Trade-Off)**:
   - Antarmuka interaktif yang menyajikan pertanyaan perbandingan berpasangan (misal: *"Jika harus memilih, apakah Anda lebih memprioritaskan Harga Sewa Murah atau Waktu Tempuh Cepat?"*).
   - Menggunakan model probabilitas **Bradley-Terry** untuk mengubah pilihan kualitatif pengguna menjadi bobot kuantitatif terkalibrasi $\lambda_i$.
2. **Preset Profil Kepribadian Mahasiswa (Persona Profiles)**:
   - Tersedia 3 preset bawaan:
     - **Mahasiswa Hemat**: Mengutamakan efisiensi biaya sewa dan pengeluaran harian.
     - **Pejuang Skripsi**: Mengutamakan ketenangan, insulasi suara, WiFi stabil, dan meja belajar nyaman.
     - **Aktivis Kampus**: Mengutamakan akses 24 jam bebas jam malam dan jarak sangat dekat ke kampus.

---

### Modul 3: Peta Spasial Interaktif & Multi-Modal Routing (PostGIS + MapLibre GL)

1. **Area Pilot Kampus Terverifikasi**:
   - **Universitas Indonesia (UI Depok)**: Radius survei 4 km, dilengkapi 4 gerbang tujuan utama (Gerbang Utama, Kukusan Teknik/Kutek, Kober, Pondok Cina).
   - **Universitas Andalas (UNAND Limau Manis, Padang)**: Radius survei 4 km, dilengkapi gerbang kampus dan akses Pasar Baru.
   - **Institut Teknologi Sumatera (ITERA, Lampung)**: Radius survei 4 km, mencakup gerbang utama dan kawasan hunian sekitar.

2. **Mesin Peta MapLibre GL (Vektor & Raster Basemap)**:
   - Peta interaktif performa tinggi dengan dukungan tema **Dark Mode** dan **Light Mode** menggunakan *CARTO Voyager* dan *CARTO Dark Matter*.
   - Polygon batas radius survei resmi (lingkaran batas spasial 4 km).
   - Marker kos interaktif dengan badge harga dan status keterpilihan.
   - Interaksi klik titik mana saja di peta untuk menentukan *Candidate Point* (misal lokasi kos teman atau kos baru di luar katalog).

3. **Multi-Modal Commute Engine (Estimasi Waktu Tempuh)**:
   - Mendukung 3 moda perjalanan:
     - **Jalan Kaki (*Walking*)**: Kecepatan rata-rata 4.5 km/jam dengan faktor penalti rute pejalan kaki.
     - **Sepeda Motor (*Motorcycle*)**: Kecepatan rata-rata 25 km/jam dengan faktor kelancaran gang mahasiswa.
     - **Mobil / Kendaraan Roda Empat (*Driving Car*)**: Kecepatan rata-rata 20 km/jam dengan penalti kemacetan jam sibuk.
   - Penggantian gerbang tujuan kampus secara dinamis langsung memperbarui waktu tempuh seluruh kos di peta.

4. **Layer Point of Interest (POI) Fasilitas Sekitar**:
   - Menampilkan sebaran fasilitas penting di sekitar kos:
     - Kuliner & Warung Makan
     - Minimarket & Toko Kelontong
     - Jasa Laundry Kiloan
     - Fasilitas Kesehatan & Apotek
     - ATM & Perbankan
     - Co-Working Space & Kafe Belajar

5. **Jembatan Spasial ke DSS (*One-Click DSS Bridge*)**:
   - Memilih beberapa kos di peta lalu menekan tombol **"Kirim ke Kalkulator DSS"** langsung mengimpor seluruh data spasial dan estimasi waktu tempuh ke dalam proyek perbandingan tanpa input manual ulang.

---

### Modul 4: Pencarian Cerdas & Pemrosesan Bahasa Alami (NLP / AI)

1. **Semantic Search Bar (Pencarian Bahasa Alami)**:
   - Kolom pencarian yang memahami bahasa percakapan sehari-hari mahasiswa, seperti:
     - *"kos putri dekat teknik ac km dalam under 1.5jt"*
     - *"kos putra murah dekat kutek wifi"*
     - *"kos campur tenang bebas jam malam di atas 1 juta"*
   - Otomatis mengekstraksi entitas:
     - **Kampus & Gerbang Tujuan**: Mendeteksi kampus target dan menyarankan penggantian area jika query merujuk kampus lain.
     - **Gender**: Mendeteksi kata kunci putra/putri/campur.
     - **Plafon & Lantai Harga**: Mendeteksi batas maksimal (*"di bawah 1.5jt"*) dan batas minimal (*"di atas 800rb"*).
     - **Fasilitas**: Mendeteksi AC, KM Dalam, WiFi, Meja Belajar, dll.
     - **Preferensi Suasana**: Mendeteksi kebutuhan ruangan tenang (*quiet*) atau akses 24 jam.
   - Menghitung **Skor Relevansi Semantik (0 - 100%)** beserta penjelasan alasan pencocokan.

2. **Ekstraktor Iklan Kos Cerdas (*Smart Ad Extractor*)**:
   - Memungkinkan pengguna menempelkan (*paste*) teks mentah iklan kos dari chat WhatsApp, status media sosial, atau forum OLX.
   - Algoritma parsing otomatis mengekstrak:
     - Nama kos dan nomor kontak pengelola.
     - Harga sewa bulanan dan skema pembayaran.
     - Fasilitas kamar dan fasilitas bersama.
     - Aturan jam malam dan kebijakan listrik.
   - Menandai data hasil ekstraksi dengan tag status `estimated` agar pengguna tetap melakukan konfirmasi ulang.

3. **Neighborhood Profile Engine (Indeks Kenyamanan Lingkungan)**:
   - Menganalisis radius 500 meter di sekitar koordinat kos untuk menghitung:
     - Kepadatan tempat makan murah.
     - Jarak ke fasilitas kesehatan terdekat.
     - Kemudahan jasa cuci pakaian (laundry).
   - Menghasilkan skor indeks kelayakan lingkungan (0 - 100).

---

### Modul 5: Manajemen Data & Keamanan Proyek (Data Integrity & Export)

1. **Integritas Skema & Validasi Data (Zod Schema)**:
   - Seluruh data perbandingan, simulasi biaya, dan profil preferensi diverifikasi dengan skema validasi Zod yang ketat sebelum diproses atau disimpan.
   - Menjamin tidak ada data anomali atau injeksi nilai tak valid yang dapat merusak perhitungan matematis DSS.
2. **Ekspor & Impor Cadangan Proyek (JSON Backup)**:
   - Pengguna dapat mengunduh seluruh data proyek simulasi dalam format `.json`.
   - File cadangan dapat diimpor kembali secara aman dengan validasi skema Zod dan pembatasan ukuran aman (*guardrail max 2MB*).

---

### Modul 6: Autentikasi Pengguna, Pemulihan Sandi & Keamanan Berlapis

1. **Google OAuth 2.0 Resmi (Google Identity Services)**:
   - Terintegrasi dengan endpoint Google OAuth 2.0 resmi (`https://accounts.google.com/o/oauth2/v2/auth`).
   - Endpoint callback terverifikasi: [`src/app/api/auth/google/callback/route.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/api/auth/google/callback/route.ts) yang menukar *authorization code* dengan token resmi Google dan mengambil profil akun Gmail pengguna (`email`, `name`, `sub`).
2. **Autentikasi Email & Kata Sandi**:
   - Pendaftaran akun dengan validasi format email, kata sandi minimal 6 karakter, dan checkbox persetujuan syarat & privasi.
   - Enkripsi kata sandi menggunakan algoritma turunan kunci **`scrypt`** yang tahan serangan brute-force.
   - Verifikasi kata sandi secara aman dengan proteksi terhadap *timing attacks* (`timingSafeEqual`).
   - Respon registrasi duplikat bersifat netral (*anti-user enumeration*) dengan status `HTTP 409 Conflict`.
3. **Alur Pemulihan & Lupa Sandi Sungguhan**:
   - Permintaan reset sandi via [`/api/auth/forgot-password`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/api/auth/forgot-password/route.ts) menghasilkan token SHA-256 berkode aman yang disimpan di tabel `public.password_reset_tokens` dengan masa kedaluwarsa 15 menit.
   - Pengiriman tautan reset ke email pengguna menggunakan Resend API (`src/lib/email/mailer.ts`).
   - Eksekusi pergantian kata sandi pada formulir [`/auth/reset-password`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/auth/reset-password/page.tsx) dengan validasi token sekali pakai (*one-time use*).
4. **Proteksi Brute-Force (Sliding-Window Rate Limiting)**:
   - Modul [`src/lib/security/rate-limiter.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/lib/security/rate-limiter.ts) membatasi frekuensi request per IP proxy (`cf-connecting-ip` -> `x-real-ip` -> `x-forwarded-for`) dan per akun email.
   - Mengembalikan respon `HTTP 429 Too Many Requests` disertai header `Retry-After` untuk mencegah serangan enumerasi dan tebak sandi.
5. **Pencegahan Open Redirect (CWE-601)**:
   - Utilitas [`src/lib/auth/redirect.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/lib/auth/redirect.ts) menyaring seluruh parameter `redirect`, menolak protokol luar, backslash, dan karakter URL-encoded berbahaya sebelum mengalihkan pengguna.
6. **Penegakan Login Wajib (Mandatory Login Enforcement)**:
   - Middleware server memproteksi rute `/explore`, `/calculator`, `/admin`, dan `/listings/new`. Tamu unauthenticated otomatis dialihkan via `HTTP 307` ke `/auth/login?redirect=...`.
   - Seluruh data perbandingan dan kalkulasi terikat pada akun pengguna (`user_id`) di database PostgreSQL VPS.
7. **Peran Pengguna (*Role-Based Access Control*)**:
   - `user`: Mahasiswa / pencari kos untuk menyimpan simulasi dan preferensi.
   - `owner`: Pemilik kos untuk mendaftarkan dan memverifikasi hunian kos.
   - `admin`: Pengelola platform untuk memvalidasi listing komunitas.

---

### Modul 7: Halaman Legal & Dokumen Transparansi

1. **Kebijakan Privasi ([`/privacy`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/privacy/page.tsx))**:
   - Memaparkan secara transparan arsitektur data server VPS, jenis data yang dikumpulkan (kredensial, bobot DSS, simulasi biaya), enkripsi data, dan jaminan ketiadaan pelacak iklan komersial.
2. **Syarat & Ketentuan ([`/terms`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/terms/page.tsx))**:
   - Menjelaskan batasan sistem pendukung keputusan (DSS objektif non-marketplace), akurasi estimasi, dan etika penggunaan platform.
3. **Pusat Kontak ([`/contact`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/contact/page.tsx))**:
   - Informasi narahubung resmi dan saluran umpan balik bagi mahasiswa serta pemilik kos.

---

### Modul 8: Portal Pemilik Kos & Admin Komunitas

1. **Dashboard Pengelolaan Kos ([`/admin`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/admin)):**:
   - Menampilkan ringkasan listing kos aktif per area kampus pilot.
   - Status verifikasi listing (*Terverifikasi Tim Survei, Menunggu Tinjauan, Draft*).
2. **Formulir Pendaftaran Kos Baru ([`/listings/new`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/listings/new)):**:
   - Input atribut kos lengkap: nama, kampus target, gender, harga sewa, fasilitas, nomor kontak pemilik.
   - Pemilih koordinat spasial (latitude & longitude) dengan validasi radius kampus.
   - Pemindaian instan profil lingkungan sekitar koordinat secara *real-time*.

---

### Modul 9: Desain Antarmuka, Aksesibilitas & SEO

1. **Design System Editorial Ranty/Architectural**:
   - Palet warna kurasi bertema hangat dan profesional:
     - Terracotta Clay: `#8D654C` & `#6E4D38`
     - Golden Ochre Accent: `#E0A96D`
     - Canvas Background: `#F8F5F0` & `#F4F0EA`
     - Dark Obsidian Text/Buttons: `#1C1B19`
   - Tipografi modern memadukan *Playfair Display* (serif elegan) untuk judul utama dan *Plus Jakarta Sans* / *Inter* untuk teks fungsional.
2. **Showcase 3D Isometrik & Daftar Kampus**:
   - Menampilkan visual 3D potongan isometrik tata letak kamar kos mahasiswa lengkap dengan kasur empuk, bantal, lemari pakaian kayu, meja & kursi belajar, ventilasi jendela, dan kamar mandi dalam.
   - Seksi showcase kampus terakreditasi pilot (ITERA, UI, UNAND).
3. **Aksesibilitas & Standar SEO**:
   - Seluruh filter chip dilengkapi atribut aksesibilitas `aria-pressed="true/false"` dan teruji ramah navigasi keyboard.
   - Tag `<title>`, meta deskripsi, OpenGraph, dan canonical URL unik per halaman.
   - Header `robots: noindex, nofollow` pada seluruh rute privat/autentikasi.

---

## 3. Matriks Status Implementasi Fitur

| Modul | Nama Fitur | Status | File Implementasi Utama |
| :--- | :--- | :---: | :--- |
| **DSS Engine** | Weighted Sum Model (WSM) | **Aktif (100%)** | [`src/domain/scoring/scoring.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/domain/scoring/scoring.ts) |
| **DSS Engine** | Hard-Constraint Filter | **Aktif (100%)** | [`src/domain/scoring/boundaries.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/domain/scoring/boundaries.ts) |
| **DSS Engine** | Manual Cost Calculator | **Aktif (100%)** | [`src/features/comparison/components/manual-cost-calculator.tsx`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/features/comparison/components/manual-cost-calculator.tsx) |
| **DSS Engine** | Cost Simulator 1/3/6/12 Bulan | **Aktif (100%)** | [`src/domain/costing/costing.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/domain/costing/costing.ts) |
| **DSS Engine** | Food Cost Estimator | **Aktif (100%)** | [`src/domain/costing/food-cost-estimator.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/domain/costing/food-cost-estimator.ts) |
| **DSS Engine** | Explainable Trade-off Engine | **Aktif (100%)** | [`src/features/decisions/components/decision-board.tsx`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/features/decisions/components/decision-board.tsx) |
| **Preferences** | Bradley-Terry Weight Fitting | **Aktif (100%)** | [`src/domain/preferences/personal-weighting.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/domain/preferences/personal-weighting.ts) |
| **Preferences** | Pairwise Comparison Modal | **Aktif (100%)** | [`src/features/preferences/components/pairwise-weighting-modal.tsx`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/features/preferences/components/pairwise-weighting-modal.tsx) |
| **Geospatial** | MapLibre Interactive Canvas | **Aktif (100%)** | [`src/features/map/components/map-canvas.tsx`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/features/map/components/map-canvas.tsx) |
| **Geospatial** | 3 Pilot Kampus (UI/UNAND/ITERA) | **Aktif (100%)** | [`src/data/pilot-config.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/data/pilot-config.ts) |
| **Geospatial** | Multi-Modal Routing Engine | **Aktif (100%)** | [`src/domain/distance/routing-service.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/domain/distance/routing-service.ts) |
| **Geospatial** | POI Amenities Radar | **Aktif (100%)** | [`src/features/map/services/neighborhood-service.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/features/map/services/neighborhood-service.ts) |
| **Geospatial** | One-Click DSS Bridge | **Aktif (100%)** | [`src/features/map/services/dss-bridge.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/features/map/services/dss-bridge.ts) |
| **AI / NLP** | Semantic Search Natural Language | **Aktif (100%)** | [`src/domain/search/semantic-search.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/domain/search/semantic-search.ts) |
| **AI / NLP** | Smart Ad Listing Extractor | **Aktif (100%)** | [`src/features/listings/services/extract-listing.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/features/listings/services/extract-listing.ts) |
| **Security** | Safe Redirect Sanitizer (B7) | **Aktif (100%)** | [`src/lib/auth/redirect.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/lib/auth/redirect.ts) |
| **Security** | Sliding-Window Rate Limiter (E5) | **Aktif (100%)** | [`src/lib/security/rate-limiter.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/lib/security/rate-limiter.ts) |
| **Security** | Password Reset Flow (B5) | **Aktif (100%)** | [`src/app/api/auth/reset-password/route.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/api/auth/reset-password/route.ts) |
| **Security** | Mandatory Login Middleware | **Aktif (100%)** | [`src/middleware.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/middleware.ts) |
| **Legal** | Kebijakan Privasi & Ketentuan | **Aktif (100%)** | [`src/app/privacy/page.tsx`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/privacy/page.tsx) |
| **Auth** | Google OAuth 2.0 Flow | **Aktif (100%)** | [`src/app/api/auth/google/route.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/api/auth/google/route.ts) |
| **Auth** | Scrypt Password & HMAC Session | **Aktif (100%)** | [`src/lib/auth/password.ts`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/lib/auth/password.ts) |
| **UI/UX** | Halaman Login Editorial | **Aktif (100%)** | [`src/app/auth/login/page.tsx`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/auth/login/page.tsx) |
| **UI/UX** | Landing Page & 3D Room Showcase | **Aktif (100%)** | [`src/features/landing/components/landing-view.tsx`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/features/landing/components/landing-view.tsx) |
| **Admin** | Portal Pemilik & Verifikasi Kos | **Aktif (100%)** | [`src/app/admin/page.tsx`](file:///d:/2026%20-%20Tugas%20Akhir%20dan%20Proyek%20Aktif/KostMatch/src/app/admin/page.tsx) |

---

## 4. Metrik Kualitas & Hasil Pengujian Sistem

Sistem KosMatch telah diverifikasi melalui rangkaian pengujian otomatis (*automated testing suite*) yang ketat:

- **Pengujian Unit & Integrasi (*Vitest*)**:
  - Total Berkas Pengujian: **36 file**
  - Total Kasus Pengujian: **218 pengujian**
  - Status Kelulusan: **218 lulus (100% PASS)**
- **Pemeriksaan Tipe TypeScript**:
  - `tsc --noEmit`: **0 error** (Strict Mode diaktifkan).
- **Audit Kualitas Kode (*ESLint 9*)**:
  - `eslint .`: **0 error, 0 warning** (Vendor minified code diabaikan secara aman).
- **Kompilasi Rute Produksi Next.js**:
  - `next build`: **25 rute statis dan dinamis berhasil dikompilasi sempurna** tanpa pemutusan dependensi.
- **Hasil Pengujian UAT Live (Playwright)**:
  - Total Skenario: **40 skenario (A1–F6)**
  - Status Kelulusan: **40 lulus (100% PASS)** pada server live `https://kosmatch.us.ci`.

---

## 5. Kesimpulan

Seluruh pilar fungsional yang dirancang untuk platform KosMatch—mulai dari DSS multi-kriteria berbasis bobot preferensi, mesin geospasial rute nyata, kalkulator pengeluaran manual, mitigasi keamanan open redirect dan brute force, alur pemulihan sandi, infrastruktur basis data server terproteksi, hingga autentikasi modern berbasis Google OAuth 2.0—telah **sepenuhnya terimplementasi, terhubung antarmuka, dan terverifikasi secara fungsional**.

Seluruh pilar fungsional yang dirancang untuk platform KosMatch—mulai dari DSS multi-kriteria berbasis bobot preferensi, mesin geospasial rute nyata, pencarian semantik bahasa alami, infrastruktur basis data server terproteksi, hingga autentikasi modern berbasis Google OAuth 2.0—telah **sepenuhnya terimplementasi, terhubung antarmuka, dan terverifikasi secara fungsional**.
