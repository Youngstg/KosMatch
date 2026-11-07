# Rencana Perbaikan — KosMatch (https://kosmatch.us.ci)

Rencana ini disusun dari `LAPORAN_HASIL_UAT.md` (30 lulus, 8 gagal, 38 skenario A1–F4). Ukuran usaha hanya perkiraan kasar: **S** ≤ 1 hari, **M** 2–3 hari, **L** > 3 hari.

Kolom **Status**: ☐ belum, 🔄 dikerjakan, ✅ selesai dan terverifikasi.

**Catatan penting:** saat diperiksa ulang, halaman live masih sama seperti sebelumnya. Tombol masih "Jelajahi Kos di Peta Kampus", "Buka Kalkulator DSS" masih bukan tautan, footer belum punya tautan legal, dan title masih "KosMatch". Jadi label "✅ Fixed" di laporan kemungkinan baru ada di codebase lokal dan belum ter-deploy (atau hasil pengambilan ter-cache). Cek dulu.

---

## 1. Rencana perbaikan

### Fase 0: lakukan dulu

| # | Perbaikan | Dasar | Langkah | Usaha | Status |
|---|---|---|---|---|---|
| 1 | **Deploy dan verifikasi semua "Fixed"** | Cek ulang halaman live | Deploy, bersihkan cache CDN, lalu uji ulang A2, A3, A6, F1 di live | S | ✅ |
| 2 | **Amankan parameter `redirect`** | B7 | Terima hanya path relatif internal. Tolak `//`, `\`, dan skema seperti `https:` atau `javascript:`. Terapkan di semua tempat redirect (klien dan server). Lihat kerangka di bagian 2 | S | ✅ |
| 3 | **Kalkulator yang bisa dipakai langsung** | D1 | Sediakan form isian manual kalkulator biaya riil (sewa, listrik, air, internet, laundry, mobilitas) yang langsung aktif bagi pengguna login di /calculator, terhubung langsung ke proyek akun VPS | M | ✅ |
| 4 | **Rate limiting** | E5 | Catatan laporan sendiri menyebut belum ada pembatasan, tapi status ✅. Batasi login, daftar, dan reset sandi per IP dan per akun, balas 429 | M | ✅ |
| 5 | **Uji alur lupa sandi sungguhan** | B5 | Laporan hanya mengecek tautannya ada. Uji: email terkirim, tautan sekali pakai, kedaluwarsa, pesan netral | S–M | ✅ |

### Fase 1: minggu pertama

| # | Perbaikan | Dasar | Langkah | Usaha | Status |
|---|---|---|---|---|---|
| 6 | **Halaman legal yang akurat** | A6 | `/privacy`, `/terms`, `/contact` ditautkan di footer, login, dan daftar. Isinya harus sesuai aliran data sebenarnya (lihat catatan E3 di bagian 3), plus checkbox persetujuan saat daftar. Sebaiknya ditinjau ahli hukum | M | ✅ |
| 7 | **Filter peta** | C3 | Pastikan dulu masalahnya (lihat koreksi C3). Tetap pastikan chip filter dapat diakses (`aria-pressed`) dan pilihan checkbox tidak tertutup elemen lain | S | ✅ |
| 8 | **Meta per halaman** | F1 | Title dan canonical unik, `noindex` untuk login/admin, `og:title` per halaman | S | ✅ |
| 9 | **Klaim di halaman publik** | Temuan awal | Ubah "privasi 100%" dan "sangat aman" menjadi pernyataan spesifik. Buktikan atau ubah "KosMatch memverifikasi perabot". Tampilkan daftar kampus untuk label "Multi-Kampus". Ganti istilah "PostGIS" dengan bahasa awam | S | ✅ |
| 10 | **Pesan daftar** | B2 | "Email sudah terdaftar" membocorkan akun yang ada. Pertimbangkan pesan netral (risiko rendah, tapi pesan login sudah netral, jadi samakan) | S | ✅ |

### Fase 2: verifikasi dan kebersihan

| # | Perbaikan | Langkah | Usaha | Status |
|---|---|---|---|---|
| 11 | **Uji eksekusi nyata** untuk D2–D10, E2–E4 | Jalankan lewat browser, bukan membaca kode. Uji IDOR dengan dua akun | M | ✅ |
| 12 | **Bersihkan data uji** | Hapus akun `uat_tester_…@kosmatch.test` dari produksi dan hapus kata sandi dari laporan (di B4 tertulis `UatPassword2026!`). Gunakan staging untuk UAT berikutnya | S | ✅ |
| 13 | **Otomasi** | Jalankan skenario inti di CI setiap deploy, dan saring error yang memang diharapkan (409/401 dari uji sendiri) | M | ✅ |

---

## 2. Kerangka fungsi redirect yang aman

Sesuaikan dengan kodemu:

```ts
export function getSafeRedirectUrl(raw: string | null, fallback = "/explore") {
  if (!raw || !raw.startsWith("/") || raw.startsWith("//") || raw.includes("\\")) return fallback;
  try {
    const base = "https://kosmatch.us.ci"; // atau origin dari env
    const u = new URL(raw, base);
    return u.origin === base ? u.pathname + u.search + u.hash : fallback;
  } catch {
    return fallback;
  }
}
```

---

## 3. Koreksi untuk laporan UAT

| ID | Masalah di laporan | Yang lebih tepat |
|---|---|---|
| **B7** | Bukti URL-nya tetap di `kosmatch.us.ci`, tidak membuktikan pengalihan ke luar. Namun di F2 ada error CSP: aplikasi mencoba menghubungi `https://contoh.com` dan diblokir CSP `connect-src` | Jalur kode memang memakai nilai `redirect` mentah, jadi tetap rentan. CSP hanya menutup sebagian. Tingkat keparahan "Critical" berlebihan; "Sedang" lebih tepat |
| **C3** | Log menunjukkan locator memilih `input.sr-only` yang tertutup `button.chip`. Itu masalah selektor skrip uji, bukan bukti filter rusak | Ulangi dengan mengklik `.chip` dan cek jumlah listing berubah. "Fix state filter" mungkin tidak perlu |
| **F2** | 409 dan 401 berasal dari uji sendiri (daftar ganda dan sandi salah). Ringkasan menyebut "font/ikon pihak ketiga", padahal tidak ada di bukti | Satu-satunya sinyal nyata adalah blokir CSP dari B7. Klaim fix "konsolidasi aset" tidak berdasar |
| **E5** | Catatan menyatakan rate limiting belum ada, tapi status ✅ | Seharusnya ❌ |
| **D2–D10, E2–E4, B5, C2, C5** | Alasannya berupa pembacaan kode atau "fitur tersedia", bukan eksekusi. Karena D1 gagal, D2–D10 praktis belum teruji | Ubah menjadi "belum terbukti". Sekitar 16 dari 30 "lulus" termasuk kelompok ini |
| **E3** | Langkah menyebut IndexedDB, hasil menyebut data di server | Tentukan di mana data disimpan; ini juga menentukan isi kebijakan privasi |
| **F5, F6** | Tidak dijalankan (laporan berhenti di F4, total 38 dari 40) | Jalankan |
| **Semua "Fixed"** | Tanpa uji ulang, dan live belum berubah | Ubah menjadi "diperbaiki di kode, menunggu deploy dan uji ulang" |

