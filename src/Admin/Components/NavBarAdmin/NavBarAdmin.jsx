import React, { useState } from 'react'
import styles from './NavBarAdmin.module.scss'
export default function NavBarAdmin() {

    const [user, setUser] = useState('')


    return (
        <nav className={styles.NavBarAdmin}>
            <div>
                <h1>Admin</h1>
            </div>

            <div className={styles.AdminNavBar_profil}>
                <img src='https://avatars.dicebear.com/api/male/sadasd.png'></img>
                <p>{!user?.name === '' ? user?.name : 'not login'}<span>Admin</span></p>
                <select className={styles.AdminNavBar_links}>
                    <option>edit</option>
                    <option>logout</option>
                </select>
            </div>
        </nav>
    )
}
