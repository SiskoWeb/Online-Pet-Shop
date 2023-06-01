import { createAsyncThunk } from "@reduxjs/toolkit"

import { useGetData } from "../../Hooks/useGetData"
import { useInsertDataWithImages } from "../../Hooks/useInsertData"
import { useDeleteData } from "../../Hooks/useDeleteData"
import { useUpdateDataWithImage } from "../../Hooks/useUpdateData"

let limit = 3;

export const getAllOrdersRedux = createAsyncThunk('Orders/getAll', async (page) => {

    try {
        console.log(page)
        const response = await useGetData(`/api/v1/order?limit=${limit}&page=${page}`)

        return response

    } catch (error) {

        return error.response

    }

})




export const getOneOrderRedux = createAsyncThunk('Orders/getOne', async (id) => {
    try {

        const response = await useGetData(`/api/v1/order/${id}`)

        return response

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



export const removeOrderRedux = createAsyncThunk('Orders/remove', async (id) => {
    try {

        const response = await useDeleteData(`/api/v1/order/${id}`)

        return response

    } catch (error) {

        return error.response

    }

})


export const updateOrderRedux = createAsyncThunk('order/update', async (id) => {
    try {




        const response = await useUpdateDataWithImage(`/api/v1/order/${id}`)

        return response

    } catch (error) {

        return error.response

    }

})


export const getOneProductRedux = createAsyncThunk('products/getOne', async (id) => {
    try {
        console.log(id)
        const response = await useGetData(`/api/v1/products/${id}`)

        return response

    } catch (error) {

        return error.response

    }

})