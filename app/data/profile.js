//About me - Add more to tech stack
export const profile = {
    handle: '@mjfy93',
    fullName: 'María José Ferro Yepes',
    title: 'Full Stack Developer',
    bio: 'Developer with a background in translation. Passionate about building clean, user-friendly web applications.',
    techStack: [
        'React',
        'JavaScript',
        'Python',
        'Flask',
        'SQL',
        'TypeScript',
        // 'Angular',
        // 'Next.js'
    ],
    links: {
        github: 'https://github.com/mjfy93',
        linkedin: 'https://linkedin.com/in/mariajoseferroyepes'
    },
    portfolioTechStack: ['React Router v7', 'Vite', 'CSS Modules'],
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
            link: 'https://certificate.4geeks.com/fc6cb0a39163f4321c049fc0c2ce3f19ca770b66',
            image: '/certificates/4geeks-bootcamp.png'
        }
        //New certificates here - follow same structure
    ]
}
