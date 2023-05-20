import { createSlice } from '@reduxjs/toolkit'

import { getAllCategories, addCategory, removeCategory, updateCategory } from './ActionsCategories'

const initialState = {
    categoriesList: [],
    addCategoryResponse: [],
    RemoveResponse: [],
    UpdateResponse: [],
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
        },

        [addCategory.pending]: (state, action) => {
            // state.addCategoryResponse = action.payload

            state.isloading = true
        },
        [addCategory.fulfilled]: (state, action) => {
            state.addCategoryResponse = action.payload

            state.isloading = false

        },
        [addCategory.rejected]: (state, action) => {
            // state.addCategoryResponse = action.payload

            state.isloading = true
        }
        ,
        [removeCategory.pending]: (state, action) => {


            state.isloading = true
        },
        [removeCategory.fulfilled]: (state, action) => {
            state.RemoveResponse = action.payload
            state.isloading = false

        },
        [removeCategory.rejected]: (state, action) => {


            state.isloading = true
        },
        [updateCategory.pending]: (state, action) => {


            state.isloading = true
        },
        [updateCategory.fulfilled]: (state, action) => {
            state.UpdateResponse = action.payload
            state.isloading = false

        },
        [updateCategory.rejected]: (state, action) => {


            state.isloading = true
        }


    }
})

// // Action creators are generated for each case reducer function
// export  { getAllCategories } = categoriesSlice.actions

export default categoriesSlice.reducer