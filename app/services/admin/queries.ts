import { db } from "@/lib/db";
import { profiles, jurnals, comments, messages } from "@/lib/db/schema";
import { eq, desc, sql } from "drizzle-orm";

// get user
export async function getUser(
    page: number,
    data: number
) {
    try {
        const usersList = await db.query.profiles.findMany({
            where: eq(profiles.role, 1),
            orderBy: [desc(profiles.createdAt)],
            limit: data,
            offset: page
        });

        return usersList.map(doc => ({
            id: doc.userId,
            name: doc.name,
            email: doc.email,
            telephone: doc.telephone,
            createdAt: doc.createdAt
        }));
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get users");
    }
}

// get user by id
export async function getUserById( id: string ) {
    try {
        const doc = await db.query.profiles.findFirst({
            where: eq(profiles.userId, id)
        });

        if (!doc) return null;

        return {
            id: doc.userId,
            name: doc.name,
            email: doc.email,
            telephone: doc.telephone,
            createdAt: doc.createdAt
        };
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get user by id");
    }
}

// count users
export async function countUser() {
    try {
        const [countResult] = await db
            .select({ count: sql<number>`count(*)` })
            .from(profiles)
            .where(eq(profiles.role, 1));

        return countResult.count;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to count users");
    }
}
export const countUsers = countUser;

// get jurnal list admin
export async function getJurnal(
    page: number,
    data: number
) {
    try {
        const jurnalsList = await db.query.jurnals.findMany({
            orderBy: [desc(jurnals.createdAt)],
            limit: data,
            offset: page,
            with: {
              author: true
            }
        });

        return jurnalsList.map(doc => ({
            id: doc.id,
            title: doc.title,
            content: doc.content,
            createdAt: doc.createdAt,
            userId: doc.userId,
            User: {
                id: doc.author.userId,
                name: doc.author.name,
                email: doc.author.email
            }
        }));
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get journals list for admin");
    }
}

// count all journals
export async function countJurnal() {
    try {
        const [countResult] = await db
            .select({ count: sql<number>`count(*)` })
            .from(jurnals);

        return countResult.count;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to count all journals");
    }
}

// get detail jurnal for admin
export async function getJurnalById(id: string) {
    try {
        const doc = await db.query.jurnals.findFirst({
            where: eq(jurnals.id, id),
            with: {
              author: true
            }
        });

        if (!doc) return null;

        return {
            id: doc.id,
            title: doc.title,
            content: doc.content,
            createdAt: doc.createdAt,
            userId: doc.userId,
            User: {
                id: doc.author.userId,
                name: doc.author.name,
                email: doc.author.email
            }
        };
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get jurnal detail for admin");
    }
}

// get list messages
export async function getMessage(
    page: number,
    data: number
) {
    try {
        const messagesList = await db.query.messages.findMany({
            orderBy: [desc(messages.createdAt)],
            limit: data,
            offset: page
        });

        return messagesList.map(doc => ({
            id: doc.id,
            title: doc.title,
            email: doc.email,
            message: doc.message,
            createdAt: doc.createdAt
        }));
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get messages");
    }
}

// count messages
export async function countMessage() {
    try {
        const [countResult] = await db
            .select({ count: sql<number>`count(*)` })
            .from(messages);

        return countResult.count;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to count messages");
    }
}

// get comments by jurnal for admin
export async function getCommentByJurnal(id: string) {
    try {
        const commentsList = await db.query.comments.findMany({
            where: eq(comments.jurnalId, id),
            orderBy: [desc(comments.createdAt)],
            with: {
              author: true
            }
        });

        return commentsList.map(doc => ({
            id: doc.id,
            content: doc.content,
            createdAt: doc.createdAt,
            jurnalId: doc.jurnalId,
            userId: doc.userId,
            User: {
                id: doc.author.userId,
                name: doc.author.name,
                email: doc.author.email
            }
        }));
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get comment list for admin");
    }
}
