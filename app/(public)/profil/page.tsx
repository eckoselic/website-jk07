import { profilSekolah, strukturOrganisasi } from "@/lib/profil-sekolah";

export const metadata = { title: "Profil" };

export default function ProfilPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">Profil Sekolah</h1>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-display text-lg italic text-leaf">Visi</h2>
          <p className="mt-2 max-w-prose leading-relaxed text-ink-soft">
            {profilSekolah.visi}
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg italic text-leaf">Misi</h2>
          <ul className="mt-2 space-y-2 text-ink-soft">
            {profilSekolah.misi.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <h2 className="font-display text-lg italic text-leaf">Sejarah Singkat</h2>
        <p className="mt-2 max-w-prose leading-relaxed text-ink-soft">
          {profilSekolah.sejarah}
        </p>
      </div>

      <div className="mt-14 border-t border-line pt-10">
        <h2 className="font-display text-xl text-ink">Struktur Organisasi</h2>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {strukturOrganisasi.map((staf, i) => (
            <div key={i}>
              <div className="aspect-square overflow-hidden rounded-full bg-ink/5">
                {staf.foto && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={staf.foto}
                    alt={staf.nama}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <p className="mt-3 text-sm font-medium text-ink">{staf.nama}</p>
              <p className="text-xs text-muted">{staf.jabatan}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
