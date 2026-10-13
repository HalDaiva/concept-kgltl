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

// Articles
export const ARTICLES = [
  {
    id: 'a1',
    title: 'Guludan Mini: Inovasi Restorasi Mangrove di Lokasi Genangan Dalam',
    excerpt: 'Teknik guludan mini menggunakan keranjang bambu menjadi solusi adaptif untuk penanaman mangrove di area dengan genangan air yang dalam. Metode ini telah terbukti meningkatkan tingkat keberhasilan bibit secara signifikan.',
    category: 'Teknik Restorasi',
    date: '15 Juni 2026',
    author: 'Tim Teknis BBKSDA Sumut',
    readTime: '5 menit',
    image: 'mangrovePlanting',
    tags: ['Guludan Mini', 'Silvikutur', 'Penanaman'],
  },
  {
    id: 'a2',
    title: 'GEDSI dalam Konservasi: Memastikan Partisipasi Inklusif di SM KGLTL',
    excerpt: 'Program Forest Programme VI menempatkan kesetaraan gender dan inklusi sosial sebagai pilar utama. Sebanyak 104 perempuan dari 17 desa penyangga telah aktif terlibat dalam kegiatan pemeliharaan dan patroli kawasan.',
    category: 'Masyarakat & GEDSI',
    date: '10 Juni 2026',
    author: 'Fasilitator Desa KGLTL',
    readTime: '7 menit',
    image: 'mangroveFamily',
    tags: ['GEDSI', 'Partisipasi', 'Gender'],
  },
  {
    id: 'a3',
    title: 'SMART Patrol: Pengawasan Berbasis Teknologi di Kawasan Mangrove',
    excerpt: 'Sistem SMART Patrol memungkinkan pencatatan temuan lapangan secara real-time. Selama Semester I 2026, sebanyak 15 patroli berhasil dilaksanakan dengan 6 temuan gangguan kawasan yang semuanya telah ditangani.',
    category: 'Patroli & Keamanan',
    date: '5 Juni 2026',
    author: 'Petugas Pengamanan BBKSDA',
    readTime: '4 menit',
    image: 'mangroveBangladesh',
    tags: ['SMART Patrol', 'Pengamanan', 'Temuan'],
  },
  {
    id: 'a4',
    title: 'Tuntong Laut: Satwa Prioritas yang Membutuhkan Perhatian Khusus',
    excerpt: 'Tuntong Laut (Batagur baska) merupakan salah satu reptil paling terancam punah di dunia. Program monitoring intensif dijadwalkan pada Semester II 2026 untuk mendata populasi dan habitat sarangnya di SM KGLTL.',
    category: 'Satwa & Biodiversitas',
    date: '28 Mei 2026',
    author: 'Tim Biodiversitas',
    readTime: '6 menit',
    image: 'mangroveRoots',
    tags: ['Tuntong Laut', 'Reptil', 'Konservasi'],
  },
  {
    id: 'a5',
    title: 'Padiatapa (FPIC): Membangun Persetujuan Masyarakat yang Bermakna',
    excerpt: 'Proses Padiatapa telah berhasil dilaksanakan di 5 desa penyangga. Pendekatan ini memastikan bahwa seluruh kegiatan restorasi mendapat persetujuan penuh dari masyarakat sebelum implementasi.',
    category: 'Komunitas',
    date: '20 Mei 2026',
    author: 'Tim Fasilitator Desa',
    readTime: '5 menit',
    image: 'mangroveScenery',
    tags: ['FPIC', 'Padiatapa', 'Desa'],
  },
  {
    id: 'a6',
    title: 'Modifikasi Tanggul 12,81 Km: Memulihkan Hidrologi Mangrove',
    excerpt: 'Kegiatan modifikasi tanggul dan saluran air sepanjang 12,81 kilometer telah berhasil diselesaikan 100%. Intervensi ini bertujuan memulihkan pola hidrologi alami yang mendukung regenerasi mangrove.',
    category: 'Restorasi Fisik',
    date: '12 Mei 2026',
    author: 'Tim Teknis Lapangan',
    readTime: '4 menit',
    image: 'mangroveCoast',
    tags: ['Hidrologi', 'Tanggul', 'Restorasi'],
  },
];

// Modul 1: Penanaman & Pemeliharaan
export const MONITORING_PERTUMBUHAN = [
  { blok: 'Blok 150 Ha', realisasi: 150 },
  { blok: 'Blok 202 Ha', realisasi: 202 },
];

