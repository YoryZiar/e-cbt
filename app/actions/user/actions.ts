'use server'

import { auth } from "@/auth"
import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

const FormMessageSchema = z.object({
    title: z.string(),
    email: z.string(),
    message: z.string(),
});

// send message from contact form
export async function sendMessage(
    formData: FormData
) {
    try {
        const createMessage = await prisma.message.create({
            data: {
                title: formData.get('title') as string,
                email: formData.get('email') as string,
                message: formData.get('pesan') as string
            }
        });
    } catch (error) {
        console.log("Error create message: " + error);
        throw new Error("Failed to create message")
    }

    revalidatePath("/")
    redirect("/#contact")
}

// create jurnal
export async function createJurnal(
    formData: FormData,
) {
    try {
        const session = await auth()
        const createTherapy = await prisma.jurnal.create({
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
        })
    } catch (error) {
        console.log("Error create Therapy: " + error);
        throw new Error("Failed to create Therapy")
    }

    revalidatePath("/start-therapy")
    redirect("/start-therapy")
}