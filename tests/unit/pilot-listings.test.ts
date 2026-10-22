import { describe, expect, it } from "vitest";
import {
  getListingsByCampus,
  PILOT_LISTINGS,
} from "@/data/pilot-listings";

describe("PILOT_LISTINGS dataset", () => {
  it("contains listings for UI Depok, Unand Limau Manis, and ITERA Lampung", () => {
    const uiListings = getListingsByCampus("ui-depok");
    const unandListings = getListingsByCampus("unand-limau-manis");
    const iteraListings = getListingsByCampus("itera-lampung");

    expect(uiListings.length).toBeGreaterThanOrEqual(15);
    expect(unandListings.length).toBeGreaterThanOrEqual(12);
    expect(iteraListings.length).toBeGreaterThanOrEqual(10);
    expect(PILOT_LISTINGS.length).toBeGreaterThanOrEqual(40);
    expect(PILOT_LISTINGS.length).toBe(uiListings.length + unandListings.length + iteraListings.length);
  });

  it("verifies every listing has valid coordinates, positive rent, and non-empty facilities", () => {
    PILOT_LISTINGS.forEach((listing) => {
      expect(listing.id).toBeTruthy();
      expect(listing.name).toBeTruthy();
      expect(listing.rentMonthly).toBeGreaterThan(0);
      expect(listing.coordinates.latitude).not.toBeNaN();
      expect(listing.coordinates.longitude).not.toBeNaN();
      expect(listing.facilityCodes.length).toBeGreaterThan(0);
      expect(listing.verified).toBe(true);
    });
  });

  it("ensures UI Depok coordinates are within reasonable Jabodetabek range", () => {
    const uiListings = getListingsByCampus("ui-depok");
    uiListings.forEach((l) => {
      expect(l.coordinates.latitude).toBeLessThan(-6.0);
      expect(l.coordinates.latitude).toBeGreaterThan(-6.5);
      expect(l.coordinates.longitude).toBeGreaterThan(106.5);
      expect(l.coordinates.longitude).toBeLessThan(107.0);
    });
  });

  it("ensures Unand Padang coordinates are within West Sumatra range", () => {
    const unandListings = getListingsByCampus("unand-limau-manis");
    unandListings.forEach((l) => {
      expect(l.coordinates.latitude).toBeLessThan(0);
      expect(l.coordinates.latitude).toBeGreaterThan(-1.5);
      expect(l.coordinates.longitude).toBeGreaterThan(100.0);
      expect(l.coordinates.longitude).toBeLessThan(101.0);
    });
  });

  it("ensures ITERA Lampung coordinates are within Lampung range", () => {
    const iteraListings = getListingsByCampus("itera-lampung");
    iteraListings.forEach((l) => {
      expect(l.coordinates.latitude).toBeLessThan(-5.0);
      expect(l.coordinates.latitude).toBeGreaterThan(-5.6);
      expect(l.coordinates.longitude).toBeGreaterThan(105.1);
      expect(l.coordinates.longitude).toBeLessThan(105.5);
    });
  });
});
