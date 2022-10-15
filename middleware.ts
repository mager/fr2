import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(nextRequest: NextRequest) {
  console.log({ geo: nextRequest.geo });
  return NextResponse.rewrite(nextRequest.url);
}
