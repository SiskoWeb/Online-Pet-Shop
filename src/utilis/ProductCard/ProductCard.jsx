import React from 'react'
import styles from './ProductCard.module.scss'
// import img from '../../assets/Products/p1.png'

export default function ProductCard({ img }) {
    return (

        <div className={styles.productCard}>
            <div className={styles.card1} >



                <img src={img}></img>


            </div>

            <div className={styles.card2}>


                <div className={styles.col1}>
                    <div className={styles.reviews} >
                        <i className="fa-solid fa-star" ></i>
                        <i className="fa-solid fa-star" ></i>
                        <i className="fa-solid fa-star" ></i>
                        <i className="fa-solid fa-star" ></i>
                        <i className="fa-solid fa-star" ></i>
                        <p>(152)</p>
                    </div>
                    <div className={styles.text} >
                        <a href='/ProductLin'>  <p>Food Name</p></a>
                        <p>$25.75</p>


                    </div>
                </div>



                <div className={`${styles.icons}`} >
                    <i className={`${styles.cart} fa-brands fa-opencart`} ></i>
                    <i className={`${styles.heart} fa-regular fa-heart `} ></i>

                </div>


            </div>


        </div>

    )
}
