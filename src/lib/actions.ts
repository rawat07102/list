"use server"
import { Playlist } from "@/types"
import { cookies } from "next/headers"
import { getApiUrl } from "./utils/getFullUrl"
import { revalidateTag } from "next/cache"

export async function addVideoToPlaylist(
    playlistId: string,
    videoId: string
): Promise<{
    playlistId: string
    videoId: string
}> {
    try {
        const token = cookies().get("accessToken")?.value
        const headers = new Headers()
        headers.append("Authorization", `Bearer: ${token}`)
        headers.append("Content-Type", "application/json")
        const response = await fetch(
            getApiUrl(`playlist/${playlistId}/addVideo`),
            {
                method: "POST",
                body: JSON.stringify({
                    videoId,
                }),
                credentials: "include",
                headers,
            }
        )

        if (!response.ok) {
            throw {
                message: "addVideoToPlaylist failed",
                code: response.status,
            }
        }
        revalidateTag("getPlaylistById")
        return response.json()
    } catch (err) {
        console.error("[ACTION:addVideoToPlaylist]")
        throw err
    }
}

export async function getPlaylistById(id: string): Promise<Playlist> {
    try {
        const res = await fetch(getApiUrl(`playlist/${id}`), {
            next: {
                tags: ["getPlaylistById"],
            },
        })
        return await res.json()
    } catch (err) {
        console.error("[ACTION:getPlaylistById]")
        throw err
    }
}

export async function getUsersPlaylists(): Promise<Playlist["_id"][]> {
    try {
        const token = cookies().get("accessToken")?.value
        const headers = new Headers()
        headers.append("Authorization", `Bearer: ${token}`)
        const res = await fetch(getApiUrl("user/playlists"), {
            headers,
            next: {
                tags: ["getUsersPlaylists"],
            },
        })
        return res.json()
    } catch (err) {
        console.error("[ACTION:getUsersPlaylists]")
        throw err
    }
}
