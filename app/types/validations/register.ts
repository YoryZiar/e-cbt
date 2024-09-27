import { z } from "zod";

// Register
export const initialState: initProp = {
    name: "",
    email: "",
    password: ""
};

type initProp = {
    name: string | "",
    email: string | "",
    password: string | ""
};

// register schema
export const RegisterSchema = z.object({
    name: z.string().min(1, "Nama tidak boleh kosong!"),
    email: z.string().min(1, "Email tidak boleh kosong!").email({ message: "Masukkan email dengan benar!"}),
    password: z.string().min(3, "Password harus diisi minimal 5 karakter!")
});

export type Register = z.infer<typeof RegisterSchema>