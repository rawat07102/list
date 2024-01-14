import { cn } from "@/lib/utils/cn"

type Props = {
    icon?: true
}

export default function ButtonLoader({ icon }: Props) {
    return (
        <div
            className={cn(
                "animate-pulse bg-accent-300 drop-shadow-lg h-12 rounded-full",
                icon ? "w-12" : "w-32"
            )}
        ></div>
    )
}
