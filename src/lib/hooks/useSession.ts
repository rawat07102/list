"use client"
import React from "react"
import { fetchSession } from "../utils/tokenFetcher"

export default function useSession() {
    const [token, setToken] = React.useState<string | null>(null)
    React.useEffect(() => {
        fetchSession().then((res) => {
            setToken(res.accessToken)
        })
    })
    return token
}
