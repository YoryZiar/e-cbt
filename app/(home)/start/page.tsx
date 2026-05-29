import Link from "next/link"
import { ArrowRight, HeartPulse, Info } from "lucide-react"

export default function Start() {
    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center" id="StartMenu">
            {/* Background effects */}
            <div className="absolute top-0 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>
            <div className="absolute bottom-20 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Langkah Selanjutnya</h2>
                    <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">Pilih Menu Layanan</h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Link href="/start-therapy" className="group">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 h-full text-center transition-all duration-300 hover:bg-white/[0.08] hover:border-secondary/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(179,170,255,0.15)] flex flex-col items-center justify-center">
                            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/40 transition-colors">
                                <HeartPulse className="w-10 h-10 text-secondary" />
                            </div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">Mulai Terapi</h1>
                            <p className="text-slate-400 font-light mb-8">Dapatkan panduan dan dukungan profesional untuk membantu mengatasi masalah yang sedang Anda hadapi.</p>
                            <div className="inline-flex items-center text-secondary font-medium group-hover:text-white transition-colors">
                                Pilih Layanan <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>

                    <Link href="/information" className="group">
                        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-10 h-full text-center transition-all duration-300 hover:bg-white/[0.08] hover:border-secondary/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(179,170,255,0.15)] flex flex-col items-center justify-center">
                            <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/40 transition-colors">
                                <Info className="w-10 h-10 text-secondary" />
                            </div>
                            <h1 className="text-2xl lg:text-3xl font-bold text-white mb-4">Informasi</h1>
                            <p className="text-slate-400 font-light mb-8">Pelajari lebih lanjut tentang bullying, CBT, dan bagaimana cara kami dapat membantu Anda.</p>
                            <div className="inline-flex items-center text-secondary font-medium group-hover:text-white transition-colors">
                                Pilih Layanan <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}