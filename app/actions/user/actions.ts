'use server'

import { auth } from "@/auth"
import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { z } from "zod"

// register
export async function register(formData: FormData) {
    try {
        const userRegister = await prisma.user.create({
            data: {
                name: formData.get('name') as string,
                email: formData.get('email') as string,
                password: formData.get('password') as string
            }
        })
    } catch (error) {
        console.log("Error registering user: " + error);
        throw new Error("Error register")
    }

    revalidatePath("/login")
}

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

    redirect("/")
}

// create comment
export async function createComment(formData: FormData) {
    try {
        const session = await auth()
        const createComment = await prisma.comment.create({
            data: {
                Jurnal: {
                    connect: {
                        id: formData.get("jurnalId") as string,
                    }
                },
                User: {
                    connect: {
                        email: session?.user?.email as string,
                    }
                },
                content: formData.get("message") as string,
            },
            include: {
                User: true,
                Jurnal: true
            }
        })
    } catch (error) {
        console.log("Error create Comment: " + error);
        throw new Error("Failed to create Comment")
    }

    revalidatePath(`/jurnal/${formData.get("jurnalId")}`)
    redirect(`/jurnal/${formData.get("jurnalId")}`)
}

// delete jurnal
export async function destroyJurnal(jurnalId: string) {
    try {
        const jurnalById = await prisma.jurnal.delete({
            where: {
                id: jurnalId.toString()
            }
        });
        
        revalidatePath("/user/jurnal")
        return jurnalById
    } catch (error) {
        console.log("database error: " + error);
        throw new Error("Failed to delete jurnal")
    }
}