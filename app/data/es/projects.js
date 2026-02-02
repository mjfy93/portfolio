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
            top: '71.2px',
            left: '703px',
            width: 'auto',
            height: '98.7px',

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
            english: 'https://docs.google.com/presentation/d/15BlfPgwqQeZAB6XCZDKYalOU9MfHRONh/edit?usp=sharing&ouid=106769692638695702916&rtpof=true&sd=true',
            spanish: 'https://docs.google.com/presentation/d/13yd9Ry3AAAOdnYsjohOKe2r28GT_dCar3wb_6GUZfJY/edit?usp=sharing'
        },
        preview: {
            type: 'img',
            src: 'null',
            poster: '/previews/portfolio-poster.png'
        },
        mobileColor: {
            light: '#05c1f0f3',
            dark: '#05c1f034'
        },
        icon: 'book'
    }
    //Nuevos proyectos aquí - seguir la misma estructura
]
