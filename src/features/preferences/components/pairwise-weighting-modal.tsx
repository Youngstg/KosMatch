"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Brain,
  Check,
  RotateCcw,
  Sparkles,
  X,
} from "lucide-react";
import {
  CRITERION_KEYS,
  CRITERION_LABELS,
  DEFAULT_PAIRWISE_SCENARIOS,
  fitBradleyTerryWeights,
  type BradleyTerryResult,
  type PairwiseChoice,
  type PersonaProfile,
} from "@/domain/preferences/personal-weighting";
import type { CriterionKey } from "@/domain/entities/types";

export interface PairwiseWeightingModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly onApplyWeights: (
    weights: Record<CriterionKey, number>,
    persona: PersonaProfile
  ) => void;
}

export function PairwiseWeightingModal({
  isOpen,
  onClose,
  onApplyWeights,
}: PairwiseWeightingModalProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [choices, setChoices] = useState<Record<string, "A" | "B">>({});
  const [result, setResult] = useState<BradleyTerryResult | null>(null);

  if (!isOpen) return null;

  const scenarios = DEFAULT_PAIRWISE_SCENARIOS;
  const isFinished = currentStep >= scenarios.length && result !== null;
  const currentScenario = scenarios[currentStep];

  const handleSelect = (scenarioId: string, option: "A" | "B") => {
    const nextChoices = { ...choices, [scenarioId]: option };
    setChoices(nextChoices);

    if (currentStep + 1 < scenarios.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Selesai semua 5 skenario -> Hitung model Bradley-Terry
      const choiceArray: PairwiseChoice[] = Object.entries(nextChoices).map(
        ([sId, sel]) => ({ scenarioId: sId, selectedOption: sel })
      );
      const computed = fitBradleyTerryWeights(choiceArray, scenarios);
      setResult(computed);
      setCurrentStep(scenarios.length);
    }
  };

  const handleReset = () => {
    setChoices({});
    setResult(null);
    setCurrentStep(0);
  };

  const handleApply = () => {
    if (result) {
      onApplyWeights(result.weights, result.persona);
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="pairwise-modal-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(8px)",
        display: "grid",
        placeItems: "center",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        className="modal-content panel"
        style={{
          width: "min(680px, 100%)",
          maxHeight: "90vh",
          overflowY: "auto",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "18px",
          padding: "24px",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "16px",
          }}
        >
          <div>
            <span
              className="badge"
              style={{
                background: "rgba(245, 158, 11, 0.15)",
                color: "#F59E0B",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                marginBottom: "6px",
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                fontSize: "11px",
                fontWeight: 750,
              }}
            >
              <Brain size={13} /> Tahap F: ML Bradley-Terry Preference Elicitation
            </span>
            <h2 id="pairwise-modal-title" style={{ fontSize: "18px", margin: "4px 0 0" }}>
              Kuis Pembobotan Preferensi Personal
            </h2>
            <p className="muted" style={{ fontSize: "13px", margin: "4px 0 0" }}>
              Pilih skenario yang lebih mencerminkan prioritas Anda. Model akan menghitung bobot
              DSS secara otomatis.
            </p>
          </div>
          <button
            type="button"
            className="hud-btn-icon"
            onClick={onClose}
            aria-label="Tutup kuis"
            style={{ padding: "6px" }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Progress Bar (Langkah 1 - 5) */}
        {!isFinished && (
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
                color: "var(--text-muted)",
                marginBottom: "6px",
              }}
            >
              <span>
                Skenario <strong>{currentStep + 1}</strong> dari {scenarios.length}:{" "}
                <strong>{currentScenario?.tradeOffTitle}</strong>
              </span>
              <span>{Math.round(((currentStep + 1) / scenarios.length) * 100)}%</span>
            </div>
            <div
              style={{
                height: "6px",
                borderRadius: "999px",
                background: "var(--surface-subtle)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${((currentStep + 1) / scenarios.length) * 100}%`,
                  background: "linear-gradient(90deg, #F59E0B, #10B981)",
                  transition: "width 0.3s ease",
                }}
              />
            </div>
          </div>
        )}

        {/* STEP VIEW: Pilihan Kartu A vs Kartu B */}
        {!isFinished && currentScenario && (
          <div>
            <p style={{ fontSize: "13.5px", fontWeight: 600, margin: "0 0 14px" }}>
              {currentScenario.contextText}
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {/* Card Option A */}
              <button
                type="button"
                className="panel"
                style={{
                  textAlign: "left",
                  padding: "16px",
                  borderRadius: "14px",
                  border:
                    choices[currentScenario.id] === "A"
                      ? "2px solid #F59E0B"
                      : "1px solid var(--border)",
                  background:
                    choices[currentScenario.id] === "A"
                      ? "rgba(245, 158, 11, 0.08)"
                      : "var(--surface)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onClick={() => handleSelect(currentScenario.id, "A")}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    className="badge"
                    style={{
                      background: "rgba(59, 130, 246, 0.15)",
                      color: "#3B82F6",
                      fontSize: "11px",
                    }}
                  >
                    Pilihan A
                  </span>
                  {choices[currentScenario.id] === "A" && (
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#F59E0B",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <Check size={13} color="#FFFFFF" strokeWidth={3} />
                    </span>
                  )}
                </div>
                <h4 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 750 }}>
                  {currentScenario.optionA.title}
                </h4>
                <p
                  className="muted"
                  style={{ fontSize: "12px", lineHeight: "1.4", margin: "0 0 10px" }}
                >
                  {currentScenario.optionA.description}
                </p>
                <div className="badges" style={{ gap: "4px" }}>
                  {currentScenario.optionA.highlights.map((h) => (
                    <span
                      key={h}
                      className="badge"
                      style={{ fontSize: "10px", padding: "2px 6px" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </button>

              {/* Card Option B */}
              <button
                type="button"
                className="panel"
                style={{
                  textAlign: "left",
                  padding: "16px",
                  borderRadius: "14px",
                  border:
                    choices[currentScenario.id] === "B"
                      ? "2px solid #F59E0B"
                      : "1px solid var(--border)",
                  background:
                    choices[currentScenario.id] === "B"
                      ? "rgba(245, 158, 11, 0.08)"
                      : "var(--surface)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
                onClick={() => handleSelect(currentScenario.id, "B")}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    className="badge"
                    style={{
                      background: "rgba(16, 185, 129, 0.15)",
                      color: "#10B981",
                      fontSize: "11px",
                    }}
                  >
                    Pilihan B
                  </span>
                  {choices[currentScenario.id] === "B" && (
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#F59E0B",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <Check size={13} color="#FFFFFF" strokeWidth={3} />
                    </span>
                  )}
                </div>
                <h4 style={{ margin: "0 0 6px", fontSize: "14px", fontWeight: 750 }}>
                  {currentScenario.optionB.title}
                </h4>
                <p
                  className="muted"
                  style={{ fontSize: "12px", lineHeight: "1.4", margin: "0 0 10px" }}
                >
                  {currentScenario.optionB.description}
                </p>
                <div className="badges" style={{ gap: "4px" }}>
                  {currentScenario.optionB.highlights.map((h) => (
                    <span
                      key={h}
                      className="badge"
                      style={{ fontSize: "10px", padding: "2px 6px" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </button>
            </div>

            {/* Navigasi Sebelumnya jika currentStep > 0 */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "16px",
              }}
            >
              {currentStep > 0 ? (
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
                >
                  <ArrowLeft size={14} /> Skenario Sebelumnya
                </button>
              ) : (
                <div />
              )}
              <span className="muted" style={{ fontSize: "11px" }}>
                Ketuk salah satu kartu untuk lanjut
              </span>
            </div>
          </div>
        )}

        {/* RESULTS VIEW: Persona + Bar chart Bobot Rekomendasi ML */}
        {isFinished && result && (
          <div>
            {/* Persona Hero Card */}
            <div
              className="panel"
              style={{
                padding: "16px",
                borderRadius: "14px",
                background: "rgba(245, 158, 11, 0.08)",
                border: "1px solid rgba(245, 158, 11, 0.3)",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "4px",
                }}
              >
                <Sparkles size={16} color="#F59E0B" />
                <strong style={{ fontSize: "15px", color: result.persona.badgeColor }}>
                  {result.persona.title}
                </strong>
                <span
                  className="badge good"
                  style={{ fontSize: "10px", padding: "2px 6px" }}
                >
                  Konfidensi {result.confidenceScore}%
                </span>
              </div>
              <p
                className="muted"
                style={{ fontSize: "13px", lineHeight: "1.45", margin: 0 }}
              >
                {result.persona.description}
              </p>
            </div>

            {/* Bobot Breakdown Chart */}
            <h4 style={{ fontSize: "13px", margin: "0 0 10px", fontWeight: 750 }}>
              Hasil Pembobotan Model Bradley-Terry (Total 100%):
            </h4>
            <div style={{ display: "grid", gap: "8px", marginBottom: "18px" }}>
              {CRITERION_KEYS.map((k) => {
                const val = result.weights[k];
                return (
                  <div key={k}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        marginBottom: "3px",
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>{CRITERION_LABELS[k]}</span>
                      <strong style={{ color: "var(--primary)" }}>{val}%</strong>
                    </div>
                    <div
                      style={{
                        height: "8px",
                        borderRadius: "999px",
                        background: "var(--surface-subtle)",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          width: `${val}%`,
                          background:
                            k === result.persona.primaryCriterion
                              ? result.persona.badgeColor
                              : "#9CA3AF",
                          borderRadius: "999px",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <p
              className="muted"
              style={{
                fontSize: "11.5px",
                lineHeight: "1.4",
                margin: "0 0 16px",
                fontStyle: "italic",
              }}
            >
              {result.explanation}
            </p>

            {/* Modal Actions */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={handleReset}
                style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
              >
                <RotateCcw size={14} /> Ulangi Kuis
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleApply}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "8px 18px",
                  fontWeight: 750,
                }}
              >
                <Check size={16} /> Terapkan Bobot Rekomendasi ML
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
