"use client";

import { useId } from "react";

import { CAMPUSES, findCampus } from "@/data/campuses";
import type { GeoPoint } from "@/lib/geo";
import { LocationInput } from "@/features/geo/components/location-input";

export const CUSTOM_CAMPUS_ID = "custom";

export function inferCampusId(point: GeoPoint | null): string {
  if (point === null) return "";
  const match = CAMPUSES.find((campus) => campus.latitude === point.latitude && campus.longitude === point.longitude);
  return match?.id ?? CUSTOM_CAMPUS_ID;
}

interface CampusPickerProps {
  readonly campusId: string;
  readonly point: GeoPoint | null;
  readonly onChange: (change: { campusId: string; point: GeoPoint | null; campusName: string | null }) => void;
}

export function CampusPicker({ campusId, point, onChange }: CampusPickerProps) {
  const id = useId();

  const select = (nextId: string) => {
    if (nextId === "") return onChange({ campusId: "", point: null, campusName: null });
    if (nextId === CUSTOM_CAMPUS_ID) return onChange({ campusId: nextId, point, campusName: null });
    const campus = findCampus(nextId);
    if (campus === undefined) return;
    onChange({ campusId: nextId, point: { latitude: campus.latitude, longitude: campus.longitude }, campusName: campus.name });
  };

  return (
    <div className="campus-picker">
      <div className="field">
        <label htmlFor={id}>Kampus tujuan (opsional)</label>
        <select id={id} className="input" value={campusId} onChange={(event) => select(event.target.value)}>
          <option value="">Belum dipilih</option>
          {CAMPUSES.map((campus) => (
            <option key={campus.id} value={campus.id}>{campus.shortName} — {campus.name}, {campus.city}</option>
          ))}
          <option value={CUSTOM_CAMPUS_ID}>Kampus/tujuan lain (isi koordinat sendiri)</option>
        </select>
        <small className="muted">Dipakai untuk menghitung jarak setiap kos ke tujuan Anda.</small>
      </div>
      {campusId !== "" && (
        <>
          <LocationInput
            label="Titik tujuan"
            value={point}
            onChange={(next) => onChange({ campusId, point: next, campusName: null })}
            helper={campusId === CUSTOM_CAMPUS_ID ? undefined : "Titik kampus ini perkiraan. Sesuaikan ke gerbang/fakultas yang Anda tuju dengan menempel koordinat baru."}
          />
        </>
      )}
    </div>
  );
}
