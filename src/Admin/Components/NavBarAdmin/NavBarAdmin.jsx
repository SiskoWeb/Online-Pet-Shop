import React, { useState } from 'react'
import styles from './NavBarAdmin.module.scss'
import { useSelector } from 'react-redux'
export default function NavBarAdmin() {


    const user = useSelector(state => state.auth.user)
    console.log(user)
    return (
        <nav className={styles.NavBarAdmin}>
            <div>
                <i className="fa-solid fa-sliders"></i>
            </div>

            <div className={styles.AdminNavBar_profil}>
                <img src='https://avatars.dicebear.com/api/male/sadasd.png'></img>
                <p>{!user?.length >= 1 ? user?.name : 'not login'}<span>{user?.role}</span></p>
                <select className={styles.AdminNavBar_links}>
                    <option>edit</option>
                    <option>logout</option>
                </select>
            </div>
        </nav>
    )
}
