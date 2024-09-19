import prisma from "@/lib/db";

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

export async function getJurnal() {
    try {
        const listJurnal = await prisma.jurnal.findMany()

        return listJurnal
    } catch (error) {
        console.log("Database error: " + error);
        throw new Error("Failed to get jurnal")
    }
}