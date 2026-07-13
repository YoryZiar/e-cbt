import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { profiles } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import bcrypt from "bcryptjs";
import * as jose from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "super_secret_key_change_me_later_or_keep_it_secure_12345"
);

export async function auth() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("appwrite-session")?.value;
        if (!token) return null;

        const { payload } = await jose.jwtVerify(token, JWT_SECRET);
        const userId = payload.sub as string;
        
        if (!userId) return null;

        const userProfile = await db.query.profiles.findFirst({
            where: eq(profiles.userId, userId),
        });

        if (!userProfile) return null;

        const role = userProfile.role === 2 ? 'admin' : 'user';

        return {
            user: {
                id: userProfile.userId,
                email: userProfile.email,
                name: userProfile.name,
                role: role,
            }
        };
    } catch (error) {
        console.error("Auth helper error:", error);
        return null;
    }
}

import { signInSchema } from "@/lib/zod";

export async function signIn(provider: string, formData: FormData) {
    if (provider === "credentials") {
        const rawData = Object.fromEntries(formData.entries());
        const validated = signInSchema.safeParse(rawData);

        if (!validated.success) {
            console.error("Sign in validation error:", validated.error.format());
            throw new Error("CredentialsSignin");
        }

        const email = validated.data.email;
        const password = validated.data.password;

        try {
            const userProfile = await db.query.profiles.findFirst({
                where: eq(profiles.email, email),
            });

            if (!userProfile) {
                console.error("User not found for sign in");
                throw new Error("CredentialsSignin");
            }

            const isPasswordCorrect = await bcrypt.compare(password, userProfile.password);
            if (!isPasswordCorrect) {
                console.error("Incorrect password");
                throw new Error("CredentialsSignin");
            }

            // Create JWT Token
            const token = await new jose.SignJWT({ email: userProfile.email, role: userProfile.role })
                .setProtectedHeader({ alg: "HS256" })
                .setSubject(userProfile.userId)
                .setIssuedAt()
                .setExpirationTime("7d")
                .sign(JWT_SECRET);

            const cookieStore = await cookies();
            cookieStore.set("appwrite-session", token, {
                path: "/",
                httpOnly: true,
                sameSite: "lax",
                secure: process.env.NODE_ENV === "production",
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            });
            return { success: true };
        } catch (error) {
            console.error("Sign in error:", error);
            throw new Error("CredentialsSignin");
        }
    }
}

export async function signOut() {
    const cookieStore = await cookies();
    cookieStore.delete("appwrite-session");
    redirect("/login");
}
