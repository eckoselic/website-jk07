// Data profil sekolah & struktur guru — cukup di-edit langsung di file ini kalau ada
// perubahan (jarang berubah), tidak perlu lewat panel admin/database.
// Untuk foto guru: taruh file di /public/guru/ lalu isi path-nya di bawah, misal "/guru/nama.jpg".

export const profilSekolah = {
  namaSekolah: "SDN Jatinegara Kaum 07 Pagi",
  visi:
    "Terwujudnya peserta didik yang beriman, bertakwa, cerdas, mandiri, dan berwawasan lingkungan.",
  misi: [
    "Menanamkan nilai keimanan dan ketakwaan melalui pembiasaan sehari-hari.",
    "Menyelenggarakan pembelajaran yang aktif, kreatif, dan menyenangkan.",
    "Membina kemandirian dan tanggung jawab peserta didik.",
    "Menumbuhkan kepedulian terhadap lingkungan sekolah.",
  ],
  sejarah:
    "SDN Jatinegara Kaum 07 Pagi berdiri sebagai bagian dari upaya Pemerintah Provinsi DKI Jakarta menyediakan pendidikan dasar yang merata bagi warga Kelurahan Jatinegara Kaum dan sekitarnya. Sekolah terus berbenah dalam kurikulum, fasilitas, dan tata kelola untuk memberikan layanan pendidikan terbaik bagi peserta didik.",
};

export type AnggotaStaf = {
  nama: string;
  jabatan: string;
  foto?: string;
};

export const strukturOrganisasi: AnggotaStaf[] = [
  { nama: "(Nama Kepala Sekolah)", jabatan: "Kepala Sekolah" },
  { nama: "(Nama)", jabatan: "Guru Kelas 1" },
  { nama: "(Nama)", jabatan: "Guru Kelas 2" },
  { nama: "(Nama)", jabatan: "Guru Kelas 3" },
  { nama: "(Nama)", jabatan: "Guru Kelas 4" },
  { nama: "(Nama)", jabatan: "Guru Kelas 5" },
  { nama: "(Nama)", jabatan: "Guru Kelas 6" },
  { nama: "(Nama)", jabatan: "Admin Tata Usaha" },
];
