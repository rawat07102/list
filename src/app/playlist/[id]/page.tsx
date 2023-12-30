import Button from "@/components/Button"
import VideoCard from "@/components/VideoCard"
import Image from "next/image"

type Props = {
    params: {id: string}
}

export default async function PlaylistPage(props: Props) {
    const { params: {id}} = props
    return (
        <main className="flex w-full h-full py-4 gap-16">
            <section className="flex flex-col gap-3 drop-shadow-md rounded-2xl overflow-hidden w-[356px]">
                <div className="flex rounded-2xl relative h-[216px] w-[356px]">
                    <Image className="rounded-2xl" src="/images/video-thumbnail.png" alt="playlist" fill/>
                    <Button className="absolute drop-shadow-md right-4 -bottom-4 py-4">{id}</Button>
                </div>
                <div className="flex flex-col pl-1">
                    <span className="self-stretch font-bold w-full text-xl truncate">
                        Missing Semester IAP 2020
                    </span>
                    <div className="text-gray-300 flex gap-2 text-sm font-light">
                        <span>500 views</span>
                        <span>|</span>
                        <span>2 months ago</span>
                    </div>
                </div>
            </section>
            <section className="flex-1 flex flex-col gap-8">
                <VideoCard 
                    title="Lecture 1: Course Overview + The Shell (2020)" 
                    imageSrc="/images/video-thumbnail.png" 
                    views={500}
                    createdAt="3 months ago"
                />
                <VideoCard 
                    title="Lecture 2: The Shell (2020)" 
                    imageSrc="/images/media.png" 
                    views={200}
                    createdAt="2 months ago"
                />
            </section>
        </main>
    )
}
