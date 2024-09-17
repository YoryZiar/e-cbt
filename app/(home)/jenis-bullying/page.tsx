import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function JenisBullying() {
    return (
        <div className="container my-10 mx-auto">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 md:gap-0 lg:gap-0">
                <Link href="/">
                    <Card className="max-w-xs mx-auto bg-secondary border-0 hover:bg-primary hover:text-slate-200 hover:ring hover:ring-secondary scale-95 hover:scale-100 transition lg:max-w-5xl lg:m-0">
                        <h1 className="text-center text-xl p-16 font-bold">Fisik</h1>
                    </Card>
                </Link>
                <Link href="/">
                    <Card className="max-w-xs mx-auto bg-secondary border-0 hover:bg-primary hover:text-slate-200 hover:ring hover:ring-secondary scale-95 hover:scale-100 transition lg:max-w-5xl lg:m-0">
                        <h1 className="text-center text-xl p-16 font-bold">Verbal</h1>
                    </Card>
                </Link>
                <Link href="/">
                    <Card className="max-w-xs mx-auto bg-secondary border-0 hover:bg-primary hover:text-slate-200 hover:ring hover:ring-secondary scale-95 hover:scale-100 transition lg:max-w-5xl lg:m-0">
                        <h1 className="text-center text-xl p-16 font-bold">Relasional</h1>
                    </Card>
                </Link>
                <Link href="/">
                    <Card className="max-w-xs mx-auto bg-secondary border-0 hover:bg-primary hover:text-slate-200 hover:ring hover:ring-secondary scale-95 hover:scale-100 transition lg:max-w-5xl lg:m-0">
                        <h1 className="text-center text-xl p-16 font-bold">Cyber Bullying</h1>
                    </Card>
                </Link>
            </div>
            <div className="text-center my-5">
                <Link href="/" className="mr-3">
                    <Button className="bg-secondary hover:bg-violet-600 hover:text-slate-200 text-2xl">Back</Button>
                </Link>
                <Link href="/">
                    <Button className="bg-secondary hover:bg-violet-600 hover:text-slate-200 text-2xl">Next</Button>
                </Link>
            </div>
        </div>
    )
}