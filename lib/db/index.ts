import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  // During build static generation, Vercel may build pages without the environment variable injected
  // if it is not configured correctly in the dashboard, or we can provide a dummy fallback
  // to prevent compilation errors.
  console.warn("Warning: DATABASE_URL is not set. Using fallback for build compatibility.");
}

const sql = neon(databaseUrl || "postgresql://db_owner:fallback@localhost/db?sslmode=require");
export const db = drizzle(sql, { schema });
