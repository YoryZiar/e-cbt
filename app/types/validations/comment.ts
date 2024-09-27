import { z } from "zod";

// comment
export const commentInitialState: initProp = {
    content: ""
}

type initProp = {
    content: string | "",
}

// comment schema 
export const CommentSchema = z.object({
    content: z.string().min(1, "Comment tidak boleh kosong!")
});

export type Comment = z.infer<typeof CommentSchema>