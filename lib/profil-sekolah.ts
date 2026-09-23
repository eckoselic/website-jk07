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
  { nama: "(Devi Triana, M. Pd)", jabatan: "Kepala Sekolah" },
  { nama: "(Rima Fitriyah, S. Pd)", jabatan: "Guru Kelas 1A & 2B" },
  { nama: "(Kartika Sari Dwilangga Putri, S. Pd)", jabatan: "Guru Kelas 1B & 2A" },
  { nama: "(Achmad Syarif, S. Pd)", jabatan: "Guru Kelas 3A" },
  { nama: "(Endang Sunarsih, S. Pd)", jabatan: "Guru Kelas 3B" },
  { nama: "(Dwi Pujiyanti, S. Pd)", jabatan: "Guru Kelas 3C" },
  { nama: "(Fatimah Rahmah)", jabatan: "Guru Kelas 4A" },
  { nama: "(Cahyadi Za'far, S. Pd)", jabatan: "Guru Kelas 4B" },
  { nama: "(Neni Herliyani)", jabatan: "Guru Kelas 4C" },
  { nama: "(Fika Hastaria, S. Pd)", jabatan: "Guru Kelas 5A" },
  { nama: "(Kurnia Dwi Hartini, S. Pd)", jabatan: "Guru Kelas 5B" },
  { nama: "(Kosim Nurseha, S. Pd)", jabatan: "Guru Kelas 6" },
  { nama: "(Syamsudin, S. Pd)", jabatan: "Guru PJOK" },
  { nama: "(Anas Misbakhudin, S. Pd I)", jabatan: "Guru PAI" },
  { nama: "(Sasanti Renata Utami, S. Pd)", jabatan: "Guru PJOK" },
  { nama: "(Zakaria, M. Pd)", jabatan: "Guru PAI" },
  { nama: "(Eko Purnomo)", jabatan: "Admin Tata Usaha" },
  { nama: "(Nur'ain)", jabatan: "Admin Tata Usaha" },
  { nama: "(Syarifudin)", jabatan: "Penjaga Sekolah" },
  { nama: "(Rian Hidayat)", jabatan: "Caraka" },
];
