import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import { get10OrderRedux } from "../../../Redux/OrdersSlice/ActionsOrders"


export const GetLimitOrdersHook = () => {

    const [padding, setPadding] = useState(0)
    const [shipped, setShipped] = useState(0)
    const [orders, setOrders] = useState([])

    const dispatch = useDispatch()






    const OrdersData = useSelector((state) => state.orders.Just10Orders)
    const isLoading = useSelector((state) => state.orders.isloading)





    useEffect(() => {

        //@desc get 10 last orders from server by  redux 
        dispatch(get10OrderRedux())



    }, [])



    //@desc after remove order list update
    useEffect(() => {
        setOrders(OrdersData.data)

    }, [OrdersData])

    return [isLoading, orders]


} 