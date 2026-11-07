"use client";

import Link from "next/link";
import { CAMPUSES } from "@/data/campuses";
import { PILOT_CONFIG } from "@/data/pilot-config";
import { Compass, MapPin, Sparkles } from "lucide-react";

export function LandingCampuses() {
  const pilotCampusIds = PILOT_CONFIG.allPilots.map((p) => p.campusId);

  return (
    <section id="campuses" className="container steps landing-campuses-section" aria-labelledby="campuses-section-title">
      <div className="eyebrow">Dukungan Multi-Kampus</div>
      <h2 id="campuses-section-title" className="section-title">
        Kampus yang Didukung KosMatch
      </h2>
      <p className="lead">
        KosMatch memetakan titik gerbang dan rute riil kampus agar mahasiswa perantau dapat mengukur jarak tempuh, ongkos harian, serta fasilitas lingkungan kos secara akurat.
      </p>

      {/* Pilot Highlights Banner (Dark obsidian background for high contrast & elegance) */}
      <div
        className="panel"
        style={{
          background: "linear-gradient(135deg, #18221E 0%, #111A17 100%)",
          border: "1px solid rgba(224, 169, 109, 0.4)",
          borderRadius: "var(--radius-panel, 16px)",
          padding: "var(--space-5, 20px)",
          marginBottom: "var(--space-6, 24px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.12)",
        }}
      >
        <div style={{ maxWidth: "620px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#E0A96D", fontSize: "12px", fontWeight: 750, textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
            <Sparkles size={14} /> Peta Interaktif &amp; Profil Lingkungan Lengkap
          </div>
          <h3 style={{ margin: "0 0 6px", fontSize: "18px", color: "#FFFFFF", fontWeight: 750 }}>
            Pilot Khusus: ITERA, UI Depok, UNAND, UNILA &amp; UNP
          </h3>
          <p style={{ margin: 0, fontSize: "14px", color: "rgba(244, 240, 234, 0.85)", lineHeight: 1.55 }}>
            Tersedia katalog kos terverifikasi lengkap dengan titik gerbang kampus, rute pejalan kaki / motor, serta pemetaan fasilitas sekitar (warung makan, minimarket, laundry, dan ATM).
          </p>
        </div>
        <Link
          href="/explore"
          className="btn btn-editorial-start"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            fontSize: "13px",
            padding: "9px 20px",
            background: "#E0A96D",
            color: "#18221E",
            fontWeight: 750,
            whiteSpace: "nowrap",
            border: "1px solid #E0A96D",
            borderRadius: "8px",
          }}
        >
          <Compass size={16} /> Buka Peta Kampus &rarr;
        </Link>
      </div>

      {/* Grid of All Supported Campuses */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "18px",
        }}
      >
        {CAMPUSES.map((campus) => {
          const isPilot = pilotCampusIds.includes(campus.id);

          return (
            <div
              key={campus.id}
              style={{
                background: "#FFFFFF",
                border: isPilot ? "1.5px solid rgba(217, 131, 39, 0.45)" : "1px solid #E5E1CD",
                borderRadius: "16px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: isPilot ? "0 6px 18px rgba(217, 131, 39, 0.09)" : "0 2px 6px rgba(0, 0, 0, 0.04)",
                transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease",
              }}
            >
              {/* Header Gambar Landmark Kampus */}
              <div style={{ position: "relative", width: "100%", height: "145px", backgroundColor: "#18221E", overflow: "hidden" }}>
                {campus.imageUrl ? (
                  <img
                    src={campus.imageUrl}
                    alt={`Foto landmark kampus ${campus.name}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                ) : (
                  <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #18221E 0%, #2A3631 100%)" }} />
                )}
                {/* Overlay gradasi gelap agar badge dan teks lokasi terbaca jelas */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(20, 27, 24, 0.8) 0%, rgba(20, 27, 24, 0.15) 50%, transparent 100%)",
                  }}
                />

                {/* Badge Mengambang di Atas Gambar */}
                <div style={{ position: "absolute", top: "10px", left: "10px", right: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "12px",
                      color: "#FFFFFF",
                      background: "rgba(20, 27, 24, 0.78)",
                      backdropFilter: "blur(6px)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      padding: "3px 9px",
                      borderRadius: "6px",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {campus.shortName}
                  </span>
                  {isPilot ? (
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#FFFFFF",
                        background: "#186049",
                        border: "1px solid rgba(255, 255, 255, 0.3)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        fontWeight: 750,
                        boxShadow: "0 2px 6px rgba(0,0,0,0.25)",
                      }}
                    >
                      Peta + POI Aktif
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#FFFFFF",
                        background: "rgba(40, 44, 42, 0.8)",
                        backdropFilter: "blur(6px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        padding: "3px 8px",
                        borderRadius: "6px",
                        fontWeight: 600,
                      }}
                    >
                      DSS Siap
                    </span>
                  )}
                </div>

                {/* Tag Lokasi Kota di Sudut Bawah Gambar */}
                <div style={{ position: "absolute", bottom: "8px", left: "10px", display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#F4F0EA", textShadow: "0 1px 3px rgba(0,0,0,0.85)" }}>
                  <MapPin size={13} style={{ color: "#E0A96D" }} />
                  <span style={{ fontWeight: 650 }}>{campus.city}</span>
                </div>
              </div>

              {/* Badan Konten Kartu */}
              <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1, gap: "10px" }}>
                <div>
                  <h4 style={{ margin: "0 0 6px", fontSize: "15px", fontWeight: 750, color: "#14211D", lineHeight: 1.35 }}>
                    {campus.name}
                  </h4>

                  {/* Cuplikan Metrik & Rentang Sewa Kos */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
                    {campus.stats?.verifiedListings ? (
                      <span style={{ fontSize: "11px", color: "#186049", background: "rgba(24, 96, 73, 0.08)", border: "1px solid rgba(24, 96, 73, 0.2)", padding: "2px 7px", borderRadius: "5px", fontWeight: 700 }}>
                        {campus.stats.verifiedListings}+ Kos Terpetakan
                      </span>
                    ) : null}
                    {campus.stats?.priceRange ? (
                      <span style={{ fontSize: "11px", color: "#B46A14", background: "#FEF7EE", border: "1px solid rgba(217, 131, 39, 0.2)", padding: "2px 7px", borderRadius: "5px", fontWeight: 600 }}>
                        Sewa: {campus.stats.priceRange}
                      </span>
                    ) : null}
                    {isPilot && campus.stats?.gatesCount ? (
                      <span style={{ fontSize: "11px", color: "#5C6E66", background: "#F4F1E8", border: "1px solid #E8E5DA", padding: "2px 7px", borderRadius: "5px", fontWeight: 500 }}>
                        {campus.stats.gatesCount} Gerbang Resmi
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* Baris Bawah & Aksi */}
                <div style={{ paddingTop: "10px", borderTop: "1px solid #ECE8DB", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "11px", color: "#7A8A83" }}>
                    {isPilot ? "Radius gerbang akurat" : "DSS Multi-Kriteria"}
                  </span>
                  <Link
                    href={isPilot ? `/explore` : `/calculator`}
                    style={{
                      fontSize: "12.5px",
                      color: isPilot ? "#186049" : "#D98327",
                      textDecoration: "none",
                      fontWeight: 750,
                    }}
                  >
                    {isPilot ? "Lihat Peta \u2192" : "Pilih Kampus \u2192"}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

