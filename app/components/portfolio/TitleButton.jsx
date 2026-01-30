import styles from '../../styles/shared.module.css'

export default function TitleButton({ handle, onClick }) {
    return (
        <button
            className={styles.titleButton}
            onClick={onClick}
            aria-label="About Me"
        >
            <span className={styles.titleLine}>{handle}'s</span>
            <span className={styles.titleLine}>Portfolio</span>
            <span className={styles.titleTooltip}>Tech Stack</span>
        </button>
    )
}