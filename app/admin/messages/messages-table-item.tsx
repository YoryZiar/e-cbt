'use client'

import { Button } from "@/components/ui/button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Swal from "sweetalert2"
import { destroyMessage } from "@/app/actions/user/actions"

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
    const messageId = message.id;

    const handleDetail = async () => {
        await Swal.fire({
            title: `${message.title}`,
            text: `${message.message}`,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ok',
        })
    }

    const deleteMessage = async () => {
        const { isConfirmed } = await Swal.fire({
            title: "Pesan akan di hapus?",
            confirmButtonText: "Hapus",
            icon: "warning",
            showCancelButton: true,
            cancelButtonColor: "#b91c1c"
        })

        if (isConfirmed) {
            try {
                const delMessage = await destroyMessage(messageId);

                if (delMessage) {
                    const { isConfirmed } = await Swal.fire({
                        title: "Pesan berhasil di hapus",
                        icon: "success",
                        showConfirmButton: true,
                        showCancelButton: true,
                        cancelButtonColor: "#b91c1c"
                    })

                    if (isConfirmed) {
                        location.reload();
                    }
                }
            } catch (error) {
                await Swal.fire({
                    title: "Pesan gagal di hapus",
                    icon: "error",
                    text: `${error}`,
                    confirmButtonText: "Ok"
                })
            }
        }
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
                <Button onClick={handleDetail} className="text-slate-200 hover:bg-purple-800 mr-2">Detail</Button>
                <Button onClick={deleteMessage} className="text-slate-200 bg-red-700 hover:bg-red-800">Hapus</Button>
            </div>
        </div>
    )
}