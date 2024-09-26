import {
    Card,
    CardContent
} from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PengertianBullying() {
    return (
        <div className="container mx-auto lg:w-3/5">
            <div className="bg-primary rounded-lg py-3 mb-5">
                <h1 className="text-center text-slate-200 text-lg">Apa Itu Bullying?</h1>
                <Card className="bg-secondary rounded-lg border-0 my-3 max-w-xs mx-auto lg:max-w-2xl">
                    <CardContent className="text-center text-primary font-semibold py-3 text-sm">
                        <p>Bullying adalah perilaku agresif yang melibatkan ketidakseimbangan kekuatan dan dilakukan berulang-ulang dengan tujuan menyakiti atau merugikan orang lain. Apalagi terjadi bullying di sekolah, tentu ini adalah tindakan yang tidak ingin terjadi.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="bg-primary rounded-lg py-3">
                <h1 className="text-center text-slate-200 text-lg">Pasal Yang Mengatur</h1>
                <Card className="bg-secondary rounded-lg border-0 my-3 max-w-xs mx-auto lg:max-w-2xl">
                    <CardContent className="text-center text-primary font-semibold py-3 text-sm">
                        <p>Pasal yang mengatur tentang bullying di sekolah adalah Pasal 76C UU 35/2014, yang berbunyi: <br /> 1. Setiap orang dilarang menempatkan, membiarkan, melakukan, menyuruh melakukan, atau turut serta melakukan kekerasan terhadap anak.
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="text-center my-5">
                <Link href="/bullying" >
                    <Button className="bg-secondary hover:bg-violet-600 hover:text-slate-200 text-2xl">Back</Button>
                </Link>
            </div>
        </div>
    )
}