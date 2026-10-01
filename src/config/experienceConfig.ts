export interface ChapterConfig {
  id: string;
  index: number;
  label: string;
  scrollStart: number; // 0 to 1
  scrollEnd: number;   // 0 to 1
  timeStart: number;   // seconds in video
  timeEnd: number;     // seconds in video
  frameStart: number;  // 0 to 239
  frameEnd: number;    // 0 to 239
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
  position: 'editorial-split' | 'bottom-left' | 'top-right' | 'hidden' | 'center-right';
  badge?: string;
}

export interface ExperienceConfig {
  id: '3d_boat' | 'dashboard';
  title: string;
  shortLabel: string;
  videoSrc: string;
  posterSrc: string;
  framesFolder: string;
  framesMobileFolder: string;
  totalDurationSeconds: number;
  totalFrames: number;
  fps: number;
  desktopScrollMultiplier: number; // e.g. 5 screen heights
  mobileScrollMultiplier: number;  // e.g. 3.5 screen heights
  chapters: ChapterConfig[];
}

export const EXPERIENCES: Record<'3d_boat' | 'dashboard', ExperienceConfig> = {
  '3d_boat': {
    id: '3d_boat',
    title: 'Transición 3D Embarcación',
    shortLabel: 'Transición 3D',
    videoSrc: '/video/rivertech_3d_boat.mp4',
    posterSrc: '/posters/poster_3d_hero.webp',
    framesFolder: '/frames_3d',
    framesMobileFolder: '/frames_3d_mobile',
    totalDurationSeconds: 8.0,
    totalFrames: 192,
    fps: 24.0,
    desktopScrollMultiplier: 5.0,
    mobileScrollMultiplier: 3.5,
    chapters: [
      {
        id: 'presentacion_3d',
        index: 1,
        label: 'Visión Fluvial 3D',
        scrollStart: 0.0,
        scrollEnd: 0.28,
        timeStart: 0.0,
        timeEnd: 2.2,
        frameStart: 0,
        frameEnd: 52,
        badge: '01 / Navegación Aérea 3D',
        title: 'Tu operación fluvial, en una sola visión.',
        subtitle: 'Perspectiva aérea continua y monitoreo de la navegación fluvial en tiempo real.',
        ctaText: 'Explorar la experiencia',
        ctaHref: '#capitulo-2',
        position: 'editorial-split',
      },
      {
        id: 'derrota_3d',
        index: 2,
        label: 'Derrota & Canal Fluvial',
        scrollStart: 0.28,
        scrollEnd: 0.50,
        timeStart: 2.2,
        timeEnd: 3.8,
        frameStart: 52,
        frameEnd: 92,
        badge: '02 / Control en Ruta',
        title: 'Del panorama al canal navegable.',
        subtitle: 'Seguimiento preciso de la velocidad, calado y rumbo de tu embarcación.',
        position: 'bottom-left',
      },
      {
        id: 'transicion_3d',
        index: 3,
        label: 'Inmersión & Maniobra Fluvial',
        scrollStart: 0.50,
        scrollEnd: 0.72,
        timeStart: 3.8,
        timeEnd: 5.6,
        frameStart: 92,
        frameEnd: 136,
        badge: '03 / Inmersión Operacional',
        title: 'De la visión global a la maniobra.',
        subtitle: 'Transición continua hacia la dinámica del convoy, integrando datos náuticos en tiempo real.',
        position: 'top-right',
      },
      {
        id: 'convoy_3d',
        index: 4,
        label: 'Convoy & Operación Real',
        scrollStart: 0.72,
        scrollEnd: 1.0,
        timeStart: 5.6,
        timeEnd: 8.0,
        frameStart: 136,
        frameEnd: 191,
        badge: '04 / Convoy & Despacho Fluvial',
        title: 'Conecta tu flota con la realidad operacional.',
        subtitle: 'Supervisión en tiempo real de remolcadores, convoyes y cargas fluviales con RiverTech.',
        ctaText: 'Solicitar demostración',
        ctaHref: '#contacto',
        position: 'bottom-left',
      },
    ],
  },
  'dashboard': {
    id: 'dashboard',
    title: 'Dashboard & Cartografía',
    shortLabel: 'Dashboard & Mapa',
    videoSrc: '/video/rivertech_master.mp4',
    posterSrc: '/posters/poster_hero.webp',
    framesFolder: '/frames',
    framesMobileFolder: '/frames_mobile',
    totalDurationSeconds: 10.0,
    totalFrames: 240,
    fps: 24.0,
    desktopScrollMultiplier: 5.0,
    mobileScrollMultiplier: 3.5,
    chapters: [
      {
        id: 'presentacion',
        index: 1,
        label: 'Visión Global',
        scrollStart: 0.0,
        scrollEnd: 0.15,
        timeStart: 0.0,
        timeEnd: 2.0,
        frameStart: 0,
        frameEnd: 48,
        badge: '01 / Ecosistema RiverTech',
        title: 'Tu operación fluvial, en una sola visión.',
        subtitle: 'Explora RiverTech desde el mapa hasta el recorrido de una embarcación.',
        ctaText: 'Explorar la experiencia',
        ctaHref: '#capitulo-2',
        position: 'editorial-split',
      },
      {
        id: 'mapa',
        index: 2,
        label: 'Navegación Cartográfica',
        scrollStart: 0.15,
        scrollEnd: 0.40,
        timeStart: 2.0,
        timeEnd: 4.5,
        frameStart: 48,
        frameEnd: 108,
        badge: '02 / Cartografía & Flota',
        title: 'Del panorama al detalle.',
        subtitle: 'Una mirada más cercana a la operación.',
        position: 'bottom-left',
      },
      {
        id: 'recorrido',
        index: 3,
        label: 'Trayectoria & Telemetría',
        scrollStart: 0.40,
        scrollEnd: 0.70,
        timeStart: 4.5,
        timeEnd: 7.8,
        frameStart: 108,
        frameEnd: 187,
        badge: '03 / Seguimiento en Ruta',
        title: 'Cada recorrido cuenta una historia.',
        subtitle: 'Acércate a los movimientos de tu flota.',
        position: 'top-right',
      },
      {
        id: 'transicion',
        index: 4,
        label: 'Transición Cinematográfica',
        scrollStart: 0.70,
        scrollEnd: 0.78,
        timeStart: 7.8,
        timeEnd: 8.5,
        frameStart: 187,
        frameEnd: 204,
        title: '',
        subtitle: '',
        position: 'hidden', // Text cleared to highlight the map-to-aerial dissolve
      },
      {
        id: 'convoy',
        index: 5,
        label: 'Operación Fluvial Real',
        scrollStart: 0.78,
        scrollEnd: 1.0,
        timeStart: 8.5,
        timeEnd: 10.0,
        frameStart: 204,
        frameEnd: 239,
        badge: '04 / Conexión Fluvial',
        title: 'Conecta el mapa con tu operación.',
        subtitle: 'Descubre RiverTech para tu flota.',
        ctaText: 'Solicitar demostración',
        ctaHref: '#contacto',
        position: 'bottom-left',
      },
    ],
  },
};

