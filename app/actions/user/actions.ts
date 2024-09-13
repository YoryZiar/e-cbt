'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function storeUserResult(formData: FormData) {
    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email: formData.get('email') as string,
            }
        })

        if (!findUser) {
            const storeNewUser = await prisma.user.create({
                data: {
                    name: formData.get('nama') as string,
                    email: formData.get('email') as string,
                    telephone: formData.get('noTelp') as string
                }
            });
            const storeResult = await prisma.result.create({
                data: {
                    score: formData.get('score') as string,
                    level: formData.get('level') as string,
                    User: {
                        connect: {
                            email: formData.get('email') as string,
                        }
                    }
                }
            });
        } else {
            const updateUser = await prisma.user.update({
                where: {
                    email: formData.get('email') as string,
                },
                data: {
                    name: formData.get('nama') as string,
                    email: formData.get('email') as string,
                    telephone: formData.get('noTelp') as string
                }
            });
            const storeResult = await prisma.result.create({
                data: {
                    score: formData.get('score') as string,
                    level: formData.get('level') as string,
                    User: {
                        connect: {
                            email: formData.get('email') as string,
                        }
                    }
                }
            });
        }
    } catch (error) {
        return console.log(error);
    }
    
    revalidatePath("/therapy")
    redirect("/therapy")
}

export async function storeUser(
    nama: string,
    email: string,
    telephone: string
) {
    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })

        if (!findUser) {
            const storeNewUser = await prisma.user.create({
                data: {
                    name: nama,
                    email: email,
                    telephone: telephone
                }
            });
            // const storeResult = await prisma.result.create({
            //     data: {
            //         score: formData.get('score') as string,
            //         level: formData.get('level') as string,
            //         User: {
            //             connect: {
            //                 email: email,
            //             }
            //         }
            //     }
            // });
        } else {
            const updateUser = await prisma.user.update({
                where: {
                    email: email,
                },
                data: {
                    name: nama,
                    email: email,
                    telephone: telephone
                }
            });
            // const storeResult = await prisma.result.create({
            //     data: {
            //         score: formData.get('score') as string,
            //         level: formData.get('level') as string,
            //         User: {
            //             connect: {
            //                 email: email,
            //             }
            //         }
            //     }
            // });
        }
    } catch (error) {
        return console.log(error);
    }
    
    revalidatePath("/therapy")
    redirect("/therapy")
}

export async function deleteUser( id: string ) {
    try {
        const deleteResult = await prisma.result.deleteMany({
            where: {
                userId: id
            }
        });
        const users = await prisma.user.delete({
            where: {
                id
            }
        });

        revalidatePath("/dashboard")
        return { message: "Deleted user"}
    } catch (error) {
        console.log("Database error: " + error);
        return { message: "Database error: Failed to delete user"}
    }

}