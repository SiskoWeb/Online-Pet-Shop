import { createAsyncThunk } from "@reduxjs/toolkit"

import { useGetData } from "../../Hooks/useGetData"
export const getAllProducts = createAsyncThunk('Products/getAll', async () => {
    const response = await useGetData('/api/v1/products')

    return response.data.data

})