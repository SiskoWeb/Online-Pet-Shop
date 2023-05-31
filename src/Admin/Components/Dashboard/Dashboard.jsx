import React from 'react'
import CardAdminStatus from '../../../utilis/CardAdminStatus/CardAdminStatus'
import styles from './Dashboard.module.scss'
import OrderList from '../../../utilis/OrderList/OrderList'
import { GetLimitOrdersHook } from '../../HookAdmin/Orders/GetLimitOrdersHook'
import Loading from '../../../utilis/Loading/Loading'
import { ToastContainer } from 'react-toastify'
export default function Dashboard() {

    const [isLoading, orders] = GetLimitOrdersHook()


    // eslint-disable-next-line react/jsx-key
    const icons = [<i className="fa-solid fa-cart-shopping"></i>, <i className="fa-solid fa-ban"></i>, <i className="fa-solid fa-truck"></i>, <i className="fa-solid fa-money-bill-wave"></i>]


    return (
        <div className={styles.Dashboard} >
            <div className={styles.title}>
                <h1>Dashboard</h1>
            </div>
            {isLoading ? <Loading /> : null}
            <div className={styles.cardsAdmin}>

                <CardAdminStatus text={'ORDER PENDING'} color={'#7C6FB8'} icon={icons[0]} number={5} />
                <CardAdminStatus text={'ORDER SHIPPED'} color={'#006BA9'} icon={icons[0]} number={1} />
                <CardAdminStatus text={'Today Earnings'} color={'#0D6603'} icon={icons[2]} number={"$109"} />
                <CardAdminStatus text={'Earnings'} color={'#4AA53F'} icon={icons[2]} number={"$509"} />


            </div>

            <div className={styles.listOrders}>

                <OrderList />
            </div>
            <ToastContainer />
        </div>
    )
}
