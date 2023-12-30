import React from "react"
import Image from "next/image"

type Props = {
    title: string
    views: number
    createdAt: string
    imageSrc: string
}

export default function VideoCard(props: Props) {
    const {title, imageSrc, views, createdAt} = props
    return (
        <div className="flex items-start gap-4 rounded-2xl drop-shadow-md">
            <div className="relative w-[220px] h-[150px]">
                <Image className="drop-shadow-md rounded-2xl" src={imageSrc} alt={title} fill/>
            </div>
            <div className="flex-1 flex gap-4 flex-col py-2">
                <span className="font-bold">{title}</span>
                <span className="text-gray-300 text-sm">{views} views | {createdAt}</span>
            </div>
        </div>
    )
}
