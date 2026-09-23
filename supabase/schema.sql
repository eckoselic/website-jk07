-- Jalankan file ini di Supabase SQL Editor (Project > SQL Editor > New query)

-- ============ TABEL BERITA ============
create table if not exists website_berita (
  id uuid default gen_random_uuid() primary key,
  judul text not null,
  slug text not null unique,
  ringkasan text,
  isi text not null,
  gambar_url text,
  tanggal_terbit date not null default current_date,
  created_at timestamptz default now()
);

alter table website_berita enable row level security;

-- Siapa saja boleh membaca website_berita (halaman publik)
create policy "berita_select_public"
on website_berita for select
using (true);

-- Tidak ada policy insert/update/delete untuk anon key: penulisan website_berita
-- HANYA lewat panel admin, yang memakai service_role key (lihat lib/supabase/admin.ts)
-- dan service_role key melewati RLS, jadi tidak perlu policy tambahan di sini.

-- ============ TABEL GALERI ============
create table if not exists website_galeri_album (
  id uuid default gen_random_uuid() primary key,
  judul text not null,
  created_at timestamptz default now()
);

alter table website_galeri_album enable row level security;

create policy "galeri_album_select_public"
on website_galeri_album for select
using (true);

create table if not exists website_galeri_foto (
  id uuid default gen_random_uuid() primary key,
  album_id uuid references website_galeri_album(id) on delete cascade not null,
  foto_url text not null,
  keterangan text,
  created_at timestamptz default now()
);

alter table website_galeri_foto enable row level security;

create policy "galeri_foto_select_public"
on website_galeri_foto for select
using (true);

-- ============ STORAGE BUCKETS ============
-- Buat bucket lewat dashboard Supabase (Storage > New bucket), atau lewat SQL berikut.
-- Set kedua bucket sebagai PUBLIC (agar foto bisa ditampilkan langsung di website)
-- karena isinya memang konten publik (foto kegiatan sekolah, gambar berita).

insert into storage.buckets (id, name, public)
values ('berita-gambar', 'berita-gambar', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('galeri-foto', 'galeri-foto', true)
on conflict (id) do nothing;

-- Policy storage: publik boleh baca (SELECT), upload/hapus hanya lewat
-- service_role key dari panel admin (service_role otomatis melewati policy ini).
create policy "berita_gambar_public_read"
on storage.objects for select
using (bucket_id = 'berita-gambar');

create policy "galeri_foto_public_read"
on storage.objects for select
using (bucket_id = 'galeri-foto');
