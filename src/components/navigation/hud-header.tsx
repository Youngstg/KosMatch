"use client";

import React, { type ReactNode } from "react";
import Link from "next/link";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

export type HudHeaderProps = {
  /** Active navigation tab */
  activeTab?: "explore" | "calculator" | null;
  /** Subtitle displayed beneath the KosMatch brand title */
  brandSubtitle?: string;
  /** Custom element placed in the left section next to Brand (e.g. campus pill or project switcher) */
  leftSlot?: ReactNode;
  /** Action buttons / icons placed in the right section */
  rightSlot?: ReactNode;
  /** Child elements default to right section if rightSlot is not provided */
  children?: ReactNode;
  /** Additional CSS class applied to <header> */
  className?: string;
  /** Whether the header is rendered in a skeleton loading state */
  isSkeleton?: boolean;
};

export function HudHeader({
  activeTab = "explore",
  brandSubtitle,
  leftSlot,
  rightSlot,
  children,
  className = "",
  isSkeleton = false,
}: HudHeaderProps) {
  const actions = rightSlot ?? children;

  const resolvedSubtitle =
    brandSubtitle ??
    (activeTab === "explore" ? "Eksplorasi Kampus" : "Kalkulator DSS");

  return (
    <header
      className={`hud-floating-topbar desktop-only ${className}`.trim()}
      aria-hidden={isSkeleton ? "true" : undefined}
    >
      <div className="hud-topbar-inner">
        {/* Left Side: Brand Logo + Titles + Optional Custom Slot */}
        <div className="hud-topbar-left">
          {isSkeleton ? (
            <div className="hud-brand" aria-hidden="true">
              <span
                className="hud-logo skeleton"
                style={{ width: 34, height: 34, borderRadius: 10 }}
              />
              <div className="hud-brand-info">
                <span className="hud-brand-title">KosMatch</span>
                <span className="hud-brand-subtitle">{resolvedSubtitle}</span>
              </div>
            </div>
          ) : (
            <Link
              href="/"
              className="hud-brand"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <KosMatchLogo size={34} />
              <div className="hud-brand-info">
                <span className="hud-brand-title">KosMatch</span>
                <span className="hud-brand-subtitle">{resolvedSubtitle}</span>
              </div>
            </Link>
          )}

          {leftSlot}
        </div>

        {/* Center: Fixed Navigation Pills with Exact Centering */}
        <nav className="hud-topbar-nav" aria-label="Navigasi Utama">
          {isSkeleton ? (
            <>
              <span className={`hud-nav-link ${activeTab === "explore" ? "active" : ""}`}>
                {activeTab === "explore" && <span className="hud-nav-indicator" />} Eksplorasi
              </span>
              <span className={`hud-nav-link ${activeTab === "calculator" ? "active" : ""}`}>
                {activeTab === "calculator" && <span className="hud-nav-indicator" />} Kalkulator DSS
              </span>
            </>
          ) : (
            <>
              <Link
                href="/explore"
                className={`hud-nav-link ${activeTab === "explore" ? "active" : ""}`}
              >
                {activeTab === "explore" && <span className="hud-nav-indicator" />} Eksplorasi
              </Link>
              <Link
                href="/calculator"
                className={`hud-nav-link ${activeTab === "calculator" ? "active" : ""}`}
              >
                {activeTab === "calculator" && <span className="hud-nav-indicator" />} Kalkulator DSS
              </Link>
            </>
          )}
        </nav>

        {/* Right Side: Action Buttons / Menus */}
        <div className="hud-topbar-right">{actions}</div>
      </div>
    </header>
  );
}
