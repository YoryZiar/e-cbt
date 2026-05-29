'use server'

import { createAdminClient, DATABASE_ID, COLLECTIONS } from "@/lib/appwrite.server"
import { ID, AppwriteException } from "node-appwrite"
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

    try {
        const { databases } = await createAdminClient();
        const createMessage = await databases.createDocument(DATABASE_ID, COLLECTIONS.MESSAGES, ID.unique(), {
            title: title,
            email: email,
            message: message
        });
        
        revalidatePath("/");
        return createMessage;
    } catch (err) {
        console.log("Error ketika mengirim pesan: ", err);
        if (err instanceof AppwriteException) {
            return {
                errors: [err.message]
            }
        }
        throw new Error("Error mengirim pesan")
    }
}