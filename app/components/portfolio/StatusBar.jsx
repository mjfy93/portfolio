import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../../styles/mobile.module.css'

function getBatteryIcon(level) {
    if (level > 0.75) return 'battery-full'
    if (level > 0.5) return 'battery-three-quarters'
    if (level > 0.25) return 'battery-half'
    if (level > 0.1) return 'battery-quarter'
    return 'battery-empty'
}

function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function formatDate(date) {
    return date.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })
}

export default function StatusBar() {
    const [now, setNow] = useState(new Date())
    const [battery, setBattery] = useState(null)

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 60000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        if (typeof navigator !== 'undefined' && navigator.getBattery) {
            navigator.getBattery().then((batt) => {
                setBattery({ level: batt.level, charging: batt.charging })

                const update = () => setBattery({ level: batt.level, charging: batt.charging })
                batt.addEventListener('levelchange', update)
                batt.addEventListener('chargingchange', update)

                return () => {
                    batt.removeEventListener('levelchange', update)
                    batt.removeEventListener('chargingchange', update)
                }
            })
        }
    }, [])

    return (
        <div className={styles.statusBar}>
            <span>{formatTime(now)} · {formatDate(now)}</span>
            {battery && (
                <span className={styles.statusBarBattery}>
                    {Math.round(battery.level * 100)}%
                    <FontAwesomeIcon icon={getBatteryIcon(battery.level)} />
                    {battery.charging && <FontAwesomeIcon icon="bolt" className={styles.statusBarCharging} />}
                </span>
            )}
        </div>
    )
}
