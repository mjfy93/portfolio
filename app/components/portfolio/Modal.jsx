import { useState } from 'react'
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

export function ProjectModal({ project, onClose, ui }) {
    return (
        <Modal isOpen={!!project} onClose={onClose}>
            {project && (
                <div>
                    <div className={styles.modalHeader}>
                        <div className={styles.modalTitleSection}>
                            <h5>{project.name}</h5>
                            <h6>{project.description}</h6>
                        </div>
                        {project.preview?.src && (() => {
                            const previewHref = project.preview.link || project.links.demo;
                            return previewHref ? (
                                <a href={previewHref} target="_blank" rel="noopener noreferrer" className={styles.previewLink}>
                                    <img
                                        className={styles.previewVideo}
                                        src={project.preview.src}
                                        alt={`${project.name} demo`}
                                    />
                                </a>
                            ) : (
                                <img
                                    className={styles.previewVideo}
                                    src={project.preview.src}
                                    alt={`${project.name} preview`}
                                />
                            );
                        })()}
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
                                    <FontAwesomeIcon icon={['fab', 'github']} /> {ui.code}
                                </button>
                            </a>
                        )}
                        {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                <button className={styles.iconBtn}>
                                    <FontAwesomeIcon icon="display" /> {ui.liveSite}
                                </button>
                            </a>
                        )}
                        {project.links.english && (
                            <a href={project.links.english} target="_blank" rel="noopener noreferrer">
                                <button className={styles.iconBtn}>
                                    <FontAwesomeIcon icon="file-pdf" /> {ui.english}
                                </button>
                            </a>
                        )}
                        {project.links.spanish && (
                            <a href={project.links.spanish} target="_blank" rel="noopener noreferrer">
                                <button className={styles.iconBtn}>
                                    <FontAwesomeIcon icon="file-pdf" /> {ui.spanish}
                                </button>
                            </a>
                        )}
                    </div>
                </div>
            )}
        </Modal>
    )
}

export function AboutModal({ profile, isOpen, onClose, ui }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.modalHeader}>
                <div className={styles.modalTitleSection}>
                    <h5>{profile.fullName}</h5>
                    <h6>{profile.title}</h6>
                </div>
                <img
                    className={styles.aboutPhoto}
                    src={profile.aboutButton.buttonImages.light}
                    alt={profile.fullName}
                />
            </div>
            <p>{profile.bio}</p>
            <p><strong>{ui.techStackLabel}</strong></p>
            <p>{profile.techStack.join(', ')}</p>
            <div className={styles.modalButtons}>
                {profile.links.github && (
                    <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                        <button className={styles.iconBtn}>
                            <FontAwesomeIcon icon={['fab', 'github']} /> {ui.github}
                        </button>
                    </a>
                )}
                {profile.links.linkedin && (
                    <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <button className={styles.iconBtn}>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} /> {ui.linkedin}
                        </button>
                    </a>
                )}
            </div>
        </Modal>
    )
}

export function PortfolioInfoModal({ profile, isOpen, onClose, ui }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h5>{ui.builtWith}</h5>
            <ul>
                {profile.portfolioTechStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
            <div className={styles.modalButtons}>
                {profile.portfolioRepo && (
                    <a href={profile.portfolioRepo} target="_blank" rel="noopener noreferrer">
                        <button className={styles.iconBtn}>
                            <FontAwesomeIcon icon={['fab', 'github']} /> {ui.code}
                        </button>
                    </a>
                )}
            </div>
        </Modal>
    )
}

export function CertificatesModal({ certificates, isOpen, onClose, ui }) {
    const [selectedCert, setSelectedCert] = useState(null)

    const handleClose = () => {
        setSelectedCert(null)
        onClose()
    }

    return (
        <>
            <Modal isOpen={isOpen && !selectedCert} onClose={handleClose}>
                <h5>{ui.certificates}</h5>
                <div className={styles.certificateGallery}>
                    {certificates.map((cert) => (
                        <button
                            key={cert.id}
                            className={styles.certificateGalleryItem}
                            onClick={() => setSelectedCert(cert)}
                        >
                            {cert.image && (
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                />
                            )}
                            <span className={styles.certificateGalleryLabel}>{cert.name}</span>
                        </button>
                    ))}
                </div>
            </Modal>

            <Modal isOpen={!!selectedCert} onClose={() => setSelectedCert(null)}>
                {selectedCert && (
                    <div className={styles.certificateDetail}>
                        <button
                            className={styles.backBtn}
                            onClick={() => setSelectedCert(null)}
                        >
                            <FontAwesomeIcon icon="arrow-left" /> {ui.backToGallery}
                        </button>
                        <div className={styles.certificateHeader}>
                            <h6>{selectedCert.name}</h6>
                            <p>{selectedCert.description}</p>
                        </div>
                        {selectedCert.image && (
                            <img
                                className={styles.certificateImage}
                                src={selectedCert.image}
                                alt={selectedCert.name}
                            />
                        )}
                        {selectedCert.hours && (
                            <p><strong>{ui.hoursLabel}</strong> {selectedCert.hours}</p>
                        )}
                        <ul>
                            {selectedCert.techStack.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <div className={styles.modalButtons}>
                            <a href={selectedCert.link} target="_blank" rel="noopener noreferrer">
                                <button className={styles.iconBtn}>
                                    <FontAwesomeIcon icon="certificate" /> {ui.viewCertificate}
                                </button>
                            </a>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    )
}