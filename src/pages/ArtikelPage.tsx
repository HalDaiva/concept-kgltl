import { useState } from 'react';
import { Newspaper, Search, Tag, Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { ARTICLES, IMAGES } from '@/data/mockData';

const CATEGORIES = ['Semua', 'Teknik Restorasi', 'Masyarakat & GEDSI', 'Patroli & Keamanan', 'Satwa & Biodiversitas', 'Komunitas', 'Restorasi Fisik'];

export function ArtikelPage() {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const filtered = ARTICLES.filter(a => {
    const matchCat = activeCategory === 'Semua' || a.category === activeCategory;
    const matchSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const article = selectedArticle ? ARTICLES.find(a => a.id === selectedArticle) : null;

  if (article) {
    return (
      <div className="animate-fade-in pt-16 lg:pt-18">
        <section className="bg-gradient-to-br from-mangrove-800 to-mangrove-950 text-white py-10">
          <div className="container-page">
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center gap-2 text-mangrove-300 hover:text-white transition-colors text-sm mb-4"
            >
              ← Kembali ke Artikel
            </button>
            <span className="badge bg-white/10 text-mangrove-200 border border-white/20 mb-3">{article.category}</span>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold max-w-3xl">{article.title}</h1>
            <div className="flex flex-wrap items-center gap-4 mt-4 text-mangrove-300 text-sm">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{article.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{article.readTime} baca</span>
            </div>
          </div>
        </section>

        <div className="container-page py-10">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl overflow-hidden mb-8 aspect-[16/7]">
              <img src={IMAGES[article.image as keyof typeof IMAGES]} alt={article.title} className="w-full h-full object-cover" />
            </div>

            <div className="prose prose-mangrove max-w-none">
              <p className="text-lg text-mangrove-700 leading-relaxed font-medium mb-6">{article.excerpt}</p>

              <div className="space-y-4 text-mangrove-600 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kawasan Suaka Margasatwa Karang Gading dan Langkat Timur Laut (SM KGLTL) merupakan salah satu kawasan mangrove terpenting di Sumatera Utara. Upaya restorasi yang didukung oleh Forest Programme VI melalui kerjasama RI–Jerman (KfW) ini bertujuan untuk memulihkan ekosistem mangrove yang terdegradasi.
                </p>
                <p>
                  Program ini telah berhasil melaksanakan berbagai kegiatan strategis selama Semester I Tahun 2026. Mulai dari penanaman 352 hektare mangrove menggunakan teknik silvikutur adaptif, pemeliharaan tahun pertama (P1) di areal yang telah ditanam sebelumnya, hingga patroli pengamanan kawasan yang melibatkan masyarakat setempat.
                </p>
                <p>
                  Partisipasi masyarakat menjadi kunci keberhasilan program ini. Sebanyak 513 individu dari 17 desa penyangga telah aktif terlibat dalam berbagai kegiatan, mulai dari penanaman bibit hingga monitoring pertumbuhan tanaman. Keterlibatan perempuan yang mencapai 20,3% dari total partisipan juga menjadi pencapaian penting dalam implementasi prinsip GEDSI.
                </p>
                <p>
                  Ke depan, program ini akan terus diperkuat dengan survei biodiversitas yang lebih komprehensif, termasuk monitoring populasi Tuntong Laut (Batagur baska) yang merupakan satwa prioritas di kawasan ini. Komitmen bersama antara BBKSDA Sumatera Utara, masyarakat lokal, dan mitra internasional menjadi fondasi keberlanjutan program restorasi ini.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-mangrove-100">
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, i) => (
                    <span key={i} className="badge bg-mangrove-100 text-mangrove-700">
                      <Tag className="w-3 h-3 mr-1" />{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h3 className="font-display text-lg font-bold text-mangrove-900 mb-4">Artikel Terkait</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {ARTICLES.filter(a => a.id !== article.id).slice(0, 2).map(a => (
                  <button
                    key={a.id}
                    onClick={() => { setSelectedArticle(a.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="card card-hover p-4 text-left"
                  >
                    <span className="badge bg-mangrove-100 text-mangrove-600 text-xs mb-2">{a.category}</span>
                    <h4 className="font-semibold text-mangrove-900 text-sm leading-snug">{a.title}</h4>
                    <p className="text-xs text-mangrove-500 mt-2 line-clamp-2">{a.excerpt}</p>
                    <div className="flex items-center gap-1 mt-3 text-mangrove-600 text-xs font-semibold">
                      Baca selengkapnya <ArrowRight className="w-3 h-3" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in pt-16 lg:pt-18">
      {/* Header */}
      <section className="bg-gradient-to-br from-mangrove-800 to-mangrove-950 text-white py-12">
        <div className="container-page">
          <span className="badge bg-white/10 text-mangrove-200 border border-white/20 mb-3">Artikel</span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold">Artikel & Berita</h1>
          <p className="text-mangrove-300 mt-2 max-w-xl">
            Informasi terkini seputar kegiatan restorasi mangrove, temuan ilmiah, dan cerita dari lapangan SM KGLTL.
          </p>
        </div>
      </section>

      <div className="container-page py-8">
        {/* Search & Filter */}
        <div className="card p-5 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mangrove-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-mangrove-200 text-sm text-mangrove-700 focus:outline-none focus:border-mangrove-400 bg-white"
              />
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-mangrove-600 text-white'
                    : 'bg-mangrove-50 text-mangrove-600 hover:bg-mangrove-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article (first) */}
        {filtered.length > 0 && (
          <div className="mb-8">
            <button
              onClick={() => setSelectedArticle(filtered[0].id)}
              className="w-full card card-hover overflow-hidden text-left"
            >
              <div className="grid lg:grid-cols-2">
                <div className="aspect-[16/9] lg:aspect-auto overflow-hidden">
                  <img
                    src={IMAGES[filtered[0].image as keyof typeof IMAGES]}
                    alt={filtered[0].title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="badge bg-mangrove-100 text-mangrove-700">{filtered[0].category}</span>
                    <span className="badge bg-lagoon-100 text-lagoon-700">Unggulan</span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-mangrove-900 leading-snug">
                    {filtered[0].title}
                  </h2>
                  <p className="text-mangrove-500 mt-3 leading-relaxed">{filtered[0].excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-5 text-xs text-mangrove-400">
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" />{filtered[0].author}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{filtered[0].date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{filtered[0].readTime}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-6 text-mangrove-600 font-semibold text-sm">
                    Baca selengkapnya <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Article Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.slice(1).map(a => (
            <button
              key={a.id}
              onClick={() => setSelectedArticle(a.id)}
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
                <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-mangrove-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{a.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{a.readTime}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {a.tags.map((tag, i) => (
                    <span key={i} className="badge bg-mangrove-50 text-mangrove-500 text-[10px]">{tag}</span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Newspaper className="w-12 h-12 text-mangrove-200 mx-auto mb-4" />
            <p className="text-mangrove-400">Tidak ada artikel yang ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
}
