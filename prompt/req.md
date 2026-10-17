# Mock Revision

1. Add one more page: "Artikel". It works exactly as any other website article. The preview (cards) of some recent articles are also shown in the home page ("Beranda"). with a see more button that redirect to article page
2. "Dashboard Interaktif" > "Penanaman & Pemeliharaan":
    1. Remove "Progres Pemeliharaan Tahun 1 (P1)" card
    2. Remove target chart in "Monitoring Pertumbuhan per Areal Tanam" (only remove the target because we don't need to show the target in the system)
    3. Remove "Peta Sebaran Petak Pemeliharaan P1" table
    4. Add location map of each resort here, remove map in "Beranda" because it serve similar purpose
    5. Add table for penanaman & table for pemeliharaan
        1. Penanaman: Tahun (year), luas (Ha), Metode (Guludan mini, etc). If you think there's another necessary attribute for this (maybe resor, etc), then feel free to improvise
        2. Pemeliharaan: how many years after penanaman (P1, P2, P3 represent year 1, year 2, year 3. idk the name of the attribute u can come up with yours), kegiatan (what has been done for the pemeliharaan). If you think there's another necessary attribute, feel free to improvise
    6. Add "Penyelesaian Kegiatan Terbangun" as replacement of "Pemusnahan Sawit Invasif" from "Restorasi Fisik & Anggaran Dashboard" in this page. This can be various activity, like "Restorasi Tambak", doing something to the sawah, etc. the necessary attributes here are luas (Ha, example 300 Ha sawah), year, and metode (method: Guludan mini, etc)
3. "Dashboard Interaktif" > "Masyarakat & GEDSI":
    1. Change the tab name to "Pemberdayaan Masyarakat & GEDSI" instead of just "Masyarakat & GEDSI"
    2. Completely remove "Peran" in this page. So no filter of it, nor data about it.
    3. In "Proporsi Partisipasi Berdasarkan Gender", also track how many of them "Terlibat Penanaman"
    4. Remove "Peserta Berdasarkan Jenis Kegiatan"
    5. Remove "Desa Pelaksana Padiatapa (FPIC)"
    6. Remove "Perbandingan Peserta per Triwulan"
    7. Add "Investrasi Kelompok Masyarakat". Basically this tracks the investment of this program to the people. this contains "Nama Kelompok" (KTH x, KTH y, etc), "Jenis Investasi" (Penggilingan padi, dll), and progress (Berkembang baik, kurang, belum. better if there's visual color difference)
    8. Add "Sekolah Lapang". This is basically just activity log, with: "Nama Kegiatan", "Peserta" (KTH x, etc) , and Image.
4. "Dashboard Interaktif" > "SMART Patrol":
    1. Every "Resor" data here is chanegd to "Grid". Name it Grid 1, 2, 3 an so on for now.
    2. "Triwulan" filter is changed to "Bulan" (monthly)
    3. Tipe temuan is "Flora", "Fauna", and "Gangguan Kawasan"
    4. "Frekuensi Patroli Pengamanan" should be changed from how many times to how many grid.
    5. How many patrol in each grid is deleted, because it will only be done once. how many temuan still presist.
    6. "Log Patroli Terkini" can only be seen by specific authenticated user. so make sure you add a tag to tell this.
        1. Temuan can be flora, fauna, or gangguan kawasan. status will differs based on the type too.
        2. Every patrol can have more than one temuan
        3. With these informations above, you should change how the data is displayed. choose what you think is the best
5. "Dashboard Interaktif" > "Satwa & Biodiversity":
    1. make sure to add Flora and Fauna too instead of just fauna. you can apply filter
6. With all the information above, you're free to choose and remake how the data is displayed (table, card, etc), except if i explicitly told you how the data should be displayed. 