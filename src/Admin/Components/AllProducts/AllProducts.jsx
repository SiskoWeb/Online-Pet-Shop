import React, { useEffect } from 'react'
import styles from './AllProducts.module.scss'

import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../../Redux/productsSlice/ActionsProducts'
import ProductCardAdmin from '../../../utilis/ProductCardAdmin/ProductCardAdmin'
export default function AllProducts() {



    const productsList = useSelector((state) => state.products.productsList)
    const isLoading = useSelector((state) => state.products.isloading)
    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(getAllProducts())
        console.log(productsList)
    }, [])

    return (
        <div className={styles.AllProducts}>
            <h4>All Products</h4>
            <div className={styles.list}>

                {isLoading ? <h1>Loading</h1> : productsList.length >= 1 ? productsList?.map((item) => <ProductCardAdmin key={item._id} img={item.imageCover} price={item.price} name={item.title} />) : <h1>No Categories</h1>}

            </div>
     
        </div>
    )
}
