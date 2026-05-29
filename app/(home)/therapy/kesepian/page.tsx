import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"

function KesepianContent() {
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
                        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">Kesepian</h1>
                        <p className="text-slate-300 font-light leading-relaxed text-lg max-w-3xl mx-auto">Berikut cara mengatasi kesepian menurut beberapa para ahli:</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
                        <ul className="space-y-6">
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        1
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Mencoba berinteraksi dengan orang sekitar, Menurut Angela Amias, seorang pekerja sosial berlisensi di Iowa City, sebuah penelitian menemukan bahwa interaksi santai dengan orang asing dapat meningkatkan suasana hati orang sepanjang hari. dengan meluangkan waktu untuk terhubung dengan orang lain secara nyata dan bermakna dapat mengatasi kesepian. Koneksi ini tidak selalu harus dengan orang yang sudah Anda kenal dan cintai, tapi juga dengan orang baru.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        2
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Pergi ke luar selama beberapa menit, untuk menghilangkan rasa kesepian.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        3
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Pelajari keterampilan baru, cara lain untuk mengatasi perasaan sendirian adalah dengan menyibukkan pikiran Anda dengan hal-hal baru dan menarik. Menurut Jason Drake, seorang terapis di Katy, Texas, mempelajari keterampilan baru membuat otak tetap fokus pada tugas, alih-alih pikiran mengembara ke perasaan kesepian.
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        4
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Terhubung dengan diri sendiri, dengan melakukan kegiatan  yang anda sukai, seperti berolahraga, melukis, dan sebagainya
                                    </div>
                                </li>
                            <li className="flex items-start">
                                    <div className="min-w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center font-bold mr-5 shrink-0">
                                        5
                                    </div>
                                    <div className="text-slate-300 font-light text-lg pt-1">
                                        Self-talk yang positif adalah kunci ketika mengalami kesepian. Karena otak kita cenderung memiliki bias negatif, itu berarti pikiran kita secara alami melayang ke hal-hal negatif tentang diri kita sendiri atau tentang hidup kita. Salah satu cara untuk membantu mengelola perasaan kesepian adalah dengan melihat perasaan ini secara realistis. Ketika Anda merasa kesepian, mungkin pada saat itu Anda merasa bahwa perasaan ini akan bertahan selamanya. Namun, ingatkan diri Anda bahwa perasaan ini bersifat sementara dan tidak ada apapun, termasuk perasaan kesepian ini, yang bertahan selamanya.
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

export default function KesepianPage() {
    return (
        <KesepianContent />
    )
}
