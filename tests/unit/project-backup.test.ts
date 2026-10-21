import { describe, expect, it } from "vitest";

import {
  generateBackupFilename,
  MAX_IMPORT_SIZE_BYTES,
  parseProjectImport,
  ProjectImportError,
} from "@/features/projects/services";

describe("project backup and import helpers (V-09)", () => {
  describe("generateBackupFilename", () => {
    it("menghasilkan slug nama berkas yang bersih untuk nama proyek standar", () => {
      expect(generateBackupFilename("Kos Magang di Jakarta")).toBe(
        "kosmatch-kos-magang-di-jakarta.json",
      );
    });

    it("membersihkan simbol khusus dan karakter non-alphanumeric", () => {
      expect(generateBackupFilename("🏢 Kos #1 — Setiabudi!!")).toBe(
        "kosmatch-kos-1-setiabudi.json",
      );
    });

    it("memberikan fallback 'kosmatch-backup.json' jika nama proyek hanya simbol", () => {
      expect(generateBackupFilename("!@#$%^&*()")).toBe("kosmatch-backup.json");
      expect(generateBackupFilename("")).toBe("kosmatch-backup.json");
    });
  });

  describe("parseProjectImport batas ukuran (V-09)", () => {
    it("menolak data import yang melebihi batas ukuran maksimum", () => {
      const hugeJson = " ".repeat(1024); // 1 KB
      expect(() => parseProjectImport(hugeJson, 512)).toThrow(ProjectImportError);
      expect(() => parseProjectImport(hugeJson, 512)).toThrow(/melebihi batas maksimum/);
    });

    it("memiliki konstanta MAX_IMPORT_SIZE_BYTES sebesar 5 MB", () => {
      expect(MAX_IMPORT_SIZE_BYTES).toBe(5 * 1024 * 1024);
    });
  });
});
