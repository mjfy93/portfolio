//About me - Add more to tech stack
export const profile = {
    handle: '@mjfy93',
    fullName: 'María José Ferro Yepes',
    title: 'Full Stack Developer',
    bio: 'Developer with a background in translation. Passionate about building clean, user-friendly web applications.',
    techStack: [
        'Bootstrap',
        'CAT Tools',
        'Claude AI',
        'CSS Modules',
        'Flask',
        'Github',
        'GSAP',
        'Interpretation',
        'JavaScript',
        'Postman',
        'Python',
        'RESTful API',
        'React-Router',
        'React Bits',
        'SQL',
        'SQL Alchemy',
        'Translation',
        'TypeScript',
        'Vercel',
        'WebGL'
        // 'Angular',
        // 'Next.js'
    ],
    links: {
        github: 'https://github.com/mjfy93',
        linkedin: 'https://linkedin.com/in/mariajoseferroyepes'
    },
    portfolioTechStack: ['React Router v7', 'Vite', 'CSS Modules', 'FontAwesome', 'Custom Made Icons', 'Dynamic Display (Mobile/Desktop)'],
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
        shortName: 'About Me'
    }
}

export const certificates = {
    shortName: 'Certificates',
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
            description: '360-hour intensive bootcamp',
            techStack: [
                'Front-end: HTML/​CSS, JavaScript, React.js, React Router, Bootstrap',
                'Back - end: Python, Flask, RESTful APIs, SQL, Object - Oriented Programming',
                'Tools & Practices: Git / GitHub, Command Line, Unit Testing(Jest)'
            ],
            hours: '360',
            link: 'https://certificate.4geeks.com/fc6cb0a39163f4321c049fc0c2ce3f19ca770b66',
            image: '/certificates/4geeks-bootcamp.png'
        },
        {
            id: 'efset',
            name: 'EF SET English Certificate',
            description: "Comprehensive, internationally-recognized English proficiency test. Reading, Listening, Writing and Speaking, all tested in a thorough 90-minute adaptive exam that adjusts the difficulty according to the tester's abilities.",
            techStack: [
                'Reading',
                'Writing',
                'Speaking',
                'Listening'
            ],
            hours: null,
            link: "https://cert.efset.org/YKSU8S",
            image: '/certificates/efset-english-certificate.png'
        }, {
            id: 'career-essentials',
            name: 'Career Essentials in Software Development by Microsoft & LinkedIn',
            description: "A course desgined to discover the skills needed for a career in software development, to learn the core concepts and structure of programming languages and learn how they are applied. Taught by Annyce Davis, Sasha Vodnik, Olivia Chiu Stone and Barron Stone.",
            techStack: [
                'Develop an understanding of programming core concepts',
                'Discover the structure of programming languages',
                'Learn foundational programming concepts, practices, and terminology'
            ],
            hours: null,
            link: "https://www.linkedin.com/learning/certificates/5e29f4bb86030740ebdcc2fd340623d91f5891bc275c99ca5edb68fd15728b7f?trk=share_certificate",
            image: '/certificates/microsoft-career-essentials.png'
        },
        {
            id: 'fullstack-ai',
            name: 'Workshop: fullstack with AI',
            description: "A course designed to learn how to leverage AI to it's full potential and the skills necessary to do it well.",
            techStack: [
                'V0, Cursor, Claude AI',
                'MVP development and business/project strategy',
                'AI Assisted Development'
            ],
            hours: '10 hours(6 hours + 4 hours of independent study)',
            link: "https://www.linkedin.com/learning/certificates/5e29f4bb86030740ebdcc2fd340623d91f5891bc275c99ca5edb68fd15728b7f?trk=share_certificate",
            image: '/certificates/microsoft-career-essentials.png'
        },

        //New certificates here - follow same structure
    ]
}
