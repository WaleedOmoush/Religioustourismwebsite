import { useParams, Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { religiousSites } from '../../../data/religiousSites';
import { MapPin, Clock, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function SiteDetailPage() {
  const { country, siteId } = useParams<{ country: string; siteId: string }>();
  const { language } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const site = religiousSites.find((s) => s.id === siteId && s.country === country);

  if (!site) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl mb-4">Site not found</h1>
        <Link to="/" className="text-amber-600 hover:underline">
          Go back home
        </Link>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % site.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + site.images.length) % site.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image Gallery */}
      <div className="relative h-[500px] bg-black">
        <img
          src={site.images[currentImageIndex]}
          alt={site.name[language]}
          className="w-full h-full object-cover opacity-90"
        />
        
        {site.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-amber-900" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-amber-900" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {site.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <Link
          to={`/${country}`}
          className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {translations.backToCountry[language]}
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-5xl mb-6 font-serif text-amber-900">
            {site.name[language]}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-amber-700">
              <MapPin className="w-5 h-5" />
              <div>
                <div className="text-sm text-gray-600">{translations.religions[language]}</div>
                <div className="font-medium">{site.religions.join(', ')}</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-amber-700">
              <Clock className="w-5 h-5" />
              <div>
                <div className="text-sm text-gray-600">{translations.openingHours[language]}</div>
                <div className="font-medium">{site.openingHours[language]}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <section className="mb-12">
            <h2 className="text-3xl mb-4 font-serif text-amber-900">
              {translations.description[language]}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {site.description[language]}
            </p>
          </section>

          {/* Religious History */}
          <section className="mb-12 bg-amber-50 p-8 rounded-lg">
            <h2 className="text-3xl mb-4 font-serif text-amber-900">
              {translations.religiousHistory[language]}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {site.religiousHistory[language]}
            </p>
          </section>

          {/* Image Grid */}
          {site.images.length > 1 && (
            <section className="mb-12">
              <h2 className="text-3xl mb-6 font-serif text-amber-900">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {site.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-video rounded-lg overflow-hidden ${
                      index === currentImageIndex ? 'ring-4 ring-amber-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${site.name[language]} - Image ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </button>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
