# 📦 Changelog — E-CBT

Semua perubahan signifikan pada proyek ini didokumentasikan di sini.
Format mengacu pada [Keep a Changelog](https://keepachangelog.com/id/1.0.0/).

---

## [0.3.0] — Juli 2026

### Added
- Script `create-admin-pg.ts` — seeder akun admin via `pg` TCP SSL (kompatibel WSL)
- Drizzle ORM schema: `profiles`, `jurnals`, `comments`, `messages`
- JWT session mandiri menggunakan `jose` + `bcryptjs`
- Validasi ketat di seluruh Server Actions menggunakan **Zod v4**

### Changed
- **Migrasi penuh** dari Appwrite ke **Neon PostgreSQL** menggunakan **Drizzle ORM**
- Refaktor autentikasi dari Appwrite Auth ke JWT session mandiri
- Hapus konfigurasi Prisma (sisa migrasi awal) dari `package.json`

### Fixed
- `cookies()` dipanggil secara sinkron di Next.js 16 — sekarang selalu `await`
- Build-time database connection error dengan fallback URI saat build

---

## [0.2.0] — Juni 2026

### Added
- Autentikasi lengkap: login, register, signout via Appwrite Auth
- Dashboard Admin: lihat & kelola jurnal, pesan, dan komentar pengguna
- Dashboard User: buat & hapus jurnal CBT harian, kirim pesan ke admin
- Sistem komentar admin pada jurnal pengguna
- Loading states terstandarisasi di seluruh halaman

### Changed
- RBAC menggunakan label `admin` di Appwrite

---

## [0.1.0] — Mei 2026

### Added
- Initial release: quiz engine CBT, struktur App Router Next.js 16
- UI *dark-mode glassmorphism* dengan TailwindCSS v4
- Integrasi awal dengan Appwrite (Auth & Database)
- Template environment variables (`.env.example`)
- Dokumentasi awal `README.md`
