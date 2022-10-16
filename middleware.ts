import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(nextRequest: NextRequest) {
  return NextResponse.rewrite(nextRequest.url);
}
