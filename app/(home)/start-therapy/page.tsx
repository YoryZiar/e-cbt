import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createJurnal } from "@/app/actions/user/actions"

export default function StartTherapy() {
    return (
        <div className="container my-10 bg-primary rounded-lg mx-auto py-3 lg:w-1/2">
            <form action={createJurnal} method="post" className="mx-auto">
                <label htmlFor="title" className="block text-center text-lg py-3">
                    <span className="Block text-slate-200">Apa Yang Terjadi?</span>
                    <Textarea name="title" id="title" className="max-w-xs lg:max-w-xl mx-auto my-5 bg-slate-200 p-3 h-32" placeholder="Tuliskan apa yang terjadi..."/>
                </label>
                <label htmlFor="title" className="block text-center text-lg py-3">
                    <span className="Block text-slate-200">Apa yang Anda pikirkan/rasakan/ingin lakukan?</span>
                    <Textarea name="content" id="title" className="max-w-xs lg:max-w-xl mx-auto my-5 bg-slate-200 p-3 h-32" placeholder="Tuliskan apa yang terjadi..."/>
                </label>
                <div className="block text-center py-3">
                <Button className="bg-secondary text-lg hover:bg-violet-600 hover:text-slate-200">Kirim</Button>
                </div>
            </form>
        </div>
    )
}