import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

function TakutContent() {
    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 lg:p-14">
                    
                    <div className="text-center mb-10">
                        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Sparkles className="w-8 h-8 text-secondary" />
                        </div>
                        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">Takut</h1>
                        <p className="text-slate-300 font-light leading-relaxed text-lg max-w-3xl mx-auto">Berikut adalah beberapa cara yang dapat dilakukan untuk mengatasi rasa takut terhadap orang lain:</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        1
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Akui kekurangan diri
                    Refleksikan sikap dan perilaku diri sendiri, dan akui kekurangan atau kesalahan yang ada.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        2
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        . Lakukan self talk
                    Beri kata-kata positif kepada diri sendiri, misalnya bahwa dirimu tetap berharga.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        3
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Kelola stress
                    Lakukan teknik relaksasi, seperti meditasi atau yoga. Anda juga bisa tarik napas dalam dan embuskan perlahan untuk menenangkan diri.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        4
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Hindari situasi yang memicu rasa takut
                    Hindari situasi yang dapat memicu rasa takut dan khawatir.
                                    </div>
                                </li>
                        </ul>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/therapy" className="inline-flex items-center justify-center px-10 py-4 font-bold text-slate-300 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-1 group">
                            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Kembali ke Menu Terapi
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function TakutPage() {
    return (
        <TakutContent />
    )
}
