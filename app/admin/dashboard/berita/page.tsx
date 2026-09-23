import Link from "next/link";
import { getBeritaList } from "@/lib/data";
import { hapusBerita } from "./actions";

export default async function AdminBeritaPage() {
  const berita = await getBeritaList();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl text-ink">Berita &amp; Pengumuman</h1>
        <Link
          href="/admin/dashboard/berita/baru"
          className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-white hover:bg-ink-soft"
        >
          + Tulis Berita
        </Link>
      </div>

      <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-white">
        {berita.length === 0 && (
          <p className="p-6 text-sm text-muted">Belum ada berita.</p>
        )}
        {berita.map((item) => (
          <div key={item.id} className="flex items-center justify-between gap-4 p-5">
            <div>
              <p className="text-xs text-muted">
                {new Date(item.tanggal_terbit).toLocaleDateString("id-ID")}
              </p>
              <p className="font-medium text-ink">{item.judul}</p>
            </div>
            <div className="flex shrink-0 gap-3 text-sm">
              <Link
                href={`/admin/dashboard/berita/${item.id}`}
                className="text-leaf hover:underline"
              >
                Edit
              </Link>
              <form
                action={async () => {
                  "use server";
                  await hapusBerita(item.id);
                }}
              >
                <button type="submit" className="text-red-600 hover:underline">
                  Hapus
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
