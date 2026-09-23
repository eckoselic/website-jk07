# Website SDN Jatinegara Kaum 07 Pagi

Website profil publik sekolah: beranda, profil, berita/pengumuman, galeri kegiatan,
info PPDB, kontak — plus panel admin sederhana (khusus Admin TU) untuk mengelola
berita dan galeri.

Stack: **Next.js 14 + Supabase (Postgres + Storage) + Vercel**, semua tier gratis.

## 1. Setup Supabase

1. Buat project baru di https://supabase.com (gratis).
2. Buka **SQL Editor**, jalankan seluruh isi file `supabase/schema.sql` di repo ini.
   Ini akan membuat tabel `berita`, `galeri_album`, `galeri_foto`, bucket storage
   `berita-gambar` & `galeri-foto`, beserta policy akses baca publik.
3. Buka **Project Settings > API**, catat:
   - `Project URL`
   - `anon public` key
   - `service_role` key (JANGAN pernah dibagikan/di-commit ke git — hanya dipakai
     server-side untuk panel admin)

## 2. Setup environment variables

Salin `.env.local.example` menjadi `.env.local`, lalu isi:

```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
ADMIN_PASSCODE=...       # kode akses login admin TU, bebas ditentukan
SESSION_SECRET=...       # string acak panjang (min. 32 karakter), untuk sesi login
```

## 3. Install & jalankan lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000 untuk halaman publik, dan http://localhost:3000/admin
untuk login panel admin (pakai `ADMIN_PASSCODE` yang sudah diisi).

## 4. Isi konten yang jarang berubah

Beberapa konten sengaja **tidak** lewat database/panel admin karena jarang berubah
(cukup diedit langsung di kode, lalu di-deploy ulang):

- `lib/profil-sekolah.ts` — visi-misi, sejarah, daftar guru/struktur organisasi.
  Untuk foto guru: taruh file di `public/guru/nama-file.jpg`, lalu isi path-nya
  di field `foto`.
- `app/(public)/ppdb/page.tsx` — info jalur pendaftaran, syarat, jadwal PPDB
  (biasanya diperbarui 1x per tahun ajaran).
- `app/(public)/kontak/page.tsx` dan `components/SiteFooter.tsx` — alamat,
  telepon, embed peta.

Konten yang **rutin** berubah (berita/pengumuman, galeri foto kegiatan) dikelola
lewat panel admin di `/admin`, tidak perlu edit kode.

## 5. Deploy ke Vercel (gratis)

1. Push folder ini ke repo GitHub baru.
2. Buka https://vercel.com, import repo tersebut.
3. Di **Settings > Environment Variables**, isi environment variables yang sama
   seperti di `.env.local` (jangan lupa `SUPABASE_SERVICE_ROLE_KEY` dan
   `SESSION_SECRET`).
4. Deploy. Vercel akan otomatis build ulang setiap kali ada push ke branch utama.

## Struktur folder penting

```
app/
├── (public)/          # halaman publik: beranda, profil, berita, galeri, ppdb, kontak
├── admin/
│   ├── page.tsx        # form login passcode
│   └── dashboard/       # dilindungi middleware.ts (wajib login)
│       ├── berita/      # CRUD berita
│       └── galeri/      # CRUD album & foto galeri
└── api/admin/           # route handler login/logout
lib/
├── supabase/
│   ├── client.ts        # untuk browser (anon key)
│   ├── server.ts         # untuk server component (anon key, baca data publik)
│   └── admin.ts           # untuk route admin (service_role key — jangan expose ke client)
├── auth.ts               # buat/verifikasi token sesi admin (passcode)
└── data.ts                # query berita & galeri untuk halaman publik
middleware.ts              # cek sesi admin sebelum akses /admin/dashboard/**
supabase/schema.sql         # skema tabel + storage + policy, jalankan sekali di awal
```

## Keamanan

- Passcode admin divalidasi di server (`app/api/admin/login/route.ts`), tidak
  pernah dibandingkan di client.
- Sesi admin disimpan sebagai cookie `httpOnly` bertanda tangan HMAC (12 jam),
  bukan menyimpan passcode itu sendiri di cookie.
- `service_role key` hanya dipakai di `lib/supabase/admin.ts`, yang hanya
  diimpor dari route/Server Action di bawah `/app/admin/**` — rute-rute itu
  sendiri sudah dikunci oleh `middleware.ts`.
- Tabel `berita`, `galeri_album`, `galeri_foto` mengaktifkan RLS dengan policy
  "select" publik saja (konten memang untuk dibaca semua orang); tidak ada
  policy insert/update/delete untuk anon key, sehingga penulisan hanya bisa
  lewat service_role key di panel admin.
