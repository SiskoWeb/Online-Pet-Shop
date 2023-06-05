import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    Cart: []
}

export const CartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        AddToCart: (state, action) => {

            //1 check if this product alrady in cart
            const exist = state.Cart.find(item => item.id === action.payload.id);
            //2 if already in incress quantity +1
            if (exist) {
                state.Cart.map(item => {
                    if (item.id === action.payload.id) return item.quantity = item.quantity + 1

                })

            }
            //3 if not in add it ro cart
            else {
                //1 add to cart

                state.Cart = [...state.Cart, action.payload]
            }
           
        },
        decrement: (state, action) => {
            state.Cart.map(item => {
                if (item.id === action.payload.id) {
                    if (item.quantity === 1) return console.log("already 1 ")
                    else {
                        item.quantity = item.quantity - 1
                    }
                }
                else {
                    return state.Cart
                }
            })

        },
        removeFromCart: (state, action) => {
            state.Cart = state.Cart.filter(item => item.id !== action.payload.id)
        }


    }
})
// Action creators are generated for each case reducer function
export const { AddToCart, decrement, removeFromCart } = CartSlice.actions
export default CartSlice.reducer