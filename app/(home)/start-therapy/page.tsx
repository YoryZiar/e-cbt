'use client'

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"
import { useState } from "react"
import { jurnalInitialState } from "@/app/types/validations/jurnal"
import { useCreateJurnal } from "@/app/services/jurnal/mutation"

export default function StartTherapy() {
    const [formData, setFormData] = useState(jurnalInitialState);

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
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>
            
            <div className="container mx-auto px-4 relative z-10 w-full max-w-3xl">
                <div className="text-center mb-10">
                    <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Sesi Jurnal</h2>
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">Mulai Terapi Mandiri</h1>
                    <p className="text-slate-400 font-light">Luangkan waktu untuk mencatat apa yang Anda rasakan dan pikirkan. Ini adalah ruang aman Anda.</p>
                </div>

                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 lg:p-12">
                    <form onSubmit={handleSubmitForm} method="post" className="space-y-8">
                        <label htmlFor="title" className="block">
                            <span className="block text-lg font-medium text-slate-200 mb-3">Apa yang sedang terjadi?</span>
                            <Textarea
                                name="title"
                                id="title"
                                onChange={handleFormChange}
                                value={formData.title}
                                className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 rounded-2xl p-5 h-32 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none text-base" 
                                placeholder="Ceritakan situasi atau kejadian yang Anda alami..."
                            />
                        </label>
                        
                        <label htmlFor="content" className="block">
                            <span className="block text-lg font-medium text-slate-200 mb-3">Apa yang Anda rasakan atau pikirkan tentang hal itu?</span>
                            <Textarea
                                name="content"
                                id="content"
                                onChange={handleFormChange}
                                value={formData.content}
                                className="w-full bg-white/5 border-white/10 text-white placeholder-slate-500 rounded-2xl p-5 h-40 focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none text-base" 
                                placeholder="Jujurlah pada diri sendiri, tuliskan semua emosi dan pikiran Anda..."
                            />
                        </label>
                        
                        <div className="text-center pt-4">
                            <button type="submit" className="w-full sm:w-auto px-12 py-4 bg-secondary text-primary hover:bg-[#c4bdff] text-lg rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(179,170,255,0.3)]">
                                Simpan Jurnal
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}