import { getGaleriAlbums } from "@/lib/data";
import { buatAlbum, hapusAlbum, unggahFoto, hapusFoto } from "./actions";

export default async function AdminGaleriPage() {
  const albums = await getGaleriAlbums();

  return (
    <div>
      <h1 className="font-display text-2xl text-ink">Galeri Kegiatan</h1>

      <form
        action={buatAlbum}
        className="mt-6 flex max-w-md gap-3 rounded-2xl border border-line bg-white p-5"
      >
        <input
          name="judul"
          required
          placeholder="Nama album, misal: Peringatan HUT RI 2026"
          className="flex-1 rounded-lg border border-line px-4 py-2 text-sm outline-none focus:border-leaf"
        />
        <button
          type="submit"
          className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-white hover:bg-ink-soft"
        >
          + Album
        </button>
      </form>

      <div className="mt-10 space-y-10">
        {albums.length === 0 && (
          <p className="text-sm text-muted">Belum ada album.</p>
        )}
        {albums.map((album) => {
          const unggahFotoAlbum = unggahFoto.bind(null, album.id);
          return (
            <div key={album.id} className="rounded-2xl border border-line bg-white p-6">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg text-ink">{album.judul}</h2>
                <form
                  action={async () => {
                    "use server";
                    await hapusAlbum(album.id);
                  }}
                >
                  <button type="submit" className="text-sm text-red-600 hover:underline">
                    Hapus album
                  </button>
                </form>
              </div>

              <form action={unggahFotoAlbum} className="mt-4 flex flex-wrap items-center gap-3">
                <input
                  type="file"
                  name="foto"
                  accept="image/*"
                  multiple
                  className="text-sm"
                />
                <button
                  type="submit"
                  className="rounded-full border border-ink/20 px-4 py-1.5 text-sm text-ink hover:border-leaf hover:text-leaf"
                >
                  Unggah foto
                </button>
              </form>

              {album.foto.length > 0 && (
                <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {album.foto.map((foto) => (
                    <div key={foto.id} className="group relative aspect-square overflow-hidden rounded-lg bg-ink/5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={foto.foto_url} alt="" className="h-full w-full object-cover" />
                      <form
                        action={async () => {
                          "use server";
                          await hapusFoto(foto.id);
                        }}
                        className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        <button type="submit" className="text-xs font-medium text-white">
                          Hapus
                        </button>
                      </form>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
