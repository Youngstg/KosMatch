"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, ArrowLeft, ArrowRight, BarChart3, Check, CircleDollarSign, Clock3, Info, MapPin, Scale, Sparkles } from "lucide-react";
import { DEMO_DISCLAIMER, demoOptions, demoProject } from "@/data/demo";
import { calculateCost } from "@/domain/costing";
import type { ComparisonProject, CriterionKey, Importance } from "@/domain/entities";
import { matchAndRank } from "@/domain/scoring";
import { formatRupiah } from "@/lib/currency";

type View = "landing" | "setup" | "results";
type Tab = "overview" | "compare";

const criteria: readonly { key: CriterionKey; label: string }[] = [
  { key: "cost", label: "Biaya total" },
  { key: "commute", label: "Perjalanan" },
  { key: "facilities", label: "Fasilitas" },
  { key: "environment", label: "Lingkungan" },
  { key: "ruleFit", label: "Aturan kos" },
];
const criterionLabels: Record<CriterionKey, string> = Object.fromEntries(criteria.map((item) => [item.key, item.label])) as Record<CriterionKey, string>;
const confidenceLabels = { high: "Tinggi", medium: "Sedang", low: "Rendah" } as const;
const monthlyFieldLabels: Record<string, string> = {
  rent: "sewa", electricity: "listrik", water: "air", internet: "internet", laundry: "laundry", otherRecurring: "biaya lain", monthlyTransport: "transportasi",
};

function Brand() {
  return <div className="brand"><span className="logo"><Scale size={21} aria-hidden="true" /></span><span>KosMatch</span></div>;
}

function Landing({ onStart, onDemo }: { onStart: () => void; onDemo: () => void }) {
  return <div className="shell">
    <header className="topbar"><div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><Brand /><button className="btn btn-ghost" onClick={onStart}>Cara kerja</button></div></header>
    <main>
      <section className="container hero">
        <div>
          <div className="eyebrow">Keputusan kos yang lebih jernih</div>
          <h1>Kos murah belum tentu paling hemat.</h1>
          <p className="lead">Bandingkan biaya bulanan, perjalanan, fasilitas, dan kebutuhan pribadi dalam satu keputusan yang transparan—tanpa harus membuat spreadsheet rumit.</p>
          <div className="actions"><button className="btn btn-primary" onClick={onStart}>Mulai perbandingan <ArrowRight size={18} /></button><button className="btn btn-secondary" onClick={onDemo}><Sparkles size={18} /> Coba data contoh</button></div>
          <p className="disclaimer"><Info size={17} aria-hidden="true" /> Data disimpan hanya selama sesi prototipe ini. Tidak perlu mendaftar.</p>
        </div>
        <div className="hero-card" aria-label="Pratinjau hasil perbandingan">
          <div className="eyebrow">Pratinjau perbandingan</div>
          <div className="preview-row"><div><strong>Kos Anggrek 12</strong><div className="muted">Setiabudi · 18 menit</div></div><div className="preview-score">91%</div></div>
          <div className="preview-row"><div><strong>Paviliun Mentari</strong><div className="muted">Mampang · biaya listrik belum diketahui</div></div><div className="preview-score">82%</div></div>
          <div className="preview-row"><div><strong>Biaya sebenarnya</strong><div className="muted">Sewa + biaya rutin + perjalanan</div></div><strong>Transparan</strong></div>
        </div>
      </section>
      <section className="container steps"><div className="eyebrow">Tiga langkah sederhana</div><h2 className="section-title">Bandingkan sesuai cara Anda hidup</h2><div className="step-grid">
        {[['1','Tentukan kebutuhan','Atur anggaran, batas perjalanan, fasilitas wajib, dan prioritas.'],['2','Masukkan pilihan','Catat biaya rutin dan tandai informasi yang belum diketahui.'],['3','Pahami trade-off','Lihat alasan di balik skor dan bandingkan pilihan secara setara.']].map(([number,title,text]) => <article className="step-card" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p className="muted">{text}</p></article>)}
      </div></section>
    </main>
    <footer className="footer-note"><div className="container">KosMatch adalah alat bantu keputusan, bukan jaminan kualitas atau ketersediaan kos.</div></footer>
  </div>;
}

