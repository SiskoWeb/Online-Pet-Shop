import { createAsyncThunk } from "@reduxjs/toolkit"

import { useGetData } from "../../Hooks/useGetData"



export const getAllProducts = createAsyncThunk('Products/getAll', async () => {
    try {

        const response = await useGetData('/api/v1/products')

        return response.data

    } catch (error) {

        return error.response

    }

})
