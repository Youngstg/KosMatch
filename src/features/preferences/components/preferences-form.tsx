"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";

import type {
  ComparisonProject,
  CriterionKey,
  Importance,
  RequirementLevel,
} from "@/domain/entities";
import {
  comparisonProjectSchema,
  FACILITY_DEFINITIONS,
  MAX_RUPIAH,
  RULE_DEFINITIONS,
} from "@/domain/validation";
import { formatRupiah } from "@/lib/currency";

import styles from "./preferences-form.module.css";

type FacilityCode = keyof typeof FACILITY_DEFINITIONS;
type RuleCode = keyof typeof RULE_DEFINITIONS;
type Step = 1 | 2 | 3 | 4;
type SaveState = "idle" | "saving" | "saved";

interface CommonPreferencesFormProps {
  readonly onSave: (project: ComparisonProject) => Promise<void>;
  readonly onCancel: () => void;
}

export type PreferencesFormProps =
  | (CommonPreferencesFormProps & {
      readonly mode: "create";
      readonly initialProject?: never;
    })
  | (CommonPreferencesFormProps & {
      readonly mode: "edit";
      readonly initialProject: ComparisonProject;
    });

interface PreferencesDraft {
  name: string;
  destinationLabel: string;
  commuteDaysPerMonth: string;
  monthlyBudget: string;
  maxOneWayCommuteMinutes: string;
  weights: Record<CriterionKey, Importance>;
  facilityLevels: Partial<Record<FacilityCode, RequirementLevel>>;
  ruleExpectations: Partial<Record<RuleCode, boolean>>;
}

const facilityCodes = Object.keys(FACILITY_DEFINITIONS) as FacilityCode[];
const ruleCodes = Object.keys(RULE_DEFINITIONS) as RuleCode[];
const importanceValues: readonly Importance[] = [1, 2, 3, 4, 5];
const steps: readonly { number: Step; label: string }[] = [
  { number: 1, label: "Konteks" },
  { number: 2, label: "Anggaran dan perjalanan" },
  { number: 3, label: "Fasilitas dan aturan" },
  { number: 4, label: "Prioritas dan ringkasan" },
];
const criteria: readonly { key: CriterionKey; label: string }[] = [
  { key: "cost", label: "Total biaya" },
  { key: "commute", label: "Perjalanan" },
  { key: "facilities", label: "Fasilitas" },
  { key: "environment", label: "Lingkungan" },
  { key: "ruleFit", label: "Kesesuaian aturan" },
];
const importanceLabels: Readonly<Record<Importance, string>> = {
  1: "Tidak penting",
  2: "Sedikit penting",
  3: "Cukup penting",
  4: "Penting",
  5: "Sangat penting",
};

function initialFacilityLevels(
  project: ComparisonProject | undefined,
): Partial<Record<FacilityCode, RequirementLevel>> {
  const levels: Partial<Record<FacilityCode, RequirementLevel>> = {};
  for (const code of facilityCodes) {
    const preference = project?.facilityPreferences.find((item) => item.code === code);
    if (preference?.level === "required" || preference?.level === "desired") {
      levels[code] = preference.level;
    }
  }
  return levels;
}

function initialRuleExpectations(
  project: ComparisonProject | undefined,
): Partial<Record<RuleCode, boolean>> {
  const expectations: Partial<Record<RuleCode, boolean>> = {};
  for (const code of ruleCodes) {
    const preference = project?.rulePreferences.find((item) => item.code === code);
    if (preference !== undefined) expectations[code] = preference.expectedValue;
  }
  return expectations;
}

function createDraft(project: ComparisonProject | undefined): PreferencesDraft {
  return {
    name: project?.name ?? "",
    destinationLabel: project?.destinationLabel ?? "",
    commuteDaysPerMonth: String(project?.commuteDaysPerMonth ?? 20),
    monthlyBudget: project === undefined ? "" : String(project.monthlyBudget),
    maxOneWayCommuteMinutes: String(project?.maxOneWayCommuteMinutes ?? 30),
    weights: project === undefined
      ? { cost: 3, commute: 3, facilities: 3, environment: 3, ruleFit: 3 }
      : { ...project.weights },
    facilityLevels: initialFacilityLevels(project),
    ruleExpectations: initialRuleExpectations(project),
  };
}

