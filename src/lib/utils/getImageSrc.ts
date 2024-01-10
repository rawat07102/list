import ThumbnailSrc from "@/../public/images/video-thumbnail.png"
export function getImageSrc(imageId: string) {
    if (!imageId) {
        return ThumbnailSrc
    }
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/image/${imageId}`
}