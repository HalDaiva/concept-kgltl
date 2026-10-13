import { useState } from 'react';
import { Home, MapPin, BookOpen, BarChart3, FileText, Menu, X, Trees, Leaf, Newspaper } from 'lucide-react';

export type Page = 'home' | 'profile' | 'learning' | 'dashboard' | 'publications' | 'artikel';

const NAV_ITEMS: { id: Page; label: string; icon: React.ReactNode }[] = [
  { id: 'home', label: 'Beranda', icon: <Home className="w-4 h-4" /> },
  { id: 'profile', label: 'Profil & Wilayah', icon: <MapPin className="w-4 h-4" /> },
  { id: 'learning', label: 'Pusat Pembelajaran', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'dashboard', label: 'Dashboard Interaktif', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'artikel', label: 'Artikel', icon: <Newspaper className="w-4 h-4" /> },
  { id: 'publications', label: 'Publikasi & Kontak', icon: <FileText className="w-4 h-4" /> },
];

export function Navbar({ current, onNavigate }: { current: Page; onNavigate: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.onscroll = () => setScrolled(window.scrollY > 20);
  }

  const handleNav = (p: Page) => {
    onNavigate(p);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-mangrove-100' : 'bg-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button onClick={() => handleNav('home')} className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mangrove-500 to-mangrove-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-105">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-lagoon-400 flex items-center justify-center border-2 border-white">
                <Trees className="w-2.5 h-2.5 text-white" />
              </div>
            </div>
            <div className="text-left hidden sm:block">
              <div className={`font-display font-bold text-sm leading-tight transition-colors ${scrolled || open ? 'text-mangrove-900' : 'text-mangrove-900'}`}>
                Pusat Pembelajaran
              </div>
              <div className={`text-[10px] font-medium leading-tight transition-colors ${scrolled || open ? 'text-mangrove-500' : 'text-mangrove-500'}`}>
                Restorasi Mangrove SM KGLTL
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  current === item.id
                    ? 'bg-mangrove-600 text-white shadow-md'
                    : scrolled || open
                    ? 'text-mangrove-700 hover:bg-mangrove-50'
                    : 'text-mangrove-800 hover:bg-mangrove-50/50'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 rounded-xl bg-mangrove-50 flex items-center justify-center text-mangrove-700"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <nav className="lg:hidden pb-4 animate-slide-in">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    current === item.id ? 'bg-mangrove-600 text-white' : 'text-mangrove-700 hover:bg-mangrove-50'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export function Footer({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <footer className="bg-mangrove-950 text-mangrove-100 mt-20">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-mangrove-400 to-mangrove-600 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white">Pusat Pembelajaran</div>
                <div className="text-xs text-mangrove-300">Restorasi Mangrove SM KGLTL</div>
              </div>
            </div>
            <p className="text-sm text-mangrove-300 max-w-md leading-relaxed">
              Portal pengetahuan dan pemantauan restorasi ekosistem mangrove di Suaka Margasatwa Karang Gading dan Langkat Timur Laut, Kabupaten Langkat & Deli Serdang, Sumatera Utara.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Navigasi</h4>
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button key={item.id} onClick={() => { onNavigate(item.id); window.scrollTo({ top: 0 }); }} className="text-sm text-mangrove-300 hover:text-mangrove-100 text-left transition-colors">
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Sekretariat</h4>
            <div className="flex flex-col gap-2 text-sm text-mangrove-300">
              <span>BBKSDA Sumatera Utara</span>
              <span>Jl. Sisingamangaraja No. 3</span>
              <span>Medan, Sumatera Utara</span>
              <span className="text-mangrove-400 text-xs mt-2">Kerjasama KfW Forest Programme VI</span>
            </div>
          </div>
        </div>

        <div className="border-t border-mangrove-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-mangrove-400">
            &copy; 2026 BBKSDA Sumut & KfW. Forest Programme VI: Protection of Mangrove Forest.
          </p>
          <p className="text-xs text-mangrove-400">Mockup demonstrasi frontend — data Semester I 2026</p>
        </div>
      </div>
    </footer>
  );
}
