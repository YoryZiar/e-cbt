import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"



export default async function Page() {

    return (
        <div className="container mx-auto">

            <Card className="bg-primary border-0 my-5">
                <CardHeader className="text-center text-slate-200 text-lg">Materi</CardHeader>
                <CardContent>
                    <form action="" className="bg-primary max-w-xs md:max-w-3xl mx-auto rounded-lg lg:p-10 lg:max-w-5xl">
                        <label htmlFor="judul" className="block mx-2">
                            <span className="block font-normal text-start text-slate-200 mb-1">Judul</span>
                            <input type="text" name="judul" id="judul" className="w-full rounded-md p-2" />
                        </label>
                        <label htmlFor="content" className="block mx-2 my-5">
                            <span className="block font-normal text-start text-slate-200 mb-1">Pesan</span>
                            <textarea name="content" id="content" className="w-full rounded-md h-28 md:h-48 p-2"></textarea>
                        </label>
                        <button className="py-2 px-4 bg-secondary text-lg rounded-md mx-2 font-semibold text-primary">Simpan</button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}