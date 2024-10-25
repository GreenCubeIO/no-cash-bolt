import { NextResponse } from "next/server";
import { setAuthCookie } from "@/lib/auth-server";

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  // TODO: Replace with actual MongoDB authentication
  const isValid = username === "admin" && password === "admin";

  if (isValid) {
    await setAuthCookie("dummy_token");
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}