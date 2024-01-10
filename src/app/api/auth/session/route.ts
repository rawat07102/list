import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

async function getSession(req: NextRequest) {
    const accessToken = cookies().get("accessToken")?.value
    return NextResponse.json({ accessToken })
}

export { getSession as GET }
