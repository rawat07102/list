import Button from "@/components/Button"
import VideoCard from "@/components/VideoCard"
import { formatDate } from "@/lib/formatDate"
import { getPlaylistById } from "@/lib/utils/apiCalls"
import { getImageSrc } from "@/lib/utils/getImageSrc"
import Image from "next/image"
import { MdPlayArrow as PlayIcon } from "react-icons/md"

type Props = {
    params: { id: string }
}

export default async function PlaylistPage(props: Props) {
    const {
        params: { id },
    } = props
    const playlist = await getPlaylistById(id)
    return (
        <main className="flex w-full h-full py-4 gap-16">
            <section className="flex flex-col gap-3 drop-shadow-md rounded-2xl overflow-hidden w-[356px]">
                <div className="flex rounded-2xl relative h-[216px] w-[356px]">
                    <Image
                        className="rounded-2xl"
                        src={getImageSrc(playlist.thumbnail)}
                        alt={playlist.title}
                        fill
                    />
                    <Button className="absolute drop-shadow-md right-4 -bottom-4 py-4">
                        <PlayIcon />
                    </Button>
                </div>
                <div className="flex flex-col pl-1">
                    <span className="self-stretch font-bold w-full text-xl truncate">
                        {playlist.title}
                    </span>
                    <div className="text-gray-300 flex gap-2 text-sm font-light">
                        <span>{playlist.viewsCount} views</span>
                        <span>|</span>
                        <span>{formatDate(playlist.createdAt)}</span>
                    </div>
                </div>
            </section>
            <section className="flex-1 flex flex-col gap-8">
                {playlist.videos.map((videoId) => (
                    <VideoCard
                        videoId={videoId}
                        key={videoId}
                    />
                ))}
            </section>
        </main>
    )
}
