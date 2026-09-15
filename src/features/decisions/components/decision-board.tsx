"use client";

import { useId, useState, type FormEvent } from "react";

import type {
  AccommodationOption,
  VerificationQuestion,
  VerificationStatus,
} from "@/domain/entities";
import {
  VERIFICATION_STATUSES,
  addVerificationQuestion,
  createVerificationQuestion,
  getVerificationStatusLabel,
  removeVerificationQuestion,
  updateFavorite,
  updateShortlist,
  updateVerificationStatus,
  type DecisionState,
} from "@/features/decisions/services";

export interface DecisionBoardProps {
  readonly state: DecisionState;
  readonly onChange?: (state: DecisionState) => void;
  readonly summaryHref?: string;
  readonly createQuestionId?: () => string;
}

interface DecisionOptionCardProps {
  readonly state: DecisionState;
  readonly option: AccommodationOption;
  readonly editable: boolean;
  readonly onChange?: (state: DecisionState) => void;
  readonly createQuestionId: () => string;
}

function replaceOption(
  state: DecisionState,
  replacement: AccommodationOption,
): DecisionState {
  return {
    project: state.project,
    options: state.options.map((option) =>
      option.id === replacement.id ? replacement : option,
    ),
  };
}

function statusClass(status: VerificationStatus): string {
  if (status === "confirmed") return "badge good";
  return "badge warn";
}

export function VerificationStatusBadge({
  status,
}: {
  readonly status: VerificationStatus;
}) {
  return <span className={statusClass(status)}>{getVerificationStatusLabel(status)}</span>;
}

function VerificationQuestionItem({
  question,
  editable,
  onStatusChange,
  onRemove,
}: {
  readonly question: VerificationQuestion;
  readonly editable: boolean;
  readonly onStatusChange: (status: VerificationStatus) => void;
  readonly onRemove: () => void;
}) {
  const groupLabelId = useId();

  return (
    <li>
      <p id={groupLabelId}>{question.question}</p>
      {editable ? (
        <div className="chips" role="group" aria-labelledby={groupLabelId}>
          {VERIFICATION_STATUSES.map((status) => (
            <button
              className={`chip ${question.status === status ? "selected" : ""}`}
              type="button"
              aria-pressed={question.status === status}
              onClick={() => onStatusChange(status)}
              key={status}
            >
              {getVerificationStatusLabel(status)}
            </button>
          ))}
          <button className="btn btn-ghost" type="button" onClick={onRemove}>
            Hapus pertanyaan
          </button>
        </div>
      ) : (
        <VerificationStatusBadge status={question.status} />
      )}
    </li>
  );
}

