import { createAsyncThunk } from "@reduxjs/toolkit"

import { useGetData } from "../../Hooks/useGetData"
import { useInsertDataWithImages } from "../../Hooks/useInsertData"
import { useDeleteData } from "../../Hooks/useDeleteData"



export const getAllProducts = createAsyncThunk('Products/getAll', async () => {
    try {

        const response = await useGetData('/api/v1/products')

        return response.data

    } catch (error) {

        return error.response

    }

})


export const AddProduct = createAsyncThunk('product/add', async (body) => {
    try {

        const response = await useInsertDataWithImages('/api/v1/products', body)

        return response

    } catch (error) {

        return error.response

    }

})



export const removeProduct = createAsyncThunk('product/remove', async (id) => {
    try {

        const response = await useDeleteData(`/api/v1/products/${id}`)

        return response

    } catch (error) {

        return error.response

    }

})
