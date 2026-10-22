"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type ChangeEvent } from "react";
import { AlertTriangle, Check, Clock3, Download, FileUp, Info, MapPin, Pencil, Plus, Printer, RotateCcw, Scale, Sparkles, Star, Trash2 } from "lucide-react";
import { demoOptions, demoProject } from "@/data/demo";
import { deleteKosMatchDatabase, IndexedDbProjectRepository } from "@/data/indexeddb";
import { calculateCost } from "@/domain/costing";
import type { AccommodationOption, ComparisonProject, CriterionKey } from "@/domain/entities";
import { matchAndRank } from "@/domain/scoring";
import { FACILITY_DEFINITIONS, RULE_DEFINITIONS } from "@/domain/validation";
import { CostSimulator } from "@/features/comparison";
import { DecisionBoard, PrintSummaryView, updateShortlist, type DecisionState } from "@/features/decisions";
import { PreferencesForm } from "@/features/preferences";
import {
  confirmProjectImport,
  exportProjectAsJson,
  generateBackupFilename,
  MAX_IMPORT_SIZE_BYTES,
  parseProjectImport,
} from "@/features/projects/services";
import { formatRupiah } from "@/lib/currency";
import { calculateDestinationDistance } from "@/domain/distance";
import { formatDistance } from "@/lib/geo";
import { OptionEditor } from "@/features/workspace/components/option-editor";

type View = "loading" | "landing" | "setup" | "project" | "editor" | "error";
type Tab = "overview" | "compare" | "decision" | "simulator" | "preferences" | "data";
type Sort = "match" | "cost" | "commute" | "distance" | "recent";
type Filter = "all" | "eligible" | "withinBudget" | "complete" | "unknown" | "needsVerification";

const criteria: readonly { key: CriterionKey; label: string }[] = [
  { key: "cost", label: "Biaya total" }, { key: "commute", label: "Perjalanan" }, { key: "facilities", label: "Fasilitas" }, { key: "environment", label: "Lingkungan" }, { key: "ruleFit", label: "Aturan kos" },
];
const criterionLabels: Record<CriterionKey, string> = Object.fromEntries(criteria.map((item) => [item.key, item.label])) as Record<CriterionKey, string>;
const confidenceLabels = { high: "Tinggi", medium: "Sedang", low: "Rendah" } as const;
const monthlyFieldLabels: Record<string, string> = { rent: "sewa", electricity: "listrik", water: "air", internet: "internet", laundry: "laundry", otherRecurring: "biaya lain", monthlyTransport: "transportasi" };
type Match = ReturnType<typeof matchAndRank>[number];
type ComparisonRow = Readonly<{ label: string; render: (match: Match) => string }>;
type ComparisonGroup = Readonly<{ key: string; label: string; rows: readonly ComparisonRow[] }>;

function formatMoneyValue(value: AccommodationOption["rent"]): string {
  return value.amount === null ? "Belum diketahui" : formatRupiah(value.amount);
}

function getFacilityValue(option: AccommodationOption, code: string): boolean | "unknown" {
  return option.facilityValues[code] ?? option.facilityCodes.includes(code);
}

function Brand() {
  return (
    <div className="brand" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span className="logo" style={{ overflow: "hidden", padding: 0, background: "transparent", borderRadius: "10px", width: "36px", height: "36px", border: "1px solid rgba(255,255,255,0.15)", display: "flex" }}>
        <Image
          src="/kosmatch-logo-3d.jpg"
          alt="KosMatch Logo"
          width={36}
          height={36}
          style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
        />
      </span>
      <span>KosMatch</span>
    </div>
  );
}
function newId() { return crypto.randomUUID(); }

let browserRepository: IndexedDbProjectRepository | null = null;
function getBrowserRepository(): IndexedDbProjectRepository {
  browserRepository ??= new IndexedDbProjectRepository();
  return browserRepository;
}

import { LandingView } from "@/features/landing";
import { WorkspaceSkeleton } from "./workspace-skeleton";


