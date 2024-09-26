'use client'

import { Button } from "@/components/ui/button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Swal from "sweetalert2"

interface Message {
    id: string,
    title: string,
    email: string,
    message: string,
    createdAt: Date
}

interface MessageTableItemProps {
    message: Message,
    index: number
}

export default function MessagesItem({
    message,
    index
}: MessageTableItemProps) {

    const handleDetail = async () => {
        Swal.fire({
            title: `${message.title}`,
            text: `${message.message}`,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
        })
    }

    return (
        <div className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage src="/avatars/01.png" alt="Avatar" />
                <AvatarFallback>{message.title.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                    {message.title}
                </p>
                <p className="text-sm text-muted-foreground">
                    {message.email}
                </p>
            </div>
            <div className="ml-auto font-medium">
                <Button onClick={handleDetail} className="text-slate-200 hover:bg-purple-800">Detail</Button>
            </div>
        </div>
    )
}