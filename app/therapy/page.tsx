'use client'

import Link from "next/link"

function TherapyContent() {
    return (
        <section className="max-w-md mx-auto p-3 md:p-1 md:max-w-full">
            <h3 className="text-center text-slate-200 text-lg">Pilih masalah yang kamu alami dan temukan solusinya</h3>
            <div className="grid md:grid-cols-3">
                <div className="mt-5 grid gap-3">
                    <Link href="/therapy/" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto hover:bg-primary hover:text-slate-200">
                        Sedih
                    </Link>
                    <Link href="/therapy/" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto hover:bg-primary hover:text-slate-200">
                        Panik
                    </Link>
                    <Link href="/therapy/kesepian" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto hover:bg-primary hover:text-slate-200">
                        Kesepian
                    </Link>
                    <Link href="/therapy/takut" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto hover:bg-primary hover:text-slate-200">
                        Takut
                    </Link>
                </div>
                <div className="mt-5 grid gap-3">
                    <Link href="/therapy/depresi" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto md:w-full hover:bg-primary hover:text-slate-200">
                        Depresi
                    </Link>
                    <Link href="/therapy/trauma" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto md:w-full hover:bg-primary hover:text-slate-200">
                        Trauma
                    </Link>
                    <Link href="/therapy/kurang-percaya-diri" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto md:w-full hover:bg-primary hover:text-slate-200">
                        Kuran Percaya Diri
                    </Link>
                    <Link href="/therapy/stress" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto md:w-full hover:bg-primary hover:text-slate-200">
                        Stres
                    </Link>
                </div>
                <div className="mt-5 grid gap-3">
                    <Link href="/therapy/sulit-tidur" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto hover:bg-primary hover:text-slate-200">
                        Sulit Tidur
                    </Link>
                    <Link href="/therapy/malas" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto hover:bg-primary hover:text-slate-200">
                        Malas
                    </Link>
                    <Link href="/therapy/emosi" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto hover:bg-primary hover:text-slate-200">
                        Emosi
                    </Link>
                    <Link href="/therapy/" className="py-2 bg-[#b3aaff] text-xl font-semibold px-5 rounded-lg block text-center w-3/4 mx-auto hover:bg-primary hover:text-slate-200">
                        Benci
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default function Therapy() {
    return (
        <TherapyContent />
    )
}