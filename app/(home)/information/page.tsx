import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Information() {
    return (
        <div className="container mx-auto my-10 px-4">
            <h1 className="text-center text-slate-200 text-xl">Apa Itu CBT?</h1>
            <p className="my-5 text-slate-200 text-center">CBT merupakan terapi kognitif yang bertujuan untuk mengubah cara berpikir individu yang keliru dan menjadi suatu hal yang mengkhawatirkan. Sebagai contoh, pemikiran yang tidak tepat tersebut seperti berfikir bahwa seseorang tidak dihargai oleh kelompok tertentu sehingga membuat individu tersebut menjauhi kelompok yang belum tentu benar-benar tidak menghargainya.</p>
            <div className="text-center my-5">
            <Link href="/bullying">
            <Button className="bg-secondary hover:bg-violet-600 hover:text-slate-200 text-2xl">Next</Button>
            </Link>
            </div>
        </div>
    )
}