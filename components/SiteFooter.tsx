export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white/40">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 py-10 text-sm text-ink-soft sm:grid-cols-3">
        <div>
          <p className="font-display text-base text-ink">SDN Jatinegara Kaum 07 Pagi</p>
          <p className="mt-2">
            Jl. TB. Badarudin No. 6
            <br />
            Kelurahan Jatinegara Kaum, Kec. Pulogadung
            <br />
            Jakarta Timur, 13250
          </p>
        </div>
        <div>
          <p className="font-medium text-ink">Kontak</p>
          <p className="mt-2">
            Telp. 021-47860713
            <br />
            sdnjtk07pg@gmail.com
          </p>
        </div>
        <div>
          <p className="font-medium text-ink">Tautan</p>
          <ul className="mt-2 space-y-1">
            <li><a href="/ppdb" className="hover:text-leaf">Informasi PPDB</a></li>
            <li><a href="/berita" className="hover:text-leaf">Berita &amp; Pengumuman</a></li>
            <li><a href="/admin" className="hover:text-leaf">Admin</a></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-line px-6 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} SDN Jatinegara Kaum 07 Pagi · Dinas Pendidikan Provinsi DKI Jakarta
      </p>
    </footer>
  );
}
