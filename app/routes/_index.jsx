import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { projects } from '../data/projects'
import { profile, certificates } from '../data/profile'
import DesktopLayout from '../components/portfolio/DesktopLayout'
import MobileLayout from '../components/portfolio/MobileLayout'
import { ProjectModal, AboutModal, CertificatesModal } from '../components/portfolio/Modal'
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
  const [certificatesOpen, setCertificatesOpen] = useState(false)

  const openProject = (project) => setActiveProject(project)
  const closeProject = () => setActiveProject(null)
  const openAbout = () => setAboutOpen(true)
  const closeAbout = () => setAboutOpen(false)
  const openCertificates = () => setCertificatesOpen(true)
  const closeCertificates = () => setCertificatesOpen(false)

  return (
    <div className={styles.homeContainer}>
      <DesktopLayout
        theme={theme}
        toggleTheme={toggleTheme}
        profile={profile}
        projects={projects}
        certificates={certificates}
        onOpenAbout={openAbout}
        onOpenProject={openProject}
        onOpenCertificates={openCertificates}
      />

      <MobileLayout
        theme={theme}
        toggleTheme={toggleTheme}
        profile={profile}
        projects={projects}
        certificates={certificates}
        onOpenAbout={openAbout}
        onOpenProject={openProject}
        onOpenCertificates={openCertificates}
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

      <CertificatesModal
        certificates={certificates.items}
        isOpen={certificatesOpen}
        onClose={closeCertificates}
      />
    </div>
  )
}