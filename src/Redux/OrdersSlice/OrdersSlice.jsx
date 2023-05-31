import { createSlice } from '@reduxjs/toolkit'

import { getAllOrders, AddProduct, removeOrderRedux, updateOrderRedux, getOneOrderRedux, get10OrderRedux } from './ActionsOrders'

const initialState = {
    OrderList: [],
    Just10Orders: [],
    isloading: false,
    addProductResponse: [],
    DeletedResponse: [],
    UpdateResponse: [],
    GetOneOrder: [],
}


export const OrdersSlice = createSlice({
    name: 'Orders',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getAllOrders.pending]: (state, action) => {
            state.isloading = true
        },
        [getAllOrders.fulfilled]: (state, action) => {
            state.OrderList = action.payload
            state.isloading = false

        },
        [getAllOrders.rejected]: (state, action) => {
            state.isloading = true
        },
        [get10OrderRedux.pending]: (state, action) => {
            state.isloading = true
        },
        [get10OrderRedux.fulfilled]: (state, action) => {
            state.Just10Orders = action.payload
            state.isloading = false

        },
        [get10OrderRedux.rejected]: (state, action) => {
            state.isloading = true
        },
        [AddProduct.pending]: (state, action) => {
            state.isloading = true
        },
        [AddProduct.fulfilled]: (state, action) => {
            state.addProductResponse = action.payload
            state.isloading = false

        },
        [AddProduct.rejected]: (state, action) => {
            state.isloading = true
        },
        [removeOrderRedux.pending]: (state, action) => {
            state.isloading = true
        },
        [removeOrderRedux.fulfilled]: (state, action) => {
            state.DeletedResponse = action.payload
            state.isloading = false

        },
        [removeOrderRedux.rejected]: (state, action) => {
            state.isloading = true
        },
        [getOneOrderRedux.pending]: (state, action) => {
            state.isloading = true
        },
        [getOneOrderRedux.fulfilled]: (state, action) => {
            state.GetOneOrder = action.payload
            state.isloading = false

        },
        [getOneOrderRedux.rejected]: (state, action) => {
            state.isloading = true
        },
        [updateOrderRedux.pending]: (state, action) => {
            state.isloading = true
        },
        [updateOrderRedux.fulfilled]: (state, action) => {
            state.UpdateResponse = action.payload
            state.isloading = false

        },
        [updateOrderRedux.rejected]: (state, action) => {
            state.isloading = true
        },
    }
})

// // Action creators are generated for each case reducer function
// export  { getAllCategories } = categoriesSlice.actions

export default OrdersSlice.reducer