"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Calculator, Compass, Lock, LogIn, LogOut, User } from "lucide-react";
import { LandingFeatures } from "./landing-features";
import { LandingCampuses } from "./landing-campuses";
import { LandingFaq } from "./landing-faq";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

export type LandingViewProps = {
  onStart: () => void;
  onDemo?: () => void;
  hasSaved?: boolean;
  onResume?: () => void;
  initialUser?: { email: string; role: string } | null;
};

function Brand() {
  return (
    <Link href="/" className="brand editorial-brand">
      <KosMatchLogo size={36} />
      <div className="editorial-brand-text">
        <span className="editorial-brand-title">KOSMATCH</span>
        <span className="editorial-brand-badge">MULTI-KAMPUS</span>
      </div>
    </Link>
  );
}

export function LandingView({ onStart, initialUser }: LandingViewProps) {
  const router = useRouter();
  const [fetchedUser, setFetchedUser] = useState<{ email: string; role: string } | null>(null);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const currentUser = isLoggedOut
    ? null
    : (initialUser !== undefined ? initialUser : fetchedUser);

  useEffect(() => {
    if (initialUser !== undefined) return;
    let active = true;
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (active && data?.user) {
          setFetchedUser(data.user);
        }
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [initialUser]);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setIsLoggedOut(true);
      setFetchedUser(null);
      router.push("/auth/login");
      router.refresh();
    } catch {}
  };

  return (
    <div className="shell landing-shell landing-editorial-theme">
      {/* =========================================================================
          HERO SECTION: FULLSCREEN ARCHITECTURAL CANVAS (RANTY REFERENCE STYLE)
          Full-bleed landscape background image with unobstructed student residence
      ========================================================================== */}
      <section className="hero-editorial-fullscreen" aria-label="Beranda KosMatch">
        {/* Editorial Floating Glass Header */}
        <header className="topbar editorial-topbar">
          <div className="container header-inner">
            <Brand />
            <nav className="editorial-topbar-nav" aria-label="Navigasi Halaman">
              <Link className="editorial-nav-link highlight" href="/explore">
                <Compass size={14} /> Peta Eksplorasi
              </Link>
              <Link className="editorial-nav-link" href="/calculator">
                <Calculator size={14} /> Kalkulator DSS
              </Link>
              <a className="editorial-nav-link" href="#campuses">
                Daftar Kampus
              </a>
              <a className="editorial-nav-link" href="#faq">
                Tanya Jawab
              </a>
            </nav>
            <div className="actions compact editorial-topbar-actions">
              {currentUser ? (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <a
                    className="btn btn-editorial-ghost"
                    href={currentUser.role === "admin" || currentUser.role === "owner" ? "/admin" : "/explore"}
                    style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                    title={`Login sebagai ${currentUser.email}`}
                  >
                    <User size={14} />
                    <span>{currentUser.email.split("@")[0]}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="btn btn-editorial-ghost"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "12px",
                      color: "var(--danger, #B42318)",
                      cursor: "pointer",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      border: "1px solid rgba(180, 35, 24, 0.2)",
                      background: "rgba(180, 35, 24, 0.05)",
                    }}
                    title="Keluar dari akun KosMatch"
                  >
                    <LogOut size={13} />
                    <span>Keluar</span>
                  </button>
                </div>
              ) : (
                <a
                  className="btn btn-editorial-ghost"
                  href="/auth/login"
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <LogIn size={14} />
                  <span>Masuk / Akun</span>
                </a>
              )}
            </div>
          </div>
        </header>

        {/* Hero Body: Content layered over the full landscape */}
        <div className="container hero-editorial-body">
          {/* Top Hero Grid: Left Typography + Open Architectural Showcase */}
          <div className="hero-editorial-grid">
            {/* Left Column: High-Fashion Serif Headline & DSS Actions */}
            <div className="hero-editorial-left">
              <div className="hero-editorial-title-wrap">
                <span className="hero-editorial-super">TEMUKAN KOS TERBAIK</span>
                <div className="hero-editorial-sub">/ Keputusan Hunian Cerdas, Objektif &amp; Bebas Penyesalan /</div>
                <h1 className="hero-editorial-h1">Kos murah belum tentu paling hemat.</h1>
              </div>

              <p className="lead editorial-lead">
                Bandingkan biaya bulanan, estimasi waktu tempuh, fasilitas, dan kebutuhan pribadi dalam satu keputusan objektif berdasarkan jarak dan rute sebenarnya ke kampus.
              </p>

              <div className="actions editorial-actions" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "12px" }}>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                  <Link
                    href="/explore"
                    className="btn btn-editorial-start"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
                  >
                    <Compass size={18} /> {currentUser ? "Jelajahi Kos di Peta Kampus" : "Masuk & Jelajahi Kos di Peta Kampus"} <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/calculator"
                    onClick={() => onStart?.()}
                    className="btn btn-editorial-outline"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
                  >
                    <Calculator size={18} /> Buka Kalkulator DSS
                  </Link>
                </div>
                {!currentUser && (
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "12px",
                      color: "rgba(255, 255, 255, 0.7)",
                      background: "rgba(224, 169, 109, 0.1)",
                      border: "1px solid rgba(224, 169, 109, 0.25)",
                      padding: "4px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    <Lock size={12} style={{ color: "#E0A96D" }} />
                    <span>Fitur peta interaktif dan kalkulator DSS memerlukan masuk akun (gratis).</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Clean, Unobstructed View */}
            <div className="hero-editorial-right" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL FEATURE HIGHLIGHTS SECTION (Cleanly positioned with breathing room)
      ========================================================================== */}
      <section className="landing-editorial-highlights-section" aria-label="Keunggulan KosMatch">
        <div className="container">
          <div className="clay-card layout-card-full">
            <div className="clay-card-content" style={{ maxWidth: "580px" }}>
              <span className="hero-editorial-super" style={{ color: "#E0A96D", fontSize: "12px", letterSpacing: "1.2px", marginBottom: "8px", display: "block", textTransform: "uppercase", fontWeight: 700 }}>
                Standar Kenyamanan Hunian
              </span>
              <h2 className="clay-card-title" style={{ fontSize: "24px", lineHeight: "1.3", margin: "0 0 10px" }}>
                Kamar Nyaman, Istirahat Tenang, Belajar Makin Fokus
              </h2>
              <p className="clay-card-sub" style={{ fontSize: "14px", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.86)", margin: "0 0 16px" }}>
                Kamar kos adalah ruang hidup utama selama masa studi Anda. KosMatch mencatat ketersediaan perabot esensial (tempat tidur, lemari, meja belajar, tipe kamar mandi) berdasarkan data listing terkonfirmasi sebelum Anda menentukan pilihan sewa.
              </p>
              <div className="clay-card-badges" style={{ gap: "8px", marginBottom: "20px" }}>
                <span className="clay-pill">Kasur &amp; Bantal Ergonomis</span>
                <span className="clay-pill">Lemari Pakaian Lapang</span>
                <span className="clay-pill">Meja &amp; Kursi Belajar</span>
                <span className="clay-pill">Kamar Mandi Dalam</span>
                <span className="clay-pill">Sirkulasi &amp; Jendela Alami</span>
              </div>
              <Link
                href="/explore"
                className="btn btn-editorial-start"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "13px",
                  padding: "9px 20px",
                  background: "#E0A96D",
                  color: "#1C1B19",
                  borderColor: "#E0A96D",
                  fontWeight: 750,
                  textDecoration: "none",
                }}
              >
                <Compass size={15} /> {currentUser ? "Eksplorasi Kos Siap Huni di Peta Kampus \u2192" : "Masuk & Eksplorasi Kos di Peta Kampus \u2192"}
              </Link>
            </div>
            <div className="layout-card-visual">
              <Image
                src="/images/landing-isometric-cutaway.jpg"
                alt="3D Potongan Isometrik Kamar Kos Mahasiswa (Kasur, Lemari, Meja Belajar, KM Dalam)"
                width={240}
                height={240}
                className="layout-card-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Features, Supported Campuses & FAQ */}
      <main>
        <LandingFeatures />
        <LandingCampuses />
        <div id="faq">
          <LandingFaq />
        </div>
      </main>

      {/* Comprehensive Editorial Footer */}
      <footer className="footer-note editorial-footer" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", padding: "40px 0 24px" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "32px", marginBottom: "32px" }}>
          {/* Kolom 1: Profil KosMatch */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <KosMatchLogo size={28} />
              <strong style={{ fontSize: "16px", letterSpacing: "1px", color: "var(--foreground, #FFF)" }}>KOSMATCH</strong>
            </div>
            <p style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.65)", lineHeight: 1.6, margin: 0 }}>
              Sistem pendukung keputusan (DSS) pemilihan kos mahasiswa multi-kriteria berdasarkan jarak dan rute sebenarnya ke kampus, fasilitas esensial, dan kalkulator biaya hidup nyata.
            </p>
          </div>

          {/* Kolom 2: Navigasi Cepat */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--foreground, #FFF)", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.8px" }}>
              Navigasi
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
              <Link href="/explore" style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}>
                Peta Eksplorasi Kampus
              </Link>
              <Link href="/calculator" style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}>
                Kalkulator DSS Kos
              </Link>
              <a href="#campuses" style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}>
                Daftar Kampus yang Didukung
              </a>
              <a href="#faq" style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}>
                Tanya Jawab (FAQ)
              </a>
            </div>
          </div>

          {/* Kolom 3: Privasi & Bantuan */}
          <div>
            <h4 style={{ fontSize: "14px", fontWeight: 700, color: "var(--foreground, #FFF)", margin: "0 0 12px", textTransform: "uppercase", letterSpacing: "0.8px" }}>
              Privasi &amp; Legal
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
              <Link href="/privacy" style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}>
                Kebijakan Privasi
              </Link>
              <Link href="/terms" style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}>
                Syarat &amp; Ketentuan
              </Link>
              <Link href="/contact" style={{ color: "rgba(255, 255, 255, 0.75)", textDecoration: "none" }}>
                Kontak &amp; Bantuan
              </Link>
              <Link href="/admin" style={{ color: "#E0A96D", textDecoration: "none" }}>
                Portal Pemilik &amp; Admin &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="container" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.06)", paddingTop: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px", fontSize: "12px", color: "rgba(255, 255, 255, 0.5)" }}>
          <p style={{ margin: 0 }}>&copy; 2026 KosMatch. Dibuat mandiri tanpa sponsor atau manipulasi rekomendasi.</p>
          <p style={{ margin: 0 }}>Algoritma AHP &amp; TOPSIS &bull; OpenStreetMap Data &bull; Hak Cipta Terlindungi</p>
        </div>
      </footer>
    </div>
  );
}
