import { useEffect, useState } from "react"
import notify from "../../../Hooks/useNotifaction"
import { getAllCategories, updateCategory } from "../../../Redux/CategoriesSlice/ActionsCategories"
import { useDispatch, useSelector } from "react-redux"
import addimg from '../../../assets/addimg.png'

export const UpdateCategoryHook = () => {
    const [id, setId] = useState(0)

    const [nameUpdate, setNameUpdate] = useState(null)
    const [toggleUpdate, setToggleUpdate] = useState(false)
    const [loading, setLoading] = useState(true)
    const [fileUpdate, setFileUpdate] = useState(addimg);
    const [fileName, setFileName] = useState(null);

    const dispatch = useDispatch()


    // const getBase64FromUrl = async (url) => {
    //     const data = await fetch(url);
    //     const blob = await data.blob();
    //     return new Promise((resolve) => {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(blob);
    //         reader.onloadend = () => {
    //             const base64data = reader.result;
    //             resolve(base64data);
    //             setFileName(base64data)

    //             console.log(fileName)
    //         }
    //     });

    // }
    // //to convert base 64 to file
    // function dataURLtoFile(dataurl, filename) {
    //     var arr = dataurl.split(','),
    //         mime = arr[0].match(/:(.*?);/)[1],
    //         bstr = atob(arr[1]),
    //         n = bstr.length,
    //         u8arr = new Uint8Array(n);

    //     while (n--) {
    //         u8arr[n] = bstr.charCodeAt(n);
    //     }

    //     return new File([u8arr], filename, { type: mime });
    // }

    const saveFileUpdate = (img) => {
        setFileUpdate(URL.createObjectURL(img))
        setFileName(img);



    };



    //@desc fun update Category  passing ID + naem or image
    const updateCategoryPart1 = (id, image, name) => {

        setFileName(image);
        setFileUpdate(image)
        console.log(fileUpdate)
        setNameUpdate(name)
        setId(id)
        setToggleUpdate(true)





    }

    //@desc fun update Category  passing ID + naem or image
    const updateCategoryPart2 = async (e) => {
        e.preventDefault()
        if (fileUpdate === null) {
            notify('image required ', 'error')
            return
        }

        if (nameUpdate === '') {
            notify('Name required ', 'error')
            return
        }

        if (id === 0) {
            notify('something wrong refrech page ', 'error')
            return
        }


        setLoading(true)
        // @desc create new form from buildin FromData
        const formData = new FormData();
        formData.append("name", nameUpdate);
        formData.append("image", fileName);

        await dispatch(updateCategory(id, formData))
        setLoading(false)

    }

    const res = useSelector((state) => state.categories.UpdateResponse)

    useEffect(() => {
        console.log(res)
        if (res.status === 201) {
            notify('image required ', 'success')
            setToggleUpdate(false)

        }
        else {
            if (res?.data) {

                if (res.data.errors) {
                    notify("Invalid category id format", "error")

                }
            }
        }
        // if true 
        // notify + refrech list  + close popup


        // if false : notify 







    }, [loading])


    return [updateCategoryPart1, updateCategoryPart2, fileUpdate, nameUpdate, setNameUpdate, saveFileUpdate, toggleUpdate, setToggleUpdate]
} 