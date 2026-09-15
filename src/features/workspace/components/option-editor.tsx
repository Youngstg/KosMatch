"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { ArrowLeft, Check, Info, Save } from "lucide-react";
import type { AccommodationOption, Availability, ComparisonProject, DataOrigin, MoneyValue } from "@/domain/entities";
import { accommodationOptionSchema, FACILITY_DEFINITIONS, RULE_DEFINITIONS } from "@/domain/validation";
import { calculateCost } from "@/domain/costing";
import { formatRupiah, MAX_RUPIAH } from "@/lib/currency";

const moneyFields = [
  ["rent", "Harga sewa bulanan"], ["electricity", "Listrik per bulan"], ["water", "Air per bulan"],
  ["internet", "Internet per bulan"], ["laundry", "Laundry per bulan"], ["otherRecurring", "Biaya rutin lain"],
] as const;
const moveInFields = [["deposit", "Deposit"], ["administrationFee", "Biaya administrasi"]] as const;

function unknownMoney(): MoneyValue { return { amount: null, origin: "unknown" }; }

function createEmptyOption(projectId: string): AccommodationOption {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(), projectId, name: "", area: "", sourceUrl: null, lastCheckedAt: null,
    rent: unknownMoney(), electricity: unknownMoney(), water: unknownMoney(), internet: unknownMoney(), laundry: unknownMoney(), otherRecurring: unknownMoney(),
    deposit: unknownMoney(), administrationFee: unknownMoney(), oneWayCommuteMinutes: null, roundTripTransportCost: unknownMoney(),
    facilityCodes: [],
    facilityValues: Object.fromEntries(Object.keys(FACILITY_DEFINITIONS).map((code) => [code, "unknown"])),
    ruleValues: Object.fromEntries(Object.keys(RULE_DEFINITIONS).map((code) => [code, "unknown"])),
    environmentRating: null, notes: "", pros: [], concerns: [], verificationQuestions: [], shortlisted: false,
    createdAt: now, updatedAt: now,
  };
}

function MoneyField({ id, label, value, onChange, helper }: { id: string; label: string; value: MoneyValue; onChange: (value: MoneyValue) => void; helper?: string }) {
  const origin = value.origin;
  const setOrigin = (next: DataOrigin) => onChange(next === "unknown" ? unknownMoney() : { amount: value.amount ?? 0, origin: next });
  return <div className="field"><label htmlFor={id}>{label}</label><div className="money-control"><div className="input-prefix"><span aria-hidden="true">Rp</span><input id={id} className="input" type="number" inputMode="numeric" min={0} max={MAX_RUPIAH} disabled={origin === "unknown"} value={value.amount ?? ""} onChange={(event) => onChange({ amount: Math.max(0, Math.round(Number(event.target.value))), origin: origin === "unknown" ? "estimated" : origin })} /></div><select className="input origin-select" aria-label={`Status data ${label}`} value={origin} onChange={(event) => setOrigin(event.target.value as DataOrigin)}><option value="unknown">Belum diketahui</option><option value="estimated">Perkiraan</option><option value="confirmed">Dikonfirmasi</option></select></div>{helper && <small>{helper}</small>}</div>;
}

function restoreDraft(projectId: string, initialOption: AccommodationOption | undefined, draftKey: string): AccommodationOption {
  if (initialOption !== undefined) return initialOption;
  const empty = createEmptyOption(projectId);
  if (typeof window === "undefined") return empty;
  const saved = window.sessionStorage.getItem(draftKey);
  if (saved === null) return empty;
  try {
    const parsed = accommodationOptionSchema.safeParse(JSON.parse(saved));
    return parsed.success ? parsed.data : empty;
  } catch {
    window.sessionStorage.removeItem(draftKey);
    return empty;
  }
}

