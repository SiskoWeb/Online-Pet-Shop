import React from 'react'
import styles from './CartCardProduct.module.scss'
import { CartHook } from '../../User/Hook/CartHook/CartHook'
export default function CartCardProduct({ product, item }) {
    const [onAddToCart, onRemove, onDecrement, cart] = CartHook()

    return (
        <div className={styles.Item}>

            <div className={styles.imgProdctCart}>
                <img src={product?.imageCover}></img>
            </div>
            <div className={styles.textProductCart}>
                <p>{product?.title}</p>
                <button>Remove</button>
            </div>
            <div className={styles.QuantityCart}>
                <i onClick={() => onAddToCart(item?._id)} class="fa-solid fa-minus"></i>
                <span>{item.quantity}</span>
                <i onClick={() => onDecrement(item?._id)} class="fa-solid fa-plus"></i>
            </div>
            <div className={styles.prictProductCart}>
                <p>${product?.price}</p>
            </div>
        </div>
    )
}
