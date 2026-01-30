import styles from '../../styles/desktop.module.css'
import ThemeToggle from './ThemeToggle'
import TitleButton from './TitleButton'
import ProjectButton from './ProjectButton'
import AboutMeButton from './AboutMeButton'

export default function DesktopLayout({
    theme,
    toggleTheme,
    profile,
    projects,
    certificates,
    onOpenAbout,
    onOpenProject,
    onOpenCertificates,
    onOpenPortfolioInfo
}) {
    return (
        <div className={`${styles.imageWrapper} ${styles[theme]}`}>
            <TitleButton
                handle={profile.handle}
                onClick={onOpenPortfolioInfo}
            />

            <AboutMeButton
                profile={profile}
                theme={theme}
                onClick={onOpenAbout}
            />

            <ThemeToggle
                theme={theme}
                toggleTheme={toggleTheme}
            />

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
        </div>
    )
}