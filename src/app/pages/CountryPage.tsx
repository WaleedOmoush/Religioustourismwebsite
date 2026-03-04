import { useParams, Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { religiousSites } from '../../../data/religiousSites';
import { MapPin, Clock } from 'lucide-react';

export default function CountryPage() {
  const { country } = useParams<{ country: string }>();
  const { language } = useLanguage();

  const sites = religiousSites.filter((site) => site.country === country);

  if (!country || sites.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl mb-4">Country not found</h1>
        <Link to="/" className="text-amber-600 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-4 font-serif">
            {translations[country as keyof typeof translations][language]}
          </h1>
          <p className="text-xl">
            {sites.length} {translations.sites[language]}
          </p>
        </div>
      </div>

      {/* Sites Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site) => (
            <Link
              key={site.id}
              to={`/${country}/${site.id}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={site.images[0]}
                  alt={site.name[language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl mb-3 font-serif text-amber-900">
                  {site.name[language]}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {site.description[language]}
                </p>
                <div className="flex items-center gap-2 text-sm text-amber-700 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{site.religions.join(', ')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span className="line-clamp-1">{site.openingHours[language]}</span>
                </div>
                <div className="mt-4 text-amber-600 group-hover:text-amber-700 font-medium">
                  {translations.viewDetails[language]} →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
