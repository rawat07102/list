import { NextRequest, NextResponse } from "next/server"

export function middleware(req: NextRequest) {
    const token = req.cookies.get("accessToken")?.value
    if (!token) return NextResponse.redirect(new URL("/auth/login", req.url))

    return NextResponse.next()
}

export const config = {
    matcher: ["/((?!auth|api|_next/static|_next/image|favicon.ico).*)"],
}
