import React from 'react'
import styles from './CartBodyPopup.module.scss'

import p11 from '../../assets/Products/p11.png'
import p1 from '../../assets/Products/p1.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ProductHook } from '../../User/Hook/ProductHoo/ProductHook'
export default function CartBodyPopup() {
    const isCart = false

    const [isLoading, productsData] = ProductHook()
    const cart = useSelector((state) => state.cart.Cart)
    console.log(productsData)
    return (
        <div className={styles.Card}>

            {!cart.length >= 1 ? <p>No products in the cart.</p> :

                <div className={styles.CardBody}>




                    <div className={styles.listItem}>

                        {cart.length >= 1 ? cart.map((item, index) => {
                            const product = productsData.find(p => p._id === item.id)

                            console.log(product)
                            return (
                                <div key={index} className={styles.Item}>

                                    <div className={styles.imgProdctCart}>
                                        <img src={product?.imageCover}></img>
                                    </div>
                                    <div className={styles.textProductCart}>
                                        <p>{product?.title}</p>
                                        <button>Remove</button>
                                    </div>
                                    <div className={styles.QuantityCart}>
                                        <i className="fa-solid fa-minus"></i>
                                        <span>{item?.quantity}</span>
                                        <i className="fa-solid fa-plus"></i>
                                    </div>
                                    <div className={styles.prictProductCart}>
                                        <p>${product?.price}</p>
                                    </div>
                                </div>
                            )

                        }) : null}















                    </div>


                    <hr></hr>
                    <div className={styles.price}>
                        <p>Total:</p>
                        <p>$199.95</p>
                    </div>

                    <Link className={styles.ViewCart} to='/cart'>View cart</Link>




                </div>}
        </div>
    )
}
