"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, Compass, Info, MapPin, Navigation2, Scale } from "lucide-react";
import { PILOT_CONFIG, type PilotSpecification } from "@/data/pilot-config";
import { getListingsByCampus, type PilotListing } from "@/data/pilot-listings";
import { MapSkeleton } from "./map-skeleton";
import { NeighborhoodProfileCard } from "./neighborhood-profile-card";
import { fetchPointNeighborhoodProfile, type NeighborhoodProfileResult } from "../services/neighborhood-service";
import { estimateRoadMeters, formatDistance, haversineMeters } from "@/lib/geo";
import { formatRupiah } from "@/lib/currency";

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
  const [selectedListing, setSelectedListing] = useState<PilotListing | null>(null);
  const [candidatePoint, setCandidatePoint] = useState<{ latitude: number; longitude: number } | null>(null);
  const [genderFilter, setGenderFilter] = useState<"all" | "male" | "female">("all");
  const [radiusMeters, setRadiusMeters] = useState<number>(800);

  const [neighborhoodProfile, setNeighborhoodProfile] = useState<NeighborhoodProfileResult | null>(null);
  const [loadingProfile, setLoadingProfile] = useState<boolean>(false);

  // Filter listings based on campus and gender
  const campusListings = getListingsByCampus(selectedCampus.campusId);
  const filteredListings = campusListings.filter((l) => {
    if (genderFilter === "all") return true;
    return l.gender === genderFilter || l.gender === "all";
  });

  const activePoint = candidatePoint ?? (selectedListing ? selectedListing.coordinates : null);

  const straightMeters = activePoint
    ? haversineMeters(activePoint, selectedCampus.centerCoordinates)
    : null;
  const estimatedRoadMeters =
    straightMeters !== null ? estimateRoadMeters(straightMeters) : null;

  const activeLat = activePoint?.latitude;
  const activeLng = activePoint?.longitude;

  // Fetch neighborhood profile whenever active point coordinates or radius changes
  useEffect(() => {
    if (activeLat === undefined || activeLng === undefined) {
      return;
    }

    let isSubscribed = true;

    void fetchPointNeighborhoodProfile(activeLat, activeLng, radiusMeters)
      .then((profile) => {
        if (isSubscribed) {
          setNeighborhoodProfile(profile);
          setLoadingProfile(false);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setLoadingProfile(false);
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [activeLat, activeLng, radiusMeters]);

  const handleCampusChange = (pilot: PilotSpecification) => {
    setSelectedCampus(pilot);
    setSelectedListing(null);
    setCandidatePoint(null);
    setNeighborhoodProfile(null);
    setLoadingProfile(false);
  };

  const handleSelectListing = (listing: PilotListing) => {
    setSelectedListing(listing);
    setCandidatePoint(listing.coordinates);
    setLoadingProfile(true);
  };

  const handleMapClick = (coords: { latitude: number; longitude: number }) => {
    setCandidatePoint(coords);
    setSelectedListing(null);
    setLoadingProfile(true);
  };

  const handleRadiusChange = (newRadius: number) => {
    setRadiusMeters(newRadius);
    if (activePoint) {
      setLoadingProfile(true);
    }
  };

  const displayedProfile = activePoint ? neighborhoodProfile : null;

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
                Pilih kampus pilot, jelajahi pin kos terverifikasi, atau klik di mana saja pada peta untuk mengecek fasilitas lingkungan.
              </p>
            </div>

            {/* Campus Switcher Pills */}
            <fieldset className="fieldset-reset" style={{ margin: "var(--space-2) 0" }}>
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
                      onClick={() => handleCampusChange(pilot)}
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
                  <span className="muted" style={{ fontSize: "11px" }}>Kos Terverifikasi</span>
                  <strong style={{ fontSize: "16px" }}>{campusListings.length} listing</strong>
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

            {/* Candidate Point or Selected Kos Inspector */}
            <article className="panel" style={{ padding: "var(--space-4)" }}>
              <h3 style={{ fontSize: "15px", margin: "0 0 8px", display: "flex", alignItems: "center", gap: "6px" }}>
                <Compass size={17} color="var(--primary)" />{" "}
                {selectedListing ? selectedListing.name : "Titik Uji Kandidat"}
              </h3>

              {activePoint ? (
                <div style={{ display: "grid", gap: "8px" }}>
                  {selectedListing && (
                    <div className="badges" style={{ marginBottom: "4px" }}>
                      <span className="badge good">{formatRupiah(selectedListing.rentMonthly)} / bln</span>
                      <span className="badge">Area: {selectedListing.area}</span>
                      <span className="badge">Tipe: {selectedListing.gender === "all" ? "Campur" : selectedListing.gender === "male" ? "Putra" : "Putri"}</span>
                    </div>
                  )}

                  <div className="detail-row">
                    <strong>Koordinat:</strong>
                    <span style={{ fontFamily: "monospace", fontSize: "12px" }}>
                      {activePoint.latitude.toFixed(5)}, {activePoint.longitude.toFixed(5)}
                    </span>
                  </div>

                  {straightMeters !== null && estimatedRoadMeters !== null && (
                    <div className="detail-row">
                      <strong>Jarak ke kampus:</strong>
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
                      onClick={() => {
                        setCandidatePoint(null);
                        setSelectedListing(null);
                        setNeighborhoodProfile(null);
                        setLoadingProfile(false);
                      }}
                    >
                      Reset Titik
                    </button>
                    <Link
                      className="btn btn-primary"
                      style={{ flex: 1, minHeight: "36px", fontSize: "12px" }}
                      href="/"
                    >
                      Bawa ke KosMatch
                    </Link>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "var(--space-3) 0", color: "var(--text-muted)", fontSize: "13px" }}>
                  <MapPin size={24} style={{ display: "block", margin: "0 auto 6px", color: "var(--primary)" }} />
                  Klik salah satu pin kos atau klik bebas pada peta untuk menganalisis fasilitas sekitar.
                </div>
              )}
            </article>

            {/* Neighborhood Amenity Profile Card */}
            <NeighborhoodProfileCard
              profile={displayedProfile}
              loading={loadingProfile}
              currentRadiusMeters={radiusMeters}
              onRadiusChange={handleRadiusChange}
            />

            {/* Pilot Kos Listings List & Filter */}
            <section style={{ marginTop: "var(--space-2)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "16px", margin: 0 }}>
                  Kos Terverifikasi ({filteredListings.length})
                </h3>
              </div>

              {/* Gender Filter Chips */}
              <div className="chips" style={{ marginBottom: "10px" }}>
                {(["all", "male", "female"] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    className={`chip ${genderFilter === g ? "selected" : ""}`}
                    style={{ minHeight: "30px", padding: "2px 10px", fontSize: "12px" }}
                    onClick={() => setGenderFilter(g)}
                  >
                    {g === "all" ? "Semua" : g === "male" ? "Putra" : "Putri"}
                  </button>
                ))}
              </div>

              <div style={{ display: "grid", gap: "8px" }}>
                {filteredListings.map((listing) => {
                  const isSelected = selectedListing?.id === listing.id;
                  return (
                    <article
                      key={listing.id}
                      className={`panel ${isSelected ? "selected" : ""}`}
                      style={{
                        padding: "10px 12px",
                        cursor: "pointer",
                        border: isSelected ? "2px solid var(--primary)" : "1px solid var(--border)",
                        transition: "all var(--duration-fast)",
                      }}
                      onClick={() => handleSelectListing(listing)}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <h4 style={{ margin: 0, fontSize: "14px" }}>{listing.name}</h4>
                        <strong style={{ fontSize: "13px", color: "var(--primary)" }}>
                          {formatRupiah(listing.rentMonthly)}
                        </strong>
                      </div>
                      <p className="muted" style={{ fontSize: "12px", margin: "4px 0 6px" }}>
                        {listing.area} · {listing.gender === "all" ? "Campur" : listing.gender === "male" ? "Putra" : "Putri"}
                      </p>
                      <div className="badges" style={{ gap: "4px" }}>
                        {listing.facilityCodes.slice(0, 3).map((code) => (
                          <span key={code} className="badge" style={{ fontSize: "10px", padding: "2px 6px" }}>
                            {code === "bathroom_inside" ? "KM Dalam" : code === "wifi" ? "WiFi" : code === "ac" ? "AC" : code}
                          </span>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <p className="disclaimer" style={{ fontSize: "12px", margin: 0 }}>
              <Info size={15} /> Peta dasar disediakan oleh OpenStreetMap. Lingkaran garis putus-putus menunjukkan radius survei pilot {selectedCampus.radiusKm} km.
            </p>
          </div>
        </aside>

        {/* Map Canvas */}
        <main className="map-main">
          <MapCanvas
            selectedCampus={selectedCampus}
            listings={filteredListings}
            selectedListingId={selectedListing?.id ?? null}
            candidatePoint={candidatePoint}
            onMapClick={handleMapClick}
            onCampusSelect={handleCampusChange}
            onListingSelect={handleSelectListing}
          />
        </main>
      </div>
    </div>
  );
}
