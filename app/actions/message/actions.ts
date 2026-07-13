'use server'

import { db } from "@/lib/db"
import { messages } from "@/lib/db/schema"
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

    try {
        const [resultMsg] = await db.insert(messages).values({
            title: formData.get('title') as string,
            email: formData.get('email') as string,
            message: formData.get('message') as string,
        }).returning();

        revalidatePath("/admin/messages");
        return {
            id: resultMsg.id,
            title: resultMsg.title,
            email: resultMsg.email,
            message: resultMsg.message,
            createdAt: resultMsg.createdAt
        };
    } catch (err: any) {
        console.log("Error sending message: ", err);
        return {
            errors: [err.message || "Failed to send message"]
        }
    }
}
