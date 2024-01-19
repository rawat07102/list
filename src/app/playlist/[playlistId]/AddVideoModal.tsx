"use client"
import Button from "@/components/Button"
import { TextField } from "@/components/TextField"
import { addVideoToPlaylist } from "@/lib/actions"
import React from "react"
import { MdAdd as AddIcon } from "react-icons/md"

type Props = {
    playlistId: string
}

export default function AddVideoModal({ playlistId }: Props) {
    const [open, setOpen] = React.useState(false)
    const [videoId, setVideoId] = React.useState("")

    async function addVideo() {
        await addVideoToPlaylist(playlistId, videoId)
    }

    return (
        <>
            <Button
                onClick={() => setOpen((o) => !o)}
                className="p-2 absolute top-1 right-1/4 z-10"
                icon
            >
                <AddIcon />
            </Button>
            {open && (
                <div className="left-0 top-0 absolute h-full w-full flex items-center justify-center z-10">
                    <div
                        onClick={() => setOpen((o) => !o)}
                        className="absolute w-full h-full bg-primary-950 opacity-70"
                    ></div>
                    <div className="flex gap-4 rounded-md items-center bg-primary-800 p-6 z-20">
                        <TextField
                            value={videoId}
                            onChange={(e) => setVideoId(e.target.value)}
                            className="min-w-80"
                            label="Video Id"
                        />
                        <Button icon onClick={addVideo}>
                            <AddIcon />
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}
