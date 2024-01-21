import { NextResponse } from "next/server";
import { hearings } from "../../../../data";

export function GET() {
  return NextResponse.json(hearings, { status: 200});
}