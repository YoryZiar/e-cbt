import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

function KurangPercayaDiriContent() {
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
                        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">Kurang Percaya Diri</h1>
                        <p className="text-slate-300 font-light leading-relaxed text-lg max-w-3xl mx-auto">Berikut adalah beberapa cara yang dapat dilakukan untuk mengatasi rasa kurang percaya diri :</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        1
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Berhenti Membandingkan Diri dengan Orang lain
                    Sering kali kita terlalu fokus kepada kelebihan atau kemampaun orang lain lalu membandingkannya. Hal tersebut tidak akan ada ujungnya yang membuat kita semakin tidak percaya diri.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        2
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Berusaha untuk Berpikir Positif
                    Pola pikir positif atau growth mindset dapat meningkatkan rasa percaya diri. Pemikiran yang positif dapat memengaruhi bagaimana cara kita bertindak dan merasa nyaman akan diri. Sebaliknya jika diri dipenuhi pikiran negative, maka pasti akan berdampak buruk bagi kita.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        3
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Teman-teman yang Positif
                    Kelilingi diri dengan circle pertemanan yang positif dan saling mendukung dapat menjadikan dirimu lebih baik dan termotivasi, sehingga rasa percaya diri meningkat. Dibandingkan dengan pertemanan yang sering berbicara negatif atau sering menjatuhkan, hal tersebut akan membuat Anda merasa kecil atau insecure.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        4
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Lakukan Hal yang Disukai
                    Isilah waktu kosong dengan hal-hal yang disukai seperti hobi atau dapat mencari aktivitas baru yang kita sukai dan hal tersebut akan menciptakan keterampilan baru dalam diri kita. Dengan terus melakukan hal yang disukai kita dapat merasa bahagia dan mencegah berpikiran negatif.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        5
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Menghargai Diri
                    Terimalah kekurangan dan kelebihan diri serta mengharagainya. Menghargai diri dapat berbentuk seperti mengapresiasi, mempercayai diri, menyukai diri sendiri, dan sebagainya. Tidak ada yang lebih penting dari bagaimana cara kita berpikir dan menghargai diri sendiri.
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

export default function KurangPercayaDiriPage() {
    return (
        <KurangPercayaDiriContent />
    )
}
