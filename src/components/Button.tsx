import { cn } from "@/lib/utils/cn"
import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: true
}

export default function Button(props: ButtonProps) {
    const { children, className, icon = false, ...rest } = props
    return (
        <button
            className={cn(
                icon ? "px-2 py-2 text-2xl" : "px-6 py-2",
                "flex min-w-[40px] items-center justify-center gap-2 rounded-full bg-accent-300 text-accent-950 drop-shadow hover:drop-shadow-2xl hover:bg-accent-200 transition-transform hover:scale-105 duration-300 ease-out active:scale-100",
                className
            )}
            {...rest}
        >
            {children}
        </button>
    )
}
