// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { LandingView } from "@/features/landing";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
  }),
}));

afterEach(() => cleanup());

describe("LandingView Component", () => {
  it("renders hero title, lead text, and clean action buttons", () => {
    const onStart = vi.fn();

    render(
      <LandingView
        onStart={onStart}
      />
    );

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.textContent).toBe("Kos murah belum tentu paling hemat.");

    const leadText = screen.getByText(/Bandingkan biaya bulanan, perjalanan, fasilitas/);
    expect(leadText).not.toBeNull();

    // Primary action: link to explore map
    const mapLinks = screen.getAllByRole("link", { name: /Jelajahi Kos di Peta Kampus/i });
    expect(mapLinks.length).toBeGreaterThan(0);
    expect(mapLinks[0].getAttribute("href")).toBe("/explore");

    // Secondary action: DSS calculator
    const startButtons = screen.getAllByRole("button", { name: /Kalkulator DSS/i });
    expect(startButtons.length).toBeGreaterThan(0);
    fireEvent.click(startButtons[0]);
    expect(onStart).toHaveBeenCalledTimes(1);

    // Verify deprecated buttons are removed
    expect(screen.queryByRole("button", { name: /Coba Data Contoh/i })).toBeNull();
    expect(screen.queryByRole("button", { name: /Lanjutkan proyek/i })).toBeNull();
  });

  it("renders LandingFeatures section highlighting core decision features", () => {
    render(
      <LandingView
        onStart={vi.fn()}
      />
    );

    expect(
      screen.getByRole("heading", { name: /Fitur Utama untuk Keputusan Kos yang Cerdas/i })
    ).not.toBeNull();
    expect(screen.getByText("Hitung Biaya Hidup Nyata")).not.toBeNull();
    expect(screen.getByText("Aman, Terproteksi & Bebas Iklan")).not.toBeNull();
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

    expect(
      screen.getByRole("heading", { name: /Kamar Nyaman, Istirahat Tenang, Belajar Makin Fokus/i })
    ).not.toBeNull();
    expect(screen.getByText(/Kasur & Bantal/)).not.toBeNull();
    expect(screen.getByText(/Lemari Pakaian/)).not.toBeNull();
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
