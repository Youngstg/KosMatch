import { describe, it, expect } from "vitest";
import { getSafeRedirectUrl } from "@/lib/auth/redirect";

describe("getSafeRedirectUrl", () => {
  const fallback = "/explore";

  describe("Vektor Serangan Open Redirect (Harus kembali ke fallback)", () => {
    it("menolak protocol-relative URL: //evil.com", () => {
      expect(getSafeRedirectUrl("//evil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("///evil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("//google.com/test", fallback)).toBe(fallback);
    });

    it("menolak backslash tricks: /\\evil.com", () => {
      expect(getSafeRedirectUrl("/\\evil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("/\\/evil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("\\evil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("/path\\evil.com", fallback)).toBe(fallback);
    });

    it("menolak scheme tanpa double slash: https:evil.com", () => {
      expect(getSafeRedirectUrl("https:evil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("http:evil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("https://evil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("http://evil.com", fallback)).toBe(fallback);
    });

    it("menolak javascript scheme dan XSS vector: javascript:alert(1)", () => {
      expect(getSafeRedirectUrl("javascript:alert(1)", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("javascript://alert(1)", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("data:text/html,<script>alert(1)</script>", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("vbscript:msgbox(1)", fallback)).toBe(fallback);
    });

    it("menolak varian URL-encoded", () => {
      // %2f = '/' -> %2f%2fevil.com == //evil.com
      expect(getSafeRedirectUrl("%2f%2fevil.com", fallback)).toBe(fallback);
      // /%2fevil.com == //evil.com
      expect(getSafeRedirectUrl("/%2fevil.com", fallback)).toBe(fallback);
      // %2f%5cevil.com == /\evil.com (%5c = '\')
      expect(getSafeRedirectUrl("%2f%5cevil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("/%5cevil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("/%2f%5cevil.com", fallback)).toBe(fallback);
      // Double URL encoded: %252f%252fevil.com
      expect(getSafeRedirectUrl("%252f%252fevil.com", fallback)).toBe(fallback);
      // Encoded javascript
      expect(getSafeRedirectUrl("%6a%61%76%61%73%63%72%69%70%74:alert(1)", fallback)).toBe(fallback);
      // Malformed encoding
      expect(getSafeRedirectUrl("/test%zz", fallback)).toBe(fallback);
    });

    it("menolak karakter kontrol, CRLF, dan whitespace bypass", () => {
      expect(getSafeRedirectUrl("/\r\n/evil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("/\t/evil.com", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("   //evil.com   ", fallback)).toBe(fallback);
    });

    it("menolak nilai null, undefined, dan string kosong", () => {
      expect(getSafeRedirectUrl(null, fallback)).toBe(fallback);
      expect(getSafeRedirectUrl(undefined, fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("", fallback)).toBe(fallback);
      expect(getSafeRedirectUrl("   ", fallback)).toBe(fallback);
    });
  });

  describe("Path Internal Valid (Harus diizinkan)", () => {
    it("mengizinkan path internal standar", () => {
      expect(getSafeRedirectUrl("/explore", fallback)).toBe("/explore");
      expect(getSafeRedirectUrl("/calculator", fallback)).toBe("/calculator");
      expect(getSafeRedirectUrl("/admin", fallback)).toBe("/admin");
      expect(getSafeRedirectUrl("/listings/new", fallback)).toBe("/listings/new");
    });

    it("mengizinkan path internal dengan query parameter dan hash", () => {
      expect(getSafeRedirectUrl("/calculator?ref=test&page=1", fallback)).toBe(
        "/calculator?ref=test&page=1"
      );
      expect(getSafeRedirectUrl("/explore#map-view", fallback)).toBe("/explore#map-view");
      expect(getSafeRedirectUrl("/admin/listings?status=pending#details", fallback)).toBe(
        "/admin/listings?status=pending#details"
      );
    });

    it("menggunakan default fallback '/explore' jika parameter fallback tidak diberikan", () => {
      expect(getSafeRedirectUrl("//evil.com")).toBe("/explore");
      expect(getSafeRedirectUrl(null)).toBe("/explore");
    });
  });
});

