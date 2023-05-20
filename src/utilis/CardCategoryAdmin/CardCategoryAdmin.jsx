import React from 'react'
import styles from './CardCategoryAdmin.module.scss'
export default function CardCategoryAdmin({ updateCategoryPart1, color, dataCategory, deleteCategory }) {
    return (
        <div style={{ backgroundColor: color }} className={styles.categoryCardAdmin}>
            <div className={styles.actions}>
                <button onClick={() => deleteCategory(dataCategory._id)}><i className="fa-solid fa-xmark"></i></button>
                <button onClick={() => updateCategoryPart1(dataCategory._id, dataCategory.image, dataCategory.name)}><i className="fa-solid fa-pen-to-square"></i></button>
            </div >
            <img src={dataCategory.image}></img>

            <p>{dataCategory.name}</p>
        </div >
    )
}




