const { Client, Databases, Permission, Role } = require("node-appwrite");
require("dotenv").config({ path: ".env" });

const DATABASE_ID = "ecbt_db";
const COLLECTIONS = {
    PROFILES: "profiles",
    JURNALS: "jurnals",
    COMMENTS: "comments",
    MESSAGES: "messages"
};

async function setupAppwrite() {
    console.log("Setting up Appwrite database and collections...");
    
    const client = new Client()
        .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
        .setKey(process.env.NEXT_APPWRITE_KEY);

    const databases = new Databases(client);

    // Create Database
    try {
        await databases.create(DATABASE_ID, "E-CBT Database");
        console.log(`✅ Database ${DATABASE_ID} created.`);
    } catch (error) {
        if (error.code === 409) {
            console.log(`ℹ️ Database ${DATABASE_ID} already exists.`);
        } else {
            console.error("Error creating database:", error);
            throw error;
        }
    }

    // Helper to create collection
    async function createCollection(id, name, permissions) {
        try {
            await databases.createCollection(DATABASE_ID, id, name, permissions);
            console.log(`✅ Collection ${id} created.`);
            return true;
        } catch (error) {
            if (error.code === 409) {
                console.log(`ℹ️ Collection ${id} already exists.`);
                return false;
            }
            throw error;
        }
    }

    // Create Collections
    const permissions = [
        Permission.read(Role.any()),
        Permission.create(Role.users()),
        Permission.update(Role.users()),
        Permission.delete(Role.users()),
    ];

    const isProfilesNew = await createCollection(COLLECTIONS.PROFILES, "Profiles", permissions);
    const isJurnalsNew = await createCollection(COLLECTIONS.JURNALS, "Jurnals", permissions);
    const isCommentsNew = await createCollection(COLLECTIONS.COMMENTS, "Comments", permissions);
    const isMessagesNew = await createCollection(COLLECTIONS.MESSAGES, "Messages", [
        Permission.read(Role.any()),
        Permission.create(Role.any()), // Anyone can send a message
        Permission.update(Role.users()),
        Permission.delete(Role.users()),
    ]);

    // Setup Attributes for Profiles
    if (isProfilesNew) {
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.PROFILES, "userId", 36, true);
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.PROFILES, "name", 255, true);
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.PROFILES, "email", 255, true);
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.PROFILES, "telephone", 20, false);
        await databases.createIntegerAttribute(DATABASE_ID, COLLECTIONS.PROFILES, "role", false, 1, 10, 1);
        console.log(`✅ Attributes created for Profiles.`);
    }

    // Setup Attributes for Jurnals
    if (isJurnalsNew) {
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.JURNALS, "userId", 36, true);
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.JURNALS, "title", 255, true);
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.JURNALS, "content", 10000, true);
        console.log(`✅ Attributes created for Jurnals.`);
    }

    // Setup Attributes for Comments
    if (isCommentsNew) {
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.COMMENTS, "jurnalId", 36, true);
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.COMMENTS, "userId", 36, true);
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.COMMENTS, "content", 10000, true);
        console.log(`✅ Attributes created for Comments.`);
    }

    // Setup Attributes for Messages
    if (isMessagesNew) {
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.MESSAGES, "title", 255, true);
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.MESSAGES, "email", 255, true);
        await databases.createStringAttribute(DATABASE_ID, COLLECTIONS.MESSAGES, "message", 10000, true);
        console.log(`✅ Attributes created for Messages.`);
    }

    console.log("🎉 Appwrite setup completed!");
}

setupAppwrite().catch(console.error);
