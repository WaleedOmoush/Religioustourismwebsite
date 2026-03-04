import { Link } from 'react-router';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { MapPin } from 'lucide-react';

export default function Home() {
  const { language } = useLanguage();

  const countries = [
    {
      name: 'syria',
      image: 'https://images.unsplash.com/photo-1669823710183-d1bafd40a214?w=1080',
      sitesCount: 8
    },
    {
      name: 'lebanon',
      image: 'https://images.unsplash.com/photo-1672330567161-17fb0844fe45?w=1080',
      sitesCount: 8
    },
    {
      name: 'jordan',
      image: 'https://images.unsplash.com/photo-1635937034175-52ef8dbcc6e4?w=1080',
      sitesCount: 10
    },
    {
      name: 'palestine',
      image: 'https://images.unsplash.com/photo-1584016900385-b8bd232cdc83?w=1080',
      sitesCount: 8
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-amber-900 to-amber-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center z-10">
          <h1 className="text-5xl md:text-6xl mb-6 font-serif">
            {translations.title[language]}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl">
            {translations.subtitle[language]}
          </p>
        </div>
      </div>

      {/* Countries Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <Link
              key={country.name}
              to={`/${country.name}`}
              className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={country.image}
                  alt={translations[country.name as keyof typeof translations][language]}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl mb-2 font-serif">
                    {translations[country.name as keyof typeof translations][language]}
                  </h3>
                  <div className="flex items-center gap-2 text-amber-300">
                    <MapPin className="w-5 h-5" />
                    <span>
                      {country.sitesCount}+ {translations.sites[language]}
                    </span>
                  </div>
                  <div className="mt-4 inline-block bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded transition">
                    {translations.exploreCountry[language]}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Information Section */}
      <div className="bg-amber-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          {language === 'en' && (
            <>
              <h2 className="text-3xl mb-6 font-serif">The Cradle of Religions</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                The Levant region is home to some of the world's most significant religious sites. 
                From ancient temples to sacred mosques, historic churches to holy mountains, these lands 
                have witnessed the birth and evolution of major world religions. Explore the rich tapestry 
                of faith, history, and culture that has shaped humanity for millennia.
              </p>
            </>
          )}
          {language === 'ar' && (
            <>
              <h2 className="text-3xl mb-6 font-serif">مهد الأديان</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                تعد منطقة الشام موطنًا لبعض أهم المواقع الدينية في العالم. من المعابد القديمة إلى 
                المساجد المقدسة، والكنائس التاريخية إلى الجبال المقدسة، شهدت هذه الأراضي ولادة وتطور 
                الأديان العالمية الكبرى. استكشف النسيج الغني من الإيمان والتاريخ والثقافة الذي شكل البشرية لآلاف السنين.
              </p>
            </>
          )}
          {language === 'es' && (
            <>
              <h2 className="text-3xl mb-6 font-serif">La Cuna de las Religiones</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                La región del Levante alberga algunos de los sitios religiosos más significativos del mundo. 
                Desde templos antiguos hasta mezquitas sagradas, iglesias históricas hasta montañas santas, 
                estas tierras han sido testigos del nacimiento y evolución de las principales religiones mundiales. 
                Explora el rico tapiz de fe, historia y cultura que ha dado forma a la humanidad durante milenios.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
