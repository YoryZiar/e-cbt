'use server'

import { auth } from "@/auth"
import { db } from "@/lib/db"
import { jurnals, comments, messages, profiles } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { RegisterSchema } from "@/app/types/validations/register"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid"

// register
export async function register(formData: FormData) {
    const result = RegisterSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            error: result.error.flatten().fieldErrors
        }
    }

    try {
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = uuidv4();

        // Create profile document in Neon DB
        await db.insert(profiles).values({
            userId: userId,
            name: name,
            email: email,
            password: hashedPassword,
            role: 1 // default role: 1 = user
        });

        revalidatePath("/login");
        return { success: true };
    } catch (err: any) {
        console.log("Error register user: ", err);
        return {
            errors: [err.message || "Error ketika melakukan register"]
        }
    }
}

// create jurnal
export async function createJurnal(
    formData: FormData,
) {
    try {
        const session = await auth()
        if (!session?.user) throw new Error("Not authenticated");

        await db.insert(jurnals).values({
            title: formData.get('title') as string,
            content: formData.get('content') as string,
            userId: session.user.id
        });
    } catch (error) {
        console.log("Error create Therapy: ", error);
        throw new Error("Failed to create Therapy")
    }

    redirect("/")
}

// create comment
export async function createComment(formData: FormData) {
    try {
        const session = await auth()
        if (!session?.user) throw new Error("Not authenticated");

        await db.insert(comments).values({
            jurnalId: formData.get("jurnalId") as string,
            userId: session.user.id,
            content: formData.get("message") as string,
        });
    } catch (error) {
        console.log("Error create Comment: ", error);
        throw new Error("Failed to create Comment")
    }

    revalidatePath(`/user/jurnal/${formData.get("jurnalId")}`)
    revalidatePath(`/admin/jurnal/${formData.get("jurnalId")}`)
}

// delete jurnal
export async function destroyJurnal(jurnalId: string) {
    try {
        await db.delete(jurnals).where(eq(jurnals.id, jurnalId));
        revalidatePath("/user/jurnal")
        return { success: true }
    } catch (error) {
        console.log("database error: ", error);
        throw new Error("Failed to delete jurnal")
    }
}

// delete message
export async function destroyMessage(messageId: string) {
    try {
        await db.delete(messages).where(eq(messages.id, messageId));
        return { success: true };
    } catch (error) {
        console.log("database error: ", error);
        throw new Error("Failed to delete message")
    }
}
