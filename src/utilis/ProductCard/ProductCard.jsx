import React, { useEffect } from 'react'
import styles from './ProductCard.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, removeFromCart } from '../../Redux/CartSlice/CartSlice'
// import img from '../../assets/Products/p1.png'

export default function ProductCard({ data }) {



    const AddToCart2 = (id) => {
        const cartItem = {
            id,
            quantity: 1
        }
        dispatch(AddToCart(cartItem))

    }

    const AddToCart1 = (id) => {
        const cartItem = {
            id,
            quantity: 1
        }
        dispatch(removeFromCart(cartItem))

    }
    const cart = useSelector((state) => state.cart.Cart)
    const dispatch = useDispatch()

    useEffect(() => {

        console.log(cart)

    }, [AddToCart2, AddToCart1])

    return (

        <div className={styles.productCard}>
            <div className={styles.card1} >



                <img src={data?.imageCover}></img>


            </div>


            <div className={styles.card2}>




                <div className={styles.text} >
                    <Link to={`Product/${data?._id}`}>  <p>{data?.title}</p></Link>

                    <span>{data?.category?.name}</span>






                </div>
                <div className={`${styles.icons}`} >

                    <p>${data?.price}</p>
                    <button onClick={() => AddToCart2(data?._id)}>ADD</button>
                    <button onClick={() => AddToCart1(data?._id)}>remove</button>



                </div>






            </div>


        </div>

    )
}
