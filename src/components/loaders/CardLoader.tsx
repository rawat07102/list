export default function CardLoader() {
    return (
        <div className="flex gap-2 flex-col justify-center items-center drop-shadow-lg">
          <div className="w-[320px] rounded-lg h-[180px] animate-pulse bg-primary-700 drop-shadow-lg"></div>
          <div className="h-6 w-2/3 rounded-lg self-stretch animate-pulse bg-primary-700 drop-shadow-lg"></div>
          <div className="h-4 w-1/3 rounded-lg self-stretch animate-pulse bg-primary-700 drop-shadow-lg"></div>
        </div>
    )
}
