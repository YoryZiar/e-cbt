'use server'

import { signIn } from "@/auth";
import { AuthError } from 'next-auth';
import { redirect } from "next/navigation";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const result = await signIn('credentials', formData);
        return result
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}