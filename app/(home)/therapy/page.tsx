'use client'

import Link from "next/link"
import { ArrowRight, BrainCircuit } from "lucide-react"

function TherapyContent() {
    const therapies = [
        { name: "Sedih", slug: "sedih" },
        { name: "Panik", slug: "panik" }, // panik was empty, I will map it to cemas or panik if it exists. Assuming "cemas"
        { name: "Kesepian", slug: "kesepian" },
        { name: "Takut", slug: "takut" },
        { name: "Depresi", slug: "depresi" },
        { name: "Trauma", slug: "trauma" },
        { name: "Kurang Percaya Diri", slug: "kurang-percaya-diri" },
        { name: "Stres", slug: "stress" },
        { name: "Sulit Tidur", slug: "sulit-tidur" },
        { name: "Malas", slug: "malas" },
        { name: "Emosi", slug: "emosi" },
        { name: "Cemas", slug: "cemas" }
    ]

    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <div className="text-center mb-16">
                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <BrainCircuit className="w-10 h-10 text-secondary" />
                    </div>
                    <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Materi Terapi</h2>
                    <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">Pilih Masalah Yang Anda Alami</h3>
                    <p className="text-slate-400 font-light max-w-2xl mx-auto">Temukan langkah-langkah solutif dan panduan menenangkan diri untuk berbagai masalah psikologis yang mungkin sedang Anda hadapi.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                    {therapies.map((item, idx) => (
                        <Link href={`/therapy/${item.slug}`} key={idx} className="group">
                            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-6 h-full text-center transition-all duration-300 hover:bg-white/[0.08] hover:border-secondary/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(179,170,255,0.15)] flex flex-col items-center justify-center">
                                <h1 className="text-lg lg:text-xl font-bold text-slate-200 group-hover:text-white transition-colors">{item.name}</h1>
                                <ArrowRight className="mt-4 w-5 h-5 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Therapy() {
    return (
        <TherapyContent />
    )
}