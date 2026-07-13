import { db } from "@/lib/db";
import { jurnals, comments, profiles } from "@/lib/db/schema";
import { eq, desc, sql } from "drizzle-orm";
import { auth } from "@/auth";

// get jurnal user
export async function getJurnal(
    page: number,
    data: number
) {
    try {
        const session = await auth();
        if (!session?.user) throw new Error("Not authenticated");

        // list jurnal dengan pagination
        const listJurnal = await db.query.jurnals.findMany({
            where: eq(jurnals.userId, session.user.id),
            orderBy: [desc(jurnals.createdAt)],
            limit: data,
            offset: page,
            with: {
              author: true
            }
        });

        return listJurnal.map(doc => ({
            id: doc.id,
            title: doc.title,
            content: doc.content,
            createdAt: doc.createdAt,
            userId: doc.userId,
            User: {
                id: session.user.id,
                name: session.user.name,
                email: session.user.email
            }
        }));
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get jurnal")
    }
}

// count jurnal
export async function countJurnal() {
    try {
        const session = await auth();
        if (!session?.user) throw new Error("Not authenticated");

        const [countResult] = await db
            .select({ count: sql<number>`count(*)` })
            .from(jurnals)
            .where(eq(jurnals.userId, session.user.id));

        return countResult.count;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to count jurnal")
    }
}

// get jurnal detail
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
        throw new Error("Failed to get jurnal detail")
    }
}

// get comment jurnal
export async function getCommentByJurnal(id: string) {
    try {
        const commentList = await db.query.comments.findMany({
            where: eq(comments.jurnalId, id),
            orderBy: [desc(comments.createdAt)],
            with: {
              author: true
            }
        });

        return commentList.map(doc => ({
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
        throw new Error("Failed to get comment jurnal")
    }
}
