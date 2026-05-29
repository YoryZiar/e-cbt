import { createAdminClient, createSessionClient, DATABASE_ID, COLLECTIONS } from "@/lib/appwrite.server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Query } from "node-appwrite";

export async function auth() {
    try {
        const { account } = await createSessionClient();
        const user = await account.get();
        
        // Fetch labels via Admin SDK
        const { users } = await createAdminClient();
        const adminUser = await users.get(user.$id);
        
        const role = adminUser.labels.includes('admin') ? 'admin' : 'user';
        
        return {
            user: {
                id: user.$id,
                email: user.email,
                name: user.name,
                role: role,
            }
        };
    } catch (error) {
        return null;
    }
}

export async function signIn(provider: string, formData: FormData) {
    if (provider === "credentials") {
        const email = formData.get("email") as string;
        const password = formData.get("password") as string;

        const { account } = await createAdminClient();
        try {
            const session = await account.createEmailPasswordSession(email, password);
            const cookieStore = await cookies();
            cookieStore.set("appwrite-session", session.secret, {
                path: "/",
                httpOnly: true,
                sameSite: "lax",
                secure: process.env.NODE_ENV === "production",
                expires: new Date(session.expire),
            });
            return { success: true };
        } catch (error) {
            console.error("Sign in error:", error);
            throw new Error("CredentialsSignin");
        }
    }
}

export async function signOut() {
    try {
        const { account } = await createSessionClient();
        await account.deleteSession("current");
    } catch (error) {
        console.error("Sign out error:", error);
    }
    const cookieStore = await cookies();
    cookieStore.delete("appwrite-session");
    redirect("/login");
}