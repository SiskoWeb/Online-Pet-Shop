import React from 'react'
import styles from './CardAdminStatus.module.scss'
export default function CardAdminStatus({ color, text, icon,number }) {
    return (
        <div className={styles.cardAdmin} style={{ background: color }}>
            <p>{text}<span>{number}</span></p>
            {icon}
        </div>
    )
}
