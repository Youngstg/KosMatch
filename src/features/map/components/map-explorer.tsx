"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Bike,
  Building2,
  Bus,
  Calculator,
  Car,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Compass,
  CreditCard,
  Footprints,
  Info,
  Landmark,
  Layers,
  MapPin,
  Moon,
  Navigation,
  Navigation2,
  Pill,
  Scale,
  Share2,
  Shirt,
  Sparkles,
  Star,
  Store,
  Sun,
  Utensils,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { PILOT_CONFIG, type PilotGate, type PilotSpecification } from "@/data/pilot-config";
import { getListingsByCampus, type PilotListing } from "@/data/pilot-listings";
import { getPoisByCampus, POI_CATEGORY_CONFIG } from "@/data/pilot-pois";
import { MapSkeleton } from "./map-skeleton";
import { NeighborhoodProfileCard } from "./neighborhood-profile-card";
import { fetchPointNeighborhoodProfile, type NeighborhoodProfileResult } from "../services/neighborhood-service";
import { evaluatePriceFairness } from "@/domain/analytics/price-fairness";
import {
  calculateAllModesCommute,
  estimateCommuteQuick,
  type CommuteResult,
} from "../services/routing-service";
import type { CommuteMode } from "@/lib/db/types";
import { estimateRoadMeters, formatDistance, haversineMeters } from "@/lib/geo";
import { formatRupiah } from "@/lib/currency";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

function PoiCategoryIcon({
  category,
  size = 14,
  color,
}: {
  readonly category: string;
  readonly size?: number;
  readonly color?: string;
}) {
  switch (category) {
    case "food":
      return <UtensilsCrossed size={size} color={color} />;
    case "laundry":
      return <Shirt size={size} color={color} />;
    case "convenience":
      return <Store size={size} color={color} />;
    case "pharmacy":
      return <Pill size={size} color={color} />;
    case "worship":
      return <Landmark size={size} color={color} />;
    case "bus_stop":
      return <Bus size={size} color={color} />;
    case "atm":
      return <CreditCard size={size} color={color} />;
    default:
      return <MapPin size={size} color={color} />;
  }
}

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
    <Link href="/" className="hud-brand" style={{ textDecoration: "none", color: "inherit" }}>
      <KosMatchLogo size={34} />
      <div className="hud-brand-info">
        <span className="hud-brand-title">KosMatch</span>
        <span className="hud-brand-subtitle">Eksplorasi Kampus</span>
      </div>
    </Link>
  );
}

