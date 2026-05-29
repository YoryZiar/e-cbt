import {
    Card,
    CardTitle,
    CardContent
} from "@/components/ui/card"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CornerDownLeft } from "lucide-react";
import {
    getJurnalById,
    getCommentByJurnal
} from "@/app/services/user/queries";
import { createComment } from "@/app/actions/user/actions";
import { auth } from "@/auth";

export default async function DetailJurnal(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const jurnal = await getJurnalById(`${id}`);
    const comment = await getCommentByJurnal(`${id}`)    

    return (
        <div className="container max-w-3xl mx-auto my-12 p-4">
            <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2rem] text-white overflow-hidden">
                <CardTitle className="text-center my-6 text-2xl font-bold">Detail Jurnal</CardTitle>
                <CardContent className="space-y-6 px-8 pb-8">
                    <label htmlFor="title" className="block">
                        <span className="block text-slate-400 text-sm font-medium mb-1">Apa yang terjadi?</span>
                        <div className="text-lg bg-white/5 p-4 rounded-xl border border-white/10">{jurnal?.title}</div>
                    </label>
                    <label htmlFor="content" className="block">
                        <span className="block text-slate-400 text-sm font-medium mb-1">Apa yang anda pikirkan/rasakan/ingin lakukan?</span>
                        <div className="text-lg bg-white/5 p-4 rounded-xl border border-white/10 leading-relaxed whitespace-pre-wrap">{jurnal?.content}</div>
                    </label>
                </CardContent>
            </Card>

            <div className="my-8 px-4">
                <h3 className="text-lg font-semibold text-slate-300 mb-4">Komentar</h3>
                {comment.length === 0 && <p className="text-slate-500 italic text-sm">Belum ada komentar.</p>}
                <div className="space-y-4">
                    {comment.map((comment) => {
                        return (
                            <div className="flex gap-4 p-4 bg-white/5 rounded-2xl border border-white/10" key={comment.id}>
                                <Avatar className="hidden h-10 w-10 sm:flex ring-2 ring-white/10">
                                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                    <AvatarFallback className="bg-secondary text-primary">{comment.User.email.slice(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div className="grid gap-1">
                                    <p className="text-sm font-medium leading-none text-secondary">
                                        {comment.User.email}
                                    </p>
                                    <p className="text-sm text-slate-300 mt-1 whitespace-pre-wrap">
                                    {comment.content}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <form
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl focus-within:ring-2 focus-within:ring-secondary/50 focus-within:border-secondary transition-all"
                action={createComment}
            >
                <input type="hidden" name="jurnalId" value={jurnal?.id} />
                <Label htmlFor="message" className="sr-only">
                    Message
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Tuliskan komentar atau tanggapan..."
                    className="min-h-24 resize-none border-0 bg-transparent text-white placeholder-slate-400 p-6 shadow-none focus-visible:ring-0 text-base"
                />
                <div className="flex items-center p-4 pt-0 border-t border-white/10">
                    <Button type="submit" size="default" className="ml-auto gap-2 bg-secondary text-primary hover:bg-[#c4bdff] rounded-xl font-semibold">
                        Kirim Komentar
                        <CornerDownLeft className="size-4" />
                    </Button>
                </div>
            </form>
        </div>
    )
}