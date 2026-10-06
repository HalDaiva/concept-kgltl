import { Trees, Users, Building2, MapPin, Waves, Leaf, Bird, Sprout, ShieldCheck } from 'lucide-react';
import { IMAGES, DESA_PENYANGGA, TOTAL_PENDUDUK, KTH_LIST } from '@/data/mockData';
import { CountUp } from '@/components/charts';

export function ProfilePage() {
  const kecamatanStats = DESA_PENYANGGA.reduce((acc, d) => {
    if (!acc[d.kecamatan]) acc[d.kecamatan] = { desa: 0, pria: 0, wanita: 0 };
    acc[d.kecamatan].desa++;
    acc[d.kecamatan].pria += d.pria;
    acc[d.kecamatan].wanita += d.wanita;
    return acc;
  }, {} as Record<string, { desa: number; pria: number; wanita: number }>);

  return (
    <div className="animate-fade-in pt-16 lg:pt-18">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img src={IMAGES.mangroveRoots} alt="Mangrove roots" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-mangrove-950/80 to-mangrove-900/60" />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="container-page">
            <span className="badge bg-white/10 backdrop-blur text-white border border-white/20 mb-4">Profil & Wilayah Konservasi</span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white">Suaka Margasatwa<br />Karang Gading & Langkat Timur Laut</h1>
            <p className="text-white/70 mt-3 max-w-2xl">Kawasan konservasi mangrove di Kabupaten Langkat & Deli Serdang, Sumatera Utara</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Gambaran Umum Ekosistem</h2>
              <p className="text-mangrove-600 mt-4 leading-relaxed">
                Suaka Margasatwa Karang Gading dan Langkat Timur Laut merupakan kawasan konservasi yang dikelola oleh BBKSDA Sumatera Utara. Kawasan ini berperan penting dalam menjaga ekosistem mangrove di pesisir timur Provinsi Sumatera Utara.
              </p>
              <p className="text-mangrove-600 mt-3 leading-relaxed">
                Ekosistem mangrove di kawasan ini mendukung keberadaan berbagai satwa liar termasuk burung air, reptil, mamalia, dan organisme akuatik. Kawasan ini juga berfungsi sebagai daerah asuhan (nursery ground), pelindung pantai dari abrasi, penyerap karbon (blue carbon), serta penyangga kehidupan masyarakat pesisir.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { icon: <Waves className="w-5 h-5" />, label: 'Blue Carbon', desc: 'Penyerap karbon pesisir' },
                  { icon: <Leaf className="w-5 h-5" />, label: 'Nursery Ground', desc: 'Habitat biota perairan' },
                  { icon: <ShieldCheck className="w-5 h-5" />, label: 'Pelindung Pantai', desc: 'Mencegah abrasi & sedimentasi' },
                  { icon: <Bird className="w-5 h-5" />, label: 'Biodiversitas', desc: 'Habitat satwa liar' },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-mangrove-50">
                    <div className="w-10 h-10 rounded-lg bg-mangrove-100 text-mangrove-600 flex items-center justify-center shrink-0">{f.icon}</div>
                    <div>
                      <div className="text-sm font-semibold text-mangrove-900">{f.label}</div>
                      <div className="text-xs text-mangrove-500">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img src={IMAGES.mangroveWalkway} alt="Mangrove walkway" className="rounded-2xl shadow-xl w-full aspect-[4/3] object-cover" />
              <div className="absolute -bottom-6 -left-6 card p-5 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mangrove-500 to-mangrove-700 flex items-center justify-center text-white">
                    <Trees className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="stat-number text-2xl text-mangrove-900"><CountUp value={352} /> Ha</div>
                    <div className="text-xs text-mangrove-500">Total areal pemulihan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demographics */}
      <section className="py-16 bg-mangrove-50">
        <div className="container-page">
          <div className="text-center mb-10">
            <span className="badge bg-mangrove-100 text-mangrove-700 mb-3">Demografi</span>
            <h2 className="section-title">17 Desa Penyangga</h2>
            <p className="text-mangrove-500 mt-2">Total populasi <strong className="text-mangrove-700">80.220 jiwa</strong> (BPS 2025)</p>
          </div>

          {/* Demographic stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            <div className="card p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-lagoon-100 text-lagoon-600 flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7" />
              </div>
              <div className="stat-number text-4xl text-mangrove-900"><CountUp value={TOTAL_PENDUDUK.total} /></div>
              <p className="text-sm text-mangrove-500 mt-1">Total Penduduk</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-mangrove-100 text-mangrove-600 flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7" />
              </div>
              <div className="stat-number text-4xl text-mangrove-900"><CountUp value={TOTAL_PENDUDUK.pria} /></div>
              <p className="text-sm text-mangrove-500 mt-1">Penduduk Pria</p>
            </div>
            <div className="card p-6 text-center">
              <div className="w-14 h-14 rounded-2xl bg-clay-100 text-clay-600 flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7" />
              </div>
              <div className="stat-number text-4xl text-mangrove-900"><CountUp value={TOTAL_PENDUDUK.wanita} /></div>
              <p className="text-sm text-mangrove-500 mt-1">Penduduk Wanita</p>
            </div>
          </div>

          {/* Village table */}
          <div className="card overflow-hidden">
            <div className="overflow-x-auto scrollbar-thin">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-mangrove-50 text-mangrove-700 text-left">
                    <th className="px-4 py-3 font-semibold">No</th>
                    <th className="px-4 py-3 font-semibold">Kecamatan</th>
                    <th className="px-4 py-3 font-semibold">Desa</th>
                    <th className="px-4 py-3 font-semibold text-right">Pria</th>
                    <th className="px-4 py-3 font-semibold text-right">Wanita</th>
                    <th className="px-4 py-3 font-semibold text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mangrove-50">
                  {DESA_PENYANGGA.map((d) => (
                    <tr key={d.no} className="hover:bg-mangrove-50/50 transition-colors">
                      <td className="px-4 py-3 text-mangrove-400">{d.no}</td>
                      <td className="px-4 py-3 text-mangrove-600">{d.kecamatan}</td>
                      <td className="px-4 py-3 font-medium text-mangrove-900">{d.desa}</td>
                      <td className="px-4 py-3 text-right text-mangrove-700">{d.pria.toLocaleString('id-ID')}</td>
                      <td className="px-4 py-3 text-right text-mangrove-700">{d.wanita.toLocaleString('id-ID')}</td>
                      <td className="px-4 py-3 text-right font-semibold text-mangrove-900">{(d.pria + d.wanita).toLocaleString('id-ID')}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-mangrove-600 text-white">
                    <td colSpan={3} className="px-4 py-3 font-bold">Total</td>
                    <td className="px-4 py-3 text-right font-bold">{TOTAL_PENDUDUK.pria.toLocaleString('id-ID')}</td>
                    <td className="px-4 py-3 text-right font-bold">{TOTAL_PENDUDUK.wanita.toLocaleString('id-ID')}</td>
                    <td className="px-4 py-3 text-right font-bold">{TOTAL_PENDUDUK.total.toLocaleString('id-ID')}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* KTH & Institutional */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Institutional */}
            <div>
              <span className="badge bg-lagoon-100 text-lagoon-700 mb-3">Kelembagaan</span>
              <h2 className="section-title">Struktur Pengelola</h2>
              <div className="space-y-3 mt-6">
                {[
                  { icon: <Building2 className="w-5 h-5" />, title: 'BBKSDA Sumut', desc: 'Balai Besar Konservasi Sumber Daya Alam Sumatera Utara — pengelola utama kawasan' },
                  { icon: <Users className="w-5 h-5" />, title: 'Fasdes', desc: 'Fasilitator Desa yang mendampingi kegiatan di 17 desa penyangga' },
                  { icon: <Trees className="w-5 h-5" />, title: 'KTH', desc: 'Kelompok Tani Hutan: Harapan Indah, Harapan Jaya, Mawar, Tumbuh Subur' },
                  { icon: <ShieldCheck className="w-5 h-5" />, title: 'MMP', desc: 'Masyarakat Mitra Patroli — pengawasan kawasan partisipatif' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-mangrove-100 hover:border-mangrove-300 hover:bg-mangrove-50/50 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-mangrove-100 text-mangrove-600 flex items-center justify-center shrink-0">{item.icon}</div>
                    <div>
                      <div className="font-semibold text-mangrove-900">{item.title}</div>
                      <div className="text-sm text-mangrove-500 mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* KTH Cards */}
            <div>
              <span className="badge bg-sand-100 text-sand-700 mb-3">Kelompok Tani Hutan</span>
              <h2 className="section-title">4 KTH Aktif</h2>
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                {KTH_LIST.map((kth, i) => (
                  <div key={i} className="card card-hover p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sand-400 to-sand-600 text-white flex items-center justify-center">
                        <Sprout className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-mangrove-900 text-sm">{kth.nama}</div>
                        <div className="text-xs text-mangrove-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {kth.desa}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-mangrove-500">Anggota</span>
                      <span className="font-bold text-mangrove-900">{kth.anggota} orang</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {kth.kegiatan.map((k, j) => (
                        <span key={j} className="badge bg-mangrove-50 text-mangrove-600 text-[10px]">{k}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kecamatan summary */}
      <section className="py-16 bg-mangrove-50">
        <div className="container-page">
          <h2 className="section-title text-center mb-10">Sebaran per Kecamatan</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(kecamatanStats).map(([nama, stat]) => (
              <div key={nama} className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-mangrove-400" />
                  <span className="font-semibold text-mangrove-900">{nama}</span>
                </div>
                <div className="text-3xl stat-number text-mangrove-900">{stat.desa}</div>
                <div className="text-xs text-mangrove-500">desa penyangga</div>
                <div className="mt-3 pt-3 border-t border-mangrove-50 flex justify-between text-sm">
                  <div>
                    <div className="text-xs text-mangrove-400">Pria</div>
                    <div className="font-semibold text-mangrove-700">{stat.pria.toLocaleString('id-ID')}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-mangrove-400">Wanita</div>
                    <div className="font-semibold text-mangrove-700">{stat.wanita.toLocaleString('id-ID')}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
