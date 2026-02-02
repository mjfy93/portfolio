import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/mobile.module.css'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import TitleButton from './TitleButton'
import MobileProjectButton from './MobileProjectButton'
import StatusBar from './StatusBar'

export default function MobileLayout({
    theme,
    profile,
    projects,
    certificates,
    ui,
    onOpenAbout,
    onOpenProject,
    onOpenCertificates,
    onOpenPortfolioInfo
}) {
    return (
        <div className={`${styles.mobileWrapper} ${styles[theme]}`}>
            <StatusBar />

            <div className={styles.mobileTopButtons}>
                <TitleButton
                    onClick={onOpenPortfolioInfo}
                    ui={ui}
                />
                <button
                    className={styles.mobileFullWidthButton}
                    style={{
                        background: theme === 'dark' ? profile.aboutButton.mobileColor.dark : profile.aboutButton.mobileColor.light
                    }}
                    onClick={onOpenAbout}
                >
                    <FontAwesomeIcon icon={profile.aboutButton.icon} /> {profile.aboutButton.shortName}
                </button>
                <button
                    className={styles.mobileFullWidthButton}
                    style={{
                        background: theme === 'dark' ? certificates.mobileColor.dark : certificates.mobileColor.light
                    }}
                    onClick={onOpenCertificates}
                >
                    <FontAwesomeIcon icon={certificates.icon} /> {certificates.shortName}
                </button>
            </div>

            <div className={styles.mobileButtonGrid}>
                {projects.map((project) => (
                    <MobileProjectButton
                        key={project.id}
                        project={project}
                        theme={theme}
                        onClick={() => onOpenProject(project)}
                    />
                ))}
            </div>

            <ThemeToggle ui={ui} isMobile={true} />
            <LanguageToggle isMobile={true} />
        </div>
    )
}