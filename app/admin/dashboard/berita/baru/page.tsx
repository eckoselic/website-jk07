import { BeritaForm } from "../BeritaForm";
import { buatBerita } from "../actions";

export default function BeritaBaruPage() {
  return (
    <div>
      <h1 className="font-display text-2xl text-ink">Tulis Berita Baru</h1>
      <BeritaForm action={buatBerita} />
    </div>
  );
}
