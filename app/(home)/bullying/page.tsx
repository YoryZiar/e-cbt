import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Bullying() {
    return (
        <div className="container my-10 mx-auto">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2 md:gap-0 lg:gap-0">
            <Card className="max-w-xs mx-auto bg-secondary border-0 hover:bg-primary hover:text-slate-200 hover:ring hover:ring-secondary scale-95 hover:scale-100 transition lg:max-w-5xl lg:m-0">
                <h1 className="text-center text-xl p-16 font-bold">Pengertian Bullying</h1>
            </Card>
            <Card className="max-w-xs mx-auto bg-secondary border-0 hover:bg-primary hover:text-slate-200 hover:ring hover:ring-secondary scale-95 hover:scale-100 transition lg:max-w-5xl lg:m-0">
                <h1 className="text-center text-xl p-16 font-bold">Pasal Yang Melindungi</h1>
            </Card>
            </div>
            <div className="text-center my-5">
            <Link href="/">
                <Button className="bg-secondary hover:bg-violet-600 hover:text-slate-200 text-2xl">Next</Button>
            </Link>
            </div>
        </div>
    )
}