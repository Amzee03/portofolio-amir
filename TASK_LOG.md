# 📋 Task Log — Portofolio Amir Hamzah

Dokumen ini mencatat progress pembangunan ulang website portofolio dari HTML statis ke arsitektur modern (Next.js + Tailwind CSS + Framer Motion + Lucide React).

---

## Status Legend
- ✅ Selesai
- 🔄 Sedang Dikerjakan
- ⏳ Belum Dimulai

---

## Kurikulum & Progress

| No | Tahap | Deskripsi | Status |
|----|-------|-----------|--------|
| 1 | **Setup Awal** | Instalasi Next.js (App Router), Tailwind CSS, Framer Motion, dan Lucide React | ✅ Selesai |
| 2 | **Konfigurasi & Struktur Folder** | Pembersihan kode bawaan Next.js, setup `globals.css`, `page.tsx` placeholder, pembuatan folder `components/`, `data/`, `lib/`, dan file data `portfolio.ts` | ✅ Selesai |
| 3 | **Navbar** | Sticky navbar dengan efek Glassmorphism, menu navigasi desktop, dan fitur Scroll Spy | ✅ Selesai |
| 4 | **Hero Section** | Layout dua kolom (teks kiri, foto kanan), gradient text, dua tombol CTA, animasi pulse/glow pada foto profil | ✅ Selesai |
| 5 | **Section Tentang & Keahlian** | 2 card sejajar (Pendidikan & Keahlian Utama), tombol Buka CV, section Skills dengan Hard Skills dan Soft Skills | ✅ Selesai |
| 6 | **Section Portofolio & Pengalaman** | Grid card portofolio (3 kolom desktop), mapping dari `data/portfolio.ts`, layout Vertical Timeline untuk pengalaman kerja | ✅ Selesai |
| 7 | **Section Kontak, Footer & Assembly** | 3 card kontak (Email, WhatsApp, LinkedIn), tombol CV, footer copyright, dan perakitan semua komponen di `page.tsx` | ✅ Selesai |
| 8 | **Animasi (Framer Motion)** | Implementasi scroll reveal (fade-in & slide-up), hover lift effect pada semua card | ✅ Selesai |
| 9 | **Dokumentasi & GitHub** | Inisialisasi repositori Git, commit seluruh kode, push ke GitHub sebagai dokumentasi proyek | ✅ Selesai |
| 10 | **Build, Deploy & Custom Domain** | Build produksi, deploy ke Vercel, beli domain Hostinger, dan koneksi domain ke Vercel | 🔄 Sedang Dikerjakan |

---

## Catatan Pengerjaan

### ✅ Tahap 1 — Setup Awal
- Proyek dibuat dengan `create-next-app@latest` menggunakan flag TypeScript, Tailwind, App Router, dan src-dir.
- Dependensi tambahan yang diinstal: `framer-motion`, `lucide-react`.

### ✅ Tahap 2 — Konfigurasi & Struktur Folder
- `globals.css` dibersihkan dan ditambahkan `scroll-behavior: smooth`.
- `page.tsx` dikosongkan dan diganti dengan placeholder sementara.
- Struktur folder dibuat: `src/components/`, `src/data/`, `src/lib/`.
- File data dibuat: `src/data/portfolio.ts` berisi `portfolioData` dan `experienceData`.

### ✅ Tahap 3 — Navbar
- File dibuat: `src/components/Navbar.tsx`.
- Implementasi: Sticky fixed navbar, efek Glassmorphism (backdrop-blur + bg putih transparan).
- Menu navigasi desktop dengan 6 item: Beranda, Tentang, Portofolio, Keahlian, Pengalaman, Kontak.
- Scroll Spy aktif menggunakan useEffect + window scroll event listener.
- Smooth scroll on click menggunakan scrollIntoView.

