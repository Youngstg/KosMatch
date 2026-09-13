import { describe, expect, it } from "vitest";

import { DEMO_DISCLAIMER, demoOptions, demoProject } from "@/data/demo";

describe("fixture demo", () => {
  it("menyediakan minimal tiga opsi fiktif untuk satu project", () => {
    expect(demoOptions).toHaveLength(3);
    expect(new Set(demoOptions.map((option) => option.id)).size).toBe(3);
    expect(demoOptions.every((option) => option.projectId === demoProject.id)).toBe(true);
    expect(demoOptions.every((option) => option.area.includes("fiktif"))).toBe(true);
    expect(DEMO_DISCLAIMER.toLowerCase()).toContain("fiktif");
  });
});
