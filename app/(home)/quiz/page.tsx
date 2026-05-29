import Link from "next/link"
import { ClipboardList, Clock, MapPin, AlertCircle, CheckCircle, ArrowRight } from "lucide-react"

export default function QuizPage() {
    return (
        <div className="min-h-screen py-16 relative overflow-hidden" id="QuizIntro">
            {/* Background effects */}
            <div className="absolute top-0 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>
            <div className="absolute bottom-20 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <section className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
                    
                    {/* Left: Image / Intro Section */}
                    <div className="w-full md:w-5/12 bg-primary/40 relative min-h-[300px] flex flex-col justify-end p-8">
                        <div className="absolute inset-0 bg-hero-image bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#13072e] via-[#13072e]/60 to-transparent"></div>
                        <div className="relative z-10">
                            <h1 className="text-4xl font-bold text-white mb-3">Tes E-CBT</h1>
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                                Tes ini dirancang untuk mengukur tingkat dampak bullying yang Anda alami. Hasilnya akan sangat membantu dalam memetakan keadaan kesehatan mental Anda saat ini.
                            </p>
                            <Link href="/quiz/start" className="group inline-flex items-center justify-center w-full bg-secondary text-primary font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(179,170,255,0.4)]">
                                Mulai Tes Sekarang
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Guidelines Section */}
                    <div className="w-full md:w-7/12 p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
                            Panduan Pengisian <span className="text-secondary">Tes</span>
                        </h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start group">
                                <div className="bg-primary/50 p-3 rounded-lg mr-4 group-hover:bg-primary transition-colors">
                                    <ClipboardList className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Jawab dengan Jujur</h4>
                                    <p className="text-slate-400 text-sm font-light">Tidak ada jawaban benar atau salah. Isilah sesuai dengan kepribadian dan keadaan Anda saat ini.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start group">
                                <div className="bg-primary/50 p-3 rounded-lg mr-4 group-hover:bg-primary transition-colors">
                                    <Clock className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Tidak Dibatasi Waktu</h4>
                                    <p className="text-slate-400 text-sm font-light">Santai saja, tes ini tidak diberi waktu. Anda bisa memikirkannya dengan tenang.</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-primary/50 p-3 rounded-lg mr-4 group-hover:bg-primary transition-colors">
                                    <MapPin className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Cari Tempat Nyaman</h4>
                                    <p className="text-slate-400 text-sm font-light">Disarankan untuk mengisi di tempat yang tenang dan kondusif agar Anda lebih fokus.</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-primary/50 p-3 rounded-lg mr-4 group-hover:bg-primary transition-colors">
                                    <AlertCircle className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Jangan Keluar di Tengah Tes</h4>
                                    <p className="text-slate-400 text-sm font-light">Jika Anda keluar (refresh/close) di tengah tes, seluruh progres dan jawaban Anda akan hilang.</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-primary/50 p-3 rounded-lg mr-4 group-hover:bg-primary transition-colors">
                                    <CheckCircle className="w-5 h-5 text-secondary" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium mb-1">Dapatkan Hasil</h4>
                                    <p className="text-slate-400 text-sm font-light">Hasil tes akan langsung ditampilkan setelah Anda menjawab seluruh pertanyaan dengan lengkap.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <p className="text-secondary font-medium italic">Selamat mengisi, dan terima kasih atas keberanianmu!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}