// All dummy data sourced from the Semester I 2026 report

export const IMAGES = {
  heroMangrove: 'https://images.pexels.com/photos/30124670/pexels-photo-30124670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveIsland: 'https://images.pexels.com/photos/34263949/pexels-photo-34263949.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveWalkway: 'https://images.pexels.com/photos/38127408/pexels-photo-38127408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveRiver: 'https://images.pexels.com/photos/3923731/pexels-photo-3923731.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveBoardwalk: 'https://images.pexels.com/photos/38127406/pexels-photo-38127406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangrovePier: 'https://images.pexels.com/photos/30018115/pexels-photo-30018115.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveRoots: 'https://images.pexels.com/photos/35125738/pexels-photo-35125738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveRootsWater: 'https://images.pexels.com/photos/12708316/pexels-photo-12708316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveRootsLagoon: 'https://images.pexels.com/photos/27100732/pexels-photo-27100732.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangrovePlanting: 'https://images.pexels.com/photos/33651991/pexels-photo-33651991.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangrovePlanting2: 'https://images.pexels.com/photos/35623102/pexels-photo-35623102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveSunset: 'https://images.pexels.com/photos/11635487/pexels-photo-11635487.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveYoung: 'https://images.pexels.com/photos/11341037/pexels-photo-11341037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveCoast: 'https://images.pexels.com/photos/8300250/pexels-photo-8300250.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveBangladesh: 'https://images.pexels.com/photos/38827970/pexels-photo-38827970.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveFamily: 'https://images.pexels.com/photos/35861397/pexels-photo-35861397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  mangroveScenery: 'https://images.pexels.com/photos/27434392/pexels-photo-27434392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const KPI_DATA = [
  { id: 'area', label: 'Total Luas Pemulihan', value: 352, unit: 'Ha', target: 352, percent: 100, icon: 'trees', color: 'mangrove', detail: '150 Ha + 202 Ha areal pemulihan' },
  { id: 'participants', label: 'Total Partisipan', value: 513, unit: 'orang', target: 513, percent: 100, icon: 'users', color: 'lagoon', detail: '409 Laki-laki & 104 Perempuan' },
  { id: 'budget', label: 'Realisasi Anggaran', value: 10.83, unit: '%', target: 100, percent: 10.83, icon: 'wallet', color: 'sand', detail: 'Rp2,49 M dari Rp23,05 M' },
  { id: 'patrol', label: 'Frekuensi Patroli', value: 15, unit: 'kali', target: 36, percent: 41.67, icon: 'shield', color: 'clay', detail: 'Target tahunan: 36 kali' },
];

// Modul 1: Penanaman & Pemeliharaan
export const PEMELIHARAAN_P1 = {
  target: 202,
  realisasi: 67.43,
  percent: 33.38,
  petak: ['LTLI.25.3.09', 'LTLI.25.3.10', 'LTLI.25.3.11', 'LTLI.25.3.12'],
  tanggal: '22–27 Juni 2026',
};

export const MONITORING_PERTUMBUHAN = [
  { blok: 'Blok 150 Ha', target: 150, realisasi: 150, percent: 100 },
  { blok: 'Blok 202 Ha', target: 202, realisasi: 202, percent: 100 },
];

export const GULUDAN_MINI = {
  keranjang: 6,
  ukuran: '55 × 35 × 45 cm',
  pancang: '1 meter',
  bibitPerUnit: 60,
  desc: 'Konstruksi keranjang bambu diikat pancang, diisi lumpur & 60 bibit/unit untuk lokasi genangan air dalam.',
};

export const PETAK_PEMELIHARAAN = [
  { id: 'LTLI.25.3.09', resor: 'Resor I Karang Gading', luas: 16.85, status: 'Selesai', persen: 100 },
  { id: 'LTLI.25.3.10', resor: 'Resor I Karang Gading', luas: 16.85, status: 'Selesai', persen: 100 },
  { id: 'LTLI.25.3.11', resor: 'Resor II Tapak Kuda', luas: 16.85, status: 'Sedang Berjalan', persen: 70 },
  { id: 'LTLI.25.3.12', resor: 'Resor III Selotong', luas: 16.88, status: 'Sedang Berjalan', persen: 60 },
];

// Modul 2: Kelompok Masyarakat & GEDSI
export const GENDER_DATA = [
  { label: 'Laki-laki', value: 409, percent: 79.7, color: '#236a4e' },
  { label: 'Perempuan', value: 104, percent: 20.3, color: '#3fa9c2' },
];

