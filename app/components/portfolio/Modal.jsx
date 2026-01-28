import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from '../../styles/modal.module.css'

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    )
}

export function ProjectModal({ project, onClose }) {
    return (
        <Modal isOpen={!!project} onClose={onClose}>
            {project && (
                <div>
                    <div className={styles.modalHeader}>
                        <div className={styles.modalTitleSection}>
                            <h5>{project.name}</h5>
                            <h6>{project.description}</h6>
                        </div>
                        {project.preview?.src && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.previewLink}>
                                <img
                                    className={styles.previewVideo}
                                    src={project.preview.src}
                                    alt={`${project.name} demo`}
                                />
                            </a>
                        )}
                    </div>
                    <ul>
                        {project.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    <div className={styles.modalButtons}>
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <button className={styles.iconBtn}>
                                    <FontAwesomeIcon icon={['fab', 'github']} /> Code
                                </button>
                            </a>
                        )}
                        {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <button className={styles.iconBtn}>
                                    <FontAwesomeIcon icon="display" /> Live Site
                                </button>
                            </a>
                        )}
                    </div>
                </div>
            )}
        </Modal>
    )
}

export function AboutModal({ profile, isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h5>{profile.fullName}</h5>
            <h6>{profile.title}</h6>
            <p>{profile.bio}</p>
            <p><strong>Tech Stack:</strong></p>
            <p>{profile.techStack.join(', ')}</p>
            <div className={styles.modalButtons}>
                {profile.links.github && (
                    <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                        <button className={styles.iconBtn}>
                            <FontAwesomeIcon icon={['fab', 'github']} /> GitHub
                        </button>
                    </a>
                )}
                {profile.links.linkedin && (
                    <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <button className={styles.iconBtn}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn
                        </button>
                    </a>
                )}
            </div>
        </Modal>
    )
}

export function CertificatesModal({ certificates, isOpen, onClose, theme }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h5>Certificates & Accolades</h5>
            <div className={styles.certificatesList}>
                {certificates.map((cert) => (
                    <div key={cert.id} className={styles.certificateCard}>
                        <div className={styles.certificateHeader}>
                            <h6>{cert.name}</h6>
                            <p>{cert.description}</p>
                        </div>
                        {cert.images && (
                            <img
                                className={styles.certificateImage}
                                src={theme === 'dark' ? cert.images.dark : cert.images.light}
                                alt={cert.name}
                            />
                        )}
                        <ul>
                            {cert.techStack.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <div className={styles.modalButtons}>
                            <a href={cert.link} target="_blank" rel="noopener noreferrer">
                                <button className={styles.iconBtn}>
                                    <FontAwesomeIcon icon="certificate" /> View Certificate
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Modal>
    )
}