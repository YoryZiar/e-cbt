import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import prisma from "./lib/db"
import { signInSchema } from "./lib/zod"
import { authConfig } from "./auth.config"
import checkPassword from "./lib/password"

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
                let users = null;
                const { email, password } = await signInSchema.parseAsync(credentials)

                // find user
                users = await prisma.user.findUnique({
                    where: {
                        email: email,
                        password: password
                    }
                })
                console.log(users);

                if (!users) {
                    console.log("user not found");
                    
                }

                

                // return user object with their profile data
                return users
            },
        }),
    ],
})