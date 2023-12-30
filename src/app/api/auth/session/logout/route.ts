import { NextResponse } from "next/server"

async function logoutHandler() {
    const res = new NextResponse("/")
    res.cookies.set("accessToken", "", {
        httpOnly: true,
        secure: true,
        sameSite: true,
    })
    return res
}

export { logoutHandler as POST }