function Compare({ project, options, matches, requestedOptionId }: { project: ComparisonProject; options: readonly AccommodationOption[]; matches: ReturnType<typeof matchAndRank>; requestedOptionId: string | null }) {
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    const initialIds = matches.slice(0, 3).map((match) => match.optionId);
    if (requestedOptionId === null || initialIds.includes(requestedOptionId)) return initialIds;
    if (initialIds.length < 3) return [...initialIds, requestedOptionId];
    return [...initialIds.slice(0, 2), requestedOptionId];
  });
  const [showDifferencesOnly, setShowDifferencesOnly] = useState(false);
  const [mobileGroupKey, setMobileGroupKey] = useState("summary");
  const selected = matches.filter((match) => selectedIds.includes(match.optionId));
  const getOption = (id: string) => options.find((item) => item.id === id)!;

  const toggleSelection = (id: string) => setSelectedIds((current) => current.includes(id) ? current.filter((item) => item !== id) : current.length < 3 ? [...current, id] : current);
  const facilityStatus = (option: AccommodationOption, code: string) => {
    const value = getFacilityValue(option, code);
    return value === true ? "Tersedia" : value === false ? "Tidak tersedia" : "Belum diketahui";
  };
  const groups: readonly ComparisonGroup[] = [
    {
      key: "summary",
      label: "Ringkasan dan kelayakan",
      rows: [
        { label: "Kelayakan", render: (match) => match.eligible ? "Memenuhi kebutuhan wajib" : "Belum memenuhi kebutuhan wajib" },
        {
          label: "Skor",
          render: (match) =>
            match.score === null
              ? "Belum dapat dihitung"
              : match.isTentative && match.scoreRange && match.scoreRange.min !== match.scoreRange.max
              ? `${match.scoreRange.min}% – ${match.scoreRange.max}% (perkiraan ${Math.round(match.score)}%)`
              : `${Math.round(match.score)}% cocok`,
        },
        ...criteria.map<ComparisonRow>((criterionItem) => ({
          label: `Rincian skor: ${criterionItem.label}`,
          render: (match) => {
            const result = match.criteria.find((item) => item.key === criterionItem.key)!;
            return `${result.score === null ? "Belum diketahui" : `${Math.round(result.score)}/100`} · ${result.explanation}`;
          },
        })),
      ],
    },
    {
      key: "monthly-cost",
      label: "Total dan rincian bulanan",
      rows: [
        { label: "Estimasi bulanan", render: (match) => { const cost = calculateCost(project, getOption(match.optionId)); return `${cost.hasUnknownMonthlyValues ? "Minimum " : ""}${formatRupiah(cost.knownMonthlyTotal)}`; } },
        { label: "Harga sewa", render: (match) => formatMoneyValue(getOption(match.optionId).rent) },
        { label: "Listrik", render: (match) => formatMoneyValue(getOption(match.optionId).electricity) },
        { label: "Air", render: (match) => formatMoneyValue(getOption(match.optionId).water) },
        { label: "Internet", render: (match) => formatMoneyValue(getOption(match.optionId).internet) },
        { label: "Laundry", render: (match) => formatMoneyValue(getOption(match.optionId).laundry) },
        { label: "Biaya lain", render: (match) => formatMoneyValue(getOption(match.optionId).otherRecurring) },
        { label: "Transportasi bulanan", render: (match) => { const value = calculateCost(project, getOption(match.optionId)).monthlyTransport; return value === null ? "Belum diketahui" : formatRupiah(value); } },
      ],
    },
    {
      key: "move-in",
      label: "Biaya awal masuk",
      rows: [{ label: "Biaya awal masuk", render: (match) => { const cost = calculateCost(project, getOption(match.optionId)); return `${cost.unknownMoveInFields.length ? "Minimum " : ""}${formatRupiah(cost.knownMoveInTotal)}`; } }],
    },
    {
      key: "commute",
      label: "Perjalanan",
      rows: [{ label: "Perjalanan sekali jalan", render: (match) => { const minutes = getOption(match.optionId).oneWayCommuteMinutes; return minutes === null ? `Belum diketahui ke ${project.destinationLabel}` : `${minutes} menit ke ${project.destinationLabel}`; } }, { label: "Jarak ke tujuan", render: (match) => { const d = calculateDestinationDistance(project, getOption(match.optionId)); return d === null ? "Lokasi belum diisi" : `±${formatDistance(d.estimatedRoadMeters)} (garis lurus ${formatDistance(d.straightMeters)})`; } }],
    },
    {
      key: "required-facilities",
      label: "Fasilitas wajib",
      rows: project.facilityPreferences.filter((item) => item.level === "required").map((item) => ({ label: item.label, render: (match) => facilityStatus(getOption(match.optionId), item.code) })),
    },
    {
      key: "desired-facilities",
      label: "Fasilitas diinginkan",
      rows: project.facilityPreferences.filter((item) => item.level === "desired").map((item) => ({ label: item.label, render: (match) => facilityStatus(getOption(match.optionId), item.code) })),
    },
    {
      key: "rules-environment",
      label: "Aturan dan lingkungan",
      rows: [
        { label: "Lingkungan", render: (match) => { const rating = getOption(match.optionId).environmentRating; return rating === null ? "Belum diketahui" : `${rating}/5`; } },
        ...project.rulePreferences.map<ComparisonRow>((item) => ({ label: item.label, render: (match) => { const value = getOption(match.optionId).ruleValues[item.code]; return value === undefined || value === "unknown" ? "Belum diketahui" : value === item.expectedValue ? "Sesuai" : "Tidak sesuai"; } })),
      ],
    },
    {
      key: "confidence",
      label: "Keyakinan data",
      rows: [
        { label: "Keyakinan data", render: (match) => `Keyakinan data: ${confidenceLabels[match.confidence]}` },
        { label: "Data biaya belum diketahui", render: (match) => calculateCost(project, getOption(match.optionId)).unknownMonthlyFields.map((field) => monthlyFieldLabels[field]).join(", ") || "Tidak ada" },
      ],
    },
    {
      key: "verification",
      label: "Pertanyaan untuk diverifikasi",
      rows: [{ label: "Pertanyaan verifikasi", render: (match) => getOption(match.optionId).verificationQuestions.map((question) => question.question).join("; ") || "Tidak ada" }],
    },
  ];
  const visibleGroups = groups.map((group) => ({
    ...group,
    rows: showDifferencesOnly ? group.rows.filter((row) => new Set(selected.map((match) => row.render(match))).size > 1) : group.rows,
  })).filter((group) => group.rows.length > 0);
  const mobileGroup = visibleGroups.find((group) => group.key === mobileGroupKey) ?? visibleGroups[0];

  const selector = <fieldset className="fieldset-reset compare-selector"><legend className="field-label">Pilihan yang dibandingkan ({selectedIds.length}/3)</legend><div className="chips">{matches.map((match) => { const active = selectedIds.includes(match.optionId); return <button type="button" className={`chip ${active ? "selected" : ""}`} aria-pressed={active} disabled={!active && selectedIds.length >= 3} onClick={() => toggleSelection(match.optionId)} key={match.optionId}>{active && <Check size={15} />} {match.optionName}</button>; })}</div></fieldset>;
  if (selected.length < 2) return <section aria-labelledby="compare-title"><h2 id="compare-title" className="section-title">Perbandingan berdampingan</h2><p className="muted">Pilih dua atau tiga opsi untuk dibandingkan.</p>{selector}<Empty title="Belum cukup pilihan" text="Pilih minimal dua pilihan kos untuk membandingkan." /></section>;

  return (
    <section aria-labelledby="compare-title">
      <h2 id="compare-title" className="section-title">Perbandingan berdampingan</h2>
      <p className="muted">Pilih dua atau tiga opsi. Nilai buruk dan data belum diketahui tidak disembunyikan.</p>
      {selector}
      <label className="compare-differences-toggle"><input type="checkbox" checked={showDifferencesOnly} onChange={(event) => setShowDifferencesOnly(event.target.checked)} /> Tampilkan perbedaan saja</label>
      {visibleGroups.length === 0 ? <Empty title="Tidak ada perbedaan" text="Semua nilai pada pilihan yang dibandingkan sama." /> : <>
        <div className="compare-desktop compare-wrap">
          <table className="compare-table">
            <caption className="sr-only">Perbandingan pilihan kos</caption>
            <thead><tr><th scope="col">Kriteria</th>{selected.map((match) => <th scope="col" key={match.optionId}>{match.optionName}</th>)}</tr></thead>
            {visibleGroups.map((group) => <tbody className="compare-group" key={group.key}><tr className="compare-group-heading"><th scope="rowgroup" colSpan={selected.length + 1}>{group.label}</th></tr>{group.rows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th>{selected.map((match) => <td data-option={match.optionName} key={match.optionId}>{row.render(match)}</td>)}</tr>)}</tbody>)}
          </table>
        </div>
        <div className="compare-mobile">
          <div className="field mobile-group-selector"><label htmlFor="mobile-compare-group">Grup perbandingan</label><select id="mobile-compare-group" className="input" value={mobileGroup?.key} onChange={(event) => setMobileGroupKey(event.target.value)}>{visibleGroups.map((group) => <option value={group.key} key={group.key}>{group.label}</option>)}</select></div>
          {mobileGroup && <section className="mobile-comparison-group" aria-labelledby={`mobile-group-${mobileGroup.key}`}><h3 id={`mobile-group-${mobileGroup.key}`}>{mobileGroup.label}</h3>{mobileGroup.rows.map((row) => <article className="panel mobile-comparison-row" key={row.label}><h4>{row.label}</h4>{selected.map((match) => <div className="detail-row" key={match.optionId}><strong>{match.optionName}</strong><span>{row.render(match)}</span></div>)}</article>)}</section>}
        </div>
      </>}
    </section>
  );
}

