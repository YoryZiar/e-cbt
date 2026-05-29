import { createSessionClient, createAdminClient, DATABASE_ID, COLLECTIONS } from "@/lib/appwrite.server";
import { Query } from "node-appwrite";

// get user
export async function getUser(
    page: number,
    data: number
) {
    try {
        const { databases } = await createSessionClient();
        const users = await databases.listDocuments(DATABASE_ID, COLLECTIONS.PROFILES, [
            Query.offset(page),
            Query.limit(data),
            Query.orderDesc("$createdAt")
        ]);

        return users.documents.map(doc => ({
            id: doc.userId,
            name: doc.name,
            email: doc.email,
            telephone: doc.telephone,
            createdAt: new Date(doc.$createdAt)
        }));
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get users");
    }
}

// get user by id
export async function getUserById( id: string ) {
    try {
        const { databases } = await createSessionClient();
        const userById = await databases.listDocuments(DATABASE_ID, COLLECTIONS.PROFILES, [
            Query.equal("userId", id)
        ]);

        if (userById.documents.length === 0) return null;

        const doc = userById.documents[0];
        return {
            id: doc.userId,
            name: doc.name,
            email: doc.email,
            telephone: doc.telephone,
            createdAt: new Date(doc.$createdAt)
        };
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get user by id");
    }
}

// count user
export async function countUser() {
    try {
        const { databases } = await createSessionClient();
        const totalUser = await databases.listDocuments(DATABASE_ID, COLLECTIONS.PROFILES, [
            Query.limit(1)
        ]);

        return totalUser.total;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to count user");
    }
}

// get jurnal user
export async function getJurnal(
    page: number,
    data: number
) {
    try {
        const { databases } = await createSessionClient();
        const listJurnal = await databases.listDocuments(DATABASE_ID, COLLECTIONS.JURNALS, [
            Query.offset(page),
            Query.limit(data),
            Query.orderDesc("$createdAt")
        ]);

        const userIds = [...new Set(listJurnal.documents.map(j => j.userId))];
        const profiles = userIds.length > 0 ? await databases.listDocuments(DATABASE_ID, COLLECTIONS.PROFILES, [
            Query.equal("userId", userIds)
        ]) : { documents: [] };

        const profileMap = profiles.documents.reduce((acc, profile) => {
            acc[profile.userId] = profile;
            return acc;
        }, {} as any);

        return listJurnal.documents.map(doc => ({
            id: doc.$id,
            title: doc.title,
            content: doc.content,
            createdAt: new Date(doc.$createdAt),
            userId: doc.userId,
            User: profileMap[doc.userId] ? {
                id: profileMap[doc.userId].$id || profileMap[doc.userId].userId,
                name: profileMap[doc.userId].name,
                email: profileMap[doc.userId].email,
                telephone: profileMap[doc.userId].telephone
            } : { name: "Unknown User", email: "Unknown Email" }
        }));
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get jurnal")
    }
}

// count jurnal
export async function countJurnal() {
    try {
        const { databases } = await createSessionClient();
        const listJurnal = await databases.listDocuments(DATABASE_ID, COLLECTIONS.JURNALS, [
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
        const { databases } = await createAdminClient();
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

// get message
export async function getMessage(
    page: number,
    data: number
) {
    try {
        const { databases } = await createSessionClient();
        const listMessage = await databases.listDocuments(DATABASE_ID, COLLECTIONS.MESSAGES, [
            Query.offset(page),
            Query.limit(data),
            Query.orderDesc("$createdAt")
        ]);

        return listMessage.documents.map(doc => ({
            id: doc.$id,
            title: doc.title,
            email: doc.email,
            message: doc.message,
            createdAt: new Date(doc.$createdAt)
        }));
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to get message")
    }
}

// count message
export async function countMessage() {
    try {
        const { databases } = await createSessionClient();
        const totalMessage = await databases.listDocuments(DATABASE_ID, COLLECTIONS.MESSAGES, [
            Query.limit(1)
        ]);

        return totalMessage.total;
    } catch (error) {
        console.log("Database error: ", error);
        throw new Error("Failed to count message")
    }
}

// get comment
export async function getCommentByJurnal(id: string) {
    try {
        const { databases } = await createAdminClient();
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