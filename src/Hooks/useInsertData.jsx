import baseUrl from "../Api/baseURL";

// const useInsertData = async (url, body) => {

//     const res = await baseUrl.post(url, body)
//     console.log(res.data)
//     return res
// }

// export { useInsertData }    


const useInsertData = async (url, body) => {

    try {

        const res = await baseUrl.post(url, body)
        console.log(res.data)
        return res

    } catch (e) {
        console.log(`error from useister ${e}`)
        return e.response

    }
}

export { useInsertData }    