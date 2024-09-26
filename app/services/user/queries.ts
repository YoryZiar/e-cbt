import prisma from "@/lib/db";
import { auth } from "@/auth";

// get jurnal user
export async function getJurnal(
    page: number,
    data: number
) {
    try {
        const session = await auth();

        const listJurnal = await prisma.jurnal.findMany({
            skip: page,
            take: data,
            where: {
                User: {
                    email: session?.user?.email?.toString()
                }
            },
            include: {
                User: true
            }
        })        

        return listJurnal
    } catch (error) {
        console.log("Database error: " + error);
        throw new Error("Failed to get jurnal")
    }
}

// count jurnal
export async function countJurnal() {
    try {
        const session = await auth();

        const listJurnal = await prisma.jurnal.count({
            where: {
                User: {
                    email: session?.user?.email?.toString()
                }
            }
        })

        return listJurnal
    } catch (error) {
        console.log("Database error: " + error);
        throw new Error("Failed to count jurnal")
    }
}

// get jurnal by id
export async function getJurnalById(id: string) {
    try {
        const jurnalById = await prisma.jurnal.findUnique({
            where: {
                id: id
            }
        })

        return jurnalById
    } catch (error) {
        console.log("Database error: " + error);
        throw new Error("Failed to get jurnal")
    }
}

// get comment
export async function getCommentByJurnal(id: string) {
    try {
        const commentByJurnal = await prisma.comment.findMany({
            where: {
                jurnalId: id
            },
            include: {
                User: true
            }
        })

        return commentByJurnal
    } catch (error) {
        console.log("Database error: " + error);
        throw new Error("Failed to get comment")
    }
}