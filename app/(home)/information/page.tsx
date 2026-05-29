import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"

export default function Information() {
    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 lg:p-14">
                    
                    <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                        <BookOpen className="w-8 h-8 text-secondary" />
                    </div>

                    <h1 className="text-center text-3xl lg:text-4xl font-bold text-white mb-8">Apa Itu CBT?</h1>
                    
                    <div className="space-y-6 text-slate-300 font-light leading-relaxed text-lg">
                        <p>
                            <strong className="text-secondary font-medium">CBT (Cognitive Behavioral Therapy)</strong> merupakan terapi kognitif yang bertujuan untuk mengubah cara berpikir individu yang keliru dan menjadi suatu hal yang mengkhawatirkan.
                        </p>
                        <p className="p-6 bg-[#13072e]/50 border border-white/5 rounded-2xl italic text-slate-400">
                            "Sebagai contoh, pemikiran yang tidak tepat tersebut seperti berfikir bahwa seseorang tidak dihargai oleh kelompok tertentu sehingga membuat individu tersebut menjauhi kelompok yang belum tentu benar-benar tidak menghargainya."
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/bullying" className="inline-flex items-center justify-center px-10 py-4 font-bold text-primary bg-secondary rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(179,170,255,0.4)] group">
                            Selanjutnya tentang Bullying
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}