"use server";

import { revalidatePath } from "next/cache";
import { createAdminClient } from "@/lib/supabase/admin";

export async function buatAlbum(formData: FormData) {
  const judul = String(formData.get("judul") ?? "").trim();
  if (!judul) return;

  const supabase = createAdminClient();
  const { error } = await supabase.from("website_galeri_album").insert({ judul });
  if (error) throw new Error(`Gagal membuat album: ${error.message}`);

  revalidatePath("/admin/dashboard/galeri");
  revalidatePath("/galeri");
}

export async function hapusAlbum(albumId: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("website_galeri_album").delete().eq("id", albumId);
  if (error) throw new Error(`Gagal menghapus album: ${error.message}`);

  revalidatePath("/admin/dashboard/galeri");
  revalidatePath("/galeri");
}

export async function unggahFoto(albumId: string, formData: FormData) {
  const files = formData.getAll("foto") as File[];
  const supabase = createAdminClient();

  for (const file of files) {
    if (!file || file.size === 0) continue;
    const path = `${albumId}/${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
    const { error: uploadError } = await supabase.storage
      .from("galeri-foto")
      .upload(path, file);
    if (uploadError) {
      console.error("Gagal upload foto:", uploadError.message);
      continue;
    }
    const { data } = supabase.storage.from("galeri-foto").getPublicUrl(path);
    await supabase.from("website_galeri_foto").insert({
      album_id: albumId,
      foto_url: data.publicUrl,
    });
  }

  revalidatePath("/admin/dashboard/galeri");
  revalidatePath("/galeri");
}

export async function hapusFoto(fotoId: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("website_galeri_foto").delete().eq("id", fotoId);
  if (error) throw new Error(`Gagal menghapus foto: ${error.message}`);

  revalidatePath("/admin/dashboard/galeri");
  revalidatePath("/galeri");
}
