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
                <img src="/buttons/off-switch.png" alt="Switch to light mode" />
            ) : (
                <img src="/buttons/on-switch.png" alt="Switch to dark mode" />
            )}
            <span className={styles.themeTooltip}>
                {theme === 'dark' ? 'Lights On' : 'Lights Off'}
            </span>
        </button>
    )
}