import { z } from "zod";

// jurnal
export const jurnalInitialState: initProp = {
    title: "",
    content: ""
}

type initProp = {
    title: string | "",
    content: string | "",
}

// jurnal schema 
export const JurnalSchema = z.object({
    title: z.string().min(1, "Title tidak boleh kosong!"),
    content: z.string().min(1, "Content tidak boleh kosong!")
});

export type Jurnal = z.infer<typeof JurnalSchema>