function Empty({ title, text, action }: { title:string; text:string; action?:React.ReactNode }) { return <div className="panel empty-state"><Scale size={40} color="var(--primary)" /><h2>{title}</h2><p className="muted">{text}</p>{action}</div>; }

function OptionCard({ project, option, match, onEdit, onDelete, onShortlist, onCompare, onSimulate }: { project: ComparisonProject; option: AccommodationOption; match: Match; onEdit: () => void; onDelete: () => void; onShortlist: () => void; onCompare: () => void; onSimulate: () => void }) {
  const [detail, setDetail] = useState(false);
  const cost = calculateCost(project, option);
  const requiredFacilities = project.facilityPreferences.filter((item) => item.level === "required");
  const tradeoff = match.tradeoffs[0] ?? (cost.hasUnknownMonthlyValues ? `Biaya ${cost.unknownMonthlyFields.map((field) => monthlyFieldLabels[field]).join(", ")} belum diketahui.` : "Tidak ada trade-off utama dari data yang tersedia.");
  return (
    <article className="option-card">
      <header>
        <h3>{option.name}</h3>
        <span className="muted">{option.area || "Area belum dicatat"}</span>
      </header>
      <div className="score-cost">
        <div className="score">
          {match.score === null
            ? "Belum dapat dihitung"
            : match.isTentative && match.scoreRange && match.scoreRange.min !== match.scoreRange.max
            ? `${match.scoreRange.min}% – ${match.scoreRange.max}%`
            : `${Math.round(match.score)}% cocok`}
        </div>
        <span className={`badge ${match.confidence === "low" ? "warn" : ""}`}>Keyakinan data: {confidenceLabels[match.confidence]}</span>
      </div>
      <div className="badges">
        <span className={`badge ${match.eligible ? "good" : "bad"}`}>{match.eligible ? <Check size={13} /> : <AlertTriangle size={13} />} {match.eligible ? "Memenuhi kebutuhan wajib" : "Belum memenuhi kebutuhan wajib"}</span>
        {match.isTentative && (
          <span className="badge warn" title={match.tentativeWarning ?? undefined}>
            Estimasi Sementara ({Math.round(match.score ?? 0)}%)
          </span>
        )}
        {match.savingsVsBudget !== null && match.savingsVsBudget !== undefined && match.savingsVsBudget > 0 && (
          <span className="badge good">
            Hemat {formatRupiah(match.savingsVsBudget)}/bln
          </span>
        )}
        {option.shortlisted && <span className="badge good"><Star size={13} fill="currentColor" /> Shortlist</span>}
      </div>
      <div className="cost">
        <small>{cost.hasUnknownMonthlyValues ? "Estimasi minimum bulanan" : "Estimasi bulanan"}</small>
        {formatRupiah(cost.knownMonthlyTotal)}
        <small>Harga sewa: {formatMoneyValue(option.rent)}</small>
      </div>
      <div className="badge"><Clock3 size={13} /> {option.oneWayCommuteMinutes === null ? "Belum diketahui" : `${option.oneWayCommuteMinutes} menit`} ke {project.destinationLabel}</div>{calculateDestinationDistance(project,option)!==null&&<div className="badge"><MapPin size={13} /> ±{formatDistance(calculateDestinationDistance(project,option)!.estimatedRoadMeters)} dari {project.destinationLabel}</div>}
      <div className="badges required-facilities" aria-label="Status fasilitas wajib">
        {requiredFacilities.length === 0 && <span className="badge"><Info size={13} /> Tidak ada fasilitas wajib</span>}
        {requiredFacilities.map((facility) => {
          const value = getFacilityValue(option, facility.code);
          return <span className={`badge ${value === true ? "good" : value === false ? "bad" : "warn"}`} key={facility.code}>{value === true ? <Check size={13} /> : value === false ? <AlertTriangle size={13} /> : <Info size={13} />} {facility.label}: {value === true ? "Tersedia" : value === false ? "Tidak tersedia" : "Belum diketahui"}</span>;
        })}
      </div>
      {cost.hasUnknownMonthlyValues && <p className="unknown"><Info size={14} /> Belum diketahui: {cost.unknownMonthlyFields.map((field) => monthlyFieldLabels[field]).join(", ")}</p>}
      <ul className="reasons">
        {match.strengths.slice(0, 2).map((reason) => <li className="strength" key={reason}><Check size={15} aria-hidden="true" /> <span><strong>Kekuatan:</strong> {reason}</span></li>)}
        <li className="tradeoff"><AlertTriangle size={15} aria-hidden="true" /> <span><strong>Trade-off:</strong> {tradeoff}</span></li>
      </ul>
      {detail && <div className="detail-panel"><h4>Rincian biaya bulanan</h4>{([['Sewa',option.rent],['Listrik',option.electricity],['Air',option.water],['Internet',option.internet],['Laundry',option.laundry],['Biaya lain',option.otherRecurring]] as const).map(([label,value])=><div className="detail-row" key={label}><strong>{label}</strong><span>{value.amount===null?"Belum diketahui":`${formatRupiah(value.amount)} · ${value.origin==='confirmed'?'Dikonfirmasi':'Perkiraan'}`}</span></div>)}<div className="detail-row"><strong>Transportasi bulanan</strong><span>{cost.monthlyTransport===null?"Belum diketahui":formatRupiah(cost.monthlyTransport)}</span></div><div className="detail-row"><strong>Biaya awal masuk</strong><span>{cost.unknownMoveInFields.length?"Estimasi minimum ":""}{formatRupiah(cost.knownMoveInTotal)}</span></div><h4>Rincian kriteria</h4>{match.criteria.map((item)=><div className="detail-row" key={item.key}><strong>{criterionLabels[item.key]}: {item.score===null?"Data belum lengkap":`${Math.round(item.score)}/100`}</strong><span>{item.explanation}</span></div>)}<h4>Fasilitas dan aturan</h4>{Object.entries(FACILITY_DEFINITIONS).map(([code,label])=><div className="detail-row" key={code}><strong>{label}</strong><span>{getFacilityValue(option, code)===true?'Tersedia':getFacilityValue(option, code)===false?'Tidak tersedia':'Belum diketahui'}</span></div>)}{Object.entries(RULE_DEFINITIONS).map(([code,label])=><div className="detail-row" key={code}><strong>{label}</strong><span>{option.ruleValues[code]===true?'Sesuai':option.ruleValues[code]===false?'Tidak sesuai':'Belum diketahui'}</span></div>)}<p><strong>Terakhir diperiksa:</strong> {option.lastCheckedAt??"Belum dicatat"}</p>{option.sourceUrl&&<p><a href={option.sourceUrl} target="_blank" rel="noopener noreferrer">Buka sumber eksternal</a></p>}<p><strong>Catatan:</strong> {option.notes||"Belum ada catatan."}</p></div>}
      <div className="card-actions">
        <button className="btn btn-secondary" aria-expanded={detail} onClick={() => setDetail(!detail)}>Detail</button>
        <button className="btn btn-secondary" onClick={onCompare}><Scale size={17} /> Bandingkan</button>
        <button className="btn btn-ghost" aria-pressed={option.shortlisted} onClick={onShortlist}><Star size={17} fill={option.shortlisted ? "currentColor" : "none"} /> Shortlist</button>
        <button className="btn btn-ghost" onClick={onSimulate}>Simulasi</button>
        <button className="icon-btn" aria-label={`Edit ${option.name}`} onClick={onEdit}><Pencil size={17} /></button>
        <button className="icon-btn danger" aria-label={`Hapus ${option.name}`} onClick={onDelete}><Trash2 size={17} /></button>
      </div>
    </article>
  );
}

