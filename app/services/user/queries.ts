import { createSessionClient, DATABASE_ID, COLLECTIONS } from "@/lib/appwrite.server";
import { Query } from "node-appwrite";
import { auth } from "@/auth";

// get jurnal user
export async function getJurnal(
    page: number,
    data: number
) {
    try {
        const session = await auth();
        if (!session?.user) throw new Error("Not authenticated");

        const { databases } = await createSessionClient();
        const listJurnal = await databases.listDocuments(DATABASE_ID, COLLECTIONS.JURNALS, [
            Query.equal("userId", session.user.id),
            Query.offset(page),
            Query.limit(data),
            Query.orderDesc("$createdAt")
        ]);

        // Map to expected Prisma format
        return listJurnal.documents.map(doc => ({
            id: doc.$id,
            title: doc.title,
            content: doc.content,
            createdAt: new Date(doc.$createdAt),
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

        const { databases } = await createSessionClient();
        const listJurnal = await databases.listDocuments(DATABASE_ID, COLLECTIONS.JURNALS, [
            Query.equal("userId", session.user.id),
            Query.limit(1)
        ]);

        return listJurnal.total;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to count jurnal")
    }
}

// get jurnal by id
export async function getJurnalById(id: string) {
    try {
        const { databases } = await createSessionClient();
        const doc = await databases.getDocument(DATABASE_ID, COLLECTIONS.JURNALS, id);
        
        return {
            id: doc.$id,
            title: doc.title,
            content: doc.content,
            createdAt: new Date(doc.$createdAt),
            userId: doc.userId
        };
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get jurnal")
    }
}

// get comment
export async function getCommentByJurnal(id: string) {
    try {
        const { databases } = await createSessionClient();
        const commentByJurnal = await databases.listDocuments(DATABASE_ID, COLLECTIONS.COMMENTS, [
            Query.equal("jurnalId", id),
            Query.orderAsc("$createdAt")
        ]);

        const userIds = [...new Set(commentByJurnal.documents.map(c => c.userId))];
        const profiles = userIds.length > 0 ? await databases.listDocuments(DATABASE_ID, COLLECTIONS.PROFILES, [
            Query.equal("userId", userIds)
        ]) : { documents: [] };

        const profileMap = profiles.documents.reduce((acc, profile) => {
            acc[profile.userId] = profile;
            return acc;
        }, {} as any);

        return commentByJurnal.documents.map(doc => ({
            id: doc.$id,
            jurnalId: doc.jurnalId,
            userId: doc.userId,
            content: doc.content,
            createdAt: new Date(doc.$createdAt),
            User: profileMap[doc.userId] ? {
                id: profileMap[doc.userId].$id || profileMap[doc.userId].userId,
                name: profileMap[doc.userId].name,
                email: profileMap[doc.userId].email,
                telephone: profileMap[doc.userId].telephone
            } : { name: "Unknown User", email: "Unknown Email" }
        }));
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get comment")
    }
}