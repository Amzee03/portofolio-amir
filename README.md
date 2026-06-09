# 🖥️ Portofolio Amir Hamzah

Website portofolio pribadi yang dibangun menggunakan arsitektur modern berbasis Next.js.
Menampilkan informasi pendidikan, keahlian, proyek, dan pengalaman kerja secara interaktif.

---

## 🚀 Tech Stack

| Teknologi | Fungsi |
|-----------|--------|
| **Next.js 14** (App Router) | Framework utama, SSR & SSG |
| **TypeScript** | Type-safety dan kode yang lebih robust |
| **Tailwind CSS** | Utility-first styling yang efisien |
| **Framer Motion** | Animasi scroll reveal dan micro-interactions |
| **Lucide React** | Library ikon modern dan ringan |

---

## 📁 Struktur Folder
src/
├── app/
│   ├── globals.css       # Global styles & Tailwind
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Halaman utama (assembly semua section)
├── components/
│   ├── Navbar.tsx        # Sticky navbar + Glassmorphism + Scroll Spy
│   ├── Hero.tsx          # Hero section dengan animasi profil
│   ├── About.tsx         # Section tentang saya & pendidikan
│   ├── Portfolio.tsx     # Grid proyek dengan card interaktif
│   ├── Skills.tsx        # Hard skills & Soft skills
│   ├── Experience.tsx    # Vertical timeline pengalaman kerja
│   ├── Contact.tsx       # Card kontak & footer
│   └── ScrollReveal.tsx  # Wrapper animasi reusable (Framer Motion)
└── data/
└── portfolio.ts      # Data proyek & pengalaman kerja

---

## ✨ Fitur Utama

- **Sticky Navbar** dengan efek Glassmorphism dan Scroll Spy aktif
- **Smooth Scrolling** antar section
- **Scroll Reveal Animation** — elemen muncul saat di-scroll (fade-in & slide-up)
- **Responsive Design** — tampilan optimal di mobile, tablet, dan desktop
- **Vertical Timeline** untuk section pengalaman kerja
- **Interactive Cards** dengan efek hover lift dan shadow
- **Gradient Text** dan aksen warna Navy Blue yang konsisten

---

## 🛠️ Cara Menjalankan Proyek

1. Clone repositori ini:
```bash
   git clone https://github.com/[username]/portofolio-amir.git
```

2. Masuk ke folder proyek:
```bash
   cd portofolio-amir
```

3. Install dependensi:
```bash
   npm install
```

4. Jalankan server development:
```bash
   npm run dev
```

5. Buka browser dan akses `http://localhost:3000`

---

## 🎨 Desain Sistem

- **Warna Utama:** Navy Blue `#003366` / Navy Dark `#002244` / Navy Light `#e6f3ff`
- **Warna Teks:** Gray-900 (heading) / Gray-600 (deskripsi)
- **Background:** Selang-seling White `#ffffff` dan Gray-50 antar section
- **Font:** Geist Sans (bawaan Next.js)

---

## 📬 Kontak

- **Email:** 2003amirhamzah@gmail.com
- **WhatsApp:** +62 858-9474-4507
- **LinkedIn:** [hamzah-amir](https://linkedin.com/in/hamzah-amir)

---

*© 2025 Portofolio Amir Hamzah — Dibangun dengan Next.js & Tailwind CSS*
