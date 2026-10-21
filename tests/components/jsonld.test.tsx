// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { LandingJsonLd } from "@/features/landing";

afterEach(() => cleanup());

describe("LandingJsonLd Component", () => {
  it("renders valid schema.org structured data script with SoftwareApplication and FAQPage", () => {
    const { container } = render(<LandingJsonLd />);
    const script = container.querySelector("script[type='application/ld+json']");
    expect(script).not.toBeNull();

    const content = JSON.parse(script!.textContent || "{}");
    expect(content["@context"]).toBe("https://schema.org");
    expect(content["@graph"]).toBeDefined();

    const graph = content["@graph"];
    const appSchema = graph.find((item: { "@type": string }) => item["@type"] === "SoftwareApplication");
    expect(appSchema).toBeDefined();
    expect(appSchema.name).toBe("KosMatch");
    expect(appSchema.featureList.length).toBeGreaterThan(3);

    const faqSchema = graph.find((item: { "@type": string }) => item["@type"] === "FAQPage");
    expect(faqSchema).toBeDefined();
    expect(faqSchema.mainEntity.length).toBe(5);
  });
});