function parseInteger(value: string): number {
  return value.trim() === "" ? Number.NaN : Number(value);
}

function integerError(
  value: string,
  label: string,
  minimum: number,
  maximum: number,
): string | null {
  const parsed = parseInteger(value);
  if (!Number.isInteger(parsed) || parsed < minimum || parsed > maximum) {
    return `${label} harus berupa angka bulat antara ${minimum} dan ${maximum}.`;
  }
  return null;
}

function validateStep(step: Step, draft: PreferencesDraft): string | null {
  if (step === 1) {
    const name = draft.name.trim();
    const destination = draft.destinationLabel.trim();
    if (name.length === 0) return "Nama perbandingan wajib diisi.";
    if (name.length > 80) return "Nama perbandingan maksimal 80 karakter.";
    if (destination.length === 0) return "Tujuan rutin wajib diisi.";
    if (destination.length > 120) return "Tujuan rutin maksimal 120 karakter.";
    return integerError(draft.commuteDaysPerMonth, "Hari perjalanan per bulan", 0, 31);
  }

  if (step === 2) {
    return (
      integerError(draft.monthlyBudget, "Anggaran bulanan", 0, MAX_RUPIAH) ??
      integerError(draft.maxOneWayCommuteMinutes, "Batas perjalanan", 0, 360)
    );
  }

  return null;
}

function displayBudget(value: string): string {
  const parsed = parseInteger(value);
  return Number.isInteger(parsed) && parsed >= 0 && parsed <= MAX_RUPIAH
    ? formatRupiah(parsed)
    : "belum valid";
}

function stepHeading(step: Step): string {
  switch (step) {
    case 1:
      return "Ceritakan konteks keseharian Anda";
    case 2:
      return "Tentukan batas yang realistis";
    case 3:
      return "Pilih kebutuhan fasilitas dan aturan";
    case 4:
      return "Atur prioritas dan periksa ringkasan";
  }
}