function ProjectWorkspace({ repository, projects, project, initialOptions, onProjectDeleted, onBack, onSwitchProject, onNewProject, onLoadDemo }: { repository:IndexedDbProjectRepository; projects:readonly ComparisonProject[]; project:ComparisonProject; initialOptions:AccommodationOption[]; onProjectDeleted:()=>void; onBack:()=>void; onSwitchProject:(id:string)=>Promise<void>; onNewProject:()=>void; onLoadDemo:()=>Promise<void> }) {
  const [currentProject,setCurrentProject]=useState(project); const [options,setOptions]=useState<AccommodationOption[]>(initialOptions); const [tab,setTab]=useState<Tab>("overview"); const [editing,setEditing]=useState<AccommodationOption|undefined>(); const [showEditor,setShowEditor]=useState(false); const [sort,setSort]=useState<Sort>("match"); const [filter,setFilter]=useState<Filter>("all"); const [simulated,setSimulated]=useState<string|null>(null); const [notice,setNotice]=useState<string|null>(null); const [requestedComparisonOptionId,setRequestedComparisonOptionId]=useState<string|null>(null);
  const matches=useMemo(()=>matchAndRank(currentProject,options),[currentProject,options]);
  const visible=useMemo(()=>{const list=matches.filter((m)=>{const cost=calculateCost(currentProject,options.find((o)=>o.id===m.optionId)!);return filter==="all"||(filter==="eligible"&&m.eligible)||(filter==="withinBudget"&&!cost.hasUnknownMonthlyValues&&cost.knownMonthlyTotal<=currentProject.monthlyBudget)||(filter==="complete"&&!cost.hasUnknownMonthlyValues)||(filter==="unknown"&&cost.hasUnknownMonthlyValues)||(filter==="needsVerification"&&options.find((o)=>o.id===m.optionId)!.verificationQuestions.some((q)=>q.status!=="confirmed"));});if(sort==="cost")list.sort((a,b)=>calculateCost(currentProject,options.find(o=>o.id===a.optionId)!).knownMonthlyTotal-calculateCost(currentProject,options.find(o=>o.id===b.optionId)!).knownMonthlyTotal);if(sort==="commute")list.sort((a,b)=>(options.find(o=>o.id===a.optionId)!.oneWayCommuteMinutes??999)-(options.find(o=>o.id===b.optionId)!.oneWayCommuteMinutes??999));if(sort==="distance"){const dist=(id:string)=>calculateDestinationDistance(currentProject,options.find((x)=>x.id===id)!)?.straightMeters??Number.MAX_SAFE_INTEGER;list.sort((a,b)=>dist(a.optionId)-dist(b.optionId));}if(sort==="recent")list.sort((a,b)=>options.find(o=>o.id===b.optionId)!.createdAt.localeCompare(options.find(o=>o.id===a.optionId)!.createdAt));return list;},[matches,sort,filter,currentProject,options]);
  const saveOption=async(option:AccommodationOption)=>{await repository.saveOption(option);setOptions((all)=>[...all.filter((item)=>item.id!==option.id),option]);setShowEditor(false);setEditing(undefined);setNotice("Pilihan berhasil disimpan.");};
  const saveDecision=async(state:DecisionState)=>{const now=new Date().toISOString();const updatedProject={...state.project,updatedAt:now};const updatedOptions=state.options.map((option)=>({...option,updatedAt:now}));await repository.saveProject(updatedProject);await Promise.all(updatedOptions.map((option)=>repository.saveOption(option)));setCurrentProject(updatedProject);setOptions(updatedOptions);setNotice("Keputusan tersimpan.");};
  const toggleShortlist=async(id:string)=>saveDecision(updateShortlist({project:currentProject,options},id,!options.find((o)=>o.id===id)!.shortlisted));
  const deleteOption=async(option:AccommodationOption)=>{if(!confirm("Hapus pilihan kos ini? Tindakan ini hanya memengaruhi opsi ini, bukan seluruh proyek."))return;await repository.deleteOption(option.id);if(currentProject.favoriteOptionId===option.id){const updatedProject={...currentProject,favoriteOptionId:null,updatedAt:new Date().toISOString()};await repository.saveProject(updatedProject);setCurrentProject(updatedProject);}setOptions((all)=>all.filter((item)=>item.id!==option.id));setNotice("Pilihan dihapus.");};
  if(showEditor)return <OptionEditor project={currentProject} initialOption={editing} onSaveAction={saveOption} onCancelAction={()=>{setShowEditor(false);setEditing(undefined);}}/>;
  const eligibleCount=matches.filter((m)=>m.eligible).length; const simulatedOption=options.find((o)=>o.id===(simulated??options[0]?.id));
  return <div className="shell"><header className="topbar no-print"><div className="container header-inner"><div className="project-switcher"><Brand/><label className="sr-only" htmlFor="project-switcher">Pilih proyek</label><select id="project-switcher" className="input" value={currentProject.id} onChange={(event)=>void onSwitchProject(event.target.value)}>{projects.map((item)=><option value={item.id} key={item.id}>{item.name}</option>)}</select></div><div className="actions compact"><button className="btn btn-ghost" onClick={onBack}>Beranda</button><button className="btn btn-secondary" onClick={onNewProject}><Plus size={18}/> Proyek baru</button><button className="btn btn-primary" onClick={()=>{setEditing(undefined);setShowEditor(true);}}><Plus size={18}/> Tambah Kos Manual</button></div></div></header><main className="container workspace"><div className="workspace-head"><div><div className="eyebrow">Ruang keputusan</div><h1>{currentProject.name}</h1><p className="muted"><MapPin size={15}/> Tujuan: {currentProject.destinationLabel}</p></div><div className="badges">{currentProject.name.includes("(Demo)")&&<span className="badge warn"><Info size={14}/> Data contoh fiktif</span>}<span className="badge good">Tersimpan di perangkat</span></div></div>{currentProject.name.includes("(Demo)")&&<p className="disclaimer"><Info size={17}/> Nama, harga, alamat, dan ketersediaan pada data contoh ini bersifat fiktif.</p>}{notice&&<div className="inline-alert good" role="status"><Check size={18}/>{notice}<button className="btn btn-ghost" onClick={()=>setNotice(null)}>Tutup</button></div>}<nav className="nav-tabs no-print" aria-label="Navigasi proyek">{([['overview','Ringkasan'],['compare','Bandingkan'],['decision','Keputusan'],['simulator','Simulator'],['preferences','Preferensi'],['data','Data & backup']] as const).map(([key,label])=><button className={`nav-tab ${tab===key?"active":""}`} aria-current={tab===key?"page":undefined} onClick={()=>setTab(key)} key={key}>{label}</button>)}</nav><div className="summary-strip"><div className="summary-item"><span className="muted">Anggaran total</span><strong>{formatRupiah(currentProject.monthlyBudget)} / bulan</strong></div><div className="summary-item"><span className="muted">Batas perjalanan</span><strong>{currentProject.maxOneWayCommuteMinutes} menit</strong></div><div className="summary-item"><span className="muted">Memenuhi wajib</span><strong>{eligibleCount} dari {matches.length} pilihan</strong></div></div>
    {tab==="overview"&&(options.length===0?<Empty title="Belum ada pilihan kos. Tambahkan yang pertama atau coba data contoh." text="Siapkan biaya, perjalanan, fasilitas, dan aturan untuk setiap pilihan." action={<div className="actions compact"><button className="btn btn-primary" aria-label="Tambah pilihan pertama" onClick={()=>setShowEditor(true)}><Plus size={18}/> Tambah Kos Manual</button><button className="btn btn-secondary" onClick={()=>void onLoadDemo()}><Sparkles size={18}/> Coba Data Contoh</button></div>}/>:<><div className="toolbar"><div className="field"><label htmlFor="sort">Urutkan</label><select id="sort" className="input" value={sort} onChange={(e)=>setSort(e.target.value as Sort)}><option value="match">Kecocokan</option><option value="cost">Biaya bulanan</option><option value="commute">Perjalanan</option><option value="distance">Jarak ke tujuan</option><option value="recent">Baru ditambahkan</option></select></div><div className="field"><label htmlFor="filter">Filter</label><select id="filter" className="input" value={filter} onChange={(e)=>setFilter(e.target.value as Filter)}><option value="all">Semua pilihan</option><option value="eligible">Memenuhi fasilitas wajib</option><option value="withinBudget">Dalam anggaran</option><option value="complete">Biaya lengkap</option><option value="unknown">Ada biaya belum diketahui</option><option value="needsVerification">Perlu verifikasi</option></select></div></div>{visible.length===0?<Empty title="Tidak ada hasil" text="Ubah filter untuk melihat pilihan lain."/>:<div>{([{eligible:true,title:"Memenuhi kebutuhan wajib"},{eligible:false,title:"Perlu dipertimbangkan ulang"}] as const).map((group)=>{const grouped=visible.filter((match)=>match.eligible===group.eligible);return grouped.length===0?null:<section aria-label={group.title} key={group.title}><h2 className="group-title">{group.eligible?<Check size={21} color="var(--accent)"/>:<AlertTriangle size={21} color="var(--danger)"/>}{group.title}</h2><div className="option-grid">{grouped.map((match)=>{const option=options.find((o)=>o.id===match.optionId)!;return <OptionCard project={currentProject} option={option} match={match} onEdit={()=>{setEditing(option);setShowEditor(true);}} onDelete={()=>deleteOption(option)} onShortlist={()=>toggleShortlist(option.id)} onCompare={()=>{setRequestedComparisonOptionId(option.id);setTab("compare");}} onSimulate={()=>{setSimulated(option.id);setTab("simulator");}} key={option.id}/>})}</div></section>;})}</div>}</>)}
    {tab==="compare"&&<Compare project={currentProject} options={options} matches={matches} requestedOptionId={requestedComparisonOptionId}/>} {tab==="decision"&&<><DecisionBoard state={{project:currentProject,options}} onChange={saveDecision}/><div className="print-block"><PrintSummaryView project={currentProject} options={options}/></div></>} {tab==="simulator"&&(simulatedOption?<><div className="field simulator-select"><label htmlFor="simulate-option">Pilihan yang disimulasikan</label><select id="simulate-option" className="input" value={simulatedOption.id} onChange={(e)=>setSimulated(e.target.value)}>{options.map((o)=><option value={o.id} key={o.id}>{o.name}</option>)}</select></div><CostSimulator project={currentProject} option={simulatedOption} onApply={async(projectValue,optionValue)=>{await repository.saveProject(projectValue);await repository.saveOption(optionValue);setCurrentProject(projectValue);setOptions((all)=>all.map((item)=>item.id===optionValue.id?optionValue:item));setNotice("Hasil simulasi diterapkan dan disimpan.");}}/></>:<Empty title="Belum ada pilihan" text="Tambahkan pilihan untuk menjalankan simulasi."/>)}
    {tab==="preferences"&&<PreferencesForm mode="edit" initialProject={currentProject} onCancel={()=>setTab("overview")} onSave={async(value)=>{await repository.saveProject(value);setCurrentProject(value);setNotice("Preferensi disimpan dan semua skor dihitung ulang.");setTab("overview");}}/>}
    {tab==="data"&&<DataTools repository={repository} project={currentProject} options={options} onProjectDeleted={onProjectDeleted}/>}<p className="disclaimer"><Info size={17}/> Skor mencerminkan data dan prioritas Anda. Periksa kembali seluruh biaya dan ketersediaan kepada pemilik kos.</p></main></div>;
}

