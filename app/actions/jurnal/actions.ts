'use server'

import { auth } from "@/auth"
import { db } from "@/lib/db"
import { jurnals } from "@/lib/db/schema"
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

        const [resultJurnal] = await db.insert(jurnals).values({
            title: formData.get('title') as string,
            content: formData.get('content') as string,
            userId: session.user.id
        }).returning();

        revalidatePath("/start-therapy");
        return {
            id: resultJurnal.id,
            title: resultJurnal.title,
            content: resultJurnal.content,
            userId: resultJurnal.userId,
            createdAt: resultJurnal.createdAt
        };
    } catch (err: any) {
        console.log("Error ketika membuat jurnal: ", err);
        return {
            errors: [err.message || "Error membuat jurnal"]
        }
    }
}
