import ProductCard from '../../../../utilis/ProductCard/ProductCard'
import styles from './ProductsHome.module.scss'
// import img1 from '../../../../assets/Products/p1.png'
// import img2 from '../../../../assets/Products/p2.png'
// import img3 from '../../../../assets/Products/p3.png'
// import img4 from '../../../../assets/Products/p4.png'
// import img10 from '../../../../assets/Products/p10.png'
// import img11 from '../../../../assets/Products/p11.png'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../../../Redux/productsSlice/ActionsProducts'
import { useEffect } from 'react'
export default function ProductsHome() {
    const productsList = useSelector((state) => state.products.productsList)
    const isLoading = useSelector((state) => state.products.isloading)
    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(getAllProducts())

    }, [])

    return (
        <div className={styles.products}>
            <p>Featured Products.</p>
            <div className={styles.list}>

                {isLoading ? <h1>Loading</h1> : productsList.length >= 1 ? productsList?.map((item) =>
                    <ProductCard key={item._id} img={item.imageCover} price={item.price} name={item.title} />) : <h1>No Categories</h1>}

            </div>
        </div>
    )
}