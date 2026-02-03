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
    }
    //Nuevos proyectos aquí - seguir la misma estructura
]
