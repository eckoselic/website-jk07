import Link from "next/link";
import { getBeritaList } from "@/lib/data";

export const metadata = { title: "Berita & Pengumuman" };

export default async function BeritaListPage() {
  const berita = await getBeritaList();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">Berita &amp; Pengumuman</h1>

      {berita.length === 0 ? (
        <p className="mt-8 text-sm text-muted">Belum ada berita yang diterbitkan.</p>
      ) : (
        <div className="mt-10 divide-y divide-line">
          {berita.map((item) => (
            <Link
              key={item.id}
              href={`/berita/${item.slug}`}
              className="group flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:gap-8"
            >
              <div className="w-full shrink-0 overflow-hidden rounded-xl bg-ink/5 sm:w-40">
                <div className="aspect-[4/3]">
                  {item.gambar_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.gambar_url}
                      alt={item.judul}
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
              </div>
              <div>
                <p className="text-xs text-muted">
                  {new Date(item.tanggal_terbit).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h2 className="mt-1 font-display text-xl text-ink group-hover:text-leaf">
                  {item.judul}
                </h2>
                {item.ringkasan && (
                  <p className="mt-2 max-w-prose text-sm text-ink-soft">
                    {item.ringkasan}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
