import React from 'react'
import Cartstyles from './CartPage.module.scss'
import empty from '../../../assets/empty-cart.png'
export default function CartPage() {
    return (
        <div className={Cartstyles.PageCart}>



            <div className={Cartstyles.cart}>

                {/* -----Adress side -------*/}
                <div className={Cartstyles.address}>
                    <h3>Shipping Detail</h3>
                    <p>Please fill out the form to complete the request</p>

                    <form>
                        <label>
                            Full Name:
                            <input type='text' placeholder='yassine ...' name="name" />
                        </label>

                        <label>
                            Phone Number:
                            <input type='number' placeholder='06*****' name="email" />
                        </label>
                        <label>
                            City:
                            <input type='text' placeholder='name your city' name="city" />
                        </label>
                        <label className={Cartstyles.wrapper}>
                            Address:
                            <textarea className={Cartstyles.inputAddress} type='text' placeholder='add address here ' name="address" />
                        </label>
                        <input type='submit' name="address" value='Add Address' />
                    </form>


                </div>

                {/* -----items side -------*/}
                <div className={Cartstyles.items}>
                    <h3>ORDER DETAILS</h3>

                    <div className={Cartstyles.listItem}>
                        <p>Cart Empty</p>
                        <img src={empty}></img>

                    </div>

                    <div className={Cartstyles.price}>
                        <div className={Cartstyles.textPrice}>
                            <p>Shipping:</p>
                            <p>Total:</p>
                        </div>
                        <div className={Cartstyles.numberPrice}>
                            <p>$0</p>
                            <p>$25.99</p>
                        </div>
                    </div>

                    <button className={Cartstyles.orderBtn}>Confirme</button>
                </div>




            </div>




        </div>
    )
}
