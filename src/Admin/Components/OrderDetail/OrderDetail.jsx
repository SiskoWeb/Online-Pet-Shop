import React from 'react'
import styles from './OrderDetail.module.scss'
import pro1 from '../../../assets//Products/p1.png'

import Switch from "react-switch";

import { UpdateOrderHook } from '../../HookAdmin/Orders/UpdateOrderHook'
import Loading from '../../../utilis/Loading/Loading';
export default function OrderDetail() {

    const [isloading, order, ischecked, handleChangeSwitcher] = UpdateOrderHook()


    return (
        <div className={styles.OrderDetail}>
            <div className={styles.card}>
                <div className={styles.cardHeader}><h5>Order ID<span>#4</span> </h5>{order?.isDelivered ? <p className={styles.shipped}>shipped</p> : <p className={styles.pending}>Pending</p>}</div>


                <div className={styles.ListProduct}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Images</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Total</th>



                            </tr>

                        </thead>
                        <tbody>

                            {order === [] ? <p>no porudcts</p> :
                                order?.cartItems?.map((item, index) => {
                                    return (
                                        <tr key={index}>

                                            <td><img src={pro1}></img></td>
                                            <td>Food Cat</td>
                                            <td>{item.price}x{item.quantity}</td>
                                            <td>${item.price * item.quantity}</td>

                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>

                <div className={styles.TotalPrice}>
                    <p>Total:</p>
                    <p>${order?.totalOrderPrice}</p>

                </div>
            </div>


            <div className={styles.card}>
                <div className={styles.cardHeader}><h5>ORDER STATUS</h5></div>
                <div className={styles.optionsStatus}>
                    <label className={styles.switcher} htmlFor="icon-switch">
                        <span>Status:</span>
                        <Switch
                            checked={ischecked}
                            onChange={() => handleChangeSwitcher(order?._id)}
                            uncheckedIcon={
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",

                                        height: "100%",
                                        fontSize: 15,
                                        color: "orange",
                                        paddingRight: 1
                                    }}
                                >
                                    Off
                                </div>
                            }
                            checkedIcon={
                                <svg viewBox="0 0 10 10" height="100%" width="100%" fill="aqua">
                                    <circle r={3} cx={5} cy={5} />
                                </svg>
                            }
                            className="react-switch"
                            id="icon-switch"
                        />
                    </label>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.cardHeader}><h5>Shipping Address:</h5></div>
                <div className={styles.itemShipping}>
                    <div className={styles.item}><i className="fa-solid fa-user"></i> <h5>{order?.shippingAddress?.name}</h5></div>
                    <div className={styles.item}><i className="fa-solid fa-phone"></i> <h5>{order?.shippingAddress?.phone}</h5></div>
                    <div className={styles.item}><i className="fa-solid fa-city"></i><h5>{order?.shippingAddress?.city}</h5></div>
                    <div className={styles.item}><i className="fa-solid fa-location-dot"></i> <h5>{order?.shippingAddress?.address}</h5></div>

                </div>
            </div>
            {isloading ? <Loading /> : null}
        </div>
    )
}
