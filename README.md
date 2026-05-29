# 🌟 E-CBT (Electronic Cognitive Behavioral Therapy) Platform

Platform terapi perilaku kognitif elektronik (e-CBT) yang dirancang dengan desain modern, bersih, dan estetik bertemakan *dark-mode glassmorphism*. Aplikasi ini dibangun menggunakan **Next.js 16** dan terintegrasi dengan **Appwrite** sebagai Backend-as-a-Service (BaaS) untuk pengelolaan autentikasi, database, dan hak akses pengguna.

---

## 🚀 Fitur Utama

- **Aesthetic Glassmorphism UI**: Antarmuka premium dengan efek blur transparan yang dinamis, palet warna gelap yang harmonis, dan mikro-animasi interaktif untuk kenyamanan maksimal pengguna.
- **Role-Based Access Control (RBAC)**: Pembagian hak akses yang aman antara **Admin** (menggunakan label `admin` di Appwrite) dan **User** biasa.
- **Dashboard Admin**: Panel pengelolaan terpusat untuk memantau aktivitas jurnal pengguna, pesan masuk, dan statistik platform secara *real-time*.
- **Dashboard User**: Panel personal bagi pengguna untuk menulis jurnal terapi, membaca feedback, dan mengelola profil pribadi dengan aman.
- **CBT Journaling & Comments**: Pengguna dapat menulis jurnal harian CBT mereka, dan admin dapat memberikan interaksi atau komentar untuk membantu proses terapi.
- **Direct Messaging System**: Layanan pesan instan bagi pengguna untuk menghubungi admin platform jika memerlukan bantuan tambahan.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Framework**: [Next.js 16](https://nextjs.org/) (App Router, React 19)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/) & Vanilla CSS
- **Backend-as-a-Service**: [Appwrite](https://appwrite.io/) (Auth & Database)
- **UI Components & Icons**: [Ant Design](https://ant.design/) & [Lucide React](https://lucide.dev/)
- **Alerts**: [SweetAlert2](https://sweetalert2.github.io/) dengan integrasi React

---

## ⚙️ Persyaratan Sistem & Instalasi

Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18+) dan [pnpm](https://pnpm.io/) di perangkat Anda.

### 1. Kloning Repositori
```bash
git clone https://github.com/YoryZiar/e-cbt.git
cd e-cbt
```

### 2. Instal Dependensi
Proyek ini menggunakan **pnpm** sebagai package manager:
```bash
pnpm install
```

### 3. Konfigurasi Environment Variables
Salin file `.env.example` menjadi `.env` baru:
```bash
cp .env.example .env
```

Buka file `.env` dan lengkapi nilai variabel berikut menggunakan informasi dari dashboard Appwrite Console Anda:
```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT_ID=id_project_anda
NEXT_APPWRITE_KEY=api_key_secret_anda
```
> ⚠️ **PENTING**: Pastikan API Key (`NEXT_APPWRITE_KEY`) yang Anda buat memiliki hak akses penuh (scopes) untuk **users** dan **databases**.

### 4. Inisialisasi Database Appwrite
Jalankan skrip otomatis berikut untuk membuat database, collections, atribut, dan aturan perizinan (permissions) di Appwrite Anda secara otomatis:
```bash
node scripts/setup-appwrite.js
```

### 5. Jalankan Development Server
Setelah inisialisasi selesai, jalankan server lokal:
```bash
pnpm dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---

## 📂 Struktur Folder Proyek

```text
e-cbt/
├── app/                  # Next.js App Router (Halaman & Layout)
│   ├── (home)/           # Landing page & Auth publik
│   ├── admin/            # Dashboard & Panel Admin
│   ├── user/             # Dashboard & Jurnal User/Pasien
│   └── auth/             # Halaman penanganan autentikasi
├── components/           # Reusable UI Components
├── lib/                  # Helper & Integrasi Appwrite (Client & Server)
├── public/               # Asset statis (Gambar, SVG, dll)
├── scripts/              # Skrip setup otomatis (setup-appwrite.js)
├── .env.example          # Template konfigurasi environment
├── README.md             # Dokumentasi proyek
└── package.json          # Dependensi & Skrip proyek
```

---

## 📄 Skrip yang Tersedia

Dalam file `package.json`, Anda dapat menjalankan:

- `pnpm dev` : Menjalankan server pengembangan lokal.
- `pnpm build` : Membangun aplikasi Next.js untuk produksi.
- `pnpm start` : Menjalankan aplikasi hasil build untuk produksi.
- `pnpm lint` : Menjalankan ESLint untuk memeriksa kualitas kode.

---

## 🔒 Lisensi

Proyek ini dibuat untuk keperluan medis & terapi kognitif elektronik yang aman. Silakan merujuk pada kebijakan privasi data medis sebelum mendistribusikan secara komersial.
