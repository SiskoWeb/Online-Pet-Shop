import React from 'react'
import styles from './ProductCardAdmin.module.scss'
import { Link } from 'react-router-dom'

// import img from '../../assets/Products/p1.png'

export default function ProductCardAdmin({ dataProduct, deleteProduct }) {



    return (

        <div className={styles.ProductCardAdmin}>
            <div className={styles.card1} >



                <img src={dataProduct.imageCover}></img>


            </div>

            <div className={styles.card2}>


                <div className={styles.col1}>

                    <div className={styles.text} >
                        <a href='/product'>  <p>{name}</p></a>
                        <p>${dataProduct.price}</p>


                    </div>
                </div>



                <div className={`${styles.icons}`} >


                    <i onClick={() => deleteProduct(dataProduct._id)} className={`${styles.cart}  fa-solid fa-xmark`} ></i>
                    <Link to={`product/${dataProduct._id}`}><i className={`${styles.heart} fa-solid fa-pen-to-square `}></i></Link>

                </div>


            </div>


        </div>

    )
}
