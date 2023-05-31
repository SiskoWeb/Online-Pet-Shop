import React from 'react'
import styles from './OrderList.module.scss'
import { Link } from 'react-router-dom'
import { RemoveOrderHook } from '../../Admin/HookAdmin/Orders/RemoveOrderHook'
import { GetOrdersHook } from '../../Admin/HookAdmin/Orders/GetOrdersHook'
export default function OrderList() {
    const [deleteOrder] = RemoveOrderHook()
    const [isLoading, OrdersData, padding, shipped, orders] = GetOrdersHook()
    console.log(orders)
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

                    {orders?.map((item, index) => {
                        return (
                            <tr key={index}>

                                <td>#{item._id}</td>
                                <td>{item.shippingAddress.name}</td>
                                <td>{item.isDelivered ? <p className={styles.shipped}>shipped</p> : <p className={styles.pending}>Pending</p>}</td>
                                <td>${item.totalOrderPrice}</td>
                                <td > <div className={`${styles.icons}`} >

                                    <i onClick={() => deleteOrder(item._id)} className={`${styles.remove}  fa-solid fa-trash-can`} ></i>
                                    <Link to={`order/${item._id}`}><i className={`${styles.update} fa-solid fa-pen-to-square `}></i></Link>

                                </div></td>
                            </tr>
                        )
                    })}


                </tbody>
            </table>
        </div >
    )
}
