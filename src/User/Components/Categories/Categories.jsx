import CategoryCard from '../../../utilis/CategoryCard/CategoryCard'
import styles from './Category.module.scss'
import img1 from '../../../assets/categories/c1.png'
import img2 from '../../../assets/categories/c2.png'
import img3 from '../../../assets/categories/c3.png'
import img4 from '../../../assets/categories/c4.png'

export default function Categories() {


    return (

        <div className={styles.categories}>
            <p>Categories</p>
            <div className={styles.list}>
                <CategoryCard img={img1} color={'#ffe3f8'} />
                <CategoryCard img={img2} color={'#deeeed'} />
                <CategoryCard img={img3} color={'#fff5b9'} />
                <CategoryCard img={img4} color={'#ececec'} />

            </div>
        </div>
    )
}