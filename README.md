# 🏠 KosMatch — Smart & Transparent Kost Decision Support System

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live%20Production-success?style=for-the-badge" alt="Production Status" />
  <img src="https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL%20%2B%20PostGIS-336791?style=for-the-badge&logo=postgresql" alt="PostgreSQL" />
</p>

<p align="center">
  <strong>Alat bantu perbandingan dan pendukung keputusan pemilihan tempat kos yang transparan, objektif, dan terproteksi di server cloud.</strong>
</p>

<p align="center">
  🌐 <strong>Live Demo:</strong> <a href="https://kosmatch.us.ci" target="_blank">https://kosmatch.us.ci</a>
</p>

---

## 💡 Latar Belakang & Masalah

Mencari kos sering kali membingungkan karena informasi biaya yang tersembunyi (listrik, air, iuran sampah, deposit), jarak tempuh harian yang menguras ongkos, serta aturan kos yang tidak transparan. Marketplace kos konvensional umumnya mengarahkan pengguna pada transaksi tanpa memberikan perbandingan objektif berbasis kebutuhan nyata pencari kos.

**KosMatch hadir sebagai sistem pendukung keputusan (Decision Support System)**:
- ❌ **Bukan marketplace** yang menjual/mempromosikan kos sponsor.
- ❌ **Tidak memaksakan** satu "kos terbaik" secara mutlak.
- ✅ **Menghitung Total Cost of Living sebenarnya** (Sewa + Utilitas + Biaya Transportasi Harian).
- ✅ **Menjelaskan alasan di balik setiap penilaian** secara transparan (*explainable scoring*).

---

## ✨ Fitur Unggulan

### 1. 🧮 True Cost & Manual Expense Calculator
Memisahkan dengan tegas antara:
* **Biaya Bulanan Berulang:** Sewa pokok, utilitas (listrik/air/laundry kiloan), dan biaya transportasi harian bolak-balik × jumlah hari mobilitas/kuliah dalam sebulan.
* **Biaya Awal Masuk:** Uang deposit jaminan, biaya administrasi, dan pembayaran di muka (tidak dicampur ke pengeluaran bulanan).
* **Manual Entry Langsung:** Pengguna terautentikasi dapat langsung memasukkan angka simulasi pada `/calculator` tanpa harus memilih dari peta terlebih dahulu, tersinkronisasi otomatis ke proyek akun di database VPS.

### 2. 🎯 Weighted Match Score & Confidence Metric
* **Rule-Based Scoring:** Setiap kriteria (harga, fasilitas wajib, aksesibilitas, aturan malam) dinilai dari 0–100 dengan bobot personal yang dapat disesuaikan.
* **Confidence Level:** Menunjukkan seberapa lengkap data yang telah diverifikasi langsung oleh pengguna tanpa memanipulasi nilai kecocokan.
* **Hard-Constraint Filter:** Menyingkirkan opsi yang melanggar syarat mutlak pengguna (misal gender atau fasilitas wajib).

### 3. 🛡️ Arsitektur Keamanan Berlapis & Akses Wajib Akun
* **Mandatory Login Enforcement:** Seluruh fitur personalisasi DSS (`/explore`, `/calculator`, `/admin`, `/listings/new`) dilindungi di sisi server (Middleware & SSR check) yang mengarahkan pengunjung tamu secara aman ke login.
* **Anti Open Redirect (CWE-601):** Validasi ketat `getSafeRedirectUrl()` di seluruh titik pengalihan klien dan server, menolak protokol luar, backslash, dan manipulasi encoding.
* **Sliding-Window Rate Limiting:** Proteksi brute-force per IP proxy (`cf-connecting-ip` / `x-real-ip`) dan per akun pada endpoint login, register, dan lupa sandi (`HTTP 429 Too Many Requests`).
* **Siklus Pemulihan Sandi Aman:** Token reset sandi terenkripsi SHA-256 sekali pakai bertenggat 15 menit dengan respon netral anti-enumerasi pengguna.
* **Isolasi Data Akun:** Seluruh proyek keputusan dan preferensi tersimpan aman di server PostgreSQL VPS per `user_id`.

### 4. 🗺️ Geospasial Multi-Kampus & Multi-Modal Routing
* **3 Kampus Pilot:** Institut Teknologi Sumatera (ITERA Lampung), Universitas Indonesia (UI Depok), dan Universitas Andalas (UNAND Padang).
* **Katalog Komprehensif:** 395 listing kos terverifikasi dan 930 titik fasilitas penting (POI) dari OpenStreetMap di basis data PostGIS.
* **Routing Gerbang Masuk Resmi:** Mengukur waktu tempuh komutasi (*walking, motorcycle, driving*) menuju gerbang kampus resmi dengan faktor detour terkalibrasi.

