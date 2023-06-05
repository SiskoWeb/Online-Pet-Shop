




import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, removeFromCart, decrement } from '../../../Redux/CartSlice/CartSlice'
import { useEffect } from 'react'
import notify from "../../../Hooks/useNotifaction"

export function CartHook() {



    const onAddToCart = async (id) => {
        //@desc Create object for cart
        const cartItem = {
            id,
            quantity: 1
        }
        await dispatch(AddToCart(cartItem))
        notify('Product Added', 'success')
    }

    const onRemove = async (id) => {
        const cartItem = {
            id,
            quantity: 1
        }
        await dispatch(removeFromCart(id))
        notify('category created', 'success')

    }

    const onDecrement = async (id) => {
        //@desc Create object for cart
        const cartItem = {
            id,
            quantity: 1
        }
        await dispatch(decrement(cartItem))
        notify('decrement quantity', 'success')
    }
    const cart = useSelector((state) => state.cart.Cart)
    const dispatch = useDispatch()


    return [onAddToCart, onRemove, onDecrement, cart]
}

