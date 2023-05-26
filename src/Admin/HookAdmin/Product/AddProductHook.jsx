import { useEffect, useState } from "react"
import notify from "../../../Hooks/useNotifaction"
import { addCategory, getAllCategories } from "../../../Redux/CategoriesSlice/ActionsCategories"
import { useDispatch, useSelector } from "react-redux"


export const AddProductHook = () => {
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    const [displayImageCover, setDisplayImageCover] = useState(null)
    const [imageCover, setImageCover] = useState(null)

    const [images, setImages] = useState([])
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
        setImages(evnt.target.files)
        // setDisplayImages(evnt.target.files)
        setDisplayImages(Array.from(evnt.target.files))

    }



    const onRemoveImageFromArray = (e) => {

    }

    // @desc upload data to Server 
    const onSubmit = async (e) => {

        e.preventDefault()


        console.log(formInputData)
        console.log(imageCover)
        console.log(images)

        setLoading(true)

        // @desc create new form from buildin FromData
        // const formData = new FormData()
        // formData.append('name', categoryName)
        // formData.append('image', selectedImg)


        //@desc fun create Category  passing ID + naem & image
        // await dispatch(addCategory(formData))

        //@dex switchh loading to false to active validator inside useEffect
        setLoading(false)

    }







    useEffect(() => {



        // if (loading === false) {



        //     if (addCategoryResponse.status === 200) {
        //         //@ if category created 
        //         if (addCategoryResponse.data.data.createdAt) {
        //             notify('category created', 'success')



        //         }
        //     }
        //     else {

        //         //     //@ if we get error
        //         if (addCategoryResponse?.data) {
        //             notify('main error ', 'error')
        //             if (addCategoryResponse.data.errors) {
        //                 notify("email or passowrd uncourrect", "error")

        //             }
        //         }



        //     }
        // }


    }, [loading])


    return [onSubmit, handleChange, formInputData, handleChangeImageCover, displayImageCover, handleChangeImages, displayImages]
} 