export function PreferencesForm(props: PreferencesFormProps) {
  const sourceProject = props.mode === "edit" ? props.initialProject : undefined;
  const [draft, setDraft] = useState<PreferencesDraft>(() => createDraft(sourceProject));
  const [step, setStep] = useState<Step>(1);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [error, setError] = useState<string | null>(null);
  const formId = useId();
  const errorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (error !== null) errorRef.current?.focus();
  }, [error]);

  const updateDraft = <Key extends keyof PreferencesDraft>(
    key: Key,
    value: PreferencesDraft[Key],
  ) => {
    setDraft((current) => ({ ...current, [key]: value }));
    setSaveState("idle");
  };

  const setFacilitySelected = (code: FacilityCode, selected: boolean) => {
    const next = { ...draft.facilityLevels };
    if (selected) next[code] ??= "desired";
    else delete next[code];
    updateDraft("facilityLevels", next);
  };

  const setFacilityLevel = (code: FacilityCode, level: RequirementLevel) => {
    updateDraft("facilityLevels", { ...draft.facilityLevels, [code]: level });
  };

  const setRuleExpectation = (code: RuleCode, expectedValue: boolean | undefined) => {
    const next = { ...draft.ruleExpectations };
    if (expectedValue === undefined) delete next[code];
    else next[code] = expectedValue;
    updateDraft("ruleExpectations", next);
  };

  const showError = (message: string) => {
    setError(message);
    setSaveState("idle");
  };

  const goNext = () => {
    const validationError = validateStep(step, draft);
    if (validationError !== null) {
      showError(validationError);
      return;
    }
    setError(null);
    if (step < 4) setStep((step + 1) as Step);
  };

  const goBack = () => {
    setError(null);
    if (step > 1) setStep((step - 1) as Step);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationError = validateStep(1, draft) ?? validateStep(2, draft);
    if (validationError !== null) {
      showError(validationError);
      return;
    }

    const now = new Date().toISOString();
    const candidate: ComparisonProject = {
      id: sourceProject?.id ?? crypto.randomUUID(),
      name: draft.name.trim(),
      destinationLabel: draft.destinationLabel.trim(),
      monthlyBudget: parseInteger(draft.monthlyBudget),
      maxOneWayCommuteMinutes: parseInteger(draft.maxOneWayCommuteMinutes),
      commuteDaysPerMonth: parseInteger(draft.commuteDaysPerMonth),
      weights: { ...draft.weights },
      facilityPreferences: facilityCodes.flatMap((code) => {
        const level = draft.facilityLevels[code];
        return level === undefined ? [] : [{ code, label: FACILITY_DEFINITIONS[code], level }];
      }),
      rulePreferences: ruleCodes.flatMap((code) => {
        const expectedValue = draft.ruleExpectations[code];
        return expectedValue === undefined
          ? []
          : [{ code, label: RULE_DEFINITIONS[code], expectedValue }];
      }),
      favoriteOptionId: sourceProject?.favoriteOptionId ?? null,
      createdAt: sourceProject?.createdAt ?? now,
      updatedAt: now,
    };
    const validated = comparisonProjectSchema.safeParse(candidate);
    if (!validated.success) {
      showError(validated.error.issues[0]?.message ?? "Periksa kembali preferensi Anda.");
      return;
    }

    setError(null);
    setSaveState("saving");
    try {
      await props.onSave(validated.data);
      setSaveState("saved");
    } catch (cause: unknown) {
      showError(cause instanceof Error ? cause.message : "Preferensi gagal disimpan.");
    }
  };

  const selectedFacilities = facilityCodes.filter(
    (code) => draft.facilityLevels[code] !== undefined,
  );
  const selectedRules = ruleCodes.filter(
    (code) => draft.ruleExpectations[code] !== undefined,
  );
  const highestWeight = Math.max(...criteria.map(({ key }) => draft.weights[key]));
  const highestPriorities = criteria
    .filter(({ key }) => draft.weights[key] === highestWeight)
    .map(({ label }) => label);
  const titleId = `${formId}-title`;
  const errorId = `${formId}-error`;

  return (
    <section className={styles.root} aria-labelledby={titleId}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>
          {props.mode === "edit" ? "Edit preferensi" : "Buat perbandingan"}
        </p>
        <h1 id={titleId} className={styles.title}>{stepHeading(step)}</h1>
        <p className={styles.intro}>
          Preferensi ini menentukan perhitungan dan penjelasan setiap pilihan kos.
        </p>
      </header>

      <nav aria-label="Progres pengaturan preferensi">
        <ol className={styles.progress}>
          {steps.map((item) => (
            <li
              className={item.number === step ? styles.currentStep : undefined}
              key={item.number}
              aria-current={item.number === step ? "step" : undefined}
            >
              <span className={styles.stepNumber}>{item.number}</span>
              <span className={styles.stepLabel}>{item.label}</span>
            </li>
          ))}
        </ol>
      </nav>

      <form className={styles.form} onSubmit={submit} aria-describedby={error ? errorId : undefined}>
        {step === 1 && (
          <fieldset className={styles.stepPanel} disabled={saveState === "saving"}>
            <legend>Langkah 1 dari 4: Konteks</legend>
            <div className={styles.grid}>
              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor={`${formId}-name`}>Nama perbandingan</label>
                <input
                  id={`${formId}-name`}
                  type="text"
                  required
                  maxLength={80}
                  autoComplete="off"
                  value={draft.name}
                  onChange={(event) => updateDraft("name", event.target.value)}
                />
                <small>Contoh: Kos untuk magang di Jakarta.</small>
              </div>
              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label htmlFor={`${formId}-destination`}>Tujuan rutin</label>
                <input
                  id={`${formId}-destination`}
                  type="text"
                  required
                  maxLength={120}
                  autoComplete="off"
                  value={draft.destinationLabel}
                  onChange={(event) => updateDraft("destinationLabel", event.target.value)}
                />
                <small>Nama kantor atau kampus cukup; alamat lengkap tidak diperlukan.</small>
              </div>
              <div className={styles.field}>
                <label htmlFor={`${formId}-days`}>Hari perjalanan per bulan</label>
                <input
                  id={`${formId}-days`}
                  type="number"
                  inputMode="numeric"
                  required
                  min={0}
                  max={31}
                  step={1}
                  value={draft.commuteDaysPerMonth}
                  onChange={(event) => updateDraft("commuteDaysPerMonth", event.target.value)}
                />
                <small>Masukkan 0 jika Anda tidak perlu bepergian rutin.</small>
              </div>
            </div>
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className={styles.stepPanel} disabled={saveState === "saving"}>
            <legend>Langkah 2 dari 4: Anggaran dan perjalanan</legend>
            <p className={styles.explanation}>
              Anggaran total mencakup sewa, biaya rutin, dan perjalanan bulanan.
            </p>
            <div className={styles.grid}>
              <div className={styles.field}>
                <label htmlFor={`${formId}-budget`}>Anggaran total per bulan</label>
                <div className={styles.affixedInput}>
                  <span aria-hidden="true">Rp</span>
                  <input
                    id={`${formId}-budget`}
                    type="number"
                    inputMode="numeric"
                    required
                    min={0}
                    max={MAX_RUPIAH}
                    step={1}
                    value={draft.monthlyBudget}
                    onChange={(event) => updateDraft("monthlyBudget", event.target.value)}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor={`${formId}-commute`}>Batas perjalanan sekali jalan</label>
                <div className={styles.affixedInput}>
                  <input
                    id={`${formId}-commute`}
                    type="number"
                    inputMode="numeric"
                    required
                    min={0}
                    max={360}
                    step={1}
                    value={draft.maxOneWayCommuteMinutes}
                    onChange={(event) =>
                      updateDraft("maxOneWayCommuteMinutes", event.target.value)
                    }
                  />
                  <span>menit</span>
                </div>
              </div>
            </div>
          </fieldset>
        )}

        {step === 3 && (
          <fieldset className={styles.stepPanel} disabled={saveState === "saving"}>
            <legend>Langkah 3 dari 4: Fasilitas dan aturan</legend>
            <p className={styles.explanation}>
              Fasilitas wajib menentukan kelayakan. Fasilitas diinginkan memengaruhi skor.
            </p>
            <div className={styles.preferenceSection}>
              <h2>Fasilitas</h2>
              {facilityCodes.map((code) => {
                const level = draft.facilityLevels[code];
                const selected = level !== undefined;
                return (
                  <fieldset className={styles.choiceCard} key={code}>
                    <legend className={styles.choiceLegend}>{FACILITY_DEFINITIONS[code]}</legend>
                    <label className={styles.checkTarget}>
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={(event) => setFacilitySelected(code, event.target.checked)}
                      />
                      Pilih fasilitas ini
                    </label>
                    {selected && (
                      <div className={styles.segmented} role="group" aria-label={`Tingkat kebutuhan ${FACILITY_DEFINITIONS[code]}`}>
                        {(["required", "desired"] as const).map((value) => (
                          <label key={value}>
                            <input
                              type="radio"
                              name={`${formId}-facility-${code}`}
                              value={value}
                              checked={level === value}
                              onChange={() => setFacilityLevel(code, value)}
                            />
                            <span>{value === "required" ? "Wajib" : "Diinginkan"}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </fieldset>
                );
              })}
            </div>

            <div className={styles.preferenceSection}>
              <h2>Aturan kos</h2>
              <p className={styles.explanation}>
                Pilih harapan Anda, atau biarkan tidak dipilih jika aturan tidak relevan.
              </p>
              {ruleCodes.map((code) => {
                const expectation = draft.ruleExpectations[code];
                const options: readonly { value: "unset" | "true" | "false"; label: string }[] = [
                  { value: "unset", label: "Tidak dipilih" },
                  { value: "true", label: "Diharapkan ya" },
                  { value: "false", label: "Diharapkan tidak" },
                ];
                return (
                  <fieldset className={styles.choiceCard} key={code}>
                    <legend className={styles.choiceLegend}>{RULE_DEFINITIONS[code]}</legend>
                    <div className={styles.segmented}>
                      {options.map((option) => {
                        const checked = option.value === "unset"
                          ? expectation === undefined
                          : expectation === (option.value === "true");
                        return (
                          <label key={option.value}>
                            <input
                              type="radio"
                              name={`${formId}-rule-${code}`}
                              value={option.value}
                              checked={checked}
                              onChange={() =>
                                setRuleExpectation(
                                  code,
                                  option.value === "unset" ? undefined : option.value === "true",
                                )
                              }
                            />
                            <span>{option.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>
                );
              })}
            </div>
          </fieldset>
        )}

        {step === 4 && (
          <fieldset className={styles.stepPanel} disabled={saveState === "saving"}>
            <legend>Langkah 4 dari 4: Prioritas dan ringkasan</legend>
            <p className={styles.explanation}>
              Beri nilai 1 (tidak penting) sampai 5 (sangat penting) untuk setiap kriteria.
            </p>
            <div className={styles.importanceList}>
              {criteria.map(({ key, label }) => (
                <fieldset className={styles.importanceGroup} key={key}>
                  <legend>{label}</legend>
                  <div className={styles.importanceOptions}>
                    {importanceValues.map((value) => (
                      <label key={value} title={importanceLabels[value]}>
                        <input
                          type="radio"
                          name={`${formId}-weight-${key}`}
                          value={value}
                          checked={draft.weights[key] === value}
                          aria-label={`${label}: ${value}, ${importanceLabels[value]}`}
                          onChange={() =>
                            updateDraft("weights", { ...draft.weights, [key]: value })
                          }
                        />
                        <span>{value}</span>
                      </label>
                    ))}
                  </div>
                  <output className={styles.importanceOutput}>
                    {importanceLabels[draft.weights[key]]}
                  </output>
                </fieldset>
              ))}
            </div>

            <section className={styles.summary} aria-labelledby={`${formId}-summary-title`}>
              <h2 id={`${formId}-summary-title`}>Ringkasan preferensi Anda</h2>
              <p>
                <strong>{draft.name.trim() || "Perbandingan ini"}</strong> membantu Anda mencari kos
                untuk perjalanan ke <strong>{draft.destinationLabel.trim() || "tujuan rutin"}</strong>{" "}
                selama {draft.commuteDaysPerMonth || "0"} hari per bulan.
              </p>
              <p>
                Batas Anda adalah <strong>{displayBudget(draft.monthlyBudget)} per bulan</strong> dan
                maksimal <strong>{draft.maxOneWayCommuteMinutes || "0"} menit sekali jalan</strong>.
              </p>
              <p>
                {selectedFacilities.length === 0
                  ? "Anda belum memilih kebutuhan fasilitas."
                  : `Anda memilih ${selectedFacilities.length} fasilitas: ${selectedFacilities
                      .map((code) => `${FACILITY_DEFINITIONS[code]} (${draft.facilityLevels[code] === "required" ? "wajib" : "diinginkan"})`)
                      .join(", ")}.`}
              </p>
              <p>
                {selectedRules.length === 0
                  ? "Tidak ada aturan kos yang dipilih sebagai harapan."
                  : `Harapan aturan Anda: ${selectedRules
                      .map((code) => `${RULE_DEFINITIONS[code]} harus ${draft.ruleExpectations[code] ? "terpenuhi" : "tidak berlaku"}`)
                      .join(", ")}.`}
              </p>
              <p>
                Prioritas tertinggi Anda adalah <strong>{highestPriorities.join(", ")}</strong> dengan
                tingkat {importanceLabels[highestWeight as Importance].toLowerCase()}.
              </p>
            </section>
          </fieldset>
        )}

        {error !== null && (
          <div id={errorId} ref={errorRef} className={styles.error} role="alert" tabIndex={-1}>
            <strong>Data belum dapat diproses.</strong>
            <span>{error}</span>
          </div>
        )}
        <p className={styles.status} role="status" aria-live="polite">
          {saveState === "saving"
            ? "Sedang menyimpan preferensi…"
            : saveState === "saved"
              ? "Preferensi berhasil disimpan."
              : ""}
        </p>

        <div className={styles.actions}>
          <div className={styles.secondaryActions}>
            <button
              className={styles.secondaryButton}
              type="button"
              disabled={saveState === "saving"}
              onClick={props.onCancel}
            >
              Batal
            </button>
            {step > 1 && (
              <button
                className={styles.secondaryButton}
                type="button"
                disabled={saveState === "saving"}
                onClick={goBack}
              >
                Kembali
              </button>
            )}
          </div>
          {step < 4 ? (
            <button className={styles.primaryButton} type="button" onClick={goNext}>
              Lanjut
            </button>
          ) : (
            <button
              className={styles.primaryButton}
              type="submit"
              disabled={saveState === "saving"}
            >
              {saveState === "saving"
                ? "Menyimpan…"
                : props.mode === "edit"
                  ? "Simpan perubahan"
                  : "Buat proyek"}
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
