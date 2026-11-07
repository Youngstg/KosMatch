/**
 * Utilitas sanitasi URL Pengalihan (Redirect)
 * Melindungi dari Open Redirect Vulnerability (CWE-601).
 *
 * Mencegah bypass berbasis:
 * - Protocol-relative URL ("//evil.com")
 * - Backslash trick ("/\evil.com", "/\\evil.com")
 * - Scheme injection ("https:evil.com", "javascript:alert(1)")
 * - URL-encoded variant ("%2f%2fevil.com", "/%5cevil.com")
 * - Control characters & CRLF injection
 */

export function getSafeRedirectUrl(
  raw: string | null | undefined,
  fallback = "/explore"
): string {
  if (!raw || typeof raw !== "string") {
    return fallback;
  }

  const trimmed = raw.trim();
  if (!trimmed) {
    return fallback;
  }

  // Tolak karakter kontrol dan CRLF
  if (/[\x00-\x1F\x7F\r\n\t]/.test(trimmed)) {
    return fallback;
  }

  // Wajib diawali dengan single slash '/' (relative path internal)
  if (!trimmed.startsWith("/") || trimmed.startsWith("//") || trimmed.startsWith("/\\")) {
    return fallback;
  }

  // Tolak keberadaan backslash di mana pun karena browser dapat menafsirkannya sebagai slash
  if (trimmed.includes("\\")) {
    return fallback;
  }

  // Periksa versi decoded untuk mendeteksi URL encoding bypass (%2f%2f, %5c, dsb.)
  try {
    let decoded = decodeURIComponent(trimmed);
    // Lakukan decode sekunder jika masih ada persentase untuk mencegah nested encoding
    if (decoded.includes("%")) {
      try {
        decoded = decodeURIComponent(decoded);
      } catch {
        // Abaikan jika bukan encoded valid, lanjut evaluasi string
      }
    }

    if (
      !decoded.startsWith("/") ||
      decoded.startsWith("//") ||
      decoded.startsWith("/\\") ||
      decoded.includes("\\") ||
      decoded.includes("://") ||
      /[\x00-\x1F\x7F\r\n\t]/.test(decoded)
    ) {
      return fallback;
    }
  } catch {
    // Malformed URI sequence
    return fallback;
  }

  // Validasi ketat menggunakan URL parser dengan dummy origin tepercaya
  try {
    const baseOrigin = "https://kosmatch.local";
    const parsed = new URL(trimmed, baseOrigin);

    // Origin, protocol, dan host harus identik dengan basis internal
    if (
      parsed.origin !== baseOrigin ||
      parsed.protocol !== "https:" ||
      parsed.host !== "kosmatch.local"
    ) {
      return fallback;
    }

    // Pathname harus berupa single leading slash
    if (!parsed.pathname.startsWith("/") || parsed.pathname.startsWith("//")) {
      return fallback;
    }

    return parsed.pathname + parsed.search + parsed.hash;
  } catch {
    return fallback;
  }
}
