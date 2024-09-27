'use server'

import prisma from "@/lib/db"
import { auth } from "@/auth"
import { revalidatePath } from "next/cache"
import { JurnalSchema } from "@/app/types/validations/jurnal"

// create jurnal
export async function createJurnal(formData: FormData) {
    const result = JurnalSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            error: result.error.flatten().fieldErrors
        }
    }

    const session = await auth()
    const resultJurnal = await prisma.jurnal.create({
        data: {
            title: formData.get('title') as string,
            content: formData.get('content') as string,
            User: {
                connect: {
                    email: session?.user?.email as string
                }
            }
        },
        include: {
            User: true
        }
    }).then((res) => {
        return res
    }).catch((err) => {
        console.log("Error ketika membuat jurnal: " + err);

        if (err?.response?.data?.errors && !err?.response?.data?.errors?.detail) {
            return {
                errors: err?.response?.data?.errors
            }
        } else {
            throw new Error("Error membuat jurnal")
        }
    });

    revalidatePath("/start-therapy");
    return resultJurnal
}