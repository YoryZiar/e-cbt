import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

function CemasContent() {
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
                        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">Cemas</h1>
                        <p className="text-slate-300 font-light leading-relaxed text-lg max-w-3xl mx-auto">Apabila saat mengalami bullying kamu kerap mengalami cemas atau panik berlebihan, cobalah mengelola dan mengatasi Kecemasan dengan langkah-langkah berikut :</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        1
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Mulailah dengan menciptakan “Growth Mindset” atau pikiran yang terbuka
                    Sadari bagaimana kecemasan mempengaruhi ke tubuh dan kemudian coba lakukan teknik bernafas yang menenangkan. Seringkali ketika cemas kita merasa tangan berkeringat. Ini sebenarnya adalah respon tubuh terhadap stres. Kita tidak perlu memaksakan perasaan cemas ini hilang, namun tidak juga harus fokus dengan kondisi ini. Cobalah untuk bernafas pelan beberapa kali berulang. Tarik nafas dan buang nafas secara perlahan, dengan menghitung satu sampai lima sambil menarik dan mengeluarkan nafas. Hal ini untuk membantu kita agar lebih tenang sehingga dapat berpikir secara lebih baik.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        2
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Berbicara dengan diri untuk mengatasinya
                    Cobalah berkata pada diri hal yang bisa membuat kita memiliki keberanian untuk menghadapi hal yang mencemaskan tersebut.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        3
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Hadapi situasinya
                    Menghadapi situasi yang mencemaskan membuat kita belajar menghadapi kecemasanya dan membuktikan bahwa kecemasan yang kita rasakan mungkin terjadi mungkin tidak.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        4
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Konsultasi ke Psikolog atau Psikiater
                    Jika anda sudah mencoba melakukan hal tersebut dan rasa cemas tetap masih ada dan mengganggu kehidupan segera berkonsultasi kepada psikolog atau psikiater
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

export default function CemasPage() {
    return (
        <CemasContent />
    )
}
