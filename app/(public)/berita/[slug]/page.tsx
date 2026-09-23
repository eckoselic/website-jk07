import { notFound } from "next/navigation";
import Link from "next/link";
import { getBeritaBySlug } from "@/lib/data";

export default async function BeritaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const berita = await getBeritaBySlug(params.slug);
  if (!berita) notFound();

  return (
    <article className="mx-auto max-w-prose px-6 py-16">
      <Link href="/berita" className="text-sm text-leaf hover:underline">
        &larr; Kembali ke Berita
      </Link>

      <p className="mt-6 text-xs text-muted">
        {new Date(berita.tanggal_terbit).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <h1 className="mt-2 font-display text-3xl leading-tight text-ink">
        {berita.judul}
      </h1>

      {berita.gambar_url && (
        <div className="mt-8 overflow-hidden rounded-xl bg-ink/5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={berita.gambar_url} alt={berita.judul} className="w-full object-cover" />
        </div>
      )}

      <div className="mt-8 whitespace-pre-line leading-relaxed text-ink-soft">
        {berita.isi}
      </div>
    </article>
  );
}
