import { NextRequest, NextResponse } from "next/server"

async function getSession(req: NextRequest) {
    const token = req.cookies.get("accessToken")?.value
    return NextResponse.json({ token })
}

export { getSession as GET }
