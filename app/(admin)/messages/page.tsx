import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    ArrowUpRight,
} from "lucide-react"
import {
    getJurnal
} from "@/app/services/user/queries"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { getMessage } from "@/app/services/user/queries"
import MessagesItem from "./messages-table-item"

export default async function Messages() {
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