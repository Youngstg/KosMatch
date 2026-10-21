"use client";

import { useId, useMemo, useState, type FormEvent } from "react";

import type { AccommodationOption, ComparisonProject, MoneyValue } from "@/domain/entities";
import {
  MAX_FIELD_RUPIAH,
  formatRupiah,
} from "@/lib/currency";
import {
  SIMULATABLE_RECURRING_FIELDS,
  simulateCost,
  type CostSimulationChanges,
  type CostSimulationResult,
  type SimulatableRecurringField,
} from "@/features/comparison/simulation";

const recurringFieldLabels: Readonly<Record<SimulatableRecurringField, string>> = {
  electricity: "Listrik",
  water: "Air",
  internet: "Internet",
  laundry: "Laundry",
  otherRecurring: "Biaya rutin lain",
};

export interface CostSimulatorProps {
  readonly project: ComparisonProject;
  readonly option: AccommodationOption;
  readonly onApply?: (
    project: ComparisonProject,
    option: AccommodationOption,
    result: CostSimulationResult,
  ) => void | Promise<void>;
}

function parseInteger(value: string, minimum: number, maximum: number): number | null {
  if (value.trim().length === 0) return null;
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= minimum && parsed <= maximum
    ? parsed
    : null;
}

function simulatedMoney(value: number, original: MoneyValue): MoneyValue {
  return original.amount === value ? { ...original } : { amount: value, origin: "estimated" };
}

function signedRupiah(value: number): string {
  if (value === 0) return formatRupiah(0);
  return `${value > 0 ? "+" : "−"}${formatRupiah(Math.abs(value))}`;
}

function initialRecurringField(option: AccommodationOption): SimulatableRecurringField {
  return (
    SIMULATABLE_RECURRING_FIELDS.find(
      (field) => option[field].origin === "unknown",
    ) ?? "electricity"
  );
}