### 5. 🖨️ Clean Print & PDF Summary
Menghasilkan ringkasan perbandingan satu halaman yang bersih dan siap cetak untuk didiskusikan bersama orang tua atau rekan, dengan sensor otomatis terhadap catatan privat dan URL mentah.

---

## 🏗️ Arsitektur & Prinsip Desain

```
[ Client & Cloud Architecture ]
  ├── Next.js 16 App Router (React 19 Server & Client Components)
  ├── Security Layer (Sliding-Window Rate Limiter, Safe Redirect, HMAC Session)
  ├── Production Server (Linux Ubuntu, Nginx Reverse Proxy, Let's Encrypt SSL)
  ├── PostgreSQL 16 + PostGIS Spatial Engine (Terkoneksi Aman via Auth Session)
  └── Multi-Criteria Decision Algorithms (WSM, Bradley-Terry, & TOPSIS Engine)
```

| Prinsip | Implementasi |
| :--- | :--- |
| **Explainable AI/Logic** | Rumus penilaian terbuka, transparan, dan dapat diverifikasi di halaman dokumentasi metodologi. |
| **Strict Data Integrity** | Validasi skema ketat menggunakan **Zod** untuk mencegah korupsi data saat impor/ekspor. |
| **Quality & Security Gates** | 36 file pengujian (218 unit/integration tests) via **Vitest** dan End-to-End browser test via **Playwright**. |
| **Automated CI/CD** | Pipeline pengujian dan kompilasi otomatis melalui **GitHub Actions** menuju server produksi VPS. |

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 16.4.2](https://nextjs.org/) (App Router, Turbopack)
* **Library:** [React 19](https://react.dev/), [TypeScript 5.9](https://www.typescriptlang.org/)
* **Spatial & Database:** [PostgreSQL 16](https://www.postgresql.org/) + [PostGIS](https://postgis.net/) (Self-hosted on Tencent Cloud VPS)
* **Maps & Geo:** [MapLibre GL JS](https://maplibre.org/), OpenStreetMap, OSRM
* **Styling:** Vanilla CSS Tokens & Tailwind CSS
* **Security & Auth:** Scrypt Password Hashing, Signed Cookies, SHA-256 Tokens, Sliding-Window Rate Limiter
* **Data Validation:** [Zod](https://zod.dev/)
* **Testing:** [Vitest](https://vitest.dev/), [Playwright](https://playwright.dev/)
* **Deployment & CI/CD:** GitHub Actions, Nginx Reverse Proxy, Ubuntu Linux 24.04, PM2, Let's Encrypt SSL

---

## 📚 Dokumentasi Proyek

Seluruh dokumentasi teknis, arsitektur, dan panduan pengujian telah dirapikan ke dalam folder [`docs/`](./docs/README.md):

* **[Panduan Instalasi & Deployment](./docs/installation-guide.md):** Langkah menjalankan server lokal, konfigurasi database PostGIS, dan deployment VPS.
* **[Arsitektur Sistem & Algoritma DSS](./docs/KosMatch-architecture.md):** Struktur layer aplikasi, domain entities, formula perankingan AHP/WSM, dan arsitektur keamanan.
* **[Spesifikasi Desain & UI/UX](./docs/KosMatch-design.md):** Konsep visual editorial, hierarki antarmuka, dan sistem layout responsif.
* **[Spesifikasi Area Pilot](./docs/pilot-specification.md):** Data geospasial kampus pilot ITERA Lampung, UI Depok, dan UNAND Padang.
* **[Laporan Hasil UAT](./uat/LAPORAN_HASIL_UAT.md):** 40 skenario pengujian komprehensif (A1–F6) dengan tingkat kelulusan 100% di server produksi live.
* **[Laporan Fitur Terimplementasi](./docs/LAPORAN_FITUR_TERIMPLEMENTASI.md):** Status pencapaian kapabilitas dan pengujian platform.
* **[Panduan Cloudflare & SSL](./docs/cloudflare-setup-guide.md):** Pengaturan DNS, proxy, dan keamanan jaringan.
* **[Roadmap Pengembangan Masa Depan](./docs/KosMatch_Future_Work_v2.md):** Rencana ekspansi kampus dan fitur mendatang.

---

## 📄 Lisensi & Hak Cipta

Dibuat dengan dedikasi untuk mempermudah kehidupan mahasiswa dan pencari tempat tinggal mandiri.  
© 2026 **KosMatch**. Hak Cipta Dilindungi.
