"use server"
import fetcher from "@/lib/utils/fetcher"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function loginFormAction(formData: FormData) {
    const res = await fetcher.post<string>("user/login", formData)
    cookies().set("accessToken", res.data, {
        httpOnly: true,
        secure: true,
        sameSite: true,
        maxAge: 60 * 60 * 60 * 24 * 15, // 15 Days
    })
    redirect("/")
}
