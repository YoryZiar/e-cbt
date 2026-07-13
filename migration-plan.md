# Rencana Migrasi Database E-CBT: Dari Appwrite ke Neon PostgreSQL (Drizzle ORM)

Dokumen ini merinci rencana teknis dan langkah-langkah yang diusulkan oleh **Usagi Squad** untuk melakukan migrasi repositori **e-cbt** dari BaaS (Backend-as-a-Service) Appwrite ke serverless database **Neon PostgreSQL** menggunakan **Drizzle ORM** sebagai Query Builder & Migration Tool.

---

## 📋 1. Perbandingan Model Data (Skema Pemetaan)

Berdasarkan berkas penyiapan Appwrite (`scripts/setup-appwrite.js`), berikut adalah pemetaan skema data dari Koleksi Appwrite ke Tabel Relasional PostgreSQL:

### A. Tabel `profiles` (Koleksi `profiles`)
| Atribut Appwrite | Kolom PostgreSQL | Tipe Data PostgreSQL | Keterangan |
| :--- | :--- | :--- | :--- |
| `userId` | `user_id` | `UUID` / `TEXT` | ID Pengguna (Relasi ke Auth/User) |
| `name` | `name` | `VARCHAR(255)` | Nama lengkap |
| `email` | `email` | `VARCHAR(255)` | Email (Unik) |
| `telephone` | `telephone` | `VARCHAR(20)` | Nomor telepon (Opsional) |
| `role` | `role` | `INT` / `user_role` (enum) | Level otorisasi (default: 1) |

### B. Tabel `jurnals` (Koleksi `jurnals`)
| Atribut Appwrite | Kolom PostgreSQL | Tipe Data PostgreSQL | Keterangan |
| :--- | :--- | :--- | :--- |
| `$id` | `id` | `UUID` | Primary Key (Default: `gen_random_uuid()`) |
| `userId` | `user_id` | `UUID` / `TEXT` | Foreign Key ➡️ `profiles.user_id` |
| `title` | `title` | `VARCHAR(255)` | Judul Jurnal |
| `content` | `content` | `TEXT` | Isi konten jurnal |
| `$createdAt` | `created_at` | `TIMESTAMPTZ` | Waktu pembuatan (Default: `NOW()`) |

### C. Tabel `comments` (Koleksi `comments`)
| Atribut Appwrite | Kolom PostgreSQL | Tipe Data PostgreSQL | Keterangan |
| :--- | :--- | :--- | :--- |
| `$id` | `id` | `UUID` | Primary Key |
| `jurnalId` | `jurnal_id` | `UUID` | Foreign Key ➡️ `jurnals.id` (ON DELETE CASCADE) |
| `userId` | `user_id` | `UUID` / `TEXT` | Foreign Key ➡️ `profiles.user_id` |
| `content` | `content` | `TEXT` | Isi komentar |
| `$createdAt` | `created_at` | `TIMESTAMPTZ` | Waktu pembuatan |

### D. Tabel `messages` (Koleksi `messages`)
| Atribut Appwrite | Kolom PostgreSQL | Tipe Data PostgreSQL | Keterangan |
| :--- | :--- | :--- | :--- |
| `$id` | `id` | `UUID` | Primary Key |
| `title` | `title` | `VARCHAR(255)` | Subjek Pesan |
| `email` | `email` | `VARCHAR(255)` | Email Pengirim |
| `message` | `message` | `TEXT` | Konten Pesan |
| `$createdAt` | `created_at` | `TIMESTAMPTZ` | Waktu pengiriman |

---

## 🛠️ 2. Langkah-Langkah Migrasi Teknis

### Tahap 1: Instalasi Dependensi & Setup Drizzle
1. Hapus dependensi Appwrite dari proyek:
   ```bash
   pnpm remove appwrite node-appwrite
   ```
2. Instal dependensi Drizzle ORM, Neon Postgres Driver, dan CLI tools:
   ```bash
   pnpm add drizzle-orm @neondatabase/serverless
   pnpm add -D drizzle-kit pg @types/pg
   ```
3. Buat file konfigurasi Drizzle (`drizzle.config.ts`) di root:
   ```typescript
   import { defineConfig } from "drizzle-kit";
   import dotenv from "dotenv";

   dotenv.config({ path: ".env.local" });

   export default defineConfig({
     schema: "./src/db/schema.ts",
     out: "./drizzle",
     dialect: "postgresql",
     dbCredentials: {
       url: process.env.DATABASE_URL!,
     },
   });
   ```

