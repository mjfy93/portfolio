import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/mobile.module.css'

export default function MobileProjectButton({ project, theme, onClick }) {
    const buttonStyle = {
        background: theme === 'dark' ? project.mobileColor.dark : project.mobileColor.light
    }

    return (
        <button
            className={styles.mobileProjectButton}
            style={buttonStyle}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={project.icon} /> {project.shortName}
        </button>
    )
}