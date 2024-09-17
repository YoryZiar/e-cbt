import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pasal() {
    return (
        <div className="container mx-auto my-10 px-4 bg-primary rounded-lg py-3">
            {/* <h1 className="text-center text-slate-200 text-xl">Apa Itu CBT?</h1> */}
            <p className="my-5 text-slate-200 text-center">Tentu terdapat sanksi yang diberlakukan untuk pelaku bullying! <br /> Pidana penjara paling lama 3 tahun 6 bulan atau denda paling banyak Rp72 juta. <br /> Selain itu, bullying juga dapat dijerat dengan pasal-pasal lain, seperti: <br /> Pasal 351 KUHP, Pasal 27A UU 1/2024, Pasal 281 KUHP</p>
            <div className="text-center my-5">
                <Link href="/jenis-bullying">
                    <Button className="bg-secondary hover:bg-violet-600 hover:text-slate-200 text-2xl">Next</Button>
                </Link>
            </div>
        </div>
    )
}