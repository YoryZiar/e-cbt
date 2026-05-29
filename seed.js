const { Client, Users, Databases, ID } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1')
    .setProject('6a193268003c3b5943f1')
    .setKey('standard_1b138e632d0289d4c389317c3e3a0e4e88806d227e1d8da6a40be58f57a634e7bbe5d5b8cc0402621e824325757c1def1004df9fd3fde06ac1081331680545ab80fded904d63295fd2a5456eeb8959d6d13760b853d8548bddf596faed71da42385c620d6aab792e7de932312caa26d67835d84764d4341de02397c0fb18dc4b');

const databases = new Databases(client);
const users = new Users(client);

async function run() {
    try {
        const adminUserId = '6a1954b200053a1de971';
        
        console.log("Assigning 'admin' label to user", adminUserId, "...");
        await users.updateLabels(adminUserId, ['admin']);
        console.log("Admin label assigned.");

        // Optionally update the profile to remove role or just recreate it without role
        console.log("Creating or updating profile for existing user...");
        // You might want to update the profile document if it already exists, or recreate it
        // For seed purposes, if the document exists this will throw, but that's fine for a seed script.
        try {
            const profile = await databases.createDocument('ecbt_db', 'profiles', ID.unique(), {
                userId: adminUserId,
                name: 'ecbt',
                email: 'ecbtadmin@gmail.com',
                telephone: '+628814825700'
            });
            console.log('Profile created:', profile.$id);
        } catch (e) {
            console.log("Profile might already exist:", e.message);
        }
    } catch (e) {
        console.error("Error:", e.message);
    }
}

run();
