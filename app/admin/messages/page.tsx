import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { getMessage } from "@/app/services/admin/queries"
import MessagesItem from "./messages-table-item"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Messages() {
    // session
    const session = await auth();
    if (!session) return redirect("/")

    const listMessages = await getMessage(0, 100);

    return (
        <div className="container mx-auto my-5 p-4 w-full lg:w-3/5">
            <Card className="bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl rounded-[2.5rem] overflow-hidden">
                <CardHeader className="flex flex-row items-center border-b border-white/5 bg-white/5 px-6 py-6">
                    <CardTitle className="text-xl text-white">Daftar Pesan</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    {
                        listMessages.length
                        ?
                        <div className="grid gap-6">
                            {listMessages.map((message, index) => {
                                return (
                                    <MessagesItem
                                        key={message.id}
                                        message={message}
                                        index={index + 1}
                                    />
                                )
                            })}
                        </div>
                        :
                        <div className="h-32 flex items-center justify-center">
                            <h1 className="text-center text-slate-400 italic">Pesan Kosong!</h1>
                        </div>
                    }
                </CardContent>
            </Card>
        </div>
    )
}