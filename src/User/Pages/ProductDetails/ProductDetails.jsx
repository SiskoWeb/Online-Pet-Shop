import React, { useState } from 'react'
import styles from './ProductDetails.module.scss'
import imgP1 from '../../../assets/Products/p1.png'
import imgP2 from '../../../assets/Products/p2.png'
import imgP10 from '../../../assets/Products/p10.png'
import imgP11 from '../../../assets/Products/p11.png'
export default function ProductDetails() {

    const [imageIndex, setImageIndex] = useState(0)
    const arryImg = [imgP1, imgP2, imgP10, imgP11]


    return (
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
                <h2>Catessy Sticks</h2>

                <p>Delicious Catessy Sticks are a popular grain-free cat treat, in a variety of tasty flavours. These easy to digest treats are available at a great price! Treat your cat to something specia</p>
                <div className={styles.Price}>
                    <h3>$100</h3>

                </div>
            </div>
        </div >
    )
}
