import React from "react"
import PlaylistCard from "@/components/PlaylistCard"
import { TextField } from "@/components/TextField"

export default async function Home() {
    return (
        <main className="w-full h-full p-4 flex gap-9">
            <section className="flex flex-1 flex-col gap-9">
                <header className="bg-primary-900">
                    <TextField className="w-[340px]" label="Search" />
                </header>
                <ul className="flex">
                    <PlaylistCard
                        videosCount={10}
                        title="Playlist Name"
                        views={325}
                        createdAt="3 years ago"
                        imageSrc="/images/video-thumbnail.png"
                    />
                </ul>
            </section>
            <section className="flex flex-col h-full w-full max-w-xs p-6 gap-6 items-center rounded-2xl drop-shadow bg-gray-800">
                <div className="self-stretch flex items-center">
                    <span className="text-xl">Your Library</span>
                </div>
                <PlaylistCard
                    videosCount={10}
                    title="Playlist Name"
                    views={325}
                    createdAt="3 years ago"
                    imageSrc="/images/video-thumbnail.png"
                />
                <PlaylistCard
                    videosCount={10}
                    title="Playlist Name"
                    views={325}
                    createdAt="3 years ago"
                    imageSrc="/images/video-thumbnail.png"
                />
            </section>
        </main>
    )
}
