import { useEffect, useState } from "react"
import notify from "../../Hooks/useNotifaction"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginAction } from "../../Redux/AuthSlices/ActionsAuth";

export const LoginHook = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [password, sePassword] = useState()
    const [loading, setLoading] = useState(true)
    // const [isLoading, setIsLoading] = useState(false)

    const res = useSelector(state => state.auth.user)
    // const isLoading = useSelector((state) => state.auth.isloading)
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassowrd = (e) => {
        sePassword(e.target.value)
    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const validationValues = () => {

        if (email === '') {
            notify('email required ', 'error')
            return
        }

        if (!isValidEmail(email)) {
            notify('add email ', 'error')
            return
        }
        if (password === '') {
            notify('passowrd required ', 'error')
            return
        }
        if (password.length <= 4) {
            notify('passowrd Short ', 'error')
            return
        }
    }

    //save data
    const onSubmit = async (e) => {
        e.preventDefault()
        validationValues()
        // setIsLoading(true)
        setLoading(true)
        console.log('true lodaing')
        await dispatch(loginAction({
            email,
            password
        }))

        // setIsLoading(false)
        setLoading(false)


    }

    useEffect(() => {

        if (loading === false) {
            if (res) {

                console.log('inside res')
                console.log(res)
                if (res.token) {
                    localStorage.setItem("token", res.token)
                    localStorage.setItem("user", JSON.stringify(res.data))
                    notify("Accoun Created Successfuly", "success")
                    setTimeout(() => {
                        navigate('/cart')
                    }, 1100);
                }
                else {
                    // notify("Accoun Created Successfuly", "error")
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    console.log('no res')
                }


                if (res.message === "email or password uncourrect") {
                    notify("email or passowrd uncourrect", "error")
                }
                if (res.errors) {
                    if (res?.errors[0].msg) {
                        notify("email or passowrd uncourrect", "error")
                    }
                }

                setLoading(true)
            }
        }
    }, [loading])


    return [email, password, onChangeEmail, onChangePassowrd, onSubmit]
}