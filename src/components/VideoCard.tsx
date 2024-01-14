import React from "react"
import Image from "next/image"
import { getVideoById } from "@/lib/utils/apiCalls"
import { formatDate } from "@/lib/utils/formatDate"
import { formatNumber } from "@/lib/utils/formatNumber"

type Props = {
    videoId: string
}

export default async function VideoCard(props: Props) {
    const video = await getVideoById(props.videoId)
    const { snippet, statistics } = video
    return (
        <div className="flex items-start gap-4 rounded-lg drop-shadow-md p-2 pl-4 hover:bg-gradient-to-r from-primary-800 to-transparent cursor-pointer">
            <div className="relative h-[90px] w-[160px]">
                <Image
                    className="drop-shadow-md rounded-lg"
                    src={snippet.thumbnails.medium.url}
                    alt={snippet.title}
                    fill
                    style={{
                        objectFit: "cover"
                    }}
                />
            </div>
            <div className="flex-1 flex gap-4 flex-col py-2">
                <span className="font-bold">{snippet.title}</span>
                <span className="text-gray-300 text-sm">
                    {formatNumber(parseInt(statistics.viewCount))} views |{" "}
                    {formatDate(snippet.publishedAt)}
                </span>
            </div>
        </div>
    )
}
