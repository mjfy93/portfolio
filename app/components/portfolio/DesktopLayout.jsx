import styles from '../../styles/desktop.module.css'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import TitleButton from './TitleButton'
import ProjectButton from './ProjectButton'
import AboutMeButton from './AboutMeButton'

export default function DesktopLayout({
    theme,
    profile,
    projects,
    certificates,
    workHistory,
    ui,
    onOpenAbout,
    onOpenProject,
    onOpenCertificates,
    onOpenWorkHistory,
    onOpenPortfolioInfo
}) {
    return (
        <div className={`${styles.imageWrapper} ${styles[theme]}`}>
            <TitleButton
                onClick={onOpenPortfolioInfo}
                ui={ui}
            />

            <AboutMeButton
                profile={profile}
                theme={theme}
                onClick={onOpenAbout}
            />

            <ThemeToggle ui={ui} />
            <LanguageToggle />

            {projects.map((project) => (
                <ProjectButton
                    key={project.id}
                    project={project}
                    theme={theme}
                    onClick={() => onOpenProject(project)}
                />
            ))}

            <button
                className={styles.certificateBtn}
                style={{
                    position: 'absolute',
                    top: certificates.position.top,
                    left: certificates.position.left,
                    height: certificates.position.height,
                    width: certificates.position.width
                }}
                onClick={onOpenCertificates}
            >
                <img
                    src={theme === 'dark' ? certificates.buttonImages.dark : certificates.buttonImages.light}
                    alt="Certificates"
                    style={{ height: '100%', width: 'auto' }}
                />
                <span className={styles.tooltip}>{certificates.shortName}</span>
            </button>

            <button
                className={styles.certificateBtn}
                style={{
                    position: 'absolute',
                    top: workHistory.position.top,
                    left: workHistory.position.left,
                    height: workHistory.position.height,
                    width: workHistory.position.width
                }}
                onClick={onOpenWorkHistory}
            >
                <img
                    src={theme === 'dark' ? workHistory.buttonImages.dark : workHistory.buttonImages.light}
                    alt="Work History"
                    style={{ height: '100%', width: 'auto', border: 'none' }}
                />
                <span className={styles.tooltip}>{workHistory.shortName}</span>
            </button>
        </div>
    )
}