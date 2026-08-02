import Link from 'next/link'
import Contact from './contact/page'
import { ArrowRight, ShieldCheck, Heart, Users, Sparkles, BadgeCheck } from 'lucide-react'

export default function Home() {
    return (
        <div className='min-h-screen overflow-hidden' id='Home'>
            {/* Hero Section */}
            <section className='relative flex items-center justify-center pt-40 pb-32 px-4' id='Home'>
                {/* Background decorative gradients */}
                <div className="absolute top-0 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-primary/40 rounded-full mix-blend-screen filter blur-[100px] opacity-70"></div>
                <div className="absolute top-20 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70"></div>

                <div className='container relative z-10 mx-auto max-w-6xl'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className='flex flex-col space-y-6 text-center lg:text-left'>
                            <div className="inline-flex items-center justify-center lg:justify-start space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit mx-auto lg:mx-0 backdrop-blur-sm animate-slide-down">
                                <ShieldCheck className="w-4 h-4 text-secondary" />
                                <span className="text-slate-300 text-xs md:text-sm font-medium tracking-wide">Platform Anti-Bullying Terpercaya</span>
                            </div>

                            <h1 className='font-bold text-5xl lg:text-6xl leading-tight text-white tracking-tight font-sans animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
                                Kamu Tidak Sendiri
                                <span className="block bg-gradient-to-r from-secondary to-[#d3ccff] bg-clip-text text-transparent">
                                    Bersama E-CBT
                                </span>
                            </h1>

                            <p className='text-slate-300 text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up' style={{ animationDelay: '0.4s' }}>
                                Electronic Cognitive Behavioral Therapy (E-CBT) hadir sebagai ruang aman bagi siswa-siswi. Di sini, kami menemani setiap langkahmu untuk bercerita, memahami perasaan, dan tumbuh dengan lebih tenang.
                            </p>

                            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                <Link href="/start" className='group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-primary bg-secondary rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(179,170,255,0.4)] w-full sm:w-auto'>
                                    <span className="absolute inset-0 rounded-full border-2 border-secondary/40 animate-pulse-ring"></span>
                                    Mulai Perjalananmu
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="#About" className='px-8 py-4 font-medium text-slate-300 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full hover:text-white hover:border-secondary/40 transition-all duration-300 w-full sm:w-auto'>
                                    Pelajari Lebih Lanjut
                                </Link>
                            </div>

                            <div className="pt-4 hidden md:flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                                <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary" />100% Rahasia</span>
                                <span className="text-secondary/40">•</span>
                                <span className="inline-flex items-center gap-2"><Sparkles className="w-4 h-4 text-secondary" />Bebas Biaya</span>
                                <span className="text-secondary/40">•</span>
                                <span className="inline-flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-secondary" />Didukung Ahli</span>
                            </div>
                        </div>

                        <div className="relative hidden md:block w-full h-[350px] lg:h-[500px] mt-10 lg:mt-0">
                            <div className="hero-orb animate-float-slow w-96 h-96 bg-secondary/25 -top-10 -left-10"></div>
                            <div className="hero-orb animate-float-slower w-80 h-80 bg-primary/40 top-1/3 right-0"></div>
                            <div className="hero-orb animate-float-slowest w-72 h-72 bg-[#d3ccff]/15 bottom-0 left-1/4"></div>
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/10"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className='py-24 bg-white/5 backdrop-blur-sm border-y border-white/10' id='About'>
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Tentang Kami</h2>
                        <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">Menciptakan Ruang Aman & Nyaman</h3>
                        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-[#13072e]/50 p-8 rounded-3xl border border-white/5 hover:border-secondary/40 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="bg-primary/40 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/60 transition-colors">
                                <Heart className="w-8 h-8 text-secondary" />
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-4">Dukungan Empati</h4>
                            <p className="text-slate-400 leading-relaxed font-light">Memberikan solusi yang menenangkan pikiran dan membantu para korban bullying untuk bangkit kembali dengan percaya diri.</p>
                        </div>
                        <div className="bg-[#13072e]/50 p-8 rounded-3xl border border-white/5 hover:border-secondary/40 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="bg-primary/40 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/60 transition-colors">
                                <ShieldCheck className="w-8 h-8 text-secondary" />
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-4">Ruang Terpercaya</h4>
                            <p className="text-slate-400 leading-relaxed font-light">Platform pelaporan yang sangat aman, positif, dan terjamin kerahasiaannya bagi siapa pun yang merasakan dampak bullying.</p>
                        </div>
                        <div className="bg-[#13072e]/50 p-8 rounded-3xl border border-white/5 hover:border-secondary/40 hover:-translate-y-2 transition-all duration-300 group">
                            <div className="bg-primary/40 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/60 transition-colors">
                                <Users className="w-8 h-8 text-secondary" />
                            </div>
                            <h4 className="text-xl font-semibold text-white mb-4">Solusi Bersama</h4>
                            <p className="text-slate-400 leading-relaxed font-light">Misi bersama untuk memutus siklus kekerasan. Bersama, kita wujudkan lingkungan pendidikan yang suportif.</p>
                        </div>
                    </div>

                    <div className="text-center max-w-3xl mx-auto bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-8 rounded-3xl border border-white/5">
                        <p className="text-slate-300 text-lg lg:text-2xl font-light italic leading-relaxed">
                            "Mari bergerak bersama, sebab perubahan nyata dimulai dari kepedulian kita hari ini."
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className='py-24 relative' id='Contact'>
                <div className="absolute inset-0 bg-primary/10 filter blur-[100px] opacity-50 pointer-events-none"></div>
                <div className="container mx-auto px-4 max-w-5xl relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Hubungi Kami</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold text-white">Jangan Ragu Untuk Bercerita</h3>
                    </div>
                    <div className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-6 md:p-12 shadow-2xl">
                        <Contact />
                    </div>
                </div>
            </section>
        </div>
    )
}