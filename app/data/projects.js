export const projects = [
    {
        id: 'lotr',
        name: 'LOTR Encylopedia',
        shortName: ' LOTR',
        description: 'Modern LOTR Encylopedia with Advanced Animations',
        features: [
            'Built with React Router v7 (SSR), Vite, and CSS Modules',
            'Secure API integration using resource routes as serverless proxies to protect bearer tokens',
            'Advanced WebGL animations with React Bits and custom light ray effects',
            'GSAP-powered interactive menu with directional animations',
            'Responsive design with lazy loading and code splitting'
        ],
        buttonImages: {
            light: '/buttons/tlor-button-light.jpg',
            dark: '/buttons/tlor-button-dark.jpg'
        },
        position: {
            top: '71.2px',
            left: '703px',
            width: 'auto',
            height: '98.7px'
        }, links: {
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
    }
    //New projects here - follow same structure
]

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
    }
}

export const certificates = {
    shortName: 'Certificates',
    buttonImages: {
        light: '/buttons/certificates-button-light.png',
        dark: '/buttons/certificates-button-dark.png'
    },
    position: {
        top: '200px',
        left: '703px',
        width: 'auto',
        height: '98.7px'
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
            images: {
                light: '/certificates/4geeks-bootcamp-light.png',
                dark: '/certificates/4geeks-bootcamp-dark.png'
            }
        }
        //New certificates here - follow same structure
    ]
}