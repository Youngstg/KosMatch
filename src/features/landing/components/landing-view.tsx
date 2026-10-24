"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, Compass, LogIn, LogOut, User } from "lucide-react";
import { LandingFeatures } from "./landing-features";
import { LandingFaq } from "./landing-faq";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

export type LandingViewProps = {
  onStart: () => void;
  onDemo?: () => void;
  hasSaved?: boolean;
  onResume?: () => void;
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

export function LandingView({ onStart }: LandingViewProps) {
  const [currentUser, setCurrentUser] = useState<{ email: string; role: string } | null>(null);

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => {
        if (data?.user) {
          setCurrentUser(data.user);
        }
      })
      .catch(() => {});
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setCurrentUser(null);
      window.location.reload();
    } catch {}
  };

  const handleExploreClick = (e: React.MouseEvent) => {
    if (!currentUser) {
      e.preventDefault();
      window.location.href = "/auth/login?redirect=/explore";
    }
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
              <a className="editorial-nav-link highlight" href="/explore" onClick={handleExploreClick}>
                <Compass size={14} /> Peta Eksplorasi
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
                Bandingkan biaya bulanan, perjalanan, fasilitas, dan kebutuhan pribadi dalam satu keputusan yang transparan dan terukur berbasis PostGIS.
              </p>

              <div className="actions editorial-actions" style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center" }}>
                <Link
                  href="/explore"
                  onClick={handleExploreClick}
                  className="btn btn-editorial-start"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}
                >
                  <Compass size={18} /> Jelajahi Kos di Peta Kampus <ArrowRight size={18} />
                </Link>
                <button
                  className="btn btn-editorial-outline"
                  onClick={onStart}
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  <Calculator size={18} /> Buka Kalkulator DSS
                </button>
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
                Kamar kos adalah ruang hidup utama selama masa studi Anda. KosMatch memverifikasi perabot esensial mulai dari tempat tidur empuk, lemari pakaian lapang, meja belajar privat yang kondusif, hingga sirkulasi udara alami sebelum Anda menentukan pilihan sewa.
              </p>
              <div className="clay-card-badges" style={{ gap: "8px", marginBottom: "20px" }}>
                <span className="clay-pill">Kasur &amp; Bantal Ergonomis</span>
                <span className="clay-pill">Lemari Pakaian Lapang</span>
                <span className="clay-pill">Meja &amp; Kursi Belajar</span>
                <span className="clay-pill">Kamar Mandi Dalam</span>
                <span className="clay-pill">Sirkulasi &amp; Jendela Alami</span>
              </div>
              <a
                href="/explore"
                onClick={handleExploreClick}
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
                <Compass size={15} /> Eksplorasi Kos Siap Huni di Peta Kampus &rarr;
              </a>
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

      {/* Main Content: Features & FAQ */}
      <main>
        <LandingFeatures />
        <div id="faq">
          <LandingFaq />
        </div>
      </main>

      {/* Refined Minimalist Editorial Footer */}
      <footer className="footer-note editorial-footer">
        <div className="container">
          <p>KosMatch adalah sistem pendukung keputusan pemilihan kos multi-kriteria berbasis geospatial PostGIS.</p>
          <div className="actions compact">
            <a className="btn btn-ghost" href="/admin" title="Masuk ke portal pengelolaan kos bagi pemilik dan admin">
              Portal Pemilik &amp; Admin
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
