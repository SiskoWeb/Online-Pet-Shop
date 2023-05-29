import { useEffect, useState } from "react"
import notify from "../../../Hooks/useNotifaction"
import { useDispatch, useSelector } from "react-redux"
import { AddProduct, getOneProductRedux, updateProductRedux } from "../../../Redux/productsSlice/ActionsProducts"
import addImg from '../../../assets/addimg.png'
import { useParams } from "react-router-dom"


export const UpdateProductHook = () => {
    const params = useParams()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)
    const [id, setId] = useState(params.id)


    // const [displayImageCover, setDisplayImageCover] = useState(addImg)
    const [mainImage, setMainImage] = useState(
        {
            image: null,
            displayImageCover: addImg
        })



    const [formInputData, setformInputData] = useState(
        {
            title: '',
            description: '',
            quantity: Number,
            price: Number,
            category: null,

        }
    );



    const [listimages, setListimages] = useState([
        {
            id: 1,
            image: null,
            imageDisplay: addImg
        },
        {
            id: 2,
            image: null,
            imageDisplay: addImg
        },
        {
            id: 3,
            image: null,
            imageDisplay: addImg
        },
        {
            id: 4,
            image: null,
            imageDisplay: addImg
        }
    ]);




    //@desc get data for spicific product by params.id
    useEffect(() => {

        const getOneProduct = async () => {

            await dispatch(getOneProductRedux(id))
        }

        getOneProduct()

    }, [])



    const GetOneProduct = useSelector(state => state.products.GetOneProduct)
    const isloading = useSelector(state => state.products.isloading)



    useEffect(() => {

        console.log(GetOneProduct.data)

        if (GetOneProduct?.data) {

            //@desc add image from sserver to inputs
            setMainImage({
                image: null,
                displayImageCover: GetOneProduct?.data.imageCover
            })






            const updatedList = listimages.map((item, index) => {
                if (item.id === index + 1) {
                    return {
                        ...item,
                        image: null, imageDisplay: GetOneProduct.data.images[index] // Replace 'image' + id with the actual image value
                    };
                }
                return item;
            });

            setListimages(updatedList);





            //@desc add data from server to inputs
            setformInputData({
                title: GetOneProduct?.data.title,
                description: GetOneProduct?.data.description,
                quantity: GetOneProduct?.data.quantity,
                price: GetOneProduct?.data.price,
                category: GetOneProduct?.data.category._id,
            });

        }



    }, [GetOneProduct])








    //@desc get images from user (second Images)
    const handleChangeImages = (image, id) => {
        const updatedList = listimages.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    image: image, imageDisplay: URL.createObjectURL(image)// Replace 'image' + id with the actual image value
                };
            }
            return item;
        });

        setListimages(updatedList);


    };





    //@desc get data from inputs not include images
    const handleChange = (evnt) => {
        const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
        setformInputData(newInput)

    }

    //@desc get images from user (main Image)
    const handleChangeImageCover = (evnt) => {

        setMainImage({
            image: evnt.target.files[0],
            displayImageCover: URL.createObjectURL(evnt.target.files[0])
        })

    }








    //@desc cleare input image by imageselected
    const onRemoveImage = (id) => {
        if (0 === id) {

            setMainImage({
                image: null,
                displayImageCover: addImg
            })
        }
        else {
            const updatedList = listimages.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        image: null, imageDisplay: addImg
                    };
                }
                return item;
            });

            setListimages(updatedList);
            console.log(updatedList)
        }


    }



    // @desc upload data to Server 
    const onSubmit = async (e) => {
        console.log(mainImage)
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
        if (formInputData.category === null) {
            notify('category is empty', 'warn')
            return
        }
        if (mainImage.displayImageCover === addImg) {
            notify('you forget imageCover empty', 'warn')
            return
        }

        // const checkEmptyInput = !Object.values(formInputData).every(res => res === "")



        else {
            console.log(formInputData.category)
            setLoading(true)
            // @desc create new form from buildin FromData
            const formData = new FormData()
            //@desc check if user change img if yes add it into form if not updae only name

            if (mainImage.image === null) {
                formData.append('title', formInputData.title)
                formData.append('description', formInputData.description)
                formData.append('quantity', parseInt(formInputData.quantity))
                formData.append('price', parseInt(formInputData.price))
                formData.append('category', formInputData.category)
                listimages.map(item => formData.append('images', item.image))
                console.log(formInputData.category)
            }

            else {
                console.log(formInputData.category)

                formData.append('title', formInputData.title)
                formData.append('description', formInputData.description)
                formData.append('quantity', parseInt(formInputData.quantity))
                formData.append('price', parseInt(formInputData.price))
                formData.append('imageCover', mainImage.image)
                formData.append('category', formInputData.category)
                listimages.map(item => formData.append('images', item.image))
            }






            //@desc fun create Category  passing ID + naem & image
            await dispatch(updateProductRedux({ id, formData }))

            //@dex switchh loading to false to active validator inside useEffect
            setLoading(false)
        }
    }



    const UpdateResponse = useSelector(state => state.products.UpdateResponse)




    useEffect(() => {



        if (loading === false) {



            if (UpdateResponse.status === 201) {
                //@ if category created 
                if (UpdateResponse.data.data.createdAt) {
                    notify('category created', 'success')

                    dispatch(getOneProductRedux(id))

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


    return [onSubmit, handleChange, formInputData, handleChangeImageCover, mainImage, onRemoveImage, handleChangeImages, listimages]
} 