export const PENERIMA_MANFAAT = [
  { kategori: 'Masyarakat', lakiLaki: 302, perempuan: 61 },
  { kategori: 'Petugas (BBKSDA/Fasdes)', lakiLaki: 107, perempuan: 43 },
];

export const PERAN_DATA = [
  { label: 'Masyarakat', value: 363, percent: 70.8, color: '#358463' },
  { label: 'Petugas', value: 150, percent: 29.2, color: '#df8c2e' },
];

export const KEGIATAN_PESERTA = [
  { kegiatan: 'Capacity Building GEDSI', peserta: 138, desa: 3 },
  { kegiatan: 'Evaluasi Fasilitator Desa', peserta: 47, desa: 14 },
  { kegiatan: 'Penyusunan Laporan Proyek', peserta: 45, desa: 17 },
  { kegiatan: 'Pemeliharaan P1', peserta: 42, desa: 1 },
  { kegiatan: 'Padiatapa (FPIC)', peserta: 60, desa: 5 },
];

export const SUB_KATEGORI = [
  { label: 'Laki-laki Masyarakat', value: 302, percent: 58.9, color: '#236a4e' },
  { label: 'Laki-laki Petugas', value: 107, percent: 20.9, color: '#54a180' },
  { label: 'Perempuan Masyarakat', value: 61, percent: 11.9, color: '#3fa9c2' },
  { label: 'Perempuan Petugas', value: 43, percent: 8.4, color: '#73c9da' },
];

export const KTH_LIST = [
  { nama: 'KTH Harapan Indah', desa: 'Pematang Cengal', anggota: 35, kegiatan: ['Padiatapa', 'Pemeliharaan P1', 'Pembersihan Lumut'] },
  { nama: 'KTH Harapan Jaya', desa: 'Pematang Cengal', anggota: 28, kegiatan: ['Padiatapa', 'Pemeliharaan P1'] },
  { nama: 'KTH Mawar', desa: 'Tapak Kuda', anggota: 31, kegiatan: ['Padiatapa', 'Pembersihan Lumut'] },
  { nama: 'KTH Tumbuh Subur', desa: 'Tapak Kuda', anggota: 26, kegiatan: ['Padiatapa', 'Pemeliharaan P1'] },
];

export const DESA_PADIATAPA = [
  { nama: 'Pematang Cengal', kecamatan: 'Tanjung Pura', status: 'Selesai', tanggal: 'Mei 2026' },
  { nama: 'Paluh Kurau', kecamatan: 'Hamparan Perak', status: 'Selesai', tanggal: 'Mei 2026' },
  { nama: 'Selotong', kecamatan: 'Secanggang', status: 'Selesai', tanggal: 'Jun 2026' },
  { nama: 'Secanggang', kecamatan: 'Secanggang', status: 'Selesai', tanggal: 'Jun 2026' },
  { nama: 'Tapak Kuda', kecamatan: 'Tanjung Pura', status: 'Selesai', tanggal: 'Jun 2026' },
];

// Modul 3: SMART Patrol
export const PATROL_DATA = {
  target: 36,
  capaian: 15,
  percent: 41.67,
  triwulan: [
    { triwulan: 'Triwulan I', capaian: 8, bulan: 'Jan–Mar' },
    { triwulan: 'Triwulan II', capaian: 7, bulan: 'Apr–Jun' },
  ],
};

export const RESOR_PATROL = [
  { nama: 'Resor I Karang Gading', patroli: 6, temuan: 3, status: 'Aktif' },
  { nama: 'Resor II Tapak Kuda', patroli: 5, temuan: 2, status: 'Aktif' },
  { nama: 'Resor III Selotong', patroli: 4, temuan: 1, status: 'Aktif' },
];

export const PATROL_LOG = [
  { id: 'P-001', tanggal: '12 Jan 2026', resor: 'Resor I Karang Gading', temuan: 'Perambahan lahan', status: 'Ditangani' },
  { id: 'P-002', tanggal: '25 Jan 2026', resor: 'Resor II Tapak Kuda', temuan: 'Penebangan liar', status: 'Ditangani' },
  { id: 'P-003', tanggal: '08 Feb 2026', resor: 'Resor III Selotong', temuan: 'Aman terkendali', status: 'Selesai' },
  { id: 'P-004', tanggal: '15 Feb 2026', resor: 'Resor I Karang Gading', temuan: 'Pencurian kayu', status: 'Ditangani' },
  { id: 'P-005', tanggal: '03 Mar 2026', resor: 'Resor II Tapak Kuda', temuan: 'Aman terkendali', status: 'Selesai' },
  { id: 'P-006', tanggal: '20 Mar 2026', resor: 'Resor III Selotong', temuan: 'Penambangan liar', status: 'Dalam proses' },
  { id: 'P-007', tanggal: '10 Apr 2026', resor: 'Resor I Karang Gading', temuan: 'Aman terkendali', status: 'Selesai' },
  { id: 'P-008', tanggal: '22 Apr 2026', resor: 'Resor II Tapak Kuda', temuan: 'Perambahan lahan', status: 'Ditangani' },
];

