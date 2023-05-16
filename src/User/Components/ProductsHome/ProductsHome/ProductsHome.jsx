import ProductCard from '../../../../utilis/ProductCard/ProductCard'
import styles from './ProductsHome.module.scss'
import img1 from '../../../../assets/Products/p1.png'
import img2 from '../../../../assets/Products/p2.png'
import img3 from '../../../../assets/Products/p3.png'
import img4 from '../../../../assets/Products/p4.png'
import img10 from '../../../../assets/Products/p10.png'
import img11 from '../../../../assets/Products/p11.png'
export default function ProductsHome() {


    return (
        <div className={styles.products}>
            <p>Featured Products.</p>
            <div className={styles.list}>
                <ProductCard img={img1} />
                <ProductCard img={img2} />
                <ProductCard img={img3} />
                <ProductCard img={img4} />
                <ProductCard img={img10} />
                <ProductCard img={img11} />

            </div>
        </div>
    )
}