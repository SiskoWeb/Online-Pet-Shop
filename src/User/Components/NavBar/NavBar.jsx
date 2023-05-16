import React from 'react'
import styles from './Navbar.module.scss'
import Logo from '../../../assets/logo.png'

export default function NavBar() {
    return (
        <navbar >
            <div className={styles.navbar}>


                <div className={styles.links}>
                    <div className={styles.logo}><img src={Logo}></img></div>
                    <a href='/'>Shop now</a>
                    <a href='/'>About us</a>

                </div>

                <div className={styles.cart}>
                    <div className={styles.inputClass}>
                        <input type='text' placeholder='search for...'></input>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <i className="fa-brands fa-opencart"></i></div>

            </div>
        </navbar>
    )
}
