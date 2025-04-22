import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // If visiting root path `/`, redirect to `/fr`
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/fr";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
