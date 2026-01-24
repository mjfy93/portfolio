import styles from '../../styles/mobile.module.css'
import ThemeToggle from './ThemeToggle'
import TitleButton from './TitleButton'
import MobileProjectButton from './MobileProjectButton'

export default function MobileLayout({
    theme,
    toggleTheme,
    profile,
    projects,
    onOpenAbout,
    onOpenProject
}) {
    return (
        <div className={`${styles.mobileWrapper} ${styles[theme]}`}>
            <TitleButton
                handle={profile.handle}
                onClick={onOpenAbout}
            />

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