import prisma from "@/lib/db";

// get user
export async function getUser() {
    try {
        const users = await prisma.user.findMany({
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