import { describe, expect, it } from "vitest";
import { extractListingFromText } from "@/features/listings/services/extract-listing";

describe("Listing Text Extractor (Tahap C Roadmap ML/DL)", () => {
  it("mengekstrak iklan WhatsApp kos lengkap", () => {
    const raw = `
      Disewakan Kos Putri Melati Kukusan UI.
      Harga sewa: Rp 1.350.000 / bulan.
      Sudah free air dan wifi. Listrik pakai token sendiri.
      Fasilitas kamar: AC, kamar mandi dalam, kasur springbed, lemari pakaian, meja belajar.
      Aturan: Akses gerbang 24 jam, dilarang lawan jenis masuk kamar.
      Hubungi: 081234567890
    `;

    const res = extractListingFromText(raw);
    expect(res.rentMonthly).toBe(1350000);
    expect(res.gender).toBe("female");
    expect(res.water.amount).toBe(0);
    expect(res.water.origin).toBe("estimated");
    expect(res.electricity.origin).toBe("unknown");
    expect(res.facilityCodes).toContain("ac");
    expect(res.facilityCodes).toContain("private_bathroom");
    expect(res.facilityCodes).toContain("wifi");
    expect(res.facilityCodes).toContain("bed");
    expect(res.facilityCodes).toContain("wardrobe");
    expect(res.facilityCodes).toContain("study_desk");
    expect(res.ruleValues["access_24h"]).toBe(true);
    expect(res.ruleValues["no_opposite_sex"]).toBe(true);
    expect(res.contactPhone).toBe("081234567890");
    expect(res.confidence).toBe("high");
  });

  it("mengekstrak format singkat seperti '1.2jt' dan 'putra'", () => {
    const raw = "Kos Putra Graha Indah 1.2jt/bln ada AC, wifi, parkir. WA 085711223344";
    const res = extractListingFromText(raw);
    expect(res.rentMonthly).toBe(1200000);
    expect(res.gender).toBe("male");
    expect(res.facilityCodes).toContain("ac");
    expect(res.facilityCodes).toContain("wifi");
    expect(res.facilityCodes).toContain("parking");
    expect(res.contactPhone).toBe("085711223344");
  });
});
