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
            top: '70px',
            left: '980px',
            width: 'auto',
            height: '100px',

        }, links: {
            english: 'https://tinyurl.com/translatorportfolio-mjfy93',
            spanish: 'https://tinyurl.com/portafolio-mjfy93'
        },
        preview: {
            type: 'img',
            src: '/previews/portfolio-poster.png',
            poster: '/previews/portfolio-poster.png',
            link: 'https://tinyurl.com/translatorportfolio-mjfy93'
        },
        mobileColor: {
            light: '#05c1f0f3',
            dark: '#05c1f034'
        },
        icon: 'book'
    },
    {
        id: 'widgetsill',
        name: 'WidgetSill',
        shortName: 'WidgetSill',
        description: 'WidgetSill is a lightweight, always-on-top desktop widget for Windows that brings essential information to your fingertips — no more switching between apps to check your calendar, weather, or control your music. This project is being built as part of an AI-assisted development workshop, using modern AI coding tools throughout the development process.',
        features: [
            'Calendar — View your Outlook events at a glance', 
            'Weather — Current conditions with auto - location detection',
            'Photo Slideshow — Display photos from any local folder',
            'Reminders — Quick task management without leaving your desktop',
            'Media Controls — Play, pause, and skip from any app',
            'Calculator — Basic calculations always within reach',
            'Light / Dark Theme — Easy on the eyes, day or night',
            'Modular — Show only the widgets you need'
        ],
        buttonImages: {
            light: '/buttons/widgetsill-light.jpg',
            dark: '/buttons/widgetsill-dark.jpg'
        },
        position: {
            top: '219px',
            left: '760px',
            width: 'auto',
            height: '95px',

        }, 
        links: {
            github: 'https://github.com/mjfy93/widgetsill',
            demo: 'https://placehold.co/600x400?text=In+Progress'
        },
        preview: {
            type: 'img',
            src: '/buttons/widgetsill-logo.png',
            poster: '/buttons/widgetsill-logo.png'
        },
        mobileColor: {
            light: '#a5a3a3',
            dark: '#7b7c7b'
        },
        status: 'in-progress',
        icon: 'desktop'
    },
   
    //New projects here - follow same structure
]
