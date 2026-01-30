import styles from '../../styles/desktop.module.css'

export default function AboutMeButton({ profile, theme, onClick }) {
    const { aboutButton } = profile

    return (
        <button
            className={styles.aboutMeBtn}
            style={{
                top: aboutButton.position.top,
                left: aboutButton.position.left,
                width: aboutButton.position.width,
                height: aboutButton.position.height
            }}
            onClick={onClick}
            aria-label="About Me"
        >
            <img
                src={theme === 'dark' ? aboutButton.buttonImages.dark : aboutButton.buttonImages.light}
                alt="About Me"
            />
            <span className={styles.tooltip}>{aboutButton.shortName}</span>
        </button>
    )
}