export const GULUDAN_MINI = {
  keranjang: 6,
  ukuran: '55 × 35 × 45 cm',
  pancang: '1 meter',
  bibitPerUnit: 60,
  desc: 'Konstruksi keranjang bambu diikat pancang, diisi lumpur & 60 bibit/unit untuk lokasi genangan air dalam.',
};

// Resort location map data
export const RESORT_LOCATIONS = [
  {
    id: 'r1',
    nama: 'Resor I Karang Gading',
    koordinat: { x: 35, y: 40 },
    luas: 150,
    kecamatan: 'Secanggang & Labuhan Deli',
    kegiatan: ['Penanaman 150 Ha', 'Modifikasi Tanggul', 'Patroli Aktif'],
    status: 'Aktif',
  },
  {
    id: 'r2',
    nama: 'Resor II Tapak Kuda',
    koordinat: { x: 55, y: 55 },
    luas: 120,
    kecamatan: 'Tanjung Pura',
    kegiatan: ['Penanaman 120 Ha', 'Pemeliharaan P1', 'Sekolah Lapang'],
    status: 'Aktif',
  },
  {
    id: 'r3',
    nama: 'Resor III Selotong',
    koordinat: { x: 68, y: 35 },
    luas: 82,
    kecamatan: 'Secanggang',
    kegiatan: ['Penanaman 82 Ha', 'Restorasi Tambak', 'Patroli Aktif'],
    status: 'Aktif',
  },
];

// Penanaman table
export const PENANAMAN_DATA = [
  { id: 'PT-001', tahun: 2025, resor: 'Resor I Karang Gading', luas: 150, metode: 'Guludan Mini', bibit: 9000, jenis: 'Rhizophora mucronata', status: 'Selesai', keterangan: 'Blok 150 Ha, 60 bibit/unit' },
  { id: 'PT-002', tahun: 2026, resor: 'Resor II Tapak Kuda', luas: 120, metode: 'Guludan Mini', bibit: 7200, jenis: 'Avicennia marina', status: 'Selesai', keterangan: 'Guludan 6 keranjang/unit' },
  { id: 'PT-003', tahun: 2026, resor: 'Resor III Selotong', luas: 82, metode: 'Tanam Langsung', bibit: 4920, jenis: 'Sonneratia caseolaris', status: 'Selesai', keterangan: 'Area pasang surut rendah' },
  { id: 'PT-004', tahun: 2026, resor: 'Resor I Karang Gading', luas: 45, metode: 'Pembersihan Lumut', bibit: 2700, jenis: 'Rhizophora apiculata', status: 'Berjalan', keterangan: 'Penanaman tahap II' },
];

// Pemeliharaan table
export const PEMELIHARAAN_DATA = [
  { id: 'PM-001', resor: 'Resor I Karang Gading', tahunTanam: 2025, tahunPemeliharaan: 'P1', luas: 33.70, kegiatan: ['Pembersihan lumut', 'Penyulaman bibit mati', 'Pengecekan guludan'], pelaksana: 'KTH Harapan Indah', tanggal: '22-27 Jun 2026', status: 'Selesai' },
  { id: 'PM-002', resor: 'Resor I Karang Gading', tahunTanam: 2025, tahunPemeliharaan: 'P1', luas: 33.70, kegiatan: ['Pembersihan gulma', 'Penyulaman', 'Monitoring pertumbuhan'], pelaksana: 'KTH Harapan Jaya', tanggal: '22-27 Jun 2026', status: 'Selesai' },
  { id: 'PM-003', resor: 'Resor II Tapak Kuda', tahunTanam: 2025, tahunPemeliharaan: 'P1', luas: 33.70, kegiatan: ['Pembersihan lumut', 'Perbaikan guludan rusak', 'Monitoring'], pelaksana: 'KTH Mawar', tanggal: '10-15 Jul 2026', status: 'Berjalan' },
  { id: 'PM-004', resor: 'Resor III Selotong', tahunTanam: 2025, tahunPemeliharaan: 'P1', luas: 33.73, kegiatan: ['Penyulaman bibit', 'Pembersihan sampah', 'Pengecekan pertumbuhan'], pelaksana: 'KTH Tumbuh Subur', tanggal: '10-15 Jul 2026', status: 'Berjalan' },
  { id: 'PM-005', resor: 'Resor I Karang Gading', tahunTanam: 2024, tahunPemeliharaan: 'P2', luas: 50, kegiatan: ['Pemupukan', 'Pengendalian hama', 'Monitoring pertumbuhan lanjut'], pelaksana: 'KTH Harapan Indah', tanggal: 'Agt 2026', status: 'Dijadwalkan' },
];

