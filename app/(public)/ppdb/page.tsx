export const metadata = { title: "PPDB" };

// Info PPDB berubah tiap tahun ajaran — cukup edit teks di bawah ini langsung
// (tidak perlu lewat panel admin/database karena hanya berubah 1x setahun).

export default function PpdbPage() {
  return (
    <div className="mx-auto max-w-prose px-6 py-16">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">
        Penerimaan Peserta Didik Baru
      </h1>
      <p className="mt-4 leading-relaxed text-ink-soft">
        Informasi pendaftaran peserta didik baru SDN Jatinegara Kaum 07 Pagi
        tahun ajaran berjalan mengikuti jadwal resmi PPDB DKI Jakarta.
      </p>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="font-display text-lg italic text-leaf">Jalur Pendaftaran</h2>
          <ul className="mt-2 space-y-2 text-ink-soft">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
              Jalur Zonasi
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
              Jalur Afirmasi
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
              Jalur Perpindahan Tugas Orang Tua
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg italic text-leaf">Persyaratan Umum</h2>
          <ul className="mt-2 space-y-2 text-ink-soft">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
              Kartu Keluarga (KK) yang masih berlaku
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
              Akta kelahiran calon peserta didik
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marigold" />
              Usia minimal 6 tahun pada 1 Juli tahun ajaran berjalan
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-leaf-soft px-6 py-5 text-sm text-ink-soft">
          Jadwal resmi (pendaftaran, verifikasi berkas, dan pengumuman) akan
          diperbarui di halaman ini serta di papan pengumuman sekolah menjelang
          periode PPDB. Untuk pertanyaan lebih lanjut, hubungi kontak sekolah.
        </div>
      </div>
    </div>
  );
}
