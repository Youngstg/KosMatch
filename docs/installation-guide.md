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
# Typecheck TypeScript (Strict Mode)
npx tsc --noEmit

# Unit & Integration Tests (Vitest with worker thread pool)
npm run test:ci

# Build Verifikasi Produksi
npm run build

# End-to-End Tests (Playwright)
npx playwright install chromium
node uat/run-uat-all.mjs
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

KosMatch menggunakan **PostgreSQL 16 + PostGIS** lokal di VPS (tanpa batas kuota cloud eksternal & latensi 0 ms via `localhost`):

### 1. Inisialisasi Database & Skema
Jalankan skrip otomasi atau eksekusi manual via psql:
```bash
# Eksekusi skema database (termasuk users, password_reset_tokens, campuses, pois, listings, commute_cache)
psql -U kosmatch -d kosmatch -f database/schema.sql

# Injeksi data katalog pilot lengkap (395 listings, 930 POIs untuk ITERA, UI, UNAND)
psql -U kosmatch -d kosmatch -f database/seed_vps_full.sql
```

### 2. Konfigurasi Environment di VPS (`.env.production`)
File konfigurasi disimpan di `/var/www/kostmatch/.env.production`:
```env
# Database
DATABASE_URL=postgresql://kosmatch:KOSMATCH_STRONG_PASSWORD@localhost:5432/kosmatch

# Sesi & Keamanan
SESSION_SECRET=super_secret_minimum_32_characters_random_string_here
APP_URL=https://kosmatch.us.ci

# Google OAuth 2.0 (Opsional)
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Layanan Email Reset Sandi (Resend API)
RESEND_API_KEY=re_your_resend_api_key_here
EMAIL_FROM=KosMatch <auth@kosmatch.us.ci>
```

### 3. Pengelolaan Proses PM2
Aplikasi dikelola di bawah direktori rilis bertimestamp via symlink `/var/www/kostmatch/current`:
```bash
cd /var/www/kostmatch/current
pm2 restart kostmatch || pm2 start npm --name kostmatch -- start -- -p 3001
pm2 save
```

### 4. Smoke Test Pasca-Deploy
Verifikasi status layanan dan perlindungan rute:
```bash
# Harus merespon 307 Redirect ke /auth/login?redirect=%2Fcalculator
curl -sI https://kosmatch.us.ci/calculator | grep -iE 'HTTP|location'

# Harus merespon 307 Redirect ke /auth/login?redirect=%2Fexplore
curl -sI https://kosmatch.us.ci/explore | grep -iE 'HTTP|location'
```