function Setup({ onCancel, onComplete }: { onCancel: () => void; onComplete: (project: ComparisonProject) => void }) {
  const [step, setStep] = useState(1);
  const [project, setProject] = useState<ComparisonProject>({ ...demoProject, name: "Perbandingan kos saya", destinationLabel: "", facilityPreferences: demoProject.facilityPreferences.filter((item) => item.level === "required") });
  const update = <K extends keyof ComparisonProject>(key: K, value: ComparisonProject[K]) => setProject((current) => ({ ...current, [key]: value, updatedAt: new Date().toISOString() }));
  const canContinue = step !== 1 || (project.name.trim().length > 0 && project.destinationLabel.trim().length > 0);
  return <div className="shell"><header className="topbar"><div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><Brand /><button className="btn btn-ghost" onClick={onCancel}>Keluar</button></div></header>
    <main className="container workspace"><div className="workspace-head"><div><div className="eyebrow">Persiapan · langkah {step} dari 3</div><h1>{step === 1 ? "Mulai dari keseharian Anda" : step === 2 ? "Tentukan batas yang realistis" : "Apa yang paling penting?"}</h1><p className="muted">Preferensi ini menentukan perhitungan dan penjelasan setiap pilihan.</p></div></div>
      <section className="panel" style={{ maxWidth: 760 }}><div className="progress" aria-label={`Langkah ${step} dari 3`}>{[1,2,3].map((item) => <span className={item <= step ? "active" : ""} key={item} />)}</div>
        {step === 1 && <div className="form-grid"><div className="field full"><label htmlFor="project-name">Nama perbandingan</label><input id="project-name" className="input" value={project.name} maxLength={80} onChange={(event) => update("name", event.target.value)} /><small>Contoh: Kos untuk magang Jakarta</small></div><div className="field full"><label htmlFor="destination">Tujuan rutin</label><input id="destination" className="input" value={project.destinationLabel} placeholder="Contoh: Kantor Kuningan" onChange={(event) => update("destinationLabel", event.target.value)} /><small>Cukup gunakan nama kantor atau kampus; alamat lengkap tidak diperlukan.</small></div><div className="field"><label htmlFor="days">Hari perjalanan per bulan</label><input id="days" className="input" type="number" min={0} max={31} value={project.commuteDaysPerMonth} onChange={(event) => update("commuteDaysPerMonth", Math.min(31, Math.max(0, Number(event.target.value))))} /></div></div>}
        {step === 2 && <div className="form-grid"><div className="field"><label htmlFor="budget">Anggaran total per bulan</label><div className="input-prefix"><span>Rp</span><input id="budget" className="input" type="number" min={0} step={50000} value={project.monthlyBudget} onChange={(event) => update("monthlyBudget", Math.max(0, Number(event.target.value)))} /></div><small>Termasuk sewa, biaya rutin, dan perjalanan.</small></div><div className="field"><label htmlFor="commute">Batas perjalanan sekali jalan</label><div className="input-prefix"><input id="commute" className="input" type="number" min={1} max={360} value={project.maxOneWayCommuteMinutes} onChange={(event) => update("maxOneWayCommuteMinutes", Math.min(360, Math.max(1, Number(event.target.value))))} /><span style={{ padding: "0 13px 0 0" }}>menit</span></div></div><div className="field full"><span className="field-label">Kebutuhan fasilitas</span><div className="chips">{demoProject.facilityPreferences.map((facility) => { const selected = project.facilityPreferences.some((item) => item.code === facility.code); return <button type="button" className={`chip ${selected ? "selected" : ""}`} aria-pressed={selected} key={facility.code} onClick={() => update("facilityPreferences", selected ? project.facilityPreferences.filter((item) => item.code !== facility.code) : [...project.facilityPreferences, facility])}>{selected && <Check size={15} />} {facility.label} · {facility.level === "required" ? "Wajib" : "Diinginkan"}</button>; })}</div><small>Fasilitas wajib menentukan kelayakan. Fasilitas diinginkan memengaruhi skor.</small></div></div>}
        {step === 3 && <div><p className="muted">Pilih tingkat kepentingan 1 (tidak penting) sampai 5 (sangat penting).</p><div className="importance-list">{criteria.map(({ key, label }) => <div className="importance-row" key={key}><span className="field-label">{label}</span>{([1,2,3,4,5] as Importance[]).map((value) => <button type="button" className={`importance-button ${project.weights[key] === value ? "active" : ""}`} aria-label={`${label}: ${value} dari 5`} aria-pressed={project.weights[key] === value} onClick={() => update("weights", { ...project.weights, [key]: value })} key={value}>{value}</button>)}</div>)}</div></div>}
        <div className="form-actions"><button className="btn btn-secondary" onClick={() => step === 1 ? onCancel() : setStep((value) => value - 1)}><ArrowLeft size={18} /> Kembali</button><button className="btn btn-primary" disabled={!canContinue} onClick={() => step < 3 ? setStep((value) => value + 1) : onComplete(project)}>{step < 3 ? "Lanjut" : "Lihat hasil contoh"} <ArrowRight size={18} /></button></div>
      </section>
    </main></div>;
}

