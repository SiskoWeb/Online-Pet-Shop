import { useEffect, useState } from "react"
import notify from "../../../Hooks/useNotifaction"
import {  getAllCategories,  updateCategory } from "../../../Redux/CategoriesSlice/ActionsCategories"
import { useDispatch, useSelector } from "react-redux"


export const UpdateCategoryHook = () => {




    const dispatch = useDispatch()


    const UpdateResponse = useSelector((state) => state.categories.UpdateResponse)





    //@desc fun update Category  passing ID + naem or image
    const updateCategoryPart1 = (id, image, name) => {
        console.log(id)
        console.log(image)
        console.log(name)

        // setImgCategory(image)
        // setSelectedImg(image)
        // setCategoryName(name)
        // setIdCategory(id)




    }

    //@desc fun update Category  passing ID + naem or image
    const updateCategoryPart2 = () => {

        // if (imgCategory === null || selectedImg === null) {
        //     notify('image required ', 'error')
        //     return
        // }

        // if (categoryName === '') {
        //     notify('Name required ', 'error')
        //     return
        // }
        // if (categoryName.length <= 2) {
        //     notify('Name Category to short ', 'error')
        //     return
        // }
        // if (idCategory === null) {
        //     notify('something wrong refrech page ', 'error')
        //     return
        // }
        // // @desc create new form from buildin FromData
        // const formData = new FormData()
        // formData.append('name', categoryName)
        // // formData.append('image', selectedImg)
        // dispatch(updateCategory(idCategory, formData))
console.log('updateCategoryPart2')
    }



    useEffect(() => {










    }, [])


    return [ updateCategoryPart1, updateCategoryPart2]
} 