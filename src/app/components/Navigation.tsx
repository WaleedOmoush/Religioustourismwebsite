import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { Globe } from 'lucide-react';

export default function Navigation() {
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="bg-amber-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Globe className="w-8 h-8" />
            <span className="text-xl font-bold">{translations.title[language]}</span>
          </Link>

          <div className="flex gap-4 items-center">
            <Link
              to="/syria"
              className="hover:bg-amber-800 px-4 py-2 rounded transition"
            >
              {translations.syria[language]}
            </Link>
            <Link
              to="/lebanon"
              className="hover:bg-amber-800 px-4 py-2 rounded transition"
            >
              {translations.lebanon[language]}
            </Link>
            <Link
              to="/jordan"
              className="hover:bg-amber-800 px-4 py-2 rounded transition"
            >
              {translations.jordan[language]}
            </Link>
            <Link
              to="/palestine"
              className="hover:bg-amber-800 px-4 py-2 rounded transition"
            >
              {translations.palestine[language]}
            </Link>

            <div className="border-l border-amber-700 pl-4 ml-2 flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded transition ${
                  language === 'en' ? 'bg-amber-700' : 'hover:bg-amber-800'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('ar')}
                className={`px-3 py-1 rounded transition ${
                  language === 'ar' ? 'bg-amber-700' : 'hover:bg-amber-800'
                }`}
              >
                ع
              </button>
              <button
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded transition ${
                  language === 'es' ? 'bg-amber-700' : 'hover:bg-amber-800'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
