import styles from '../../styles/desktop.module.css'
import ThemeToggle from './ThemeToggle'
import TitleButton from './TitleButton'
import ProjectButton from './ProjectButton'

export default function DesktopLayout({
    theme,
    toggleTheme,
    profile,
    projects,
    onOpenAbout,
    onOpenProject
}) {
    return (
        <div className={`${styles.imageWrapper} ${styles[theme]}`}>
            <TitleButton
                handle={profile.handle}
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
        </div>
    )
}