import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { projects, profile } from '../data/projects'
import DesktopLayout from '../components/portfolio/DesktopLayout'
import MobileLayout from '../components/portfolio/MobileLayout'
import { ProjectModal, AboutModal } from '../components/portfolio/Modal'
import styles from '../styles/shared.module.css'

export const meta = () => {
  return [
    { title: 'Portfolio - @mjfy93' },
    { name: 'description', content: 'My Portfolio' }
  ]
}

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [activeProject, setActiveProject] = useState(null)
  const [aboutOpen, setAboutOpen] = useState(false)

  const openProject = (project) => setActiveProject(project)
  const closeProject = () => setActiveProject(null)
  const openAbout = () => setAboutOpen(true)
  const closeAbout = () => setAboutOpen(false)

  return (
    <div className={styles.homeContainer}>
      <DesktopLayout
        theme={theme}
        toggleTheme={toggleTheme}
        profile={profile}
        projects={projects}
        onOpenAbout={openAbout}
        onOpenProject={openProject}
      />

      <MobileLayout
        theme={theme}
        toggleTheme={toggleTheme}
        profile={profile}
        projects={projects}
        onOpenAbout={openAbout}
        onOpenProject={openProject}
      />

      <ProjectModal
        project={activeProject}
        onClose={closeProject}
      />

      <AboutModal
        profile={profile}
        isOpen={aboutOpen}
        onClose={closeAbout}
      />
    </div>
  )
}