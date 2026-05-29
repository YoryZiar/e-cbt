import { ShieldCheck } from "lucide-react"

function AboutContent() {
    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center">
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 lg:p-14 text-center">
                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                        <ShieldCheck className="w-10 h-10 text-secondary" />
                    </div>
                    
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">Tentang E-CBT</h1>
                    <p className="text-slate-300 font-light leading-relaxed text-lg mb-8">
                        Aplikasi E-CBT (Electronic Cognitive Behavioral Therapy) hadir sebagai platform digital untuk membantu menangani dampak psikologis dari masalah bullying. Kami menyediakan ruang aman untuk mencatat jurnal terapi, mengakses informasi edukasi, dan melakukan penilaian diri.
                    </p>
                    <div className="p-6 bg-[#13072e]/50 border border-white/5 rounded-2xl">
                        <p className="text-slate-400 italic">"Kesehatan mental Anda berharga, dan Anda tidak sendirian dalam perjalanan ini."</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function About() {
    return (
        <AboutContent />
    )
}