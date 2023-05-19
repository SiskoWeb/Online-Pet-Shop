import React, { useEffect } from 'react'
import styles from './CategoriesAdmin.module.scss'
import addimg from '../../../assets/addimg.png'
import c1 from '../../../assets/categories/c1.png'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../../Redux/CategoriesSlice/ActionsCategories'

export default function CategoriesAdmin() {
    const Categories = useSelector((state) => state.categories.categoriesList)
    const isLoading = useSelector((state) => state.categories.isloading)

    const dispatch = useDispatch()

    const colors = ['#cfe4ff', '#deeeed', '#fff5b9', '#ececec']



    useEffect(() => {

        dispatch(getAllCategories())
        console.log(Categories)
    }, [])

    return (
        <div className={styles.categoriesAdmin}>


            <div className={styles.addCategory}>

                <div className={styles.col1}>

                    <div className={styles.imageCategory}>
                        <p>Image(Required)*</p>
                        <label htmlFor='imageCover'

                        ><img src={addimg}></img>
                            Click To Upload
                            <input id='imageCover' type='file' />
                        </label>

                    </div>
                    <label htmlFor='nameCategory'>Add Name Category* <input id='nameCategory' type='text' /></label>
                    <button>Submit</button>

                </div>

            </div>

            <div className={styles.listCategories}>

                {isLoading ? <h1>Loading</h1> : CategoryCard.length >= 1 ? Categories?.map((item, index) =>
                    <CategoryCard key={item._id} img={item.image} color={colors[index]} name={item.name} />) : <h1>No Categories</h1>}

            </div>
        </div>
    )
}


const CategoryCard = ({ img, name, color }) => {


    return (
        <div style={{ backgroundColor: color }} className={styles.categoryCardAdmin}>
            <div className={styles.actions}>
                <button><i className="fa-solid fa-xmark"></i></button>
                <button><i className="fa-solid fa-pen-to-square"></i></button>
            </div>
            <img src={img}></img>
            <p>{name}</p>
        </div>

    )
}