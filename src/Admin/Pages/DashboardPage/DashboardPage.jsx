import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import Dashboard from '../../Components/Dashboard/Dashboard'
import styles from './DashboardPage.module.scss'
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import NavBarAdmin from '../../Components/NavBarAdmin/NavBarAdmin';
export default function DashboardPage() {
    return (
        <div className={styles.adminPage}>

            {/*Side Bar*/}
            <div >
                <SideBar />
            </div>

            {/*Dashboard Components Bar*/}
            <div >
                <NavBarAdmin />
                <div className={styles.contentAdmin}>
                    <Outlet />
                </div>
            </div>

        </div>
    )
}
