"use client"
import { MdAdd as AddIcon } from "react-icons/md"
import Button from "./Button"
import fetcher from "@/lib/utils/fetcher"
import { useRouter } from "next/navigation"
import useSession from "@/lib/hooks/useSession"

export function NewPlaylistButton() {
    const router = useRouter()
    const token = useSession()

    const createNewPlaylist = async () => {
        const res = await fetcher.post(
            "playlist/create-new",
            {},
            {
                headers: {
                    Authorization: "Bearer: " + token,
                },
            }
        )
        router.push(`/playlist/${res.data._id}`)
    }
    return (
        <Button icon onClick={createNewPlaylist}>
            <AddIcon />
        </Button>
    )
}
