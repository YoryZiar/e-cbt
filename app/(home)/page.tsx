import Link from 'next/link'
import Contact from './contact/page'
import { ArrowRight, ShieldCheck, Heart, Users } from 'lucide-react'

export default function Home() {
    return (
        <div className='min-h-screen overflow-hidden' id='Home'>
            {/* Hero Section */}
            <section className='relative flex items-center justify-center pt-40 pb-32 px-4'>
                {/* Background decorative gradients */}
                <div className="absolute top-0 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-primary/40 rounded-full mix-blend-screen filter blur-[100px] opacity-70"></div>
                <div className="absolute top-20 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70"></div>

                <div className='container relative z-10 mx-auto max-w-6xl'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className='flex flex-col space-y-6 text-center lg:text-left'>
                            <div className="inline-flex items-center justify-center lg:justify-start space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit mx-auto lg:mx-0 backdrop-blur-sm">
                                <ShieldCheck className="w-4 h-4 text-secondary" />
                                <span className="text-slate-300 text-xs md:text-sm font-medium tracking-wide">Platform Anti-Bullying Terpercaya</span>
                            </div>
                            
                            <h1 className='font-bold text-5xl lg:text-7xl leading-tight text-white tracking-tight font-sans'>
                                Selamat Datang di <br />
                                <span className="bg-gradient-to-r from-secondary to-[#d3ccff] bg-clip-text text-transparent">E-CBT</span>
                            </h1>
                            
                            <p className='text-slate-300 text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0'>
                                Electronic Cognitive Behavioral Therapy (E-CBT) hadir sebagai ruang aman bagi siswa-siswi. Kami memberikan panduan penanganan masalah dan wadah terpercaya untuk bercerita.
                            </p>
                            
                            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="/start" className='group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-primary bg-secondary rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(179,170,255,0.4)] w-full sm:w-auto'>
                                    Mulai Sekarang
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="#About" className='px-8 py-4 font-medium text-slate-300 hover:text-white transition-colors duration-300 w-full sm:w-auto'>
                                    Pelajari Lebih Lanjut
                                </Link>
                            </div>
                        </div>
                        
                        <div className="relative w-full h-[350px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group mt-10 lg:mt-0 hidden md:block">
                            <div className='absolute inset-0 bg-hero-image bg-cover bg-center transition-transform duration-700 group-hover:scale-110'></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#13072e] via-transparent to-transparent opacity-90"></div>
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