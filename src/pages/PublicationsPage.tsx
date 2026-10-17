import { useState } from 'react';
import { FileText, Download, Calendar, Image as ImageIcon, Video, MapPin, Mail, Phone, Send, Filter } from 'lucide-react';
import { PUBLICATIONS, GALLERY_ITEMS, IMAGES } from '@/data/mockData';

export function PublicationsPage() {
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [form, setForm] = useState({ name: '', email: '', message: '', tujuan: 'pendidikan' });
  const [submitted, setSubmitted] = useState(false);

  const categories = ['all', 'Drone', 'Foto Lapangan'];
  const filteredGallery = galleryFilter === 'all' ? GALLERY_ITEMS : GALLERY_ITEMS.filter(g => g.category === galleryFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <div className="animate-fade-in pt-16 lg:pt-18">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[320px] overflow-hidden">
        <img src={IMAGES.mangroveSunset} alt="Mangrove sunset" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-mangrove-950/80 to-mangrove-900/70" />
        <div className="absolute inset-0 flex items-end pb-10">
          <div className="container-page">
            <span className="badge bg-white/10 backdrop-blur text-white border border-white/20 mb-4">Publikasi & Kontak</span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white">Publikasi, Galeri & Sekretariat</h1>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-8">
            <FileText className="w-6 h-6 text-mangrove-600" />
            <div>
              <h2 className="section-title">Publikasi Berkala</h2>
              <p className="text-sm text-mangrove-500">Semester I 2026 & arsip laporan</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {PUBLICATIONS.map((pub) => (
              <div key={pub.id} className="card card-hover p-5 group">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mangrove-500 to-mangrove-700 text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="badge bg-mangrove-50 text-mangrove-600 text-[10px]">{pub.type}</span>
                      <span className="text-xs text-mangrove-400">{pub.size}</span>
                    </div>
                    <h3 className="font-semibold text-mangrove-900 leading-tight">{pub.title}</h3>
                    <p className="text-sm text-mangrove-500 mt-1">{pub.subtitle}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs text-mangrove-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {pub.date}
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Mockup: download tidak tersedia dalam demo')}
                    className="w-10 h-10 rounded-xl bg-mangrove-50 text-mangrove-600 flex items-center justify-center hover:bg-mangrove-100 transition-all shrink-0"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-mangrove-50">
        <div className="container-page">
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="w-6 h-6 text-mangrove-600" />
            <div>
              <h2 className="section-title">Galeri Foto Udara & Dokumenter</h2>
              <p className="text-sm text-mangrove-500">Dokumentasi visual kegiatan restorasi</p>
            </div>
          </div>

          {/* Gallery filter */}
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-4 h-4 text-mangrove-400" />
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setGalleryFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  galleryFilter === cat ? 'bg-mangrove-600 text-white' : 'bg-white text-mangrove-600 hover:bg-mangrove-50 border border-mangrove-100'
                }`}
              >
                {cat === 'all' ? 'Semua' : cat}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredGallery.map((item) => (
              <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-square shadow-md cursor-pointer">
                <img
                  src={IMAGES[item.img as keyof typeof IMAGES]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mangrove-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <span className="badge bg-white/20 backdrop-blur text-white text-[10px] mb-2">{item.category}</span>
                  <h3 className="text-white font-semibold text-sm">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <span className="badge bg-lagoon-100 text-lagoon-700 mb-3">Kontak Sekretariat</span>
              <h2 className="section-title">Hubungi & Kunjungan Pembelajaran</h2>
              <p className="text-mangrove-500 mt-3 leading-relaxed">
                Untuk pendaftaran kunjungan pembelajaran, kerjasama penelitian, atau pertanyaan terkait program restorasi mangrove SM KGLTL.
              </p>

              <div className="space-y-4 mt-6">
                {[
                  { icon: <MapPin className="w-5 h-5" />, title: 'Sekretariat', desc: 'BBKSDA Sumatera Utara\nJl. Sisingamangaraja No. 3, Medan' },
                  { icon: <Mail className="w-5 h-5" />, title: 'Email', desc: 'info@bbksda-sumut.go.id' },
                  { icon: <Phone className="w-5 h-5" />, title: 'Telepon', desc: '(061) 786-1234' },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-mangrove-100 hover:border-mangrove-300 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-mangrove-100 text-mangrove-600 flex items-center justify-center shrink-0">{c.icon}</div>
                    <div>
                      <div className="font-semibold text-mangrove-900 text-sm">{c.title}</div>
                      <div className="text-sm text-mangrove-500 mt-0.5 whitespace-pre-line">{c.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl bg-gradient-to-br from-mangrove-50 to-lagoon-50 border border-mangrove-100">
                <div className="flex items-center gap-2 text-mangrove-700 mb-2">
                  <Video className="w-5 h-5" />
                  <span className="font-semibold text-sm">Video Dokumenter</span>
                </div>
                <p className="text-sm text-mangrove-500">Film dokumenter restorasi mangrove Semester I 2026 akan tersedia segera.</p>
              </div>
            </div>

            {/* Contact form */}
            <div className="card p-6 h-fit">
              <h3 className="font-display text-lg font-bold text-mangrove-900 mb-1">Pendaftaran Kunjungan</h3>
              <p className="text-sm text-mangrove-500 mb-6">Isi formulir untuk mendaftar kunjungan pembelajaran</p>

              {submitted ? (
                <div className="py-12 text-center animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-success-100 text-success-600 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="font-semibold text-mangrove-900">Pendaftaran Terkirim!</h4>
                  <p className="text-sm text-mangrove-500 mt-1">Tim sekretariat akan menghubungi Anda segera.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-mangrove-700 block mb-1.5">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-mangrove-200 focus:border-mangrove-400 focus:outline-none text-mangrove-900 transition-colors"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-mangrove-700 block mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-mangrove-200 focus:border-mangrove-400 focus:outline-none text-mangrove-900 transition-colors"
                      placeholder="email@contoh.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-mangrove-700 block mb-1.5">Tujuan</label>
                    <select onChange={(e) => setForm({ ...form, tujuan: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-mangrove-200 text-sm text-mangrove-700 focus:outline-none focus:border-mangrove-400 bg-white">
                      <option value="pendidikan">Pendidikan</option>
                      <option value="penelitian">Penelitian</option>
                      <option value="wisata">Wisata Alam</option>
                      <option value="other">Lainnya</option>
                    </select>
                    {/* <select
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-mangrove-200 focus:border-mangrove-400 focus:outline-none text-mangrove-900 transition-colors"
                      placeholder="email@contoh.com"
                    /> */}
                  </div>
                  { form.tujuan === "other" && <div>
                    <label className="text-sm font-medium text-mangrove-700 block mb-1.5">Pesan</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-mangrove-200 focus:border-mangrove-400 focus:outline-none text-mangrove-900 transition-colors resize-none"
                      placeholder="Jelaskan tujuan kunjungan Anda..."
                    />
                  </div> }

                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send className="w-4 h-4" />
                    Kirim Pendaftaran
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
