import { useState } from 'react';
import {
  GaugeChart, BarChart, DonutChart, HorizontalBarChart, StackedColumnChart,
  ProgressBar, BulletChart, PieChart, HeatmapGrid, StatCard, CountUp
} from '@/components/charts';
import {
  PEMELIHARAAN_P1, MONITORING_PERTUMBUHAN, PETAK_PEMELIHARAAN, GULUDAN_MINI,
  GENDER_DATA, PENERIMA_MANFAAT, PERAN_DATA, KEGIATAN_PESERTA, SUB_KATEGORI,
  DESA_PADIATAPA, KTH_LIST, QUARTERLY_GENDER,
  PATROL_DATA, RESOR_PATROL, PATROL_LOG,
  SATWA_DATA, TUNTONG_STATUS,
  MODIFIKASI_TANGGUL, SAWIT_INVASIF, ANGGARAN,
} from '@/data/mockData';
import {
  Sprout, TrendingUp, Users, Shield, Bird, Waves, Wallet, TreePine, MapPin,
  Calendar, Filter, ClipboardList, AlertTriangle, Info, Leaf, Scissors, Droplet
} from 'lucide-react';

type TabId = 'tab1' | 'tab2' | 'tab3' | 'tab4' | 'tab5';

const TABS: { id: TabId; label: string; icon: React.ReactNode; desc: string }[] = [
  { id: 'tab1', label: 'Penanaman & Pemeliharaan', icon: <Sprout className="w-4 h-4" />, desc: 'Progres restorasi vegetasi & silvikutur adaptif' },
  { id: 'tab2', label: 'Masyarakat & GEDSI', icon: <Users className="w-4 h-4" />, desc: 'Partisipasi warga, padiatapa & inklusi sosial' },
  { id: 'tab3', label: 'SMART Patrol', icon: <Shield className="w-4 h-4" />, desc: 'Pengawasan kawasan partisipatif' },
  { id: 'tab4', label: 'Satwa & Biodiversitas', icon: <Bird className="w-4 h-4" />, desc: 'Monitoring keanekaragaman hayati' },
  { id: 'tab5', label: 'Restorasi Fisik & Anggaran', icon: <Wallet className="w-4 h-4" />, desc: 'Hidrologi, invasif & akuntabilitas keuangan' },
];

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabId>('tab1');

  return (
    <div className="animate-fade-in pt-16 lg:pt-18">
      {/* Header */}
      <section className="bg-gradient-to-br from-mangrove-800 to-mangrove-950 text-white py-12">
        <div className="container-page">
          <span className="badge bg-white/10 text-mangrove-200 border border-white/20 mb-3">Data Center</span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold">Dashboard Interaktif</h1>
          <p className="text-mangrove-300 mt-2">Pemantauan terintegrasi capaian Semester I Tahun 2026</p>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 lg:top-18 z-30 bg-white border-b border-mangrove-100 shadow-sm">
        <div className="container-page">
          <div className="flex gap-1 overflow-x-auto scrollbar-thin py-2">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-mangrove-600 text-white shadow-md'
                    : 'text-mangrove-600 hover:bg-mangrove-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="container-page py-8">
        {activeTab === 'tab1' && <Tab1 />}
        {activeTab === 'tab2' && <Tab2 />}
        {activeTab === 'tab3' && <Tab3 />}
        {activeTab === 'tab4' && <Tab4 />}
        {activeTab === 'tab5' && <Tab5 />}
      </div>
    </div>
  );
}

