import React from 'react'
import { Link  , NavLink} from 'react-router-dom'
import styles from './SideBar.module.scss'
import logo from '../../../assets/admin/logo.png'
import avatar from '../../../assets/admin/avatar.jpg'
export default function SideBar() {
    return (
        <aside className={styles.SideBar}>
            <div className={styles.logoAdmin}><img src={logo}></img></div>
            <div className={styles.SideBarcol2}>
                <img src={avatar}></img>
                <h6>JOHN</h6>
                <p>general manager.</p>
            </div>

            <ul className={styles.Links}>


                <li>     <NavLink to="/admin"><i className="fa-solid fa-gauge" ></i><span>Dashboard</span></NavLink> <i className="fa fa-angle-right pull-right"></i></li>
                <li >    <NavLink to="allproducts"><i className="fa-brands fa-product-hunt"></i><span>Products</span></NavLink><i className="fa fa-angle-right pull-right"></i></li>
                <li >    <NavLink to="addproduct"><i className="fa-solid fa-water"></i><span>Add Product</span></NavLink><i className="fa fa-angle-right pull-right"></i></li>
                <li >    <NavLink to="categories"><i className="fa-solid fa-water"></i><span>Categories</span></NavLink><i className="fa fa-angle-right pull-right"></i></li>



            </ul>


        </aside >
    )
}
