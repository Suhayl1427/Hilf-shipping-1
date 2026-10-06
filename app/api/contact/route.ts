import { NextResponse } from "next/server";

// Placeholder endpoint: validates the payload and acknowledges it.
// Replace with the live site's existing submit handler (or set NEXT_PUBLIC_CONTACT_ENDPOINT).
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
  console.log("[contact]", { name: body.name, email: body.email });
  return NextResponse.json({ ok: true });
}
