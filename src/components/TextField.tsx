import { cn } from "@/lib/utils/cn"
import React, { InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    name?: string
}

export function TextField(props: Props) {
    const { label, name, className, ...rest } = props
    const id = name ? name + "-input" : label + "-input"
    return (
        <div
            className={cn(
                "w-full min-w-[200px] h-10 flex",
                "relative bg-inherit rounded-full",
                className
            )}
        >
            <input
                required
                name={name}
                className="bg-inherit outline outline-0 py-2.5 px-3 rounded-full border border-primary-500 w-full h-full text-label-md peer focus:border-accent-300 valid:border-accent-300"
                id={id}
                {...rest}
            />
            <label
                className="absolute left-3 top-2 peer-valid:-translate-y-5  peer-focus:-translate-y-5 px-[2px] bg-inherit transition-all duration-300 pointer-events-none"
                htmlFor={id}
            >
                {label}
            </label>
        </div>
    )
}
