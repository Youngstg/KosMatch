// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { MapExplorer, MapSkeleton } from "@/features/map";

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

    // Campus selection buttons
    const uiBtn = screen.getByRole("button", { name: /Universitas Indonesia/i });
    const unandBtn = screen.getByRole("button", { name: /Universitas Andalas/i });
    expect(uiBtn).not.toBeNull();
    expect(unandBtn).not.toBeNull();

    // Default primary campus is UI Depok
    const uiHeading = screen.getByRole("heading", { level: 2, name: /Universitas Indonesia \(Depok\)/i });
    expect(uiHeading).not.toBeNull();
    expect(screen.getByText("4 km")).not.toBeNull();
    expect(screen.getByText("50 kos")).not.toBeNull();

    // Switch campus to Unand Limau Manis
    fireEvent.click(unandBtn);
    const unandHeading = screen.getByRole("heading", { level: 2, name: /Universitas Andalas \(Limau Manis\)/i });
    expect(unandHeading).not.toBeNull();
    expect(screen.getByText("5 km")).not.toBeNull();
    expect(screen.getByText("30 kos")).not.toBeNull();
  });
});
