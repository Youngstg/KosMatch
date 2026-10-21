"use client";

import { useId, useState, type ClipboardEvent, type KeyboardEvent } from "react";
import { Crosshair, ExternalLink, MapPin, X } from "lucide-react";

import { formatCoordinates, googleMapsLink, isWithinIndonesia, parseCoordinates, type GeoPoint } from "@/lib/geo";

interface LocationInputProps {
  readonly label: string;
  readonly value: GeoPoint | null;
  readonly onChange: (value: GeoPoint | null) => void;
  readonly helper?: string;
  readonly allowCurrentLocation?: boolean;
}

type Status = { readonly kind: "idle" | "ok" | "error"; readonly message: string };

const IDLE: Status = { kind: "idle", message: "" };

export function LocationInput({ label, value, onChange, helper, allowCurrentLocation = false }: LocationInputProps) {
  const id = useId();
  const [text, setText] = useState("");
  const [status, setStatus] = useState<Status>(IDLE);

  const apply = (raw: string): boolean => {
    const point = parseCoordinates(raw);
    if (point === null) {
      setStatus({
        kind: "error",
        message: raw.includes("goo.gl") || raw.includes("maps.app")
          ? "Tautan pendek tidak bisa dibaca. Buka tautannya, lalu salin koordinat atau tautan panjang dari peta."
          : "Format belum dikenali. Contoh: -0.9143, 100.4602 atau tautan Google Maps.",
      });
      return false;
    }
    onChange(point);
    setText("");
    setStatus({ kind: "ok", message: `Koordinat terbaca: ${formatCoordinates(point)}` });
    return true;
  };

  const onPaste = (event: ClipboardEvent<HTMLInputElement>) => {
    const pasted = event.clipboardData.getData("text");
    if (parseCoordinates(pasted) !== null) {
      event.preventDefault();
      apply(pasted);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    if (text.trim().length > 0) apply(text);
  };

  const useCurrentLocation = () => {
    if (typeof navigator === "undefined" || navigator.geolocation === undefined) {
      setStatus({ kind: "error", message: "Peramban ini tidak mendukung lokasi saat ini." });
      return;
    }
    setStatus({ kind: "idle", message: "Mencari lokasi…" });
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const point = {
          latitude: Number(position.coords.latitude.toFixed(6)),
          longitude: Number(position.coords.longitude.toFixed(6)),
        };
        onChange(point);
        setStatus({ kind: "ok", message: `Lokasi saat ini dipakai (akurasi ±${Math.round(position.coords.accuracy)} m).` });
      },
      (error) =>
        setStatus({
          kind: "error",
          message: error.code === error.PERMISSION_DENIED ? "Izin lokasi ditolak. Tempel koordinat secara manual." : "Lokasi tidak dapat dibaca. Coba lagi atau tempel koordinat.",
        }),
      { enableHighAccuracy: true, timeout: 15_000, maximumAge: 60_000 },
    );
  };

  const clear = () => {
    onChange(null);
    setStatus(IDLE);
  };

  return (
    <div className="field location-input">
      <label htmlFor={id}>{label}</label>
      {value !== null && (
        <div className="location-chosen">
          <span className="badge"><MapPin size={13} aria-hidden="true" /> {formatCoordinates(value)}</span>{" "}
          <a href={googleMapsLink(value)} target="_blank" rel="noopener noreferrer"><ExternalLink size={13} aria-hidden="true" /> Cek di peta</a>{" "}
          <button className="btn btn-ghost" type="button" onClick={clear} aria-label={`Hapus ${label}`}><X size={14} aria-hidden="true" /> Hapus</button>
        </div>
      )}
      <div className="input-prefix">
        <input
          id={id}
          className="input"
          type="text"
          inputMode="text"
          autoComplete="off"
          placeholder="Tempel koordinat atau tautan Google Maps"
          value={text}
          aria-describedby={`${id}-help`}
          onChange={(event) => { setText(event.target.value); if (status.kind === "error") setStatus(IDLE); }}
          onPaste={onPaste}
          onKeyDown={onKeyDown}
        />
        <button className="btn btn-secondary" type="button" onClick={() => apply(text)} disabled={text.trim().length === 0}>Terapkan</button>
        {allowCurrentLocation && (
          <button className="btn btn-secondary" type="button" onClick={useCurrentLocation}><Crosshair size={14} aria-hidden="true" /> Lokasi saya</button>
        )}
      </div>
      <small id={`${id}-help`} className="muted">
        {helper ?? "Di Google Maps: tekan lama pada titik, lalu salin koordinatnya (lintang, bujur)."}
      </small>
      <div role="status" aria-live="polite">
        {status.message !== "" && <small className={status.kind === "error" ? "unknown" : "muted"}>{status.message}</small>}
        {value !== null && !isWithinIndonesia(value) && (
          <small className="unknown"> Titik ini di luar Indonesia. Pastikan urutannya lintang, bujur (contoh: -0.91, 100.46).</small>
        )}
      </div>
    </div>
  );
}
