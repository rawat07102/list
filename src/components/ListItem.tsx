import Image from "next/image"
import cn from "classnames"

interface Props {
    title: string
    subtitle: string
    imageSrc: string
    highlight?: true
}

export default function ListItem(props: Props) {
    const { title, subtitle, imageSrc, highlight } = props
    return (
        <li className="flex items-center gap-1 self-stretch rounded-lg">
            <div className="self-stretch rounded-lg">
                <Image
                    className="rounded-lg"
                    src={imageSrc}
                    alt={title}
                    width={64}
                    height={60}
                />
            </div>
            <div
                className={cn(
                    "flex flex-grow px-2 py-1 flex-col justify-center",
                    " items-start gap-2 self-stretch rounded-lg",
                    { "bg-primary-container": highlight }
                )}
            >
                <h2 className="text-on-primary-container text-label-md">
                    {title}
                </h2>
                <p className="text-on-primary-container text-label-sm">
                    {subtitle}
                </p>
            </div>
        </li>
    )
}
