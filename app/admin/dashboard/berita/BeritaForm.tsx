import type { Berita } from "@/lib/data";

export function BeritaForm({
  action,
  initial,
}: {
  action: (formData: FormData) => void;
  initial?: Berita;
}) {
  const tanggalDefault = initial?.tanggal_terbit
    ? initial.tanggal_terbit.slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  return (
    <form action={action} className="mt-8 max-w-2xl space-y-6">
      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="judul">
          Judul
        </label>
        <input
          id="judul"
          name="judul"
          required
          defaultValue={initial?.judul}
          className="mt-2 w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-leaf"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="tanggal_terbit">
          Tanggal Terbit
        </label>
        <input
          id="tanggal_terbit"
          name="tanggal_terbit"
          type="date"
          required
          defaultValue={tanggalDefault}
          className="mt-2 w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-leaf sm:w-60"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="ringkasan">
          Ringkasan singkat (tampil di daftar berita)
        </label>
        <textarea
          id="ringkasan"
          name="ringkasan"
          rows={2}
          defaultValue={initial?.ringkasan ?? ""}
          className="mt-2 w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-leaf"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="isi">
          Isi Berita
        </label>
        <textarea
          id="isi"
          name="isi"
          rows={10}
          required
          defaultValue={initial?.isi}
          className="mt-2 w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-leaf"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-ink" htmlFor="gambar">
          Gambar Cover {initial ? "(kosongkan bila tidak ingin mengganti)" : "(opsional)"}
        </label>
        <input
          id="gambar"
          name="gambar"
          type="file"
          accept="image/*"
          className="mt-2 w-full text-sm"
        />
        {initial?.gambar_url && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={initial.gambar_url}
            alt="Gambar saat ini"
            className="mt-3 h-32 rounded-lg object-cover"
          />
        )}
      </div>

      <button
        type="submit"
        className="rounded-full bg-ink px-6 py-2.5 text-sm font-medium text-white hover:bg-ink-soft"
      >
        Simpan
      </button>
    </form>
  );
}
