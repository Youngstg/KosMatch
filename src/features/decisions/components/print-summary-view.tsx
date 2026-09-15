"use client";

import { useId, useState } from "react";

import { DEMO_DISCLAIMER } from "@/data/demo";
import type {
  AccommodationOption,
  ComparisonProject,
  Confidence,
  CriterionKey,
  MonthlyCostField,
  MoveInCostField,
  VerificationStatus,
} from "@/domain/entities";
import {
  buildPrintSummary,
  type PrintOptionSummary,
} from "@/features/decisions/print-summary";
import { formatRupiah } from "@/lib/currency";

const criterionLabels: Readonly<Record<CriterionKey, string>> = {
  cost: "Biaya total",
  commute: "Perjalanan",
  facilities: "Fasilitas",
  environment: "Lingkungan",
  ruleFit: "Aturan kos",
};

const confidenceLabels: Readonly<Record<Confidence, string>> = {
  high: "Tinggi",
  medium: "Sedang",
  low: "Rendah",
};

const monthlyCostFieldLabels: Readonly<Record<MonthlyCostField, string>> = {
  rent: "Sewa",
  electricity: "Listrik",
  water: "Air",
  internet: "Internet",
  laundry: "Laundry",
  otherRecurring: "Biaya rutin lainnya",
  monthlyTransport: "Transportasi bulanan",
};

const moveInCostFieldLabels: Readonly<Record<MoveInCostField, string>> = {
  deposit: "Deposit",
  administrationFee: "Biaya administrasi",
  firstRentPayment: "Pembayaran sewa pertama",
};

const verificationStatusLabels: Readonly<Record<VerificationStatus, string>> = {
  unverified: "Belum diverifikasi",
  confirmed: "Terkonfirmasi",
  changed: "Informasi berubah",
};

const dateFormatter = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "long",
});

export interface PrintSummaryViewProps {
  readonly project: ComparisonProject;
  readonly options: readonly AccommodationOption[];
  readonly selectedOptionIds?: readonly string[];
  readonly showPrintAction?: boolean;
}

function TextList({
  items,
  emptyText,
}: {
  readonly items: readonly string[];
  readonly emptyText: string;
}) {
  if (items.length === 0) return <p className="muted small">{emptyText}</p>;

  return (
    <ul className="reasons">
      {items.map((item, index) => (
        <li key={`${index}-${item}`}>{item}</li>
      ))}
    </ul>
  );
}

