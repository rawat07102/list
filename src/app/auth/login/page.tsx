import { AiOutlineLogin } from "react-icons/ai"
import { loginFormAction } from "./loginFormAction"
import { TextField } from "@/components/TextField"
import Button from "@/components/Button"

export default async function LoginPage() {
    return (
        <form
            action={loginFormAction}
            className="flex flex-col w-[400px] p-4 gap-6 items-center rounded-2xl bg-primary-800 drop-shadow"
        >
            <div className="flex w-full max-w-sm items-center gap-2">
                <AiOutlineLogin fontSize={28} />
                <h1 className="text-headline-md text-on-background">
                    Enter Details to Log In
                </h1>
            </div>
            <TextField label="Username" name="username" />
            <TextField label="Password" name="password" />
            <div className="flex w-full justify-end gap-4">
                <Button>
                    <AiOutlineLogin fontSize={24} />
                    LOGIN
                </Button>
            </div>
        </form>
    )
}
