import React from 'react'
import styles from './CartBodyPopup.module.scss'

import p11 from '../../assets/Products/p11.png'
import p1 from '../../assets/Products/p1.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ProductHook } from '../../User/Hook/ProductHoo/ProductHook'
import CartCardProduct from '../CartCardProduct/CartCardProduct'
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

                                <CartCardProduct product={product} item={item} key={index} />

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