function OptionSummary({ option }: { readonly option: PrintOptionSummary }) {
  const headingId = useId();
  const costHeadingId = useId();
  const criteriaHeadingId = useId();
  const tradeoffsHeadingId = useId();
  const unknownHeadingId = useId();
  const considerationHeadingId = useId();
  const unknownCriteria = option.match.criteria.filter(
    (criterion) => criterion.score === null,
  );
  const pendingQuestions = option.verificationQuestions.filter(
    (question) => question.status !== "confirmed",
  );
  const hasUnknownValues =
    option.cost.unknownMonthlyFields.length > 0 ||
    option.cost.unknownMoveInFields.length > 0 ||
    option.match.unknownRequiredFacilities.length > 0 ||
    unknownCriteria.length > 0 ||
    pendingQuestions.length > 0;

  return (
    <article className="print-option" aria-labelledby={headingId}>
      <div className="badges">
        {option.favorite ? <span className="badge good">Favorit saat ini</span> : null}
        {option.shortlisted ? <span className="badge good">Shortlist</span> : null}
        <span className={`badge ${option.match.eligible ? "good" : "bad"}`}>
          {option.match.eligible
            ? "Memenuhi kebutuhan wajib"
            : "Belum memenuhi kebutuhan wajib"}
        </span>
        <span className={`badge ${option.match.confidence === "low" ? "warn" : ""}`}>
          Keyakinan data: {confidenceLabels[option.match.confidence]}
        </span>
      </div>

      <h3 id={headingId}>
        {option.name} — {option.match.score === null
          ? "Skor belum tersedia"
          : `${Math.round(option.match.score)}% cocok`}
      </h3>
      <p className="muted">{option.area || "Area belum dicatat"}</p>
      <p>{option.match.overview}</p>

      <section aria-labelledby={costHeadingId}>
        <h4 id={costHeadingId}>Rincian biaya bulanan dan saat mulai masuk</h4>
        <dl className="option-grid">
          <div className="summary-item">
            <dt className="muted">
              {option.cost.hasUnknownMonthlyValues
                ? "Estimasi minimum bulanan"
                : "Estimasi bulanan"}
            </dt>
            <dd>
              <strong>{formatRupiah(option.cost.knownMonthlyTotal)}</strong>
            </dd>
          </div>
          <div className="summary-item">
            <dt className="muted">Transportasi bulanan</dt>
            <dd>
              <strong>
                {option.cost.monthlyTransport === null
                  ? "Belum diketahui"
                  : formatRupiah(option.cost.monthlyTransport)}
              </strong>
            </dd>
          </div>
          <div className="summary-item">
            <dt className="muted">
              {option.cost.unknownMoveInFields.length > 0
                ? "Estimasi minimum biaya awal"
                : "Biaya awal"}
            </dt>
            <dd>
              <strong>{formatRupiah(option.cost.knownMoveInTotal)}</strong>
            </dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby={criteriaHeadingId}>
        <h4 id={criteriaHeadingId}>Rincian kriteria</h4>
        <div className="detail-panel">
          {option.match.criteria.map((criterion) => (
            <div className="detail-row" key={criterion.key}>
              <strong>
                {criterionLabels[criterion.key]} (bobot {criterion.weight}/5): {" "}
                {criterion.score === null
                  ? "Belum dapat dihitung"
                  : `${Math.round(criterion.score)}/100`}
              </strong>
              <span>{criterion.explanation}</span>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby={tradeoffsHeadingId}>
        <h4 id={tradeoffsHeadingId}>Kekuatan dan trade-off</h4>
        <h5>Kekuatan</h5>
        <TextList
          items={option.match.strengths}
          emptyText="Belum ada kekuatan yang teridentifikasi dari data saat ini."
        />
        <h5>Trade-off</h5>
        <TextList
          items={option.match.tradeoffs}
          emptyText="Belum ada trade-off yang teridentifikasi dari data saat ini."
        />
      </section>

      <section aria-labelledby={unknownHeadingId}>
        <h4 id={unknownHeadingId}>Data belum diketahui atau perlu diverifikasi</h4>
        {hasUnknownValues ? (
          <ul className="reasons">
            {option.cost.unknownMonthlyFields.map((field) => (
              <li key={`monthly-${field}`}>
                Biaya bulanan belum diketahui: {monthlyCostFieldLabels[field]}.
              </li>
            ))}
            {option.cost.unknownMoveInFields.map((field) => (
              <li key={`move-in-${field}`}>
                Biaya saat mulai masuk belum diketahui: {moveInCostFieldLabels[field]}.
              </li>
            ))}
            {option.match.unknownRequiredFacilities.map((facility) => (
              <li key={`facility-${facility}`}>
                Fasilitas wajib perlu dikonfirmasi: {facility}.
              </li>
            ))}
            {unknownCriteria.map((criterion) => (
              <li key={`criterion-${criterion.key}`}>
                {criterionLabels[criterion.key]}: {criterion.explanation}
              </li>
            ))}
            {pendingQuestions.map((question) => (
              <li key={`question-${question.id}`}>
                {question.question} ({verificationStatusLabels[question.status]})
              </li>
            ))}
          </ul>
        ) : (
          <p className="muted small">
            Tidak ada biaya, kriteria, atau pertanyaan verifikasi yang ditandai belum
            diketahui.
          </p>
        )}
      </section>

      {option.pros.length > 0 || option.concerns.length > 0 ? (
        <section aria-labelledby={considerationHeadingId}>
          <h4 id={considerationHeadingId}>Pertimbangan pribadi</h4>
          <h5>Kelebihan</h5>
          <TextList items={option.pros} emptyText="Belum ada kelebihan yang dicatat." />
          <h5>Kekhawatiran</h5>
          <TextList
            items={option.concerns}
            emptyText="Belum ada kekhawatiran yang dicatat."
          />
        </section>
      ) : null}
    </article>
  );
}

/** Renders a privacy-safe, print-ready decision summary. */
export function PrintSummaryView({
  project,
  options,
  selectedOptionIds,
  showPrintAction = true,
}: PrintSummaryViewProps) {
  const headingId = useId();
  const preferencesHeadingId = useId();
  const prioritiesHeadingId = useId();
  const optionsHeadingId = useId();
  const [generatedAt] = useState(() => new Date().toISOString());
  const selectedIds =
    selectedOptionIds === undefined ? null : new Set(selectedOptionIds);
  const includedOptions = options.filter((option) =>
    selectedIds === null ? option.shortlisted : selectedIds.has(option.id),
  );
  const summary = buildPrintSummary({
    project,
    options: includedOptions,
    generatedAt,
  });
  const optionSectionLabel =
    selectedOptionIds === undefined ? "Pilihan shortlist" : "Pilihan terpilih";

  return (
    <section className="print-summary" aria-labelledby={headingId}>
      <div className="workspace-head no-print">
        <div>
          <div className="eyebrow">Ringkasan keputusan</div>
          <h2 className="section-title" id={headingId}>Ringkasan siap cetak</h2>
          <p className="muted">
            URL sumber dan catatan privat tidak disertakan.
          </p>
        </div>
        {showPrintAction ? (
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => window.print()}
          >
            Cetak / simpan PDF
          </button>
        ) : null}
      </div>

      <div className="panel">
        <header>
          <div className="eyebrow">KosMatch</div>
          <h2>{summary.project.name}</h2>
          {summary.project.name.includes("(Demo)") ? <p><strong>{DEMO_DISCLAIMER}</strong></p> : null}
        </header>

        <section aria-labelledby={preferencesHeadingId}>
          <h3 id={preferencesHeadingId}>Preferensi proyek</h3>
          <dl className="option-grid">
            <div className="summary-item">
              <dt className="muted">Tujuan</dt>
              <dd><strong>{summary.project.destinationLabel}</strong></dd>
            </div>
            <div className="summary-item">
              <dt className="muted">Anggaran bulanan</dt>
              <dd><strong>{formatRupiah(summary.project.monthlyBudget)}</strong></dd>
            </div>
            <div className="summary-item">
              <dt className="muted">Batas perjalanan sekali jalan</dt>
              <dd>
                <strong>{summary.project.maxOneWayCommuteMinutes} menit</strong>
              </dd>
            </div>
            <div className="summary-item">
              <dt className="muted">Hari perjalanan per bulan</dt>
              <dd><strong>{summary.project.commuteDaysPerMonth} hari</strong></dd>
            </div>
          </dl>
        </section>

        <section aria-labelledby={prioritiesHeadingId}>
          <h3 id={prioritiesHeadingId}>Bobot kriteria dan fasilitas</h3>
          <div className="option-grid">
            <div className="detail-panel">
              <h4>Bobot kriteria</h4>
              <ul className="reasons">
                {(Object.keys(criterionLabels) as CriterionKey[]).map((key) => (
                  <li key={key}>
                    {criterionLabels[key]}: {summary.project.weights[key]} dari 5
                  </li>
                ))}
              </ul>
            </div>
            <div className="detail-panel">
              <h4>Fasilitas wajib</h4>
              <TextList
                items={summary.project.requiredFacilities}
                emptyText="Tidak ada fasilitas wajib."
              />
            </div>
            <div className="detail-panel">
              <h4>Fasilitas pilihan</h4>
              <TextList
                items={summary.project.desiredFacilities}
                emptyText="Tidak ada fasilitas pilihan."
              />
            </div>
          </div>
        </section>

        <section aria-labelledby={optionsHeadingId}>
          <h3 id={optionsHeadingId}>{optionSectionLabel}</h3>
          {summary.options.length === 0 ? (
            <p className="muted">
              {selectedOptionIds === undefined
                ? "Belum ada pilihan dalam shortlist."
                : "Tidak ada pilihan yang cocok dengan pilihan terpilih."}
            </p>
          ) : (
            summary.options.map((option) => (
              <OptionSummary option={option} key={option.id} />
            ))
          )}
        </section>

        <footer>
          <p className="muted small">
            Dihasilkan pada {" "}
            <time dateTime={summary.generatedAt} suppressHydrationWarning>
              {dateFormatter.format(new Date(summary.generatedAt))}
            </time>
            .
          </p>
          <p className="muted small"><strong>Disclaimer:</strong> {summary.disclaimer}</p>
        </footer>
      </div>
    </section>
  );
}
