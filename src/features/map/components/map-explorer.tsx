"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, Compass, Info, MapPin, Navigation, Navigation2, Scale } from "lucide-react";
import { PILOT_CONFIG, type PilotGate, type PilotSpecification } from "@/data/pilot-config";
import { getListingsByCampus, type PilotListing } from "@/data/pilot-listings";
import { MapSkeleton } from "./map-skeleton";
import { NeighborhoodProfileCard } from "./neighborhood-profile-card";
import { fetchPointNeighborhoodProfile, type NeighborhoodProfileResult } from "../services/neighborhood-service";
import {
  calculateAllModesCommute,
  estimateCommuteQuick,
  type CommuteResult,
} from "../services/routing-service";
import type { CommuteMode } from "@/lib/supabase/types";
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
  const [selectedGate, setSelectedGate] = useState<PilotGate | null>(PILOT_CONFIG.primaryPilot.gates[0] ?? null);
  const [selectedListing, setSelectedListing] = useState<PilotListing | null>(null);
  const [candidatePoint, setCandidatePoint] = useState<{ latitude: number; longitude: number } | null>(null);
  const [genderFilter, setGenderFilter] = useState<"all" | "male" | "female">("all");
  const [commuteMode, setCommuteMode] = useState<CommuteMode>("walking");
  const [sortBy, setSortBy] = useState<"commute" | "price_asc" | "price_desc">("commute");
  const [radiusMeters, setRadiusMeters] = useState<number>(800);

  const [neighborhoodProfile, setNeighborhoodProfile] = useState<NeighborhoodProfileResult | null>(null);
  const [loadingProfile, setLoadingProfile] = useState<boolean>(false);
  const [commuteBreakdown, setCommuteBreakdown] = useState<Record<
    "walking" | "motorcycle" | "driving-car",
    CommuteResult
  > | null>(null);
  const [loadingCommute, setLoadingCommute] = useState<boolean>(false);

  // Active destination: either selected campus gate or campus center
  const activeDestination = useMemo(() => {
    return selectedGate
      ? {
          latitude: selectedGate.coordinates.latitude,
          longitude: selectedGate.coordinates.longitude,
          name: selectedGate.name,
        }
      : {
          latitude: selectedCampus.centerCoordinates.latitude,
          longitude: selectedCampus.centerCoordinates.longitude,
          name: selectedCampus.campusName,
        };
  }, [selectedGate, selectedCampus]);
  const activeDestId = selectedGate ? selectedGate.id : selectedCampus.campusId;

  // Filter listings based on campus and gender
  const campusListings = getListingsByCampus(selectedCampus.campusId);
  const filteredListings = campusListings.filter((l) => {
    if (genderFilter === "all") return true;
    return l.gender === genderFilter || l.gender === "all";
  });

  // Calculate quick commute for all filtered listings to current destination
  const listingsWithCommute = useMemo(() => {
    return filteredListings.map((listing) => {
      const commute = estimateCommuteQuick(listing.coordinates, activeDestination, commuteMode);
      return {
        ...listing,
        commuteMinutes: commute.minutes,
        commuteDistanceMeters: commute.distanceMeters,
      };
    });
  }, [filteredListings, activeDestination, commuteMode]);

  // Sort listings based on current sort criteria
  const sortedListings = useMemo(() => {
    return [...listingsWithCommute].sort((a, b) => {
      if (sortBy === "commute") {
        return a.commuteMinutes - b.commuteMinutes;
      }
      if (sortBy === "price_asc") {
        return a.rentMonthly - b.rentMonthly;
      }
      return b.rentMonthly - a.rentMonthly;
    });
  }, [listingsWithCommute, sortBy]);

  const activePoint = candidatePoint ?? (selectedListing ? selectedListing.coordinates : null);

  const straightMeters = activePoint
    ? haversineMeters(activePoint, activeDestination)
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

  // Fetch commute breakdown whenever active point or destination changes
  useEffect(() => {
    if (activeLat === undefined || activeLng === undefined) {
      return;
    }

    let isSubscribed = true;

    void calculateAllModesCommute(
      { latitude: activeLat, longitude: activeLng },
      activeDestination,
      activeDestId
    )
      .then((breakdown) => {
        if (isSubscribed) {
          setCommuteBreakdown(breakdown);
          setLoadingCommute(false);
        }
      })
      .catch(() => {
        if (isSubscribed) {
          setLoadingCommute(false);
        }
      });

    return () => {
      isSubscribed = false;
    };
  }, [activeLat, activeLng, activeDestination, activeDestId]);

  const handleCampusChange = (pilot: PilotSpecification) => {
    setSelectedCampus(pilot);
    setSelectedGate(pilot.gates[0] ?? null);
    setSelectedListing(null);
    setCandidatePoint(null);
    setNeighborhoodProfile(null);
    setCommuteBreakdown(null);
    setLoadingProfile(false);
    setLoadingCommute(false);
  };

  const handleSelectListing = (listing: PilotListing) => {
    setSelectedListing(listing);
    setCandidatePoint(listing.coordinates);
    setLoadingProfile(true);
    setLoadingCommute(true);
  };

  const handleMapClick = (coords: { latitude: number; longitude: number }) => {
    setCandidatePoint(coords);
    setSelectedListing(null);
    setLoadingProfile(true);
    setLoadingCommute(true);
  };

  const handleRadiusChange = (newRadius: number) => {
    setRadiusMeters(newRadius);
    if (activePoint) {
      setLoadingProfile(true);
    }
  };

  const displayedProfile = activePoint ? neighborhoodProfile : null;
  const displayedCommute = activePoint ? commuteBreakdown : null;

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

            {/* Destination Gates Switcher */}
            {selectedCampus.gates.length > 0 && (
              <fieldset className="fieldset-reset" style={{ margin: "var(--space-2) 0" }}>
                <legend className="field-label" style={{ marginBottom: "6px", fontSize: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
                  <Navigation size={13} color="var(--primary)" /> Titik Tujuan / Gerbang Kampus:
                </legend>
                <div className="chips" style={{ gap: "6px" }}>
                  {selectedCampus.gates.map((gate) => {
                    const isSelected = selectedGate?.id === gate.id;
                    return (
                      <button
                        key={gate.id}
                        type="button"
                        className={`chip ${isSelected ? "selected" : ""}`}
                        style={{ fontSize: "12px", padding: "3px 10px", minHeight: "30px" }}
                        aria-pressed={isSelected}
                        onClick={() => {
                          setSelectedGate(gate);
                          if (activePoint) setLoadingCommute(true);
                        }}
                        title={gate.description}
                      >
                        {gate.shortLabel}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            )}

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

                  {/* Real-time 3-Mode Commute Breakdown */}
                  <div style={{ marginTop: "4px" }}>
                    <div style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "4px" }}>
                      Waktu tempuh ke <strong>{activeDestination.name}</strong>:
                    </div>
                    {displayedCommute ? (
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
                        <div
                          className="panel"
                          style={{
                            padding: "6px 8px",
                            textAlign: "center",
                            background: commuteMode === "walking" ? "rgba(13, 148, 136, 0.12)" : "var(--surface)",
                            border: commuteMode === "walking" ? "1px solid var(--primary)" : "1px solid var(--border)",
                          }}
                        >
                          <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>🚶 Jalan Kaki</div>
                          <strong style={{ fontSize: "14px", color: "var(--primary)", display: "block" }}>
                            {displayedCommute.walking.minutes} mnt
                          </strong>
                          <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>
                            {formatDistance(displayedCommute.walking.distanceMeters)}
                          </span>
                        </div>
                        <div
                          className="panel"
                          style={{
                            padding: "6px 8px",
                            textAlign: "center",
                            background: commuteMode === "motorcycle" ? "rgba(13, 148, 136, 0.12)" : "var(--surface)",
                            border: commuteMode === "motorcycle" ? "1px solid var(--primary)" : "1px solid var(--border)",
                          }}
                        >
                          <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>🛵 Motor</div>
                          <strong style={{ fontSize: "14px", color: "var(--primary)", display: "block" }}>
                            {displayedCommute.motorcycle.minutes} mnt
                          </strong>
                          <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>
                            {formatDistance(displayedCommute.motorcycle.distanceMeters)}
                          </span>
                        </div>
                        <div
                          className="panel"
                          style={{
                            padding: "6px 8px",
                            textAlign: "center",
                            background: commuteMode === "driving-car" ? "rgba(13, 148, 136, 0.12)" : "var(--surface)",
                            border: commuteMode === "driving-car" ? "1px solid var(--primary)" : "1px solid var(--border)",
                          }}
                        >
                          <div style={{ fontSize: "11px", color: "var(--text-muted)" }}>🚗 Mobil</div>
                          <strong style={{ fontSize: "14px", color: "var(--primary)", display: "block" }}>
                            {displayedCommute["driving-car"].minutes} mnt
                          </strong>
                          <span style={{ fontSize: "10px", color: "var(--text-muted)" }}>
                            {formatDistance(displayedCommute["driving-car"].distanceMeters)}
                          </span>
                        </div>
                      </div>
                    ) : loadingCommute ? (
                      <div className="skeleton" style={{ height: "48px", borderRadius: "6px" }} />
                    ) : straightMeters !== null && estimatedRoadMeters !== null ? (
                      <div className="detail-row">
                        <strong>Jarak:</strong>
                        <span>
                          <Navigation2 size={13} style={{ display: "inline", verticalAlign: "middle" }} />{" "}
                          {formatDistance(straightMeters)} (±{formatDistance(estimatedRoadMeters)} rute darat)
                        </span>
                      </div>
                    ) : null}
                  </div>

                  <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                    <button
                      className="btn btn-secondary"
                      style={{ flex: 1, minHeight: "36px", fontSize: "12px" }}
                      onClick={() => {
                        setCandidatePoint(null);
                        setSelectedListing(null);
                        setNeighborhoodProfile(null);
                        setCommuteBreakdown(null);
                        setLoadingProfile(false);
                        setLoadingCommute(false);
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
                  Klik salah satu pin kos atau klik bebas pada peta untuk menganalisis waktu tempuh dan fasilitas sekitar.
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
                  Kos Terverifikasi ({sortedListings.length})
                </h3>
              </div>

              {/* Commute Mode & Sorting Controls */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", flexWrap: "wrap", marginBottom: "8px" }}>
                {/* Commute Mode Chips */}
                <div className="chips" style={{ gap: "4px" }}>
                  {(["walking", "motorcycle", "driving-car"] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      className={`chip ${commuteMode === m ? "selected" : ""}`}
                      style={{ minHeight: "28px", padding: "2px 8px", fontSize: "11px" }}
                      onClick={() => setCommuteMode(m)}
                    >
                      {m === "walking" ? "🚶 Jalan Kaki" : m === "motorcycle" ? "🛵 Motor" : "🚗 Mobil"}
                    </button>
                  ))}
                </div>

                {/* Sort dropdown */}
                <select
                  className="field-input"
                  style={{ width: "auto", minHeight: "28px", padding: "2px 8px", fontSize: "11px" }}
                  value={sortBy}
                  aria-label="Urutkan Kos"
                  onChange={(e) => setSortBy(e.target.value as "commute" | "price_asc" | "price_desc")}
                >
                  <option value="commute">Waktu Tempuh (Tercepat)</option>
                  <option value="price_asc">Harga (Termurah)</option>
                  <option value="price_desc">Harga (Tertinggi)</option>
                </select>
              </div>

              {/* Gender Filter Chips */}
              <div className="chips" style={{ marginBottom: "10px" }}>
                {(["all", "male", "female"] as const).map((g) => (
                  <button
                    key={g}
                    type="button"
                    className={`chip ${genderFilter === g ? "selected" : ""}`}
                    style={{ minHeight: "28px", padding: "2px 10px", fontSize: "12px" }}
                    onClick={() => setGenderFilter(g)}
                  >
                    {g === "all" ? "Semua Tipe" : g === "male" ? "Putra" : "Putri"}
                  </button>
                ))}
              </div>

              <div style={{ display: "grid", gap: "8px" }}>
                {sortedListings.map((listing) => {
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
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px" }}>
                        <h4 style={{ margin: 0, fontSize: "14px" }}>{listing.name}</h4>
                        <strong style={{ fontSize: "13px", color: "var(--primary)", whiteSpace: "nowrap" }}>
                          {formatRupiah(listing.rentMonthly)}
                        </strong>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "4px 0 6px", flexWrap: "wrap", gap: "4px" }}>
                        <span className="muted" style={{ fontSize: "12px" }}>
                          {listing.area} · {listing.gender === "all" ? "Campur" : listing.gender === "male" ? "Putra" : "Putri"}
                        </span>
                        <span className="commute-pill">
                          {commuteMode === "walking" ? "🚶" : commuteMode === "motorcycle" ? "🛵" : "🚗"}{" "}
                          {listing.commuteMinutes} mnt ({formatDistance(listing.commuteDistanceMeters)})
                        </span>
                      </div>
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
            listings={sortedListings}
            selectedListingId={selectedListing?.id ?? null}
            candidatePoint={candidatePoint}
            destinationPoint={activeDestination}
            onMapClick={handleMapClick}
            onCampusSelect={handleCampusChange}
            onListingSelect={handleSelectListing}
          />
        </main>
      </div>
    </div>
  );
}
