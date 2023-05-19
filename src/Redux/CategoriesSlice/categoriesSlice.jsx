import { createSlice } from '@reduxjs/toolkit'

import { getAllCategories } from './ActionsCategories'

const initialState = {
    categoriesList: [],
    isloading: false

}


export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getAllCategories.pending]: (state, action) => {
            state.isloading = true
        },
        [getAllCategories.fulfilled]: (state, action) => {
            state.categoriesList = action.payload
            state.isloading = false

        },
        [getAllCategories.rejected]: (state, action) => {
            state.isloading = true
        }
    }
})

// // Action creators are generated for each case reducer function
// export  { getAllCategories } = categoriesSlice.actions

export default categoriesSlice.reducer