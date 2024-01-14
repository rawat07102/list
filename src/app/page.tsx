import React from "react"
import PlaylistCard from "@/components/PlaylistCard"
import { TextField } from "@/components/TextField"
import { NewPlaylistButton } from "@/components/NewPlaylistButton"
import { getUsersPlaylists } from "@/lib/actions"
import CardLoader from "@/components/loaders/CardLoader"
import ButtonLoader from "@/components/loaders/ButtonLoader"

export default async function HomePage() {
    const userLibrary = await getUsersPlaylists()

    return (
        <main className="w-full h-full flex gap-4">
            <section className="flex flex-1 flex-col gap-4">
                <header className="bg-transparent">
                    <TextField
                        hideLabelOnFocus
                        className="w-[320px]"
                        label="Search"
                    />
                </header>
                {/* <ul className="flex">
                /     <PlaylistCard playlist={playlists[0]} />
                 </ul>*/}
            </section>
            <section className="flex flex-col h-full p-4 gap-4 items-center rounded-2xl drop-shadow bg-neutral-900">
                <div className="self-stretch flex items-center justify-between">
                    <span className="text-xl">Your Library</span>
                    <NewPlaylistButton />
                </div>
                {userLibrary.map((playlistId) => (
                    <PlaylistCard playlistId={playlistId} key={playlistId} />
                ))}
            </section>
        </main>
    )
}
