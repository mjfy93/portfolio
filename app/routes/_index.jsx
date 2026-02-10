import { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useData } from '../hooks/useData'
import DesktopLayout from '../components/portfolio/DesktopLayout'
import MobileLayout from '../components/portfolio/MobileLayout'
import { ProjectModal, AboutModal, PortfolioInfoModal, CertificatesModal, WorkHistoryModal } from '../components/portfolio/Modal'
import styles from '../styles/shared.module.css'

export const meta = () => {
  return [
    { title: 'Portfolio - @mjfy93' },
    { name: 'description', content: 'My Portfolio' }
  ]
}

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const { profile, certificates, workHistory, projects, ui } = useData()
  const [activeProject, setActiveProject] = useState(null)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [certificatesOpen, setCertificatesOpen] = useState(false)
  const [portfolioInfoOpen, setPortfolioInfoOpen] = useState(false)
  const [workHistoryOpen, setWorkHistoryOpen] = useState(false)

  const openProject = (project) => setActiveProject(project)
  const closeProject = () => setActiveProject(null)
  const openAbout = () => setAboutOpen(true)
  const closeAbout = () => setAboutOpen(false)
  const openCertificates = () => setCertificatesOpen(true)
  const closeCertificates = () => setCertificatesOpen(false)
  const openPortfolioInfo = () => setPortfolioInfoOpen(true)
  const closePortfolioInfo = () => setPortfolioInfoOpen(false)
  const openWorkHistory = () => setWorkHistoryOpen(true)
  const closeWorkHistory = () => setWorkHistoryOpen(false)

  return (
    <div className={styles.homeContainer}>
      <DesktopLayout
        theme={theme}
        profile={profile}
        projects={projects}
        certificates={certificates}
        workHistory={workHistory}
        ui={ui}
        onOpenAbout={openAbout}
        onOpenProject={openProject}
        onOpenCertificates={openCertificates}
        onOpenWorkHistory={openWorkHistory}
        onOpenPortfolioInfo={openPortfolioInfo}
      />

      <MobileLayout
        theme={theme}
        profile={profile}
        projects={projects}
        certificates={certificates}
        workHistory={workHistory}
        ui={ui}
        onOpenAbout={openAbout}
        onOpenProject={openProject}
        onOpenCertificates={openCertificates}
        onOpenWorkHistory={openWorkHistory}
        onOpenPortfolioInfo={openPortfolioInfo}
      />

      <ProjectModal
        project={activeProject}
        onClose={closeProject}
        ui={ui}
      />

      <AboutModal
        profile={profile}
        isOpen={aboutOpen}
        onClose={closeAbout}
        ui={ui}
      />

      <CertificatesModal
        certificates={certificates.items}
        isOpen={certificatesOpen}
        onClose={closeCertificates}
        ui={ui}
      />

      <WorkHistoryModal
        workHistory={workHistory.items}
        isOpen={workHistoryOpen}
        onClose={closeWorkHistory}
        ui={ui}
      />

      <PortfolioInfoModal
        profile={profile}
        isOpen={portfolioInfoOpen}
        onClose={closePortfolioInfo}
        ui={ui}
      />
    </div>
  )
}