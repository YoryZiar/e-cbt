# Redesign Hero & CTA Homepage E-CBT — "Lingkaran Tenang" Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the E-CBT homepage hero with a calming "Lingkaran Tenang" aesthetic — breathing orbs, empathetic headline, pulse-ring CTA, and trust bar — while keeping the existing page structure.

**Architecture:** A pure visual refresh. `app/(home)/page.tsx` hero section is rewritten (text + CTA + visual orbs replacing the hero image), and custom animations/keyframes are added to `app/globals.css` via Tailwind v4 `@theme` + `@keyframes`. No backend, data, or other page changes.

**Tech Stack:** Next.js 16 (App Router), React 19, TailwindCSS v4 (CSS-first config), lucide-react, `next/link`.

## Global Constraints

- Color palette is fixed: background `#13072e`, primary `#2e1065`, secondary `#b3aaff`, gradient text `from-secondary to-[#d3ccff]`.
- Do NOT remove `--background-image-hero-image` from `globals.css` — it is also used by `app/(home)/quiz/page.tsx`.
- Do NOT modify Navbar, About section, or Contact section.
- All animations must respect `prefers-reduced-motion: reduce` (disabled).
- No new dependencies. Use existing lucide-react icons: `ShieldCheck`, `Heart`, `Users`, `ArrowRight`, `Sparkles`, `BadgeCheck`.
- Copy is Indonesian, matching existing tone.
- No test framework exists in this repo — verification is `pnpm lint` and `pnpm build`.

---

### Task 1: Add breathing orb, entrance, and pulse-ring animations to globals.css

**Files:**
- Modify: `app/globals.css` — add keyframes + `@theme` animation utilities

**Interfaces:**
- Produces: animation utilities `animate-float-slow`, `animate-float-slower`, `animate-float-slowest`, `animate-fade-in-up`, `animate-fade-in`, `animate-slide-down`, `animate-pulse-ring` usable as Tailwind classes. Also a `hero-orb` component class (absolute positioned, blurred, `mix-blend-screen`).

- [ ] **Step 1: Add keyframes to globals.css**

Append these keyframes after the existing `@theme` block (after line 33):

```css
@keyframes float-slow {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-20px) scale(1.08); }
}

@keyframes float-slower {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-16px) scale(1.05); }
}

@keyframes float-slowest {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-12px) scale(1.04); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slide-down {
  from { opacity: 0; transform: translateY(-16px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 1; }
  70% { transform: scale(1.5); opacity: 0; }
  100% { transform: scale(1.5); opacity: 0; }
}
```

- [ ] **Step 2: Add animation utilities to the @theme block**

Inside the existing `@theme { ... }` block (lines 4-33), add these before the closing `}`:

