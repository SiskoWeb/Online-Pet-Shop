import { useEffect, useState } from "react"
import notify from "../../../Hooks/useNotifaction"
import { useDispatch, useSelector } from "react-redux"
import { AddProduct, getOneProductRedux, updateProductRedux } from "../../../Redux/productsSlice/ActionsProducts"
import addImg from '../../../assets/addimg.png'
import { useParams } from "react-router-dom"
import { getOneOrderRedux, updateOrderRedux } from "../../../Redux/OrdersSlice/ActionsOrders"


export const UpdateOrderHook = () => {

    const params = useParams()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)
    const [ischecked, setIsChecked] = useState(null)
    const [id, setId] = useState(params.id)
    const [order, setOrder] = useState([])






    //@desc get data for spicific product by params.id
    useEffect(() => {

        const getOneProduct = async () => {

            await dispatch(getOneOrderRedux(id))
        }
        getOneProduct()

    }, [])



    const GetOneOrder = useSelector(state => state.orders.GetOneOrder)
    const isloading = useSelector(state => state.orders.isloading)



    //@desc after remove order list update
    useEffect(() => {
        setOrder(GetOneOrder.data)
        setIsChecked(GetOneOrder?.data?.isDelivered)

    }, [GetOneOrder])






    const UpdateResponse = useSelector(state => state.orders.UpdateResponse)

    const handleChangeSwitcher = async (id) => {


        setLoading(true)
        //@desc fun create Category  passing ID + naem & image
        await dispatch(updateOrderRedux(id))

        //@dex switchh loading to false to active validator inside useEffect
        setLoading(false)



    }



    useEffect(() => {



        if (loading === false) {

            console.log(UpdateResponse)

            if (UpdateResponse.status === 201) {
                //@ if category created 
                if (UpdateResponse.data.data.createdAt) {
                    notify('category created', 'success')
                    // setIsChecked(prevCheck => !prevCheck);
                    dispatch(updateOrderRedux(id))
                    setOrder(GetOneOrder.data)
                }
            }
            else {

                //     //@ if we get error
                if (UpdateResponse?.data) {

                    if (UpdateResponse.data.message) {
                        notify(" uncourrect", "error")
                        console.log("pb     ")

                    }


                }



            }
        }


    }, [loading])


    return [isloading, order, ischecked, handleChangeSwitcher]
} 