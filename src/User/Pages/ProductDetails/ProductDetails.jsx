import React, { useState } from 'react'
import styles from './ProductDetails.module.scss'
import imgP1 from '../../../assets/Products/p1.png'
import imgP2 from '../../../assets/Products/p2.png'
import imgP10 from '../../../assets/Products/p10.png'
import imgP11 from '../../../assets/Products/p11.png'
import ProductCard from '../../../utilis/ProductCard/ProductCard'
import img1 from '../../../assets/Products/p1.png'
import img2 from '../../../assets/Products/p2.png'
import img3 from '../../../assets/Products/p3.png'
import img4 from '../../../assets/Products/p4.png'
import img10 from '../../../assets/Products/p10.png'
import img11 from '../../../assets/Products/p11.png'
import NavBar from '../../Components/NavBar/NavBar'
import { GetProductHook } from '../../Hook/ProductHoo/GetProductHook'
export default function ProductDetails() {

    const [imageIndex, setImageIndex] = useState(0)


    const [isloading, productsData] = GetProductHook()

    return (

        <div>

            <NavBar />


            <div className={styles.PageProdcut}>
                <div className={styles.ProductDetails}>
                    <div className={styles.ProductImages} >
                        <div className={styles.ListImgs}>
                            {productsData.images?.map((item, index) => {
                                return (<img key={index} className={styles.minImages} src={item} onClick={() => setImageIndex(index)}></img>)
                            })}
                        </div>
                        <img className={styles.MainImgs} src={productsData.imageCover}></img>
                    </div>

                    <div className={styles.Text} >
                        <h1>{productsData?.title}</h1>


                        <div className={styles.Price}>
                            <h3>${productsData?.price}</h3>

                            <p>Short Hooded Coat features a straight body, large pockets with b,
                                a straight body, large pockets with buttoutton </p>


                            <div className={styles.btns}>
                                <button className={styles.addToCart}>Add To Cart  <i className="fa-brands fa-opencart"></i></button>
                                <div className={styles.wishlist_icon}>   <i className="far fa-heart"></i></div>
                            </div>
                        </div>
                    </div>


                </div >

                <div className={styles.Description}>
                    <div>  <p>Description</p></div>
                    <hr></hr>

                    <div>
                        <p>Short Hooded Coat features a straight body, large pockets with button flaps, ventilation air holes, and a string detail along the hemline. The style is completed with a drawstring hood, featuring Rains’ signature built-in cap. Made from waterproof, matte PU, this lightweight unisex rain jacket is an ode to nostalgia through its classic silhouette and utilitarian design details.<br></br>This is a unisex item, please check our clothing & footwear sizing guide for specific Rains jacket sizing information. RAINS comes from the rainy nation of Denmark at the edge of the European continent, close to the ocean and with prevailing westerly winds; all factors that contribute to an average of 121 rain days each year. Arising from these rainy weather conditions comes the attitude that a quick rain shower may be beautiful, as well as moody- but first and foremost requires the right outfit. Rains focus on the whole experience of going outside on rainy days, issuing an invitation to explore even in the most mercurial weather.</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
