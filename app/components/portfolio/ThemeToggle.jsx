import styles from '../../styles/shared.module.css'

export default function ThemeToggle({ theme, toggleTheme, isMobile = false }) {
    const className = isMobile ? styles.mobileThemeToggle : styles.themeToggle

    return (
        <button
            className={className}
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <img src="/icons/sun-icon.svg" alt="Switch to light mode" />
            ) : (
                <img src="/icons/moon-icon.svg" alt="Switch to dark mode" />
            )}
        </button>
    )
}