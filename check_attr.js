const { Client, Databases } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://sgp.cloud.appwrite.io/v1')
    .setProject('6a193268003c3b5943f1')
    .setKey('standard_1b138e632d0289d4c389317c3e3a0e4e88806d227e1d8da6a40be58f57a634e7bbe5d5b8cc0402621e824325757c1def1004df9fd3fde06ac1081331680545ab80fded904d63295fd2a5456eeb8959d6d13760b853d8548bddf596faed71da42385c620d6aab792e7de932312caa26d67835d84764d4341de02397c0fb18dc4b');

const databases = new Databases(client);

async function run() {
    try {
        const attr = await databases.getAttribute('ecbt_db', 'profiles', 'role');
        console.log(attr);
    } catch (e) {
        console.error("Error:", e.message);
    }
}

run();
