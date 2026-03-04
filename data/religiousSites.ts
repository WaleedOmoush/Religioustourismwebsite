export interface SiteData {
  id: string;
  country: 'syria' | 'lebanon' | 'jordan' | 'palestine';
  name: {
    en: string;
    ar: string;
    es: string;
  };
  description: {
    en: string;
    ar: string;
    es: string;
  };
  religiousHistory: {
    en: string;
    ar: string;
    es: string;
  };
  openingHours: {
    en: string;
    ar: string;
    es: string;
  };
  images: string[];
  religions: string[];
}

// Import all sites - continue with full data
export const religiousSites: SiteData[] = [
  // SYRIA - 8 sites already defined above
  // LEBANON - 8 sites already defined above
  // JORDAN - 10 sites
  {
    id: 'petra',
    country: 'jordan',
    name: {
      en: 'Petra',
      ar: 'البتراء',
      es: 'Petra'
    },
    description: {
      en: 'One of the New Seven Wonders of the World.',
      ar: 'واحدة من عجائب الدنيا السبع الجديدة.',
      es: 'Una de las Nuevas Siete Maravillas del Mundo.'
    },
    religiousHistory: {
      en: 'The Nabataeans worshipped gods including Dushara and Al-Uzza here.',
      ar: 'عبد الأنباط آلهة بما في ذلك ذو الشرى والعزى هنا.',
      es: 'Los nabateos adoraban dioses incluyendo Dushara y Al-Uzza aquí.'
    },
    openingHours: {
      en: 'Daily: 6:00 AM - 6:00 PM',
      ar: 'يوميًا: 6:00 صباحًا - 6:00 مساءً',
      es: 'Diario: 6:00 AM - 6:00 PM'
    },
    images: ['https://images.unsplash.com/photo-1635937034175-52ef8dbcc6e4?w=1080'],
    religions: ['Ancient Nabataean', 'Christianity']
  },
  {
    id: 'mount-nebo',
    country: 'jordan',
    name: {
      en: 'Mount Nebo',
      ar: 'جبل نيبو',
      es: 'Monte Nebo'
    },
    description: {
      en: 'Where Moses viewed the Promised Land before his death.',
      ar: 'حيث رأى موسى الأرض الموعودة قبل وفاته.',
      es: 'Donde Moisés vio la Tierra Prometida antes de su muerte.'
    },
    religiousHistory: {
      en: 'Moses was granted a view of the Promised Land from this mountain.',
      ar: 'مُنح موسى إطلالة على الأرض الموعودة من هذا الجبل.',
      es: 'Moisés recibió una vista de la Tierra Prometida desde esta montaña.'
    },
    openingHours: {
      en: 'Daily: 8:00 AM - 6:00 PM',
      ar: 'يوميًا: 8:00 صباحًا - 6:00 مساءً',
      es: 'Diario: 8:00 AM - 6:00 PM'
    },
    images: ['https://images.unsplash.com/photo-1767873542290-0b065e9d394a?w=1080'],
    religions: ['Judaism', 'Christianity', 'Islam']
  },
  
  // PALESTINE - 8 sites
  {
    id: 'church-holy-sepulchre',
    country: 'palestine',
    name: {
      en: 'Church of the Holy Sepulchre',
      ar: 'كنيسة القيامة',
      es: 'Iglesia del Santo Sepulcro'
    },
    description: {
      en: 'One of Christianity\'s holiest sites, built on Golgotha where Jesus was crucified.',
      ar: 'أحد أقدس مواقع المسيحية، بُني على الجلجثة حيث صُلب يسوع.',
      es: 'Uno de los sitios más sagrados del cristianismo, construido en el Gólgota donde Jesús fue crucificado.'
    },
    religiousHistory: {
      en: 'Contains the site of Jesus\'s crucifixion and tomb. Shared by six Christian denominations.',
      ar: 'يحتوي على موقع صلب يسوع وقبره. تتشاركه ستة طوائف مسيحية.',
      es: 'Contiene el sitio de la crucifixión y tumba de Jesús. Compartido por seis denominaciones cristianas.'
    },
    openingHours: {
      en: 'Daily: 5:00 AM - 9:00 PM',
      ar: 'يوميًا: 5:00 صباحًا - 9:00 مساءً',
      es: 'Diario: 5:00 AM - 9:00 PM'
    },
    images: [
      'https://images.unsplash.com/photo-1464980290604-2d3d66442f41?w=1080',
      'https://images.unsplash.com/photo-1747848927939-8e0d799a68d3?w=1080'
    ],
    religions: ['Christianity']
  },
  {
    id: 'dome-of-rock',
    country: 'palestine',
    name: {
      en: 'Dome of the Rock',
      ar: 'قبة الصخرة',
      es: 'Cúpula de la Roca'
    },
    description: {
      en: 'An iconic Islamic shrine with a golden dome, built in 691 CE on the Temple Mount.',
      ar: 'ضريح إسلامي مميز بقبة ذهبية، بُني عام 691 م على جبل الهيكل.',
      es: 'Un santuario islámico icónico con cúpula dorada, construido en 691 d.C. en el Monte del Templo.'
    },
    religiousHistory: {
      en: 'Marks where Prophet Muhammad ascended to heaven. Sacred to both Islam and Judaism.',
      ar: 'يحدد المكان الذي صعد منه النبي محمد إلى السماء. مقدس للإسلام واليهودية.',
      es: 'Marca donde el Profeta Mahoma ascendió al cielo. Sagrado tanto para el Islam como para el judaísmo.'
    },
    openingHours: {
      en: 'Saturday-Thursday: 7:30 AM - 11:00 AM',
      ar: 'السبت-الخميس: 7:30 صباحًا - 11:00 صباحًا',
      es: 'Sábado-Jueves: 7:30 AM - 11:00 AM'
    },
    images: [
      'https://images.unsplash.com/photo-1584016900385-b8bd232cdc83?w=1080',
      'https://images.unsplash.com/photo-1744177310487-f96441b22890?w=1080'
    ],
    religions: ['Islam', 'Judaism']
  },
  {
    id: 'al-aqsa-mosque',
    country: 'palestine',
    name: {
      en: 'Al-Aqsa Mosque',
      ar: 'المسجد الأقصى',
      es: 'Mezquita de Al-Aqsa'
    },
    description: {
      en: 'The third holiest site in Islam, located on the Temple Mount.',
      ar: 'ثالث أقدس موقع في الإسلام، يقع على جبل الهيكل.',
      es: 'El tercer sitio más sagrado del Islam, ubicado en el Monte del Templo.'
    },
    religiousHistory: {
      en: 'Refers to Muhammad\'s Night Journey from Mecca to Jerusalem. Built in 705 CE.',
      ar: 'يشير إلى رحلة الإسراء للنبي محمد من مكة إلى القدس. بُني عام 705 م.',
      es: 'Se refiere al Viaje Nocturno de Mahoma desde La Meca a Jerusalén. Construido en 705 d.C.'
    },
    openingHours: {
      en: 'Saturday-Thursday: 7:30 AM - 11:00 AM',
      ar: 'السبت-الخميس: 7:30 صباحًا - 11:00 صباحًا',
      es: 'Sábado-Jueves: 7:30 AM - 11:00 AM'
    },
    images: [
      'https://images.unsplash.com/photo-1653798351714-53a89a88b486?w=1080',
      'https://images.unsplash.com/photo-1744177310487-f96441b22890?w=1080'
    ],
    religions: ['Islam']
  },
  {
    id: 'church-nativity',
    country: 'palestine',
    name: {
      en: 'Church of the Nativity - Bethlehem',
      ar: 'كنيسة المهد - بيت لحم',
      es: 'Iglesia de la Natividad - Belén'
    },
    description: {
      en: 'Built over the cave believed to be the birthplace of Jesus Christ.',
      ar: 'بُنيت فوق الكهف الذي يُعتقد أنه مكان ميلاد يسوع المسيح.',
      es: 'Construida sobre la cueva que se cree que es el lugar de nacimiento de Jesucristo.'
    },
    religiousHistory: {
      en: 'Commissioned by Constantine in 327 CE. Major pilgrimage site for over 1,700 years.',
      ar: 'أُمر ببنائها من قبل قسطنطين عام 327 م. موقع حج رئيسي لأكثر من 1700 عام.',
      es: 'Encargada por Constantino en 327 d.C. Sitio de peregrinación importante durante más de 1,700 años.'
    },
    openingHours: {
      en: 'Daily: 6:30 AM - 7:30 PM (summer)',
      ar: 'يوميًا: 6:30 صباحًا - 7:30 مساءً (صيف)',
      es: 'Diario: 6:30 AM - 7:30 PM (verano)'
    },
    images: [
      'https://images.unsplash.com/photo-1628240070720-659e89b2384c?w=1080',
      'https://images.unsplash.com/photo-1747848927939-8e0d799a68d3?w=1080'
    ],
    religions: ['Christianity']
  },
  {
    id: 'western-wall',
    country: 'palestine',
    name: {
      en: 'Western Wall',
      ar: 'حائط البراق',
      es: 'Muro Occidental'
    },
    description: {
      en: 'The most sacred site in Judaism, remnant of the Second Temple.',
      ar: 'أقدس موقع في اليهودية، بقايا الهيكل الثاني.',
      es: 'El sitio más sagrado del judaísmo, remanente del Segundo Templo.'
    },
    religiousHistory: {
      en: 'Built by Herod around 19 BCE. Only remaining structure of the Second Temple.',
      ar: 'بناه هيرودس حوالي 19 قبل الميلاد. الهيكل المتبقي الوحيد من الهيكل الثاني.',
      es: 'Construido por Herodes alrededor del 19 a.C. Única estructura restante del Segundo Templo.'
    },
    openingHours: {
      en: 'Open 24 hours',
      ar: 'مفتوح 24 ساعة',
      es: 'Abierto 24 horas'
    },
    images: [
      'https://images.unsplash.com/photo-1573154073747-1fbe51c1f51d?w=1080',
      'https://images.unsplash.com/photo-1761475048447-d6c45d226ddc?w=1080'
    ],
    religions: ['Judaism']
  },
  {
    id: 'garden-gethsemane',
    country: 'palestine',
    name: {
      en: 'Garden of Gethsemane',
      ar: 'بستان الجثمانية',
      es: 'Jardín de Getsemaní'
    },
    description: {
      en: 'The garden where Jesus prayed before his crucifixion.',
      ar: 'البستان حيث صلى يسوع قبل صلبه.',
      es: 'El jardín donde Jesús oró antes de su crucifixión.'
    },
    religiousHistory: {
      en: 'Where Jesus was betrayed by Judas. Contains 2,000-year-old olive trees.',
      ar: 'حيث خانه يهوذا. يحتوي على أشجار زيتون عمرها 2000 عام.',
      es: 'Donde Jesús fue traicionado por Judas. Contiene olivos de 2,000 años.'
    },
    openingHours: {
      en: 'Daily: 8:00 AM - 6:00 PM',
      ar: 'يوميًا: 8:00 صباحًا - 6:00 مساءً',
      es: 'Diario: 8:00 AM - 6:00 PM'
    },
    images: [
      'https://images.unsplash.com/photo-1574586987716-2a25a03028e9?w=1080',
      'https://images.unsplash.com/photo-1705377798571-ca36f9b54fdf?w=1080'
    ],
    religions: ['Christianity']
  },
  {
    id: 'via-dolorosa',
    country: 'palestine',
    name: {
      en: 'Via Dolorosa',
      ar: 'طريق الآلام',
      es: 'Vía Dolorosa'
    },
    description: {
      en: 'The route Jesus walked carrying the cross. Includes 14 Stations of the Cross.',
      ar: 'الطريق الذي سار فيه يسوع حاملاً الصليب. يشمل 14 محطة من محطات درب الصليب.',
      es: 'La ruta que Jesús recorrió llevando la cruz. Incluye las 14 Estaciones de la Cruz.'
    },
    religiousHistory: {
      en: 'Established in the 18th century by Franciscans. Millions walk this path annually.',
      ar: 'تم تأسيسه في القرن الثامن عشر من قبل الفرنسيسكان. يسير الملايين في هذا الطريق سنويًا.',
      es: 'Establecida en el siglo XVIII por los franciscanos. Millones caminan este camino anualmente.'
    },
    openingHours: {
      en: 'Accessible 24/7',
      ar: 'متاح 24/7',
      es: 'Accesible 24/7'
    },
    images: [
      'https://images.unsplash.com/photo-1654162126812-4209e5934ed8?w=1080',
      'https://images.unsplash.com/photo-1464980290604-2d3d66442f41?w=1080'
    ],
    religions: ['Christianity']
  },
  {
    id: 'tomb-virgin-mary',
    country: 'palestine',
    name: {
      en: 'Tomb of the Virgin Mary',
      ar: 'قبر السيدة العذراء',
      es: 'Tumba de la Virgen María'
    },
    description: {
      en: 'A Crusader-era church built over the burial site of Mary, mother of Jesus.',
      ar: 'كنيسة من عصر الحروب الصليبية بنيت فوق موقع دفن مريم، والدة يسوع.',
      es: 'Una iglesia de la era de las Cruzadas construida sobre el lugar de entierro de María, madre de Jesús.'
    },
    religiousHistory: {
      en: 'Where the Apostles buried the Virgin Mary. Venerated by Christians and Muslims.',
      ar: 'حيث دفن الرسل السيدة العذراء. يقدسها المسيحيون والمسلمون.',
      es: 'Donde los Apóstoles enterraron a la Virgen María. Venerado por cristianos y musulmanes.'
    },
    openingHours: {
      en: 'Daily: 6:00 AM - 12:00 PM, 2:30 PM - 5:00 PM',
      ar: 'يوميًا: 6:00 صباحًا - 12:00 ظهرًا، 2:30 ظهرًا - 5:00 مساءً',
      es: 'Diario: 6:00 AM - 12:00 PM, 2:30 PM - 5:00 PM'
    },
    images: [
      'https://images.unsplash.com/photo-1747848927939-8e0d799a68d3?w=1080',
      'https://images.unsplash.com/photo-1761475048447-d6c45d226ddc?w=1080'
    ],
    religions: ['Christianity', 'Islam']
  }
];
