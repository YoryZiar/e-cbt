import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CornerDownLeft, BookOpen, MessageCircle, Clock, User, ArrowLeft, Shield } from "lucide-react";
import {
    getJurnalById,
    getCommentByJurnal
} from "@/app/services/admin/queries";
import { createComment } from "@/app/actions/user/actions";
import Link from "next/link";

export default async function DetailJurnal(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const jurnal = await getJurnalById(`${id}`);
    const comment = await getCommentByJurnal(`${id}`);

    const formattedDate = jurnal?.createdAt
        ? new Date(jurnal.createdAt).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "-";

    return (
        <div className="min-h-screen py-24 relative overflow-hidden">
            {/* Background ambient effects */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[120px] opacity-50 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/40 rounded-full mix-blend-screen filter blur-[100px] opacity-60 pointer-events-none" />

            <div className="container max-w-4xl mx-auto px-4 relative z-10">

                {/* Back button */}
                <Link
                    href="/admin/jurnal"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-secondary transition-colors duration-200 mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                    <span className="text-sm font-medium">Kembali ke Daftar Jurnal</span>
                </Link>

                {/* Main Journal Card */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl mb-6">

                    {/* Card Header Banner */}
                    <div className="relative bg-gradient-to-r from-primary/80 via-[#3d1a8a]/60 to-secondary/20 px-8 py-8 border-b border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2.5 bg-secondary/20 rounded-2xl border border-secondary/30">
                                    <BookOpen className="w-5 h-5 text-secondary" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-semibold text-secondary uppercase tracking-widest">Detail Jurnal</span>
                                    <span className="text-white/20">·</span>
                                    <div className="flex items-center gap-1.5 bg-secondary/10 border border-secondary/20 rounded-full px-3 py-1">
                                        <Shield className="w-3 h-3 text-secondary/70" />
                                        <span className="text-xs text-secondary/70 font-medium">Admin View</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Clock className="w-4 h-4" />
                                <span>{formattedDate}</span>
                            </div>
                        </div>
                    </div>

                    {/* Journal Content */}
                    <div className="p-8 space-y-8">

                        {/* Field: What happened */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-5 bg-secondary rounded-full" />
                                <label className="text-sm font-semibold text-secondary uppercase tracking-wider">
                                    Apa yang terjadi?
                                </label>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white text-base leading-relaxed">
                                {jurnal?.title || <span className="text-slate-500 italic">Tidak ada data</span>}
                            </div>
                        </div>

                        {/* Field: What they thought/felt */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-5 bg-[#c4bdff] rounded-full" />
                                <label className="text-sm font-semibold text-[#c4bdff] uppercase tracking-wider">
                                    Apa yang dipikirkan / dirasakan?
                                </label>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-white text-base leading-relaxed whitespace-pre-wrap min-h-28">
                                {jurnal?.content || <span className="text-slate-500 italic">Tidak ada data</span>}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Comments Section */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl mb-6">
                    <div className="px-8 py-6 border-b border-white/10 flex items-center gap-3">
                        <div className="p-2 bg-[#b3aaff]/10 rounded-xl border border-[#b3aaff]/20">
                            <MessageCircle className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                            <h3 className="text-white font-semibold text-lg">Komentar</h3>
                            <p className="text-slate-400 text-sm">{comment.length} komentar</p>
                        </div>
                    </div>

                    <div className="p-8">
                        {comment.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-10 gap-3">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-slate-500" />
                                </div>
                                <p className="text-slate-500 italic text-sm">Belum ada komentar pada jurnal ini.</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {comment.map((c) => (
                                    <div
                                        key={c.id}
                                        className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/[0.07] transition-colors duration-200"
                                    >
                                        <Avatar className="h-10 w-10 flex-shrink-0 ring-2 ring-secondary/30">
                                            <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                            <AvatarFallback className="bg-secondary/20 text-secondary text-sm font-bold">
                                                {c.User.email.slice(0, 2).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-2">
                                                <User className="w-3 h-3 text-secondary/60" />
                                                <p className="text-sm font-semibold text-secondary truncate">
                                                    {c.User.email}
                                                </p>
                                            </div>
                                            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                                                {c.content}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Add Comment Form */}
                <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <div className="px-8 py-5 border-b border-white/10">
                        <h4 className="text-white font-semibold">Tambahkan Komentar</h4>
                        <p className="text-slate-400 text-sm mt-0.5">Berikan tanggapan atau catatan untuk jurnal ini</p>
                    </div>
                    <form action={createComment} className="p-6">
                        <input type="hidden" name="jurnalId" value={jurnal?.id} />
                        <Label htmlFor="admin-message" className="sr-only">
                            Komentar
                        </Label>
                        <Textarea
                            id="admin-message"
                            name="message"
                            placeholder="Tuliskan tanggapan atau catatan admin..."
                            className="min-h-28 resize-none border border-white/10 bg-white/5 text-white placeholder-slate-500 rounded-2xl p-5 shadow-none focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:border-secondary transition-all text-base"
                        />
                        <div className="flex justify-end mt-4">
                            <Button
                                type="submit"
                                className="gap-2 bg-secondary text-primary hover:bg-[#c4bdff] rounded-xl font-semibold px-6 h-11 transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(179,170,255,0.25)]"
                            >
                                Kirim Komentar
                                <CornerDownLeft className="w-4 h-4" />
                            </Button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}