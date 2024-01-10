import axios from "axios"

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL

const fetcher = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

export default fetcher