### Tahap 2: Mendefinisikan Skema Database (Drizzle Schema)
Buat berkas skema di `src/db/schema.ts` (atau `lib/db/schema.ts`) sesuai pemetaan di atas:
```typescript
import { pgTable, uuid, text, varchar, integer, timestamp } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// 1. Profiles Table
export const profiles = pgTable("profiles", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").notNull().unique(), // Link ke Next-Auth atau Auth Provider
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  telephone: varchar("telephone", { length: 20 }),
  role: integer("role").default(1).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 2. Jurnals Table
export const jurnals = pgTable("jurnals", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("user_id").references(() => profiles.userId, { onDelete: "cascade" }).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 3. Comments Table
export const comments = pgTable("comments", {
  id: uuid("id").defaultRandom().primaryKey(),
  jurnalId: uuid("jurnal_id").references(() => jurnals.id, { onDelete: "cascade" }).notNull(),
  userId: text("user_id").references(() => profiles.userId, { onDelete: "cascade" }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 4. Messages Table
export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Relationships
export const jurnalsRelations = relations(jurnals, ({ one, many }) => ({
  author: one(profiles, { fields: [jurnals.userId], references: [profiles.userId] }),
  comments: many(comments),
}));

export const commentsRelations = relations(comments, ({ one }) => ({
  jurnal: one(jurnals, { fields: [comments.jurnalId], references: [jurnals.id] }),
  author: one(profiles, { fields: [comments.userId], references: [profiles.userId] }),
}));
```

### Tahap 3: Pembuatan Koneksi Database (DB Client)
Buat berkas koneksi di `src/db/index.ts` menggunakan driver serverless dari Neon:
```typescript
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });
```

### Tahap 4: Migrasi Autentikasi (`auth.ts` & `proxy.ts`)
*   **Masalah:** Saat ini autentikasi bergantung pada `cookie-session` Appwrite (`appwrite-session` secret).
*   **Solusi:** 
    1. Migrasi alur otentikasi menggunakan pustaka standar yang aman seperti **NextAuth.js (Auth.js) v5** dengan Drizzle Adapter (menyimpan sesi pengguna langsung di tabel database postgres Neon) atau implementasi Session JWT kustom di middleware (`proxy.ts`).
    2. Ganti pembuatan cookie manual di `auth.ts` dengan hashing password menggunakan `bcryptjs` atau `argon2` untuk login bertipe credentials.

### Tahap 5: Refaktorisasi Route Services & Server Actions
Ganti semua pemanggilan `databases.listDocuments`, `databases.createDocument`, dll., menjadi query Drizzle:

#### A. Membuat Jurnal (`app/actions/jurnal/actions.ts`)
*   **Sebelumnya (Appwrite):**
    ```typescript
    const resultJurnal = await databases.createDocument(DATABASE_ID, COLLECTIONS.JURNALS, ID.unique(), {
        title, content, userId
    });
    ```
*   **Sesudahnya (Drizzle):**
    ```typescript
    const [resultJurnal] = await db.insert(jurnals).values({
        title,
        content,
        userId
    }).returning();
    ```

#### B. Mengambil Daftar Jurnal (`app/services/user/queries.ts`)
*   **Sebelumnya (Appwrite):**
    ```typescript
    const listJurnal = await databases.listDocuments(DATABASE_ID, COLLECTIONS.JURNALS, [
        Query.equal("userId", userId)
    ]);
    ```
*   **Sesudahnya (Drizzle):**
    ```typescript
    const listJurnal = await db.query.jurnals.findMany({
        where: eq(jurnals.userId, userId),
        orderBy: [desc(jurnals.createdAt)]
    });
    ```

---

## 📈 3. Rencana Eksekusi Bertahap (Tasks List)

1.  [ ] **Konfigurasi Database Neon:**
    *   Buat project baru di konsol Neon menggunakan Neon CLI (`neonctl projects create`).
    *   Ambil connection string database dan tambahkan ke berkas `.env.local` sebagai `DATABASE_URL`.
2.  [ ] **Instalasi Paket & Konfigurasi Drizzle:**
    *   Instal driver Drizzle, Neon serverless, dan pg.
    *   Tulis file konfigurasi Drizzle (`drizzle.config.ts`).
3.  [ ] **Pembuatan Skema Drizzle & Inisialisasi Migrasi:**
    *   Tulis berkas schema `src/db/schema.ts`.
    *   Jalankan `npx drizzle-kit generate` untuk menghasilkan berkas migrasi SQL.
    *   Jalankan `npx drizzle-kit push` untuk melakukan migrasi skema tabel langsung ke Neon database.
4.  [ ] **Migrasi Logika Autentikasi (NextAuth / JWT Kustom):**
    *   Desain ulang sistem login & register pada `auth.ts` dan middleware `proxy.ts`.
5.  [ ] **Refaktorisasi Server Actions & Services:**
    *   Ubah file tindakan (*actions*) jurnal, message, dan user dari format Appwrite ke Drizzle ORM.
6.  [ ] **Pembersihan Kode Lama:**
    *   Hapus modul Appwrite dari `package.json` dan hapus konfigurasi `appwrite.client.ts`/`appwrite.server.ts`.
7.  [ ] **Verifikasi & Pengujian:**
    *   Jalankan `pnpm run build` untuk memastikan type-safety Next.js berjalan lancar.

---
*Rencana migrasi siap dieksekusi secara bertahap begitu disetujui oleh Master.*
