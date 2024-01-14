import { Playlist, Video, YTResponse } from "@/types"

import fetcher from "./fetcher"
export async function getVideoById(id: string) {
    const res = await fetcher.get<YTResponse<Video[]>>(`/youtube/video/${id}`)
    return res.data.items[0]
}
