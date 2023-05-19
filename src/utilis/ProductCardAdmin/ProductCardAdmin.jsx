import React from 'react'
import styles from './ProductCardAdmin.module.scss'
import { Link } from 'react-router-dom'

// import img from '../../assets/Products/p1.png'

export default function ProductCardAdmin({ img, price, name }) {



    return (

        <div className={styles.ProductCardAdmin}>
            <div className={styles.card1} >



                <img src={img}></img>


            </div>

            <div className={styles.card2}>


                <div className={styles.col1}>

                    <div className={styles.text} >
                        <a href='/product'>  <p>{name}</p></a>
                        <p>${price}</p>


                    </div>
                </div>



                <div className={`${styles.icons}`} >


                    <i className={`${styles.cart}  fa-solid fa-xmark`} ></i>
                    <Link to='admin/product/1'><i className={`${styles.heart} fa-solid fa-pen-to-square `}></i></Link>

                </div>


            </div>


        </div>

    )
}
