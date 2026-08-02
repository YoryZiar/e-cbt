# Redesign Hero & CTA Homepage E-CBT — "Lingkaran Tenang"

**Tanggal:** 2026-08-02
**Status:** Approved
**Tipe:** Visual refresh (bukan restrukturisasi konten)

## Ringkasan

Redesign visual pada hero section homepage E-CBT dengan pendekatan **"Lingkaran Tenang"** — floating orbs dengan animasi breathing lambat, teks minimalis empatik, ruang kosong lega, dan CTA dengan pulse ring lembut. Mempertahankan struktur konten yang ada (Hero + About + Contact) serta aesthetic dark glassmorphism ungu yang sudah dipakai.

## Tujuan & Kriteria Sukses

1. Hero terasa lebih menenangkan dan empatik (bukan aggressive marketing).
2. CTA primary menonjol tanpa terasa memaksa.
3. Homepage tetap fast & smooth — tidak ada animasi berat yang membebani performa.
4. Konsisten dengan design system yang ada (`#13072e`, `#b3aaff`, glassmorphism).
5. Fully responsive — mobile tetap terasa minimalis.

## Arsitektur Hero Baru

Grid 2 kolom (desktop) tetap dipertahankan:

| Kolom | Isi |
|-------|-----|
| **Kiri (teks)** | Badge, heading empatik, subtext naratif, CTA (primary + secondary), trust bar |
| **Kanan (visual)** | Ganti gambar `bg-hero-image` dengan **visual orbs** — komposisi atau lingkaran-lingkaran glow lembut dengan animasi floating |

### Struktur Kolom Teks (dari atas ke bawah)

1. **Badge** — "Platform Anti-Bullying Terpercaya" dengan `ShieldCheck` icon (dipertahankan).
2. **Heading** — ganti menjadi kalimat pendek empatik:
   - Line 1: **"Kamu Tidak Sendiri"**
   - Line 2: **"E-CBT"** dengan gradient `from-secondary to-[#d3ccff]`
3. **Subtext** — kalimat naratif menenangkan yang menjelaskan E-CBT.
4. **CTA primary** — **"Mulai Perjalananmu"** dengan pulse ring.
5. **CTA secondary** — **"Pelajari Lebih Lanjut"** dengan outline glass.
6. **Trust bar** — `100% Rahasia • Bebas Biaya • Didukung Ahli` (tersembunyi di mobile).

### Kolom Kanan (Visual Orbs)

Ganti gambar hero dengan komposisi 3 orbs yang bernafas:

| Orb | Warna | Ukuran | Posisi | Animasi |
|-----|-------|--------|--------|---------|
| 1 | `bg-secondary/25` | `w-96 h-96` | Kiri atas | `float-slow` (8s) |
| 2 | `bg-primary/40` | `w-80 h-80` | Kanan tengah | `float-slower` (11s) |
| 3 | `bg-[#d3ccff]/15` | `w-72 h-72` | Bawah kiri | `float-slowest` (14s) |

Orbs memiliki `mix-blend-screen filter blur-[100px]`, bergerak naik-turun ±20px dengan scale 1 → 1.08 → 1, durasi berbeda agar terasa organik.

## Detail Visual & Animasi

### Animasi Masuk (Entrance)

Semua animasi menggunakan fade-in-up yang bertahap (staggered):

| Elemen | Animasi | Durasi | Delay |
|--------|---------|--------|-------|
| Badge | fade-in + slide-down | 0.6s | 0s |
| Heading | fade-in-up | 0.8s | 0.2s |
| Subtext | fade-in-up | 0.8s | 0.4s |
| CTA | fade-in-up | 0.8s | 0.6s |
| Trust bar | fade-in | 1s | 0.8s |

### CTA Primary — Pulse Ring

- Tombol **"Mulai Perjalananmu"** dengan `ArrowRight` icon.
- Efek pulse ring: pseudo-element ring memancar keluar (scale 1 → 1.6, opacity 1 → 0), loop setiap 3s, `border-secondary/40`.
- Hover: `scale-105` + glow shadow `rgba(179,170,255,0.4)` (dipertahankan dari pola yang ada).

### CTA Secondary — Outline Glass

- **"Pelajari Lebih Lanjut"** dengan style glass outline: `border border-white/10 bg-white/5 backdrop-blur-sm`.
- Hover: border jadi `border-secondary/40`, teks putih.

### Trust Bar

- Teks: `text-sm text-slate-400`, ikon `ShieldCheck`, `Sparkles`, `BadgeCheck`.
- Pemisah `•` antar item.
- **Tersembunyi di mobile** (`hidden md:flex`) — fokus pada CTA utama.

## Implementasi Teknis

### File yang diubah

1. **`app/(home)/page.tsx`** — rewrite hero section:
   - Ganti heading, subtext, CTA.
   - Ganti kolom kanan (gambar → visual orbs).
   - Tambah trust bar.
2. **`app/globals.css`** — tambah:
   - `@keyframes float-slow`, `float-slower`, `float-slowest` (breathing orbs).
   - `@keyframes fade-in-up`, `fade-in`, `slide-down`.
   - `@keyframes pulse-ring`.
   - Utilities animation via `@theme`.
   - Media query `prefers-reduced-motion: reduce` untuk menonaktifkan animasi.

### Tidak diubah

- Navbar, About section, Contact section (kecuali micro-refinement hover jika perlu).
- Palet warna, font, dan pattern glassmorphism yang ada.

## Accessibility

- `prefers-reduced-motion: reduce` — semua animasi off, elemen tampil statis.
- Kontras tetap: `text-slate-300` di atas `#13072e`.
- Focus ring tetap ada di CTA.
- Pulse ring hanya dekoratif (tidak menghalangi klik).

## Scope & Non-Goals

**In scope:**
- Hero section redesign (visual orbs, heading, CTA, trust bar).
- Animasi & keyframes baru di globals.css.

**Out of scope:**
- Restrukturisasi About/Contact.
- Ubah warna/font global.
- Backend/data changes.
- Halaman lain selain homepage.

## Testing & Verifikasi

1. `pnpm lint` — tidak ada error lint.
2. `pnpm build` — build sukses tanpa error TypeScript.
3. Manual: cek hero di desktop (2 kolom dengan visual orbs), tablet (orbs tampil lebih kecil), mobile (kolom visual orbs `hidden md:block` — hanya teks + CTA yang tampil; trust bar `hidden md:flex`).
4. Cek `prefers-reduced-motion` di browser devtools — animasi tidak berjalan.
5. Cek pulse ring tidak menghalangi klik tombol.
