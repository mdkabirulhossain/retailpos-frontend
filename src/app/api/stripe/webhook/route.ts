import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  // TODO: Verify Stripe webhook signature and handle events
  console.log("Stripe webhook received", { sig, body });

  return NextResponse.json({ received: true });
}
