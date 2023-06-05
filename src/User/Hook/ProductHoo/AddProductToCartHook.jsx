import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, removeFromCart } from '../../../Redux/CartSlice/CartSlice'
import { useEffect } from 'react'

export function AddProductToCartHook(){

    

    const AddToCart2 = (id) => {
        const cartItem = {
            id,
            quantity: 1
        }
        dispatch(AddToCart(cartItem))

    }

    const Remove = (id) => {
        const cartItem = {
            id,
            quantity: 1
        }
        dispatch(removeFromCart(cartItem))

    }
    const cart = useSelector((state) => state.cart.Cart)
    const dispatch = useDispatch()

    useEffect(() => {

        console.log(cart)

    }, [AddToCart2, AddToCart1])
}