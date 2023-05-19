import React from 'react'
import styles from './CardAdminStatus.module.scss'
export default function CardAdminStatus({ color ,text}) {
    return (
        <div className={styles.cardAdmin} style={{ background: color }}>
            <p>{text}<span>2</span></p>
            <i className="fa-brands fa-first-order-alt"></i>
        </div>
    )
}
