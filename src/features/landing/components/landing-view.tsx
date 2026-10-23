"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calculator, Compass, LogIn, Save, Sparkles, User } from "lucide-react";
import { LandingFaq } from "./landing-faq";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

export type LandingViewProps = {
  onStart: () => void;
  onDemo: () => void;
  hasSaved: boolean;
  onResume: () => void;
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

export function LandingView({ onStart, onDemo, hasSaved, onResume }: LandingViewProps) {
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
              <a className="editorial-nav-link highlight" href="/explore">
                <Compass size={14} /> Peta Eksplorasi
              </a>
              <a className="editorial-nav-link" href="/methodology">
                Metodologi
              </a>
              <a className="editorial-nav-link" href="#faq">
                Tanya Jawab
              </a>
            </nav>
            <div className="actions compact editorial-topbar-actions">
              {currentUser ? (
                <a
                  className="btn btn-editorial-ghost"
                  href={currentUser.role === "admin" || currentUser.role === "owner" ? "/admin" : "/explore"}
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                  title={`Login sebagai ${currentUser.email}`}
                >
                  <User size={14} />
                  <span>{currentUser.email.split("@")[0]}</span>
                </a>
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
              <button className="btn btn-editorial-pill" onClick={onStart} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Calculator size={14} /> Kalkulator DSS
              </button>
            </div>
          </div>
        </header>

        {/* Hero Body: Content layered over the full landscape */}
        <div className="container hero-editorial-body">
          {/* Top Hero Grid: Left Typography + Open Architectural Showcase */}
          <div className="hero-editorial-grid">
            {/* Left Column: High-Fashion Serif Headline & DSS Actions */}
            <div className="hero-editorial-left">
              <div className="hero-pilot-pill editorial-pill">
                <span className="live-indicator" />
                <span>KATALOG KAMPUS TERPADU • UI • UNAND • ITERA</span>
              </div>

              <div className="hero-editorial-title-wrap">
                <span className="hero-editorial-super">THE PERFECT KOS®</span>
                <div className="hero-editorial-sub">/ Temukan &amp; Bandingkan Kos Terbaik /</div>
                <h1 className="hero-editorial-h1">Kos murah belum tentu paling hemat.</h1>
              </div>

              <p className="lead editorial-lead">
                Bandingkan biaya bulanan, perjalanan, fasilitas, dan kebutuhan pribadi dalam satu keputusan yang transparan dan terukur berbasis PostGIS.
              </p>

              <div className="actions editorial-actions">
                <button className="btn btn-editorial-start" onClick={onStart} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                  <Calculator size={18} /> Buka Kalkulator DSS <ArrowRight size={18} />
                </button>
                <button className="btn btn-editorial-secondary" onClick={onDemo}>
                  <Sparkles size={16} /> Coba Data Contoh
                </button>
                <a className="btn btn-editorial-outline" href="/explore">
                  <Compass size={16} /> Buka Peta Kampus
                </a>
                {hasSaved && (
                  <button className="btn btn-editorial-ghost" onClick={onResume}>
                    <Save size={16} /> Lanjutkan proyek
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Clean, Unobstructed View with Minimalist Accent Pill */}
            <div className="hero-editorial-right">
              <div className="hero-residence-badge">
                <span className="hero-residence-badge-dot" />
                <div className="hero-residence-badge-text">
                  <strong>Hunian Mahasiswa Terverifikasi</strong>
                  <span>Radius 4 km Kampus &amp; Data Spasial Real</span>
                </div>
              </div>
            </div>
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
              <span className="hero-editorial-super" style={{ color: "#E0A96D", fontSize: "12px", letterSpacing: "1px", marginBottom: "8px", display: "block" }}>
                LAYOUT STANDAR KAMAR KOS MAHASISWA
              </span>
              <h2 className="clay-card-title" style={{ fontSize: "24px", lineHeight: "1.3", margin: "0 0 10px" }}>
                Tata Letak Kamar Kos Mahasiswa: Kasur, Lemari &amp; Meja Belajar
              </h2>
              <p className="clay-card-sub" style={{ fontSize: "14px", lineHeight: "1.6", color: "rgba(255, 255, 255, 0.82)", margin: "0 0 16px" }}>
                Standar tata letak kamar kos mahasiswa yang fungsional dan nyaman. Pastikan kasur, lemari pakaian, meja belajar yang cukup penerangan, serta kamar mandi dalam tersedia sebelum Anda membayar uang muka.
              </p>
              <div className="clay-card-badges" style={{ gap: "8px", marginBottom: "20px" }}>
                <span className="clay-pill">Kasur &amp; Bantal</span>
                <span className="clay-pill">Lemari Pakaian</span>
                <span className="clay-pill">Meja Belajar &amp; Kursi</span>
                <span className="clay-pill">Kamar Mandi Dalam</span>
                <span className="clay-pill">Ventilasi Jendela</span>
              </div>
              <a
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
                <Compass size={15} /> Jelajahi Kos &amp; Fasilitas di Peta Kampus &rarr;
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

      {/* Main Content: Clean FAQ Section */}
      <main>
        <div id="faq">
          <LandingFaq />
        </div>
      </main>

      {/* Refined Minimalist Editorial Footer */}
      <footer className="footer-note editorial-footer">
        <div className="container">
          <p>KosMatch adalah sistem pendukung keputusan pemilihan kos multi-kriteria berbasis geospatial PostGIS.</p>
          <div className="actions compact">
            <a className="btn btn-ghost" href="/methodology">
              Metodologi &amp; Batasan
            </a>
            <a className="btn btn-ghost" href="/admin" title="Masuk ke portal pengelolaan kos bagi pemilik dan admin">
              Portal Pemilik &amp; Admin
            </a>
            <button className="btn btn-editorial-pill" onClick={onStart} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Calculator size={14} /> Buka Kalkulator DSS
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
