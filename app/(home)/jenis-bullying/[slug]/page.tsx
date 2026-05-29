import { jenisBullying } from "@/app/data"
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const getData = jenisBullying;
    const data = getData.filter(val => val.slug === `${slug}`);

    if (data.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <h1>Data tidak ditemukan</h1>
            </div>
        )
    }

    return (
        <div className="min-h-screen py-24 relative overflow-hidden flex items-center justify-center">
            {/* Background effects */}
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl p-8 lg:p-14">
                    
                    <h1 className="text-3xl lg:text-5xl font-bold text-white text-center mb-10">{data[0].title}</h1>
                    
                    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden mb-10 mx-auto max-w-2xl shadow-2xl">
                        <img src={data[0].image} alt={data[0].title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
                    </div>
                    
                    <div className="prose prose-invert max-w-none">
                        <p className="text-slate-300 font-light leading-relaxed text-lg lg:text-xl mb-8 bg-[#13072e]/50 p-6 rounded-2xl border border-white/5">
                            {data[0].content}
                        </p>
                        
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                            <h3 className="text-xl font-bold text-secondary mb-6">Karakteristik & Contoh</h3>
                            <ul className="space-y-4">
                                {data[0].listContent.map((content) => (
                                    <li className="flex items-start" key={content.id}>
                                        <div className="min-w-8 h-8 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold mr-4 border border-secondary/30">
                                            {content.id}
                                        </div>
                                        <span className="text-slate-300 font-light text-lg pt-1">
                                            {content.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link href="/jenis-bullying" className="inline-flex items-center justify-center px-10 py-4 font-bold text-slate-300 bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:bg-white/10 hover:text-white hover:-translate-y-1 group">
                            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Kembali ke Jenis Bullying
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}