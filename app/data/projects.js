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
