import { useTheme } from '../../context/ThemeContext'
import styles from '../../styles/shared.module.css'

export default function ThemeToggle({ ui, isMobile = false }) {
    const { theme, toggleTheme } = useTheme()
    const className = isMobile ? styles.mobileThemeToggle : styles.themeToggle

    return (
        <button
            className={className}
            onClick={toggleTheme}
            aria-label={ui.toggleThemeLabel}
        >
            {theme === 'dark' ? (
                <img src="/buttons/off-switch.png" alt={ui.switchToLight} />
            ) : (
                <img src="/buttons/on-switch.png" alt={ui.switchToDark} />
            )}
            <span className={styles.themeTooltip}>
                {theme === 'dark' ? ui.lightsOn : ui.lightsOff}
            </span>
        </button>
    )
}
