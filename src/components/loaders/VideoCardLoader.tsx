export default function VideoCardLoader() {
    return (
        <div className="w-full flex items-start gap-4 p-2 pl-4">
            <div className="bg-primary-700 animate-pulse h-[90px] w-[160px] rounded-lg"></div>
            <div className="flex flex-col gap-4 flex-1 py-2">
                <div className="rounded-lg animate-pulse w-1/3 h-5 bg-primary-700"></div>
                <div className="rounded-lg animate-pulse w-16 h-4 bg-primary-700"></div>
            </div>
        </div>
    )
}
