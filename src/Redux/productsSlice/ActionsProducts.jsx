import { createAsyncThunk } from "@reduxjs/toolkit"

import { useGetData } from "../../Hooks/useGetData"
import { useInsertDataWithImages } from "../../Hooks/useInsertData"



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