function DataTools({repository,project,options,onProjectDeleted}:{repository:IndexedDbProjectRepository;project:ComparisonProject;options:AccommodationOption[];onProjectDeleted:()=>void}) {
  const [message,setMessage]=useState<string|null>(null);
  const download=async()=>{const json=await exportProjectAsJson(repository,project.id);const url=URL.createObjectURL(new Blob([json],{type:"application/json"}));const link=document.createElement("a");link.href=url;link.download=generateBackupFilename(project.name);link.click();URL.revokeObjectURL(url);setMessage("Backup JSON berhasil diunduh.");};
  return <section><h2 className="section-title">Data dan pemulihan</h2><div className="tool-grid"><article className="panel"><Download size={24}/><h3>Backup proyek</h3><p className="muted">Ekspor proyek dan {options.length} pilihan sebagai JSON tervalidasi.</p><button className="btn btn-secondary" onClick={download}>Unduh backup</button></article><article className="panel"><Printer size={24}/><h3>Ringkasan cetak</h3><p className="muted">Buat PDF melalui dialog cetak browser tanpa URL dan catatan privat.</p><button className="btn btn-secondary" onClick={()=>window.print()}>Cetak ringkasan</button></article><article className="panel danger-zone"><Trash2 size={24}/><h3>Hapus proyek</h3><p className="muted">Menghapus proyek ini beserta semua pilihannya dari perangkat.</p><button className="btn btn-danger" onClick={async()=>{if(!confirm("Hapus seluruh proyek perbandingan? Semua pilihan dan catatan akan hilang."))return;await repository.deleteProject(project.id);onProjectDeleted();}}>Hapus seluruh proyek</button></article></div>{message&&<div className="inline-alert good" role="status">{message}</div>}<div className="print-block"><PrintSummaryView project={project} options={options} selectedOptionIds={options.map((option)=>option.id)}/></div></section>;
}