```css
  --animate-float-slow: float-slow 8s ease-in-out infinite;
  --animate-float-slower: float-slower 11s ease-in-out infinite;
  --animate-float-slowest: float-slowest 14s ease-in-out infinite;
  --animate-fade-in-up: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
  --animate-fade-in: fade-in 1s ease-in-out both;
  --animate-slide-down: slide-down 0.6s ease-out both;
  --animate-pulse-ring: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

- [ ] **Step 3: Add hero-orb component class and reduced-motion fallback**

Append after the keyframes (end of file):

```css
.hero-orb {
  position: absolute;
  border-radius: 9999px;
  filter: blur(100px);
  mix-blend-mode: screen;
  opacity: 0.7;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .animate-float-slow,
  .animate-float-slower,
  .animate-float-slowest,
  .animate-fade-in-up,
  .animate-fade-in,
  .animate-slide-down,
  .animate-pulse-ring {
    animation: none;
  }
  .hero-orb {
    opacity: 0.4;
  }
}
```

- [ ] **Step 4: Verify build passes**

Run: `pnpm lint && pnpm build`
Expected: Both succeed with no errors. CSS compiles (build confirms no broken Tailwind utilities).

- [ ] **Step 5: Commit**

```bash
git add app/globals.css
git commit -m "feat: add breathing orb, entrance, and pulse-ring animations to globals"
```

---

### Task 2: Rewrite the homepage hero section with "Lingkaran Tenang" design

**Files:**
- Modify: `app/(home)/page.tsx` — hero section (lines 9-48)

**Interfaces:**
- Consumes: `animate-float-slow`, `animate-float-slower`, `animate-float-slowest`, `animate-fade-in-up`, `animate-fade-in`, `animate-slide-down`, `animate-pulse-ring`, `.hero-orb` (from Task 1).
- Produces: The rewritten homepage hero that renders on `/`.

- [ ] **Step 1: Rewrite the hero section JSX**

Replace lines 9-48 (the entire `<section ... id='Home'>` hero block) with the following:

```tsx
<section className='relative flex items-center justify-center pt-40 pb-32 px-4' id='Home'>
    {/* Background decorative gradients */}
    <div className="absolute top-0 left-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-primary/40 rounded-full mix-blend-screen filter blur-[100px] opacity-70"></div>
    <div className="absolute top-20 right-1/4 w-72 h-72 lg:w-96 lg:h-96 bg-secondary/20 rounded-full mix-blend-screen filter blur-[100px] opacity-70"></div>

    <div className='container relative z-10 mx-auto max-w-6xl'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className='flex flex-col space-y-6 text-center lg:text-left'>
                <div className="inline-flex items-center justify-center lg:justify-start space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-fit mx-auto lg:mx-0 backdrop-blur-sm animate-slide-down">
                    <ShieldCheck className="w-4 h-4 text-secondary" />
                    <span className="text-slate-300 text-xs md:text-sm font-medium tracking-wide">Platform Anti-Bullying Terpercaya</span>
                </div>

                <h1 className='font-bold text-5xl lg:text-6xl leading-tight text-white tracking-tight font-sans animate-fade-in-up' style={{ animationDelay: '0.2s' }}>
                    Kamu Tidak Sendiri
                    <span className="block bg-gradient-to-r from-secondary to-[#d3ccff] bg-clip-text text-transparent">
                        Bersama E-CBT
                    </span>
                </h1>

                <p className='text-slate-300 text-lg font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up' style={{ animationDelay: '0.4s' }}>
                    Electronic Cognitive Behavioral Therapy (E-CBT) hadir sebagai ruang aman bagi siswa-siswi. Di sini, kami menemani setiap langkahmu untuk bercerita, memahami perasaan, dan tumbuh dengan lebih tenang.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <Link href="/start" className='group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-primary bg-secondary rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(179,170,255,0.4)] w-full sm:w-auto'>
                        <span className="absolute inset-0 rounded-full border-2 border-secondary/40 animate-pulse-ring"></span>
                        Mulai Perjalananmu
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="#About" className='px-8 py-4 font-medium text-slate-300 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full hover:text-white hover:border-secondary/40 transition-all duration-300 w-full sm:w-auto'>
                        Pelajari Lebih Lanjut
                    </Link>
                </div>

                <div className="pt-4 hidden md:flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary" />100% Rahasia</span>
                    <span className="text-secondary/40">•</span>
                    <span className="inline-flex items-center gap-2"><Sparkles className="w-4 h-4 text-secondary" />Bebas Biaya</span>
                    <span className="text-secondary/40">•</span>
                    <span className="inline-flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-secondary" />Didukung Ahli</span>
                </div>
            </div>

            <div className="relative hidden md:block w-full h-[350px] lg:h-[500px] mt-10 lg:mt-0">
                <div className="hero-orb animate-float-slow w-96 h-96 bg-secondary/25 -top-10 -left-10"></div>
                <div className="hero-orb animate-float-slower w-80 h-80 bg-primary/40 top-1/3 right-0"></div>
                <div className="hero-orb animate-float-slowest w-72 h-72 bg-[#d3ccff]/15 bottom-0 left-1/4"></div>
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/10"></div>
                </div>
            </div>
        </div>
    </div>
</section>
```

- [ ] **Step 2: Update the lucide-react import**

Modify line 3 to add `Sparkles` and `BadgeCheck`:

```tsx
import { ArrowRight, ShieldCheck, Heart, Users, Sparkles, BadgeCheck } from 'lucide-react'
```

- [ ] **Step 3: Verify lint & build pass**

Run: `pnpm lint && pnpm build`
Expected: Both succeed. No unused import errors (confirm `Heart`, `Users` still used in About section below).

- [ ] **Step 4: Manual verification**

Run: `pnpm dev`
Expected:
- Desktop (`md+`): 2-column layout, hero image replaced with glass panel + 3 breathing orbs.
- Mobile (`<md`): single column, visual orbs container `hidden`, trust bar `hidden`.
- CTA pulse ring animates every 3s; does not block click.
- With `prefers-reduced-motion: reduce` enabled in devtools, orbs static, no entrance animations.

- [ ] **Step 5: Commit**

```bash
git add app/\(home\)/page.tsx
git commit -m "feat: redesign homepage hero with calm orbs, empathetic headline, and pulse CTA"
```

---

## Self-Review Notes

**Spec coverage:**
- Breathing orbs → Task 1 (keyframes) + Task 2 (JSX orbs) ✓
- Empathetic headline "Kamu Tidak Sendiri" → Task 2 Step 1 ✓
- Pulse-ring CTA "Mulai Perjalananmu" → Task 2 Step 1 ✓
- Secondary CTA outline glass → Task 2 Step 1 ✓
- Trust bar (hidden mobile) → Task 2 Step 1 ✓
- Staggered entrance animations → Task 2 Step 1 (delays 0/0.2/0.4/0.6/0.8s) ✓
- `prefers-reduced-motion` → Task 1 Step 3 ✓
- Visual orbs hidden on mobile (`hidden md:block`) → Task 2 Step 1 ✓

**Placeholders:** None — all code is inline.

**Type consistency:** Animation utility names in Task 2 match those produced in Task 1. lucide icon names `Sparkles`, `BadgeCheck`, `ArrowRight`, `ShieldCheck` are all valid lucide-react exports.
