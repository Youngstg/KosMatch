# 🛠️ Panduan Instalasi & Deployment — KosMatch

Panduan teknis internal untuk menjalankan dan mendeploy aplikasi KosMatch.

---

## 💻 Menjalankan di Lingkungan Lokal

### Prasyarat
- **Node.js**: Versi `20.19+` atau `22.x+` (disarankan)
- **npm**: Versi `10.x+`

### Langkah-langkah
1. Install dependensi:
   ```bash
   npm install
   ```
2. Jalankan development server:
   ```bash
   npm run dev
   ```
3. Buka browser di: `http://localhost:3000`

---

## 🧪 Quality Gates & Pengujian

Sebelum melakukan commit, pastikan seluruh uji kualitas lolos:

```bash
# Typecheck TypeScript
npm run typecheck

# Linter kode
npm run lint

# Unit & Integration Tests (Vitest)
npm run test

# Build Verifikasi
npm run build

# End-to-End Tests (Playwright)
npx playwright install chromium
npm run test:e2e
```

---

## 🚀 Alur Deployment Production (GitHub Actions & VPS)

Aplikasi ini telah terintegrasi dengan **GitHub Actions** menuju server **Tencent Cloud Lighthouse**:
- **Triggers:** Push ke branch `main`.
- **Workflow:** `.github/workflows/deploy.yml`
- **Port Aplikasi di Server:** `3001` (dikelola oleh PM2).
- **Reverse Proxy:** Nginx mengarahkan traffic port 80/443 (SSL via Certbot) ke port 3001.

### Konfigurasi Nginx di Server
```nginx
server {
    listen 80;
    server_name kosmatch.us.ci;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```
SSL diaktifkan dengan: `sudo certbot --nginx -d kosmatch.us.ci`.

---

## 🐘 Pengaturan Database PostgreSQL + PostGIS di VPS

KosMatch menggunakan **PostgreSQL + PostGIS** lokal di VPS (tanpa batas kuota cloud eksternal & latensi 0 ms via `localhost`):

### 1. Inisialisasi Otomatis (Sekali Jalankan di VPS)
Jalankan skrip otomasi yang telah disediakan:
```bash
bash scripts/setup-vps-postgres.sh
```
Skrip ini akan:
- Menginstall paket `postgresql`, `postgresql-contrib`, dan `postgis`.
- Membuat user database `kosmatch` dan database `kosmatch`.
- Mengaktifkan ekstensi spasial `postgis` dan `uuid-ossp`.
- Mengeksekusi skema tabel `database/schema.sql` dan data awal `database/seed.sql`.

### 2. Konfigurasi Environment di VPS
Tambahkan connection string ke `.env.production` atau environment PM2:
```env
DATABASE_URL=postgresql://kosmatch:KOSMATCH_STRONG_PASSWORD@localhost:5432/kosmatch
```
Restart aplikasi via PM2:
```bash
pm2 restart kosmatch --update-env
```
