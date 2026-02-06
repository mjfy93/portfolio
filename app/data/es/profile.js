export const profile = {
    handle: '@mjfy93',
    fullName: 'María José Ferro Yepes',
    title: 'Desarrolladora Full Stack',
    bio: 'Desarrolladora con experiencia en traducción. Apasionada por crear aplicaciones web limpias y fáciles de usar.',
    techStack: [
        'Bootstrap',
        'CAT Tools',
        'Claude AI',
        'CSS Modules',
        'Flask',
        'Github',
        'GSAP',
        'Interpretación',
        'JavaScript',
        'Postman',
        'Python',
        'RESTful API',
        'React-Router',
        'React Bits',
        'SQL',
        'SQL Alchemy',
        'Traducción',
        'TypeScript',
        'Vercel',
        'WebGL'
    ],
    links: {
        github: 'https://github.com/mjfy93',
        linkedin: 'https://linkedin.com/in/mariajoseferroyepes'
    },
    portfolioTechStack: ['React Router v7', 'Vite', 'CSS Modules', 'FontAwesome', 'Íconos Personalizados', 'Visualización Dinámica (Móvil/Escritorio)'],
    portfolioRepo: 'https://github.com/mjfy93/portfolio',
    aboutButton: {
        buttonImages: {
            light: '/buttons/photo-light.jpg',
            dark: '/buttons/photo-dark.jpg'
        },
        position: {
            top: '422px',
            left: '72.5px',
            width: '73px',
            height: '91px'
        },
        mobileColor: {
            light: 'rgba(0, 0, 0, 0.35)',
            dark: 'rgba(0, 0, 0, 0.45)'
        },
        icon: 'user',
        shortName: 'Sobre Mí'
    }
}

export const certificates = {
    shortName: 'Certificados',
    buttonImages: {
        light: '/buttons/certificates-button-light.png',
        dark: '/buttons/certificates-button-dark.png'
    },
    position: {
        top: '120px',
        left: '529px',
        width: 'auto',
        height: '195px'
    },
    mobileColor: {
        light: '#1a5276',
        dark: '#2471a3b3'
    },
    icon: 'certificate',
    items: [
        {
            id: '4geeks',
            name: '4Geeks Bootcamp',
            description: 'Bootcamp intensivo de 360 horas',
            techStack: [
                'Front-end: HTML/CSS, JavaScript, React.js, React Router, Bootstrap',
                'Back-end: Python, Flask, RESTful APIs, SQL, Programación Orientada a Objetos',
                'Herramientas y Prácticas: Git/GitHub, Línea de Comandos, Pruebas Unitarias (Jest)'
            ],
            hours: null,
            link: 'https://certificate.4geeks.com/fc6cb0a39163f4321c049fc0c2ce3f19ca770b66',
            image: '/certificates/4geeks-bootcamp.png'
        },
        {
            id: 'efset',
            name: 'EF SET English Certificate',
            description: "Examen integral de competencia en inglés reconocido internacionalmente. Lectura, Comprensión Auditiva, Escritura y Expresión Oral, evaluados en un examen adaptativo de 90 minutos que ajusta la dificultad según las habilidades del evaluado.",
            techStack: [
                'Lectura',
                'Escritura',
                'Expresión Oral',
                'Comprensión Auditiva'
            ],
            hours: null,
            link: "https://cert.efset.org/YKSU8S",
            image: '/certificates/efset-english-certificate.png'
        }, {
            id: 'career-essentials',
            name: 'Career Essentials in Software Development by Microsoft & LinkedIn',
            description: "Un curso diseñado para descubrir las habilidades necesarias para una carrera en desarrollo de software, aprender los conceptos fundamentales y la estructura de los lenguajes de programación y cómo se aplican. Impartido por Annyce Davis, Sasha Vodnik, Olivia Chiu Stone y Barron Stone.",
            techStack: [
                'Desarrollar una comprensión de los conceptos fundamentales de programación',
                'Descubrir la estructura de los lenguajes de programación',
                'Aprender conceptos, prácticas y terminología fundamentales de programación'
            ],
            hours: null,
            link: "https://www.linkedin.com/learning/certificates/5e29f4bb86030740ebdcc2fd340623d91f5891bc275c99ca5edb68fd15728b7f?trk=share_certificate",
            image: '/certificates/microsoft-career-essentials.png'
        },
        {
            id: 'fullstack-ai',
            name: 'Workshop: fullstack con IA',
            description: "Un curso diseñado para aprender a aprovechar la IA al máximo y las habilidades necesarias para hacerlo bien.",
            techStack: [
                'V0, Cursor, Claude AI',
                'Desarrollo de MVP y estrategia de negocio/proyecto',
                'Desarrollo Asistido por IA'
            ],
            hours: '10 horas (6 horas + 4 horas de estudio independiente)',
            link: "https://www.linkedin.com/learning/certificates/5e29f4bb86030740ebdcc2fd340623d91f5891bc275c99ca5edb68fd15728b7f?trk=share_certificate",
            image: '/certificates/microsoft-career-essentials.png'
        },

        //Nuevos certificados aquí - seguir la misma estructura
    ]
}
