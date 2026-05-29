import Link from "next/link"
import { ArrowLeft, MonitorOff, ShieldBan, UserMinus, Users } from "lucide-react"

export default function JenisBullying() {
    const jenis = [
        { title: "Fisik", link: "/jenis-bullying/bullying-fisik", icon: <ShieldBan className="w-10 h-10 text-secondary" /> },
        { title: "Verbal", link: "/jenis-bullying/bullying-verbal", icon: <UserMinus className="w-10 h-10 text-secondary" /> },
        { title: "Relasional", link: "/jenis-bullying/bullying-relasional", icon: <Users className="w-10 h-10 text-secondary" /> },
        { title: "Cyber", link: "/jenis-bullying/cyber-bullying", icon: <MonitorOff className="w-10 h-10 text-secondary" /> },
    ]

    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-secondary font-semibold tracking-wider uppercase text-sm mb-3">Edukasi</h2>
                    <h3 className="text-3xl lg:text-5xl font-bold text-white mb-6">Jenis-Jenis Bullying</h3>
                    <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {jenis.map((item, idx) => (
                        <Link href={item.link} key={idx} className="group h-full">
                            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 h-full text-center transition-all duration-300 hover:bg-white/[0.08] hover:border-secondary/40 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(179,170,255,0.15)] flex flex-col items-center justify-center">
                                <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/40 transition-colors">
                                    {item.icon}
                                </div>
                                <h1 className="text-xl lg:text-2xl font-bold text-white">{item.title}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
                
                <div className="mt-16 text-center">
                    <Link href="/pasal" className="inline-flex items-center justify-center px-10 py-4 font-bold text-slate-300 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-1 group">
                        <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        Kembali ke Pasal
                    </Link>
                </div>
            </div>
        </div>
    )
}