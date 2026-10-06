import { useState } from 'react';
import { Navbar, Footer } from '@/components/Layout';
import type { Page } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { ProfilePage } from '@/pages/ProfilePage';
import { LearningPage } from '@/pages/LearningPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { PublicationsPage } from '@/pages/PublicationsPage';

function App() {
  const [page, setPage] = useState<Page>('home');

  return (
    <div className="min-h-screen bg-mangrove-50">
      <Navbar current={page} onNavigate={setPage} />
      <main>
        {page === 'home' && <HomePage onNavigate={setPage} />}
        {page === 'profile' && <ProfilePage />}
        {page === 'learning' && <LearningPage />}
        {page === 'dashboard' && <DashboardPage />}
        {page === 'publications' && <PublicationsPage />}
      </main>
      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;
