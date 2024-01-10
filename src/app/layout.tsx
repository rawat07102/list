import "./globals.css"
import { Roboto_Flex } from "next/font/google"

const robotoFlex = Roboto_Flex({ subsets: ["latin"] })

export const metadata = {
    title: "Play-THIS",
    description: "Share THIS",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body
                className={`${robotoFlex.className} mx-auto px-9 text-primary-50 bg-primary-950 h-screen max-w-screen-2xl`}
            >
                {children}
            </body>
        </html>
    )
}