// Modul 4: Monitoring Satwa
export const SATWA_DATA = [
  { kelompok: 'Burung Air', jumlah: 24, contoh: 'Cangking Abu, Kuntul Kerbau, Sipil', color: '#236a4e' },
  { kelompok: 'Reptil', jumlah: 8, contoh: 'Biawak Air, Ular Sendok, Buaya Muara', color: '#3fa9c2' },
  { kelompok: 'Mamalia', jumlah: 5, contoh: 'Monyet Ekor Panjang, Linsang', color: '#df8c2e' },
  { kelompok: 'Biota Perairan', jumlah: 17, contoh: 'Kepiting Bakau, Udang, Ikan Gelodok', color: '#b8634f' },
];

export const TUNTONG_STATUS = {
  ketersediaanData: 'Belum Tersedia',
  rencana: 'Survei populasi & penangkaran dijadwalkan Semester II',
  catatan: 'Laporan Semester I mencatat pendataan keanekaragaman hayati umum saat patroli, namun data spesifik populasi Tuntong Laut belum dirinci.',
};

// Modul 5: Restorasi Fisik & Anggaran
export const MODIFIKASI_TANGGUL = {
  target: 100.3,
  realisasi: 100.3,
  percent: 100,
  panjang: 12813,
  panjangKm: 12.81,
  petak: ['LTL.I.26.4.02', 'LTL.I.26.4.03', 'LTL.I.26.4.04', 'LTL.I.26.4.05', 'LTL.I.26.4.06'],
  alat: 'Eksavator',
};

export const SAWIT_INVASIF = {
  target: 217.67,
  realisasi: 3.21,
  percent: 1.47,
  batang: 364,
  metode: 'Suntik bor Herbisida Glyphosate (Roundup) 100cc',
  lokasi: 'Resor III Selotong & Desa Secanggang',
  tanggal: '15–20 Juni 2026',
};

export const ANGGARAN = {
  pagu: 23053348000,
  realisasi: 2496983865,
  percent: 10.83,
  sisa: 20556366135,
};

// 17 Desa Penyangga
export const DESA_PENYANGGA = [
  { no: 1, kecamatan: 'Secanggang', desa: 'Karang Gading', pria: 3533, wanita: 3478 },
  { no: 2, kecamatan: 'Secanggang', desa: 'Kwala Besar', pria: 864, wanita: 796 },
  { no: 3, kecamatan: 'Secanggang', desa: 'Selotong', pria: 2527, wanita: 2383 },
  { no: 4, kecamatan: 'Secanggang', desa: 'Secanggang', pria: 3613, wanita: 3507 },
  { no: 5, kecamatan: 'Secanggang', desa: 'Tanjung Ibus', pria: 2849, wanita: 2748 },
  { no: 6, kecamatan: 'Secanggang', desa: 'Sungai Ular', pria: 1545, wanita: 1525 },
  { no: 7, kecamatan: 'Secanggang', desa: 'Jaring Halus', pria: 1730, wanita: 1510 },
  { no: 8, kecamatan: 'Secanggang', desa: 'Pantai Gading', pria: 2051, wanita: 2004 },
  { no: 9, kecamatan: 'Tanjung Pura', desa: 'Pantai Cermin', pria: 3389, wanita: 3298 },
  { no: 10, kecamatan: 'Tanjung Pura', desa: 'Pematang Cengal', pria: 4797, wanita: 4573 },
  { no: 11, kecamatan: 'Tanjung Pura', desa: 'Bubun', pria: 1662, wanita: 1588 },
  { no: 12, kecamatan: 'Tanjung Pura', desa: 'Tapak Kuda', pria: 1148, wanita: 1113 },
  { no: 13, kecamatan: 'Tanjung Pura', desa: 'Karya Maju', pria: 1342, wanita: 1365 },
  { no: 14, kecamatan: 'Tanjung Pura', desa: 'Suka Maju', pria: 1855, wanita: 1801 },
  { no: 15, kecamatan: 'Hamparan Perak', desa: 'Paluh Kurau', pria: 3214, wanita: 3079 },
  { no: 16, kecamatan: 'Labuhan Deli', desa: 'Karang Gading', pria: 3316, wanita: 3178 },
  { no: 17, kecamatan: 'Labuhan Deli', desa: 'Telaga Tujuh', pria: 1451, wanita: 1388 },
];

