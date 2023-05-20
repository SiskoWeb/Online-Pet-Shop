import { useEffect } from 'react'
import CategoryCard from '../../../utilis/CategoryCard/CategoryCard'
import styles from './Category.module.scss'
// import img1 from '../../../assets/categories/c1.png'
// import img2 from '../../../assets/categories/c2.png'
// import img3 from '../../../assets/categories/c3.png'
// import img4 from '../../../assets/categories/c4.png'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories } from '../../../Redux/CategoriesSlice/ActionsCategories'
export default function Categories() {
    const Categories = useSelector((state) => state.categories.categoriesList)
    const isLoading = useSelector((state) => state.categories.isloading)
    const dispatch = useDispatch()

    const colors = ['#cfe4ff', '#deeeed', '#fff5b9', '#ececec']



    useEffect(() => {

        dispatch(getAllCategories())
    
    }, [])


    return (

        <div className={styles.categories}>
            <p>Categories</p>
            <div className={styles.list}>
                {isLoading ? <h1>Loading</h1> : Categories.length >= 1 ? Categories?.map((item, index) => <CategoryCard key={item._id} img={item.image} color={colors[index]} />) : <h1>No Categories</h1>}

            </div>
        </div>
    )
}