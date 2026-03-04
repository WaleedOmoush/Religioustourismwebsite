import { Outlet } from 'react-router';
import Navigation from './components/Navigation';
import { LanguageProvider } from './contexts/LanguageContext';

export default function Root() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <footer className="bg-amber-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2026 Religious Tourism in the Levant. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
}