// Penyelesaian Kegiatan Terbangun (replacing Pemusnahan Sawit Invasif in Tab1)
export const PENYELESAIAN_KEGIATAN = [
  { id: 'PK-001', kegiatan: 'Restorasi Tambak', luas: 45.5, resor: 'Resor III Selotong', tahun: 2026, metode: 'Pengerukan & Normalisasi', status: 'Selesai', percent: 100 },
  { id: 'PK-002', kegiatan: 'Rehabilitasi Sawah Pesisir', luas: 30.0, resor: 'Resor I Karang Gading', tahun: 2026, metode: 'Guludan Mini', status: 'Selesai', percent: 100 },
  { id: 'PK-003', kegiatan: 'Normalisasi Saluran Irigasi', luas: 12.81, resor: 'Resor II Tapak Kuda', tahun: 2026, metode: 'Eksavator Mekanik', status: 'Selesai', percent: 100 },
  { id: 'PK-004', kegiatan: 'Pemusnahan Sawit Invasif', luas: 3.21, resor: 'Resor III Selotong', tahun: 2026, metode: 'Suntik Herbisida Glyphosate', status: 'Berjalan', percent: 1.47 },
  { id: 'PK-005', kegiatan: 'Restorasi Padang Lamun', luas: 15.0, resor: 'Resor II Tapak Kuda', tahun: 2026, metode: 'Transplantasi Lamun', status: 'Dijadwalkan', percent: 0 },
];

// Modul 2: Pemberdayaan Masyarakat & GEDSI
export const GENDER_DATA = [
  { label: 'Laki-laki', value: 409, percent: 79.7, color: '#236a4e', terlibatPenanaman: 280 },
  { label: 'Perempuan', value: 104, percent: 20.3, color: '#3fa9c2', terlibatPenanaman: 67 },
];

export const PENERIMA_MANFAAT = [
  { kategori: 'Masyarakat', lakiLaki: 302, perempuan: 61 },
  { kategori: 'Petugas (BBKSDA/Fasdes)', lakiLaki: 107, perempuan: 43 },
];

export const KTH_LIST = [
  { nama: 'KTH Harapan Indah', desa: 'Pematang Cengal', anggota: 35, kegiatan: ['Padiatapa', 'Pemeliharaan P1', 'Pembersihan Lumut'] },
  { nama: 'KTH Harapan Jaya', desa: 'Pematang Cengal', anggota: 28, kegiatan: ['Padiatapa', 'Pemeliharaan P1'] },
  { nama: 'KTH Mawar', desa: 'Tapak Kuda', anggota: 31, kegiatan: ['Padiatapa', 'Pembersihan Lumut'] },
  { nama: 'KTH Tumbuh Subur', desa: 'Tapak Kuda', anggota: 26, kegiatan: ['Padiatapa', 'Pemeliharaan P1'] },
];

// Investasi Kelompok Masyarakat
export const INVESTASI_KELOMPOK = [
  { id: 'IK-001', namaKelompok: 'KTH Harapan Indah', desa: 'Pematang Cengal', jenisInvestasi: 'Penggilingan Padi', nilai: 85000000, progress: 'Berkembang Baik', tahun: 2026 },
  { id: 'IK-002', namaKelompok: 'KTH Harapan Jaya', desa: 'Pematang Cengal', jenisInvestasi: 'Budidaya Kepiting Bakau', nilai: 65000000, progress: 'Berkembang Baik', tahun: 2026 },
  { id: 'IK-003', namaKelompok: 'KTH Mawar', desa: 'Tapak Kuda', jenisInvestasi: 'Ekowisata Mangrove', nilai: 120000000, progress: 'Kurang Berkembang', tahun: 2026 },
  { id: 'IK-004', namaKelompok: 'KTH Tumbuh Subur', desa: 'Tapak Kuda', jenisInvestasi: 'Pengolahan Hasil Hutan Bukan Kayu', nilai: 45000000, progress: 'Belum Berkembang', tahun: 2026 },
  { id: 'IK-005', namaKelompok: 'KTH Selotong Lestari', desa: 'Selotong', jenisInvestasi: 'Budidaya Udang Ramah Lingkungan', nilai: 95000000, progress: 'Berkembang Baik', tahun: 2026 },
];

