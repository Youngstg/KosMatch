// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MapExplorer, MapSkeleton } from "@/features/map";

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
  }),
}));

afterEach(() => cleanup());

describe("MapSkeleton Component", () => {
  it("renders with status role, aria-busy, and skeleton placeholders", () => {
    const { container } = render(<MapSkeleton />);

    const statusEl = screen.getByRole("status");
    expect(statusEl).not.toBeNull();
    expect(statusEl.getAttribute("aria-busy")).toBe("true");

    const skeletons = container.querySelectorAll(".skeleton");
    expect(skeletons.length).toBeGreaterThan(4);
  });
});

describe("MapExplorer Component", () => {
  it("renders sidebar heading, campus buttons, and pilot details", () => {
    render(<MapExplorer />);

    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1.textContent).toBe("Eksplorasi Area Kampus");

    // Open sunflower floating menu to access campus options
    const sunflowerBtn = screen.getByRole("button", { name: /Menu Titik Kampus/i });
    fireEvent.click(sunflowerBtn);

    // Campus selection buttons
    const uiBtn = screen.getByRole("button", { name: /Universitas Indonesia/i });
    const unandBtn = screen.getByRole("button", { name: /Universitas Andalas/i });
    const iteraBtn = screen.getByRole("button", { name: /Institut Teknologi Sumatera/i });
    expect(uiBtn).not.toBeNull();
    expect(unandBtn).not.toBeNull();
    expect(iteraBtn).not.toBeNull();

    // Default primary campus is UI Depok
    const uiHeading = screen.getByRole("heading", { level: 2, name: /Universitas Indonesia \(Depok\)/i });
    expect(uiHeading).not.toBeNull();
    expect(screen.getAllByText("4 km").length).toBeGreaterThan(0);

    // Switch campus to Unand Limau Manis
    fireEvent.click(unandBtn);
    const unandHeading = screen.getByRole("heading", { level: 2, name: /Universitas Andalas \(Limau Manis\)/i });
    expect(unandHeading).not.toBeNull();
    expect(screen.getAllByText("5 km").length).toBeGreaterThan(0);

    // Switch campus to ITERA Lampung
    fireEvent.click(iteraBtn);
    const iteraHeading = screen.getByRole("heading", { level: 2, name: /Institut Teknologi Sumatera \(ITERA\)/i });
    expect(iteraHeading).not.toBeNull();
    expect(screen.getByText("Kos Pondok Ryacudu Asri")).not.toBeNull();
  });

  it("selects a listing, updates inspector, and displays neighborhood amenities and commute", async () => {
    render(<MapExplorer />);

    // Click on one of the verified kos cards in UI Depok
    const listingCard = screen.getByText("Kos Graha Kukusan Mandiri");
    expect(listingCard).not.toBeNull();
    fireEvent.click(listingCard);

    // Inspector should now display listing details
    const areaElements = screen.getAllByText(/Kukusan Teknik/);
    expect(areaElements.length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/Waktu tempuh ke/)).not.toBeNull();

    // Neighborhood profile card should load
    await waitFor(() => {
      expect(screen.getByText("Profil Fasilitas Lingkungan")).not.toBeNull();
      expect(screen.getByText("Skor Fasilitas")).not.toBeNull();
    });

    // Test radius buttons
    const radius500Btn = screen.getByRole("button", { name: "500 m" });
    fireEvent.click(radius500Btn);
    expect(radius500Btn.className).toContain("selected");
  });

  it("filters listings by gender", () => {
    render(<MapExplorer />);

    const putriFilterBtn = screen.getByRole("button", { name: "Putri" });
    fireEvent.click(putriFilterBtn);

    // Female listing should be visible
    expect(screen.getByText("Wisma Pondok Cina Asri")).not.toBeNull();
    // Male listing should not be visible
    expect(screen.queryByText("Kos Graha Kukusan Mandiri")).toBeNull();
  });

  it("switches destination gates and re-estimates commute", () => {
    render(<MapExplorer />);

    // Open sunflower floating menu
    const sunflowerBtn = screen.getByRole("button", { name: /Menu Titik Kampus/i });
    fireEvent.click(sunflowerBtn);

    // Click active campus to branch out destination gates
    const uiBtn = screen.getByRole("button", { name: /Universitas Indonesia/i });
    fireEvent.click(uiBtn);

    // Check default gate button
    const kutekBtn = screen.getByRole("button", { name: /Pintu Kutek/i });
    expect(kutekBtn).not.toBeNull();
    fireEvent.click(kutekBtn);
    expect(kutekBtn.className).toContain("active");

    // Select motorcycle mode
    const motorBtn = screen.getByRole("button", { name: /Motor/i });
    fireEvent.click(motorBtn);
    expect(motorBtn.className).toMatch(/active|selected/);
  });

  it("sorts listings by price ascending", () => {
    render(<MapExplorer />);

    const sortSelect = screen.getByLabelText("Urutkan Kos");
    fireEvent.change(sortSelect, { target: { value: "price_asc" } });

    // Wisma Jurang Kutek Ekonomis (Rp 850.000) should be visible
    expect(screen.getByText("Wisma Jurang Kutek Ekonomis")).not.toBeNull();
  });

  it("filters listings via natural language semantic search input", () => {
    render(<MapExplorer />);

    const searchInputs = screen.getAllByLabelText("Pencarian semantik kos bahasa alami");
    const desktopInput = searchInputs[0]!;

    // Search for female kos with AC
    fireEvent.change(desktopInput, { target: { value: "kos putri ac budget 2jt" } });

    // Female kos with AC should be visible with match badge
    expect(screen.getByText("Wisma Pondok Cina Asri")).not.toBeNull();
    expect(screen.getAllByText(/% Cocok/).length).toBeGreaterThan(0);


    // Male kos should be excluded
    expect(screen.queryByText("Kos Graha Kukusan Mandiri")).toBeNull();

    // Clear search using clear button
    const clearBtn = screen.getAllByLabelText("Hapus kata kunci pencarian")[0]!;
    fireEvent.click(clearBtn);

    // All listings restored
    expect(screen.getByText("Kos Graha Kukusan Mandiri")).not.toBeNull();
  });

  it("triggers semantic filter via quick prompt chip and detects cross-campus intent", () => {
    render(<MapExplorer />);

    // Click prompt chip "Hemat ≤ 1jt"
    const hematChip = screen.getAllByRole("button", { name: /Hemat ≤ 1jt/i })[0]!;
    fireEvent.click(hematChip);

    // Only budget kos <= 1jt should appear
    expect(screen.getByText("Wisma Jurang Kutek Ekonomis")).not.toBeNull();
    // High rent kos (>1jt) should not be eligible
    expect(screen.queryByText("Kos UI Cantik Kutek")).toBeNull();

    // Type query mentioning another campus (ITERA) while on UI
    const searchInputs = screen.getAllByLabelText("Pencarian semantik kos bahasa alami");
    fireEvent.change(searchInputs[0]!, { target: { value: "kos itera lampung murah" } });

    // Cross-campus switcher banner should appear
    const switchBtn = screen.getByRole("button", { name: /Beralih ke ITERA/i });
    expect(switchBtn).not.toBeNull();

    // Click switch campus
    fireEvent.click(switchBtn);

    // Campus is switched to ITERA and its listings are displayed
    expect(screen.getByText("Institut Teknologi Sumatera (ITERA)")).not.toBeNull();
    expect(screen.getByText("Kos Pondok Ryacudu Asri")).not.toBeNull();
  });
});