export const DEFAULT_EXPERIENCE_ID: '3d_boat' | 'dashboard' = '3d_boat';
export const EXPERIENCE_CONFIG: ExperienceConfig = EXPERIENCES[DEFAULT_EXPERIENCE_ID];

export const BRAND_CONFIG = {
  name: 'RiverTech',
  tagline: 'Inteligencia y monitoreo para la navegación fluvial',
  primaryColor: '#2563EB',
  navyDark: '#070D18',
  navyCard: '#0D172A',
  accentCyan: '#38BDF8',
  verifiedCapabilities: [
    {
      title: 'Monitoreo Cartográfico de Flota',
      description: 'Supervisión geoespacial de convoyes y remolcadores en rutas fluviales, con visualización de calado, rumbo y cartas náuticas.',
      icon: 'map',
    },
    {
      title: 'Historial de Rutas y Telemetría',
      description: 'Registro cronológico detallado de maniobras, tiempos en tránsito y eventos náuticos con sellos de tiempo precisos.',
      icon: 'route',
    },
    {
      title: 'Gestión y Despacho Fluvial',
      description: 'Panel operacional consolidado para coordinar pilotos, convoyes y estado de barcazas en una consola unificada.',
      icon: 'ship',
    },
  ],
  contactStatusNote: 'Canal directo de demostración para operadores de flota y armadores.',
};

/**
 * MAPA DE CAPÍTULOS DE LA EXPERIENCIA CONTINUA
 * Define la narrativa espacial a lo largo de toda la landing page:
 * Sección -> Recurso -> Tramo/Fotograma -> Transformación visual -> Intervalo de lectura -> Salida
 */
export interface MasterChapter {
  id: string;
  index: number;
  badge: string;
  title: string;
  navLabel: string;
  resource: string;
  frameRange?: [number, number];
  visualTransformation: string;
  readingInterval: string;
  exitTransition: string;
  linkingElement: string;
}

