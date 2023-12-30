import { cn } from "@/lib/utils/cn"
import Image from "next/image"
import { HTMLAttributes } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
    title: string
    imageSrc: string
    views: number
    videosCount: number
    createdAt: string
}

export default function PlaylistCard(props: Props) {
    const {
        imageSrc,
        title,
        views,
        videosCount,
        createdAt,
        className,
        ...rest
    } = props
    return (
        <div
            className={cn(
                "flex flex-col justify-center items-center drop-shadow-lg"
            )}
            {...rest}
        >
            <div className="p-2 self-stretch flex justify-end items-end rounded-lg relative h-[144px] w-[256px]">
                <Image className="rounded-lg" src={imageSrc} alt={title} fill />
                <div className="z-10 py-1 px-2 text-xs text-gray-200 rounded-full bg-primary-700 bg-opacity-90">
                    {videosCount} videos
                </div>
            </div>
            <div className="flex flex-col p-2 self-stretch">
                <span className="overflow-hidden text-ellipsis font-bold">
                    {title}
                </span>
                <div className="flex gap-2 text-gray-300 text-sm font-light self-stretch">
                    <span>{views} views</span>
                    <span>|</span>
                    <span>{createdAt}</span>
                </div>
            </div>
        </div>
    )
}
