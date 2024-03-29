import { getAppUrl } from "@/lib/utils/getFullUrl"

export type Session = {
    accessToken: string
}

export async function fetchSession(): Promise<Session> {
    const url = getAppUrl("api/auth/session")
    const res = await fetch(url)
    return res.json()
}
