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

    const listMessages = await getMessage(0, 10);

    return (
        <div className="container mx-auto my-5 p-2 w-full lg:w-3/5">
            <Card x-chunk="dashboard-01-chunk-5" className="bg-secondary border-0 shadow-lg shadow-primary">
                <CardHeader className="flex flex-row items-center">
                    <CardTitle>Pesan Terbaru</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-8">
                    {listMessages.map((message, index) => {
                        return (
                            <MessagesItem
                            key={message.id}
                            message={message}
                            index={index + 1}
                            />
                        )
                    })}
                </CardContent>
            </Card>
        </div>
    )
}