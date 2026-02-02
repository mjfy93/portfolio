import styles from '../../styles/shared.module.css'

export default function TitleButton({ onClick, ui }) {
    return (
        <button
            className={styles.titleButton}
            onClick={onClick}
            aria-label={ui.titleLine2}
        >
            <span
                className={styles.titleLine}
                style={{ '--chars': ui.titleLine1.length }}
            >
                {ui.titleLine1}
            </span>
            <span
                className={styles.titleLine}
                style={{ '--chars': ui.titleLine2.length }}
            >
                {ui.titleLine2}
            </span>
            <span className={styles.titleTooltip}>{ui.techStackTooltip}</span>
        </button>
    )
}