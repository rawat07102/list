import fetcher from "@/lib/utils/fetcher"
import { Video, YTResponse } from "@/types"
import React from "react"

async function getVideo() {
    const res = await fetcher.get<YTResponse<Video[]>>(
        "/youtube/video/klsdjfsl"
    )
    return res.data.items[0]
}

function getYoutubeVideoSrc(id: string) {
    return `https://www.youtube.com/embed/${id}?&autoplay=1&controls=0&disablekb=1&iv_load_policy=3`
}

export default async function PlayerPage() {
    const video = await getVideo()
    const id = video.id
    return (
        <div className="flex w-full h-full">
            <iframe
            className="h-full w-full"
                src={getYoutubeVideoSrc(id)}
                title={video.snippet.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

/**
 * thumbnail
 * title
 * id
 * views
 * likes
 */
