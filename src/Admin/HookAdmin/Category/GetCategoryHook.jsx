import { useEffect } from "react"

import { getAllCategories } from "../../../Redux/CategoriesSlice/ActionsCategories"
import { useDispatch, useSelector } from "react-redux"


export const GetCategoryHook = () => {
    const dispatch = useDispatch()






    const isLoading = useSelector((state) => state.categories.isloading)
    const Categories = useSelector((state) => state.categories.categoriesList)

    useEffect(() => {
        dispatch(getAllCategories())

    }, [])



    return [isLoading, Categories]
} 