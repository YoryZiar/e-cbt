import prisma from "@/lib/db";

// get user
export async function getUser(
    page: number,
    data: number
) {
    try {
        const users = await prisma.user.findMany({
            skip: page,
            take: data,
            where: {
                role: 1
            }
        });

        return users
    } catch (error) {
        console.log("Database error: " + error);
        throw new Error("Failed to get users");
    }
}

// get user by id
export async function getUserById( id: string ) {
    try {
        const userById = await prisma.user.findUnique({
            where: {
                id: id
            }
        });

        return userById
    } catch (error) {
        console.log("Database error: " + error);
        throw new Error("Failed to get user by id");
    }
}

// count user
export async function countUser() {
    try {
        const totalUser = await prisma.user.count({
            where: {
                role: 1
            }
        });

        return totalUser
    } catch (error) {
        console.log("Database error: " + error);
        throw new Error("Failed to count user");
    }
}

// get jurnal user
export async function getJurnal(
    page: number,
    data: number
) {
    try {
        const listJurnal = await prisma.jurnal.findMany({
            skip: page,
            take: data,
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
        const listJurnal = await prisma.jurnal.count()

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

// get message
export async function getMessage(
    page: number,
    data: number
) {
    try {
        const listMessage = await prisma.message.findMany({
            skip: page,
            take: data
        })

        return listMessage
    } catch (error) {
        console.log("Database error: " + error);
        throw new Error("Failed to get message")
    }
}

// count message
export async function countMessage() {
    try {
        const totalMessage = await prisma.message.count()

        return totalMessage
    } catch (error) {
        console.log("Database error: " + error);
        throw new Error("Failed to count message")
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