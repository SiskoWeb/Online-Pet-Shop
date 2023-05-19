import React from 'react'
import CardAdminStatus from '../../../utilis/CardAdminStatus/CardAdminStatus'
import styles from './Dashboard.module.scss'
import OrderList from '../../../utilis/OrderList/OrderList'
export default function Dashboard() {

    const icons = [<i class="fa-solid fa-cart-shopping"></i>, <i class="fa-solid fa-ban"></i>, <i class="fa-solid fa-truck"></i>, <i class="fa-solid fa-money-bill-wave"></i>]
    return (
        <div >
            <div className={styles.cardsAdmin}>

                <CardAdminStatus text={'ORDER PENDING'} color={'#7C6FB8'} icon={icons[0]} number={7} />
                <CardAdminStatus text={'ORDER CANCEL'} color={'#D03747'} icon={icons[1]} number={2} />
                <CardAdminStatus text={'TODAY INCOME'} color={'#4AA53F'} icon={icons[2]} number={"$509"} />


            </div>

            <div>

                <OrderList />
            </div>

        </div>
    )
}
