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
export default function ProductDetails() {

    const [imageIndex, setImageIndex] = useState(0)
    const arryImg = [imgP1, imgP2, imgP10, imgP11]
    const Weight = [1, 2, 4, 10]


    return (
        <div className={styles.PageProdcut}>
            <div className={styles.ProductDetails}>
                <div className={styles.ProductImages} >
                    <div className={styles.ListImgs}>
                        {arryImg.map((item, index) => {
                            return (<img key={index} className={styles.minImages} src={item} onClick={() => setImageIndex(index)}></img>)
                        })}
                    </div>
                    <img className={styles.MainImgs} src={arryImg[imageIndex]}></img>
                </div>
                <div className={styles.Text} >
                    <h1>Catessy Sticks</h1>

                    <p>Delicious Catessy Sticks are a popular grain-free cat treat, in a variety of tasty flavours. These easy to digest treats are available at a great price! Treat your cat to something specia</p>
                    <div className={styles.Price}>
                        <h3>$100</h3>


                        <p>Weight:</p>
                        <div className={styles.weight}>
                            {Weight.map((item, index) => {

                                return (
                                    <div key={index}>{`${item}KG`}</div>
                                )
                            })}
                        </div>
                        <div className={styles.addToCart}>Add To Cart  <i className="fa-brands fa-opencart"></i></div>

                    </div>
                </div>


            </div >
            <div className={styles.MoreProducts}>
                <hr></hr>
                <div className={styles.list}>
                    <ProductCard img={img1} />
                    <ProductCard img={img2} />
                    <ProductCard img={img3} />
                    <ProductCard img={img4} />
                    <ProductCard img={img10} />
                    <ProductCard img={img11} />

                </div>
            </div>
        </div>
    )
}
