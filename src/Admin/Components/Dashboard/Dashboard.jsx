import React from 'react'
import CardAdminStatus from '../../../utilis/CardAdminStatus/CardAdminStatus'
import styles from './Dashboard.module.scss'
import OrderList from '../../../utilis/OrderList/OrderList'
export default function Dashboard() {
    return (
        <div >
            <div className={styles.cardsAdmin}>

                <CardAdminStatus text={'ORDER PENDING'} color={'#9081d7'} />
                <CardAdminStatus text={'ORDER CANCEL'} color={'#fd2a3f'} />
                <CardAdminStatus text={'TODAY INCOME'} color={'#52d344'} />
                <CardAdminStatus text={'ORDER PENDING'} color={'#9081d7'} />

            </div>

            <div>
            
            <OrderList/>
            </div>

        </div>
    )
}