### ✅ Tahap 4 — Hero Section
- File dibuat: `src/components/Hero.tsx`.
- Layout 2 kolom responsif (teks kiri, foto kanan), urutan mobile dibalik dengan order utility.
- Gradient text inline style pada kata "UI/UX Designer".
- Dua tombol CTA: solid gradient navy dan outline navy.
- Animasi pulse/glow dua lingkaran berlapis di belakang foto profil.
- Foto profil menggunakan next/image dengan path `/images/profile.jpg`.

### ✅ Tahap 5 — Section Tentang & Keahlian
- File dibuat: `src/components/About.tsx`.
- File dibuat: `src/components/Skills.tsx`.
- About: 2 card sejajar (Pendidikan & Keahlian Utama), border-l accent navy, tombol Buka CV.
- Skills: 2 card (Hard Skills & Soft Skills) dengan dot navy, data dari array lokal di dalam komponen.

### ✅ Tahap 6 — Section Portofolio & Pengalaman
- File dibuat: `src/components/Portfolio.tsx`.
- File dibuat: `src/components/Experience.tsx`.
- Portfolio: grid responsif 3 kolom desktop, card dengan thumbnail placeholder, tool chips, tombol Lihat Project. Data dari `portfolioData`.
- Experience: Vertical Timeline dengan garis gradient navy, node lingkaran berikon Briefcase, kartu konten per item. Data dari `experienceData`.
- `page.tsx` diperbarui dengan urutan section yang benar: Hero → About → Portfolio → Skills → Experience.

### ✅ Tahap 7 — Section Kontak, Footer & Assembly
- File dibuat: `src/components/Contact.tsx` (mencakup section kontak dan footer).
- Kontak: 3 card interaktif bertipe anchor tag (Email, WhatsApp, LinkedIn) dengan icon dinamis via iconMap.
- Tombol "Tampilkan CV Lengkap" dengan style gradient navy.
- Footer dengan teks copyright dan credit teknologi.
- `page.tsx` difinalisasi dengan urutan lengkap semua komponen.
- `globals.css` ditambahkan `scroll-margin-top: 80px` untuk menghindari overlap dengan fixed navbar.

### ✅ Tahap 8 — Animasi (Framer Motion)
- File dibuat: `src/components/ScrollReveal.tsx` sebagai wrapper animasi reusable.
- Hero.tsx: animasi `motion` langsung (animate) dengan stagger delay pada setiap elemen teks dan foto.
- About.tsx & Skills.tsx: ScrollReveal dengan direction left/right pada setiap card.
- Portfolio.tsx & Experience.tsx: ScrollReveal dengan stagger delay berbasis index pada setiap card dan item timeline.
- Contact.tsx: ScrollReveal pada judul, setiap card kontak, dan tombol CV.

### ✅ Tahap 9 — Dokumentasi & GitHub
- File dibuat: `README.md` dengan dokumentasi lengkap tech stack, struktur folder, dan fitur.
- Verifikasi `.gitignore` untuk keamanan file environment.
- Commit final dengan pesan konvensional (Conventional Commits).
- Repositori berhasil di-push ke GitHub.

### 🔄 Tahap 10 — Build, Deploy & Custom Domain
- Fase 1: Build produksi lokal dan deploy ke Vercel.
- Fase 2: Pembelian domain dari Hostinger.
- Fase 3: Koneksi domain Hostinger ke Vercel.

## 📝 Catatan Revisi

### 🔄 Revisi Icon & Emoticon (setelah Tahap 8)
- **Masalah:** Penggunaan emoji (🎨, 💻, ✏️, ⚙️, 🤝, 📄, 🖥️, 👋) tidak konsisten secara visual.
- **Solusi:** Semua emoji/emoticon diganti dengan komponen Lucide React agar konsisten dalam 1 tema (warna navy #003366).
- **Pengecualian:** Icon per item Hard Skills menggunakan warna brand asli masing-masing teknologi.
- **File yang diubah:** `About.tsx`, `Skills.tsx`, `Portfolio.tsx`, `Contact.tsx`, `Hero.tsx`.

---

*Terakhir diperbarui: Tahap 10*
