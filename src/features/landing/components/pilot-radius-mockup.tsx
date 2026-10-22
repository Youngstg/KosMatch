import React from "react";
import { KosMatchLogo } from "@/components/brand/kosmatch-logo";

export function PilotRadiusMockup() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "340px",
        height: "260px",
        borderRadius: "20px",
        overflow: "hidden",
        background: "linear-gradient(145deg, #18191c 0%, #0f1012 100%)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 16px 40px rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background SVG Grid & Radius Radar */}
      <svg
        viewBox="0 0 340 260"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="radiusGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.25" />
            <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </radialGradient>
          <filter id="glowBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Abstract Street Grid Lines */}
        <path
          d="M 20 60 Q 100 80, 170 130 T 320 180"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 60 240 Q 140 180, 170 130 T 260 20"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 170 20 L 170 240"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M 20 130 L 320 130"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="2"
          fill="none"
        />

        {/* Range rings (1km, 2km, 3km) */}
        <circle cx="170" cy="130" r="35" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />
        <circle cx="170" cy="130" r="65" stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none" />

        {/* 4 KM PILOT RADIUS (Fill + Glow + Prominent Dashed Stroke) */}
        <circle cx="170" cy="130" r="98" fill="url(#radiusGlow)" />
        <circle
          cx="170"
          cy="130"
          r="98"
          stroke="#F59E0B"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          filter="url(#glowBlur)"
        />

        {/* Radius Tag on Circle Edge */}
        <g transform="translate(195, 26)">
          <rect x="-4" y="-2" width="94" height="20" rx="10" fill="#18181b" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="43" y="12" fill="#F59E0B" fontSize="10" fontWeight="700" textAnchor="middle" letterSpacing="0.02em">
            Radius Pilot 4 km
          </text>
        </g>
      </svg>

      {/* Campus Center Pin */}
      <div
        style={{
          position: "absolute",
          left: "170px",
          top: "130px",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            background: "#F59E0B",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 16px rgba(245, 158, 11, 0.7)",
            border: "2px solid #FFFFFF",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        </div>
        <span
          style={{
            fontSize: "10px",
            fontWeight: 800,
            background: "rgba(0,0,0,0.85)",
            color: "#FFFFFF",
            padding: "2px 6px",
            borderRadius: "6px",
            marginTop: "3px",
            whiteSpace: "nowrap",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          UI Depok
        </span>
      </div>

      {/* Floating Sample Kos Pins inside radius */}
      <div
        style={{
          position: "absolute",
          left: "115px",
          top: "85px",
          background: "rgba(18, 20, 24, 0.9)",
          border: "1px solid rgba(59, 130, 246, 0.6)",
          padding: "2px 7px",
          borderRadius: "12px",
          fontSize: "10px",
          fontWeight: 700,
          color: "#60A5FA",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          zIndex: 2,
        }}
      >
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#60A5FA" }} />
        Rp1.2jt
      </div>

      <div
        style={{
          position: "absolute",
          left: "225px",
          top: "100px",
          background: "rgba(18, 20, 24, 0.9)",
          border: "1px solid rgba(16, 185, 129, 0.6)",
          padding: "2px 7px",
          borderRadius: "12px",
          fontSize: "10px",
          fontWeight: 700,
          color: "#34D399",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          zIndex: 2,
        }}
      >
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#34D399" }} />
        Rp1.85jt
      </div>

      <div
        style={{
          position: "absolute",
          left: "135px",
          top: "180px",
          background: "rgba(18, 20, 24, 0.9)",
          border: "1px solid rgba(245, 158, 11, 0.6)",
          padding: "2px 7px",
          borderRadius: "12px",
          fontSize: "10px",
          fontWeight: 700,
          color: "#FBBF24",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          zIndex: 2,
        }}
      >
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#FBBF24" }} />
        Rp950k
      </div>

      {/* Brand Watermark Badge in corner */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "rgba(0, 0, 0, 0.65)",
          padding: "4px 8px",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(4px)",
          zIndex: 4,
        }}
      >
        <KosMatchLogo size={18} rounded={false} />
        <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.04em", color: "#E5E7EB" }}>
          PILOT MAP
        </span>
      </div>
    </div>
  );
}
