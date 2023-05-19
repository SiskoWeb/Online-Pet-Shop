import React from 'react'
import { Link } from 'react-router-dom'
import styles from './SideBar.module.scss'

export default function SideBar() {
    return (
        <aside className={styles.SideBar}>
            <div className={styles.logoAdmin}>Logo</div>
            <section>     <Link to="/admin">Dashboard<i className="fa-solid fa-gauge" ></i></Link></section>
            <section >    <Link to="allproducts">Products<i className="fa-brands fa-product-hunt"></i></Link></section>
            <section >    <Link to="addproduct">Add Product<i className="fa-solid fa-water"></i></Link></section>
            <section >    <Link to="categories">Categories<i className="fa-solid fa-water"></i></Link></section>





        </aside>
    )
}
