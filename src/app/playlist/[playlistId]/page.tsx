import Button from "@/components/Button"
import VideoCard from "@/components/VideoCard"
import { formatDate } from "@/lib/utils/formatDate"
import { getImageSrc } from "@/lib/utils/getImageSrc"
import Image from "next/image"
import { MdPlayArrow as PlayIcon } from "react-icons/md"
import AddVideoModal from "./AddVideoModal"
import { getPlaylistById } from "@/lib/actions"

type Props = {
    params: { playlistId: string }
}

export default async function PlaylistPage(props: Props) {
    const {
        params: { playlistId },
    } = props
    const playlist = await getPlaylistById(playlistId)
    return (
        <main className="relative flex w-full h-full gap-4">
            <AddVideoModal playlistId={playlistId} />
            <section className="flex flex-col gap-3 drop-shadow-md rounded-lg overflow-hidden bg-gradient-to-b from-primary-800 to-transparent p-2">
                <div className="flex rounded-lg shadow-md shadow-primary-900 relative h-[180px] w-[320px]">
                    <Image
                        className="rounded-lg"
                        src={getImageSrc(playlist.thumbnail)}
                        alt={playlist.title}
                        fill
                    />
                    <Button
                        icon
                        className="absolute drop-shadow-md right-4 -bottom-4"
                    >
                        <PlayIcon />
                    </Button>
                </div>
                <div className="flex flex-col pl-1">
                    <span className="self-stretch font-bold w-full text-xl truncate">
                        {playlist.title}
                    </span>
                    <div className="text-gray-300 flex gap-2 text-sm font-light">
                        <span>{formatDate(playlist.createdAt)}</span>
                    </div>
                </div>
            </section>
            <section className="flex-1 flex flex-col gap-4 mt-8">
                {playlist.videos.map((videoId) => (
                    <VideoCard
                        playlistId={playlistId}
                        videoId={videoId}
                        key={videoId}
                    />
                ))}
            </section>
        </main>
    )
}