export const LANDING_MASTER_MAP: MasterChapter[] = [
  {
    id: 'experiencia',
    index: 1,
    badge: '01 / Apertura Fluvial',
    title: 'Tu operación fluvial, en una sola visión.',
    navLabel: 'HOME',
    resource: '/frames_3d (Fotogramas 0 a 52)',
    frameRange: [0, 52],
    visualTransformation: 'Perspectiva aérea continua 2.5D con apertura gradual hacia encuadre completo.',
    readingInterval: 'Presentación del mensaje principal, valor comercial y botón de inmersión en la operación.',
    exitTransition: 'La embarcación inicia avance río abajo, alineándose con el canal náutico hacia telemetría.',
    linkingElement: 'Embarcación en navegación y eje del río.',
  },
  {
    id: 'one-platform',
    index: 2,
    badge: '02 / Beneficios & Capacidades',
    title: 'One platform, total control.',
    navLabel: 'ABOUT US',
    resource: '/frames_3d (Fotogramas 52 a 110) + Capa HUD de telemetría',
    frameRange: [52, 110],
    visualTransformation: 'Acercamiento progresivo a la ruta de navegación, con paneles de telemetría flotantes integrados.',
    readingInterval: 'Lectura reposada de los 4 pilares: Eficiencia de combustible, Reducción de CO2, Telemetría y Mantenimiento preventivo.',
    exitTransition: 'Focalización de la escena en el calado y perfil submarino del convoy fluvial.',
    linkingElement: 'Canal navegable y sondajes de profundidad.',
  },
  {
    id: 'solutions',
    index: 3,
    badge: '03 / Soluciones: Survey, Pilot, Dredge',
    title: 'Technology built for river operations',
    navLabel: 'SOLUTIONS',
    resource: 'Secuencia 3D (110-180) vinculada a /images/solution_survey.jpg, solution_pilot.jpg, solution_dredge.jpg',
    frameRange: [110, 180],
    visualTransformation: 'Transformación secuencial de 3 planos operativos: batimetría acústica -> cabina de pilotaje -> operación de dragado.',
    readingInterval: 'Intervalo estable por cada solución técnica con especificación de alcance y llamada a la acción.',
    exitTransition: 'Apertura de la cámara desde el canal dragado hacia la inmensidad del paisaje de ribera.',
    linkingElement: 'Eje del canal y datos de batimetría/derrota.',
  },
  {
    id: 'climate',
    index: 4,
    badge: '04 / Impacto Ambiental',
    title: 'Cleaner rivers start with smarter navigation',
    navLabel: 'IMPACT',
    resource: '/images/climate_riverbank.jpg',
    visualTransformation: 'Disolución de paneles técnicos y expansión luminosa hacia el ecosistema natural y comunidades riberas.',
    readingInterval: 'Compromiso ecológico y sostenibilidad en la cuenca fluvial sin cifras no verificadas.',
    exitTransition: 'Elevación suave de cámara hacia vista cenital del meandro del río.',
    linkingElement: 'Riberas y espejo de agua natural.',
  },
  {
    id: 'endorsement',
    index: 5,
    badge: '05 / Clientes & Confianza',
    title: 'Explore the endorsement of those who trust us',
    navLabel: 'CLIENTS',
    resource: '/images/river_trust_aerial.jpg',
    visualTransformation: 'Panorama aéreo cenital de río meándrico al atardecer, atmósfera limpia y serena.',
    readingInterval: 'Marcas de clientes e interlocutores navieros (3 Castillos, PRODECO, Impala, CNR, Naviera Central) con nitidez total.',
    exitTransition: 'Continuidad de la perspectiva aérea fluvial hacia testimonios directos.',
    linkingElement: 'Ruta meándrica fluvial en vista aérea.',
  },
  {
    id: 'reviews',
    index: 6,
    badge: '06 / Testimonios Operacionales',
    title: 'What our clients say',
    navLabel: 'REVIEWS',
    resource: 'Fondo aéreo fluvial con atenuación de lectura y velo de contraste',
    visualTransformation: 'Atenuación suave de la escena compartida para garantizar legibilidad de citas.',
    readingInterval: 'Lectura completamente estable de testimonios de directores de operaciones y superintendentes de flota.',
    exitTransition: 'Transición hacia la infraestructura y logística de ribera.',
    linkingElement: 'Atmósfera fluvial compartida.',
  },
  {
    id: 'news',
    index: 7,
    badge: '07 / Noticias & Frente Operacional',
    title: 'Insights from the river operations frontline',
    navLabel: 'BLOG',
    resource: '/images/news_bridge.jpg y /images/news_logistics.jpg',
    visualTransformation: 'Paneles de perspectiva continua con enlaces a artículos de innovación y pesaje fluvial.',
    readingInterval: 'Exploración de artículos con interacción inmediata sin saltos.',
    exitTransition: 'Acomodamiento final de la embarcación en zona de fondeo y calma náutica.',
    linkingElement: 'Infraestructura fluvial y logística de convoyes.',
  },
  {
    id: 'contacto',
    index: 8,
    badge: '08 / Demostración & Cierre',
    title: 'Conoce el alcance de RiverTech para tu operación fluvial',
    navLabel: 'CONTACT US',
    resource: 'Vista fluvial sosegada al crepúsculo con continuidad al footer',
    visualTransformation: 'Escena plenamente asentada; formulario estático, accesible y sin balanceos.',
    readingInterval: 'Completado cómodo del formulario de demostración y consulta de enlaces institucionales.',
    exitTransition: 'Fusión orgánica con el footer corporativo sin cortes abruptos.',
    linkingElement: 'Operación fluvial consolidada.',
  },
];