export function OptionEditor({ project, initialOption, onSaveAction, onCancelAction }: { project: ComparisonProject; initialOption?: AccommodationOption; onSaveAction: (option: AccommodationOption) => Promise<void>; onCancelAction: () => void }) {
  const draftKey = `kosmatch-draft-${project.id}-${initialOption?.id ?? "new"}`;
  const [option, setOption] = useState<AccommodationOption>(() => restoreDraft(project.id, initialOption, draftKey));
  const [saveState, setSaveState] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(draftKey, JSON.stringify(option));
        setSaveState("saved");
      } catch {
        setSaveState("error");
      }
    }, 350);
    return () => window.clearTimeout(timer);
  }, [draftKey, option]);

  const cost = useMemo(() => calculateCost(project, option), [project, option]);
  const update = <K extends keyof AccommodationOption>(key: K, value: AccommodationOption[K]) => {
      setSaveState("saving");
      setOption((current) => ({ ...current, [key]: value, updatedAt: new Date().toISOString() }));
    };
  const updateMoney = (key: keyof Pick<AccommodationOption, "rent" | "electricity" | "water" | "internet" | "laundry" | "otherRecurring" | "deposit" | "administrationFee" | "roundTripTransportCost">, value: MoneyValue) => update(key, value);

  const setFacility = (code: string, value: Availability) => {
    const codes = value === true ? [...new Set([...option.facilityCodes, code])] : option.facilityCodes.filter((item) => item !== code);
    update("facilityCodes", codes);
    update("facilityValues", { ...option.facilityValues, [code]: value });
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault(); setError(null);
    const validated = accommodationOptionSchema.safeParse({ ...option, name: option.name.trim(), area: option.area.trim(), sourceUrl: option.sourceUrl?.trim() || null });
    if (!validated.success) { setError(validated.error.issues[0]?.message ?? "Periksa kembali data pilihan kos."); return; }
    setSaveState("saving");
    try { await onSaveAction(validated.data); sessionStorage.removeItem(draftKey); }
    catch (cause) { setError(cause instanceof Error ? cause.message : "Pilihan gagal disimpan."); setSaveState("error"); }
  };

  return <main className="container workspace"><button className="btn btn-ghost" type="button" onClick={onCancelAction}><ArrowLeft size={18} /> Kembali ke hasil</button><div className="workspace-head"><div><div className="eyebrow">{initialOption ? "Edit pilihan" : "Pilihan baru"}</div><h1>{initialOption ? `Edit ${initialOption.name}` : "Tambahkan pilihan kos"}</h1><p className="muted">Data yang belum diketahui tidak akan dianggap nol. Anda tetap dapat menyimpan pilihan yang belum lengkap.</p></div><span className={`badge ${saveState === "error" ? "bad" : "good"}`} aria-live="polite">{saveState === "saving" ? "Menyimpan…" : saveState === "error" ? "Gagal menyimpan" : saveState === "saved" ? "Tersimpan" : "Draf baru"}</span></div>
    <form className="editor-layout" onSubmit={submit}>
      <div className="editor-sections">
        <fieldset className="panel form-section"><legend>1. Informasi dasar</legend><div className="form-grid"><div className="field"><label htmlFor="option-name">Nama pilihan kos</label><input id="option-name" className="input" required maxLength={100} value={option.name} onChange={(e) => update("name", e.target.value)} /></div><div className="field"><label htmlFor="option-area">Area atau lingkungan</label><input id="option-area" className="input" maxLength={120} value={option.area} onChange={(e) => update("area", e.target.value)} /></div><div className="field"><label htmlFor="source-url">URL sumber (opsional)</label><input id="source-url" className="input" type="url" placeholder="https://..." value={option.sourceUrl ?? ""} onChange={(e) => update("sourceUrl", e.target.value || null)} /></div><div className="field"><label htmlFor="checked-date">Terakhir diperiksa</label><input id="checked-date" className="input" type="date" max={new Date().toISOString().slice(0,10)} value={option.lastCheckedAt ?? ""} onChange={(e) => update("lastCheckedAt", e.target.value || null)} /></div></div></fieldset>
        <fieldset className="panel form-section"><legend>2. Biaya bulanan</legend><div className="form-grid">{moneyFields.map(([key,label]) => <MoneyField key={key} id={key} label={label} value={option[key]} onChange={(value) => updateMoney(key,value)} />)}</div></fieldset>
        <fieldset className="panel form-section"><legend>3. Biaya awal masuk</legend><div className="form-grid">{moveInFields.map(([key,label]) => <MoneyField key={key} id={key} label={label} value={option[key]} onChange={(value) => updateMoney(key,value)} helper="Biaya satu kali; tidak dicampur ke estimasi bulanan." />)}</div></fieldset>
        <fieldset className="panel form-section"><legend>4. Perjalanan</legend><div className="form-grid"><div className="field"><label htmlFor="commute-time">Waktu sekali jalan</label><div className="input-prefix"><input id="commute-time" className="input" type="number" min={0} max={360} value={option.oneWayCommuteMinutes ?? ""} onChange={(e) => update("oneWayCommuteMinutes", e.target.value === "" ? null : Number(e.target.value))} /><span className="suffix">menit</span></div></div><MoneyField id="transport" label="Biaya transportasi pulang-pergi" value={option.roundTripTransportCost} onChange={(value) => updateMoney("roundTripTransportCost",value)} /></div></fieldset>
        <fieldset className="panel form-section"><legend>5. Fasilitas dan aturan</legend><p className="muted">Pilih status sebenarnya. “Perlu dikonfirmasi” membuat fasilitas wajib belum memenuhi kelayakan.</p><div className="availability-list">{Object.entries(FACILITY_DEFINITIONS).map(([code,label]) => <div className="availability-row" key={code}><strong>{label}</strong><div className="chips" role="group" aria-label={`Status ${label}`}>{([[true,"Tersedia"],[false,"Tidak ada"],["unknown","Belum diketahui"]] as const).map(([value,text]) => <button className={`chip ${option.facilityValues[code] === value ? "selected" : ""}`} type="button" aria-pressed={option.facilityValues[code] === value} onClick={() => setFacility(code,value)} key={String(value)}>{text}</button>)}</div></div>)}</div><h3>Aturan kos</h3><div className="availability-list">{Object.entries(RULE_DEFINITIONS).map(([code,label]) => <div className="availability-row" key={code}><strong>{label}</strong><div className="chips" role="group" aria-label={`Status ${label}`}>{([[true,"Sesuai"],[false,"Tidak sesuai"],["unknown","Belum diketahui"]] as const).map(([value,text]) => <button className={`chip ${option.ruleValues[code] === value ? "selected" : ""}`} type="button" aria-pressed={option.ruleValues[code] === value} onClick={() => update("ruleValues",{...option.ruleValues,[code]:value})} key={String(value)}>{text}</button>)}</div></div>)}</div></fieldset>
        <fieldset className="panel form-section"><legend>6. Pengamatan pribadi</legend><div className="form-grid"><div className="field"><label htmlFor="environment">Penilaian lingkungan</label><select id="environment" className="input" value={option.environmentRating ?? ""} onChange={(e) => update("environmentRating", e.target.value === "" ? null : Number(e.target.value) as 1|2|3|4|5)}><option value="">Belum dinilai</option>{[1,2,3,4,5].map((value) => <option value={value} key={value}>{value} dari 5</option>)}</select></div><div className="field full"><label htmlFor="notes">Catatan dan pertanyaan</label><textarea id="notes" className="input textarea" maxLength={3000} value={option.notes} onChange={(e) => update("notes",e.target.value)} /></div></div></fieldset>
        <fieldset className="panel form-section"><legend>7. Tinjau sebelum menyimpan</legend><p>Anda dapat menyimpan draft yang belum lengkap. Informasi berikut akan ditampilkan sebagai belum diketahui:</p>{cost.unknownMonthlyFields.length===0&&option.oneWayCommuteMinutes!==null?<p className="badge good"><Check size={14}/> Data biaya dan perjalanan utama sudah terisi.</p>:<ul className="reasons">{cost.unknownMonthlyFields.map((field)=><li key={field}>{field === "monthlyTransport" ? "Transportasi bulanan" : field}</li>)}{option.oneWayCommuteMinutes===null&&<li>Waktu perjalanan sekali jalan</li>}</ul>}<p className="muted small">Status fasilitas dan aturan yang belum diketahui tetap mengurangi keyakinan data dan tidak diasumsikan cocok.</p></fieldset>
        {error && <div className="inline-alert bad" role="alert"><Info size={18} /> {error}</div>}
        <div className="form-actions"><button className="btn btn-secondary" type="button" onClick={()=>{try{sessionStorage.setItem(draftKey,JSON.stringify(option));setSaveState("saved");}catch{setSaveState("error");}}}>Simpan Draf</button><button className="btn btn-secondary" type="button" onClick={onCancelAction}>Batal</button><button className="btn btn-primary" type="submit"><Save size={18} /> Simpan pilihan</button></div>
      </div>
      <aside className="panel live-total"><div className="eyebrow">Subtotal langsung</div><h2>{formatRupiah(cost.knownMonthlyTotal)}</h2><p className="muted">{cost.hasUnknownMonthlyValues ? "Estimasi minimum bulanan" : "Estimasi bulanan lengkap"}</p>{cost.hasUnknownMonthlyValues && <p className="unknown"><Info size={15} /> {cost.unknownMonthlyFields.length} komponen belum diketahui</p>}<hr /><strong>Biaya awal: {formatRupiah(cost.knownMoveInTotal)}</strong><p className="muted small">Termasuk pembayaran sewa pertama sebagai asumsi MVP.</p><div className="badge good"><Check size={14} /> Nilai nol hanya jika dipilih eksplisit</div></aside>
    </form>
  </main>;
}
