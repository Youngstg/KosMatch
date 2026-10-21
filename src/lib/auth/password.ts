import { randomBytes, scryptSync, timingSafeEqual, createHmac } from "node:crypto";

const SCRYPT_KEYLEN = 64;
const DEFAULT_SECRET = process.env.JWT_SECRET || process.env.AUTH_SECRET || "kosmatch-development-secret-key-at-least-32-chars-long";

/**
 * Hash kata sandi menggunakan scrypt dengan random salt 16-byte.
 * Format output: salt:derivedKey (dalam hex).
 */
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const derivedKey = scryptSync(password, salt, SCRYPT_KEYLEN).toString("hex");
  return `${salt}:${derivedKey}`;
}

/**
 * Verifikasi kata sandi terhadap hash scrypt secara timing-safe.
 */
export function verifyPassword(password: string, storedHash: string): boolean {
  try {
    const [salt, key] = storedHash.split(":");
    if (!salt || !key) return false;

    const keyBuffer = Buffer.from(key, "hex");
    const derivedKeyBuffer = scryptSync(password, salt, SCRYPT_KEYLEN);

    return timingSafeEqual(keyBuffer, derivedKeyBuffer);
  } catch {
    return false;
  }
}

export interface UserSessionPayload {
  readonly userId: string;
  readonly email: string;
  readonly role: "user" | "owner" | "admin";
  readonly exp: number;
}

/**
 * Membuat token sesi terenkripsi/ditandatangani HMAC-SHA256 (masa aktif 7 hari).
 */
export function createSessionToken(
  user: { userId: string; email: string; role: "user" | "owner" | "admin" },
  expiresInDays = 7
): string {
  const exp = Math.floor(Date.now() / 1000) + expiresInDays * 24 * 60 * 60;
  const payload: UserSessionPayload = {
    userId: user.userId,
    email: user.email,
    role: user.role,
    exp,
  };

  const payloadB64 = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = createHmac("sha256", DEFAULT_SECRET).update(payloadB64).digest("base64url");

  return `${payloadB64}.${signature}`;
}

/**
 * Memverifikasi dan mendekode token sesi. Mengembalikan null jika tanda tangan salah atau kadaluarsa.
 */
export function verifySessionToken(token: string): UserSessionPayload | null {
  try {
    const [payloadB64, signature] = token.split(".");
    if (!payloadB64 || !signature) return null;

    const expectedSig = createHmac("sha256", DEFAULT_SECRET).update(payloadB64).digest("base64url");
    if (signature.length !== expectedSig.length) return null;

    const sigBuf = Buffer.from(signature, "base64url");
    const expBuf = Buffer.from(expectedSig, "base64url");
    if (!timingSafeEqual(sigBuf, expBuf)) return null;

    const payload = JSON.parse(Buffer.from(payloadB64, "base64url").toString("utf-8")) as UserSessionPayload;
    if (typeof payload.exp !== "number" || payload.exp < Math.floor(Date.now() / 1000)) {
      return null; // Expired
    }

    return payload;
  } catch {
    return null;
  }
}