export const TOTAL_PENDUDUK = { pria: 40886, wanita: 39334, total: 80220 };

// Learning Hub modules
export const LEARNING_MODULES = [
  {
    id: 'guludan-mini',
    title: 'Modul Restorasi Silvikutur Adaptif',
    subtitle: 'Metode Guludan Mini & Pembersihan Lumut',
    desc: 'Panduan teknis konstruksi guludan mini untuk lokasi genangan air dalam menggunakan keranjang bambu, serta SOP pembersihan lumut pengganggu bibit.',
    pages: 24,
    type: 'PDF',
    icon: 'sprout',
  },
  {
    id: 'sawit-invasif',
    title: 'Panduan Pemusnahan Sawit Invasif',
    subtitle: 'Metode Injeksi Herbisida & Modifikasi Tanggul',
    desc: 'Prosedur penyuntikan Herbisida Glyphosate (Roundup) pada batang sawit menggunakan bor dan spuit 100cc, beserta mitigasi pencemaran lingkungan.',
    pages: 18,
    type: 'PDF',
    icon: 'scissors',
  },
  {
    id: 'gedsi',
    title: 'Kerangka Inklusi Sosial GEDSI',
    subtitle: 'Gender Equality, Disability & Social Inclusion',
    desc: 'Dokumentasi prinsip dan implementasi GEDSI dalam konservasi mangrove, termasuk modul capacity building dan sensitization workshop.',
    pages: 32,
    type: 'PDF',
    icon: 'users',
  },
  {
    id: 'padiatapa',
    title: 'Prosedur Padiatapa (FPIC)',
    subtitle: 'Persetujuan atas Dasar Informasi di Awal Tanpa Paksaan',
    desc: 'Kerangka pelaksanaan FPIC di 5 desa penyangga, meliputi tahapan sosialisasi, musyawarah, dan dokumentasi persetujuan masyarakat.',
    pages: 20,
    type: 'PDF',
    icon: 'scroll',
  },
];

// Publications
export const PUBLICATIONS = [
  {
    id: 'r1',
    title: 'Laporan Semester I Tahun 2026',
    subtitle: 'Forest Programme VI: Protection of Mangrove Forest',
    date: 'Juni 2026',
    type: 'Laporan Berkala',
    size: '4.2 MB',
  },
  {
    id: 'r2',
    title: 'Laporan Triwulan I 2026',
    subtitle: 'Periode Januari–Maret 2026',
    date: 'Maret 2026',
    type: 'Laporan Berkala',
    size: '2.8 MB',
  },
  {
    id: 'r3',
    title: 'Laporan Triwulan II 2026',
    subtitle: 'Periode April–Juni 2026',
    date: 'Juni 2026',
    type: 'Laporan Berkala',
    size: '3.1 MB',
  },
  {
    id: 'r4',
    title: 'Dokumentasi Padiatapa 5 Desa',
    subtitle: 'Proses FPIC & Berita Acara Persetujuan',
    date: 'Juni 2026',
    type: 'Dokumentasi',
    size: '8.5 MB',
  },
];

export const GALLERY_ITEMS = [
  { id: 'g1', title: 'Aerial Pemulihan Ekosistem', category: 'Drone', img: 'heroMangrove' },
  { id: 'g2', title: 'Pulau Mangrove dari Udara', category: 'Drone', img: 'mangroveIsland' },
  { id: 'g3', title: 'Boardwalk Mangrove', category: 'Drone', img: 'mangroveBoardwalk' },
  { id: 'g4', title: 'Sungai Mangrove', category: 'Drone', img: 'mangroveRiver' },
  { id: 'g5', title: 'Akar Mangrove', category: 'Foto Lapangan', img: 'mangroveRoots' },
  { id: 'g6', title: 'Penanaman Bibit', category: 'Foto Lapangan', img: 'mangrovePlanting' },
  { id: 'g7', title: 'Penanaman Mangrove', category: 'Foto Lapangan', img: 'mangrovePlanting2' },
  { id: 'g8', title: 'Mangrove Saat Senja', category: 'Foto Lapangan', img: 'mangroveSunset' },
  { id: 'g9', title: 'Bibit Mangrove Muda', category: 'Foto Lapangan', img: 'mangroveYoung' },
];

// Quarterly participant data
export const QUARTERLY_GENDER = [
  { triwulan: 'TW I', perempuan: 21, lakiLaki: 93 },
  { triwulan: 'TW II', perempuan: 83, lakiLaki: 316 },
];
