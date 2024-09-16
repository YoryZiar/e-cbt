import {
    Card,
    CardContent
} from "@/components/ui/card"
import Link from "next/link"

export default function Start() {
    return (
        <div className="container my-10 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:gap-0 lg:gap-0">
            <Link href="/">
            <Card className="max-w-xs mx-auto bg-secondary border-0 hover:bg-primary hover:text-slate-200 hover:ring hover:ring-secondary scale-95 hover:scale-100 transition lg:max-w-xl">
                    <h1 className="text-center text-xl p-16 font-bold">Mulai Terapi</h1>
            </Card>
            </Link>
            <Link href="/information">
            <Card className="max-w-xs mx-auto bg-secondary border-0 hover:bg-primary hover:text-slate-200 hover:ring hover:ring-secondary scale-95 hover:scale-100 transition lg:max-w-xl">
                    <h1 className="text-center text-xl p-16 font-bold">Informasi</h1>
            </Card>
            </Link>
        </div>
    )
}