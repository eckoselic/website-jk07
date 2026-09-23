export const metadata = { title: "Kontak" };

export default function KontakPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">Kontak &amp; Lokasi</h1>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div className="space-y-6 text-ink-soft">
          <div>
            <p className="text-xs uppercase tracking-wide text-muted">Alamat</p>
            <p className="mt-1">
              Jl. TB. Badarudin No. 6, Kelurahan Jatinegara Kaum,
              <br />
              Kecamatan Pulogadung, Jakarta Timur, 13250
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted">Telepon</p>
            <p className="mt-1">021-47860713</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted">Email</p>
            <p className="mt-1">sdnjtk07pg@gmail.com</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-muted">Jam Operasional</p>
            <p className="mt-1">Senin&ndash;Jumat, 06.30&ndash;15.00 WIB</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line">
          <iframe
            title="Lokasi SDN Jatinegara Kaum 07 Pagi"
            src="https://www.google.com/maps?q=SDN+Jatinegara+Kaum+07+Pagi&output=embed"
            className="h-80 w-full sm:h-full"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