function CostSimulatorForm({ project, option, onApply }: CostSimulatorProps) {
  const headingId = useId();
  const helpId = useId();
  const [commuteDays, setCommuteDays] = useState(
    String(project.commuteDaysPerMonth),
  );
  const [transportCost, setTransportCost] = useState(
    option.roundTripTransportCost.amount === null
      ? ""
      : String(option.roundTripTransportCost.amount),
  );
  const [recurringField, setRecurringField] = useState<SimulatableRecurringField>(
    initialRecurringField(option),
  );
  const [recurringAmount, setRecurringAmount] = useState(
    option[initialRecurringField(option)].amount === null
      ? ""
      : String(option[initialRecurringField(option)].amount),
  );
  const [applyState, setApplyState] = useState<"idle" | "applying" | "saved" | "error">("idle");

  const calculation = useMemo((): {
    readonly result: CostSimulationResult | null;
    readonly error: string | null;
  } => {
    const parsedDays = parseInteger(commuteDays, 0, 31);
    const parsedTransport = parseInteger(transportCost, 0, MAX_FIELD_RUPIAH);
    const parsedRecurring = parseInteger(recurringAmount, 0, MAX_FIELD_RUPIAH);

    if (parsedDays === null) {
      return { result: null, error: "Hari perjalanan harus antara 0 dan 31." };
    }
    if (transportCost.trim().length > 0 && parsedTransport === null) {
      return { result: null, error: "Biaya transportasi harus berupa Rupiah yang valid." };
    }
    if (recurringAmount.trim().length > 0 && parsedRecurring === null) {
      return { result: null, error: "Biaya rutin harus berupa Rupiah yang valid." };
    }

    const changes: CostSimulationChanges = {
      commuteDaysPerMonth: parsedDays,
      ...(parsedTransport === null
        ? {}
        : {
            roundTripTransportCost: simulatedMoney(
              parsedTransport,
              option.roundTripTransportCost,
            ),
          }),
      ...(parsedRecurring === null
        ? {}
        : {
            recurringItem: {
              field: recurringField,
              value: simulatedMoney(parsedRecurring, option[recurringField]),
            },
          }),
    };

    try {
      return { result: simulateCost(project, option, changes), error: null };
    } catch (error: unknown) {
      return {
        result: null,
        error: error instanceof Error ? error.message : "Simulasi tidak dapat dihitung.",
      };
    }
  }, [commuteDays, option, project, recurringAmount, recurringField, transportCost]);

  const handleRecurringFieldChange = (field: SimulatableRecurringField) => {
    setRecurringField(field);
    setRecurringAmount(option[field].amount === null ? "" : String(option[field].amount));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (calculation.result !== null && onApply !== undefined) {
      setApplyState("applying");
      try {
        await onApply(
          calculation.result.simulatedProject,
          calculation.result.simulatedOption,
          calculation.result,
        );
        setApplyState("saved");
      } catch {
        setApplyState("error");
      }
    }
  };

  const result = calculation.result;

  return (
    <section className="panel" aria-labelledby={headingId}>
      <div className="workspace-head">
        <div>
          <div className="eyebrow">Skenario biaya</div>
          <h2 className="section-title" id={headingId}>Simulator biaya</h2>
          <p className="muted" id={helpId}>
            Ubah asumsi sementara untuk {option.name}. Data tersimpan tidak berubah
            sampai Anda menerapkannya.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} aria-describedby={helpId}>
        <div className="form-grid">
          <div className="field">
            <label htmlFor={`${headingId}-days`}>Hari perjalanan per bulan</label>
            <input
              className="input"
              id={`${headingId}-days`}
              type="number"
              inputMode="numeric"
              min={0}
              max={31}
              required
              value={commuteDays}
              onChange={(event) => setCommuteDays(event.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor={`${headingId}-transport`}>Biaya transportasi pulang-pergi</label>
            <div className="input-prefix">
              <span aria-hidden="true">Rp</span>
              <input
                className="input"
                id={`${headingId}-transport`}
                type="number"
                inputMode="numeric"
                min={0}
                max={MAX_FIELD_RUPIAH}
                value={transportCost}
                onChange={(event) => setTransportCost(event.target.value)}
                aria-describedby={`${headingId}-transport-help`}
              />
            </div>
            <small id={`${headingId}-transport-help`}>
              Kosongkan untuk mempertahankan nilai yang belum diketahui.
            </small>
          </div>

          <div className="field">
            <label htmlFor={`${headingId}-recurring-field`}>Satu biaya rutin untuk diuji</label>
            <select
              className="input"
              id={`${headingId}-recurring-field`}
              value={recurringField}
              onChange={(event) =>
                handleRecurringFieldChange(
                  event.target.value as SimulatableRecurringField,
                )
              }
            >
              {SIMULATABLE_RECURRING_FIELDS.map((field) => (
                <option value={field} key={field}>
                  {recurringFieldLabels[field]}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor={`${headingId}-recurring-amount`}>
              Estimasi {recurringFieldLabels[recurringField].toLowerCase()} per bulan
            </label>
            <div className="input-prefix">
              <span aria-hidden="true">Rp</span>
              <input
                className="input"
                id={`${headingId}-recurring-amount`}
                type="number"
                inputMode="numeric"
                min={0}
                max={MAX_FIELD_RUPIAH}
                value={recurringAmount}
                onChange={(event) => setRecurringAmount(event.target.value)}
                aria-describedby={`${headingId}-recurring-help`}
              />
            </div>
            <small id={`${headingId}-recurring-help`}>
              Nilai simulasi ditandai sebagai estimasi bila berbeda dari data tersimpan.
            </small>
          </div>
        </div>

        {calculation.error !== null ? (
          <p className="unknown" role="alert">{calculation.error}</p>
        ) : null}

        {result !== null ? (
          <div aria-live="polite">
            <div className="summary-strip">
              <div className="summary-item">
                <span className="muted">
                  {result.currentEstimate.hasUnknownMonthlyValues
                    ? "Estimasi minimum saat ini"
                    : "Estimasi saat ini"}
                </span>
                <strong>{formatRupiah(result.currentEstimate.knownMonthlyTotal)}</strong>
              </div>
              <div className="summary-item">
                <span className="muted">
                  {result.simulatedEstimate.hasUnknownMonthlyValues
                    ? "Estimasi minimum simulasi"
                    : "Estimasi simulasi"}
                </span>
                <strong>{formatRupiah(result.simulatedEstimate.knownMonthlyTotal)}</strong>
              </div>
              <div className="summary-item">
                <span className="muted">Selisih per bulan</span>
                <strong>{signedRupiah(result.differencePerMonth)}</strong>
              </div>
            </div>
            <p className="muted">
              Dampak 6 bulan: {signedRupiah(result.differenceOverSixMonths)}. Dampak
              12 bulan: {signedRupiah(result.differenceOverTwelveMonths)}.
            </p>
            <p className="muted">
              Asumsi: {result.assumptions.commuteDaysPerMonth} hari perjalanan dan {" "}
              {result.assumptions.roundTripTransportCost.amount === null
                ? "biaya transportasi belum diketahui"
                : `${formatRupiah(result.assumptions.roundTripTransportCost.amount)} pulang-pergi`}
              {result.assumptions.recurringItem === null ||
              result.assumptions.recurringItem.value.amount === null
                ? "."
                : `, serta ${recurringFieldLabels[
                    result.assumptions.recurringItem.field
                  ].toLowerCase()} ${formatRupiah(
                    result.assumptions.recurringItem.value.amount,
                  )} per bulan.`}
            </p>
            {result.differenceUsesMinimumEstimate ? (
              <p className="unknown">
                Selisih membandingkan estimasi minimum karena masih ada biaya yang
                belum diketahui.
              </p>
            ) : null}
          </div>
        ) : null}

        {onApply !== undefined ? (
          <div className="form-actions">
            <span className={applyState === "error" ? "unknown" : "muted"} role="status" aria-live="polite">{applyState === "applying" ? "Menyimpan perubahan…" : applyState === "saved" ? "Perubahan tersimpan." : applyState === "error" ? "Gagal menyimpan. Coba lagi." : "Perubahan belum disimpan."}</span>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={result === null || applyState === "applying"}
            >
              {applyState === "applying" ? "Menerapkan…" : "Terapkan Perubahan"}
            </button>
          </div>
        ) : null}
      </form>
    </section>
  );
}

export function CostSimulator(props: CostSimulatorProps) {
  const { project, option } = props;
  const valuesKey = [
    project.id,
    project.commuteDaysPerMonth,
    option.id,
    option.roundTripTransportCost.amount ?? "unknown",
    ...SIMULATABLE_RECURRING_FIELDS.map(
      (field) => option[field].amount ?? "unknown",
    ),
  ].join(":");

  return <CostSimulatorForm key={valuesKey} {...props} />;
}
