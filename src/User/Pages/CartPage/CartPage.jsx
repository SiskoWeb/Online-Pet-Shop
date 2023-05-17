import React, { useState } from 'react'
import Cartstyles from './CartPage.module.scss'
import empty from '../../../assets/empty-cart.png'
import p11 from '../../../assets/Products/p11.png'
import p1 from '../../../assets/Products/p1.png'
import { ToastContainer } from 'react-toastify';
import { CartPageHook } from '../../Hook/CartPageHook.jsx'

export default function CartPage() {

    const [name, number, city, address, onChangeName, onChangeNumber, onChangeCity, onChangeAddress, addAddress, editAddress, isAddressHere, shippingAddress] = CartPageHook()

    const [products, setProducts] = useState(false)


    console.log(name)
    return (
        <div className={Cartstyles.PageCart}>



            <div className={Cartstyles.cart}>

                {/* -----Adress side -------*/}
                <div className={Cartstyles.address}>
                    <h3>Shipping Detail</h3>
                    {isAddressHere ?
                        <div className={Cartstyles.DisplayAddressContainer}>
                            <div className={Cartstyles.DisplayAddress}>
                                <p>Your Name<span>{shippingAddress.name}</span></p>
                                <p>Phone Number <span>{shippingAddress.number}</span></p>
                                <p>City<span>{shippingAddress.city}</span></p>
                                <p>Shipping Adress<span>{shippingAddress.address}</span></p>
                            </div>
                            <div className={Cartstyles.ChangeAddress}>
                                <buuton onClick={(e) => editAddress(e)}>Change Address</buuton>
                            </div>
                        </div>

                        :





                        <> <p>Please fill out the form to complete the request</p>

                            <form>
                                <label>
                                    Full Name:
                                    <input required type='text' value={name} onChange={(e) => onChangeName(e)} placeholder='yassine ...' name="name" />
                                </label>

                                <label>
                                    Phone Number:
                                    <input required value={number} onChange={(e) => onChangeNumber(e)} type='number' placeholder='06*****' name="email" />
                                </label>
                                <label>
                                    City:
                                    <input required value={city} onChange={(e) => onChangeCity(e)} type='text' placeholder='name your city' name="city" />
                                </label>
                                <label className={Cartstyles.wrapper}>
                                    Address:
                                    <textarea required value={address} onChange={(e) => onChangeAddress(e)} className={Cartstyles.inputAddress} type='text' placeholder='add address here ' name="address" />
                                </label>
                                <input onClick={(e) => addAddress(e)} className={Cartstyles.addressBtn} type='submit' name="address" value='Add Address' />
                            </form>
                        </>}

                </div>

                {/* -----items side -------*/}
                <div className={Cartstyles.items}>
                    <h3>ORDER DETAILS</h3>

                    <div className={Cartstyles.listItem}>
                        {products ? <><p>Cart Empty</p>
                            <img src={empty}></img></> :

                            <> <div className={Cartstyles.Item}>

                                <div className={Cartstyles.imgProdctCart}>
                                    <img src={p11}></img>
                                </div>
                                <div className={Cartstyles.textProductCart}>
                                    <p>Cat Food</p>
                                    <button>Remove</button>
                                </div>
                                <div className={Cartstyles.QuantityCart}>
                                    <i class="fa-solid fa-minus"></i>
                                    <span>8</span>
                                    <i class="fa-solid fa-plus"></i>
                                </div>
                                <div className={Cartstyles.prictProductCart}>
                                    <p>$102.99</p>
                                </div>
                            </div>
                                <div className={Cartstyles.Item}>

                                    <div className={Cartstyles.imgProdctCart}>
                                        <img src={p1}></img>
                                    </div>
                                    <div className={Cartstyles.textProductCart}>
                                        <p>Dog Food</p>
                                        <button>Remove</button>
                                    </div>
                                    <div className={Cartstyles.QuantityCart}>
                                        <i class="fa-solid fa-minus"></i>
                                        <span>8</span>
                                        <i class="fa-solid fa-plus"></i>
                                    </div>
                                    <div className={Cartstyles.prictProductCart}>
                                        <p>$72.99</p>
                                    </div>
                                </div>


                            </>
                        }


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



            <ToastContainer />
        </div>
    )
}




