import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/mobile.module.css'
import ThemeToggle from './ThemeToggle'
import TitleButton from './TitleButton'
import MobileProjectButton from './MobileProjectButton'
import StatusBar from './StatusBar'

export default function MobileLayout({
    theme,
    toggleTheme,
    profile,
    projects,
    certificates,
    onOpenAbout,
    onOpenProject,
    onOpenCertificates
}) {
    return (
        <div className={`${styles.mobileWrapper} ${styles[theme]}`}>
            <StatusBar />

            <div className={styles.mobileTopButtons}>
                <TitleButton
                    handle={profile.handle}
                    onClick={onOpenAbout}
                />
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

            <ThemeToggle
                theme={theme}
                toggleTheme={toggleTheme}
                isMobile={true}
            />
        </div>
    )
}