// Sekolah Lapang
export const SEKOLAH_LAPANG = [
  {
    id: 'SL-001',
    namaKegiatan: 'Pelatihan Teknik Guludan Mini & Penanaman Mangrove',
    tanggal: '10 Maret 2026',
    lokasi: 'Resor I Karang Gading',
    peserta: ['KTH Harapan Indah', 'KTH Harapan Jaya'],
    jumlahPeserta: 63,
    image: 'mangrovePlanting',
    deskripsi: 'Pelatihan teknis konstruksi guludan mini menggunakan keranjang bambu untuk lokasi genangan air dalam.',
  },
  {
    id: 'SL-002',
    namaKegiatan: 'Workshop GEDSI & Capacity Building',
    tanggal: '25 Maret 2026',
    lokasi: 'Desa Pematang Cengal',
    peserta: ['KTH Mawar', 'KTH Tumbuh Subur', 'KTH Harapan Indah'],
    jumlahPeserta: 92,
    image: 'mangroveFamily',
    deskripsi: 'Peningkatan kapasitas kelompok masyarakat tentang kesetaraan gender dalam kegiatan konservasi.',
  },
  {
    id: 'SL-003',
    namaKegiatan: 'Pelatihan SMART Patrol & Identifikasi Satwa',
    tanggal: '5 April 2026',
    lokasi: 'Resor II Tapak Kuda',
    peserta: ['KTH Tumbuh Subur', 'KTH Mawar'],
    jumlahPeserta: 57,
    image: 'mangroveBangladesh',
    deskripsi: 'Pelatihan penggunaan aplikasi SMART Patrol dan teknik identifikasi satwa liar mangrove.',
  },
  {
    id: 'SL-004',
    namaKegiatan: 'Praktik Pemeliharaan P1 & Monitoring Pertumbuhan',
    tanggal: '22 Juni 2026',
    lokasi: 'Resor I & II KGLTL',
    peserta: ['KTH Harapan Indah', 'KTH Harapan Jaya', 'KTH Mawar', 'KTH Tumbuh Subur'],
    jumlahPeserta: 120,
    image: 'mangrovePlanting2',
    deskripsi: 'Praktik lapangan pemeliharaan tahun pertama termasuk pembersihan lumut dan penyulaman bibit.',
  },
];

// Modul 3: SMART Patrol (Grid-based)
export const PATROL_DATA = {
  target: 36,
  capaian: 15,
  percent: 41.67,
  bulan: [
    { bulan: 'Januari', capaian: 3 },
    { bulan: 'Februari', capaian: 2 },
    { bulan: 'Maret', capaian: 3 },
    { bulan: 'April', capaian: 4 },
    { bulan: 'Mei', capaian: 2 },
    { bulan: 'Juni', capaian: 1 },
  ],
};

export const GRID_PATROL = [
  { nama: 'Grid 1', temuan: 3, status: 'Aktif', area: 'Zona Utara Karang Gading' },
  { nama: 'Grid 2', temuan: 1, status: 'Aktif', area: 'Zona Tengah Karang Gading' },
  { nama: 'Grid 3', temuan: 2, status: 'Aktif', area: 'Zona Selatan Tapak Kuda' },
  { nama: 'Grid 4', temuan: 0, status: 'Aktif', area: 'Zona Barat Tapak Kuda' },
  { nama: 'Grid 5', temuan: 1, status: 'Aktif', area: 'Zona Utara Selotong' },
  { nama: 'Grid 6', temuan: 2, status: 'Aktif', area: 'Zona Selatan Selotong' },
];

