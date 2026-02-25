export const projects = [
    {
        id: 'lotr',
        name: 'LOTR Encylopedia',
        shortName: ' LOTR Encyclopedia',
        description: 'Enciclopedia LOTR Moderna con Animaciones Avanzadas',
        features: [
            'Construido con React Router v7 (SSR), Vite y CSS Modules',
            'Integración segura de API usando rutas de recursos como proxies serverless para proteger tokens',
            'Animaciones avanzadas WebGL con React Bits y efectos de rayos de luz personalizados',
            'Menú interactivo con GSAP y animaciones direccionales',
            'Diseño responsivo con carga diferida y división de código'
        ],
        buttonImages: {
            light: '/buttons/tlor-button-light.jpg',
            dark: '/buttons/tlor-button-dark.jpg'
        },
        position: {
            top: '69px',
            left: '705px',
            width: 'auto',
            height: '101px',

        },
        links: {
            github: 'https://github.com/mjfy93/LOTR-Blog',
            demo: 'https://lotr-blog.vercel.app/'
        },
        preview: {
            type: 'gif',
            src: '/previews/lotr-preview.gif',
            poster: '/previews/lotr-poster.png'
        },
        mobileColor: {
            light: '#064b00',
            dark: '#22572eb3'
        },
        icon: 'book'
    },
    {
        id: 'translation-portfolio',
        name: 'Portafolio de Traducción e Interpretación',
        shortName: 'Portafolio T&I',
        description: 'Trabajo y experiencia como traductora con más de 9 años de experiencia y Certificado Oficial de Traductora e Intérprete.',
        features: [
            'Muestra de traducción',
            'Oferta de servicios'
        ],
        buttonImages: {
            light: '/buttons/translation-portfolio-light.jpg',
            dark: '/buttons/translation-portfolio-dark.jpg'
        },
        position: {
            top: '71.2px',
            left: '980px',
            width: 'auto',
            height: '98.7px',
            border: 'none'
        }, links: {
            english: 'https://tinyurl.com/translatorportfolio-mjfy93',
            spanish: 'https://tinyurl.com/portafolio-mjfy93'
        },
        preview: {
            type: 'img',
            src: '/previews/portafolio-poster.png',
            poster: '/previews/portafolio-poster.png',
            link: 'https://tinyurl.com/portafolio-mjfy93'
        },
        mobileColor: {
            light: '#05c1f0f3',
            dark: '#05c1f034'
        },
        icon: 'book'
    },
    {
        id: 'widgetsill',
        name: 'WidgetSill',
        shortName: 'WidgetSill',
        description: 'WidgetSill es un widget de escritorio ligero y siempre visible para Windows que pone información esencial al alcance de tu mano — sin necesidad de cambiar entre aplicaciones para revisar tu calendario, el clima o controlar tu música. Este proyecto se desarrolla como parte de un taller de desarrollo asistido por IA, usando herramientas modernas de programación con IA a lo largo del proceso.',
        features: [
            'Calendario — Visualiza tus eventos de Outlook de un vistazo',
            'Clima — Condiciones actuales con detección automática de ubicación',
            'Presentación de fotos — Muestra fotos desde cualquier carpeta local',
            'Recordatorios — Gestión rápida de tareas sin abandonar el escritorio',
            'Controles multimedia — Reproduce, pausa y salta de canción desde cualquier app',
            'Calculadora — Cálculos básicos siempre al alcance',
            'Tema claro / oscuro — Agradable a la vista, de día o de noche',
            'Modular — Muestra solo los widgets que necesitas'
        ],
        buttonImages: {
            light: '/buttons/widgetsill-light.jpg',
            dark: '/buttons/widgetsill-dark.jpg'
        },
        position: {
            top: '219px',
            left: '760px',
            width: 'auto',
            height: '95px',

        },
        links: {
            github: 'https://github.com/mjfy93/widgetsill',
            demo: 'https://placehold.co/600x400?text=In+Progress'
        },
        preview: {
            type: 'img',
            src: '/buttons/widgetsill-logo.png',
            poster: '/buttons/widgetsill-logo.png'
        },
        mobileColor: {
            light: '#a5a3a3',
            dark: '#7b7c7b'
        },
        status: 'in-progress',
        icon: 'desktop'
    }
    //Nuevos proyectos aquí - seguir la misma estructura
]
