import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { BeritaForm } from "../BeritaForm";
import { perbaruiBerita } from "../actions";
import type { Berita } from "@/lib/data";

export default async function EditBeritaPage({
  params,
}: {
  params: { id: string };
}) {
  const supabase = await createClient();
  const { data: berita } = await supabase
    .from("website_berita")
    .select("*")
    .eq("id", params.id)
    .single<Berita>();

  if (!berita) notFound();

  const updateWithId = perbaruiBerita.bind(null, berita.id);

  return (
    <div>
      <h1 className="font-display text-2xl text-ink">Edit Berita</h1>
      <BeritaForm action={updateWithId} initial={berita} />
    </div>
  );
}
