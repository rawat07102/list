import VideoCardLoader from "@/components/loaders/VideoCardLoader"
import CardLoader from "@/components/loaders/CardLoader"

export default async function LoadingPlaylistPage() {
    return (
        <main className="w-full h-full flex gap-4">
            <section className="flex flex-col gap-3 drop-shadow-md rounded-lg overflow-hidden bg-gradient-to-b from-primary-800 to-transparent p-2">
                <CardLoader />
            </section>
            <section className="flex-1 flex flex-col gap-8 mt-4">
                <VideoCardLoader />
                <VideoCardLoader />
                <VideoCardLoader />
                <VideoCardLoader />
            </section>
        </main>
    )
}
