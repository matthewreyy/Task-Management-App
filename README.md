# Task Management App

Aplikasi manajemen tugas harian berbasis React + Vite.

## Fitur
- ✅ Tambah task baru dengan judul & tanggal deadline
- ✅ Toggle selesai/belum dengan checkbox (teks tercoret)
- ✅ Indikator hari otomatis (Today / Tomorrow / tanggal spesifik)
- ✅ Task lewat deadline otomatis terhapus saat refresh
- ✅ Pengelompokan task: **Today** dan **Other**
- ✅ Collapse/expand group dengan animasi
- ✅ Data tersimpan di localStorage

## Struktur Komponen

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Root component + state management
├── App.module.css
├── index.css             # Global styles & CSS variables
├── utils/
│   └── dateUtils.js      # Helper fungsi tanggal
└── components/
    ├── Navbar.jsx         # Top navigation bar
    ├── Navbar.module.css
    ├── TaskForm.jsx       # Form input task baru
    ├── TaskForm.module.css
    ├── TaskGroup.jsx      # Group task (collapsible)
    ├── TaskGroup.module.css
    ├── TaskItem.jsx       # Satu baris task
    └── TaskItem.module.css
```

## Konsep React yang Digunakan
- **Components & Props**: Setiap bagian UI dipecah ke komponen terpisah
- **useState**: Menyimpan daftar task, status collapse, form input
- **useEffect**: Sinkronisasi tasks ke localStorage
- **Event Handling**: onClick untuk toggle/collapse, onChange untuk form input
- **Controlled Components**: Input form dikontrol sepenuhnya oleh state
- **Conditional Rendering**: Tampilkan/sembunyikan konten group
