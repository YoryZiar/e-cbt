import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "./lib/db"
import bcrypt, { compareSync } from "bcrypt"
import { signInSchema } from "./lib/zod"
import { authConfig } from "./auth.config"

async function getUser(email: string) {
    try {
        const users = prisma.user.findUnique({
            where: {
                email: email
            }
        });

        return users
    } catch (error) {

    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    // ...authConfig,
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },

            authorize: async (credentials) => {
                const { email, password } = await signInSchema.parseAsync(credentials)

                // find user
                const user = await getUser(email)
                console.log(user);
                

                // compare password
                // const pwMatch = compareSync(password, user.password)

                if (!user) {
                    throw new Error 
                }

                

                // return user object with their profile data
                return user
            },
        }),
    ],
})