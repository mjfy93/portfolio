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
  const { theme, toggleTheme, isHydrated } = useTheme()

  return (
    <div className={`${styles.homeContainer} ${styles[theme]}`}>
      {isHydrated && (
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <img src="/public/sun-icon.svg" alt="Switch to light mode" />
          ) : (
            <img src="/public/moon-icon.svg" alt="Switch to dark mode" />
          )}
        </button>
      )}
    </div>
  )
}