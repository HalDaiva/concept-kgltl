import { useEffect, useRef, useState } from 'react';
import { Trees, Users, Wallet, Shield, ArrowRight, MapPin, Leaf, Waves, Bird, Sprout, TrendingUp, Calendar, Newspaper, Clock } from 'lucide-react';
import { IMAGES, KPI_DATA, ARTICLES } from '@/data/mockData';
import { CountUp, StatCard } from '@/components/charts';
import type { Page } from '@/components/Layout';

const iconMap: Record<string, React.ReactNode> = {
  trees: <Trees className="w-6 h-6" />,
  users: <Users className="w-6 h-6" />,
  wallet: <Wallet className="w-6 h-6" />,
  shield: <Shield className="w-6 h-6" />,
};

export function HomePage({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.heroMangrove} alt="Mangrove" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-mangrove-950/90 via-mangrove-900/70 to-lagoon-900/50" />
        </div>

        <div className="container-page relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in-up">
              <Leaf className="w-4 h-4" />
              Forest Programme VI — Kerjasama RI & Jerman (KfW)
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] text-balance animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Pemulihan Ekosistem<br />
              <span className="bg-gradient-to-r from-mangrove-200 to-lagoon-200 bg-clip-text text-transparent">
                Mangrove SM KGLTL
              </span>
            </h1>

            <p className="text-lg text-white/80 mt-6 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Portal pengetahuan dan dashboard interaktif restorasi mangrove di Suaka Margasatwa Karang Gading dan Langkat Timur Laut — mentransformasi data lapangan menjadi pengetahuan publik dan instrumen pengambilan keputusan.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => onNavigate('dashboard')} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mangrove-400 text-mangrove-950 font-semibold hover:bg-mangrove-300 hover:shadow-xl transition-all active:scale-95">
                <BarChart3 className="w-5 h-5" />
                Jelajahi Dashboard
              </button>
              <button onClick={() => onNavigate('learning')} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all active:scale-95">
                <BookOpen className="w-5 h-5" />
                Pusat Pembelajaran
              </button>
            </div>

            {/* Quick stats in hero */}
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { val: 352, unit: 'Ha', label: 'Areal Pemulihan' },
                { val: 513, unit: '', label: 'Partisipan' },
                { val: 17, unit: '', label: 'Desa Penyangga' },
              ].map((s, i) => (
                <div key={i} className="text-white">
                  <div className="stat-number text-3xl">
                    <CountUp value={s.val} />
                    <span className="text-lg text-mangrove-200 ml-1">{s.unit}</span>
                  </div>
                  <div className="text-xs text-white/60 font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-float">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-white/50" />
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-20 bg-mangrove-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="badge bg-mangrove-100 text-mangrove-700 mb-3">Ringkasan Kinerja</span>
            <h2 className="section-title">Indikator Kinerja Utama</h2>
            <p className="text-mangrove-500 mt-2 max-w-xl mx-auto">Capaian program Semester I Tahun 2026 (Januari–Juni)</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {KPI_DATA.map((kpi) => (
              <StatCard
                key={kpi.id}
                label={kpi.label}
                value={kpi.value}
                unit={kpi.unit}
                icon={iconMap[kpi.icon]}
                color={kpi.color}
                detail={kpi.detail}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-20 bg-white">
        <div className="container-page">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="badge bg-lagoon-100 text-lagoon-700 mb-3">Terbaru</span>
              <h2 className="section-title">Artikel & Berita</h2>
              <p className="text-mangrove-500 mt-2">Informasi terkini dari lapangan SM KGLTL</p>
            </div>
            <button
              onClick={() => onNavigate('artikel')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-mangrove-50 text-mangrove-700 font-semibold text-sm hover:bg-mangrove-100 transition-all"
            >
              Lihat Semua <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.slice(0, 3).map(a => (
              <button
                key={a.id}
                onClick={() => onNavigate('artikel')}
                className="card card-hover overflow-hidden text-left flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={IMAGES[a.image as keyof typeof IMAGES]}
                    alt={a.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <span className="badge bg-mangrove-100 text-mangrove-600 text-xs mb-2 self-start">{a.category}</span>
                  <h3 className="font-semibold text-mangrove-900 leading-snug flex-1">{a.title}</h3>
                  <p className="text-sm text-mangrove-500 mt-2 line-clamp-2">{a.excerpt}</p>
                  <div className="flex items-center gap-3 mt-4 text-xs text-mangrove-400">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{a.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{a.readTime}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <button
              onClick={() => onNavigate('artikel')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mangrove-600 text-white font-semibold hover:bg-mangrove-700 transition-all"
            >
              Lihat Semua Artikel <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gradient-to-br from-mangrove-900 to-mangrove-950 text-white">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="badge bg-white/10 text-mangrove-200 mb-3 border border-white/10">Kerjasama</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Kemitraan Multipihak</h2>
            <p className="text-mangrove-300 mt-2 max-w-xl mx-auto">Kolaborasi dalam pengelolaan konservasi adaptif berbasis masyarakat</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Shield className="w-7 h-7" />, title: 'BBKSDA Sumut', desc: 'Balai Besar KSDA Sumatera Utara — pengelola kawasan' },
              { icon: <Waves className="w-7 h-7" />, title: 'KfW Jerman', desc: 'Forest Programme VI — pendanaan hibah' },
              { icon: <Users className="w-7 h-7" />, title: 'KTH & Fasdes', desc: '4 Kelompok Tani Hutan & Fasilitator Desa' },
              { icon: <Sprout className="w-7 h-7" />, title: '17 Desa Penyangga', desc: '80.220 jiwa masyarakat pesisir' },
            ].map((p, i) => (
              <div key={i} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mangrove-400 to-mangrove-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="font-semibold text-white text-lg">{p.title}</h3>
                <p className="text-sm text-mangrove-300 mt-2 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-mangrove-50">
        <div className="container-page">
          <div className="text-center mb-12">
            <span className="badge bg-lagoon-100 text-lagoon-700 mb-3">Pendekatan</span>
            <h2 className="section-title">Results-Based & Adaptive Management</h2>
            <p className="text-mangrove-500 mt-2 max-w-xl mx-auto">Transformasi data lapangan menjadi pengetahuan dan keputusan</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-5">
            {[
              { step: '01', icon: <MapPin />, title: 'Input', desc: 'Kerjasama RI–Jerman, kelembagaan BBKSDA, baseline 352 Ha & 17 desa' },
              { step: '02', icon: <Sprout />, title: 'Process', desc: 'Restorasi fisik, silvikutur adaptif, patroli bersama, GEDSI & FPIC' },
              { step: '03', icon: <BarChart3 />, title: 'Output', desc: 'Portal pengetahuan, dashboard real-time, sistem pelaporan transparan' },
              { step: '04', icon: <TrendingUp />, title: 'Impact', desc: 'Pemulihan hidrologi, blue carbon, partisipasi inklusif masyarakat' },
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="card p-6 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-mangrove-100 flex items-center justify-center text-mangrove-600">
                      {s.icon}
                    </div>
                    <span className="font-display text-3xl font-extrabold text-mangrove-100">{s.step}</span>
                  </div>
                  <h3 className="font-bold text-mangrove-900 text-lg">{s.title}</h3>
                  <p className="text-sm text-mangrove-500 mt-2 leading-relaxed">{s.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-mangrove-200 items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-mangrove-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="rounded-3xl bg-gradient-to-br from-mangrove-600 to-mangrove-800 p-10 lg:p-14 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-mangrove-400/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-lagoon-400/20 blur-3xl" />
            <div className="relative">
              <Bird className="w-10 h-10 mx-auto mb-4 text-mangrove-200" />
              <h2 className="font-display text-2xl sm:text-3xl font-bold">Jelajahi Data Lapangan Secara Interaktif</h2>
              <p className="text-mangrove-200 mt-3 max-w-xl mx-auto">Dashboard pemantauan terintegrasi dengan 5 modul data: penanaman, masyarakat, patroli, satwa, dan restorasi fisik.</p>
              <button onClick={() => onNavigate('dashboard')} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-mangrove-700 font-semibold hover:shadow-xl transition-all active:scale-95 mt-6">
                Buka Dashboard
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BarChart3({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}

function BookOpen({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
