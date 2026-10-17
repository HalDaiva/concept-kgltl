import { useState } from 'react';
import {
  GaugeChart, BarChart, DonutChart, HorizontalBarChart, StackedColumnChart,
  ProgressBar, BulletChart, PieChart, HeatmapGrid, StatCard, CountUp
} from '@/components/charts';
import { DashboardImageCarousel } from '@/components/DashboardImageCarousel';
import {
  MONITORING_PERTUMBUHAN, MONITORING_PEMELIHARAAN, GULUDAN_MINI,
  GENDER_DATA, PENERIMA_MANFAAT, KTH_LIST,
  PATROL_DATA, GRID_PATROL, PATROL_LOG,
  FAUNA_DATA, FLORA_DATA, TUNTONG_STATUS,
  MODIFIKASI_TANGGUL, ANGGARAN,
  RESORT_LOCATIONS, PENANAMAN_DATA, PEMELIHARAAN_DATA, PENYELESAIAN_KEGIATAN,
  INVESTASI_KELOMPOK, SEKOLAH_LAPANG, IMAGES,
  DASHBOARD_GALLERY_TAB1, DASHBOARD_GALLERY_TAB2,
  DASHBOARD_GALLERY_TAB3, DASHBOARD_GALLERY_TAB4,
} from '@/data/mockData';
import {
  Sprout, TrendingUp, Users, Shield, Bird, Waves, Wallet, TreePine, MapPin,
  Calendar, Filter, ClipboardList, AlertTriangle, Info, Leaf, Scissors, Droplet,
  Lock, ChevronDown, ChevronRight, CheckCircle2, XCircle, Clock, Building2, Flower2
} from 'lucide-react';

type TabId = 'tab1' | 'tab2' | 'tab3' | 'tab4' | 'tab5';