export const PATROL_LOG = [
  {
    id: 'P-001',
    tanggal: '12 Jan 2026',
    grid: 'Grid 1',
    area: 'Zona Utara Karang Gading',
    temuanList: [
      { tipe: 'Gangguan Kawasan', deskripsi: 'Perambahan lahan oleh oknum', status: 'Ditangani' },
      { tipe: 'Flora', deskripsi: 'Rhizophora mucronata — kondisi baik, 95% hidup', status: 'Terdokumentasi' },
    ],
  },
  {
    id: 'P-002',
    tanggal: '25 Jan 2026',
    grid: 'Grid 3',
    area: 'Zona Selatan Tapak Kuda',
    temuanList: [
      { tipe: 'Gangguan Kawasan', deskripsi: 'Penebangan liar pohon bakau', status: 'Ditangani' },
    ],
  },
  {
    id: 'P-003',
    tanggal: '08 Feb 2026',
    grid: 'Grid 5',
    area: 'Zona Utara Selotong',
    temuanList: [
      { tipe: 'Fauna', deskripsi: 'Cangking Abu (Egretta garzetta) — 12 ekor', status: 'Terdokumentasi' },
      { tipe: 'Fauna', deskripsi: 'Monyet Ekor Panjang — 5 ekor', status: 'Terdokumentasi' },
    ],
  },
  {
    id: 'P-004',
    tanggal: '15 Feb 2026',
    grid: 'Grid 1',
    area: 'Zona Utara Karang Gading',
    temuanList: [
      { tipe: 'Gangguan Kawasan', deskripsi: 'Pencurian kayu mangrove', status: 'Proses Hukum' },
    ],
  },
  {
    id: 'P-005',
    tanggal: '03 Mar 2026',
    grid: 'Grid 4',
    area: 'Zona Barat Tapak Kuda',
    temuanList: [
      { tipe: 'Flora', deskripsi: 'Avicennia marina — pertumbuhan normal', status: 'Terdokumentasi' },
      { tipe: 'Fauna', deskripsi: 'Biawak Air (Varanus salvator) — 2 ekor', status: 'Terdokumentasi' },
    ],
  },
  {
    id: 'P-006',
    tanggal: '20 Mar 2026',
    grid: 'Grid 6',
    area: 'Zona Selatan Selotong',
    temuanList: [
      { tipe: 'Gangguan Kawasan', deskripsi: 'Penambangan pasir ilegal', status: 'Ditangani' },
    ],
  },
  {
    id: 'P-007',
    tanggal: '10 Apr 2026',
    grid: 'Grid 2',
    area: 'Zona Tengah Karang Gading',
    temuanList: [
      { tipe: 'Flora', deskripsi: 'Kondisi vegetasi baik, tidak ada gangguan', status: 'Terdokumentasi' },
    ],
  },
  {
    id: 'P-008',
    tanggal: '22 Apr 2026',
    grid: 'Grid 3',
    area: 'Zona Selatan Tapak Kuda',
    temuanList: [
      { tipe: 'Gangguan Kawasan', deskripsi: 'Perambahan lahan untuk tambak ilegal', status: 'Ditangani' },
      { tipe: 'Fauna', deskripsi: 'Kepiting Bakau — populasi stabil', status: 'Terdokumentasi' },
    ],
  },
];

// Modul 4: Monitoring Satwa & Biodiversitas
export const FAUNA_DATA = [
  { kelompok: 'Burung Air', jumlah: 24, contoh: 'Cangking Abu, Kuntul Kerbau, Sipil', color: '#236a4e' },
  { kelompok: 'Reptil', jumlah: 8, contoh: 'Biawak Air, Ular Sendok, Buaya Muara', color: '#3fa9c2' },
  { kelompok: 'Mamalia', jumlah: 5, contoh: 'Monyet Ekor Panjang, Linsang', color: '#df8c2e' },
  { kelompok: 'Biota Perairan', jumlah: 17, contoh: 'Kepiting Bakau, Udang, Ikan Gelodok', color: '#b8634f' },
];

export const FLORA_DATA = [
  { kelompok: 'Mangrove Sejati', jumlah: 12, contoh: 'Rhizophora mucronata, Avicennia marina, Sonneratia caseolaris', color: '#236a4e' },
  { kelompok: 'Mangrove Asosiasi', jumlah: 7, contoh: 'Nypa fruticans, Acrostichum aureum, Hibiscus tiliaceus', color: '#54a180' },
  { kelompok: 'Tumbuhan Pantai', jumlah: 9, contoh: 'Casuarina equisetifolia, Barringtonia asiatica, Calophyllum inophyllum', color: '#3fa9c2' },
  { kelompok: 'Tumbuhan Invasif', jumlah: 3, contoh: 'Elaeis guineensis (Sawit), Acacia mangium', color: '#b8634f' },
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
