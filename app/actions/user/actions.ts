'use server'

import { auth } from "@/auth"
import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { RegisterSchema } from "@/app/types/validations/register"
import { JurnalSchema } from "@/app/types/validations/jurnal"
import { CommentSchema } from "@/app/types/validations/comment"

// register
// export async function register(formData: FormData) {
//     try {
//         const userRegister = await prisma.user.create({
//             data: {
//                 name: formData.get('name') as string,
//                 email: formData.get('email') as string,
//                 password: formData.get('password') as string
//             }
//         })
//     } catch (error) {
//         console.log("Error registering user: " + error);
//         throw new Error("Error register")
//     }

//     revalidatePath("/login")
// }

export async function register(formData: FormData) {
    const result = RegisterSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            error: result.error.flatten().fieldErrors
        }
    }

    const response = await prisma.user.create({
        data: {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }
    }).then((result) => {
        return result
    }).catch((err) => {
        console.log("Error register user: " + err);
        // let {status} = err?.response;

        if (err?.response?.data?.errors && !err?.response?.data?.errors?.detail) {
            return {
                errors: err?.response?.data?.errors
            }
        } else {
            throw new Error("Error ketika melakukan register")
        }
    });

    revalidatePath("/login");
    return response
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

    revalidatePath(`/user/jurnal/${formData.get("jurnalId")}`)
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

// delete message
export async function destroyMessage(messageId: string) {
    try {
        const messageById = await prisma.message.delete({
            where: {
                id: messageId
            }
        });

        return messageById;
    } catch (error) {
        console.log("database error: " + error);
        throw new Error("Failed to delete message")
    }
}