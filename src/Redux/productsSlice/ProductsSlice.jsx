import { createSlice } from '@reduxjs/toolkit'

import { getAllProducts, AddProduct } from './ActionsProducts'

const initialState = {
    productsList: [],
    isloading: false,
    addProductResponse: []
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
    }
})

// // Action creators are generated for each case reducer function
// export  { getAllCategories } = categoriesSlice.actions

export default ProductsSlice.reducer