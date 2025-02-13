import { NextResponse } from "next/server"

export function middleware(request) {
	//console.log("request", request.cookies.has("repe_token"))

	if (!request.cookies.has("landrup_token") || !request.cookies.has("landrup_userid")) {
		return NextResponse.redirect(new URL("/login", request.url))
	}
}

export const config = {
	matcher: "/kalender/:path*",
    // matcher: ['/kalender/:path*', '/dashboard/:path*'],
    
}