// Shared Filter Component
function FilterBar({ filters }: { filters: { label: string; options: string[] }[] }) {
  return (
    <div className="card p-4 mb-6">
      <div className="flex items-center gap-2 mb-3 text-mangrove-600">
        <Filter className="w-4 h-4" />
        <span className="text-sm font-semibold">Filter Dashboard</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filters.map((f, i) => (
          <div key={i}>
            <label className="text-xs text-mangrove-400 font-medium block mb-1">{f.label}</label>
            <select className="w-full px-3 py-2 rounded-lg border border-mangrove-200 text-sm text-mangrove-700 focus:outline-none focus:border-mangrove-400 bg-white">
              <option value="">Semua</option>
              {f.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

// Tab 1: Penanaman & Pemeliharaan
function Tab1() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Sprout className="w-6 h-6 text-mangrove-600" />
        <div>
          <h2 className="font-display text-xl font-bold text-mangrove-900">Penanaman & Monitoring Pertumbuhan</h2>
          <p className="text-sm text-mangrove-500">Progres fisik restorasi vegetasi dan teknik silvikutur adaptif</p>
        </div>
      </div>

      <FilterBar filters={[
        { label: 'Tahun Tanam', options: ['2025', '2026'] },
        { label: 'Nomor Petak', options: PEMELIHARAAN_P1.petak },
        { label: 'Resor KGLTL', options: ['Resor I Karang Gading', 'Resor II Tapak Kuda', 'Resor III Selotong'] },
      ]} />

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Gauge: P1 Progress */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Progres Pemeliharaan Tahun 1 (P1)</h3>
          <p className="text-xs text-mangrove-400 mb-4">Realisasi dari target tahunan</p>
          <GaugeChart value={PEMELIHARAAN_P1.realisasi} max={PEMELIHARAAN_P1.target} unit="Ha" color="#236a4e" />
          <div className="mt-4 pt-4 border-t border-mangrove-50 text-sm space-y-1">
            <div className="flex justify-between"><span className="text-mangrove-500">Target</span><span className="font-semibold text-mangrove-900">{PEMELIHARAAN_P1.target} Ha</span></div>
            <div className="flex justify-between"><span className="text-mangrove-500">Realisasi</span><span className="font-semibold text-mangrove-700">{PEMELIHARAAN_P1.realisasi} Ha</span></div>
            <div className="flex justify-between"><span className="text-mangrove-500">Capaian</span><span className="font-semibold text-mangrove-600">{PEMELIHARAAN_P1.percent}%</span></div>
          </div>
        </div>

        {/* Bar Chart: Monitoring */}
        <div className="card p-6 lg:col-span-2">
          <h3 className="font-semibold text-mangrove-900 mb-2">Monitoring Pertumbuhan per Areal Tanam</h3>
          <p className="text-xs text-mangrove-400 mb-4">Target vs Realisasi — Total 352 Ha (Capaian 100%)</p>
          <BarChart
            data={MONITORING_PERTUMBUHAN.map(m => ({
              label: m.blok,
              bars: [
                { value: m.target, color: '#dbede4', name: 'Target' },
                { value: m.realisasi, color: '#236a4e', name: 'Realisasi' },
              ]
            }))}
          />
        </div>
      </div>

      {/* Petak Table */}
      <div className="card p-6">
        <h3 className="font-semibold text-mangrove-900 mb-4">Peta Sebaran Petak Pemeliharaan P1</h3>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-mangrove-50 text-left text-mangrove-700">
                <th className="px-4 py-3 font-semibold">Kode Petak</th>
                <th className="px-4 py-3 font-semibold">Resor</th>
                <th className="px-4 py-3 font-semibold text-right">Luas (Ha)</th>
                <th className="px-4 py-3 font-semibold text-center">Status</th>
                <th className="px-4 py-3 font-semibold">Progres</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mangrove-50">
              {PETAK_PEMELIHARAAN.map((p) => (
                <tr key={p.id} className="hover:bg-mangrove-50/50 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-mangrove-900">{p.id}</td>
                  <td className="px-4 py-3 text-mangrove-600">{p.resor}</td>
                  <td className="px-4 py-3 text-right text-mangrove-700">{p.luas}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`badge ${p.status === 'Selesai' ? 'bg-success-100 text-success-700' : 'bg-warning-100 text-warning-700'}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 w-40">
                    <div className="h-2 rounded-full bg-mangrove-50 overflow-hidden">
                      <div className="h-full rounded-full bg-mangrove-500" style={{ width: `${p.persen}%` }} />
                    </div>
                    <span className="text-xs text-mangrove-400 mt-1 block">{p.persen}%</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Guludan Mini Card */}
      <div className="card p-6 bg-gradient-to-br from-mangrove-50 to-white">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sand-400 to-sand-600 text-white flex items-center justify-center shrink-0">
            <Leaf className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-mangrove-900">Inovasi Guludan Mini</h3>
            <p className="text-sm text-mangrove-500 mt-1">{GULUDAN_MINI.desc}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
              <div className="text-center p-3 bg-white rounded-xl">
                <div className="stat-number text-2xl text-mangrove-900">{GULUDAN_MINI.keranjang}</div>
                <div className="text-xs text-mangrove-400">Keranjang</div>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <div className="stat-number text-2xl text-mangrove-900">{GULUDAN_MINI.bibitPerUnit}</div>
                <div className="text-xs text-mangrove-400">Bibit/unit</div>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <div className="stat-number text-2xl text-mangrove-900">{GULUDAN_MINI.pancang}</div>
                <div className="text-xs text-mangrove-400">Pancang</div>
              </div>
              <div className="text-center p-3 bg-white rounded-xl">
                <div className="text-sm font-display font-bold text-mangrove-900">{GULUDAN_MINI.ukuran}</div>
                <div className="text-xs text-mangrove-400">Dimensi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Tab 2: Masyarakat & GEDSI
function Tab2() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Users className="w-6 h-6 text-mangrove-600" />
        <div>
          <h2 className="font-display text-xl font-bold text-mangrove-900">Kelompok Masyarakat & Keterlibatan GEDSI</h2>
          <p className="text-sm text-mangrove-500">Transparansi bantuan, kemitraan desa, dan demografi penerima manfaat</p>
        </div>
      </div>

      <FilterBar filters={[
        { label: 'Desa Penyangga', options: DESA_PADIATAPA.map(d => d.nama) },
        { label: 'Kelompok KTH', options: KTH_LIST.map(k => k.nama) },
        { label: 'Peran', options: ['Petugas', 'Masyarakat'] },
      ]} />

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Partisipan" value={513} unit="orang" icon={<Users className="w-6 h-6" />} color="mangrove" detail="Semua kegiatan" />
        <StatCard label="Perempuan" value={104} unit="orang" icon={<Users className="w-6 h-6" />} color="lagoon" detail="20.3% partisipan" />
        <StatCard label="Laki-laki" value={409} unit="orang" icon={<Users className="w-6 h-6" />} color="sand" detail="79.7% partisipan" />
        <StatCard label="Desa Padiatapa" value={5} unit="desa" icon={<MapPin className="w-6 h-6" />} color="clay" detail="100% target" />
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Donut: Gender */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Proporsi Partisipasi Berdasarkan Gender</h3>
          <p className="text-xs text-mangrove-400 mb-6">Total 513 individu</p>
          <DonutChart data={GENDER_DATA} />
        </div>

        {/* Stacked Column: Penerima Manfaat */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Komposisi Penerima Manfaat per Kategori</h3>
          <p className="text-xs text-mangrove-400 mb-6">Berdasarkan peran & gender</p>
          <StackedColumnChart
            data={PENERIMA_MANFAAT.map(p => ({
              label: p.kategori,
              segments: [
                { value: p.lakiLaki, color: '#236a4e', name: 'Laki-laki' },
                { value: p.perempuan, color: '#3fa9c2', name: 'Perempuan' },
              ]
            }))}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Horizontal Bar: Kegiatan */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Peserta Berdasarkan Jenis Kegiatan</h3>
          <p className="text-xs text-mangrove-400 mb-6">Jumlah peserta & jumlah desa</p>
          <HorizontalBarChart
            data={KEGIATAN_PESERTA.map(k => ({
              label: k.kegiatan,
              value: k.peserta,
              color: '#358463',
              extra: `${k.desa} desa`,
            }))}
          />
        </div>

        {/* Pie: Sub-kategori */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Sub-kategori Penerima Manfaat</h3>
          <p className="text-xs text-mangrove-400 mb-6">Peran × Gender</p>
          <PieChart data={SUB_KATEGORI} />
        </div>
      </div>

      {/* Padiatapa Table */}
      <div className="card p-6">
        <h3 className="font-semibold text-mangrove-900 mb-4">Desa Pelaksana Padiatapa (FPIC) — 5 Desa (100% Target)</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {DESA_PADIATAPA.map((d, i) => (
            <div key={i} className="p-4 rounded-xl border border-mangrove-100 hover:border-mangrove-300 hover:bg-mangrove-50/50 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-mangrove-400" />
                <span className="text-xs text-mangrove-400">{d.kecamatan}</span>
              </div>
              <div className="font-semibold text-mangrove-900 text-sm">{d.nama}</div>
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-mangrove-400">{d.tanggal}</span>
                <span className="badge bg-success-100 text-success-700">{d.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quarterly Gender */}
      <div className="card p-6">
        <h3 className="font-semibold text-mangrove-900 mb-2">Perbandingan Peserta per Triwulan</h3>
        <p className="text-xs text-mangrove-400 mb-4">Berdasarkan gender</p>
        <BarChart
          data={QUARTERLY_GENDER.map(q => ({
            label: q.triwulan,
            bars: [
              { value: q.lakiLaki, color: '#236a4e', name: 'Laki-laki' },
              { value: q.perempuan, color: '#3fa9c2', name: 'Perempuan' },
            ]
          }))}
        />
      </div>
    </div>
  );
}

// Tab 3: SMART Patrol
function Tab3() {
  const heatmapData = [
    { row: 0, col: 0, value: 3 }, { row: 0, col: 1, value: 2 }, { row: 0, col: 2, value: 1 }, { row: 0, col: 3, value: 2 },
    { row: 1, col: 0, value: 2 }, { row: 1, col: 1, value: 1 }, { row: 1, col: 2, value: 2 }, { row: 1, col: 3, value: 0 },
    { row: 2, col: 0, value: 1 }, { row: 2, col: 1, value: 3 }, { row: 2, col: 2, value: 0 }, { row: 2, col: 3, value: 0 },
  ];
  const months = ['Jan', 'Feb', 'Mar', 'Apr'];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Shield className="w-6 h-6 text-mangrove-600" />
        <div>
          <h2 className="font-display text-xl font-bold text-mangrove-900">SMART Patrol & Pengamanan Kawasan</h2>
          <p className="text-sm text-mangrove-500">Frekuensi pengawasan kawasan bersama masyarakat</p>
        </div>
      </div>

      <FilterBar filters={[
        { label: 'Wilayah Resor', options: ['Resor I Karang Gading', 'Resor II Tapak Kuda', 'Resor III Selotong'] },
        { label: 'Triwulan', options: ['Triwulan I', 'Triwulan II'] },
        { label: 'Tipe Temuan', options: ['Perambahan lahan', 'Penebangan liar', 'Pencurian kayu', 'Aman terkendali'] },
      ]} />

      <div className="grid lg:grid-cols-3 gap-5">
        {/* Bullet: Patroli Progress */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-4">Frekuensi Patroli Pengamanan</h3>
          <BulletChart target={PATROL_DATA.target} actual={PATROL_DATA.capaian} label="Total Patroli" unit=" kali" color="#236a4e" />
          <div className="mt-4 pt-4 border-t border-mangrove-50 grid grid-cols-2 gap-3 text-sm">
            <div>
              <div className="text-xs text-mangrove-400">Capaian</div>
              <div className="font-bold text-mangrove-900">{PATROL_DATA.capaian} kali</div>
            </div>
            <div>
              <div className="text-xs text-mangrove-400">Persentase</div>
              <div className="font-bold text-mangrove-600">{PATROL_DATA.percent}%</div>
            </div>
          </div>
        </div>

        {/* Bar: Quarterly */}
        <div className="card p-6 lg:col-span-2">
          <h3 className="font-semibold text-mangrove-900 mb-2">Distribusi Patroli per Triwulan</h3>
          <p className="text-xs text-mangrove-400 mb-4">Triwulan I: 8 kali | Triwulan II: 7 kali</p>
          <BarChart
            data={PATROL_DATA.triwulan.map(t => ({
              label: t.triwulan,
              bars: [{ value: t.capaian, color: t.triwulan === 'Triwulan I' ? '#236a4e' : '#358463', name: 'Patroli' }]
            }))}
            height={200}
          />
        </div>
      </div>

      {/* Resor Cards */}
      <div className="grid sm:grid-cols-3 gap-4">
        {RESOR_PATROL.map((r, i) => (
          <div key={i} className="card card-hover p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-mangrove-100 text-mangrove-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-mangrove-900 text-sm">{r.nama}</div>
                <span className="badge bg-success-100 text-success-700 text-[10px]">{r.status}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="text-center p-3 bg-mangrove-50 rounded-xl">
                <div className="stat-number text-2xl text-mangrove-900">{r.patroli}</div>
                <div className="text-xs text-mangrove-400">Patroli</div>
              </div>
              <div className="text-center p-3 bg-clay-50 rounded-xl">
                <div className="stat-number text-2xl text-clay-700">{r.temuan}</div>
                <div className="text-xs text-clay-400">Temuan</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Heatmap */}
      <div className="card p-6">
        <h3 className="font-semibold text-mangrove-900 mb-2">Heatmap Patroli per Resor & Bulan</h3>
        <p className="text-xs text-mangrove-400 mb-6">Intensitas patroli di 3 resor (Jan–Apr 2026)</p>
        <HeatmapGrid
          data={heatmapData}
          rowsLabel={['Resor I', 'Resor II', 'Resor III']}
          colsLabel={months}
        />
      </div>

      {/* Patrol Log Table */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-4">
          <ClipboardList className="w-5 h-5 text-mangrove-600" />
          <h3 className="font-semibold text-mangrove-900">Log Patroli Terkini</h3>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-mangrove-50 text-left text-mangrove-700">
                <th className="px-4 py-3 font-semibold">ID</th>
                <th className="px-4 py-3 font-semibold">Tanggal</th>
                <th className="px-4 py-3 font-semibold">Resor</th>
                <th className="px-4 py-3 font-semibold">Temuan</th>
                <th className="px-4 py-3 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mangrove-50">
              {PATROL_LOG.map((log) => (
                <tr key={log.id} className="hover:bg-mangrove-50/50 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-mangrove-400">{log.id}</td>
                  <td className="px-4 py-3 text-mangrove-600 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-mangrove-400" />
                    {log.tanggal}
                  </td>
                  <td className="px-4 py-3 text-mangrove-600">{log.resor}</td>
                  <td className="px-4 py-3 text-mangrove-700">
                    {log.temuan !== 'Aman terkendali' && <AlertTriangle className="w-3.5 h-3.5 text-warning-500 inline mr-1.5" />}
                    {log.temuan}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`badge ${
                      log.status === 'Selesai' ? 'bg-success-100 text-success-700' :
                      log.status === 'Ditangani' ? 'bg-lagoon-100 text-lagoon-700' :
                      'bg-warning-100 text-warning-700'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Tab 4: Satwa & Biodiversitas
function Tab4() {
  const totalSatwa = SATWA_DATA.reduce((s, d) => s + d.jumlah, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Bird className="w-6 h-6 text-mangrove-600" />
        <div>
          <h2 className="font-display text-xl font-bold text-mangrove-900">Monitoring Satwa & Keanekaragaman Hayati</h2>
          <p className="text-sm text-mangrove-500">Pencatatan satwa liar yang dijumpai selama patroli rutin</p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Temuan Satwa" value={totalSatwa} unit="ekor" icon={<Bird className="w-6 h-6" />} color="mangrove" detail="Semester I 2026" />
        {SATWA_DATA.map((s, i) => (
          <StatCard key={i} label={s.kelompok} value={s.jumlah} unit="ekor" icon={<div className="w-6 h-6 rounded-full" style={{ background: s.color }} />} color={['mangrove', 'lagoon', 'sand', 'clay'][i]} detail={s.contoh.split(',').slice(0, 2).join(',')} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Pie: Satwa Composition */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Komposisi Temuan Satwa Lapangan</h3>
          <p className="text-xs text-mangrove-400 mb-6">Berdasarkan kelompok taksa</p>
          <PieChart
            data={SATWA_DATA.map(s => ({
              label: s.kelompok,
              value: s.jumlah,
              color: s.color,
              percent: Number(((s.jumlah / totalSatwa) * 100).toFixed(1)),
            }))}
          />
        </div>

        {/* Tuntong Status */}
        <div className="card p-6 bg-gradient-to-br from-lagoon-50 to-white">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-lagoon-500 to-lagoon-700 text-white flex items-center justify-center shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-mangrove-900">Monitoring Tuntong Laut & Satwa Prioritas</h3>
              <span className="badge bg-warning-100 text-warning-700 mt-1">{TUNTONG_STATUS.ketersediaanData}</span>
            </div>
          </div>
          <p className="text-sm text-mangrove-600 leading-relaxed">{TUNTONG_STATUS.catatan}</p>
          <div className="mt-4 p-4 rounded-xl bg-white border border-lagoon-100">
            <div className="flex items-center gap-2 text-lagoon-700 mb-2">
              <ClipboardList className="w-4 h-4" />
              <span className="text-sm font-semibold">Rencana Semester II</span>
            </div>
            <p className="text-sm text-mangrove-600">{TUNTONG_STATUS.rencana}</p>
          </div>
        </div>
      </div>

      {/* Species Detail Cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {SATWA_DATA.map((s, i) => (
          <div key={i} className="card p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ background: s.color }}>
                  {s.kelompok === 'Burung Air' ? <Bird className="w-5 h-5" /> :
                   s.kelompok === 'Reptil' ? <Droplet className="w-5 h-5" /> :
                   s.kelompok === 'Mamalia' ? <Users className="w-5 h-5" /> :
                   <Waves className="w-5 h-5" />}
                </div>
                <div>
                  <div className="font-semibold text-mangrove-900">{s.kelompok}</div>
                  <div className="text-xs text-mangrove-400">{s.jumlah} temuan</div>
                </div>
              </div>
              <span className="stat-number text-2xl" style={{ color: s.color }}>
                {((s.jumlah / totalSatwa) * 100).toFixed(1)}%
              </span>
            </div>
            <div className="pt-3 border-t border-mangrove-50">
              <div className="text-xs text-mangrove-400 mb-1.5">Contoh spesies:</div>
              <div className="flex flex-wrap gap-1.5">
                {s.contoh.split(', ').map((c, j) => (
                  <span key={j} className="badge bg-mangrove-50 text-mangrove-600 text-xs">{c}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Tab 5: Restorasi Fisik & Anggaran
function Tab5() {
  const formatRupiah = (val: number) => 'Rp' + val.toLocaleString('id-ID');

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Wallet className="w-6 h-6 text-mangrove-600" />
        <div>
          <h2 className="font-display text-xl font-bold text-mangrove-900">Restorasi Fisik & Realisasi Anggaran</h2>
          <p className="text-sm text-mangrove-500">Pembukaan saluran air, pemusnahan invasif, dan akuntabilitas keuangan</p>
        </div>
      </div>

      <FilterBar filters={[
        { label: 'Kode Petak Modifikasi', options: MODIFIKASI_TANGGUL.petak },
        { label: 'Lokasi Desa', options: ['Selotong', 'Secanggang'] },
      ]} />

      {/* Tanggul Progress */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mangrove-500 to-mangrove-700 text-white flex items-center justify-center">
              <TreePine className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-mangrove-900">Modifikasi Tanggul & Saluran Air</h3>
              <span className="badge bg-success-100 text-success-700 mt-0.5">100% Target</span>
            </div>
          </div>
          <ProgressBar value={MODIFIKASI_TANGGUL.realisasi} max={MODIFIKASI_TANGGUL.target} label="Realisasi" unit=" Ha" color="#236a4e" />
          <div className="grid grid-cols-3 gap-3 mt-6">
            <div className="text-center p-3 bg-mangrove-50 rounded-xl">
              <div className="stat-number text-2xl text-mangrove-900"><CountUp value={MODIFIKASI_TANGGUL.panjangKm} decimals={2} /></div>
              <div className="text-xs text-mangrove-400">Kilometer</div>
            </div>
            <div className="text-center p-3 bg-mangrove-50 rounded-xl">
              <div className="stat-number text-2xl text-mangrove-900"><CountUp value={MODIFIKASI_TANGGUL.panjang} /></div>
              <div className="text-xs text-mangrove-400">Meter</div>
            </div>
            <div className="text-center p-3 bg-mangrove-50 rounded-xl">
              <div className="stat-number text-2xl text-mangrove-900">{MODIFIKASI_TANGGUL.petak.length}</div>
              <div className="text-xs text-mangrove-400">Petak</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {MODIFIKASI_TANGGUL.petak.map((p, i) => (
              <span key={i} className="badge bg-mangrove-100 text-mangrove-700 font-mono text-xs">{p}</span>
            ))}
          </div>
        </div>

        {/* Sawit Invasif */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-clay-500 to-clay-700 text-white flex items-center justify-center">
              <Scissors className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-mangrove-900">Pemusnahan Sawit Invasif</h3>
              <span className="badge bg-warning-100 text-warning-700 mt-0.5">1.47% Target</span>
            </div>
          </div>
          <ProgressBar value={SAWIT_INVASIF.realisasi} max={SAWIT_INVASIF.target} label="Realisasi" unit=" Ha" color="#b8634f" />
          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="text-center p-3 bg-clay-50 rounded-xl">
              <div className="stat-number text-2xl text-clay-700"><CountUp value={SAWIT_INVASIF.batang} /></div>
              <div className="text-xs text-clay-400">Batang sawit</div>
            </div>
            <div className="text-center p-3 bg-clay-50 rounded-xl">
              <div className="stat-number text-2xl text-clay-700"><CountUp value={SAWIT_INVASIF.realisasi} decimals={2} /></div>
              <div className="text-xs text-clay-400">Hektar</div>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-mangrove-400">Metode</span><span className="text-mangrove-700 font-medium text-xs">Suntik bor Glyphosate</span></div>
            <div className="flex justify-between"><span className="text-mangrove-400">Lokasi</span><span className="text-mangrove-700 font-medium text-xs">{SAWIT_INVASIF.lokasi}</span></div>
            <div className="flex justify-between"><span className="text-mangrove-400">Tanggal</span><span className="text-mangrove-700 font-medium text-xs">{SAWIT_INVASIF.tanggal}</span></div>
          </div>
        </div>
      </div>

      {/* Anggaran */}
      <div className="card p-6">
        <h3 className="font-semibold text-mangrove-900 mb-2">Penyerapan Anggaran Program</h3>
        <p className="text-xs text-mangrove-400 mb-6">Forest Programme VI — Semester I 2026</p>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-sand-50 to-white border border-sand-100">
                <div className="text-xs text-sand-600 font-medium">Pagu Anggaran</div>
                <div className="stat-number text-3xl text-sand-800 mt-1">{formatRupiah(ANGGARAN.pagu)}</div>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-mangrove-50 to-white border border-mangrove-100">
                <div className="text-xs text-mangrove-600 font-medium">Realisasi</div>
                <div className="stat-number text-3xl text-mangrove-800 mt-1">{formatRupiah(ANGGARAN.realisasi)}</div>
                <div className="text-sm text-mangrove-500 mt-1">{ANGGARAN.percent}% dari pagu</div>
              </div>
              <div className="p-4 rounded-xl bg-mangrove-50">
                <div className="text-xs text-mangrove-600 font-medium">Sisa Anggaran</div>
                <div className="stat-number text-2xl text-mangrove-700 mt-1">{formatRupiah(ANGGARAN.sisa)}</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <GaugeChart value={ANGGARAN.percent} max={100} unit="%" label="Realisasi Anggaran" color="#df8c2e" size={220} />
            <div className="mt-6 w-full">
              <ProgressBar value={ANGGARAN.realisasi} max={ANGGARAN.pagu} label="Penyerapan" color="#df8c2e" showValue={false} />
            </div>
          </div>
        </div>
      </div>

      {/* Petak Modifikasi Table */}
      <div className="card p-6">
        <h3 className="font-semibold text-mangrove-900 mb-4">Detail Petak Modifikasi Tanggul</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {MODIFIKASI_TANGGUL.petak.map((p, i) => (
            <div key={i} className="p-4 rounded-xl border border-mangrove-100 hover:border-mangrove-300 transition-all">
              <div className="font-mono text-sm font-bold text-mangrove-900">{p}</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="badge bg-success-100 text-success-700 text-[10px]">Selesai</span>
              </div>
              <div className="text-xs text-mangrove-400 mt-2">~{(12.813 / 5).toFixed(0)} meter</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
