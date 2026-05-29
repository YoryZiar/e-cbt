import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

function SulitTidurContent() {
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
                        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">Sulit Tidur</h1>
                        <p className="text-slate-300 font-light leading-relaxed text-lg max-w-3xl mx-auto">Menurut psikologi, beberapa cara mengatasi sulit tidur adalah:  :</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        1
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Membuat rutinitas tidur, Membuat jadwal tidur yang konsisten dan disiplin, serta bangun dan tidur pada waktu yang sama setiap hari.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        2
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Menciptakan lingkungan tidur yang nyaman: Pilih pakaian yang nyaman saat tidur, seperti katun atau sutra.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        3
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Menghindari stimulan sebelum tidur: Hindari penggunaan HP setidaknya 30 menit sebelum tidur.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        4
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Mengelola stres: Sisihkan waktu untuk bersantai dan menenangkan pikiran, misalnya dengan meditasi, latihan pernapasan, mandi, atau mendengarkan musik yang menenangkan.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        5
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Membatasi asupan kafein dan alkohol: Kurangi konsumsi kafein, terutama di sore atau malam hari.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        6
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Mengonsumsi makanan sehat: Konsumsi lebih banyak makanan berserat, seperti sayuran dan buah-buahan, dan kurangi asupan gula.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        7
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Berolahraga: Lakukan aktivitas fisik, seperti berolahraga, di siang hari.
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

export default function SulitTidurPage() {
    return (
        <SulitTidurContent />
    )
}
