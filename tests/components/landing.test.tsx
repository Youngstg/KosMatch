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

  it("renders architectural showcase cards and FAQ accordions", () => {
    render(
      <LandingView
        onStart={vi.fn()}
        onDemo={vi.fn()}
        hasSaved={false}
        onResume={vi.fn()}
      />
    );

    expect(screen.getByText("Kebutuhan Wajib Terpenuhi!")).not.toBeNull();
    expect(screen.getByText("100%")).not.toBeNull();
    expect(screen.getByText(/KAMI MEMADUKAN HARGA SEWA/)).not.toBeNull();
    expect(
      screen.getByRole("heading", { name: "Pertanyaan yang Sering Diajukan" })
    ).not.toBeNull();

    // Check FAQ questions
    expect(
      screen.getByText(/Apa itu KosMatch dan apa bedanya dengan aplikasi sewa kos biasa\?/)
    ).not.toBeNull();
    expect(
      screen.getByText(/Bagaimana cara KosMatch menghitung total biaya kos\?/)
    ).not.toBeNull();
  });
});
