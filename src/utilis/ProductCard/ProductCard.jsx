import React, { useEffect } from 'react'
import styles from './ProductCard.module.scss'
import { Link } from 'react-router-dom'

// import img from '../../assets/Products/p1.png'
import { ToastContainer } from 'react-toastify';
import { AddProductToCartHook } from '../../User/Hook/ProductHoo/AddProductToCartHook'
import { useSelector } from 'react-redux';
import { CartHook } from '../../User/Hook/CartHook/CartHook';
export default function ProductCard({ data, cartItem }) {

    const [AddToCartFunc] = AddProductToCartHook()

    const [onRemove, onDecrement, onincrement] = CartHook()



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

                    {/* @desc Check if this product in cart diplay componant quantity if not diplay add to card*/}
                    {cartItem?.quantity >= 1 ?

                        <div className={styles.QuantityCart}>
                            <i onClick={() => onDecrement(data?._id)} className="fa-solid fa-minus"></i>
                            <span>{cartItem?.quantity}</span>
                            <i onClick={() => onincrement(data?._id)} className="fa-solid fa-plus"></i>
                        </div>


                        : <button onClick={() => AddToCartFunc(data?._id)}>ADD</button>}




                </div>






            </div>

            <ToastContainer
                autoClose={500}
            />
        </div >

    )
}
