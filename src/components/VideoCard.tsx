import React from "react"
import Image from "next/image"
import { formatDate } from "@/lib/utils/formatDate"
import { formatNumber } from "@/lib/utils/formatNumber"
import Link from "next/link"
import { getVideoById } from "@/lib/actions"
import { ClassValue } from "clsx"
import { cn } from "@/lib/utils/cn"

type Props = {
    videoId: string
    playlistId: string
    className?: ClassValue
}

export default async function VideoCard({
    videoId,
    playlistId,
    className,
}: Props) {
    const video = await getVideoById(videoId)
    const { snippet, statistics } = video
    return (
        <Link
            href={`/playlist/${playlistId}/player/${videoId}`}
            className="flex items-start gap-4 rounded-lg drop-shadow-md p-2 pl-4 hover:bg-gradient-to-r from-primary-800 to-transparent cursor-pointer"
            title={snippet.title}
        >
            <div className="relative h-[90px] w-[160px]">
                <Image
                    className="drop-shadow-md rounded-lg"
                    src={snippet.thumbnails.medium.url}
                    alt={snippet.title}
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
            <div className={cn("flex-1 flex gap-4 flex-col py-2", className)}>
                <span className="font-bold truncate">{snippet.title}</span>
                <span className="text-gray-300 text-sm">
                    {formatNumber(parseInt(statistics.viewCount))} views |{" "}
                    {formatDate(snippet.publishedAt)}
                </span>
            </div>
        </Link>
    )
}
