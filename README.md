# 🏠 KosMatch — Smart & Transparent Kost Decision Support System

<p align="center">
  <img src="https://img.shields.io/badge/Status-Live%20Production-success?style=for-the-badge" alt="Production Status" />
  <img src="https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Storage-Client--Side%20IndexedDB-orange?style=for-the-badge" alt="Storage" />
</p>

<p align="center">
  <strong>Alat bantu perbandingan dan pendukung keputusan pemilihan tempat kos yang transparan, objektif, dan mengutamakan privasi pengguna.</strong>
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

### 3. 🛡️ 100% Privacy-First Architecture (Client-Side Storage)
* Seluruh data proyek, preferensi, dan catatan privat tersimpan secara lokal di **IndexedDB** browser pengguna.
* **Zero Tracker, Zero Sign-up:** Pengguna tidak perlu mendaftar, memasukkan nomor telepon, atau data sensitif apapun.
* Tersedia fitur **Export/Import JSON tervalidasi** untuk backup data lintas perangkat.

### 4. 🖨️ Clean Print & PDF Summary
Menghasilkan ringkasan perbandingan satu halaman yang bersih dan siap cetak untuk didiskusikan bersama orang tua atau rekan, dengan sensor otomatis terhadap catatan privat dan URL mentah.

---

## 🏗️ Arsitektur & Prinsip Desain

```
[ Browser Client ]
  ├── Next.js 16 App Router (React 19 Server & Client Components)
  ├── Local State & Invariant Math Engine (Formula Biaya & Scoring)
  ├── IndexedDB Storage Layer (Zero Data Ke Server / Full Privacy)
  └── TailwindCSS v4 Modern Responsive Interface (Mobile & Desktop Viewport)
```

| Prinsip | Implementasi |
| :--- | :--- |
| **Explainable AI/Logic** | Rumus penilaian terbuka, transparan, dan dapat diverifikasi di halaman `/methodology`. |
| **Data Integrity** | Validasi skema ketat menggunakan **Zod** untuk mencegah korupsi data saat impor/ekspor. |
| **Comprehensive Testing** | Unit test formula via **Vitest** dan End-to-End browser test via **Playwright** (termasuk audit aksesibilitas Axe). |
| **Automated CI/CD** | Pipeline pengujian dan kompilasi otomatis melalui **GitHub Actions** menuju server **Tencent Cloud**. |

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
* **Library:** [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Data Validation:** [Zod](https://zod.dev/)
* **Client Database:** [idb](https://github.com/jakearchibald/idb) (IndexedDB Wrapper)
* **Testing:** [Vitest](https://vitest.dev/), [Playwright](https://playwright.dev/)
* **Deployment & CI/CD:** GitHub Actions, Nginx Reverse Proxy, Ubuntu Linux, Let's Encrypt SSL

---

## 📄 Lisensi & Hak Cipta

Dibuat dengan dedikasi untuk mempermudah kehidupan mahasiswa dan pencari tempat tinggal mandiri.  
© 2026 **KosMatch**. Hak Cipta Dilindungi.
