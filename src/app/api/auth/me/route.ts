import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { verifySessionToken } from "@/lib/auth";

export async function GET(req: Request) {
  try {
    let token: string | undefined;
    const cookieHeader = req.headers.get("cookie");
    if (cookieHeader) {
      const match = cookieHeader.match(/kosmatch_session=([^;]+)/);
      token = match?.[1];
    }

    if (!token) {
      try {
        const cookieStore = await cookies();
        token = cookieStore.get("kosmatch_session")?.value;
      } catch {
        // Fallback when outside Next.js request context
      }
    }

    if (!token) {
      return NextResponse.json({ user: null });
    }

    const payload = verifySessionToken(token);
    if (!payload) {
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({
      user: {
        userId: payload.userId,
        email: payload.email,
        role: payload.role,
      },
    });
  } catch (error) {
    console.error("Auth me error:", error);
    return NextResponse.json({ user: null });
  }
}
