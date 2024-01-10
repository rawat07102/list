import { Playlist, Video, YTResponse } from "@/types"
import { cookies } from "next/headers"
import fetcher from "./fetcher"

type getPlaylistRes = {
    playlists: Playlist[]
}

export const getPlaylists = async (): Promise<Playlist[]> => {
    const token = cookies().get("accessToken")?.value
    const res = await fetcher.get<getPlaylistRes>("user/playlists", {
        headers: {
            Authorization: "Bearer: " + token,
        },
    })
    return res.data.playlists
}

export async function getPlaylistById(id: string) {
    const res = await fetcher.get<Playlist>("playlist/" + id)
    return res.data
}

export async function getVideoById(id: string) {
    const res = await fetcher.get<YTResponse<Video[]>>(`/youtube/video/${id}`)
    return res.data.items[0]
}