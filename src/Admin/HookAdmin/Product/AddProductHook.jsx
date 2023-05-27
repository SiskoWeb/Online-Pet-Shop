import { useEffect, useState } from "react"
import notify from "../../../Hooks/useNotifaction"
import { useDispatch, useSelector } from "react-redux"
import { AddProduct } from "../../../Redux/productsSlice/ActionsProducts"



export const AddProductHook = () => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)


    const [displayImageCover, setDisplayImageCover] = useState(null)
    const [imageCover, setImageCover] = useState(null)

    const [images, setImages] = useState(null)
    const [displayImages, setDisplayImages] = useState()

    const [formInputData, setformInputData] = useState(
        {
            title: '',
            description: '',
            quantity: Number,
            price: Number,
            category: '',

        }
    );








    const handleChange = (evnt) => {
        const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
        setformInputData(newInput)

    }


    const handleChangeImageCover = (evnt) => {
        setImageCover(evnt.target.files[0])
        setDisplayImageCover(URL.createObjectURL(evnt.target.files[0]))
    }

    const handleChangeImages = (evnt) => {
        setImages(Array.from(evnt.target.files))
        // setDisplayImages(evnt.target.files)
        setDisplayImages(Array.from(evnt.target.files))

    }



    const onRemoveImageFromArray = (e) => {
        setImageCover(null)
        setDisplayImageCover(null)
    }

    const addProductResponse = useSelector(state => state.products.addProductResponse)

    // @desc upload data to Server 
    const onSubmit = async (e) => {
        e.preventDefault()

        //@desc  valuesValidator
        if (formInputData.title.length <= 3) {
            notify('title to short', 'warn')
            return
        }
        if (formInputData.description.length <= 20) {
            notify('description to short', 'warn')
            return
        }
        if (formInputData.quantity === '') {
            notify('quantity is empty', 'warn')
            return
        }
        if (parseInt(formInputData.quantity) < 0) {
            notify('quantity should be more then 1', 'warn')
            return
        }
        if (formInputData.price === '') {
            notify('price is empty', 'warn')
            return
        }
        if (formInputData.category === '') {
            notify('category is empty', 'warn')
            return
        }
        if (imageCover === null) {
            notify('you forget imageCover empty', 'warn')
            return
        }

        // const checkEmptyInput = !Object.values(formInputData).every(res => res === "")



        else {


            setLoading(true)

            // @desc create new form from buildin FromData
            const formData = new FormData()
            formData.append('title', formInputData.title)
            formData.append('description', formInputData.description)
            formData.append('quantity', parseInt(formInputData.quantity))
            formData.append('price', parseInt(formInputData.price))
            formData.append('category', formInputData.category)
            formData.append('imageCover', imageCover)

            //@desc Looping in images to add it in formdata
            images.map(img => formData.append('images', img))


            //@desc fun create Category  passing ID + naem & image
            await dispatch(AddProduct(formData))

            //@dex switchh loading to false to active validator inside useEffect
            setLoading(false)
        }
    }







    useEffect(() => {



        if (loading === false) {


            console.log(addProductResponse)
            if (addProductResponse.status === 200) {
                //@ if category created 
                if (addProductResponse.data.data.createdAt) {
                    notify('category created', 'success')


                    setformInputData({
                        title: '',
                        description: '',
                        quantity: Number,
                        price: Number,
                        category: '',

                    })
                    setDisplayImages(null)
                    setDisplayImageCover(null)
                }
            }
            else {

                //     //@ if we get error
                if (addProductResponse?.data) {

                    if (addProductResponse.data.message.includes("quantity")) {
                        notify("quantity uncourrect", "error")
                        console.log("pb quantity    ")

                    }
                    if (addProductResponse.data.message.includes("price")) {
                        notify("price uncourrect", "error")
                        console.log("pb price    ")

                    }
                    if (addProductResponse.data.message.includes("category")) {
                        notify("category uncourrect", "error")
                        console.log("pb category    ")

                    }
                    if (addProductResponse.data.message.includes("title")) {
                        notify("title uncourrect", "error")
                        console.log("pb title    ")

                    }
                    if (addProductResponse.data.message.includes("description")) {
                        notify("description uncourrect", "error")
                        console.log("pb description    ")

                    }
                    if (addProductResponse.data.message.includes("imageCover")) {
                        notify("imageCover uncourrect", "error")
                        console.log("pb imageCover    ")

                    }

                }



            }
        }


    }, [loading])


    return [onSubmit, handleChange, formInputData, handleChangeImageCover, displayImageCover, handleChangeImages, displayImages,onRemoveImageFromArray]
} 