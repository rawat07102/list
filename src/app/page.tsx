import React from "react"
import PlaylistCard from "@/components/PlaylistCard"
import { TextField } from "@/components/TextField"
import { NewPlaylistButton } from "@/components/NewPlaylistButton"
import fetcher from "@/lib/utils/fetcher"
import { cookies } from "next/headers"
import { Playlist } from "@/types"

const getUsersPlaylists = async (): Promise<Playlist[]> => {
    const token = cookies().get("accessToken")?.value
    const res = await fetcher.get<Playlist[]>("user/playlists", {
        headers: {
            Authorization: "Bearer: " + token,
        },
    })
    return res.data
}

export default async function HomePage() {
    const userLibrary = await getUsersPlaylists()

    return (
        <main className="w-full h-full p-4 flex gap-9">
            <section className="flex flex-1 flex-col gap-9">
                <header className="bg-transparent">
                    <TextField className="w-[340px]" label="Search" />
                </header>
                {/* <ul className="flex">
                /     <PlaylistCard playlist={playlists[0]} />
                 </ul>*/}
            </section>
            <section className="flex flex-col h-full w-full max-w-xs p-6 gap-6 items-center rounded-2xl drop-shadow bg-neutral-900">
                <div className="self-stretch flex items-center justify-between">
                    <span className="text-xl">Your Library</span>
                    <NewPlaylistButton />
                </div>
                {userLibrary.map((p) => (
                    <PlaylistCard playlist={p} />
                ))}
            </section>
        </main>
    )
}