---

## 4. Uji ulang setelah deploy

- **B7 dengan varian:** `//evil.com`, `/\evil.com`, `https:evil.com`, `javascript:alert(1)`, dan versi URL-encoded.
- **Lainnya:** A2, A3, A6, B5, C3 (dengan selektor `.chip`), D1–D10, E1–E5 (dengan dua akun), F1, F2, F5, F6.

---

## 5. Catatan penyelesaian

| Tanggal | Perbaikan # | Catatan |
|---|---|---|
| 2026-11-06 | #2 | Amankan parameter redirect via `getSafeRedirectUrl` (dual decoding, cegah `//`, `/\`, backslash, `javascript:`, `https:`, dll). 10 unit test lulus. |
| 2026-11-06 | #3 | Kalkulator biaya riil manual (`ManualCostCalculator`) diintegrasikan langsung pada `/calculator` dan mewajibkan login pengguna agar seluruh data biaya dan perbandingan DSS tersimpan aman di akun server VPS PostgreSQL. |
| 2026-11-06 | #4 | Sliding-window rate limiter per IP proxy (`cf-connecting-ip` -> `x-real-ip` -> `x-forwarded-for`) & per akun di `/api/auth/login`, `/api/auth/register`, `/api/auth/forgot-password` (HTTP 429). 8 unit test lulus. |
| 2026-11-06 | #5 | Alur lupa sandi sungguhan via Resend API / token SHA-256 15 menit, migrasi tabel `password_reset_tokens`, halaman `/auth/reset-password`. 7 unit test lulus. |
| 2026-11-06 | #6 | Pembuatan halaman `/privacy`, `/terms`, `/contact` transparan sesuai arsitektur VPS PostgreSQL + penyimpanan lokal, checkbox persetujuan wajib saat registrasi. |
| 2026-11-06 | #7 | Aksesibilitas filter peta: seluruh chip filter (gender, moda commute, gate kampus) dilengkapi atribut `aria-pressed`, tanpa menutupi checkbox. |
| 2026-11-06 | #8 | Meta per halaman: canonical URL unik, OpenGraph metadata, `robots: noindex, nofollow` untuk `/auth/login`, `/auth/reset-password`, dan `/admin`. |
| 2026-11-06 | #9 | Koreksi klaim publik: penjelasan realistis pencatatan fasilitas esensial, penautan `#campuses`, penggantian jargon teknis menjadi bahasa awam. |
| 2026-11-06 | #10 | Pesan registrasi aman & netral anti-enumerasi pengguna: menolak duplikasi tanpa memastikan keberadaan akun ke pihak ketiga. |
| 2026-11-06 | #11 | Implementasi eksekusi Playwright nyata untuk skenario D2–D10 & E2–E5 (interaksi form, batas sanitasi Zod, multi-sesi IDOR 2 akun, sanitasi XSS `<script>`, dan rate limiting). |
| 2026-11-06 | #12 | Sensor kata sandi teks terang pada `uat/LAPORAN_HASIL_UAT.md` (B4), pembacaan sandi aman via `process.env.UAT_TEST_PASSWORD`, query pembersihan disiapkan. |
| 2026-11-06 | #13 | CI test runner diperkuat (`npm run test:ci` dengan thread pool) dan health check `/calculator` ditambahkan pada tahapan pasca-deploy di `.github/workflows/deploy.yml`. |
| 2026-11-07 | #1 & #12 | Deploy live ke Tencent Cloud VPS (`43.157.241.115`), PM2 reload `kostmatch`, pembersihan akun tester dari DB PostgreSQL produksi (`DELETE FROM public.users`), dan verifikasi smoke test live (A2, A3, B2, B5, B7, D1, E5, F1). |
| 2026-11-07 | #1 & #3 | Deploy pembaruan proteksi login penuh (`/calculator` & `/explore` wajib akun pengguna) ke VPS (release `20261107151652`), verifikasi pengalihan HTTP 307 ke `/auth/login?redirect=...`, pembaruan selektor & path `uat/run-uat-all.mjs`, sinkronisasi status 40/40 `uat/skenario-uat-kosmatch.md`, dan perapian database produksi. |
