import { describe, expect, it } from "vitest";

import { demoOptions, demoProject } from "@/data/demo";
import {
  addVerificationQuestion,
  buildPrintSummary,
  createVerificationQuestion,
  removeVerificationQuestion,
  summarizeVerificationStatus,
  updateFavorite,
  updateShortlist,
  updateVerificationStatus,
  type DecisionState,
} from "@/features/decisions";

const [anggrek, mentari] = demoOptions;

if (anggrek === undefined || mentari === undefined) {
  throw new Error("Fixture demo tidak lengkap.");
}

const initialState: DecisionState = {
  project: demoProject,
  options: demoOptions,
};

describe("decision state helpers", () => {
  it("mengubah shortlist dan favorit tanpa memutasi state awal", () => {
    const before = structuredClone(initialState);
    const shortlisted = updateShortlist(initialState, anggrek.id, true);
    const favorited = updateFavorite(shortlisted, anggrek.id);

    expect(favorited.options.find((option) => option.id === anggrek.id)?.shortlisted).toBe(true);
    expect(favorited.project.favoriteOptionId).toBe(anggrek.id);
    expect(initialState).toEqual(before);
  });

  it("menghapus favorit ketika pilihan dikeluarkan dari shortlist", () => {
    const shortlisted = updateShortlist(initialState, anggrek.id, true);
    const favorited = updateFavorite(shortlisted, anggrek.id);
    const removed = updateShortlist(favorited, anggrek.id, false);

    expect(removed.project.favoriteOptionId).toBeNull();
    expect(removed.options.find((option) => option.id === anggrek.id)?.shortlisted).toBe(false);
  });

  it("menolak favorit yang belum masuk shortlist", () => {
    expect(() => updateFavorite(initialState, anggrek.id)).toThrow(
      "Favorit harus merupakan pilihan yang sudah masuk shortlist.",
    );
  });
});

describe("verification question helpers", () => {
  it("membuat, menambahkan, dan mengubah status pertanyaan secara immutable", () => {
    const question = createVerificationQuestion(" listrik ", " Apakah listrik termasuk? ");
    const withQuestion = addVerificationQuestion(anggrek, question);
    const confirmed = updateVerificationStatus(withQuestion, question.id, "confirmed");

    expect(question).toEqual({
      id: "listrik",
      question: "Apakah listrik termasuk?",
      status: "unverified",
    });
    expect(confirmed.verificationQuestions.at(-1)?.status).toBe("confirmed");
    expect(anggrek.verificationQuestions).toHaveLength(0);
    expect(summarizeVerificationStatus(confirmed.verificationQuestions)).toEqual({
      total: 1,
      unverified: 0,
      confirmed: 1,
      changed: 0,
      allConfirmed: true,
    });
  });

  it("menghapus pertanyaan dan menolak pertanyaan kosong", () => {
    const question = createVerificationQuestion("deposit", "Berapa depositnya?");
    const withQuestion = addVerificationQuestion(anggrek, question);

    expect(removeVerificationQuestion(withQuestion, question.id).verificationQuestions).toHaveLength(0);
    expect(() => createVerificationQuestion("id", "   ")).toThrow(
      "Pertanyaan verifikasi tidak boleh kosong.",
    );
  });
});

describe("buildPrintSummary", () => {
  const privateOption = {
    ...mentari,
    sourceUrl: "https://example.com/private-source",
    notes: "Catatan privat keluarga",
  };

  it("mengecualikan source URL dan private notes secara default", () => {
    const summary = buildPrintSummary({
      project: demoProject,
      options: [privateOption],
      generatedAt: "2026-09-14T10:00:00.000Z",
    });
    const option = summary.options[0];

    expect(option).toBeDefined();
    expect(Object.hasOwn(option ?? {}, "sourceUrl")).toBe(false);
    expect(Object.hasOwn(option ?? {}, "notes")).toBe(false);
    expect(summary.privacy).toEqual({
      includeSourceUrls: false,
      includePrivateNotes: false,
    });
    expect(option?.cost.hasUnknownMonthlyValues).toBe(true);
    expect(option?.match.optionId).toBe(mentari.id);
  });

  it("hanya menyertakan data privat melalui opt-in eksplisit", () => {
    const summary = buildPrintSummary({
      project: demoProject,
      options: [privateOption],
      generatedAt: "2026-09-14T10:00:00.000Z",
      privacy: { includeSourceUrls: true, includePrivateNotes: true },
    });

    expect(summary.options[0]?.sourceUrl).toBe(privateOption.sourceUrl);
    expect(summary.options[0]?.notes).toBe(privateOption.notes);
  });
});