function Results({ project, onReset }: { project: ComparisonProject; onReset: () => void }) {
  const [tab, setTab] = useState<Tab>("overview");
  const matches = useMemo(() => matchAndRank(project, demoOptions), [project]);
  const eligible = matches.filter((item) => item.eligible);
  const ineligible = matches.filter((item) => !item.eligible);
  const optionById = (id: string) => demoOptions.find((item) => item.id === id)!;
  return <div className="shell"><header className="topbar"><div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}><Brand /><button className="btn btn-secondary" onClick={onReset}>Perbandingan baru</button></div></header>
    <main className="container workspace"><div className="workspace-head"><div><div className="eyebrow">Ruang keputusan</div><h1>{project.name}</h1><p className="muted"><MapPin size={15} style={{ verticalAlign: "-2px" }} /> Tujuan: {project.destinationLabel || demoProject.destinationLabel}</p></div><div className="badge warn"><Info size={14} /> Data contoh fiktif</div></div>
      <nav className="nav-tabs" aria-label="Navigasi proyek"><button className={`nav-tab ${tab === "overview" ? "active" : ""}`} aria-current={tab === "overview" ? "page" : undefined} onClick={() => setTab("overview")}>Ringkasan</button><button className={`nav-tab ${tab === "compare" ? "active" : ""}`} aria-current={tab === "compare" ? "page" : undefined} onClick={() => setTab("compare")}>Bandingkan</button></nav>
      <div className="summary-strip"><div className="summary-item"><span className="muted">Anggaran total</span><strong>{formatRupiah(project.monthlyBudget)} / bulan</strong></div><div className="summary-item"><span className="muted">Batas perjalanan</span><strong>{project.maxOneWayCommuteMinutes} menit sekali jalan</strong></div><div className="summary-item"><span className="muted">Pilihan memenuhi wajib</span><strong>{eligible.length} dari {matches.length} pilihan</strong></div></div>
      {tab === "overview" ? <>
        <section aria-labelledby="eligible-title"><h2 className="group-title" id="eligible-title"><Check size={21} color="var(--accent)" /> Memenuhi kebutuhan wajib</h2><div className="option-grid">{eligible.map((match) => <OptionCard key={match.optionId} project={project} match={match} option={optionById(match.optionId)} onCompare={() => setTab("compare")} />)}</div></section>
        {ineligible.length > 0 && <section aria-labelledby="ineligible-title"><h2 className="group-title" id="ineligible-title"><AlertTriangle size={21} color="var(--danger)" /> Perlu dipertimbangkan ulang</h2><div className="option-grid">{ineligible.map((match) => <OptionCard key={match.optionId} project={project} match={match} option={optionById(match.optionId)} onCompare={() => setTab("compare")} />)}</div></section>}
      </> : <Compare project={project} matches={matches} />}
      <p className="disclaimer"><Info size={17} /> {DEMO_DISCLAIMER} Skor mencerminkan input dan prioritas Anda, bukan jaminan kualitas atau ketersediaan. Periksa informasi kepada pemilik kos sebelum memutuskan.</p>
    </main></div>;
}

