import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import { getAllOrdersRedux } from "../../../Redux/OrdersSlice/ActionsOrders"


export const GetAllOrdersHook = () => {

    const [padding, setPadding] = useState(0)
    const [shipped, setShipped] = useState(0)
    const [orders, setOrders] = useState([])

    const dispatch = useDispatch()






    const OrderList = useSelector((state) => state.orders.OrderList)
    const isLoading = useSelector((state) => state.orders.isloading)





    useEffect(() => {

        //@desc get 10 last orders from server by  redux 
        dispatch(getAllOrdersRedux())



    }, [])

    // useEffect(() => {


    //     const filter = async () => {

    //         const pendingList = await OrderList.data?.filter(item => item?.isDelivered === false)
    //         setPadding(pendingList)


    //         const shippedList = await OrderList.data?.filter(item => item?.isDelivered === false)
    //         setShipped(shippedList)



    //     }

    //     filter()


    // }, [OrderList])



    //@desc after remove order list update
    useEffect(() => {
        setOrders(OrderList.data)

    }, [OrderList])

    return [isLoading, padding, shipped, orders]


} 