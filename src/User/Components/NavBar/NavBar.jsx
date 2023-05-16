import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import Logo from '../../../assets/logo.png'

export default function NavBar() {
    const [cartItems, setCartItems] = useState(1)
    const [isCart, setIsCart] = useState(true)

    const addToCart = () => {
        if (cartItems === 0) {
            setIsCart(false)

        }
        else {
            setIsCart(true)

        }


    }
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


                    <div className={styles.cartMain}>
                        {isCart ? <div className={styles.cartActive}>3</div> : null}
                        <i className={`${styles.cart}  fa-brands fa-opencart`} ></i>

                    </div>

                </div>
            </div>
        </navbar>
    )
}
