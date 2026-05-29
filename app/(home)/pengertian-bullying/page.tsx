import Link from "next/link"
import { ArrowLeft, BookOpen, ShieldCheck } from "lucide-react"

export default function PengertianBullying() {
    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <div className="space-y-8">
                    
                    {/* Section 1 */}
                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mr-6">
                                <BookOpen className="w-7 h-7 text-secondary" />
                            </div>
                            <h1 className="text-3xl font-bold text-white">Apa Itu Bullying?</h1>
                        </div>
                        <div className="p-6 bg-[#13072e]/50 border border-white/5 rounded-2xl">
                            <p className="text-slate-300 font-light leading-relaxed text-lg">
                                Bullying adalah perilaku agresif yang melibatkan ketidakseimbangan kekuatan dan dilakukan berulang-ulang dengan tujuan menyakiti atau merugikan orang lain. Apalagi terjadi bullying di sekolah, tentu ini adalah tindakan yang tidak ingin terjadi.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                            <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center mr-6">
                                <ShieldCheck className="w-7 h-7 text-secondary" />
                            </div>
                            <h1 className="text-3xl font-bold text-white">Pasal Yang Mengatur</h1>
                        </div>
                        <div className="p-6 bg-[#13072e]/50 border border-white/5 rounded-2xl text-slate-300 font-light leading-relaxed text-lg">
                            <p className="mb-4">
                                Pasal yang mengatur tentang bullying di sekolah adalah <strong className="text-secondary font-medium">Pasal 76C UU 35/2014</strong>, yang berbunyi:
                            </p>
                            <div className="pl-4 border-l-2 border-secondary/50 italic text-slate-400">
                                "Setiap orang dilarang menempatkan, membiarkan, melakukan, menyuruh melakukan, atau turut serta melakukan kekerasan terhadap anak."
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/bullying" className="inline-flex items-center justify-center px-10 py-4 font-bold text-slate-300 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-1 group">
                            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Kembali
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}