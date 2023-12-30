"use server"
import fetcher from "@/lib/utils/fetcher"
import { cookies } from "next/headers"

type loginRes = {
    accessToken: string
}

export async function loginFormAction(formData: FormData) {
    const userCreds = {
        username: formData.get("username"),
        password: formData.get("password"),
    }
    const res = await fetcher.post<loginRes>("auth/login", userCreds, {
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    })
    const token = res.data.accessToken
    cookies().set("accessToken", token, {
        httpOnly: true,
        secure: true,
        sameSite: true,
    })
}
