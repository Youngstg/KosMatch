"use client";

import { ExternalLink, Footprints, Bike } from "lucide-react";

import type { AccommodationOption, ComparisonProject } from "@/domain/entities";
import { calculateDestinationDistance } from "@/domain/distance";
import { formatDistance, googleDirectionsLink } from "@/lib/geo";

interface DistanceSummaryProps {
  readonly project: Pick<ComparisonProject, "destinationLabel" | "destinationPoint">;
  readonly location: AccommodationOption["location"];
  readonly currentMinutes: number | null;
  readonly onApplyMinutes: (minutes: number) => void;
}

export function DistanceSummary({ project, location, currentMinutes, onApplyMinutes }: DistanceSummaryProps) {
  if (project.destinationPoint === null) {
    return <p className="muted distance-summary">Titik kampus/tujuan belum diatur. Atur di Preferensi untuk melihat jarak otomatis.</p>;
  }
  if (location === null) {
    return <p className="muted distance-summary">Isi lokasi kos untuk menghitung jarak ke {project.destinationLabel}.</p>;
  }
  const distance = calculateDestinationDistance(project, { location });
  if (distance === null) return null;

  return (
    <div className="distance-summary panel" aria-label={`Jarak ke ${project.destinationLabel}`}>
      <strong>Jarak ke {project.destinationLabel}</strong>
      <dl>
        <div className="detail-row"><dt>Garis lurus</dt><dd>{formatDistance(distance.straightMeters)}</dd></div>
        <div className="detail-row"><dt>Perkiraan lewat jalan</dt><dd>±{formatDistance(distance.estimatedRoadMeters)}</dd></div>
      </dl>
      <div className="chips" role="group" aria-label="Pakai estimasi waktu tempuh">
        <button className={`chip ${currentMinutes === distance.walkMinutes ? "selected" : ""}`} type="button" onClick={() => onApplyMinutes(distance.walkMinutes)}>
          <Footprints size={14} aria-hidden="true" /> Jalan kaki ±{distance.walkMinutes} menit
        </button>
        <button className={`chip ${currentMinutes === distance.motorcycleMinutes ? "selected" : ""}`} type="button" onClick={() => onApplyMinutes(distance.motorcycleMinutes)}>
          <Bike size={14} aria-hidden="true" /> Motor ±{distance.motorcycleMinutes} menit
        </button>
      </div>
      <small className="muted">
        Perkiraan kasar (garis lurus × 1,3, kecepatan rata-rata), bukan rute sebenarnya. Waktu yang Anda pakai ditandai sebagai perkiraan.{" "}
        <a href={googleDirectionsLink(location, project.destinationPoint)} target="_blank" rel="noopener noreferrer"><ExternalLink size={12} aria-hidden="true" /> Cek rute di peta</a>
      </small>
    </div>
  );
}
