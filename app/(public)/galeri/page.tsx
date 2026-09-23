import { getGaleriAlbums } from "@/lib/data";

export const metadata = { title: "Galeri" };

export default async function GaleriPage() {
  const albums = await getGaleriAlbums();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">Galeri Kegiatan</h1>

      {albums.length === 0 ? (
        <p className="mt-8 text-sm text-muted">Belum ada album foto.</p>
      ) : (
        <div className="mt-10 space-y-14">
          {albums.map((album) => (
            <div key={album.id}>
              <h2 className="font-display text-xl text-ink">{album.judul}</h2>
              {album.foto.length === 0 ? (
                <p className="mt-3 text-sm text-muted">Belum ada foto di album ini.</p>
              ) : (
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {album.foto.map((foto) => (
                    <div
                      key={foto.id}
                      className="aspect-square overflow-hidden rounded-xl bg-ink/5"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={foto.foto_url}
                        alt={foto.keterangan ?? album.judul}
                        className="h-full w-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
