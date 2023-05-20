import { createAsyncThunk } from "@reduxjs/toolkit"

import { useGetData } from "../../Hooks/useGetData"
import { useInsertDataWithImages } from "../../Hooks/useInsertData"
import { useDeleteData } from "../../Hooks/useDeleteData"



export const getAllCategories = createAsyncThunk('categories/getAll', async () => {
    try {

        const response = await useGetData('/api/v1/categories')

        return response.data

    } catch (error) {

        return error.response

    }

})


export const addCategory = createAsyncThunk('categories/add', async (body) => {
    try {

        const response = await useInsertDataWithImages('/api/v1/categories', body)

        return response.data

    } catch (error) {

        return error.response

    }

})
export const removeCategory = createAsyncThunk('categories/remove', async (id) => {
    try {

        const response = await useDeleteData(`/api/v1/categories/${id}`)

        return response.data

    } catch (error) {

        return error.response

    }

})



