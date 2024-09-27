import { z } from "zod";

// message
export const messageInitialState: initProp = {
    title: "",
    email: "",
    message: ""
}

type initProp = {
    title: string | "",
    email: string | "",
    message: string | ""
}

// message schema 
export const MessageSchema = z.object({
    title: z.string().min(1, "Nama tidak boleh kosong!"),
    email: z.string().min(1, "Email tidak boleh kosong!"),
    message: z.string().min(1, "Pesan tidak boleh kosong!")
});

export type Message = z.infer<typeof MessageSchema>