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

export default async function DetailJurnal({ params }: { params: { id: string } }) {
    const id = params.id;
    const jurnal = await getJurnalById(`${id}`);
    const comment = await getCommentByJurnal(`${id}`)
    const session = await auth();
    console.log(id);
    

    return (
        <div className="container bg-primary my-5 w-80 mx-auto rounded-lg p-2">
            <Card className="bg-secondary">
                <CardTitle className="text-center my-2">Jurnal</CardTitle>
                <CardContent>
                    <label htmlFor="title" className="block mb-5">
                        <span className="block">Apa yang terjadi?</span>
                        <span>: {jurnal?.title}</span>
                    </label>
                    <label htmlFor="content" className="block">
                        <span className="block">Apa yang anda pikirkan/rasakan/ingin lakukan?</span>
                        <span>: {jurnal?.content}</span>
                    </label>
                </CardContent>
            </Card>

            <div className="my-5">
                {comment.map((comment) => {
                    return (
                        <div className="flex items-center gap-4 py-3" key={comment.id}>
                            <Avatar className="hidden h-9 w-9 sm:flex">
                                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                                <AvatarFallback>{comment.User.email.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium leading-none text-slate-200">
                                    {comment.User.email}
                                </p>
                                <p className="text-sm text-muted-foreground text-slate-400">
                                {comment.content}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <form
                className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
                action={createComment}
            >
                <input type="hidden" name="jurnalId" value={jurnal?.id} />
                <Label htmlFor="message" className="sr-only">
                    Message
                </Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Tuliskan sesuatu..."
                    className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center p-3 pt-0">
                    <Button type="submit" size="sm" className="ml-auto gap-1.5 text-slate-200">
                        Send Message
                        <CornerDownLeft className="size-3.5" />
                    </Button>
                </div>
            </form>
        </div>
    )
}