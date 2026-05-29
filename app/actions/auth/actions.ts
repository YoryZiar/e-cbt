'use server'

import { signIn, auth } from "@/auth";
import { redirect } from "next/navigation";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error: any) {
        if (error.message === 'CredentialsSignin') {
            return 'Email atau Password tidak tepat!';
        }
        throw error;
    }

    const session = await auth();
    if (session?.user?.role === 'admin') {
        redirect("/admin/dashboard");
    } else {
        redirect("/user/dashboard");
    }
}