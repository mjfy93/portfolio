import { useState } from 'react'
import styles from '../styles/home.module.css'
import { useTheme } from '../context/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const meta = () => {
  return [
    { title: 'Portfolio - @mjfy93' },
    { name: 'description', content: 'My Portfolio' }
  ]
}

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [activeModal, setActiveModal] = useState(null)
  const openModal = (modalName) => setActiveModal(modalName)
  const closeModal = () => setActiveModal(null)

  return (
    <div className={styles.homeContainer}>
      {/* ===== DESKTOP LAYOUT ===== */}
      <div className={`${styles.imageWrapper} ${styles[theme]}`}>
        <h1>Majo's Portfolio</h1>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <img src="/icons/sun-icon.svg" alt="Switch to light mode" />
          ) : (
            <img src="/icons/moon-icon.svg" alt="Switch to dark mode" />
          )}
        </button>
        <button
          className={`${styles.projectButton} ${styles.lotrButton}`}
          onClick={() => openModal('lotr')}
          aria-label="LOTR"
        >
          {theme === 'dark' ? (
            <img src="/buttons/tlor-button-dark.jpg" alt="TLOR Encyclopedia Dark" />
          ) : (
            <img src="/buttons/tlor-button-light.jpg" alt="TLOR Encyclopedia Light" />
          )}
        </button>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className={`${styles.mobileWrapper} ${styles[theme]}`}>
        <h1 className={styles.mobileTitle}>Majo's Portfolio</h1>

        <div className={styles.mobileButtonGrid}>
          <button
            className={`${styles.mobileProjectButton} ${styles.lotrMobileButton}`}
            onClick={() => openModal('lotr')}
          >
            <FontAwesomeIcon icon="book" /> LOTR Encyclopedia
          </button>

          {/* Add more project buttons here */}
          {/* Example:
          <button
            className={`${styles.mobileProjectButton} ${styles.booketlistMobileButton}`}
            onClick={() => openModal('booketlist')}
          >
            <FontAwesomeIcon icon="book-open" /> BooketList
          </button>
          */}
        </div>

        <button
          className={styles.mobileThemeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <img src="/icons/sun-icon.svg" alt="Switch to light mode" />
          ) : (
            <img src="/icons/moon-icon.svg" alt="Switch to dark mode" />
          )}
        </button>
      </div>

      {/* ===== MODAL (shared) ===== */}
      {activeModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>×</button>
            {activeModal === 'lotr' && (
              <div>
                <h5>The Lord of the Rings Encyclopedia</h5>
                <h6>Modern LOTR Encyclopedia with Advanced Animations</h6>
                <ul>
                  <li>Built with React Router v7 (SSR), Vite, and CSS Modules</li>
                  <li>Secure API integration using resource routes as serverless proxies to protect bearer tokens</li>
                  <li>Advanced WebGL animations with React Bits and custom light ray effects</li>
                  <li>GSAP-powered interactive menu with directional animations</li>
                  <li>Responsive design with lazy loading and code splitting</li>
                </ul>
                <div className={styles.modalButtons}>
                  <a href="https://github.com/mjfy93/LOTR-Blog">
                    <button className={styles.iconBtn}>
                      <FontAwesomeIcon icon={['fab', 'github']} /> Code
                    </button>
                  </a>
                  <a href="https://lotr-blog.vercel.app/">
                    <button className={styles.iconBtn}>
                      <FontAwesomeIcon icon="display" /> Demo
                    </button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}