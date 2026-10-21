// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { demoOptions, demoProject } from "@/data/demo";
import { DecisionBoard, type DecisionState } from "@/features/decisions";

afterEach(() => cleanup());

const [anggrek, mentari] = demoOptions;

if (!anggrek || !mentari) {
  throw new Error("Fixture demo tidak lengkap");
}

describe("DecisionBoard Component", () => {
  it("menampilkan pesan kosong jika tidak ada opsi yang di-shortlist", () => {
    const emptyState: DecisionState = {
      project: demoProject,
      options: demoOptions.map((opt) => ({ ...opt, shortlisted: false })),
    };

    render(<DecisionBoard state={emptyState} />);

    expect(screen.getByText("Shortlist masih kosong")).not.toBeNull();
  });

  it("menampilkan opsi shortlist dengan badge penghematan anggaran (V-05)", () => {
    // Anggrek: total cost 2.420.000 vs budget 2.500.000 -> hemat 80.000
    // Mentari: electricity is unknown -> biaya belum lengkap
    const testState: DecisionState = {
      project: { ...demoProject, favoriteOptionId: anggrek.id },
      options: [
        { ...anggrek, shortlisted: true },
        { ...mentari, shortlisted: true },
      ],
    };

    const onChange = vi.fn();

    render(<DecisionBoard state={testState} onChange={onChange} />);

    expect(screen.getByText(anggrek.name)).not.toBeNull();
    expect(screen.getByText(mentari.name)).not.toBeNull();

    // Verifikasi badge favorit
    expect(screen.getByText("Favorit saat ini")).not.toBeNull();

    // Verifikasi badge hemat (V-05) - Anggrek total 2.435.000 vs 2.500.000 -> hemat Rp65.000
    expect(screen.getByText(/Hemat Rp65\.000\/bln/i)).not.toBeNull();

    // Verifikasi badge biaya belum lengkap
    expect(screen.getByText("Biaya belum lengkap")).not.toBeNull();
  });

  it("menampilkan badge lebih dari anggaran jika biaya melebihi limit", () => {
    const tightProject = { ...demoProject, monthlyBudget: 2_000_000 };
    const testState: DecisionState = {
      project: tightProject,
      options: [{ ...anggrek, shortlisted: true }],
    };

    render(<DecisionBoard state={testState} />);

    // Anggrek 2.435.000 vs 2.000.000 -> lebih Rp435.000
    expect(screen.getByText(/Lebih Rp435\.000 dari anggaran/i)).not.toBeNull();
  });
});
