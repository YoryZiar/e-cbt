'use server'

import { auth } from "@/auth"
import { createAdminClient, createSessionClient, DATABASE_ID, COLLECTIONS } from "@/lib/appwrite.server"
import { ID, AppwriteException } from "node-appwrite"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { RegisterSchema } from "@/app/types/validations/register"

// register
export async function register(formData: FormData) {
    const result = RegisterSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            error: result.error.flatten().fieldErrors
        }
    }

    try {
        const { account, databases, users } = await createAdminClient();
        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        // Create user in Appwrite Auth via Admin API
        const user = await users.create(ID.unique(), email, undefined, password, name);

        // Assign 'user' label
        await users.updateLabels(user.$id, ['user']);

        // Create profile document
        await databases.createDocument(DATABASE_ID, COLLECTIONS.PROFILES, ID.unique(), {
            userId: user.$id,
            name: name,
            email: email,
        });

        revalidatePath("/login");
        return { success: true };
    } catch (err) {
        console.log("Error register user: ", err);
        if (err instanceof AppwriteException) {
            return {
                errors: [err.message]
            }
        }
        throw new Error("Error ketika melakukan register")
    }
}

// create jurnal
export async function createJurnal(
    formData: FormData,
) {
    try {
        const session = await auth()
        if (!session?.user) throw new Error("Not authenticated");

        const { databases } = await createSessionClient();
        await databases.createDocument(DATABASE_ID, COLLECTIONS.JURNALS, ID.unique(), {
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

        const { databases } = await createSessionClient();
        await databases.createDocument(DATABASE_ID, COLLECTIONS.COMMENTS, ID.unique(), {
            jurnalId: formData.get("jurnalId") as string,
            userId: session.user.id,
            content: formData.get("message") as string,
        });
    } catch (error) {
        console.log("Error create Comment: ", error);
        throw new Error("Failed to create Comment")
    }

    revalidatePath(`/user/jurnal/${formData.get("jurnalId")}`)
}

// delete jurnal
export async function destroyJurnal(jurnalId: string) {
    try {
        const { databases } = await createAdminClient(); // or session client if they own it
        await databases.deleteDocument(DATABASE_ID, COLLECTIONS.JURNALS, jurnalId);
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
        const { databases } = await createAdminClient();
        await databases.deleteDocument(DATABASE_ID, COLLECTIONS.MESSAGES, messageId);
        return { success: true };
    } catch (error) {
        console.log("database error: ", error);
        throw new Error("Failed to delete message")
    }
}