"use client"
import React from "react"
import fetcher from "../utils/fetcher"

export default function useFetchRooms() {
    const [rooms, setRooms] = React.useState()

    React.useEffect(() => {
        fetcher
            .get("/rooms")
            .then((res) => setRooms(res.data))
            .catch((err) => console.error(err))
    })

    return [rooms, setRooms]
}
