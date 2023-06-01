import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"

import { getAllOrdersRedux } from "../../../Redux/OrdersSlice/ActionsOrders"


export const GetAllOrdersHook = () => {

    const [padding, setPadding] = useState(0)
    const [shipped, setShipped] = useState(0)
    const [totalIncomToday, setTotalIncomToday] = useState(0)
    const [totaleIncome, setTotaleIncome] = useState(0)
    const [orders, setOrders] = useState([])

    const dispatch = useDispatch()






    const OrderList = useSelector((state) => state.orders.OrderList)
    const isLoading = useSelector((state) => state.orders.isloading)

    /// @desc :get tottal income from only delevred orders
    const TotalIncom = (data) => {
        let result = 0;
        for (var i = 0; i < data.length; i++) {


            if (data[i]?.isDelivered) {
                result = result + data[i].totalOrderPrice
         
            }

        }
        setTotaleIncome(result)
    }
    /// @desc :get today income in last 24hourse    
    const TotalIncomToday = async (data) => {
        let result = 0;
        let date = await (new Date()).getTime() - 24 * 60 * 60 * 1000;

        let dayTransactions = await data.filter((item) => (new Date(item.created_at)).getTime() >= date);

        const resultatoday = await dayTransactions.map((item) => result = result + item.totalOrderPrice)



        setTotalIncomToday(result)
    }


    /// @desc: get tottal of ordr delivred
    const GetNumberDelivered = (data) => {
        let result = 0;
        for (var i = 0; i < data.length; i++) {


            if (data[i]?.isDelivered) {
                result = result + 1

            }

        }
        setShipped(result)
    }

    useEffect(() => {

        //@desc get 10 last orders from server by  redux 
        dispatch(getAllOrdersRedux())



    }, [dispatch])


    const onPressPaginate = async (page) => {

        console.log('from on press')
        await dispatch(getAllOrdersRedux(page))


    }



    //@desc after remove order list update
    useEffect(() => {

        if (OrderList.status === 200) {


            if (OrderList.data.data) {
                setOrders(OrderList.data.data)

                TotalIncom(OrderList.data.data)
                GetNumberDelivered(OrderList.data.data)
                TotalIncomToday(OrderList.data.data)

             

            }

        }


        else {

            //     //@ if we get error
            if (OrderList?.data) {
                if (OrderList.data.message) {
                    setOrders([])
                }

            }

        }
    }, [OrderList])


    return [isLoading, padding, shipped, orders, totaleIncome, totalIncomToday, onPressPaginate]


} 