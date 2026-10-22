import { describe, expect, it } from "vitest";
import { parseSemanticQuery, searchListingsSemantically } from "@/domain/search/semantic-search";
import { PILOT_LISTINGS } from "@/data/pilot-listings";

describe("Semantic & Natural Language Search (Tahap D Roadmap ML/DL)", () => {
  describe("Parsing Entitas Bahasa Alami", () => {
    it("mendeteksi gender putri, kampus unand, fasilitas ac, dan harga", () => {
      const q = parseSemanticQuery("kos cewek dekat unand ada ac di bawah 1jt");
      expect(q.gender).toBe("female");
      expect(q.detectedCampusId).toBe("unand-limau-manis");
      expect(q.requiredFacilityCodes).toContain("ac");
      expect(q.maxRentMonthly).toBe(1000000);
      expect(q.preferCloseToCampus).toBe(true);
    });

    it("mendeteksi area kukusan dan gender putra", () => {
      const q = parseSemanticQuery("kos putra kukusan ui tenang km dalam");
      expect(q.gender).toBe("male");
      expect(q.detectedCampusId).toBe("ui-depok");
      expect(q.detectedArea).toBe("kukusan");
      expect(q.quietPreferred).toBe(true);
      expect(q.requiredFacilityCodes).toContain("bathroom_inside");
    });

    it("mendeteksi aturan 24 jam dan kos campur", () => {
      const q = parseSemanticQuery("kos campur bebas 24 jam wifi");
      expect(q.gender).toBe("all");
      expect(q.access24hPreferred).toBe(true);
      expect(q.requiredFacilityCodes).toContain("wifi");
    });
  });

  describe("Pencarian Semantik terhadap 20 Kueri Uji Nyata", () => {
    const testQueries = [
      "kos cewek dekat unand ada ac di bawah 1jt",
      "kos putra kukusan ui tenang km dalam",
      "kos campur wifi depok",
      "kos murah itera dekat gerbang",
      "kos putri pocin ada ac",
      "kos cowok margonda km dalam",
      "kos putri limau manis murah",
      "kos tenang kukusan teknik",
      "kos ada ac dan wifi depok",
      "kos putri padang pasar baru",
      "kos putra itera way huwi",
      "kos putri kukusan harga di bawah 1.5jt",
      "kos campur margonda ada ac",
      "kos unand kamar mandi dalam",
      "kos murah di bawah 1jt",
      "kos dekat ui jalan kaki",
      "kos putri ac wifi tenang",
      "kos putra unand hemat",
      "kos itera fasilitas lengkap",
      "kos cewek kukusan teknik murah",
    ];

    it("menghasilkan hasil relevan untuk seluruh 20 kueri uji", () => {
      expect(testQueries.length).toBe(20);

      for (const query of testQueries) {
        const result = searchListingsSemantically(PILOT_LISTINGS, query);
        // Setiap kueri harus menghasilkan setidaknya 1 kecocokan yang eligible atau filter yang terurai dengan benar
        expect(result.parsedFilter.rawQuery).toBe(query);
        expect(result.totalMatches).toBeGreaterThanOrEqual(1);

        // Hasil teratas harus memiliki skor relevansi >= 60%
        const topMatch = result.matches[0];
        expect(topMatch.isEligible).toBe(true);
        expect(topMatch.relevanceScore).toBeGreaterThanOrEqual(60);
        expect(topMatch.matchExplanation).toBeDefined();
      }
    });

    it("memfilter secara ketat kos putri dan batas harga", () => {
      const result = searchListingsSemantically(PILOT_LISTINGS, "kos putri unand di bawah 1jt");
      expect(result.totalMatches).toBeGreaterThan(0);
      for (const match of result.matches) {
        expect(match.listing.gender).not.toBe("male");
        expect(match.listing.rentMonthly).toBeLessThanOrEqual(1000000);
        expect(match.listing.campusId).toBe("unand-limau-manis");
      }
    });

    it("mengembalikan semua listing saat kueri kosong", () => {
      const result = searchListingsSemantically(PILOT_LISTINGS, "");
      expect(result.totalMatches).toBe(PILOT_LISTINGS.length);
    });
  });
});
