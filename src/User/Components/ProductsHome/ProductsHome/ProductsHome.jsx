import ProductCard from '../../../../utilis/ProductCard/ProductCard'
import { ProductHook } from '../../../Hook/ProductHoo/ProductHook'
import styles from './ProductsHome.module.scss'

export default function ProductsHome() {

    const [isLoading, productsData] = ProductHook()



    return (
        <div className={styles.products}>
            <p>Featured Products.</p>
            <div className={styles.list}>

                {isLoading ? <h1>Loading</h1> : productsData.length >= 1 ? productsData?.map((item) =>
                    <ProductCard key={item._id} img={item.imageCover} price={item.price} name={item.title} />) : <h1>No Products</h1>}

            </div>
        </div>
    )
}