function OptionCard({ project, match, option, onCompare }: { project: ComparisonProject; match: ReturnType<typeof matchAndRank>[number]; option: (typeof demoOptions)[number]; onCompare: () => void }) {
  const cost = calculateCost(project, option);
  return <article className="option-card"><div><div className="badges"><span className={`badge ${match.eligible ? "good" : "bad"}`}>{match.eligible ? <Check size={13} /> : <AlertTriangle size={13} />}{match.eligible ? "Memenuhi wajib" : "Belum memenuhi wajib"}</span><span className={`badge ${match.confidence === "low" ? "warn" : ""}`}>Keyakinan: {confidenceLabels[match.confidence]}</span></div><h3 style={{ marginTop: 14 }}>{option.name}</h3><span className="muted">{option.area}</span></div><div className="score-cost"><div><div className="score">{match.score === null ? "—" : `${Math.round(match.score)}%`}</div><small className="muted">cocok</small></div><div className="cost"><small>{cost.hasUnknownMonthlyValues ? "Estimasi minimum" : "Estimasi bulanan"}</small>{formatRupiah(cost.knownMonthlyTotal)}</div></div><div><div className="badge"><Clock3 size={13} /> {option.oneWayCommuteMinutes ?? "Belum diketahui"} menit</div>{cost.hasUnknownMonthlyValues && <p className="unknown"><Info size={14} style={{ verticalAlign: "-2px" }} /> Belum diketahui: {cost.unknownMonthlyFields.map((field) => monthlyFieldLabels[field]).join(", ")}</p>}</div><ul className="reasons">{match.strengths.slice(0,2).map((reason) => <li key={reason}>{reason}</li>)}{match.tradeoffs.slice(0,1).map((reason) => <li key={reason}>{reason}</li>)}</ul><button className="btn btn-secondary card-action" onClick={onCompare}><BarChart3 size={17} /> Bandingkan detail</button></article>;
}

function Compare({ project, matches }: { project: ComparisonProject; matches: ReturnType<typeof matchAndRank> }) {
  const rows = [
    { label: "Kelayakan", render: (index: number) => matches[index].eligible ? "Memenuhi semua kebutuhan wajib" : matches[index].tradeoffs[0] ?? "Belum memenuhi kebutuhan wajib" },
    { label: "Skor kecocokan", render: (index: number) => matches[index].score === null ? "Belum dapat dihitung" : `${Math.round(matches[index].score)}% cocok` },
    { label: "Estimasi bulanan", render: (index: number) => { const cost = calculateCost(project, demoOptions.find((item) => item.id === matches[index].optionId)!); return `${cost.hasUnknownMonthlyValues ? "Minimum " : ""}${formatRupiah(cost.knownMonthlyTotal)}`; } },
    { label: "Biaya awal masuk", render: (index: number) => { const cost = calculateCost(project, demoOptions.find((item) => item.id === matches[index].optionId)!); return `${cost.unknownMoveInFields.length ? "Minimum " : ""}${formatRupiah(cost.knownMoveInTotal)}`; } },
    { label: "Perjalanan", render: (index: number) => `${demoOptions.find((item) => item.id === matches[index].optionId)!.oneWayCommuteMinutes ?? "Belum diketahui"} menit sekali jalan` },
    { label: "Keyakinan data", render: (index: number) => confidenceLabels[matches[index].confidence] },
  ];
  return <section aria-labelledby="compare-title"><h2 id="compare-title" className="section-title">Perbandingan berdampingan</h2><p className="muted">Nilai yang belum diketahui tetap ditandai dan tidak ditampilkan sebagai nol.</p><div className="compare-wrap"><table className="compare-table"><caption className="sr-only">Perbandingan tiga pilihan kos fiktif</caption><thead><tr><th scope="col">Kriteria</th>{matches.map((match) => <th scope="col" key={match.optionId}>{match.optionName}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th>{matches.map((match, index) => <td data-option={match.optionName} key={match.optionId}>{row.render(index)}</td>)}</tr>)}<tr><th scope="row">Rincian skor</th>{matches.map((match) => <td data-option={match.optionName} key={match.optionId}><div className="score-bars">{match.criteria.map((item) => <div className="score-row" key={item.key}><span>{criterionLabels[item.key]}</span><div className="bar" aria-hidden="true"><span style={{ width: `${item.score ?? 0}%` }} /></div><strong>{item.score === null ? "—" : Math.round(item.score)}</strong></div>)}</div></td>)}</tr></tbody></table></div></section>;
}

export function KosMatchWorkspace() {
  const [view, setView] = useState<View>("landing");
  const [project, setProject] = useState<ComparisonProject>(demoProject);
  if (view === "landing") return <Landing onStart={() => setView("setup")} onDemo={() => { setProject(demoProject); setView("results"); }} />;
  if (view === "setup") return <Setup onCancel={() => setView("landing")} onComplete={(value) => { setProject(value); setView("results"); }} />;
  return <Results project={project} onReset={() => setView("landing")} />;
}
