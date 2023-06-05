import React, { useState } from 'react'
import styles from './Navbar.module.scss'
import Logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom'

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
                    <div className={styles.logo}> <Link to='/' ><img src={Logo}></img></Link></div>
                    <div className={styles.links}>

                        <Link to='/'>Home</Link>
                        <Link to='/'>Categories</Link>
                        <Link to='/'>Products</Link>


                    </div>

                </div>

                <div className={styles.cart}>
                    <div className={styles.inputClass}>
                        <input type='text' placeholder='search for...'></input>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>


                    <div className={styles.cartMain}>
                        <Link to="/cart" >  {isCart ? <div className={styles.cartActive}>3</div> : null}
                            <i className={`${styles.cartIcon}  fa-brands fa-opencart`} ></i></Link>

                    </div>

                </div>
            </div>
        </navbar>
    )
}