export function KosMatchWorkspace() {
  const [repository, setRepository] = useState<IndexedDbProjectRepository | null>(null);
  const [view, setView] = useState<View>("landing");
  const [project, setProject] = useState<ComparisonProject | null>(null);
  const [projects, setProjects] = useState<ComparisonProject[]>([]);
  const [options, setOptions] = useState<AccommodationOption[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [importing, setImporting] = useState(false);

  const initialize = async () => {
    setView("loading");
    setError(null);
    try {
      const nextRepository = getBrowserRepository();
      const allProjects = await nextRepository.listProjects();
      const activeId = await nextRepository.getSetting<string>("activeProjectId");
      const loaded = allProjects.find((item) => item.id === activeId) ?? allProjects[0] ?? null;
      setProjects(allProjects);
      setProject(loaded);
      setOptions(loaded === null ? [] : await nextRepository.listOptions(loaded.id));
      setRepository(nextRepository);
      setView("landing");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Penyimpanan lokal tidak dapat dibuka.");
      setView("error");
    }
  };

  useEffect(() => {
    let active = true;
    if (typeof navigator !== "undefined" && navigator.storage?.persist) {
      void navigator.storage.persist().catch(() => {});
    }
    const nextRepository = getBrowserRepository();
    void nextRepository.listProjects().then(async (allProjects) => {
      const activeId = await nextRepository.getSetting<string>("activeProjectId");
      const loaded = allProjects.find((item) => item.id === activeId) ?? allProjects[0] ?? null;
      const loadedOptions = loaded === null ? [] : await nextRepository.listOptions(loaded.id);
      if (active) {
        setProjects(allProjects);
        setProject(loaded);
        setOptions(loadedOptions);
        setRepository(nextRepository);
      }
    }).catch((cause: unknown) => {
      if (active) {
        setError(cause instanceof Error ? cause.message : "Penyimpanan lokal tidak dapat dibuka.");
        setView("error");
      }
    });
    return () => {
      active = false;
    };
  }, []);

  const loadDemo = async () => {
    const activeRepository = repository ?? getBrowserRepository();
    const projectId = newId();
    const now = new Date().toISOString();
    const clonedProject = {
      ...demoProject,
      id: projectId,
      name: `${demoProject.name} (Demo)`,
      createdAt: now,
      updatedAt: now,
    };
    const clonedOptions = demoOptions.map((option) => ({
      ...option,
      id: newId(),
      projectId,
      verificationQuestions: option.verificationQuestions.map((q) => ({ ...q, id: newId() })),
      createdAt: now,
      updatedAt: now,
    }));
    await activeRepository.saveProjectBundle(clonedProject, clonedOptions);
    await activeRepository.saveSetting("activeProjectId", projectId);
    setRepository(activeRepository);
    setProjects((all) => [clonedProject, ...all]);
    setProject(clonedProject);
    setOptions(clonedOptions);
    setView("project");
  };

  const importFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > MAX_IMPORT_SIZE_BYTES) {
      setError(
        `Ukuran file import (${Math.round(file.size / 1024)} KB) melebihi batas maksimum ${Math.round(MAX_IMPORT_SIZE_BYTES / (1024 * 1024))} MB.`,
      );
      setView("error");
      return;
    }
    setImporting(true);
    try {
      const preview = parseProjectImport(await file.text());
      if (!confirm(`Impor proyek “${preview.projectName}” dengan ${preview.optionCount} pilihan?`)) return;
      const activeRepo = repository ?? getBrowserRepository();
      const imported = await confirmProjectImport(preview, activeRepo);
      await activeRepo.saveSetting("activeProjectId", imported.project.id);
      setRepository(activeRepo);
      setProjects((all) => [imported.project, ...all]);
      setProject(imported.project);
      setOptions([...imported.options]);
      setView("project");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Import gagal.");
      setView("error");
    } finally {
      setImporting(false);
    }
  };

  if (view === "loading") return <WorkspaceSkeleton />;
  if (view === "error") {
    return (
      <div className="center-state" role="alert">
        <AlertTriangle size={40} color="var(--danger)" />
        <h1>Data belum dapat dibuka</h1>
        <p className="muted">{error}</p>
        <div className="actions">
          <button className="btn btn-primary" onClick={initialize}>
            <RotateCcw size={18} /> Coba lagi
          </button>
          <label className="btn btn-secondary">
            <FileUp size={18} /> Impor backup
            <input className="sr-only" type="file" accept="application/json" onChange={importFile} disabled={importing} />
          </label>
        </div>
      </div>
    );
  }
  if (view === "landing") {
    return (
      <>
        <LandingView
          onStart={() => {
            if (repository === null) {
              setView("loading");
              const nextRepo = getBrowserRepository();
              void nextRepo.listProjects().then(() => {
                setRepository(nextRepo);
                setView("setup");
              });
            } else {
              setView("setup");
            }
          }}
          onDemo={loadDemo}
          hasSaved={project !== null}
          onResume={() => setView("project")}
        />
        <div className="floating-import">
          <label className="btn btn-secondary">
            <FileUp size={18} /> Impor backup
            <input className="sr-only" type="file" accept="application/json" onChange={importFile} disabled={importing} />
          </label>
          {project && (
            <button
              className="btn btn-ghost"
              onClick={async () => {
                if (!confirm("Hapus seluruh data KosMatch di perangkat ini?")) return;
                await repository?.close();
                browserRepository = null;
                await deleteKosMatchDatabase();
                setRepository(null);
                setProject(null);
                setProjects([]);
                setOptions([]);
                await initialize();
              }}
            >
              Hapus data lokal
            </button>
          )}
        </div>
      </>
    );
  }
  if (view === "setup") {
    return (
      <div className="shell">
        <header className="topbar">
          <div className="container header-inner">
            <Brand />
            <button className="btn btn-ghost" onClick={() => setView("landing")}>
              Keluar
            </button>
          </div>
        </header>
        <main className="container workspace">
          <PreferencesForm
            mode="create"
            onCancel={() => setView("landing")}
            onSave={async (value) => {
              const activeRepo = repository ?? getBrowserRepository();
              await activeRepo.saveProject(value);
              await activeRepo.saveSetting("activeProjectId", value.id);
              setRepository(activeRepo);
              setProjects((all) => [value, ...all]);
              setProject(value);
              setOptions([]);
              setView("project");
            }}
          />
        </main>
      </div>
    );
  }
  if (view === "project" && project) {
    return (
      <ProjectWorkspace
        key={project.id}
        repository={repository ?? getBrowserRepository()}
        projects={projects}
        project={project}
        initialOptions={options}
        onBack={() => setView("landing")}
        onNewProject={() => setView("setup")}
        onLoadDemo={loadDemo}
        onSwitchProject={async (id) => {
          const activeRepo = repository ?? getBrowserRepository();
          const selected = await activeRepo.getProject(id);
          if (selected === null) return;
          await activeRepo.saveSetting("activeProjectId", id);
          setProject(selected);
          setOptions(await activeRepo.listOptions(id));
        }}
        onProjectDeleted={() => {
          const activeRepo = repository ?? getBrowserRepository();
          void activeRepo.listProjects().then(async (remaining) => {
            setProjects(remaining);
            const next = remaining[0] ?? null;
            setProject(next);
            setOptions(next === null ? [] : await activeRepo.listOptions(next.id));
            if (next !== null) {
              await activeRepo.saveSetting("activeProjectId", next.id);
              setView("project");
            } else {
              setView("landing");
            }
          });
        }}
      />
    );
  }
  return null;
}
