# E-Voting Musyran IPM 2025

Sistem E-Voting untuk pemilihan Formatur IPM (Ikatan Pelajar Muhammadiyah) SMK Muhammadiyah 1 Sangatta Utara.

## Fitur

- **Landing Page** - Menampilkan statistik voting real-time dan daftar calon formatur
- **Dashboard Admin** - Kelola data siswa, calon formatur, dan pantau hasil voting
- **Dashboard Panitia** - Mode monitor bilik suara dan scanner QR Code
- **Mode Darurat** - Input suara manual jika terjadi kendala teknis
- **Real-time Updates** - Data voting terupdate secara real-time menggunakan Firebase

## Tech Stack

- **Framework**: Next.js 16
- **UI**: React 19, Tailwind CSS, Radix UI, shadcn/ui
- **Database**: Firebase Firestore
- **Charts**: Recharts
- **Deployment**: Netlify

## Instalasi

```bash
# Clone repository
git clone https://github.com/username/musyran2025.git
cd musyran2025

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

## Struktur Folder

```
├── app/
│   ├── admin/dashboard/    # Dashboard admin
│   ├── panitia/[id]/       # Dashboard panitia per bilik
│   ├── darurat/            # Mode voting darurat
│   ├── login/              # Halaman login
│   └── page.tsx            # Landing page
├── components/ui/          # Komponen UI (shadcn)
├── lib/
│   ├── firebase.ts         # Konfigurasi Firebase
│   └── utils.ts            # Utility functions
└── public/images/          # Asset gambar
```

## Environment

Project ini menggunakan Firebase. Konfigurasi sudah tersedia di `lib/firebase.ts`.

## Scripts

```bash
npm run dev      # Development server
npm run build    # Build production
npm run start    # Start production server
npm run lint     # Linting
```

## Lisensi

© 2025 Musyran IPM - SMK Muhammadiyah 1 Sangatta Utara

Dibuat dengan 🤍 oleh Muhammad Abid
