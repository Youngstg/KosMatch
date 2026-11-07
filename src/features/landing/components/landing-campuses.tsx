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
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "14px",
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
                borderRadius: "14px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "12px",
                boxShadow: isPilot ? "0 4px 12px rgba(217, 131, 39, 0.08)" : "0 1px 3px rgba(0, 0, 0, 0.04)",
                transition: "transform 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "8px" }}>
                  <span
                    style={{
                      fontWeight: 800,
                      fontSize: "13px",
                      color: isPilot ? "#B46A14" : "#14211D",
                      background: isPilot ? "#FDF5EA" : "#F2EFE5",
                      border: isPilot ? "1px solid rgba(217, 131, 39, 0.25)" : "1px solid #E5E1CD",
                      padding: "2px 8px",
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
                        color: "#186049",
                        background: "rgba(24, 96, 73, 0.1)",
                        border: "1px solid rgba(24, 96, 73, 0.2)",
                        padding: "2px 7px",
                        borderRadius: "4px",
                        fontWeight: 700,
                      }}
                    >
                      Peta + POI Aktif
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#5C6E66",
                        background: "#F4F1E8",
                        border: "1px solid #E8E5DA",
                        padding: "2px 7px",
                        borderRadius: "4px",
                        fontWeight: 600,
                      }}
                    >
                      DSS Siap
                    </span>
                  )}
                </div>
                <h4 style={{ margin: "0 0 5px", fontSize: "15px", fontWeight: 700, color: "#14211D", lineHeight: 1.35 }}>
                  {campus.name}
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12.5px", color: "#5C6E66" }}>
                  <MapPin size={13} style={{ color: "#7E8E87" }} />
                  <span>{campus.city}</span>
                </div>
              </div>

              <div style={{ paddingTop: "10px", borderTop: "1px solid #ECE8DB", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "11px", color: "#7A8A83" }}>
                  {isPilot ? "Radius gerbang terpetakan" : "Titik koordinat terdaftar"}
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
          );
        })}
      </div>
    </section>
  );
}

