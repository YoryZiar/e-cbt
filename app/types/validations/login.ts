import { z } from "zod";

// signIn
export const signInInitialState: initProp = {
    email: "",
    password: ""
}

type initProp = {
    email: string | "",
    password: string | ""
}

// signIn schema
export const SignInSchema = z.object({
    email: z.string().min(1, "Emaili tidak boleh kosong!"),
    password: z.string().min(1, "Password tidak boleh kosong!"),
})

export type Login = z.infer<typeof SignInSchema>