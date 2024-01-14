export function getAppUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}/${path}`
}

export function getApiUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/${path}`
}
