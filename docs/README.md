# 📚 Indeks Dokumentasi KosMatch

Selamat datang di repositori dokumentasi resmi **KosMatch** — Sistem Pendukung Keputusan (Decision Support System / DSS) pemilihan hunian kos mahasiswa multi-kriteria berbasis jarak riil kampus, kalkulasi biaya hidup nyata, dan transparansi data.

Folder `docs/` ini merangkum seluruh dokumentasi arsitektur, panduan teknis, spesifikasi desain, skenario pengujian, dan rencana pengembangan.

---

## 🧭 Peta Panduan Dokumentasi

```
docs/
├── 1. Spesifikasi & Konsep Produk
│   ├── KosMatch-description.md       # Visi, latar belakang, dan spesifikasi produk
│   ├── KosMatch-design.md            # Panduan desain UI/UX, tema editorial, & interaksi
│   └── pilot-specification.md        # Spesifikasi wilayah pilot kampus (UI & Unand)
│
├── 2. Arsitektur & Panduan Teknis
│   ├── KosMatch-architecture.md      # Arsitektur sistem, struktur layer, & algoritma DSS
│   ├── installation-guide.md         # Panduan instalasi lokal, environment, & VPS
│   └── cloudflare-setup-guide.md     # Konfigurasi domain, DNS, SSL, & Cloudflare
│
└── 3. Pengujian, Audit & Evaluasi
    ├── LAPORAN_FITUR_TERIMPLEMENTASI.md # Status fitur terimplementasi & validasi sistem
    ├── KosMatch_Laporan_Audit_Lengkap.md # Hasil audit keamanan, performa, & aksesibilitas
    └── KosMatch_Future_Work_v2.md    # Roadmap pengembangan fitur & ekspansi mendatang
    # Catatan: Seluruh artefak UAT (skenario A1–F4, runner, screenshots) dikonsolidasikan di folder 'uat/' (gitignored)
```

---

## 📑 Rincian Dokumen

### 1. Spesifikasi & Konsep Produk

| Dokumen | Deskripsi | Target Pembaca |
| :--- | :--- | :--- |
| [**KosMatch-description.md**](./KosMatch-description.md) | Penjelasan masalah sewa kos, prinsip independensi (tanpa sponsor), kalkulasi biaya hidup total, dan pemisahan kebutuhan wajib vs preferensi. | Product Owner, Pengembang, Peneliti |
| [**KosMatch-design.md**](./KosMatch-design.md) | Filosofi desain visual "Architectural & Editorial", tipografi, layout responsif (desktop & mobile), palet warna, dan hierarki kontrol. | UI/UX Designer, Frontend Developer |
| [**pilot-specification.md**](./pilot-specification.md) | Data titik koordinat gerbang kampus, radius studi, dan kategori POI prioritas untuk UI Depok dan Unand Limau Manis Padang. | GIS Specialist, Data Collector |

---

### 2. Arsitektur & Panduan Teknis

| Dokumen | Deskripsi | Target Pembaca |
| :--- | :--- | :--- |
| [**KosMatch-architecture.md**](./KosMatch-architecture.md) | Arsitektur Next.js 16 App Router, perancangan domain-driven entities, penyimpanan database server PostgreSQL/PostGIS, dan algoritma perankingan multi-kriteria (AHP & TOPSIS). | Backend / Fullstack Developer |
| [**installation-guide.md**](./installation-guide.md) | Panduan langkah demi langkah menjalankan KosMatch di lingkungan lokal (`npm run dev`), build produksi, konfigurasi environment variables (`.env`), dan deployment di VPS. | Developer, DevOps Engineer |
| [**cloudflare-setup-guide.md**](./cloudflare-setup-guide.md) | Panduan teknis setup DNS, SSL/TLS Full (Strict), proteksi DDOS, dan konfigurasi origin reverse proxy menggunakan Cloudflare. | DevOps / SysAdmin |

---

### 3. Pengujian, Audit & Evaluasi

| Dokumen | Deskripsi | Target Pembaca |
| :--- | :--- | :--- |
| [**LAPORAN_FITUR_TERIMPLEMENTASI.md**](./LAPORAN_FITUR_TERIMPLEMENTASI.md) | Laporan mendalam hasil verifikasi fitur yang telah terimplementasi, status coverage pengujian, dan checklist kapabilitas platform. | Tim Pengembang, Reviewer TA |
| [**KosMatch_Laporan_Audit_Lengkap.md**](./KosMatch_Laporan_Audit_Lengkap.md) | Audit menyeluruh terhadap integritas data, keamanan autentikasi, efisiensi komputasi spasial, dan kepatuhan privasi pengguna. | Security Auditor, Tech Lead |
| [**KosMatch_Future_Work_v2.md**](./KosMatch_Future_Work_v2.md) | Rencana pengembangan jangka panjang: integrasi rute transportasi umum (KRL/TransJakarta), sinkronisasi multi-perangkat terenkripsi, dan automasi pemetaan kos komunitas. | Tim Riset & Pengembang |
| **Artefak UAT** (`uat/`) | 38 skenario UAT lengkap (A1–F4), skrip Playwright, laporan JSON, dan tangkapan layar pengujian live site (tersimpan di folder internal `uat/` yang ter-gitignore). | QA Engineer, Tester |

---

## 🚀 Memulai Pengembangan

Untuk menjalankan KosMatch di komputer lokal:
```bash
# 1. Pastikan dependensi terpasang
npm install

# 2. Jalankan server pengembangan
npm run dev

# 3. Jalankan unit & component test suite
npm test

# 4. Jalankan kompilasi produksi
npm run build
```

Petunjuk konfigurasi lebih lanjut dapat dilihat pada [Panduan Instalasi](./installation-guide.md).

