export type Playlist = {
    _id: string
    title: string
    creator: string
    videos: string[]
    thumbnail: string
    viewsCount: number
    createdAt: string
    updatedAt: string
}

export type Thumbnail = {
    url: string
    width: number
    height: number
}

export type Video = {
    id: string
    snippet: {
        title: string
        publishedAt: string
        thumbnails: {
            medium: Thumbnail
        }
        categoryId: string
    }
    statistics: {
        viewCount: string
    }
}

export type YTResponse<T> = {
    items: T
}
