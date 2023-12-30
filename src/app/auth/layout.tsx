import { PropsWithChildren } from "react"
import Image from "next/image"

export default function AuthLayout({ children }: PropsWithChildren) {
    return (
        <div className="flex w-full h-full flex-column justify-center items-center bg-transparent absolute top-0 left-0">
            <Image
                className="-z-10 rounded-lg"
                src="/images/login-background.png"
                alt="Background"
                fill
            />
            <div className="w-full h-full z-10 bg-primary-950 bg-opacity-70 flex items-center justify-center ">
                {children}
            </div>
        </div>
    )
}
