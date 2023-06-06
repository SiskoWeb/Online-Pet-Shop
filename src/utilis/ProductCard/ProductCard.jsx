import React, { useEffect } from 'react'
import styles from './ProductCard.module.scss'
import { Link } from 'react-router-dom'

// import img from '../../assets/Products/p1.png'
import { ToastContainer } from 'react-toastify';
import { AddProductToCartHook } from '../../User/Hook/ProductHoo/AddProductToCartHook'

export default function ProductCard({ data }) {

    const [AddToCartFunc] = AddProductToCartHook()







    return (

        <div className={styles.productCard}>
            <div className={styles.card1} >



                <img src={data?.imageCover}></img>


            </div>


            <div className={styles.card2}>




                <div className={styles.text} >


                    <span>{data?.category?.name}</span>

                    <Link to={`Product/${data?._id}`}>  <p>{data?.title}</p></Link>




                </div>
                <div className={`${styles.icons}`} >

                    <p>${data?.price}</p>
                    <button onClick={() => AddToCartFunc(data?._id)}>ADD</button>




                </div>






            </div>

            <ToastContainer
                autoClose={500}
            />
        </div >

    )
}
