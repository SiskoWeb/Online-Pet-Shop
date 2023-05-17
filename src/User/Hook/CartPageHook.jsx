import { useEffect, useState } from "react"
import notify from "../../Hooks/useNotifaction"




export const CartPageHook = () => {


    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [loading, setLoading] = useState(true)
    const [shippingAddress, setShippingAddress] = useState({})
    const [isAddressHere, setIsAddressHere] = useState(false)





    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeNumber = (e) => {
        setNumber(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeAddress = (e) => {
        setAddress(e.target.value)
    }



    //save address to localstorage
    const addAddress = async (e) => {
        e.preventDefault()

        // validation Inputs
        if (name === '' || number === '' || city === '' || address === '') {
            notify('Somthing Wring in address ', 'error')
            return true
        }

        setLoading(true)
        localStorage.setItem('address', JSON.stringify({ name, number, city, address }))
        setShippingAddress(JSON.parse(localStorage.getItem('address')))
        setLoading(false)
        setIsAddressHere(true)



    }

    //bring address info from local storage then put it in input for edi it
    const editAddress = async (e) => {
        e.preventDefault()



        console.log('true lodaing')
        setShippingAddress(JSON.parse(localStorage.getItem('address')))
        setName(shippingAddress.name)
        setNumber(shippingAddress.number)
        setCity(shippingAddress.city)
        setAddress(shippingAddress.address)
        console.log('false lodaing')
        setIsAddressHere(false)

    }




    //check if already data in localstorage
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('address'))) {
            setIsAddressHere(true)
            setShippingAddress(JSON.parse(localStorage.getItem('address')))

        }
        else {
            setIsAddressHere(false)

        }

    }, [loading])



    return [name, number, city, address, onChangeName, onChangeNumber, onChangeCity, onChangeAddress, addAddress, editAddress, isAddressHere, shippingAddress]
}