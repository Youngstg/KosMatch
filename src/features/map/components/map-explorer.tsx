"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, Compass, Info, MapPin, Navigation2, Scale } from "lucide-react";
import { PILOT_CONFIG, type PilotSpecification } from "@/data/pilot-config";
import { MapSkeleton } from "./map-skeleton";
import { estimateRoadMeters, formatDistance, haversineMeters } from "@/lib/geo";

// Dynamically import MapCanvas to prevent SSR window/WebGL issues
const MapCanvas = dynamic(
  () => import("./map-canvas").then((mod) => mod.MapCanvas),
  {
    ssr: false,
    loading: () => <MapSkeleton />,
  }
);

function Brand() {
  return (
    <Link href="/" className="brand" style={{ textDecoration: "none", color: "inherit" }}>
      <span className="logo">
        <Scale size={21} aria-hidden="true" />
      </span>
      <span>KosMatch</span>
    </Link>
  );
}

const POI_CATEGORY_LABELS: Record<string, string> = {
  food: "Warung & Kuliner",
  laundry: "Laundry",
  convenience: "Minimarket",
  pharmacy: "Apotek & Klinik",
  worship: "Tempat Ibadah",
  bus_stop: "Halte / Transportasi",
  atm: "ATM & Bank",
};

export function MapExplorer() {
  const [selectedCampus, setSelectedCampus] = useState<PilotSpecification>(PILOT_CONFIG.primaryPilot);
  const [candidatePoint, setCandidatePoint] = useState<{ latitude: number; longitude: number } | null>(null);

  const straightMeters = candidatePoint
    ? haversineMeters(candidatePoint, selectedCampus.centerCoordinates)
    : null;
  const estimatedRoadMeters =
    straightMeters !== null ? estimateRoadMeters(straightMeters) : null;


  return (
    <div className="shell">
      <header className="topbar">
        <div className="container header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
            <Brand />
            <span className="badge good" style={{ display: "none" }}>
              Fase 1 Pilot
            </span>
          </div>
          <div className="actions compact">
            <Link className="btn btn-ghost" href="/">
              <ArrowLeft size={16} /> Beranda
            </Link>
            <Link className="btn btn-primary" href="/#setup">
              Mulai Perbandingan
            </Link>
          </div>
        </div>
      </header>

      <div className="map-explorer-layout">
        {/* Sidebar Controls & Info */}
        <aside className="map-sidebar">
          <div className="map-sidebar-content">
            <div>
              <div className="eyebrow">Fase 1 · Peta & Lingkungan</div>
              <h1 style={{ fontSize: "24px", margin: "4px 0 8px" }}>Eksplorasi Area Kampus</h1>
              <p className="muted" style={{ fontSize: "14px", lineHeight: "1.5", margin: 0 }}>
                Pilih kampus pilot untuk melihat radius target dan klik di peta untuk menguji titik kos kandidat.
              </p>
            </div>

            {/* Campus Switcher Pills */}
            <fieldset className="fieldset-reset" style={{ margin: "var(--space-3) 0" }}>
              <legend className="field-label" style={{ marginBottom: "var(--space-2)" }}>
                Pilih Kampus Pilot
              </legend>
              <div className="chips">
                {PILOT_CONFIG.allPilots.map((pilot) => {
                  const active = pilot.id === selectedCampus.id;
                  return (
                    <button
                      key={pilot.id}
                      type="button"
                      className={`chip ${active ? "selected" : ""}`}
                      aria-pressed={active}
                      onClick={() => {
                        setSelectedCampus(pilot);
                        setCandidatePoint(null);
                      }}
                    >
                      <Building2 size={15} /> {pilot.campusName.split(" (")[0]} ({pilot.city})
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Selected Campus Summary Card */}
            <article className="panel" style={{ padding: "var(--space-4)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <h2 style={{ fontSize: "17px", margin: 0 }}>{selectedCampus.campusName}</h2>
                <span className="badge good">{selectedCampus.city}</span>
              </div>
              <p className="muted" style={{ fontSize: "13px", lineHeight: "1.5", margin: "0 0 12px" }}>
                {selectedCampus.targetAudience}
              </p>

              <div className="summary-strip" style={{ gridTemplateColumns: "1fr 1fr", gap: "8px", margin: "0 0 12px" }}>
                <div className="summary-item" style={{ padding: "8px 12px" }}>
                  <span className="muted" style={{ fontSize: "11px" }}>Radius Pilot</span>
                  <strong style={{ fontSize: "16px" }}>{selectedCampus.radiusKm} km</strong>
                </div>
                <div className="summary-item" style={{ padding: "8px 12px" }}>
                  <span className="muted" style={{ fontSize: "11px" }}>Target Kos</span>
                  <strong style={{ fontSize: "16px" }}>{selectedCampus.initialTargetVerifiedListings} kos</strong>
                </div>
              </div>

              <div>
                <span className="field-label" style={{ fontSize: "12px", display: "block", marginBottom: "6px" }}>
                  Kategori POI Prioritas OSM:
                </span>
                <div className="badges" style={{ gap: "4px" }}>
                  {selectedCampus.priorityPoiCategories.map((cat) => (
                    <span key={cat} className="badge" style={{ fontSize: "11px", padding: "4px 8px" }}>
                      {POI_CATEGORY_LABELS[cat] ?? cat}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* Candidate Point Inspector */}
            <article className="panel" style={{ padding: "var(--space-4)" }}>
              <h3 style={{ fontSize: "15px", margin: "0 0 8px", display: "flex", alignItems: "center", gap: "6px" }}>
                <Compass size={17} color="var(--primary)" /> Titik Uji Kandidat
              </h3>
              {candidatePoint ? (
                <div style={{ display: "grid", gap: "8px" }}>
                  <div className="detail-row">
                    <strong>Koordinat:</strong>
                    <span style={{ fontFamily: "monospace", fontSize: "12px" }}>
                      {candidatePoint.latitude.toFixed(5)}, {candidatePoint.longitude.toFixed(5)}
                    </span>
                  </div>
                  {straightMeters !== null && estimatedRoadMeters !== null && (
                    <div className="detail-row">
                      <strong>Jarak lurus ke kampus:</strong>
                      <span>
                        <Navigation2 size={13} style={{ display: "inline", verticalAlign: "middle" }} />{" "}
                        {formatDistance(straightMeters)} (±{formatDistance(estimatedRoadMeters)} rute darat)
                      </span>
                    </div>
                  )}
                  <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                    <button
                      className="btn btn-secondary"
                      style={{ flex: 1, minHeight: "36px", fontSize: "12px" }}
                      onClick={() => setCandidatePoint(null)}
                    >
                      Hapus Titik
                    </button>
                    <Link
                      className="btn btn-primary"
                      style={{ flex: 1, minHeight: "36px", fontSize: "12px" }}
                      href="/"
                    >
                      Gunakan di KosMatch
                    </Link>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "var(--space-3) 0", color: "var(--text-muted)", fontSize: "13px" }}>
                  <MapPin size={24} style={{ display: "block", margin: "0 auto 6px", color: "var(--primary)" }} />
                  Klik di mana saja pada peta untuk menandai titik kos dan mengukur jarak ke {selectedCampus.campusName.split(" (")[0]}.
                </div>
              )}
            </article>

            <p className="disclaimer" style={{ fontSize: "12px", margin: 0 }}>
              <Info size={15} /> Peta dasar disediakan oleh OpenStreetMap. Lingkaran garis putus-putus menunjukkan radius survei pilot {selectedCampus.radiusKm} km.
            </p>
          </div>
        </aside>

        {/* Map Canvas */}
        <main className="map-main">
          <MapCanvas
            selectedCampus={selectedCampus}
            candidatePoint={candidatePoint}
            onMapClick={(coords) => setCandidatePoint(coords)}
            onCampusSelect={(pilot) => {
              setSelectedCampus(pilot);
              setCandidatePoint(null);
            }}
          />
        </main>
      </div>
    </div>
  );
}
