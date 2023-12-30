"use server"
import fetcher from "@/lib/utils/fetcher"

export async function signUpFormAction(formData: FormData) {
    const res = await fetcher.post("auth/signup", formData)
    console.log(res.data)
    return res.data
}
