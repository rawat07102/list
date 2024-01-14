import { TextField } from "@/components/TextField";
import ButtonLoader from "@/components/loaders/ButtonLoader";
import CardLoader from "@/components/loaders/CardLoader";

export default async function LoadingHomePage() {
  return (
    <main className="w-full h-full flex gap-4">
            <section className="flex flex-1 flex-col gap-4">
                <header className="bg-transparent">
                    <TextField
                        hideLabelOnFocus
                        className="w-[320px]"
                        label="Search"
                    />
                </header>
                <ul className="flex">
                    <CardLoader />
                 </ul>
            </section>
            <section className="flex flex-col h-full p-4 gap-4 items-center rounded-2xl drop-shadow bg-neutral-900">
                <div className="self-stretch flex items-center justify-between">
                    <span className="text-xl">Your Library</span>
                    <ButtonLoader icon/>
                </div>
                <CardLoader />
            </section>
        </main>
  )
}