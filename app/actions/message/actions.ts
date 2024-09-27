'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { MessageSchema } from "@/app/types/validations/message"


// send message from contact form
export async function sendMessage(
    formData: FormData
) {
    const result = MessageSchema.safeParse(Object.fromEntries(formData));    
    
    if (!result.success) {
        return {
            error: result.error.flatten().fieldErrors
        }
    }

    const { title, email, message } = result.data
    const createMessage = await prisma.message.create({
        data: {
            title: formData.get("title") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string
        }
    }).then((res) => {        
        return res
    }).catch((err) => {
        console.log("Error ketika mengirim pesan: " + err);

        if (err?.response?.data?.errors && !err?.response?.data?.errors?.detail) {
            return {
                errors: err?.response?.data?.errors
            }
        } else {
            throw new Error("Error mengirim pesan")
        }
    });

    revalidatePath("/");
    return createMessage
}