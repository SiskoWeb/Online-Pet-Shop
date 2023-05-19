import { createSlice } from '@reduxjs/toolkit'

import { getAllProducts } from './ActionsProducts'

const initialState = {
    productsList: [],
    isloading: false

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
        }
    }
})

// // Action creators are generated for each case reducer function
// export  { getAllCategories } = categoriesSlice.actions

export default ProductsSlice.reducer