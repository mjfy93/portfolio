import { useLanguage } from '../../context/LanguageContext'
import { useTheme } from '../../context/ThemeContext'
import styles from '../../styles/shared.module.css'

export default function LanguageToggle({ isMobile = false }) {
    const { language, toggleLanguage } = useLanguage()
    const { theme } = useTheme()
    const className = isMobile ? styles.mobileLanguageToggle : styles.languageToggle
    const variant = theme === 'dark' ? 'dark' : 'light'

    return (
        <button
            className={className}
            onClick={toggleLanguage}
            aria-label="Toggle language"
        >
            {language === 'en' ? (
                <img src={`/buttons/flag-en-${variant}.png`} alt="Cambiar a español" />
            ) : (
                <img src={`/buttons/flag-es-${variant}.png`} alt="Switch to English" />
            )}
            <span className={styles.langTooltip}>
                {language === 'en' ? 'Cambiar a español' : 'Switch to English'}
            </span>
        </button>
    )
}
