import Link from "next/link"
import { ArrowRight, Scale } from "lucide-react"

export default function Pasal() {
    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-red-500/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 lg:p-14">
                    
                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-8 mx-auto border border-secondary/30">
                        <Scale className="w-10 h-10 text-secondary" />
                    </div>

                    <h1 className="text-center text-3xl lg:text-4xl font-bold text-white mb-8">Sanksi Hukum Bullying</h1>
                    
                    <div className="space-y-6 text-slate-300 font-light leading-relaxed text-lg">
                        <p className="text-center">
                            Tentu terdapat sanksi yang diberlakukan untuk pelaku bullying!
                        </p>
                        
                        <div className="p-8 bg-red-500/10 border border-red-500/20 rounded-2xl text-center">
                            <span className="block text-2xl font-bold text-white mb-2">Pidana Penjara</span>
                            <span className="block text-slate-300">Paling lama 3 tahun 6 bulan</span>
                            <div className="w-12 h-1 bg-white/20 mx-auto my-4 rounded-full"></div>
                            <span className="block text-2xl font-bold text-white mb-2">Atau Denda</span>
                            <span className="block text-slate-300">Paling banyak Rp 72.000.000,-</span>
                        </div>

                        <p className="text-center text-slate-400 text-sm mt-6">
                            Selain itu, bullying juga dapat dijerat dengan pasal-pasal lain, seperti: <br/> 
                            <strong className="text-secondary font-medium">Pasal 351 KUHP, Pasal 27A UU 1/2024, Pasal 281 KUHP</strong>
                        </p>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/jenis-bullying" className="inline-flex items-center justify-center px-10 py-4 font-bold text-primary bg-secondary rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(179,170,255,0.4)] group">
                            Jenis-Jenis Bullying
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}