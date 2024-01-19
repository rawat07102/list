import React from "react"
import { getPlaylistById, getVideoById } from "@/lib/actions"
import VideoCard from "@/components/VideoCard"

function getYoutubeVideoSrc(id: string) {
    return `https://www.youtube.com/embed/${id}?&autoplay=1&controls=1&disablekb=0&iv_load_policy=3`
}

type Props = {
    params: {
        videoId: string
        playlistId: string
    }
}

export default async function PlayerPage({ params }: Props) {
    const { videoId, playlistId } = params
    const { id, snippet } = await getVideoById(videoId)
    const playlist = await getPlaylistById(playlistId)

    return (
        <main className="flex gap-2 w-full h-full">
            <div className="flex w-full">
                <iframe
                    className="flex-1 h-full w-full"
                    src={getYoutubeVideoSrc(id)}
                    title={snippet.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
                <section className="flex flex-col gap-4">
                    <h1 className="truncate max-w-44 pl-4 text-lg font-bold">
                        {playlist.title}
                    </h1>
                    {playlist.videos.map((videoId) => (
                        <VideoCard
                            className="max-w-44"
                            playlistId={playlistId}
                            videoId={videoId}
                            key={videoId}
                        />
                    ))}
                </section>
            </div>
        </main>
    )
}
