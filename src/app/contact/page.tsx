import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Bug, HelpCircle, Mail, MapPin } from "lucide-react";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

export const metadata: Metadata = {
  title: "Kontak & Bantuan",
  description:
    "Hubungi tim pengembang KosMatch untuk pertanyaan seputar sistem pendukung keputusan (DSS), pelaporan bug, usulan kampus baru, atau kemitraan.",
  alternates: {
    canonical: "https://kosmatch.us.ci/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="shell landing-shell" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <header className="topbar editorial-topbar">
        <div className="container header-inner">
          <Link href="/" className="brand editorial-brand">
            <KosMatchLogo size={36} />
            <div className="editorial-brand-text">
              <span className="editorial-brand-title">KOSMATCH</span>
              <span className="editorial-brand-badge">BANTUAN</span>
            </div>
          </Link>
          <nav className="editorial-topbar-nav" aria-label="Navigasi Halaman">
            <Link className="editorial-nav-link" href="/">
              <ArrowLeft size={14} /> Kembali ke Beranda
            </Link>
          </nav>
        </div>
      </header>

      <main className="container" style={{ flex: 1, padding: "40px 20px 80px", maxWidth: "860px" }}>
        <div style={{ marginBottom: "32px" }}>
          <span className="hero-editorial-super" style={{ color: "#E0A96D", fontSize: "13px", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase" }}>
            Pusat Bantuan &amp; Komunikasi
          </span>
          <h1 style={{ fontSize: "32px", margin: "8px 0 16px", color: "var(--foreground, #FFF)", lineHeight: 1.25 }}>
            Hubungi Tim KosMatch
          </h1>
          <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "15px", lineHeight: 1.6 }}>
            Kami siap mendengarkan masukan dari mahasiswa, orang tua, maupun pemilik kos. Ada pertanyaan tentang algoritma DSS, usulan penambahan kampus, atau kendala teknis? Hubungi kami melalui saluran berikut.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px", marginBottom: "32px" }}>
          {/* Card 1: Email Bantuan */}
          <div
            className="panel"
            style={{
              background: "var(--surface, #18191c)",
              border: "1px solid var(--border, #2d2e33)",
              borderRadius: "14px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(224, 169, 109, 0.15)", color: "#E0A96D", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Mail size={20} />
            </div>
            <h3 style={{ margin: "4px 0 0", fontSize: "18px", color: "var(--foreground, #FFF)" }}>Email Resmi</h3>
            <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", lineHeight: 1.5 }}>
              Pertanyaan umum, privasi data, verifikasi listing kos, dan kemitraan kampus.
            </p>
            <a
              href="mailto:support@kosmatch.us.ci"
              style={{
                color: "#E0A96D",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                marginTop: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              support@kosmatch.us.ci &rarr;
            </a>
          </div>

          {/* Card 2: Laporan Bug / Riset */}
          <div
            className="panel"
            style={{
              background: "var(--surface, #18191c)",
              border: "1px solid var(--border, #2d2e33)",
              borderRadius: "14px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(59, 130, 246, 0.15)", color: "#60A5FA", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Bug size={20} />
            </div>
            <h3 style={{ margin: "4px 0 0", fontSize: "18px", color: "var(--foreground, #FFF)" }}>Laporan Teknis &amp; Bug</h3>
            <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", lineHeight: 1.5 }}>
              Menemukan rute yang kurang akurat atau kesalahan perhitungan? Kirimkan tangkapan layar dan detailnya ke tim pengembang.
            </p>
            <span style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "13px", marginTop: "auto" }}>
              Tanggapan rata-rata dalam 1x24 jam kerja
            </span>
          </div>

          {/* Card 3: Tanya Jawab */}
          <div
            className="panel"
            style={{
              background: "var(--surface, #18191c)",
              border: "1px solid var(--border, #2d2e33)",
              borderRadius: "14px",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "rgba(16, 185, 129, 0.15)", color: "#34D399", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <HelpCircle size={20} />
            </div>
            <h3 style={{ margin: "4px 0 0", fontSize: "18px", color: "var(--foreground, #FFF)" }}>Tanya Jawab Cepat</h3>
            <p style={{ margin: 0, color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", lineHeight: 1.5 }}>
              Cari tahu cara kerja algoritma AHP, normalisasi bobot, dan estimasi biaya di halaman FAQ kami.
            </p>
            <Link
              href="/#faq"
              style={{
                color: "#34D399",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                marginTop: "auto",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Buka FAQ Beranda &rarr;
            </Link>
          </div>
        </div>

        {/* Lokasi & Wilayah Operasional */}
        <div
          className="panel"
          style={{
            background: "var(--surface, #18191c)",
            border: "1px solid var(--border, #2d2e33)",
            borderRadius: "14px",
            padding: "24px",
          }}
        >
          <h2 style={{ fontSize: "18px", margin: "0 0 10px", display: "flex", alignItems: "center", gap: "8px", color: "var(--foreground, #FFF)" }}>
            <MapPin size={18} color="#E0A96D" /> Wilayah Operasional Pilot
          </h2>
          <p style={{ color: "rgba(255, 255, 255, 0.75)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
            Pengembangan KosMatch saat ini berpusat pada pemetaan geospatial aktif di Depok (Universitas Indonesia) dan Padang (Universitas Andalas Limau Manis), dengan cakupan 11 kampus lainnya di seluruh Indonesia untuk perhitungan DSS dan estimasi jarak rute.
          </p>
        </div>
      </main>

      <footer className="footer-note editorial-footer" style={{ marginTop: "auto" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ margin: 0 }}>&copy; 2026 KosMatch. Hak cipta dilindungi.</p>
          <div style={{ display: "flex", gap: "16px", fontSize: "13px" }}>
            <Link href="/privacy" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none" }}>Kebijakan Privasi</Link>
            <Link href="/terms" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none" }}>Syarat &amp; Ketentuan</Link>
            <Link href="/" style={{ color: "#E0A96D", textDecoration: "none" }}>Beranda</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

