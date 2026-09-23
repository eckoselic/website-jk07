// Data profil sekolah & struktur guru — cukup di-edit langsung di file ini kalau ada
// perubahan (jarang berubah), tidak perlu lewat panel admin/database.
// Untuk foto guru: taruh file di /public/guru/ lalu isi path-nya di bawah, misal "/guru/nama.jpg".

export const profilSekolah = {
  namaSekolah: "SDN Jatinegara Kaum 07 Pagi",
  visi: "Terwujudnya murid yang berkarakter, unggul dalam prestasi dan berbudaya lingkungan.",
  misi: [
    "Menumbuhkembangkan keimanan dan ketaqwaan kepadaTuhan Yang Maha Esa melalui kegiatan keagamaan dan pembiasaan di sekolah.",
    "Menanamkan nilai-nilai kewargaan, penalaran kritis, kreativitas, kolaborasi, kemandirian, kesehatan, dan komunikasi dalam kegiatan pembelajaran.",
    "Mengembangkan potensi akademik dan non akademik murid secara unggul dalam prestasi melalui pembelajaran yang berkesadaran, bermakna dan menggembirakan.",
    "Membangun kemandirian, disiplin, tanggung jawab dan keharmonisan dalam membangun kemitraan bersama warga sekolah.",
    "Mengoptimalkan sarana dan prasarana pendidikan guna mendukung tercapainya standar kualitas.",
    "Menciptakan lingkungan belajar yang bersih, sehat, nyaman dan menumbuhkan kesadaran warga sekolah untuk menjaga kelestarian lingkungan.",
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
  { nama: "(Rima Fitriyah, S. Pd)", jabatan: "Guru Kelas 1A & 2B", foto: "/guru/rima-fitriyah.jpeg" },
  { nama: "(Kartika Sari Dwilangga Putri, S. Pd)", jabatan: "Guru Kelas 1B & 2A", foto: "/guru/kartika-sari-dwilangga-putri.jpeg" },
  { nama: "(Achmad Syarif, S. Pd)", jabatan: "Guru Kelas 3A", foto: "/guru/achmad-syarif.jpeg" },
  { nama: "(Endang Sunarsih, S. Pd)", jabatan: "Guru Kelas 3B", foto: "/guru/endang-sunarsih.jpeg" },
  { nama: "(Dwi Pujiyanti, S. Pd)", jabatan: "Guru Kelas 3C", foto: "/guru/dwi-pujiyanti.jpeg" },
  { nama: "(Fatimah Rahmah)", jabatan: "Guru Kelas 4A", foto: "/guru/fatimah-rahmah.jpeg" },
  { nama: "(Cahyadi Za'far, S. Pd)", jabatan: "Guru Kelas 4B", foto: "/guru/cahyadi-zafar.jpeg" },
  { nama: "(Neni Herliyani)", jabatan: "Guru Kelas 4C", foto: "/guru/neni-herliyani.jpeg" },
  { nama: "(Fika Hastaria, S. Pd)", jabatan: "Guru Kelas 5A", foto: "/guru/fika-hastaria.jpeg" },
  { nama: "(Kurnia Dwi Hartini, S. Pd)", jabatan: "Guru Kelas 5B", foto: "/guru/kurnia-dwi-hartini.jpeg" },
  { nama: "(Kosim Nurseha, S. Pd)", jabatan: "Guru Kelas 6", foto: "/guru/kosim-nurseha.jpeg" },
  { nama: "(Syamsudin, S. Pd)", jabatan: "Guru PJOK", foto: "/guru/syamsudin.jpeg" },
  { nama: "(Anas Misbakhudin, S. Pd I)", jabatan: "Guru PAI", foto: "/guru/anas-misbakhudin.jpeg" },
  { nama: "(Sasanti Renata Utami, S. Pd)", jabatan: "Guru PJOK", foto: "/guru/sasanti-renata-utami.jpeg" },
  { nama: "(Zakaria, M. Pd)", jabatan: "Guru PAI", foto: "/guru/zakaria.jpeg" },
  { nama: "(Eko Purnomo)", jabatan: "Admin Tata Usaha", foto: "/guru/eko-purnomo.jpeg" },
  { nama: "(Nur'ain)", jabatan: "Admin Tata Usaha", foto: "/guru/nurain.jpeg" },
  { nama: "(Syarifudin)", jabatan: "Penjaga Sekolah", foto: "/guru/syarifudin.jpeg" },
  { nama: "(Rian Hidayat)", jabatan: "Caraka", foto: "/guru/rian-hidayat.jpeg" },
];
