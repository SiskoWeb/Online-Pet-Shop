import React from 'react'
import styles from './CategoriesAdmin.module.scss'
import addimg from '../../../assets/addimg.png'
import c1 from '../../../assets/categories/c1.png'

export default function CategoriesAdmin() {


    const colors = ['#cfe4ff', '#deeeed', '#fff5b9', '#ececec']

    return (
        <div className={styles.categoriesAdmin}>
            <h1>Categories</h1>

            <div className={styles.col1}>
                <p> Add New Category</p>
                <div className={styles.addCategory}>
                    <label htmlFor='categoryImage'> <img src={addimg}></img> <input className={styles.inputImg} id='categoryImage' type='file' /></label>

                    <label htmlFor='nameCategory'> Add Name <input id='nameCategory' type='text' /></label>
                    <button>Submit</button>
                </div>
            </div>

            <div className={styles.listCategories}>

                {colors.map((item, index) => <CategoryCard key={index} color={item} />)}

            </div>
        </div>
    )
}


const CategoryCard = ({ color }) => {


    return (
        <div style={{ backgroundColor: color }} className={styles.categoryCardAdmin}>
            <div className={styles.actions}>
                <button><i className="fa-solid fa-xmark"></i></button>
                <button><i className="fa-solid fa-pen-to-square"></i></button>
            </div>
            <img src={c1}></img>
            <p>Cat</p>
        </div>

    )
}