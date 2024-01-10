"use server"
import fetcher from "@/lib/utils/fetcher"

export async function signUpFormAction(formData: FormData) {
    const res = await fetcher.post("user/signup", formData)
    return res.data
}
