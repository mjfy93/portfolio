export const projects = [
    {
        id: 'lotr',
        name: 'LOTR Encylopedia',
        shortName: ' LOTR Encyclopedia',
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
        name: 'Translation and Interpretation Portfolio',
        shortName: 'T&I Portfolio',
        description: 'Work and Experience as a Translator with 9+ years of experience and an Official Translator and Interpreter Certificate.',
        features: [
            'Translation Sample',
            'Offering of services'
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
    //New projects here - follow same structure
]
