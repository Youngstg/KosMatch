import { describe, expect, it } from "vitest";
import { pilotListingToAccommodationOption } from "@/features/map/services/dss-bridge";
import type { PilotListing } from "@/data/pilot-listings";

describe("DSS Bridge: Peta Eksplorasi ke Kalkulator DSS", () => {
  const dummyListing: PilotListing = {
    id: "ui-depok-01",
    name: "Kos Graha Kukusan Mandiri",
    campusId: "ui-depok",
    city: "Depok",
    area: "Kukusan Teknik",
    coordinates: { latitude: -6.3685, longitude: 106.8212 },
    rentMonthly: 1650000,
    roomType: "single",
    gender: "male",
    facilityCodes: ["bathroom_inside", "wifi", "ac"],
    verified: true,
    notes: "Dekat Pintu Tol Kukusan dan FT UI. Termasuk listrik dan akses 24 jam.",
  };

  it("converts PilotListing to AccommodationOption with correct schema and verified rent", () => {
    const projectId = "proj-test-123";
    const option = pilotListingToAccommodationOption(dummyListing, projectId, 8);

    expect(option.id).toBe("opt-ui-depok-01");
    expect(option.projectId).toBe(projectId);
    expect(option.name).toBe("Kos Graha Kukusan Mandiri");
    expect(option.rent.amount).toBe(1650000);
    expect(option.rent.origin).toBe("confirmed");
    expect(option.oneWayCommuteMinutes).toBe(8);
    expect(option.electricity.amount).toBe(0); // detected 'termasuk listrik'
    expect(option.facilityCodes).toEqual(["bathroom_inside", "wifi", "ac"]);
    expect(option.ruleValues.access_24h).toBe(true);
  });

  it("defaults commute minutes and handles electricity without inclusive note", () => {
    const listingWithoutElectric: PilotListing = {
      ...dummyListing,
      notes: "Kos tenang di gang damai.",
    };

    const option = pilotListingToAccommodationOption(listingWithoutElectric, "proj-456", null);
    expect(option.oneWayCommuteMinutes).toBe(12);
    expect(option.electricity.amount).toBe(150000);
    expect(option.electricity.origin).toBe("estimated");
  });
});
