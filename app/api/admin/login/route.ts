import { NextRequest, NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE, createSessionToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { passcode } = await request.json();
  const correctPasscode = process.env.ADMIN_PASSCODE;

  if (!correctPasscode) {
    return NextResponse.json(
      { error: "ADMIN_PASSCODE belum diset di server." },
      { status: 500 }
    );
  }

  if (passcode !== correctPasscode) {
    return NextResponse.json({ error: "Kode akses salah." }, { status: 401 });
  }

  const token = await createSessionToken();
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
