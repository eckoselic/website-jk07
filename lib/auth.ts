// Sesi admin sederhana berbasis passcode (Pola B, lihat skill aplikasi-sekolah-nextjs-supabase).
// Tidak pakai Supabase Auth karena hanya 1 admin TU yang login.
//
// Token = base64("<expiredAtMs>.<signatureHex>"), signature = HMAC-SHA256(SESSION_SECRET, expiredAtMs)
// Diverifikasi di server (route handler + middleware), tidak pernah di client.

const COOKIE_NAME = "admin_session";
const SESSION_DURATION_MS = 1000 * 60 * 60 * 12; // 12 jam

async function hmac(secret: string, message: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken(): Promise<string> {
  const secret = process.env.SESSION_SECRET;
  if (!secret) throw new Error("SESSION_SECRET belum diset di environment variables");
  const expiresAt = Date.now() + SESSION_DURATION_MS;
  const signature = await hmac(secret, String(expiresAt));
  return Buffer.from(`${expiresAt}.${signature}`).toString("base64url");
}

export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const secret = process.env.SESSION_SECRET;
  if (!secret) return false;
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf-8");
    const [expiresAtStr, signature] = decoded.split(".");
    const expiresAt = Number(expiresAtStr);
    if (!expiresAt || Date.now() > expiresAt) return false;
    const expectedSignature = await hmac(secret, expiresAtStr);
    return expectedSignature === signature;
  } catch {
    return false;
  }
}

export const ADMIN_SESSION_COOKIE = COOKIE_NAME;
