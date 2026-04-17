# PRD: OutCoffee Landing Page (High-Fidelity)

## 1. Project Overview

- **Brand:** OutCoffee
- **Vibe:** Cozy, Warm, Minimalist, Zen.
- **Objective:** Membangun landing page satu halaman yang responsif untuk mengonversi pengunjung menjadi pelanggan kafe (reservasi/kunjungan).

## 2. Tech Stack Recommendation

- **Framework:** React.
- **Styling:** Tailwind CSS.
- **Animations:** Framer Motion.
- **Icons:** Lucide React atau Tabler Icons (SVG based).

## 3. Design Tokens (The Soul)

- **Color Palette:**
  - Primary Background: `#F5F5DC` (Creamy Paper).
  - Text/Primary Action: `#1A1A1A` (Deep Charcoal).
  - Accent: `#FFFFFF` (Putih untuk kartu menu).
- **Typography:**
  - Headings: Fotn `DM Sans`, letter-spacing: `-3.624px`;.
  - Body: Font `Montserrat` , letter-spacing: `-5.436px`;.
- **Global Components:**
  - Buttons: Pill-shaped (Rounded-full), Hover effect: Invert color atau scale up 1.05x.
  - Cards: Border radius `8` atau `10px`.
- **Global Layout:** Seluruh section memiliki padding horizontal 16px (`px-4`) pada pembungkus paling luarnya, kecuali footer nantinya.

## 4. Functional Requirements (Section-by-Section)

### A. Navigation Bar

- **Behavior:** Sticky on scroll dengan efek _blur background_ tipis.
- **Links:** Beranda, Menu, Temukan Kami, Kontak Kami, Reservasi.
- **Mobile:** Hamburger menu yang slide-in dari kanan.

### B. Hero Section ("Santai Dulu Kopi Kemudian")

- **Visual:** Background gambar kopi gambar `/assets/hero-section.png` diberi layer blur 20px dan overlay gelap linear gradient dibagian bawah hingga center gambar memudar dari bawah ke atas bwh 100% ke atas 0%.
- **Action:** 2 Button (Lihat Menu -> Scroll ke Menu, Hubungi Kami -> Link ke WhatsApp) dalam satu grup gap sekitar 20px kedua button margin bottom grup 80px.

### C. Introduction Section ("Tenang...")

- **Logika:** Teks terpusat (center-aligned). Gunakan animasi _fade-in up_ saat user melakukan scroll ke area ini.

### D. Menu Pilihan (Carousel/Grid)

- **Data Structure:** Array of objects (ID, Name, Image, Category).
- **Interaksi:**
  - Desktop: Grid 3 kolom dan bisa di scroll horizontal buat 6 item biar terlihat scroll nya.
  - Mobile: Horizontal scroll/carousel agar hemat ruang.
  - Button: "Lihat Semua Menu" mengarah ke file PDF menu atau toggle expand.
  - scroll navigator dibawah jika di geser maka akan memanjang, default bentuk titik/dot.satu dot mewakili 3 item dalam satu group jika discroll muncul 3 item baru maka dot akan memanjang dan yang sebelumnya memanjang akan kembali menjadi titik/dot. bisa di klik juga untuk mengarah ke grup item yang berisi 3 item tersebut.
  - untuk asset gambar pakai yang 3 gambar ini di folder `/assets`
    1. `americano.jgp`
    2. `iced-matcha-latte.jpg`
    3. `coffee-latte.png`

### E. Gallery & About ("Pelarian Singkat")

- **Layout:** Bento Box atau Masonry Grid.
- **Content:** Gabungan foto interior dan proses pembuatan kopi.
- untuk asset gambar pakai yang 3 gambar ini di folder `/assets`
  1. `barista.jpg`
  2. `cafe.jpg`
  3. `coffee-beans.png`
- **Mobile:** Ubah menjadi vertical stack.

### F. Location & Hours ("Capeknya Valid...")

- **Map:** Integrasi Google Maps Embed atau gambar peta statis yang jika diklik buka Google Maps App peke lokasi ini `3.57935427759428, 98.65498985450418` biar nampak pin lokasi nya.
- **Info:** Jam operasional (Senin - Minggu, 10.00 - 23.00).

### G. Footer & Reservation

- **Action:** Button "Kontak Kami" harus membuka WhatsApp dengan template teks: _"Halo OutCoffee, saya ingin tanya ketersediaan tempat/menu..."_
- **Links:** Social media (Instagram, TikTok).

## 5. Non-Functional Requirements

- **Responsive:** Wajib mobile-first.
- **Performance:** Gambar menggunakan format `.webp` konversi dari assets ku yang format `.jpg dan .png` dengan teknik _lazy loading_.
- **SEO:** Meta tag judul "OutCoffee - Santai Dulu Kopi Kemudian" dan deskripsi yang relevan.
