import { createClient } from "@/lib/supabase/server";

export type Berita = {
  id: string;
  judul: string;
  slug: string;
  ringkasan: string | null;
  isi: string;
  gambar_url: string | null;
  tanggal_terbit: string;
  created_at: string;
};

export type GaleriAlbum = {
  id: string;
  judul: string;
  created_at: string;
};

export type GaleriFoto = {
  id: string;
  album_id: string;
  foto_url: string;
  keterangan: string | null;
  created_at: string;
};

export async function getBeritaList(limit?: number): Promise<Berita[]> {
  const supabase = await createClient();
  let query = supabase
    .from("website_berita")
    .select("*")
    .order("tanggal_terbit", { ascending: false });
  if (limit) query = query.limit(limit);
  const { data, error } = await query;
  if (error) {
    console.error("Gagal mengambil daftar berita:", error.message);
    return [];
  }
  return data ?? [];
}

export async function getBeritaBySlug(slug: string): Promise<Berita | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("website_berita")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return data;
}

export async function getGaleriAlbums(): Promise<
  (GaleriAlbum & { foto: GaleriFoto[] })[]
> {
  const supabase = await createClient();
  const { data: albums, error } = await supabase
    .from("website_galeri_album")
    .select("*")
    .order("created_at", { ascending: false });
  if (error || !albums) {
    console.error("Gagal mengambil album galeri:", error?.message);
    return [];
  }

  const { data: foto } = await supabase
    .from("website_galeri_foto")
    .select("*")
    .order("created_at", { ascending: true });

  return albums.map((album) => ({
    ...album,
    foto: (foto ?? []).filter((f) => f.album_id === album.id),
  }));
}
