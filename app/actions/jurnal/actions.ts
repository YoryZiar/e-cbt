'use server'

import { auth } from "@/auth"
import { createSessionClient, DATABASE_ID, COLLECTIONS } from "@/lib/appwrite.server"
import { ID, AppwriteException } from "node-appwrite"
import { revalidatePath } from "next/cache"
import { JurnalSchema } from "@/app/types/validations/jurnal"

// create jurnal
export async function createJurnal(formData: FormData) {
    const result = JurnalSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            error: result.error.flatten().fieldErrors
        }
    }

    try {
        const session = await auth()
        if (!session?.user) throw new Error("Not authenticated");

        const { databases } = await createSessionClient();
        const resultJurnal = await databases.createDocument(DATABASE_ID, COLLECTIONS.JURNALS, ID.unique(), {
            title: formData.get('title') as string,
            content: formData.get('content') as string,
            userId: session.user.id
        });

        revalidatePath("/start-therapy");
        return {
            id: resultJurnal.$id,
            title: resultJurnal.title,
            content: resultJurnal.content,
            userId: resultJurnal.userId,
            createdAt: resultJurnal.$createdAt
        };
    } catch (err) {
        console.log("Error ketika membuat jurnal: ", err);
        if (err instanceof AppwriteException) {
            return {
                errors: [err.message]
            }
        }
        throw new Error("Error membuat jurnal")
    }
}