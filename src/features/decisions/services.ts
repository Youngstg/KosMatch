import type {
  AccommodationOption,
  ComparisonProject,
  VerificationQuestion,
  VerificationStatus,
} from "@/domain/entities";

export interface DecisionState {
  readonly project: ComparisonProject;
  readonly options: readonly AccommodationOption[];
}

export interface VerificationStatusSummary {
  readonly total: number;
  readonly unverified: number;
  readonly confirmed: number;
  readonly changed: number;
  readonly allConfirmed: boolean;
}

export const VERIFICATION_STATUS_LABELS: Readonly<Record<VerificationStatus, string>> = {
  unverified: "Belum dicek",
  confirmed: "Dikonfirmasi",
  changed: "Berubah",
};

export const VERIFICATION_STATUSES = [
  "unverified",
  "confirmed",
  "changed",
] as const satisfies readonly VerificationStatus[];

function findProjectOption(
  state: DecisionState,
  optionId: string,
): AccommodationOption {
  const option = state.options.find(
    (candidate) =>
      candidate.id === optionId && candidate.projectId === state.project.id,
  );
  if (option === undefined) {
    throw new RangeError(`Pilihan ${optionId} tidak ditemukan dalam proyek ini.`);
  }
  return option;
}

/** Updates shortlist state and clears the favorite when it is removed. */
export function updateShortlist(
  state: DecisionState,
  optionId: string,
  shortlisted: boolean,
): DecisionState {
  findProjectOption(state, optionId);

  return {
    project:
      !shortlisted && state.project.favoriteOptionId === optionId
        ? { ...state.project, favoriteOptionId: null }
        : state.project,
    options: state.options.map((option) =>
      option.id === optionId && option.projectId === state.project.id
        ? { ...option, shortlisted }
        : option,
    ),
  };
}

/** Sets one shortlisted project option as favorite, or clears the favorite. */
export function updateFavorite(
  state: DecisionState,
  optionId: string | null,
): DecisionState {
  if (optionId === null) {
    return {
      project: { ...state.project, favoriteOptionId: null },
      options: state.options,
    };
  }

  const option = findProjectOption(state, optionId);
  if (!option.shortlisted) {
    throw new RangeError("Favorit harus merupakan pilihan yang sudah masuk shortlist.");
  }

  return {
    project: { ...state.project, favoriteOptionId: optionId },
    options: state.options,
  };
}

export function createVerificationQuestion(
  id: string,
  question: string,
  status: VerificationStatus = "unverified",
): VerificationQuestion {
  const normalizedId = id.trim();
  const normalizedQuestion = question.trim();
  if (normalizedId.length === 0) {
    throw new RangeError("ID pertanyaan verifikasi tidak boleh kosong.");
  }
  if (normalizedQuestion.length === 0) {
    throw new RangeError("Pertanyaan verifikasi tidak boleh kosong.");
  }

  return { id: normalizedId, question: normalizedQuestion, status };
}

export function addVerificationQuestion(
  option: AccommodationOption,
  question: VerificationQuestion,
): AccommodationOption {
  if (option.verificationQuestions.some((item) => item.id === question.id)) {
    throw new RangeError(`Pertanyaan verifikasi ${question.id} sudah ada.`);
  }

  return {
    ...option,
    verificationQuestions: [...option.verificationQuestions, { ...question }],
  };
}

export function updateVerificationStatus(
  option: AccommodationOption,
  questionId: string,
  status: VerificationStatus,
): AccommodationOption {
  let found = false;
  const verificationQuestions = option.verificationQuestions.map((question) => {
    if (question.id !== questionId) return question;
    found = true;
    return { ...question, status };
  });
  if (!found) {
    throw new RangeError(`Pertanyaan verifikasi ${questionId} tidak ditemukan.`);
  }

  return { ...option, verificationQuestions };
}

export function removeVerificationQuestion(
  option: AccommodationOption,
  questionId: string,
): AccommodationOption {
  const verificationQuestions = option.verificationQuestions.filter(
    (question) => question.id !== questionId,
  );
  if (verificationQuestions.length === option.verificationQuestions.length) {
    throw new RangeError(`Pertanyaan verifikasi ${questionId} tidak ditemukan.`);
  }

  return { ...option, verificationQuestions };
}

export function getVerificationStatusLabel(status: VerificationStatus): string {
  return VERIFICATION_STATUS_LABELS[status];
}

export function summarizeVerificationStatus(
  questions: readonly VerificationQuestion[],
): VerificationStatusSummary {
  const summary = questions.reduce(
    (counts, question) => ({
      ...counts,
      [question.status]: counts[question.status] + 1,
    }),
    { unverified: 0, confirmed: 0, changed: 0 } satisfies Record<VerificationStatus, number>,
  );

  return {
    total: questions.length,
    ...summary,
    allConfirmed: questions.length > 0 && summary.confirmed === questions.length,
  };
}
