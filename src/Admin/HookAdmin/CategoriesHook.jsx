import { useEffect, useState } from "react"
import notify from "../../Hooks/useNotifaction"
import { addCategory, getAllCategories, removeCategory } from "../../Redux/CategoriesSlice/ActionsCategories"
import { useDispatch, useSelector } from "react-redux"


export const CategoriesHook = () => {

    const [categoryName, setCategoryName] = useState('')
    const [imgCategory, setImgCategory] = useState(null)
    const [selectedImg, setSelectedImg] = useState(null)
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()
    const Categories = useSelector((state) => state.categories.categoriesList)
    const isLoading = useSelector((state) => state.categories.isloading)
    const addCategoryResponse = useSelector((state) => state.categories.addCategoryResponse)
    const RemoveResponse = useSelector((state) => state.categories.RemoveResponse)


    const onChangeName = (e) => {
        setCategoryName(e.target.value)
    }

    const onChangeImg = (img) => {

        setImgCategory(URL.createObjectURL(img))
        setSelectedImg(img)
    }


    // @desc remove image tha user add 
    const clearInputImg = () => {
        setImgCategory(null)
        setSelectedImg(null)
    }


    // @desc upload data to Server 
    const onSubmit = async (e) => {

        e.preventDefault()
        if (imgCategory === null || selectedImg === null) {
            notify('image required ', 'error')
            return
        }

        if (categoryName === '') {
            notify('Name required ', 'error')
            return
        }
        if (categoryName.length <= 2) {
            notify('Name Category to short ', 'error')
            return
        }
        setLoading(true)


        // @desc create new form from buildin FromData
        const formData = new FormData()
        formData.append('name', categoryName)
        formData.append('image', selectedImg)



        await dispatch(addCategory(formData))

        //@dex switchh loading to false to active validator inside useEffect
        setLoading(false)

    }

    //@desc fun remove Category 
    const deleteCategory = (id) => {

        dispatch(removeCategory(id))
        setLoading(false)
    }





    console.log(RemoveResponse)




    useEffect(() => {
        dispatch(getAllCategories())


        if (loading === false) {

            //@ check if category created by response  came from server


            //@ if category created 
            if (addCategoryResponse.createdAt) {
                notify('category created', 'success')
                setImgCategory(null)
                setSelectedImg(null)
                setCategoryName('')
            }
            //@ if category created 


            //@ if we get error
            if (addCategoryResponse?.data) {

                if (addCategoryResponse?.data.message === "Categories validation failed: name: category too short") {
                    notify('Name Category too short ', 'error')
                }
                if (addCategoryResponse?.data.message?.includes('E11000 duplicate key error collection:')) {
                    notify('This Category already in db ', 'error')
                }

            }




        }


    }, [loading])


    return [categoryName, imgCategory, onChangeName, onChangeImg, onSubmit, clearInputImg, deleteCategory, isLoading, Categories]
} 