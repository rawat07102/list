import { getFullUrl } from "@/app/api/utils/getFullUrl"

export type Session = {
    token: string
}

export async function getToken(): Promise<Session> {
    const url = getFullUrl("api/auth/session")
    const res = await fetch(url)
    return res.json()
}
