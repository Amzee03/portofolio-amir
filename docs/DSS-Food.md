# DSS Food - Sistem Pendukung Keputusan Pemilihan Makanan

DSS Food adalah sebuah aplikasi berbasis web Sistem Pendukung Keputusan (Decision Support System / DSS) yang dirancang untuk membantu pengguna dalam memilih menu makanan atau tempat makan terbaik berdasarkan kriteria-kriteria tertentu.

Aplikasi ini dibangun menggunakan framework **Laravel 12**, dilengkapi dengan **Livewire** untuk interaktivitas komponen secara *real-time*, serta menggunakan **Tailwind CSS** untuk antarmuka pengguna yang modern dan responsif.

## 🚀 Fitur Utama

- **Manajemen Kriteria**: Mengelola kriteria penilaian (contoh: Harga, Rasa, Waktu Saji, dll). Mendukung jenis kriteria *Cost* (biaya) dan *Benefit* (keuntungan).
- **Manajemen Alternatif**: Mengelola daftar pilihan makanan/menu yang akan dievaluasi (contoh: Ayam Penyet, Nasi Goreng Kantek, dll).
- **Penilaian Alternatif (Evaluation)**: Memberikan nilai untuk setiap alternatif berdasarkan kriteria yang ada.
- **Autentikasi Pengguna**: Sistem login dan registrasi yang aman, terintegrasi dengan Laravel Jetstream & Livewire.
- **Data Dummy Siap Pakai**: Dilengkapi dengan *database seeder* untuk memudahkan pengujian aplikasi.

## 🛠️ Teknologi yang Digunakan

- **Backend**: [PHP 8.2+](https://php.net/) & [Laravel 12](https://laravel.com/)
- **Frontend**: [Livewire 3](https://livewire.laravel.com/), [Alpine.js](https://alpinejs.dev/), [Tailwind CSS 4](https://tailwindcss.com/), & Vite
- **Autentikasi**: Laravel Jetstream & Sanctum
- **Database**: SQLite (Default) / MySQL / PostgreSQL

## 📊 Kriteria & Alternatif Default

Berdasarkan data *seeder* bawaan, aplikasi ini menggunakan kriteria berikut untuk mengevaluasi:
1. **Harga** (Rp) - *Cost*
2. **Waktu Saji** (menit) - *Cost*
3. **Rasa** (1-5) - *Benefit*
4. **Porsi** (1-5) - *Benefit*
5. **Gizi** (1-5) - *Benefit*
6. **Kebersihan** (1-5) - *Benefit*

Contoh alternatif makanan bawaan: Ayam Penyet, Nasgor Kantek, Nasgor Kawah, dan Ayam Keju Kawah.

## ⚙️ Persyaratan Sistem

Sebelum menjalankan proyek ini, pastikan sistem Anda telah menginstal:
- **PHP** >= 8.2
- **Composer** (untuk manajemen paket PHP)
- **Node.js** dan **NPM** (untuk manajemen aset frontend)
- Git

## 📖 Panduan Instalasi

Ikuti langkah-langkah berikut untuk menginstal dan menjalankan aplikasi di komputer lokal Anda:

1. **Clone Repositori**
   ```bash
   git clone <url-repositori-anda>
   cd dss-food
   ```

2. **Instal Dependensi PHP (Composer)**
   ```bash
   composer install
   ```

3. **Instal Dependensi Frontend (NPM)**
   ```bash
   npm install
   ```

4. **Konfigurasi Environment**
   Salin file `.env.example` menjadi `.env`.
   ```bash
   cp .env.example .env
   ```
   *Catatan: Secara default proyek ini dikonfigurasi untuk menggunakan SQLite. Jika ingin menggunakan MySQL/PostgreSQL, ubah konfigurasi `DB_CONNECTION` dan detail database terkait di dalam file `.env`.*

5. **Generate Application Key**
   ```bash
   php artisan key:generate
   ```

6. **Jalankan Migrasi & Seeder Database**
   Perintah ini akan membuat struktur tabel di database dan mengisi data awal (Kriteria dan Alternatif).
   ```bash
   php artisan migrate --seed
   ```

7. **Kompilasi Aset Frontend**
   Buka terminal/command prompt baru dan jalankan Vite untuk aset Tailwind CSS:
   ```bash
   npm run dev
   ```
   *(Atau jalankan `npm run build` untuk mem-build aset ke production).*

8. **Jalankan Development Server**
   Di terminal utama, jalankan server bawaan Laravel:
   ```bash
   php artisan serve
   ```

9. **Akses Aplikasi**
   Buka browser Anda dan akses aplikasi melalui: **[http://127.0.0.1:8000](http://127.0.0.1:8000)**

## 🛡️ Lisensi

Proyek ini merupakan proyek *open-sourced* yang dilisensikan di bawah [MIT license](https://opensource.org/licenses/MIT).
