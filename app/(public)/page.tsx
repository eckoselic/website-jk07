import Link from "next/link";
import { getBeritaList } from "@/lib/data";
import { profilSekolah } from "@/lib/profil-sekolah";

export default async function BerandaPage() {
  const berita = await getBeritaList(3);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-14 sm:pt-20">
        <div className="grid gap-10 sm:grid-cols-5 sm:gap-8">
          <div className="sm:col-span-3">
            <p className="font-display text-sm italic text-leaf">
              Sekolah Dasar Negeri &middot; Jakarta Timur
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              Tempat tumbuh untuk anak-anak Jatinegara Kaum.
            </h1>
            <p className="mt-5 max-w-prose text-base leading-relaxed text-ink-soft">
              {profilSekolah.namaSekolah} membina peserta didik agar beriman,
              cerdas, dan mandiri melalui pembelajaran yang aktif dan
              menyenangkan, didukung guru-guru yang berdedikasi.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/ppdb"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-soft"
              >
                Informasi PPDB
              </Link>
              <Link
                href="/profil"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-leaf hover:text-leaf"
              >
                Kenali sekolah kami
              </Link>
            </div>
          </div>
          <div className="sm:col-span-2">
  <div className="grid h-full grid-cols-2 gap-3">
    <div className="col-span-2 aspect-[16/10] overflow-hidden rounded-2xl bg-marigold/25">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/beranda/kegiatan.jpg" alt="Foto kegiatan sekolah" className="h-full w-full object-cover" />
    </div>
    <div className="aspect-square overflow-hidden rounded-2xl bg-leaf-soft">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/beranda/siswa.jpg" alt="Foto siswa" className="h-full w-full object-cover" />
    </div>
    <div className="aspect-square overflow-hidden rounded-2xl bg-ink/5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/beranda/gedung.jpg" alt="Foto gedung sekolah" className="h-full w-full object-cover" />
    </div>
  </div>
</div>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-6 border-y border-line py-6 text-center sm:text-left">
          <div>
            <p className="font-display text-2xl text-ink">6</p>
            <p className="text-xs text-muted">Tingkat kelas</p>
          </div>
          <div>
            <p className="font-display text-2xl text-ink">15</p>
            <p className="text-xs text-muted">Guru &amp; staf</p>
          </div>
          <div>
            <p className="font-display text-2xl text-ink">Pagi</p>
            <p className="text-xs text-muted">Sesi belajar</p>
          </div>
        </div>
      </section>

      {/* Berita terbaru */}
      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="flex items-baseline justify-between">
          <h2 className="font-display text-2xl text-ink">Berita &amp; Pengumuman</h2>
          <Link href="/berita" className="text-sm text-leaf hover:underline">
            Lihat semua
          </Link>
        </div>

        {berita.length === 0 ? (
          <p className="mt-6 text-sm text-muted">
            Belum ada berita yang diterbitkan.
          </p>
        ) : (
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            {berita.map((item) => (
              <Link key={item.id} href={`/berita/${item.slug}`} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-ink/5">
                  {item.gambar_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.gambar_url}
                      alt={item.judul}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  )}
                </div>
                <p className="mt-3 text-xs text-muted">
                  {new Date(item.tanggal_terbit).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <h3 className="mt-1 font-display text-lg leading-snug text-ink group-hover:text-leaf">
                  {item.judul}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA PPDB */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-2xl bg-ink px-8 py-10 text-white sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl">Penerimaan Peserta Didik Baru</h2>
            <p className="mt-2 max-w-md text-sm text-white/80">
              Cari tahu jalur pendaftaran, syarat, dan jadwal PPDB tahun ajaran mendatang.
            </p>
          </div>
          <Link
            href="/ppdb"
            className="mt-6 inline-block rounded-full bg-marigold px-6 py-3 text-sm font-medium text-ink hover:bg-marigold-deep sm:mt-0"
          >
            Lihat informasi PPDB
          </Link>
        </div>
      </section>
    </>
  );
}
