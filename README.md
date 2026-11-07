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

### 1. 🧮 True Cost Calculator
Memisahkan dengan tegas antara:
* **Biaya Bulanan Berulang:** Sewa pokok, utilitas (listrik/air/laundry), dan biaya transportasi pulang-pergi × jumlah hari perjalanan dalam sebulan.
* **Biaya Awal Masuk:** Uang deposit jaminan, biaya administrasi, dan pembayaran di muka (tidak dicampur ke pengeluaran bulanan).

### 2. 🎯 Weighted Match Score & Confidence Metric
* **Rule-Based Scoring:** Setiap kriteria (harga, fasilitas wajib, aksesibilitas, aturan malam) dinilai dari 0–100 dengan bobot personal yang dapat disesuaikan.
* **Confidence Level:** Menunjukkan seberapa lengkap data yang telah diverifikasi langsung oleh pengguna tanpa memanipulasi nilai kecocokan.

### 3. 🛡️ Arsitektur Server Terproteksi & Autentikasi Terisolasi
* Seluruh data proyek, preferensi kriteria, dan evaluasi kos tersimpan aman di server dengan basis data terenkripsi.
* Akses fitur aplikasi terproteksi melalui autentikasi aman (Google OAuth 2.0 / Email & Sandi ter-hash), tanpa pelacak iklan komersial.
* Tersedia fitur **Export/Import JSON tervalidasi** untuk portabilitas dan backup data mandiri pengguna.

### 4. 🖨️ Clean Print & PDF Summary
Menghasilkan ringkasan perbandingan satu halaman yang bersih dan siap cetak untuk didiskusikan bersama orang tua atau rekan, dengan sensor otomatis terhadap catatan privat dan URL mentah.

---

## 🏗️ Arsitektur & Prinsip Desain

```
[ Client & Cloud Architecture ]
  ├── Next.js 16 App Router (React 19 Server & Client Components)
  ├── Production Server (Linux Ubuntu, Nginx Reverse Proxy, Let's Encrypt SSL)
  ├── PostgreSQL + PostGIS Spatial Engine (Terkoneksi Aman via Auth Session)
  └── Multi-Criteria Decision Algorithms (AHP & TOPSIS Analysis Engine)
```

| Prinsip | Implementasi |
| :--- | :--- |
| **Explainable AI/Logic** | Rumus penilaian terbuka, transparan, dan dapat diverifikasi di halaman dokumentasi metodologi. |
| **Data Integrity** | Validasi skema ketat menggunakan **Zod** untuk mencegah korupsi data saat impor/ekspor. |
| **Comprehensive Testing** | Unit test formula via **Vitest** dan End-to-End browser test via **Playwright** (termasuk audit aksesibilitas Axe). |
| **Automated CI/CD** | Pipeline pengujian dan kompilasi otomatis melalui **GitHub Actions** menuju server produksi. |

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 16.4.2](https://nextjs.org/) (App Router, Turbopack)
* **Library:** [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/)
* **Spatial & Database:** [PostgreSQL](https://www.postgresql.org/) + [PostGIS](https://postgis.net/) (Self-hosted on Cloud Server)
* **Maps & Geo:** [MapLibre GL JS](https://maplibre.org/), OpenStreetMap, OSRM
* **Styling:** Vanilla CSS Tokens & Tailwind CSS
* **Data Validation:** [Zod](https://zod.dev/)
* **Testing:** [Vitest](https://vitest.dev/), [Playwright](https://playwright.dev/)
* **Deployment & CI/CD:** GitHub Actions, Nginx Reverse Proxy, Ubuntu Linux, Let's Encrypt SSL

---

## 📚 Dokumentasi Proyek

Seluruh dokumentasi teknis, arsitektur, dan panduan pengujian telah dirapikan ke dalam folder [`docs/`](./docs/README.md):

* **[Panduan Instalasi & Deployment](./docs/installation-guide.md):** Langkah menjalankan server lokal dan konfigurasi environment server.
* **[Arsitektur Sistem & Algoritma DSS](./docs/KosMatch-architecture.md):** Struktur layer aplikasi, domain entities, dan formula perankingan AHP/TOPSIS.
* **[Spesifikasi Desain & UI/UX](./docs/KosMatch-design.md):** Konsep visual editorial, hierarki antarmuka, dan sistem layout responsif.
* **[Spesifikasi Area Pilot](./docs/pilot-specification.md):** Data geospasial kampus pilot UI Depok dan Unand Limau Manis Padang.
* **Skenario UAT & Pengujian Live:** 38 skenario komprehensif (A1–F4) beserta log dan tangkapan layar pengujian tersimpan rapi di folder internal `uat/` (ter-gitignore).
* **[Laporan Fitur Terimplementasi](./docs/LAPORAN_FITUR_TERIMPLEMENTASI.md):** Status pencapaian kapabilitas dan pengujian platform.
* **[Panduan Cloudflare & SSL](./docs/cloudflare-setup-guide.md):** Pengaturan DNS, proxy, dan keamanan jaringan.
* **[Roadmap Pengembangan Masa Depan](./docs/KosMatch_Future_Work_v2.md):** Rencana ekspansi kampus dan fitur mendatang.

---

## 📄 Lisensi & Hak Cipta

Dibuat dengan dedikasi untuk mempermudah kehidupan mahasiswa dan pencari tempat tinggal mandiri.  
© 2026 **KosMatch**. Hak Cipta Dilindungi.