function DecisionOptionCard({
  state,
  option,
  editable,
  onChange,
  createQuestionId,
}: DecisionOptionCardProps) {
  const titleId = useId();
  const questionInputId = useId();
  const [questionText, setQuestionText] = useState("");
  const [proText, setProText] = useState("");
  const [concernText, setConcernText] = useState("");
  const favorite = state.project.favoriteOptionId === option.id;

  const emitOption = (replacement: AccommodationOption) => {
    onChange?.(replaceOption(state, replacement));
  };

  const handleQuestionSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (questionText.trim().length === 0 || onChange === undefined) return;
    const question = createVerificationQuestion(
      createQuestionId(),
      questionText,
    );
    emitOption(addVerificationQuestion(option, question));
    setQuestionText("");
  };

  return (
    <article className="option-card" aria-labelledby={titleId}>
      <div>
        <div className="badges">
          {favorite ? <span className="badge good">Favorit saat ini</span> : null}
          <span className="badge">Masuk shortlist</span>
        </div>
        <h3 id={titleId}>{option.name}</h3>
        <span className="muted">{option.area}</span>
      </div>

      <section aria-labelledby={`${titleId}-pros`}>
        <h4 id={`${titleId}-pros`}>Kelebihan pribadi</h4>
        {option.pros.length === 0 ? (
          <p className="muted">Belum ada kelebihan yang dicatat.</p>
        ) : (
          <ul className="reasons">
            {option.pros.map((pro) => <li key={pro}>{pro}</li>)}
          </ul>
        )}
        {editable ? (
          <form className="compact-note-form" onSubmit={(event) => { event.preventDefault(); if (proText.trim()) { emitOption({ ...option, pros: [...option.pros, proText.trim()] }); setProText(""); } }}>
            <label className="sr-only" htmlFor={`${titleId}-new-pro`}>Tambah kelebihan untuk {option.name}</label>
            <input className="input" id={`${titleId}-new-pro`} value={proText} maxLength={500} onChange={(event) => setProText(event.target.value)} placeholder="Tambah kelebihan pribadi" />
            <button className="btn btn-secondary" type="submit" disabled={!proText.trim()}>Tambah</button>
          </form>
        ) : null}
      </section>

      <section aria-labelledby={`${titleId}-concerns`}>
        <h4 id={`${titleId}-concerns`}>Kekhawatiran</h4>
        {option.concerns.length === 0 ? (
          <p className="muted">Belum ada kekhawatiran yang dicatat.</p>
        ) : (
          <ul className="reasons">
            {option.concerns.map((concern) => <li key={concern}>{concern}</li>)}
          </ul>
        )}
        {editable ? (
          <form className="compact-note-form" onSubmit={(event) => { event.preventDefault(); if (concernText.trim()) { emitOption({ ...option, concerns: [...option.concerns, concernText.trim()] }); setConcernText(""); } }}>
            <label className="sr-only" htmlFor={`${titleId}-new-concern`}>Tambah kekhawatiran untuk {option.name}</label>
            <input className="input" id={`${titleId}-new-concern`} value={concernText} maxLength={500} onChange={(event) => setConcernText(event.target.value)} placeholder="Tambah kekhawatiran" />
            <button className="btn btn-secondary" type="submit" disabled={!concernText.trim()}>Tambah</button>
          </form>
        ) : null}
      </section>

      <section aria-labelledby={`${titleId}-questions`}>
        <h4 id={`${titleId}-questions`}>Pertanyaan untuk diverifikasi</h4>
        {option.verificationQuestions.length === 0 ? (
          <p className="muted">Belum ada pertanyaan verifikasi.</p>
        ) : (
          <ul className="reasons">
            {option.verificationQuestions.map((question) => (
              <VerificationQuestionItem
                question={question}
                editable={editable}
                onStatusChange={(status) =>
                  emitOption(updateVerificationStatus(option, question.id, status))
                }
                onRemove={() =>
                  emitOption(removeVerificationQuestion(option, question.id))
                }
                key={question.id}
              />
            ))}
          </ul>
        )}

        {editable ? (
          <form onSubmit={handleQuestionSubmit}>
            <div className="field">
              <label htmlFor={questionInputId}>Tambah pertanyaan verifikasi</label>
              <input
                className="input"
                id={questionInputId}
                value={questionText}
                maxLength={300}
                onChange={(event) => setQuestionText(event.target.value)}
                placeholder="Contoh: Apakah listrik sudah termasuk?"
              />
            </div>
            <div className="form-actions">
              <button
                className="btn btn-secondary"
                type="submit"
                disabled={questionText.trim().length === 0}
              >
                Tambah pertanyaan
              </button>
            </div>
          </form>
        ) : null}
      </section>

      {editable ? (
        <div className="actions">
          <button
            className={favorite ? "btn btn-secondary" : "btn btn-primary"}
            type="button"
            aria-pressed={favorite}
            onClick={() =>
              onChange?.(updateFavorite(state, favorite ? null : option.id))
            }
          >
            {favorite ? "Hapus sebagai favorit" : "Jadikan favorit"}
          </button>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => onChange?.(updateShortlist(state, option.id, false))}
          >
            Keluarkan dari shortlist
          </button>
        </div>
      ) : null}
    </article>
  );
}

export function DecisionBoard({
  state,
  onChange,
  summaryHref,
  createQuestionId = () => globalThis.crypto.randomUUID(),
}: DecisionBoardProps) {
  const headingId = useId();
  const shortlistedOptions = state.options.filter(
    (option) => option.projectId === state.project.id && option.shortlisted,
  );
  const editable = onChange !== undefined;

  return (
    <section aria-labelledby={headingId}>
      <div className="workspace-head">
        <div>
          <div className="eyebrow">Ruang keputusan</div>
          <h2 className="section-title" id={headingId}>Papan keputusan</h2>
          <p className="muted">
            Tinjau favorit, catatan pertimbangan, dan hal yang masih perlu
            dikonfirmasi.
          </p>
        </div>
        {summaryHref !== undefined ? (
          <a className="btn btn-secondary" href={summaryHref}>
            Lihat ringkasan cetak
          </a>
        ) : null}
      </div>

      {shortlistedOptions.length === 0 ? (
        <div className="panel">
          <h3>Shortlist masih kosong</h3>
          <p className="muted">
            Tambahkan pilihan dari halaman hasil perbandingan agar tidak membuat
            data kos duplikat.
          </p>
        </div>
      ) : (
        <div className="option-grid">
          {shortlistedOptions.map((option) => (
            <DecisionOptionCard
              state={state}
              option={option}
              editable={editable}
              onChange={onChange}
              createQuestionId={createQuestionId}
              key={option.id}
            />
          ))}
        </div>
      )}
    </section>
  );
}
