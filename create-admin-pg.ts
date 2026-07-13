/**
 * Script insert admin menggunakan `pg` (node-postgres) via TCP SSL
 * Lebih kompatibel di WSL dibanding @neondatabase/serverless HTTP driver
 */
import { Client } from 'pg';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'dotenv';

// Load .env.local dulu, fallback ke .env
config({ path: '.env.local' });
if (!process.env.DATABASE_URL) {
  config({ path: '.env' });
}

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL tidak ditemukan di .env.local atau .env');
  process.exit(1);
}

async function main() {
  const email = 'admin@cafechatte.com';
  const password = 'admin123';

  const client = new Client({
    connectionString: DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });

  try {
    console.log(`🔌 Connecting ke Neon DB...`);
    await client.connect();
    console.log(`✅ Berhasil connect!`);

    // Cek apakah email sudah ada
    const checkRes = await client.query(
      'SELECT id FROM profiles WHERE email = $1',
      [email]
    );

    if (checkRes.rows.length > 0) {
      console.log(`⚠️  Admin dengan email "${email}" sudah ada. ID: ${checkRes.rows[0].id}`);
      console.log('Tidak ada data baru yang dibuat.');
      return;
    }

    console.log(`🔐 Hashing password...`);
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = uuidv4();

    console.log(`📝 Inserting admin user...`);
    const insertRes = await client.query(
      `INSERT INTO profiles (user_id, name, email, password, role)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, user_id, name, email, role`,
      [userId, 'Admin E-CBT', email, hashedPassword, 2]
    );

    console.log('✅ Admin berhasil dibuat!');
    console.log(insertRes.rows[0]);
  } catch (err: any) {
    console.error('❌ Error:', err.message);
    if (err.detail) console.error('Detail:', err.detail);
  } finally {
    await client.end();
    console.log('🔌 Koneksi ditutup.');
  }
}

main();
