import { useState } from 'react';
import { Sprout, Scissors, Users, Scroll, Download, FileText, BookOpen, Search, CheckCircle2 } from 'lucide-react';
import { LEARNING_MODULES, GULUDAN_MINI } from '@/data/mockData';

const iconMap: Record<string, React.ReactNode> = {
  sprout: <Sprout className="w-6 h-6" />,
  scissors: <Scissors className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  scroll: <Scroll className="w-6 h-6" />,
};

export function LearningPage() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = LEARNING_MODULES.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase()) ||
    m.subtitle.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-fade-in pt-16 lg:pt-18">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mangrove-700 to-mangrove-950" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url(https://images.pexels.com/photos/38127406/pexels-photo-38127406.jpeg?auto=compress&cs=tinysrgb&h=650&w=940)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div className="absolute inset-0 flex items-end pb-10">
          <div className="container-page">
            <span className="badge bg-white/10 backdrop-blur text-white border border-white/20 mb-4">Pusat Pembelajaran & Repositori</span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white">Modul Restorasi & Pengetahuan</h1>
            <p className="text-white/70 mt-3 max-w-2xl">Transfer pengetahuan restorasi mangrove, teknik silvikutur adaptif, dan prinsip inklusi sosial</p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 bg-white border-b border-mangrove-100">
        <div className="container-page">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-mangrove-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari modul pembelajaran..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-mangrove-100 focus:border-mangrove-400 focus:outline-none text-mangrove-900 placeholder:text-mangrove-300 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Module Cards */}
      <section className="py-12 bg-mangrove-50">
        <div className="container-page">
          <div className="grid md:grid-cols-2 gap-5">
            {filtered.map((mod) => (
              <div
                key={mod.id}
                onClick={() => setSelected(mod.id)}
                className="card card-hover p-6 cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mangrove-500 to-mangrove-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    {iconMap[mod.icon]}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="badge bg-error-100 text-error-700">{mod.type}</span>
                    <span className="text-xs text-mangrove-400">{mod.pages} hal.</span>
                  </div>
                </div>
                <h3 className="font-bold text-mangrove-900 text-lg leading-tight">{mod.title}</h3>
                <p className="text-sm text-mangrove-600 font-medium mt-1">{mod.subtitle}</p>
                <p className="text-sm text-mangrove-500 mt-3 leading-relaxed">{mod.desc}</p>
                <div className="flex items-center gap-2 mt-4 text-mangrove-600 font-semibold text-sm group-hover:gap-3 transition-all">
                  <BookOpen className="w-4 h-4" />
                  Baca modul
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-mangrove-400">Tidak ada modul yang cocok dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured: Guludan Mini */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img src="https://images.pexels.com/photos/35861397/pexels-photo-35861397.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Mangrove planting" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 bg-sand-500 text-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-display font-extrabold">{GULUDAN_MINI.bibitPerUnit}</div>
                <div className="text-xs">bibit/unit</div>
              </div>
            </div>

            <div>
              <span className="badge bg-sand-100 text-sand-700 mb-3">Inovasi Silvikutur Adaptif</span>
              <h2 className="section-title">Metode Guludan Mini</h2>
              <p className="text-mangrove-600 mt-4 leading-relaxed">
                Konstruksi media tanam berbentuk gundukan untuk lokasi genangan air dalam. Metode ini meningkatkan stabilitas media tanam, mengurangi pengaruh genangan, dan meningkatkan tingkat kelangsungan hidup bibit.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="p-4 rounded-xl bg-mangrove-50">
                  <div className="stat-number text-3xl text-mangrove-900">{GULUDAN_MINI.keranjang}</div>
                  <div className="text-xs text-mangrove-500 mt-1">Keranjang bambu</div>
                </div>
                <div className="p-4 rounded-xl bg-mangrove-50">
                  <div className="stat-number text-3xl text-mangrove-900">{GULUDAN_MINI.bibitPerUnit}</div>
                  <div className="text-xs text-mangrove-500 mt-1">Bibit per unit</div>
                </div>
                <div className="p-4 rounded-xl bg-mangrove-50 col-span-2">
                  <div className="text-sm font-semibold text-mangrove-700">Dimensi Keranjang</div>
                  <div className="text-lg font-display font-bold text-mangrove-900 mt-1">{GULUDAN_MINI.ukuran}</div>
                </div>
              </div>

              <div className="mt-6 space-y-2">
                {[
                  '6 keranjang bambu diikat tali lanjaran',
                  'Diperkuat pancang bambu 1 meter',
                  'Diisi lumpur dari petak penanaman',
                  '60 bibit mangrove dipasang ajir & diikat',
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-mangrove-600 text-white flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</div>
                    <span className="text-sm text-mangrove-700">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FPIC Section */}
      <section className="py-16 bg-gradient-to-br from-lagoon-900 to-mangrove-900 text-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <span className="badge bg-white/10 text-white border border-white/20 mb-3">Padiatapa (FPIC)</span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold">Persetujuan Berbasis Informasi</h2>
              <p className="text-mangrove-200 mt-4 leading-relaxed">
                Persetujuan Atas Dasar Informasi di Awal Tanpa Paksaan — tahapan awal untuk membangun pemahaman, penerimaan, dan dukungan masyarakat terhadap kegiatan pemulihan ekosistem.
              </p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Sosialisasi', desc: 'Penyampaian tujuan, lokasi, dan pelaksanaan kegiatan kepada masyarakat' },
                { title: 'Musyawarah', desc: 'Dialog dengan Kepala Desa, perangkat, Babinsa, Bhabinkamtibmas, dan KTH' },
                { title: 'Persetujuan', desc: 'Dokumentasi persetujuan pengelola lahan dan tokoh masyarakat' },
                { title: 'Dukungan', desc: 'Membangun komitmen bersama untuk keberhasilan restorasi' },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <CheckCircle2 className="w-5 h-5 text-mangrove-300" />
                    <h3 className="font-semibold text-white">{s.title}</h3>
                  </div>
                  <p className="text-sm text-mangrove-200">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-12 bg-mangrove-50">
        <div className="container-page">
          <div className="card p-8 text-center max-w-2xl mx-auto">
            <FileText className="w-12 h-12 text-mangrove-400 mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-mangrove-900">Unduh Dokumen Lengkap</h3>
            <p className="text-mangrove-500 mt-2">Semua modul tersedia dalam format PDF untuk penggunaan offline oleh petugas lapangan</p>
            <button className="btn-primary mt-6 mx-auto" onClick={() => alert('Mockup: file download tidak tersedia dalam demo')}>
              <Download className="w-4 h-4" />
              Unduh Semua Modul
            </button>
          </div>
        </div>
      </section>

      {/* Modal for module detail */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mangrove-950/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelected(null)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            {(() => {
              const mod = LEARNING_MODULES.find(m => m.id === selected)!;
              return (
                <>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mangrove-500 to-mangrove-700 text-white flex items-center justify-center shadow-lg mb-4">
                    {iconMap[mod.icon]}
                  </div>
                  <h3 className="font-display text-xl font-bold text-mangrove-900">{mod.title}</h3>
                  <p className="text-sm text-mangrove-600 font-medium mt-1">{mod.subtitle}</p>
                  <p className="text-sm text-mangrove-500 mt-4 leading-relaxed">{mod.desc}</p>
                  <div className="flex items-center gap-3 mt-6">
                    <button className="btn-primary flex-1 justify-center" onClick={() => alert('Mockup: PDF tidak tersedia dalam demo')}>
                      <Download className="w-4 h-4" />
                      Unduh {mod.type}
                    </button>
                    <button className="btn-outline" onClick={() => setSelected(null)}>Tutup</button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  );
}
