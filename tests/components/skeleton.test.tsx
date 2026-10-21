// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { WorkspaceSkeleton } from "@/features/workspace/components/workspace-skeleton";

afterEach(() => cleanup());

describe("WorkspaceSkeleton Component", () => {
  it("renders with status role, aria-busy, and accessible loading label", () => {
    const { container } = render(<WorkspaceSkeleton />);

    const statusElement = screen.getByRole("status");
    expect(statusElement).not.toBeNull();
    expect(statusElement.getAttribute("aria-busy")).toBe("true");
    expect(statusElement.getAttribute("aria-label")).toBe("Memuat ruang kerja KosMatch...");

    expect(screen.getByText("Memuat data dan ruang kerja KosMatch...")).not.toBeNull();

    const skeletons = container.querySelectorAll(".skeleton");
    expect(skeletons.length).toBeGreaterThan(10);
  });
});
