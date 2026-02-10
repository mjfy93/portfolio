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
        shortName: 'Sobre mí'
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
            hours: '360 horas',
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
            hours: '12 horas',
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

        {
            id: 'career-sales',
            name: 'Prepárate para una Carrera en Ventas',
            description: "Un curso diseñado para aprender a aprovechar la IA al máximo y las habilidades necesarias para hacerlo bien.",
            techStack: [
                'Efectividad en Ventas',
                'Construcción de Relaciones'
            ],
            hours: '1 hora',
            link: "https://www.linkedin.com/learning/certificates/feab2e2ebd5fc1cc204ff7606a18c71aacaedafd25df8264752c570f96676059?trk=share_certificate",
            image: '/certificates/career-sales.png'
        },
        {
            id: 'sales-foundations',
            name: 'Fundamentos de Ventas',
            description: "En este curso, el exlíder senior de Genentech y fundador de Braintrust, Jeff Bloomfield, explica por qué y cómo los mejores vendedores aprenden a ver a través de los ojos de sus clientes.",
            techStack: [
                'Venta de Soluciones',
                'Enfoque en Procesos',
                'Enfoque en el Cliente'
            ],
            hours: '1 hora',
            link: "https://www.linkedin.com/learning/certificates/35b9661d8aefcfba514e470234697e4bdc33e3612d0476cbe5556d103efbbfe4?trk=share_certificate",
            image: '/certificates/sales-foundations.png'
        },

        //Nuevos certificados aquí - seguir la misma estructura
    ]
}

export const workHistory = {
    shortName: 'Experiencia',
    buttonImages: {
        light: '/buttons/briefcase-light.png',
        dark: '/buttons/briefcase-dark.png'
    },
    position: {
        top: '480px',
        left: '870px',
        width: 'auto',
        height: '160px'
    },
    mobileColor: {
        light: '#2c3e50',
        dark: '#34495eb3'
    },
    icon: 'briefcase',
    items: [
        {
            id: 'fullstack-dev',
            title: 'Desarrolladora Full Stack',
            company: 'Independiente',
            period: '11/2025 – Presente',
            description: 'Diseño y desarrollo de aplicaciones web full-stack usando React.js, JavaScript, Python y Flask, mientras también profundizo en TypeScript, Angular y Next.js para ampliar mis herramientas. Enfocada en construir interfaces responsivas y centradas en el usuario con código limpio y mantenible.'
        },
        {
            id: 'freelance-translator',
            title: 'Traducción e Interpretación Freelance',
            company: 'Independiente',
            period: '03/2023 – Presente',
            description: 'Entrega de traducciones de alta precisión bajo plazos ajustados, gestión integral de proyectos con clientes y provisión de interpretación en tiempo real para eventos internacionales. Habilidades transferibles clave: atención al detalle, resolución sistemática de problemas, adaptabilidad rápida y comunicación clara con stakeholders.'
        },
        {
            id: 'oracle-pm',
            title: 'Gerente de Proyectos de Traducción',
            company: 'Oracle Colombia',
            period: '09/2022 – 02/2023',
            location: 'Bogotá, Colombia',
            description: 'Comunicación interfuncional con stakeholders mediante coordinación con ejecutivos y líderes creativos, optimización de flujos de trabajo y aseguramiento de calidad liderando más de 15 traductores en 9 idiomas, y traducción de requerimientos de negocio en entregables accionables con entrega consistente a tiempo.'
        },
        {
            id: 'oracle-translator',
            title: 'Especialista en Traducción al Español',
            company: 'Oracle Colombia',
            period: '11/2020 – 09/2022',
            location: 'Bogotá, Colombia',
            description: 'Traducción y localización de contenido web y materiales de marketing asegurando consistencia de marca. Colaboración con equipos de marketing en documentación de productos y contenido de blog, gestionando actualizaciones en múltiples plataformas. Adaptación de documentación técnica en contenido claro y accesible para audiencias diversas. Habilidades transferibles clave: comprensión de la estructura de contenido web, control de versiones y comunicación técnica.'
        }
    ]
}

