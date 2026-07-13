# 🧠 E-CBT — Platform Terapi Perilaku Kognitif Elektronik

Platform **Electronic Cognitive Behavioral Therapy (e-CBT)** dengan desain *dark-mode glassmorphism* modern. Dibangun menggunakan **Next.js 16**, **Neon PostgreSQL**, dan **Drizzle ORM** — hasil migrasi penuh dari Appwrite ke stack database relasional mandiri.

---

## ✨ Fitur Utama

- **Glassmorphism UI** — Antarmuka premium dengan efek blur transparan, palet gelap harmonis, dan mikro-animasi interaktif
- **Role-Based Access Control (RBAC)** — Pembagian hak akses antara **Admin** (role `2`) dan **User** (role `1`) via JWT session
- **Dashboard Admin** — Panel pengelolaan jurnal, pesan masuk, dan komentar pengguna
- **Dashboard User** — Panel personal untuk menulis jurnal CBT harian, melihat feedback, dan mengelola profil
- **CBT Journaling & Comments** — Pengguna menulis jurnal; admin dapat berkomentar untuk mendukung proses terapi
- **Direct Messaging** — Pengguna dapat mengirim pesan langsung ke admin platform

---

## 🛠️ Teknologi

| Layer | Stack |
|-------|-------|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, React 19) |
| **Styling** | [TailwindCSS v4](https://tailwindcss.com/) + Vanilla CSS |
| **Database** | [Neon PostgreSQL](https://neon.tech/) (Serverless) |
| **ORM** | [Drizzle ORM](https://orm.drizzle.team/) |
| **Auth** | JWT Session (`jose`) + bcryptjs |
| **UI Components** | [Ant Design v6](https://ant.design/), [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/) |
| **State Management** | [TanStack Query v5](https://tanstack.com/query) |
| **Validation** | [Zod v4](https://zod.dev/) |
| **Alerts** | [SweetAlert2](https://sweetalert2.github.io/) |
| **Package Manager** | [pnpm](https://pnpm.io/) |

---

## ⚙️ Instalasi & Setup

### Prasyarat
- Node.js 18+
- pnpm (`npm install -g pnpm`)
- Akun [Neon](https://neon.tech/) (database serverless gratis)

### 1. Kloning Repositori
```bash
git clone https://github.com/YoryZiar/e-cbt.git
cd e-cbt
```

### 2. Instal Dependensi
```bash
pnpm install
```

### 3. Konfigurasi Environment
Buat file `.env.local` di root proyek:
```env
# Neon PostgreSQL Connection String
DATABASE_URL=postgresql://<user>:<password>@<host>/neondb?sslmode=require

# JWT Secret (buat string acak minimal 32 karakter)
JWT_SECRET=your_super_secret_jwt_key_here
```

### 4. Push Schema Database
```bash
pnpm drizzle-kit push
```

### 5. Buat Akun Admin
```bash
npx tsx create-admin-pg.ts
```
> Script ini menggunakan `pg` (TCP SSL) yang kompatibel di semua environment termasuk WSL.

### 6. Jalankan Development Server
```bash
pnpm dev
```
Buka [http://localhost:3000](http://localhost:3000).

---

## 📂 Struktur Proyek

```text
e-cbt/
├── app/                    # Next.js App Router
│   ├── (home)/             # Landing page & Auth publik
│   ├── admin/              # Dashboard & Panel Admin
│   ├── user/               # Dashboard & Jurnal User
│   ├── auth/               # Halaman autentikasi
│   └── actions/            # Server Actions (login, jurnal, pesan)
├── components/             # Reusable UI Components
├── lib/
│   ├── db/
│   │   ├── index.ts        # Drizzle client instance
│   │   └── schema.ts       # Schema tabel (profiles, jurnals, comments, messages)
│   ├── utils.ts            # Helper utilities
│   └── zod.ts              # Skema validasi Zod
├── public/                 # Asset statis
├── create-admin-pg.ts      # Script seeding akun admin
├── .env.local              # Environment variables (tidak di-commit)
└── package.json
```

---

## 📜 Skrip yang Tersedia

| Perintah | Fungsi |
|----------|--------|
| `pnpm dev` | Jalankan server pengembangan lokal |
| `pnpm build` | Build aplikasi untuk produksi |
| `pnpm start` | Jalankan hasil build |
| `pnpm lint` | Periksa kualitas kode dengan ESLint |
| `pnpm drizzle-kit push` | Push schema ke database Neon |
| `pnpm drizzle-kit studio` | Buka Drizzle Studio (DB GUI) |
| `npx tsx create-admin-pg.ts` | Buat akun admin pertama |

---

## 📦 Riwayat Rilis

Lihat [changelog.md](./changelog.md) untuk riwayat lengkap perubahan setiap versi.

---

## 🔒 Lisensi

Proyek ini dikembangkan untuk keperluan terapi perilaku kognitif berbasis digital. Perhatikan regulasi privasi data medis sebelum mendistribusikan secara komersial.
