import { createAsyncThunk } from "@reduxjs/toolkit"

import { useGetData } from "../../Hooks/useGetData"

export const getAllCategories = createAsyncThunk('categories/getAll', async () => {
    const response = await useGetData('/api/v1/categories')

    return response.data.data

})