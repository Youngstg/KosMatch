"use client";

import React from "react";
import {
  Building2,
  Check,
  Sparkles,
  Tag,
  X,
} from "lucide-react";
import type { SemanticSearchResult } from "@/domain/search/semantic-search";
import type { PilotSpecification } from "@/data/pilot-config";
import { formatRupiah } from "@/lib/currency";

export interface SemanticSearchBarProps {
  readonly query: string;
  readonly onQueryChange: (query: string) => void;
  readonly searchResult: SemanticSearchResult | null;
  readonly detectedCampus: PilotSpecification | null;
  readonly onSwitchCampus?: (campus: PilotSpecification) => void;
  readonly placeholder?: string;
  readonly compact?: boolean;
}

const QUICK_PROMPTS = [
  { label: "Putri AC ≤ 1.2jt", query: "kos putri ac budget 1.2jt" },
  { label: "KM Dalam & WiFi", query: "kos km dalam wifi" },
  { label: "Hemat ≤ 1jt", query: "kos murah di bawah 1jt" },
  { label: "Dekat Kampus", query: "kos dekat jalan kaki kampus" },
  { label: "Bebas Jam Malam", query: "kos 24 jam bebas jam malam" },
  { label: "Lingkungan Tenang", query: "kos tenang adem" },
] as const;

export function SemanticSearchBar({
  query,
  onQueryChange,
  searchResult,
  detectedCampus,
  onSwitchCampus,
  placeholder = "Cari bahasa alami: 'putri ac < 1.2jt tenang'...",
  compact = false,
}: SemanticSearchBarProps) {
  const filter = searchResult?.parsedFilter;
  const hasExtractedEntities = Boolean(
    filter &&
      (filter.gender ||
        filter.maxRentMonthly ||
        filter.requiredFacilityCodes.length > 0 ||
        filter.detectedArea ||
        filter.quietPreferred ||
        filter.access24hPreferred ||
        filter.preferCheap)
  );

  return (
    <div className={`semantic-search-wrapper ${compact ? "compact" : ""}`} role="search">
      {/* Search Input Box */}
      <div className="semantic-input-container">
        <span className="semantic-search-icon" aria-hidden="true">
          <Sparkles size={16} />
        </span>
        <input
          type="text"
          className="semantic-search-input"
          placeholder={placeholder}
          value={query}
          aria-label="Pencarian semantik kos bahasa alami"
          onChange={(e) => onQueryChange(e.target.value)}
        />
        {query ? (
          <button
            type="button"
            className="semantic-clear-btn"
            aria-label="Hapus kata kunci pencarian"
            onClick={() => onQueryChange("")}
          >
            <X size={15} />
          </button>
        ) : (
          <span className="semantic-badge-nlp" title="Natural Language Processing Aktif">
            NLP
          </span>
        )}
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="semantic-prompt-chips" aria-label="Saran pencarian cepat">
        {QUICK_PROMPTS.map((p) => {
          const isActive = query.trim().toLowerCase() === p.query.toLowerCase();
          return (
            <button
              key={p.label}
              type="button"
              className={`semantic-chip ${isActive ? "active" : ""}`}
              onClick={() => onQueryChange(isActive ? "" : p.query)}
              aria-pressed={isActive}
            >
              <Sparkles size={11} className="chip-sparkle" />
              <span>{p.label}</span>
            </button>
          );
        })}
      </div>

      {/* Transparent NLP Entity Extraction Feedback */}
      {hasExtractedEntities && filter && (
        <div className="semantic-entities-panel" aria-live="polite">
          <div className="entities-title-row">
            <Tag size={12} className="text-accent" />
            <span className="entities-title">Entitas & Kriteria Terdeteksi:</span>
          </div>
          <div className="entities-badges">
            {filter.gender && (
              <span className="entity-badge gender">
                Tipe: {filter.gender === "female" ? "Putri" : filter.gender === "male" ? "Putra" : "Campur"}
              </span>
            )}
            {filter.maxRentMonthly && (
              <span className="entity-badge budget">
                Maks: {formatRupiah(filter.maxRentMonthly)}
              </span>
            )}
            {filter.detectedArea && (
              <span className="entity-badge area">
                Area: {filter.detectedArea}
              </span>
            )}
            {filter.requiredFacilityCodes.map((fac) => (
              <span key={fac} className="entity-badge facility">
                <Check size={10} strokeWidth={3} /> {fac.replace("_", " ").toUpperCase()}
              </span>
            ))}
            {filter.quietPreferred && (
              <span className="entity-badge vibe">Tenang</span>
            )}
            {filter.access24hPreferred && (
              <span className="entity-badge vibe">Akses 24 Jam</span>
            )}
            {filter.preferCheap && (
              <span className="entity-badge vibe">Ekonomis</span>
            )}
          </div>
        </div>
      )}

      {/* Cross-Campus Detection Switcher Banner */}
      {detectedCampus && onSwitchCampus && (
        <div className="semantic-campus-switch-banner">
          <div className="banner-text">
            <Building2 size={15} className="text-accent" />
            <span>
              Kueri menyebutkan kampus <strong>{detectedCampus.shortName}</strong> ({detectedCampus.city}).
            </span>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-sm switch-campus-btn"
            onClick={() => onSwitchCampus(detectedCampus)}
          >
            Beralih ke {detectedCampus.shortName}
          </button>
        </div>
      )}
    </div>
  );
}
