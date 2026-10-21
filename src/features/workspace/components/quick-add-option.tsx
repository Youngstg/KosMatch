"use client";

import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, Info, Save } from "lucide-react";

import type { AccommodationOption, ComparisonProject, DataOrigin, MoneyValue } from "@/domain/entities";
import { accommodationOptionSchema } from "@/domain/validation";
import { DistanceSummary } from "@/features/geo/components/distance-summary";
import { LocationInput } from "@/features/geo/components/location-input";
import { createEmptyOption, unknownMoney } from "@/features/workspace/option-factory";
import { MAX_FIELD_RUPIAH } from "@/lib/currency";

interface QuickAddOptionProps {
  readonly project: ComparisonProject;
  readonly onSaveAction: (option: AccommodationOption) => Promise<void>;
  readonly onCancelAction: () => void;
  readonly onOpenFullAction: (draft: AccommodationOption) => void;
}

export function QuickAddOption({ project, onSaveAction, onCancelAction, onOpenFullAction }: QuickAddOptionProps) {
  const [option, setOption] = useState<AccommodationOption>(() => createEmptyOption(project.id));
  const [rentText, setRentText] = useState("");
  const [rentOrigin, setRentOrigin] = useState<Exclude<DataOrigin, "unknown">>("confirmed");
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const patch = (changes: Partial<AccommodationOption>) =>
    setOption((current) => ({ ...current, ...changes, updatedAt: new Date().toISOString() }));

  const rent = (): MoneyValue => {
    if (rentText.trim() === "") return unknownMoney();
    const amount = Math.round(Number(rentText));
    return Number.isFinite(amount) && amount >= 0 ? { amount, origin: rentOrigin } : unknownMoney();
  };

  const build = (): AccommodationOption => ({ ...option, name: option.name.trim(), area: option.area.trim(), notes: option.notes.trim(), rent: rent() });

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    const validated = accommodationOptionSchema.safeParse(build());
    if (!validated.success) {
      setError(validated.error.issues[0]?.message ?? "Periksa kembali data kos.");
      return;
    }
    setSaving(true);
    try {
      await onSaveAction(validated.data);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Pilihan gagal disimpan.");
      setSaving(false);
    }
  };

  return (
    <main className="container workspace">
      <button className="btn btn-ghost" type="button" onClick={onCancelAction}><ArrowLeft size={18} /> Kembali ke hasil</button>
      <div className="workspace-head">
        <div>
          <div className="eyebrow">Tambah manual</div>
          <h1>Tambah kos manual</h1>
          <p className="muted">Isi yang Anda tahu saja. Data yang kosong ditandai “belum diketahui” dan bisa dilengkapi kapan saja.</p>
        </div>
      </div>
      <form className="panel form-section" onSubmit={submit}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="quick-name">Nama pilihan kos</label>
            <input id="quick-name" className="input" required maxLength={100} value={option.name} onChange={(event) => patch({ name: event.target.value })} />
          </div>
          <div className="field">
            <label htmlFor="quick-area">Area atau lingkungan</label>
            <input id="quick-area" className="input" maxLength={100} value={option.area} onChange={(event) => patch({ area: event.target.value })} />
          </div>
          <div className="field">
            <label htmlFor="quick-rent">Harga sewa bulanan</label>
            <div className="input-prefix">
              <span aria-hidden="true">Rp</span>
              <input id="quick-rent" className="input" type="number" inputMode="numeric" min={0} max={MAX_FIELD_RUPIAH} value={rentText} onChange={(event) => setRentText(event.target.value)} />
            </div>
          </div>
          <div className="field">
            <label htmlFor="quick-rent-origin">Status harga</label>
            <select id="quick-rent-origin" className="input" value={rentOrigin} onChange={(event) => setRentOrigin(event.target.value as "confirmed" | "estimated")}>
              <option value="confirmed">Sudah dikonfirmasi pemilik</option>
              <option value="estimated">Perkiraan saya</option>
            </select>
          </div>
        </div>
        <LocationInput label="Lokasi kos" value={option.location} onChange={(point) => patch({ location: point })} allowCurrentLocation />
        <DistanceSummary
          project={project}
          location={option.location}
          currentMinutes={option.oneWayCommuteMinutes}
          onApplyMinutes={(minutes) => patch({ oneWayCommuteMinutes: minutes, commuteOrigin: "estimated" })}
        />
        {option.commuteOrigin === "estimated" && <p className="unknown"><Info size={15} /> Waktu tempuh {option.oneWayCommuteMinutes} menit adalah perkiraan dari jarak.</p>}
        <div className="field">
          <label htmlFor="quick-notes">Catatan singkat (opsional)</label>
          <textarea id="quick-notes" className="input" rows={2} maxLength={2000} value={option.notes} onChange={(event) => patch({ notes: event.target.value })} />
        </div>
        {error !== null && <div className="inline-alert bad" role="alert"><Info size={18} /> {error}</div>}
        <div className="form-actions">
          <button className="btn btn-secondary" type="button" onClick={onCancelAction}>Batal</button>
          <button className="btn btn-secondary" type="button" onClick={() => onOpenFullAction(build())}>Lengkapi detail <ArrowRight size={16} /></button>
          <button className="btn btn-primary" type="submit" disabled={saving}><Save size={18} /> Simpan pilihan</button>
        </div>
      </form>
    </main>
  );
}
