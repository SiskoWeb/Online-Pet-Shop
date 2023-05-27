import { createSlice } from '@reduxjs/toolkit'

import { getAllProducts, AddProduct, removeProduct } from './ActionsProducts'

const initialState = {
    productsList: [],
    isloading: false,
    addProductResponse: [],
    DeletedResponse: []
}


export const ProductsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getAllProducts.pending]: (state, action) => {
            state.isloading = true
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.productsList = action.payload
            state.isloading = false

        },
        [getAllProducts.rejected]: (state, action) => {
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
        [removeProduct.pending]: (state, action) => {
            state.isloading = true
        },
        [removeProduct.fulfilled]: (state, action) => {
            state.DeletedResponse = action.payload
            state.isloading = false

        },
        [removeProduct.rejected]: (state, action) => {
            state.isloading = true
        },
    }
})

// // Action creators are generated for each case reducer function
// export  { getAllCategories } = categoriesSlice.actions

export default ProductsSlice.reducer