const TABS: { id: TabId; label: string; icon: React.ReactNode; desc: string }[] = [
  { id: 'tab1', label: 'Penanaman & Pemeliharaan', icon: <Sprout className="w-4 h-4" />, desc: 'Progres restorasi vegetasi & silvikutur adaptif' },
  { id: 'tab2', label: 'Pemberdayaan Masyarakat & GEDSI', icon: <Users className="w-4 h-4" />, desc: 'Partisipasi warga & inklusi sosial' },
  { id: 'tab3', label: 'SMART Patrol', icon: <Shield className="w-4 h-4" />, desc: 'Pengawasan kawasan partisipatif' },
  { id: 'tab4', label: 'Satwa & Biodiversitas', icon: <Bird className="w-4 h-4" />, desc: 'Monitoring keanekaragaman hayati' },
  // { id: 'tab5', label: 'Restorasi Fisik & Anggaran', icon: <Wallet className="w-4 h-4" />, desc: 'Hidrologi & akuntabilitas keuangan' },
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
  const [activeResort, setActiveResort] = useState(0);

  const statusColor: Record<string, string> = {
    'Selesai': 'bg-success-100 text-success-700',
    'Berjalan': 'bg-warning-100 text-warning-700',
    'Dijadwalkan': 'bg-lagoon-100 text-lagoon-700',
  };

  const progressColor: Record<string, string> = {
    'Selesai': '#236a4e',
    'Berjalan': '#df8c2e',
    'Dijadwalkan': '#3fa9c2',
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Sprout className="w-6 h-6 text-mangrove-600" />
        <div>
          <h2 className="font-display text-xl font-bold text-mangrove-900">Penanaman & Monitoring Pertumbuhan</h2>
          <p className="text-sm text-mangrove-500">Progres fisik restorasi vegetasi dan teknik silvikutur adaptif</p>
        </div>
      </div>

      {/* Visual Image Carousel: Penanaman & Pemeliharaan */}
      <DashboardImageCarousel
        title="Dokumentasi Penanaman & Pemeliharaan"
        images={DASHBOARD_GALLERY_TAB1}
      />

      <FilterBar filters={[
        { label: 'Tahun Tanam', options: ['2024', '2025', '2026'] },
        { label: 'Resor KGLTL', options: ['Resor I Karang Gading', 'Resor II Tapak Kuda', 'Resor III Selotong'] },
        { label: 'Metode', options: ['Guludan Mini', 'Tanam Langsung', 'Pembersihan Lumut'] },
      ]} />

      {/* Resort Location Map */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-mangrove-600" />
          <h3 className="font-semibold text-mangrove-900">Peta Lokasi Resor KGLTL</h3>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {/* Map */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-lagoon-100 to-mangrove-100 aspect-[4/3] border border-mangrove-100">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 75" preserveAspectRatio="none">
              <path d="M 10 20 Q 30 15 50 25 L 70 20 Q 85 30 80 45 L 60 55 Q 40 60 20 50 Z" fill="#54a180" opacity="0.4" />
              <path d="M 15 55 Q 35 50 55 58 L 75 55 Q 85 65 70 68 L 40 70 Q 20 68 15 60 Z" fill="#358463" opacity="0.3" />
              <path d="M 0 0 L 100 0 L 100 10 Q 80 12 60 8 L 30 12 Q 10 10 0 15 Z" fill="#abe0ea" opacity="0.2" />
              <path d="M 30 30 Q 45 40 55 55" stroke="#3fa9c2" strokeWidth="0.8" fill="none" opacity="0.5" />
              <path d="M 60 25 Q 65 35 55 50" stroke="#3fa9c2" strokeWidth="0.6" fill="none" opacity="0.4" />
            </svg>
            {RESORT_LOCATIONS.map((r, i) => (
              <div
                key={i}
                className="absolute transition-all duration-300 cursor-pointer"
                style={{ left: `${r.koordinat.x}%`, top: `${r.koordinat.y}%`, transform: 'translate(-50%, -100%)' }}
                onClick={() => setActiveResort(i)}
              >
                <div className="relative">
                  {activeResort === i && (
                    <div className="absolute -inset-3 rounded-full bg-mangrove-400/30 animate-pulse" />
                  )}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    activeResort === i ? 'bg-mangrove-600 scale-125' : 'bg-white/80 hover:scale-110'
                  }`}>
                    <MapPin className={`w-4 h-4 ${activeResort === i ? 'text-white' : 'text-mangrove-600'}`} />
                  </div>
                  {activeResort === i && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white rounded-xl shadow-xl p-2 w-36 z-10">
                      <div className="text-xs font-bold text-mangrove-900">{r.nama}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-lg px-3 py-1.5">
              <span className="text-xs font-bold text-mangrove-900">SM KGLTL</span>
            </div>
          </div>

          {/* Resort Info */}
          <div className="space-y-3">
            {RESORT_LOCATIONS.map((r, i) => (
              <button
                key={i}
                onClick={() => setActiveResort(i)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  activeResort === i ? 'border-mangrove-400 bg-mangrove-50' : 'border-transparent bg-white hover:bg-mangrove-50/50 border border-mangrove-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="font-semibold text-mangrove-900 text-sm">{r.nama}</div>
                  <span className="badge bg-success-100 text-success-700 text-xs">{r.status}</span>
                </div>
                <div className="text-xs text-mangrove-500 mb-2">{r.kecamatan} — {r.luas} Ha</div>
                <div className="flex flex-wrap gap-1">
                  {r.kegiatan.map((k, j) => (
                    <span key={j} className="badge bg-mangrove-100 text-mangrove-600 text-[10px]">{k}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Monitoring Pertumbuhan Chart */}
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Monitoring Pertumbuhan per Tahun</h3>
          <p className="text-xs text-mangrove-400 mb-4">Realisasi penanaman — Total 352 Ha</p>
          <BarChart
            data={MONITORING_PERTUMBUHAN.map(m => ({
              label: m.blok,
              bars: [
                { value: m.realisasi, color: '#236a4e', name: 'Realisasi' },
              ]
            }))}
          />
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Monitoring Pemeliharaan per Tahun</h3>
          <p className="text-xs text-mangrove-400 mb-4">Realisasi pemeliharaan — Total 400 Ha</p>
          <BarChart
            data={MONITORING_PEMELIHARAAN.map(m => ({
              label: m.blok,
              bars: [
                { value: m.realisasi, color: '#236a4e', name: 'Realisasi' },
              ]
            }))}
          />
        </div>
      </div>

      {/* Penanaman Table */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sprout className="w-5 h-5 text-mangrove-600" />
          <h3 className="font-semibold text-mangrove-900">Data Penanaman</h3>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-mangrove-50 text-left text-mangrove-700">
                <th className="px-4 py-3 font-semibold">Kode</th>
                <th className="px-4 py-3 font-semibold">Resor</th>
                <th className="px-4 py-3 font-semibold text-center">Tahun</th>
                <th className="px-4 py-3 font-semibold text-right">Luas (Ha)</th>
                <th className="px-4 py-3 font-semibold">Metode</th>
                <th className="px-4 py-3 font-semibold">Jenis Bibit</th>
                <th className="px-4 py-3 font-semibold text-right">Jml Bibit</th>
                <th className="px-4 py-3 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mangrove-50">
              {PENANAMAN_DATA.map((p) => (
                <tr key={p.id} className="hover:bg-mangrove-50/50 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-mangrove-900">{p.id}</td>
                  <td className="px-4 py-3 text-mangrove-600 text-xs">{p.resor}</td>
                  <td className="px-4 py-3 text-center text-mangrove-700">{p.tahun}</td>
                  <td className="px-4 py-3 text-right font-semibold text-mangrove-900">{p.luas}</td>
                  <td className="px-4 py-3"><span className="badge bg-sand-100 text-sand-700 text-xs">{p.metode}</span></td>
                  <td className="px-4 py-3 text-mangrove-600 text-xs italic">{p.jenis}</td>
                  <td className="px-4 py-3 text-right text-mangrove-700">{p.bibit.toLocaleString('id-ID')}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`badge ${statusColor[p.status] || 'bg-mangrove-100 text-mangrove-700'}`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pemeliharaan Table */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-4">
          <TreePine className="w-5 h-5 text-mangrove-600" />
          <h3 className="font-semibold text-mangrove-900">Data Pemeliharaan</h3>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-mangrove-50 text-left text-mangrove-700">
                <th className="px-4 py-3 font-semibold">Kode</th>
                <th className="px-4 py-3 font-semibold">Resor</th>
                <th className="px-4 py-3 font-semibold text-center">Thn Tanam</th>
                <th className="px-4 py-3 font-semibold text-center">Pemeliharaan</th>
                <th className="px-4 py-3 font-semibold text-right">Luas (Ha)</th>
                <th className="px-4 py-3 font-semibold">Kegiatan</th>
                <th className="px-4 py-3 font-semibold">Pelaksana</th>
                <th className="px-4 py-3 font-semibold text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mangrove-50">
              {PEMELIHARAAN_DATA.map((p) => (
                <tr key={p.id} className="hover:bg-mangrove-50/50 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-mangrove-900">{p.id}</td>
                  <td className="px-4 py-3 text-mangrove-600 text-xs">{p.resor}</td>
                  <td className="px-4 py-3 text-center text-mangrove-700">{p.tahunTanam}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`badge font-mono font-bold ${
                      p.tahunPemeliharaan === 'P1' ? 'bg-mangrove-100 text-mangrove-700' :
                      p.tahunPemeliharaan === 'P2' ? 'bg-lagoon-100 text-lagoon-700' :
                      'bg-sand-100 text-sand-700'
                    }`}>{p.tahunPemeliharaan}</span>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-mangrove-900">{p.luas}</td>
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      {p.kegiatan.map((k, j) => (
                        <span key={j} className="badge bg-mangrove-50 text-mangrove-600 text-[10px]">{k}</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-mangrove-600 text-xs">{p.pelaksana}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`badge ${statusColor[p.status] || 'bg-mangrove-100 text-mangrove-700'}`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Penyelesaian Kegiatan Terbangun */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-mangrove-600" />
          <h3 className="font-semibold text-mangrove-900">Penyelesaian Kegiatan Terbangun</h3>
          <p className="text-xs text-mangrove-400 ml-2">Berbagai kegiatan restorasi yang telah dilaksanakan</p>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-mangrove-50 text-left text-mangrove-700">
                <th className="px-4 py-3 font-semibold">Kegiatan</th>
                <th className="px-4 py-3 font-semibold">Resor</th>
                <th className="px-4 py-3 font-semibold text-center">Tahun</th>
                <th className="px-4 py-3 font-semibold text-right">Luas (Ha)</th>
                <th className="px-4 py-3 font-semibold">Metode</th>
                <th className="px-4 py-3 font-semibold text-center">Status</th>
                <th className="px-4 py-3 font-semibold">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mangrove-50">
              {PENYELESAIAN_KEGIATAN.map((pk) => (
                <tr key={pk.id} className="hover:bg-mangrove-50/50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-mangrove-900">{pk.kegiatan}</td>
                  <td className="px-4 py-3 text-mangrove-600 text-xs">{pk.resor}</td>
                  <td className="px-4 py-3 text-center text-mangrove-700">{pk.tahun}</td>
                  <td className="px-4 py-3 text-right font-semibold text-mangrove-900">{pk.luas}</td>
                  <td className="px-4 py-3 text-xs text-mangrove-600">{pk.metode}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`badge ${statusColor[pk.status] || 'bg-mangrove-100 text-mangrove-700'}`}>{pk.status}</span>
                  </td>
                  <td className="px-4 py-3 w-32">
                    <div className="h-2 rounded-full bg-mangrove-50 overflow-hidden">
                      <div className="h-full rounded-full transition-all" style={{ width: `${Math.min(pk.percent, 100)}%`, background: progressColor[pk.status] || '#236a4e' }} />
                    </div>
                    <span className="text-xs text-mangrove-400 mt-1 block">{pk.percent.toFixed(0)}%</span>
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

// Tab 2: Pemberdayaan Masyarakat & GEDSI
function Tab2() {
  const formatRupiah = (val: number) => 'Rp' + (val / 1000000).toFixed(0) + ' jt';

  const progressStyle: Record<string, { badge: string; dot: string }> = {
    'Berkembang Baik': { badge: 'bg-success-100 text-success-700', dot: 'bg-success-500' },
    'Kurang Berkembang': { badge: 'bg-warning-100 text-warning-700', dot: 'bg-warning-500' },
    'Belum Berkembang': { badge: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Users className="w-6 h-6 text-mangrove-600" />
        <div>
          <h2 className="font-display text-xl font-bold text-mangrove-900">Pemberdayaan Masyarakat & Keterlibatan GEDSI</h2>
          <p className="text-sm text-mangrove-500">Transparansi bantuan, kemitraan desa, dan demografi penerima manfaat</p>
        </div>
      </div>

      {/* Visual Image Carousel: Pemberdayaan Masyarakat & GEDSI */}
      <DashboardImageCarousel
        title="Dokumentasi Pemberdayaan & GEDSI"
        images={DASHBOARD_GALLERY_TAB2}
      />

      <FilterBar filters={[
        { label: 'Desa Penyangga', options: ['Pematang Cengal', 'Paluh Kurau', 'Selotong', 'Secanggang', 'Tapak Kuda'] },
        { label: 'Kelompok KTH', options: KTH_LIST.map(k => k.nama) },
      ]} />

      {/* Summary Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard label="Total Partisipan" value={513} unit="orang" icon={<Users className="w-6 h-6" />} color="mangrove" detail="Semua kegiatan" />
        <StatCard label="Perempuan" value={104} unit="orang" icon={<Users className="w-6 h-6" />} color="lagoon" detail="20.3% partisipan" />
        <StatCard label="Laki-laki" value={409} unit="orang" icon={<Users className="w-6 h-6" />} color="sand" detail="79.7% partisipan" />
      </div>

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Donut: Gender + Terlibat Penanaman */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Proporsi Partisipasi Berdasarkan Gender</h3>
          <p className="text-xs text-mangrove-400 mb-4">Total 513 individu</p>
          <DonutChart data={GENDER_DATA.map(g => ({ label: g.label, value: g.value, percent: g.percent, color: g.color }))} />
          {/* <div className="mt-4 pt-4 border-t border-mangrove-50 space-y-2">
            <div className="text-xs font-semibold text-mangrove-500 mb-2">Terlibat Penanaman</div>
            {GENDER_DATA.map((g, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ background: g.color }} />
                  <span className="text-sm text-mangrove-700">{g.label}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-mangrove-900">{g.terlibatPenanaman} orang</span>
                  <span className="badge bg-mangrove-100 text-mangrove-600 text-xs">{((g.terlibatPenanaman / g.value) * 100).toFixed(0)}%</span>
                </div>
              </div>
            ))}
          </div>  */}
        </div>

        {/* Stacked Column: Penerima Manfaat */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Komposisi Masyarakat Terlibat Penanaman</h3>
          <p className="text-xs text-mangrove-400 mb-6">Berdasarkan kategori gender</p>
          <StackedColumnChart
            data={PENERIMA_MANFAAT.map(p => ({
              label: p.kategori,
              segments: [
                { value: p.terlibat, color: '#236a4e', name: 'Terlibat' },
                { value: p.tidakTerlibat, color: '#3fa9c2', name: 'Tidak Terlibat' },
              ]
            }))}
          />
        </div>
      </div>

      {/* Investasi Kelompok Masyarakat */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Building2 className="w-5 h-5 text-mangrove-600" />
          <h3 className="font-semibold text-mangrove-900">Investasi Kelompok Masyarakat</h3>
        </div>
        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-mangrove-50 text-left text-mangrove-700">
                <th className="px-4 py-3 font-semibold">Nama Kelompok</th>
                <th className="px-4 py-3 font-semibold">Desa</th>
                <th className="px-4 py-3 font-semibold">Jenis Investasi</th>
                <th className="px-4 py-3 font-semibold text-center">Progress</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-mangrove-50">
              {INVESTASI_KELOMPOK.map((ik) => (
                <tr key={ik.id} className="hover:bg-mangrove-50/50 transition-colors">
                  <td className="px-4 py-3 font-semibold text-mangrove-900">{ik.namaKelompok}</td>
                  <td className="px-4 py-3 text-mangrove-600 text-sm">{ik.desa}</td>
                  <td className="px-4 py-3 text-mangrove-700">{ik.jenisInvestasi}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <div className={`w-2.5 h-2.5 rounded-full ${progressStyle[ik.progress]?.dot || 'bg-mangrove-300'}`} />
                      <span className={`badge ${progressStyle[ik.progress]?.badge || 'bg-mangrove-100 text-mangrove-700'}`}>
                        {ik.progress}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Sekolah Lapang */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-5">
          <ClipboardList className="w-5 h-5 text-mangrove-600" />
          <h3 className="font-semibold text-mangrove-900">Sekolah Lapang</h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {SEKOLAH_LAPANG.map((sl) => (
            <div key={sl.id} className="rounded-xl overflow-hidden border border-mangrove-100 hover:border-mangrove-300 transition-all">
              <div className="aspect-[16/7] overflow-hidden">
                <img
                  src={IMAGES[sl.image as keyof typeof IMAGES]}
                  alt={sl.namaKegiatan}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-mangrove-900 text-sm leading-snug">{sl.namaKegiatan}</h4>
                <div className="flex items-center gap-3 mt-2 text-xs text-mangrove-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{sl.tanggal}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{sl.lokasi}</span>
                </div>
                <p className="text-xs text-mangrove-500 mt-2">{sl.deskripsi}</p>
                <div className="mt-3">
                  <div className="text-xs text-mangrove-400 mb-1.5">Peserta ({sl.jumlahPeserta} orang):</div>
                  <div className="flex flex-wrap gap-1">
                    {sl.peserta.map((p, j) => (
                      <span key={j} className="badge bg-mangrove-100 text-mangrove-700 text-xs">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Tab 3: SMART Patrol
function Tab3() {
  const [expandedLog, setExpandedLog] = useState<string | null>(null);

  const tipeColor: Record<string, string> = {
    'Flora': 'bg-success-100 text-success-700',
    'Fauna': 'bg-lagoon-100 text-lagoon-700',
    'Gangguan Kawasan': 'bg-red-100 text-red-700',
  };

  const statusPatrolColor: Record<string, string> = {
    'Terdokumentasi': 'bg-mangrove-100 text-mangrove-700',
    'Ditangani': 'bg-lagoon-100 text-lagoon-700',
    'Proses Hukum': 'bg-red-100 text-red-700',
  };

  const temuanHeatmap = [
    { row: 0, col: 0, value: 2 }, { row: 0, col: 1, value: 1 }, { row: 0, col: 2, value: 0 }, { row: 0, col: 3, value: 0 }, { row: 0, col: 4, value: 0 }, { row: 0, col: 5, value: 0 },
    { row: 1, col: 0, value: 0 }, { row: 1, col: 1, value: 0 }, { row: 1, col: 2, value: 1 }, { row: 1, col: 3, value: 1 }, { row: 1, col: 4, value: 0 }, { row: 1, col: 5, value: 0 },
    { row: 2, col: 0, value: 0 }, { row: 2, col: 1, value: 0 }, { row: 2, col: 2, value: 0 }, { row: 2, col: 3, value: 1 }, { row: 2, col: 4, value: 0 }, { row: 2, col: 5, value: 0 },
    { row: 3, col: 0, value: 0 }, { row: 3, col: 1, value: 0 }, { row: 3, col: 2, value: 0 }, { row: 3, col: 3, value: 0 }, { row: 3, col: 4, value: 0 }, { row: 3, col: 5, value: 0 },
    { row: 4, col: 0, value: 1 }, { row: 4, col: 1, value: 0 }, { row: 4, col: 2, value: 0 }, { row: 4, col: 3, value: 0 }, { row: 4, col: 4, value: 0 }, { row: 4, col: 5, value: 0 },
    { row: 5, col: 0, value: 0 }, { row: 5, col: 1, value: 0 }, { row: 5, col: 2, value: 1 }, { row: 5, col: 3, value: 1 }, { row: 5, col: 4, value: 0 }, { row: 5, col: 5, value: 0 },
  ];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
  const grids = ['Grid 1', 'Grid 2', 'Grid 3', 'Grid 4', 'Grid 5', 'Grid 6'];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Shield className="w-6 h-6 text-mangrove-600" />
        <div>
          <h2 className="font-display text-xl font-bold text-mangrove-900">SMART Patrol & Pengamanan Kawasan</h2>
          <p className="text-sm text-mangrove-500">Pengawasan kawasan berbasis grid bersama masyarakat</p>
        </div>
      </div>

      {/* Visual Image Carousel: SMART Patrol */}
      <DashboardImageCarousel
        title="Dokumentasi SMART Patrol & Pengamanan"
        images={DASHBOARD_GALLERY_TAB3}
      />

      <FilterBar filters={[
        { label: 'Tahun', options: ['2022', '2023', '2024', '2025', '2025'] },
        { label: 'Bulan', options: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'] },
        { label: 'Tipe Temuan', options: ['Flora', 'Fauna', 'Gangguan Kawasan'] },
      ]} />

      <div className="grid lg:grid-cols-2 gap-5">
        {/* Frekuensi Patroli: Grid Coverage */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Frekuensi Patroli Pengamanan</h3>
          <p className="text-xs text-mangrove-400 mb-4">Grid terpatroli dan temuan pada Juli 2026</p>
          <div className="flex items-center justify-center gap-8 mb-4">
            <div className="text-center">
              <div className="stat-number text-5xl text-mangrove-900">{GRID_PATROL.length}</div>
              <div className="text-sm text-mangrove-500 mt-1">Grid Terpatroli</div>
            </div>
            <div className="text-center">
              <div className="stat-number text-5xl text-clay-700">{GRID_PATROL.reduce((a, g) => a + g.temuan, 0)}</div>
              <div className="text-sm text-mangrove-500 mt-1">Total Temuan</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {GRID_PATROL.map((g, i) => (
              <div key={i} className="p-3 rounded-xl bg-mangrove-50 text-center">
                <div className="font-bold text-mangrove-900 text-sm">{g.nama}</div>
                <div className="text-xs text-mangrove-500 mt-0.5">{g.area.split(' ').slice(1).join(' ')}</div>
                <div className="mt-2">
                  <span className={`text-lg font-bold ${g.temuan > 0 ? 'text-clay-600' : 'text-mangrove-400'}`}>{g.temuan}</span>
                  <span className="text-xs text-mangrove-400 ml-1">temuan</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Patrol Distribution */}
        <div className="card p-6">
          <h3 className="font-semibold text-mangrove-900 mb-2">Distribusi Patroli per Bulan</h3>
          <p className="text-xs text-mangrove-400 mb-4">Jumlah kegiatan patroli Jan–Jun 2026</p>
          <BarChart
            data={PATROL_DATA.bulan.map(b => ({
              label: b.bulan.slice(0, 3),
              bars: [{ value: b.capaian, color: '#236a4e', name: 'Patroli' }]
            }))}
            height={240}
          />
        </div>
      </div>

      {/* Temuan Heatmap */}
      <div className="card p-6">
        <h3 className="font-semibold text-mangrove-900 mb-2">Heatmap Temuan per Grid & Bulan</h3>
        <p className="text-xs text-mangrove-400 mb-6">Intensitas temuan di 6 grid (Jan–Jun 2026)</p>
        <HeatmapGrid
          data={temuanHeatmap}
          rowsLabel={grids}
          colsLabel={months}
        />
      </div>

      {/* Patrol Log - Restricted */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-mangrove-600" />
            <h3 className="font-semibold text-mangrove-900">Log Patroli Terkini</h3>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-clay-50 border border-clay-200">
            <Lock className="w-3.5 h-3.5 text-clay-600" />
            <span className="text-xs font-semibold text-clay-700">Pengguna Terautentikasi</span>
          </div>
        </div>
        <p className="text-xs text-mangrove-400 mb-5">Data log patroli hanya dapat diakses oleh pengguna yang memiliki akses terautentikasi.</p>

        <div className="space-y-3">
          {PATROL_LOG.map((log) => (
            <div key={log.id} className="border border-mangrove-100 rounded-xl overflow-hidden">
              {/* Log Header */}
              <button
                onClick={() => setExpandedLog(expandedLog === log.id ? null : log.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-mangrove-50/50 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs font-bold text-mangrove-400">{log.id}</span>
                  <div className="flex items-center gap-1.5 text-sm text-mangrove-600">
                    <Calendar className="w-3.5 h-3.5 text-mangrove-400" />
                    {log.tanggal}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-mangrove-700 font-semibold">
                    <Shield className="w-3.5 h-3.5 text-mangrove-400" />
                    {log.grid}
                  </div>
                  <span className="text-xs text-mangrove-400 hidden sm:block">{log.area}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="badge bg-mangrove-100 text-mangrove-600 text-xs">{log.temuanList.length} temuan</span>
                  {expandedLog === log.id
                    ? <ChevronDown className="w-4 h-4 text-mangrove-400" />
                    : <ChevronRight className="w-4 h-4 text-mangrove-400" />}
                </div>
              </button>

              {/* Expanded Temuan */}
              {expandedLog === log.id && (
                <div className="border-t border-mangrove-100 bg-mangrove-50/30 p-4 space-y-2">
                  {log.temuanList.map((t, j) => (
                    <div key={j} className="flex items-start justify-between gap-4 p-3 bg-white rounded-xl border border-mangrove-100">
                      <div className="flex items-start gap-3">
                        <span className={`badge shrink-0 ${tipeColor[t.tipe] || 'bg-mangrove-100 text-mangrove-700'}`}>{t.tipe}</span>
                        <span className="text-sm text-mangrove-700">{t.deskripsi}</span>
                      </div>
                      <span className={`badge shrink-0 ${statusPatrolColor[t.status] || 'bg-mangrove-100 text-mangrove-700'}`}>{t.status}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Tab 4: Satwa & Biodiversitas
function Tab4() {
  const [activeFilter, setActiveFilter] = useState<'semua' | 'flora' | 'fauna'>('semua');

  const totalFauna = FAUNA_DATA.reduce((s, d) => s + d.jumlah, 0);
  const totalFlora = FLORA_DATA.reduce((s, d) => s + d.jumlah, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Bird className="w-6 h-6 text-mangrove-600" />
        <div>
          <h2 className="font-display text-xl font-bold text-mangrove-900">Monitoring Flora, Fauna & Keanekaragaman Hayati</h2>
          <p className="text-sm text-mangrove-500">Pencatatan flora dan fauna yang dijumpai selama patroli rutin</p>
        </div>
      </div>

      {/* Visual Image Carousel: Satwa & Biodiversitas */}
      <DashboardImageCarousel
        title="Dokumentasi Satwa & Keanekaragaman Hayati"
        images={DASHBOARD_GALLERY_TAB4}
      />

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {(['semua', 'flora', 'fauna'] as const).map(f => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeFilter === f ? 'bg-mangrove-600 text-white shadow-sm' : 'bg-white border border-mangrove-100 text-mangrove-600 hover:bg-mangrove-50'
            }`}
          >
            {f === 'flora' && <Flower2 className="w-4 h-4" />}
            {f === 'fauna' && <Bird className="w-4 h-4" />}
            {f === 'semua' && <Leaf className="w-4 h-4" />}
            {f === 'semua' ? 'Semua Kategori' : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {(activeFilter === 'semua' || activeFilter === 'fauna') && (
          <StatCard label="Total Fauna" value={totalFauna} unit="spesies" icon={<Bird className="w-6 h-6" />} color="mangrove" detail="Semester I 2026" />
        )}
        {(activeFilter === 'semua' || activeFilter === 'flora') && (
          <StatCard label="Total Flora" value={totalFlora} unit="spesies" icon={<Flower2 className="w-6 h-6" />} color="lagoon" detail="Semester I 2026" />
        )}
      </div>

      <div  className="grid lg:grid-cols-2 gap-5">

      {/* Fauna Section */}
      {(activeFilter === 'semua' || activeFilter === 'fauna') && (
        <>
          {/* <div className="flex items-center gap-2">
            <Bird className="w-5 h-5 text-mangrove-600" />
            <h3 className="font-semibold text-mangrove-800">Data Fauna</h3>
          </div>  */}
          <div className="grid lg:grid-cols-1 gap-5">
            <div className="card p-6">
              <h4 className="font-semibold text-mangrove-900 mb-2">Komposisi Temuan Fauna</h4>
              <p className="text-xs text-mangrove-400 mb-6">Berdasarkan kelompok taksa</p>
              <PieChart
                data={FAUNA_DATA.map(s => ({
                  label: s.kelompok,
                  value: s.jumlah,
                  color: s.color,
                  percent: Number(((s.jumlah / totalFauna) * 100).toFixed(1)),
                }))}
              />
            </div>
            {/* <div className="grid grid-cols-1 gap-3">
              {FAUNA_DATA.map((s, i) => (
                <div key={i} className="card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: s.color }}>
                        <Bird className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-mangrove-900 text-sm">{s.kelompok}</div>
                        <div className="text-xs text-mangrove-400">{s.jumlah} temuan</div>
                      </div>
                    </div>
                    <span className="stat-number text-xl" style={{ color: s.color }}>
                      {((s.jumlah / totalFauna) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {s.contoh.split(', ').map((c, j) => (
                      <span key={j} className="badge bg-mangrove-50 text-mangrove-600 text-xs">{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </>
      )}

      {/* Flora Section */}
      {(activeFilter === 'semua' || activeFilter === 'flora') && (
        <>
          {/* <div className="flex items-center gap-2">
            <Flower2 className="w-5 h-5 text-mangrove-600" />
            <h3 className="font-semibold text-mangrove-800">Data Flora</h3>
          </div> */}
          <div className="grid lg:grid-cols-1 gap-5">
            <div className="card p-6">
              <h4 className="font-semibold text-mangrove-900 mb-2">Komposisi Temuan Flora</h4>
              <p className="text-xs text-mangrove-400 mb-6">Berdasarkan kelompok vegetasi</p>
              <PieChart
                data={FLORA_DATA.map(s => ({
                  label: s.kelompok,
                  value: s.jumlah,
                  color: s.color,
                  percent: Number(((s.jumlah / totalFlora) * 100).toFixed(1)),
                }))}
              />
            </div>
            {/* <div className="grid grid-cols-1 gap-3">
              {FLORA_DATA.map((s, i) => (
                <div key={i} className="card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white" style={{ background: s.color }}>
                        <Leaf className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-mangrove-900 text-sm">{s.kelompok}</div>
                        <div className="text-xs text-mangrove-400">{s.jumlah} spesies</div>
                      </div>
                    </div>
                    <span className="stat-number text-xl" style={{ color: s.color }}>
                      {((s.jumlah / totalFlora) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {s.contoh.split(', ').map((c, j) => (
                      <span key={j} className="badge bg-mangrove-50 text-mangrove-600 text-xs italic">{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </>
      )}

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
          <p className="text-sm text-mangrove-500">Pembukaan saluran air dan akuntabilitas keuangan program</p>
        </div>
      </div>

      <FilterBar filters={[
        { label: 'Kode Petak Modifikasi', options: MODIFIKASI_TANGGUL.petak },
        { label: 'Lokasi Desa', options: ['Selotong', 'Secanggang'] },
      ]} />

      {/* Tanggul Progress */}
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
