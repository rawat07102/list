import React from "react"
import Image from "next/image"
import { getVideoById } from "@/lib/utils/apiCalls"
import { formatDate } from "@/lib/formatDate"

type Props = {
    videoId: string
}

export default async function VideoCard(props: Props) {
    const video = await getVideoById(props.videoId)
    const { snippet, statistics } = video
    const viewCount = 1692150
    return (
        <div className="flex items-start gap-4 rounded-2xl drop-shadow-md">
            <div className="relative w-[220px] h-[150px]">
                <Image
                    className="drop-shadow-md rounded-2xl"
                    src={snippet.thumbnails.default.url}
                    alt={snippet.title}
                    fill
                />
            </div>
            <div className="flex-1 flex gap-4 flex-col py-2">
                <span className="font-bold">{snippet.title}</span>
                <span className="text-gray-300 text-sm">
                    {new Intl.NumberFormat().format(viewCount)} views |{" "}
                    {formatDate(snippet.publishedAt)}
                </span>
            </div>
        </div>
    )
}
