import { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../../Redux/productsSlice/ActionsProducts"


export const GetOrdersHook = () => {
    const dispatch = useDispatch()



    const productsList = useSelector((state) => state.products.productsList)
    const isLoading = useSelector((state) => state.products.isloading)





    useEffect(() => {

        dispatch(getAllProducts())

    }, [])


    return [isLoading, productsList]


} 