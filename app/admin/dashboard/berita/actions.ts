"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";

function buatSlug(judul: string): string {
  return judul
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

async function uploadGambar(file: File): Promise<string | null> {
  if (!file || file.size === 0) return null;
  const supabase = createAdminClient();
  const path = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
  const { error } = await supabase.storage.from("berita-gambar").upload(path, file);
  if (error) {
    console.error("Gagal upload gambar berita:", error.message);
    return null;
  }
  const { data } = supabase.storage.from("berita-gambar").getPublicUrl(path);
  return data.publicUrl;
}

export async function buatBerita(formData: FormData) {
  const supabase = createAdminClient();

  const judul = String(formData.get("judul") ?? "").trim();
  const ringkasan = String(formData.get("ringkasan") ?? "").trim();
  const isi = String(formData.get("isi") ?? "").trim();
  const tanggal_terbit = String(formData.get("tanggal_terbit") ?? "");
  const file = formData.get("gambar") as File | null;

  const gambar_url = file ? await uploadGambar(file) : null;
  const slug = `${buatSlug(judul)}-${Date.now().toString().slice(-5)}`;

  const { error } = await supabase.from("website_berita").insert({
    judul,
    slug,
    ringkasan: ringkasan || null,
    isi,
    tanggal_terbit,
    gambar_url,
  });

  if (error) {
    throw new Error(`Gagal menyimpan berita: ${error.message}`);
  }

  revalidatePath("/admin/dashboard/berita");
  revalidatePath("/berita");
  revalidatePath("/");
  redirect("/admin/dashboard/berita");
}

export async function perbaruiBerita(id: string, formData: FormData) {
  const supabase = createAdminClient();

  const judul = String(formData.get("judul") ?? "").trim();
  const ringkasan = String(formData.get("ringkasan") ?? "").trim();
  const isi = String(formData.get("isi") ?? "").trim();
  const tanggal_terbit = String(formData.get("tanggal_terbit") ?? "");
  const file = formData.get("gambar") as File | null;

  const update: Record<string, unknown> = {
    judul,
    ringkasan: ringkasan || null,
    isi,
    tanggal_terbit,
  };

  if (file && file.size > 0) {
    update.gambar_url = await uploadGambar(file);
  }

  const { error } = await supabase.from("website_berita").update(update).eq("id", id);

  if (error) {
    throw new Error(`Gagal memperbarui berita: ${error.message}`);
  }

  revalidatePath("/admin/dashboard/berita");
  revalidatePath("/berita");
  revalidatePath("/");
  redirect("/admin/dashboard/berita");
}

export async function hapusBerita(id: string) {
  "use server";
  const supabase = createAdminClient();
  const { error } = await supabase.from("website_berita").delete().eq("id", id);
  if (error) {
    throw new Error(`Gagal menghapus berita: ${error.message}`);
  }
  revalidatePath("/admin/dashboard/berita");
  revalidatePath("/berita");
  revalidatePath("/");
}
