import React from 'react'
import styles from './ProductCard.module.scss'
import { Link } from 'react-router-dom'

// import img from '../../assets/Products/p1.png'

export default function ProductCard({ data }) {



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
                    <button>ADD</button>



                </div>






            </div>


        </div>

    )
}
