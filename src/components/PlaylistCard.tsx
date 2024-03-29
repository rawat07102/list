import { getPlaylistById } from "@/lib/actions"
import { formatDate } from "@/lib/utils/formatDate"
import { getImageSrc } from "@/lib/utils/getImageSrc"
import { Playlist } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
    playlistId: Playlist["_id"]
}

export default async function PlaylistCard({ playlistId }: Props) {
    const { _id, thumbnail, title, viewsCount, videos, createdAt } =
        await getPlaylistById(playlistId)
    return (
        <Link
            href={`/playlist/${_id}`}
            className={
                "group flex flex-col justify-center items-center drop-shadow-lg"
            }
        >
            <div className="p-2 self-stretch flex justify-end items-end rounded-lg relative h-[180px] w-[320px]">
                <Image
                    className="rounded-lg transition-transform duration-300 ease-out group-hover:scale-105"
                    src={getImageSrc(thumbnail)}
                    alt={title}
                    fill
                />
                <div className="z-10 py-1 px-2 text-xs text-gray-200 rounded-full bg-primary-700 bg-opacity-90">
                    {videos.length} videos
                </div>
            </div>
            <div className="flex flex-col p-2 self-stretch">
                <span className="overflow-hidden text-ellipsis font-bold">
                    {title}
                </span>
                <div className="flex gap-2 text-gray-300 text-sm font-light self-stretch">
                    <span>{viewsCount} views</span>
                    <span>|</span>
                    <span>{formatDate(createdAt)}</span>
                </div>
            </div>
        </Link>
    )
}
