// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { LandingView } from "@/features/landing";

afterEach(() => cleanup());

describe("LandingView Component", () => {
  it("renders hero title, lead text, and action buttons", () => {
    const onStart = vi.fn();
    const onDemo = vi.fn();
    const onResume = vi.fn();

    render(
      <LandingView
        onStart={onStart}
        onDemo={onDemo}
        hasSaved={false}
        onResume={onResume}
      />
    );

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.textContent).toBe("Kos murah belum tentu paling hemat.");

    const leadText = screen.getByText(/Bandingkan biaya bulanan, perjalanan, fasilitas/);
    expect(leadText).not.toBeNull();

    const startButtons = screen.getAllByRole("button", { name: /Mulai Perbandingan/i });
    expect(startButtons.length).toBeGreaterThan(0);
    fireEvent.click(startButtons[0]);
    expect(onStart).toHaveBeenCalledTimes(1);

    const demoButtons = screen.getAllByRole("button", { name: /Coba Data Contoh/i });
    expect(demoButtons.length).toBeGreaterThan(0);
    fireEvent.click(demoButtons[0]);
    expect(onDemo).toHaveBeenCalledTimes(1);

    expect(screen.queryByRole("button", { name: /Lanjutkan proyek/i })).toBeNull();
  });

  it("renders 'Lanjutkan proyek' button when hasSaved is true and triggers onResume", () => {
    const onStart = vi.fn();
    const onDemo = vi.fn();
    const onResume = vi.fn();

    render(
      <LandingView
        onStart={onStart}
        onDemo={onDemo}
        hasSaved={true}
        onResume={onResume}
      />
    );

    const resumeBtn = screen.getByRole("button", { name: /Lanjutkan proyek/i });
    expect(resumeBtn).not.toBeNull();
    fireEvent.click(resumeBtn);
    expect(onResume).toHaveBeenCalledTimes(1);
  });

  it("renders steps, feature cards, and FAQ accordions", () => {
    render(
      <LandingView
        onStart={vi.fn()}
        onDemo={vi.fn()}
        hasSaved={false}
        onResume={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", { name: "Kenapa harga sewa saja tidak cukup?" })
    ).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: "Skor yang transparan, bukan sekadar rating" })
    ).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: "Fitur Utama untuk Keputusan Kos yang Cerdas" })
    ).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: "Pertanyaan yang Sering Diajukan" })
    ).not.toBeNull();

    // Check specific feature items
    expect(screen.getByText("Hitung Biaya Hidup Nyata")).not.toBeNull();
    expect(screen.getByText("Kebutuhan Wajib vs Fleksibel")).not.toBeNull();
    expect(screen.getByText("Perbandingan Berdampingan")).not.toBeNull();
    expect(screen.getByText("Simulator Biaya & Skenario")).not.toBeNull();
    expect(screen.getByText("Ekspor PDF & Data Mandiri")).not.toBeNull();
    expect(screen.getByText("100% Privat di Browser")).not.toBeNull();

    // Check FAQ questions
    expect(
      screen.getByText(/Apa itu KosMatch dan apa bedanya dengan aplikasi sewa kos biasa\?/)
    ).not.toBeNull();
    expect(
      screen.getByText(/Bagaimana cara KosMatch menghitung total biaya kos\?/)
    ).not.toBeNull();
  });
});
