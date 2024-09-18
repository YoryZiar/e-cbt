'use server'

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// export async function storeUser(
//     nama: string,
//     email: string,
//     telephone: string,
//     score: string,
//     level: string
// ) {
//     try {
//         const findUser = await prisma.user.findUnique({
//             where: {
//                 email: email,
//             }
//         })

//         if (!findUser) {
//             const storeNewUser = await prisma.user.create({
//                 data: {
//                     name: nama,
//                     email: email,
//                     telephone: telephone
//                 }
//             });
//             const storeResult = await prisma.result.create({
//                 data: {
//                     score: score,
//                     level: level,
//                     User: {
//                         connect: {
//                             email: email,
//                         }
//                     }
//                 }
//             });

//             return { message: "Data berhasil disimpan"}
//         } else {
//             const updateUser = await prisma.user.update({
//                 where: {
//                     email: email,
//                 },
//                 data: {
//                     name: nama,
//                     email: email,
//                     telephone: telephone
//                 }
//             });
//             const storeResult = await prisma.result.create({
//                 data: {
//                     score: score,
//                     level: level,
//                     User: {
//                         connect: {
//                             email: email,
//                         }
//                     }
//                 }
//             });

//             return { message: "Data berhasil disimpan"}
//         }
//     } catch (error) {
//         console.log(error);
//         return { message: "Database error: Failed to store user"}
//     }
// }

// export async function deleteUser( id: string ) {
//     try {
//         const deleteResult = await prisma.result.deleteMany({
//             where: {
//                 userId: id
//             }
//         });
//         const users = await prisma.user.delete({
//             where: {
//                 id
//             }
//         });
//         revalidatePath("/dashboard")
//     } catch (error) {
//         console.log("Database error: " + error);
//         return { message: "Database error: Failed to delete user"}
//     }
// }

// send message from contact form
export async function SendMessage(formData: FormData) {
    try {
        // const createMessage = await prisma.message.create({
        //     data: {
        //         title: formData.get('title'),
        //         email: formData.get('email'),
        //         message: formData.get('message'),
        //     }
        // })
    } catch (error) {
        
    }
}