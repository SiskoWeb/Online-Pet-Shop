import React from 'react'
import styles from './OrderList.module.scss'
import { Link } from 'react-router-dom'
export default function OrderList(orderData) {
    return (
        <div className={styles.OrderList}>
            <div className={styles.orderCol1}>
                <p>Recent Orders</p>
                <Link className={styles.orderBtn} to='/admin/orders'>View All</Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Total</th>
                        <th>Actions</th>


                    </tr>
                </thead>
                <tbody>
                    <tr>

                        <td>#2</td>
                        <td>Yassine</td>
                        <td>Shiiped</td>
                        <td>$200</td>
                        <td>Remove</td>
                    </tr>
                    <tr>

                        <td>#2</td>
                        <td>Yassine</td>
                        <td>Shiiped</td>
                        <td>$200</td>
                        <td>Remove</td>
                    </tr>
                    <tr>

                        <td>#2</td>
                        <td>Yassine</td>
                        <td>Shiiped</td>
                        <td>$200</td>
                        <td>Remove</td>
                    </tr>
                    <tr>

                        <td>#2</td>
                        <td>Yassine</td>
                        <td>Shiiped</td>
                        <td>$200</td>
                        <td>Remove</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
