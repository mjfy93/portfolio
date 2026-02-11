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
        top: '124px',
        left: '529px',
        width: 'auto',
        height: '180px'
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
            description: 'Intensive bootcamp',
            techStack: [
                'Front-end: HTML/​CSS, JavaScript, React.js, React Router, Bootstrap',
                'Back - end: Python, Flask, RESTful APIs, SQL, Object - Oriented Programming',
                'Tools & Practices: Git / GitHub, Command Line, Unit Testing(Jest)'
            ],
            hours: '360 hours',
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
            hours: '12 hours',
            link: "https://www.linkedin.com/learning/certificates/5e29f4bb86030740ebdcc2fd340623d91f5891bc275c99ca5edb68fd15728b7f?trk=share_certificate",
            image: '/certificates/microsoft-career-essentials.png'
        },
        {
            id: 'fullstack-ai',
            name: 'Workshop: Fullstack with AI',
            description: "A course designed to learn how to leverage AI to it's full potential and the skills necessary to do it well.",
            techStack: [
                'V0, Cursor, Claude AI',
                'MVP development and business/project strategy',
                'AI Assisted Development'
            ],
            hours: '10 hours',
            link: "https://www.linkedin.com/learning/certificates/5e29f4bb86030740ebdcc2fd340623d91f5891bc275c99ca5edb68fd15728b7f?trk=share_certificate",
            image: 'https://placehold.co/600x400?text=Certicate+in+Progress'
        },
        {
            id: 'career-sales',
            name: 'Prepare Yourself for a Career in Sales',
            description: "A course designed to learn how to leverage AI to it's full potential and the skills necessary to do it well.",
            techStack: [
                'Sales Effectiveness',
                'Relationship Building'
            ],
            hours: '1 hour',
            link: "https://www.linkedin.com/learning/certificates/feab2e2ebd5fc1cc204ff7606a18c71aacaedafd25df8264752c570f96676059?trk=share_certificate",
            image: '/certificates/career-sales.png'
        },
        {
            id: 'sales-foundations',
            name: 'Sales Foundations',
            description: "In this course, former Genentech senior leader and Braintrust founder Jeff Bloomfield explains why and how the best salespeople learn how to see through the eyes of their customers.",
            techStack: [
                'Solution Selling',
                'Process Focus',
                'Customer Focus'
            ],
            hours: '1 hour',
            link: "https://www.linkedin.com/learning/certificates/35b9661d8aefcfba514e470234697e4bdc33e3612d0476cbe5556d103efbbfe4?trk=share_certificate",
            image: '/certificates/sales-foundations.png'
        },
        //New certificates here - follow same structure
       
    ]
}

export const workHistory = {
    shortName: 'Work History',
    buttonImages: {
        light: '/buttons/briefcase-light.png',
        dark: '/buttons/briefcase-dark.png'
    },
    position: {
        top: '480px',
        left: '840px',
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
            title: 'Full Stack Developer',
            company: 'Self-employed',
            period: '11/2025 – Present',
            description: 'Design and development of full-stack web applications using React.js, JavaScript, Python, and Flask, while also diving into TypeScript, Angular, and Next.js to broaden my toolkit. Focused on building responsive, user-centered interfaces with clean, maintainable code.'
        },
        {
            id: 'freelance-translator',
            title: 'Freelance Translation and Interpreting',
            company: 'Self-employed',
            period: '03/2023 – Present',
            description: 'Delivered precision-critical translations under tight deadlines, managed end-to-end client projects, and provided real-time interpretation for international events. Core transferable skills: attention to detail, systematic problem-solving, rapid adaptability, and clear stakeholder communication.'
        },
        {
            id: 'oracle-pm',
            title: 'Translation Project Manager',
            company: 'Oracle Colombia',
            period: '09/2022 – 02/2023',
            location: 'Bogotá, Colombia',
            description: 'Cross-functional stakeholder communication through coordination with executives and creative leaders, workflow optimization and quality assurance leading 15+ translators across 9 languages, and translating business requirements into actionable deliverables with consistent on-time delivery.'
        },
        {
            id: 'oracle-translator',
            title: 'Spanish Translation Specialist',
            company: 'Oracle Colombia',
            period: '11/2020 – 09/2022',
            location: 'Bogotá, Colombia',
            description: 'Translated and localized website content and marketing materials ensuring brand consistency. Collaborated with marketing teams on product documentation and blog content, managing updates across multiple platforms. Adapted technical documentation into clear, user-friendly content for diverse audiences. Core transferable skills: understanding of web content structure, version control, and technical communication.'
        }
    ]
}