export function MapExplorer() {
  const [selectedCampus, setSelectedCampus] = useState<PilotSpecification>(PILOT_CONFIG.primaryPilot);
  const [selectedGate, setSelectedGate] = useState<PilotGate | null>(PILOT_CONFIG.primaryPilot.gates[0] ?? null);
  const [selectedListing, setSelectedListing] = useState<PilotListing | null>(null);
  const [candidatePoint, setCandidatePoint] = useState<{ latitude: number; longitude: number } | null>(null);
  const [genderFilter, setGenderFilter] = useState<"all" | "male" | "female">("all");
  const [commuteMode, setCommuteMode] = useState<CommuteMode>("walking");
  const [sortBy, setSortBy] = useState<"commute" | "price_asc" | "price_desc">("commute");
  const [radiusMeters, setRadiusMeters] = useState<number>(800);

  // New Pergamum & Apple Maps Interactive States
  const [mapTheme, setMapTheme] = useState<"dark" | "light">("dark");
  const [isHudCollapsed, setIsHudCollapsed] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedPoiCategories, setSelectedPoiCategories] = useState<string[]>(
    () => [...selectedCampus.priorityPoiCategories]
  );
  const [mobileDrawerState, setMobileDrawerState] = useState<"peek" | "expanded">("peek");
  const [mobileActiveTab, setMobileActiveTab] = useState<"detail" | "route" | "amenities">("detail");
  const [mobileCampusPickerOpen, setMobileCampusPickerOpen] = useState<boolean>(false);

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

  // Curated pilot POIs for the active campus
  const campusPois = useMemo(() => {
    return getPoisByCampus(selectedCampus.campusId);
  }, [selectedCampus.campusId]);

  // Filter listings based on campus, gender, and optional category/price chip
  const campusListings = getListingsByCampus(selectedCampus.campusId);
  const filteredListings = useMemo(() => {
    return campusListings.filter((l) => {
      if (genderFilter !== "all" && l.gender !== genderFilter && l.gender !== "all") {
        return false;
      }
      if (activeCategory === "cheap" && l.rentMonthly > 1_500_000) {
        return false;
      }
      if (activeCategory === "female" && l.gender !== "female") {
        return false;
      }
      if (activeCategory === "km_dalam" && !l.facilityCodes.includes("bathroom_inside")) {
        return false;
      }
      if (activeCategory === "wifi" && !l.facilityCodes.includes("wifi")) {
        return false;
      }
      return true;
    });
  }, [campusListings, genderFilter, activeCategory]);

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
    setMobileCampusPickerOpen(false);
    setSelectedPoiCategories([...pilot.priorityPoiCategories]);
  };

  const handleTogglePoiCategory = (catKey: string) => {
    setSelectedPoiCategories((prev) =>
      prev.includes(catKey) ? prev.filter((k) => k !== catKey) : [...prev, catKey]
    );
  };

  const handleSelectAllPoiCategories = () => {
    setSelectedPoiCategories([...selectedCampus.priorityPoiCategories]);
  };

  const handleClearAllPoiCategories = () => {
    setSelectedPoiCategories([]);
  };

  const handleSelectListing = (listing: PilotListing) => {
    setSelectedListing(listing);
    setCandidatePoint(listing.coordinates);
    setLoadingProfile(true);
    setLoadingCommute(true);
    setMobileDrawerState("expanded");
  };

  const handleMapClick = (coords: { latitude: number; longitude: number }) => {
    setCandidatePoint(coords);
    setSelectedListing(null);
    setLoadingProfile(true);
    setLoadingCommute(true);
    setMobileDrawerState("expanded");
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
    <div className={`map-explorer-container theme-${mapTheme}`}>
      {/* =========================================================================
          1. FLOATING TOPBAR (Desktop & Mobile - Pergamum University Style)
      ========================================================================== */}
      <header className="hud-floating-topbar desktop-only">
        <div className="hud-topbar-inner">
          <div className="hud-topbar-left">
            <Brand />
            <span className="hud-pilot-pill">
              {selectedCampus.city} · {selectedCampus.radiusKm} km
            </span>
          </div>

          {/* Desktop Center Navigation Pills (Image 1 Style) */}
          <nav className="hud-topbar-nav" aria-label="Navigasi Utama">
            <Link href="/explore" className="hud-nav-link active">
              <span className="hud-nav-indicator" /> Eksplorasi
            </Link>
            <Link href="/#calculator" className="hud-nav-link">
              Kalkulator DSS
            </Link>
            <Link href="/methodology" className="hud-nav-link">
              Metodologi
            </Link>
          </nav>

          {/* Topbar Actions */}
          <div className="hud-topbar-right">
            {/* Theme Toggle Button (Dark HUD vs Light City) */}
            <button
              type="button"
              className="hud-btn-icon"
              title={mapTheme === "dark" ? "Ganti ke Mode Terang (Apple Maps)" : "Ganti ke Mode Gelap (Pergamum HUD)"}
              aria-label="Ganti Tema Peta"
              onClick={() => setMapTheme(mapTheme === "dark" ? "light" : "dark")}
            >
              {mapTheme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* Sidebar HUD Toggle for Desktop */}
            <button
              type="button"
              className={`hud-btn-icon desktop-only ${!isHudCollapsed ? "active" : ""}`}
              title={isHudCollapsed ? "Buka Panel Filter" : "Sembunyikan Panel (Layar Penuh)"}
              aria-label="Toggle Panel Filter"
              onClick={() => setIsHudCollapsed(!isHudCollapsed)}
            >
              <Layers size={17} />
            </button>

            {/* Account / Home Link */}
            <Link href="/" className="hud-btn-ghost desktop-only">
              <ArrowLeft size={15} /> Beranda
            </Link>

            {/* Primary Action Button */}
            <Link href="/#calculator" className="hud-btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <Calculator size={15} /> Buka Kalkulator DSS
            </Link>
          </div>
        </div>
      </header>

      {/* =========================================================================
          2. MOBILE FLOATING CONTROLS (Image 2 - Apple Maps City Explorer Style)
      ========================================================================== */}
      <div className="mobile-floating-controls mobile-only">
        {/* Mobile Campus Selector Floating Pill */}
        <div className="mobile-search-pill">
          <button
            type="button"
            className="mobile-campus-trigger"
            aria-label="Pilih Kampus"
            aria-expanded={mobileCampusPickerOpen}
            onClick={() => setMobileCampusPickerOpen(!mobileCampusPickerOpen)}
          >
            <MapPin size={16} className="text-accent" />
            <span className="mobile-campus-name">
              {selectedCampus.campusName.split(" (")[0]}
            </span>
            <ChevronDown size={14} className="mobile-campus-arrow" />
          </button>

          {selectedGate && (
            <span className="mobile-gate-badge" title={selectedGate.name}>
              {selectedGate.shortLabel}
            </span>
          )}

          <div className="mobile-pill-actions">
            <button
              type="button"
              className="mobile-pill-btn"
              aria-label="Ganti Tema"
              onClick={() => setMapTheme(mapTheme === "dark" ? "light" : "dark")}
            >
              {mapTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <Link href="/" className="mobile-pill-btn" aria-label="Kembali ke Beranda">
              <ArrowLeft size={15} />
            </Link>
          </div>
        </div>

        {/* Mobile Campus Picker Dropdown Modal */}
        {mobileCampusPickerOpen && (
          <div className="mobile-campus-dropdown-overlay" onClick={() => setMobileCampusPickerOpen(false)}>
            <div className="mobile-campus-dropdown" onClick={(e) => e.stopPropagation()}>
              <div className="mobile-dropdown-header">
                <strong>Pilih Kampus Pilot</strong>
                <button type="button" onClick={() => setMobileCampusPickerOpen(false)} aria-label="Tutup">
                  <X size={16} />
                </button>
              </div>
              <div className="mobile-dropdown-list">
                {PILOT_CONFIG.allPilots.map((pilot) => (
                  <button
                    key={pilot.id}
                    type="button"
                    className={`mobile-dropdown-item ${pilot.id === selectedCampus.id ? "selected" : ""}`}
                    onClick={() => handleCampusChange(pilot)}
                  >
                    <div>
                      <strong>{pilot.campusName}</strong>
                      <small>{pilot.city} · Radius {pilot.radiusKm} km</small>
                    </div>
                    {pilot.id === selectedCampus.id && <span className="selected-dot" />}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Horizontal Category Filter Chips */}
        <div className="mobile-category-scroll">
          <button
            type="button"
            className={`mobile-chip ${selectedPoiCategories.length === selectedCampus.priorityPoiCategories.length ? "active" : ""}`}
            onClick={
              selectedPoiCategories.length === selectedCampus.priorityPoiCategories.length
                ? handleClearAllPoiCategories
                : handleSelectAllPoiCategories
            }
          >
            {selectedPoiCategories.length === selectedCampus.priorityPoiCategories.length ? "Semua Aktif" : "Pilih Semua"}
          </button>
          {selectedCampus.priorityPoiCategories.map((catKey) => {
            const config = POI_CATEGORY_CONFIG[catKey];
            if (!config) return null;
            const isChecked = selectedPoiCategories.includes(catKey);
            return (
              <button
                key={catKey}
                type="button"
                className={`mobile-chip ${isChecked ? "active" : ""}`}
                style={
                  isChecked
                    ? {
                        background: config.color,
                        borderColor: config.color,
                        color: "#FFFFFF",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }
                    : {
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                      }
                }
                onClick={() => handleTogglePoiCategory(catKey)}
              >
                {isChecked ? (
                  <Check size={12} strokeWidth={2.5} color="#FFFFFF" />
                ) : (
                  <PoiCategoryIcon category={catKey} size={12} color={config.color} />
                )}
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          3. MAIN VIEWPORT: FULL-BLEED MAP CANVAS
      ========================================================================== */}
      <main className="hud-map-viewport">
        <MapCanvas
          selectedCampus={selectedCampus}
          listings={sortedListings}
          selectedListingId={selectedListing?.id ?? null}
          candidatePoint={candidatePoint}
          destinationPoint={activeDestination}
          pois={campusPois}
          activePoiCategory={activeCategory}
          activePoiCategories={selectedPoiCategories}
          theme={mapTheme}
          onMapClick={handleMapClick}
          onCampusSelect={handleCampusChange}
          onListingSelect={handleSelectListing}
        />

        {/* Floating Map Disclaimer & Pilot Radius Claim Overlay */}
        <div className="hud-map-disclaimer-overlay" role="note" aria-label="Informasi radius survei pilot dan peta dasar">
          <div className="hud-map-disclaimer-pill">
            <span className="hud-dashed-radius-badge" aria-hidden="true" />
            <span className="hud-map-disclaimer-text">
              Peta dasar CARTO/OSM · Radius survei <strong>{selectedCampus.radiusKm} km</strong> ({selectedCampus.shortName})
            </span>
          </div>
        </div>
      </main>

      {/* =========================================================================
          4. DESKTOP FLOATING LEFT HUD RAIL (Image 1 - Pergamum University Rail)
      ========================================================================== */}
      <aside className={`hud-floating-rail desktop-only ${isHudCollapsed ? "collapsed" : ""}`}>
        {/* Toggle Collapse Chevron Tab */}
        <button
          type="button"
          className="hud-rail-toggle-tab"
          aria-label={isHudCollapsed ? "Buka Panel HUD" : "Tutup Panel HUD"}
          onClick={() => setIsHudCollapsed(!isHudCollapsed)}
        >
          {isHudCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>

        <div className="hud-rail-content">
          {/* Header & Eyebrow */}
          <div className="hud-rail-header">
            <span className="hud-rail-eyebrow">PILOT KAMPUS • LINGKUNGAN</span>
            <h1 className="hud-rail-title">Eksplorasi Area Kampus</h1>
            <p className="hud-rail-desc">
              Pilih kampus pilot, jelajahi pin kos terverifikasi, atau klik peta untuk menganalisis waktu tempuh dan fasilitas.
            </p>
          </div>

          {/* Campus Switcher Pills */}
          <fieldset className="fieldset-reset hud-section">
            <legend className="hud-section-label">Pilih Kampus Pilot</legend>
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
            <fieldset className="fieldset-reset hud-section">
              <legend className="hud-section-label">
                <Navigation size={13} className="text-accent" /> Titik Tujuan / Gerbang Kampus:
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
          <article className="panel hud-campus-panel">
            <div className="hud-panel-head">
              <h2>{selectedCampus.campusName}</h2>
              <span className="badge good">{selectedCampus.city}</span>
            </div>
            <p className="muted" style={{ fontSize: "13px", lineHeight: "1.5", margin: "0 0 10px" }}>
              {selectedCampus.targetAudience}
            </p>
            <div className="summary-strip" style={{ gridTemplateColumns: "1fr 1fr", gap: "8px", margin: "0 0 10px" }}>
              <div className="summary-item" style={{ padding: "8px 12px" }}>
                <span className="muted" style={{ fontSize: "11px" }}>Radius Pilot</span>
                <strong style={{ fontSize: "16px" }}>{selectedCampus.radiusKm} km</strong>
              </div>
              <div className="summary-item" style={{ padding: "8px 12px" }}>
                <span className="muted" style={{ fontSize: "11px" }}>Kos Terverifikasi</span>
                <strong style={{ fontSize: "16px" }}>{campusListings.length} listing</strong>
              </div>
            </div>
          </article>

          {/* Amenity Categories Rail (Legend & Filter for Map POIs) */}
          <div className="hud-category-rail">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <div>
                <span className="hud-section-label" style={{ margin: 0 }}>Filter Fasilitas di Peta</span>
                <span className="muted" style={{ fontSize: "11px", display: "block" }}>
                  Centang untuk menampilkan di peta
                </span>
              </div>
              <div style={{ display: "flex", gap: "8px", fontSize: "11px" }}>
                <button
                  type="button"
                  style={{ color: "var(--primary)", background: "transparent", border: 0, cursor: "pointer", fontWeight: 750, padding: 0 }}
                  onClick={handleSelectAllPoiCategories}
                >
                  Pilih Semua
                </button>
                <span style={{ color: "var(--text-muted)" }}>·</span>
                <button
                  type="button"
                  style={{ color: "var(--text-muted)", background: "transparent", border: 0, cursor: "pointer", padding: 0 }}
                  onClick={handleClearAllPoiCategories}
                >
                  Bersihkan
                </button>
              </div>
            </div>
            <div className="hud-category-list">
              {selectedCampus.priorityPoiCategories.map((catKey) => {
                const config = POI_CATEGORY_CONFIG[catKey] ?? {
                  label: catKey,
                  color: "#9CA3AF",
                  bgLight: "rgba(156, 163, 175, 0.2)",
                  iconSymbol: "",
                };
                const count = campusPois.filter((p) => p.category === catKey).length;
                const isChecked = selectedPoiCategories.includes(catKey);
                return (
                  <label
                    key={catKey}
                    className={`hud-category-item ${isChecked ? "active" : ""}`}
                    style={
                      isChecked
                        ? {
                            borderColor: config.color,
                            backgroundColor: config.bgLight,
                          }
                        : undefined
                    }
                    title={`Klik untuk ${isChecked ? "menyembunyikan" : "menampilkan"} titik ${config.label} di peta`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleTogglePoiCategory(catKey)}
                      className="sr-only"
                    />
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <span
                        className={`hud-custom-checkbox ${isChecked ? "checked" : ""}`}
                        style={
                          isChecked
                            ? { backgroundColor: config.color, borderColor: config.color }
                            : undefined
                        }
                        aria-hidden="true"
                      >
                        {isChecked && <Check size={11} strokeWidth={3} color="#FFFFFF" />}
                      </span>
                      <span
                        className="hud-category-icon-pill"
                        style={{
                          backgroundColor: isChecked ? "rgba(255, 255, 255, 0.85)" : "var(--surface-subtle)",
                          color: config.color,
                        }}
                      >
                        <PoiCategoryIcon category={catKey} size={13} color={config.color} />
                      </span>
                      <span className="hud-category-name" style={{ fontWeight: isChecked ? 700 : 500 }}>
                        {config.label}
                      </span>
                    </div>
                    <span
                      className={`hud-category-count-badge ${isChecked ? "active" : ""}`}
                      style={
                        isChecked
                          ? { backgroundColor: "rgba(255, 255, 255, 0.85)", color: config.color, fontWeight: 750 }
                          : undefined
                      }
                    >
                      {count} titik
                    </span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Verified Kos Listings Section & Filter */}
          <section className="hud-section">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
              <h3 style={{ fontSize: "15px", margin: 0, fontWeight: 800 }}>
                Kos Terverifikasi ({sortedListings.length})
              </h3>
            </div>

            {/* Commute Mode & Sorting Controls */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
              <div className="chips" style={{ gap: "4px" }}>
                {(["walking", "motorcycle", "driving-car"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    className={`chip ${commuteMode === m ? "selected" : ""}`}
                    style={{ minHeight: "28px", padding: "2px 8px", fontSize: "11px", display: "inline-flex", alignItems: "center", gap: "5px" }}
                    onClick={() => setCommuteMode(m)}
                  >
                    {m === "walking" ? (
                      <Footprints size={13} />
                    ) : m === "motorcycle" ? (
                      <Bike size={13} />
                    ) : (
                      <Car size={13} />
                    )}
                    <span>{m === "walking" ? "Jalan Kaki" : m === "motorcycle" ? "Motor" : "Mobil"}</span>
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <select
                className="field-input hud-select"
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

            {/* Listings Grid */}
            <div style={{ display: "grid", gap: "8px" }}>
              {sortedListings.map((listing) => {
                const isSelected = selectedListing?.id === listing.id;
                return (
                  <article
                    key={listing.id}
                    className={`panel hud-listing-card ${isSelected ? "selected" : ""}`}
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
                      <span className="commute-pill" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                        {commuteMode === "walking" ? (
                          <Footprints size={12} />
                        ) : commuteMode === "motorcycle" ? (
                          <Bike size={12} />
                        ) : (
                          <Car size={12} />
                        )}
                        <span>
                          {listing.commuteMinutes} mnt ({formatDistance(listing.commuteDistanceMeters)})
                        </span>
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
                    <span className={`badge ${evaluatePriceFairness(selectedListing.rentMonthly, selectedListing.campusId, selectedListing.area, selectedListing.facilityCodes.includes("ac"), selectedListing.facilityCodes.includes("bathroom_inside")).badgeColorClass}`}>
                      {evaluatePriceFairness(selectedListing.rentMonthly, selectedListing.campusId, selectedListing.area, selectedListing.facilityCodes.includes("ac"), selectedListing.facilityCodes.includes("bathroom_inside")).statusLabel}
                    </span>
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
                          background: commuteMode === "walking" ? "rgba(245, 158, 11, 0.15)" : "var(--surface)",
                          border: commuteMode === "walking" ? "1px solid var(--primary)" : "1px solid var(--border)",
                        }}
                      >
                        <div style={{ fontSize: "11px", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                          <Footprints size={12} /> Jalan Kaki
                        </div>
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
                          background: commuteMode === "motorcycle" ? "rgba(245, 158, 11, 0.15)" : "var(--surface)",
                          border: commuteMode === "motorcycle" ? "1px solid var(--primary)" : "1px solid var(--border)",
                        }}
                      >
                        <div style={{ fontSize: "11px", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                          <Bike size={12} /> Motor
                        </div>
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
                          background: commuteMode === "driving-car" ? "rgba(245, 158, 11, 0.15)" : "var(--surface)",
                          border: commuteMode === "driving-car" ? "1px solid var(--primary)" : "1px solid var(--border)",
                        }}
                      >
                        <div style={{ fontSize: "11px", color: "var(--text-muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}>
                          <Car size={12} /> Mobil
                        </div>
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
            campusId={selectedCampus.id}
            area={selectedListing?.area ?? ""}
          />

          {/* Prominent Pilot Radius & Basemap Claim Card */}
          <div className="hud-disclaimer-card" role="note" aria-label="Klaim peta dasar dan radius pilot">
            <div className="hud-disclaimer-card-header">
              <span className="hud-dashed-radius-badge" aria-hidden="true" />
              <strong>Radius Survei Pilot {selectedCampus.radiusKm} km</strong>
            </div>
            <div className="hud-disclaimer-card-content">
              <Info size={14} className="hud-info-icon" />
              <p className="hud-disclaimer-card-text">
                Peta dasar didukung <strong>OpenStreetMap/CARTO</strong>. Area putus-putus menandai radius survei <strong>{selectedCampus.radiusKm} km</strong> di sekitar kampus <span className="campus-highlight-chip">{selectedCampus.shortName}</span>.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          5. DESKTOP BOTTOM FLOATING TRAY (Image 1 - "Saint's Dark Coffee" HUD Card)
      ========================================================================== */}
      {activePoint && selectedListing && (
        <div className="hud-desktop-bottom-tray desktop-only">
          <div className="hud-bottom-card">
            <div className="hud-bottom-thumb">
              <Building2 size={24} />
            </div>
            <div className="hud-bottom-info">
              <div className="hud-bottom-title-row">
                <strong>{selectedListing.name}</strong>
                <span className="badge good">{formatRupiah(selectedListing.rentMonthly)}/bln</span>
                <span className={`badge ${evaluatePriceFairness(selectedListing.rentMonthly, selectedListing.campusId, selectedListing.area, selectedListing.facilityCodes.includes("ac"), selectedListing.facilityCodes.includes("bathroom_inside")).badgeColorClass}`}>
                  {evaluatePriceFairness(selectedListing.rentMonthly, selectedListing.campusId, selectedListing.area, selectedListing.facilityCodes.includes("ac"), selectedListing.facilityCodes.includes("bathroom_inside")).statusLabel}
                </span>
              </div>
              <div className="hud-bottom-meta">
                <span>{selectedListing.area} · {selectedListing.gender === "all" ? "Campur" : selectedListing.gender === "male" ? "Putra" : "Putri"}</span>
                {displayedCommute && (
                  <span className="hud-bottom-commute" style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
                    <Bike size={13} color="var(--primary)" />
                    <span>{displayedCommute.motorcycle.minutes} mnt ({formatDistance(displayedCommute.motorcycle.distanceMeters)}) ke {activeDestination.name}</span>
                  </span>
                )}
              </div>
            </div>
            <div className="hud-bottom-actions">
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => {
                  setSelectedListing(null);
                  setCandidatePoint(null);
                }}
              >
                Tutup
              </button>
              <Link href="/#calculator" className="btn btn-primary btn-sm" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <Calculator size={14} /> Buka di Kalkulator DSS
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          6. MOBILE BOTTOM SHEET DRAWER (Image 2 - Apple Maps City Explorer)
      ========================================================================== */}
      <div className={`mobile-bottom-sheet mobile-only ${mobileDrawerState}`}>
        {/* Drag Handle Bar */}
        <div
          className="mobile-sheet-handle-bar"
          onClick={() => setMobileDrawerState(mobileDrawerState === "peek" ? "expanded" : "peek")}
        >
          <div className="mobile-sheet-pill" />
        </div>

        {/* Peek Summary View */}
        {mobileDrawerState === "peek" ? (
          <div
            className="mobile-sheet-peek-content"
            onClick={() => setMobileDrawerState("expanded")}
          >
            {selectedListing ? (
              <div className="mobile-peek-listing">
                <div>
                  <h3 className="mobile-peek-title">{selectedListing.name}</h3>
                  <div className="mobile-peek-subtitle">
                    {selectedListing.area} · <strong className="text-accent">{formatRupiah(selectedListing.rentMonthly)}</strong>
                  </div>
                </div>
                <div className="mobile-peek-right">
                  <span className="commute-pill" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    {commuteMode === "walking" ? <Footprints size={12} /> : commuteMode === "motorcycle" ? <Bike size={12} /> : <Car size={12} />}
                    <span>{sortedListings.find((l) => l.id === selectedListing.id)?.commuteMinutes ?? 12} mnt</span>
                  </span>
                  <ChevronUp size={16} className="text-muted" />
                </div>
              </div>
            ) : (
              <div className="mobile-peek-explore">
                <div>
                  <h3 className="mobile-peek-title">Eksplorasi Area Kampus</h3>
                  <span className="text-muted" style={{ fontSize: "12px" }}>
                    {sortedListings.length} kos terverifikasi · Ketuk untuk rute & fasilitas
                  </span>
                </div>
                <button type="button" className="btn btn-primary btn-sm">
                  Daftar Kos <ChevronUp size={14} />
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Expanded Detail View (Screens 2 & 3 in Image 2) */
          <div className="mobile-sheet-expanded-content">
            {/* Sheet Tabs */}
            <div className="mobile-sheet-nav-tabs">
              <button
                type="button"
                className={`mobile-sheet-tab ${mobileActiveTab === "detail" ? "active" : ""}`}
                onClick={() => setMobileActiveTab("detail")}
              >
                Informasi Kos
              </button>
              <button
                type="button"
                className={`mobile-sheet-tab ${mobileActiveTab === "route" ? "active" : ""}`}
                onClick={() => setMobileActiveTab("route")}
              >
                Rute Tempuh
              </button>
              <button
                type="button"
                className={`mobile-sheet-tab ${mobileActiveTab === "amenities" ? "active" : ""}`}
                onClick={() => setMobileActiveTab("amenities")}
              >
                Fasilitas Sekitar
              </button>
            </div>

            <div className="mobile-sheet-scrollable-body">
              {/* TAB 1: Detail Kos (Image 2 Screen 2) */}
              {mobileActiveTab === "detail" && (
                <div>
                  {selectedListing ? (
                    <div>
                      <div className="mobile-detail-header">
                        <div>
                          <h2 className="mobile-detail-title">{selectedListing.name}</h2>
                          <div className="mobile-detail-rating">
                            <Star size={14} className="text-amber-500 fill-amber-500" />
                            <strong>4.8</strong>
                            <span className="text-muted">· Sangat Strategis · {selectedListing.area}</span>
                          </div>
                        </div>
                        <div className="mobile-detail-price">
                          <strong>{formatRupiah(selectedListing.rentMonthly)}</strong>
                          <small>/ bulan</small>
                          <span className={`badge ${evaluatePriceFairness(selectedListing.rentMonthly, selectedListing.campusId, selectedListing.area, selectedListing.facilityCodes.includes("ac"), selectedListing.facilityCodes.includes("bathroom_inside")).badgeColorClass}`} style={{ fontSize: "10px", marginTop: "2px" }}>
                            {evaluatePriceFairness(selectedListing.rentMonthly, selectedListing.campusId, selectedListing.area, selectedListing.facilityCodes.includes("ac"), selectedListing.facilityCodes.includes("bathroom_inside")).statusLabel}
                          </span>
                        </div>
                      </div>

                      {/* 3 Visual Thumbnail Cards (Image 2 Screen 2 style) */}
                      <div className="mobile-photo-grid">
                        <div className="mobile-photo-card">
                          <Building2 size={24} className="text-accent" />
                          <span>Kamar Single</span>
                        </div>
                        <div className="mobile-photo-card">
                          <Sparkles size={24} className="text-amber-500" />
                          <span>{selectedListing.facilityCodes.includes("bathroom_inside") ? "KM Dalam" : "KM Luar Bersih"}</span>
                        </div>
                        <div className="mobile-photo-card">
                          <Compass size={24} className="text-blue-500" />
                          <span>Dekat Kampus</span>
                        </div>
                      </div>

                      {/* Action Pill Buttons (Directions, Amenities, DSS, Share) */}
                      <div className="mobile-action-pills">
                        <button
                          type="button"
                          className="mobile-action-pill"
                          onClick={() => setMobileActiveTab("route")}
                        >
                          <Navigation size={16} /> Rute
                        </button>
                        <button
                          type="button"
                          className="mobile-action-pill"
                          onClick={() => setMobileActiveTab("amenities")}
                        >
                          <Utensils size={16} /> Fasilitas
                        </button>
                        <Link href="/#calculator" className="mobile-action-pill highlight">
                          <Calculator size={16} /> Kalkulator DSS
                        </Link>
                        <button
                          type="button"
                          className="mobile-action-pill"
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({
                                title: selectedListing.name,
                                text: `Cek kos ${selectedListing.name} di KosMatch!`,
                                url: window.location.href,
                              }).catch(() => {});
                            }
                          }}
                        >
                          <Share2 size={16} /> Bagikan
                        </button>
                      </div>

                      {/* Description & Facilities */}
                      <div className="mobile-section">
                        <h4 className="mobile-section-title">Fasilitas Kamar</h4>
                        <div className="badges">
                          {selectedListing.facilityCodes.map((f) => (
                            <span key={f} className="badge">
                              {f === "bathroom_inside" ? "Kamar Mandi Dalam" : f === "wifi" ? "WiFi Cepat" : f === "ac" ? "AC" : f}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mobile-section">
                        <h4 className="mobile-section-title">Catatan Lingkungan</h4>
                        <p className="muted" style={{ fontSize: "13px", lineHeight: "1.5", margin: 0 }}>
                          {selectedListing.notes}
                        </p>
                      </div>
                    </div>
                  ) : (
                    /* If no listing selected, show list of verified kos */
                    <div>
                      <h4 className="mobile-section-title">Pilih Kos untuk Melihat Detail</h4>
                      <div style={{ display: "grid", gap: "8px" }}>
                        {sortedListings.map((l) => (
                          <div
                            key={l.id}
                            className="mobile-listing-item"
                            onClick={() => handleSelectListing(l)}
                          >
                            <div>
                              <strong>{l.name}</strong>
                              <div className="text-muted" style={{ fontSize: "12px" }}>
                                {l.area} · {formatRupiah(l.rentMonthly)}
                              </div>
                            </div>
                            <span className="commute-pill" style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
                              <Bike size={11} />
                              <span>{l.commuteMinutes} mnt</span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: Rute & Transportasi (Image 2 Screen 3) */}
              {mobileActiveTab === "route" && (
                <div className="mobile-route-card">
                  <div className="mobile-route-points">
                    <div className="mobile-point-row">
                      <span className="point-dot origin" />
                      <span>{selectedListing ? selectedListing.name : "Titik Kos Terpilih"}</span>
                    </div>
                    <div className="mobile-point-row">
                      <span className="point-dot destination" />
                      <strong>{activeDestination.name}</strong>
                    </div>
                  </div>

                  {/* Mode Selector Tabs (Walking, Motorcycle, Car) */}
                  <div className="mobile-mode-selector">
                    <button
                      type="button"
                      className={`mobile-mode-btn ${commuteMode === "walking" ? "active" : ""}`}
                      onClick={() => setCommuteMode("walking")}
                    >
                      <Footprints size={16} />
                      <span>{displayedCommute ? `${displayedCommute.walking.minutes} mnt` : "Jalan"}</span>
                    </button>
                    <button
                      type="button"
                      className={`mobile-mode-btn ${commuteMode === "motorcycle" ? "active" : ""}`}
                      onClick={() => setCommuteMode("motorcycle")}
                    >
                      <Bike size={16} />
                      <span>{displayedCommute ? `${displayedCommute.motorcycle.minutes} mnt` : "Motor"}</span>
                    </button>
                    <button
                      type="button"
                      className={`mobile-mode-btn ${commuteMode === "driving-car" ? "active" : ""}`}
                      onClick={() => setCommuteMode("driving-car")}
                    >
                      <Car size={16} />
                      <span>{displayedCommute ? `${displayedCommute["driving-car"].minutes} mnt` : "Mobil"}</span>
                    </button>
                  </div>

                  {/* Route Summary Banner */}
                  <div className="mobile-route-banner">
                    <span className="badge good">Rute Tercepat</span>
                    <strong style={{ fontSize: "16px" }}>
                      {displayedCommute ? `${displayedCommute.motorcycle.minutes} Menit` : "±4 Menit"}
                    </strong>
                    <span className="text-muted" style={{ fontSize: "12px" }}>
                      {straightMeters ? `Jarak ${formatDistance(straightMeters)}` : "Estimasi lalu lintas lancar"}
                    </span>
                  </div>

                  {/* Gate Switcher for Mobile */}
                  {selectedCampus.gates.length > 0 && (
                    <div style={{ marginTop: "12px" }}>
                      <span className="text-muted" style={{ fontSize: "12px", display: "block", marginBottom: "6px" }}>
                        Pilih Gerbang Kampus Tujuan:
                      </span>
                      <div className="chips" style={{ gap: "6px" }}>
                        {selectedCampus.gates.map((g) => (
                          <button
                            key={g.id}
                            type="button"
                            className={`chip ${selectedGate?.id === g.id ? "selected" : ""}`}
                            style={{ minHeight: "28px", padding: "2px 8px", fontSize: "11px" }}
                            onClick={() => {
                              setSelectedGate(g);
                              if (activePoint) setLoadingCommute(true);
                            }}
                          >
                            {g.shortLabel}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: Profil Fasilitas Lingkungan */}
              {mobileActiveTab === "amenities" && (
                <div>
                  <NeighborhoodProfileCard
                    profile={displayedProfile}
                    loading={loadingProfile}
                    currentRadiusMeters={radiusMeters}
                    onRadiusChange={handleRadiusChange}
                    campusId={selectedCampus.id}
                    area={selectedListing?.area ?? ""}
                  />
                </div>
              )}

              {/* Mobile Pilot Radius & Basemap Claim Card */}
              <div className="hud-disclaimer-card mobile-disclaimer-card" role="note" aria-label="Klaim peta dasar dan radius pilot">
                <div className="hud-disclaimer-card-header">
                  <span className="hud-dashed-radius-badge" aria-hidden="true" />
                  <strong>Radius Survei Pilot {selectedCampus.radiusKm} km</strong>
                </div>
                <p className="hud-disclaimer-card-text">
                  Peta dasar didukung <strong>OpenStreetMap/CARTO</strong>. Area putus-putus menandai zona survei pilot {selectedCampus.radiusKm} km sekitar kampus <span className="campus-highlight-chip">{selectedCampus.shortName}</span>.
                </p>
              </div>
            </div>

            {/* Mobile Sheet Fixed Footer CTA */}
            <div className="mobile-sheet-footer">
              <Link href="/#calculator" className="btn btn-primary" style={{ width: "100%", display: "inline-flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                <Calculator size={16} /> Buka Kalkulator DSS &amp; Simulasi Biaya
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
