import styles from '../../styles/desktop.module.css'

export default function ProjectButton({ project, theme, onClick }) {
    const positionStyle = {
        top: project.position.top,
        left: project.position.left,
        width: project.position.width,
        height: project.position.height
    }

    return (
        <button
            className={styles.projectButton}
            style={positionStyle}
            onClick={onClick}
            aria-label={project.name}
        >
            <img
                src={theme === 'dark' ? project.buttonImages.dark : project.buttonImages.light}
                alt={project.name}
            />
            <span className={styles.tooltip}>{project.shortName}</span>
        </button>
    )
}