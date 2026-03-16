type KelasKata = {
  kode: string;
  nama: string;
  tipe: string;
};
type Makna = {
  nomor: string;
  kelasKata: KelasKata[];
  definisi: string;
  contoh: { nomor: string; teks: string }[];
}
type EntriKBBI = {
  id: number;
  _id: string;
  nama: string;
  kata: string;
  jenis: string;
  akar_kata: string;
  kelas_kata: string[];
  makna: Makna[];
  etimologi: any;
  kata_turunan: string[];
  gabungan_kata: string[];
  peribahasa: string[];
  idiom: string[];
  peribahasa_dan_makna: { peribahasa: string; makna: string }[];
  created: string;
  updated?: string;
};