'use client'

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useState } from "react"
import { jurnalInitialState } from "@/app/types/validations/jurnal"
import { useCreateJurnal } from "@/app/services/jurnal/mutation"

export default function StartTherapy() {
    const { data: session } = useSession();
    const [formData, setFormData] = useState(jurnalInitialState);


    // if (!session) {
    //     return redirect("/login")
    // }

    // create jurnal
    // const [errors, setErrors] = useState({});
    const jurnalMutation = useCreateJurnal();

    const handleFormChange = (e: any) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmitForm = async (e: any) => {
        e.preventDefault();

        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (value !== null) {
                data.append(key, value);
            }
        });        

        (await jurnalMutation).mutateAsync(data).then((res) => {
            setFormData(jurnalInitialState)
        })
    }

    return (
        <div className="container my-10 bg-primary rounded-lg mx-auto py-3 lg:w-1/2">
            <form onSubmit={handleSubmitForm} method="post" className="mx-auto">
                <label htmlFor="title" className="block text-center text-lg py-3">
                    <span className="Block text-slate-200">Apa Yang Terjadi?</span>
                    <Textarea
                        name="title"
                        id="title"
                        onChange={handleFormChange}
                        value={formData.title}
                        className="max-w-xs lg:max-w-xl mx-auto my-5 bg-slate-200 p-3 h-32" placeholder="Tuliskan apa yang terjadi..."
                    />
                </label>
                <label htmlFor="title" className="block text-center text-lg py-3">
                    <span className="Block text-slate-200">Apa yang Anda pikirkan/rasakan/ingin lakukan?</span>
                    <Textarea
                        name="content"
                        id="title"
                        onChange={handleFormChange}
                        value={formData.content}
                        className="max-w-xs lg:max-w-xl mx-auto my-5 bg-slate-200 p-3 h-32" placeholder="Tuliskan apa yang terjadi..."
                    />
                </label>
                <div className="block text-center py-3">
                    <Button className="bg-secondary text-lg hover:bg-violet-600 hover:text-slate-200">Kirim</Button>
                </div>
            </form>
        </div>
    )
}