import baseUrl from "../Api/baseURL";

// const useInsertData = async (url, body) => {

//     const res = await baseUrl.post(url, body)
//     console.log(res.data)
//     return res
// }

// export { useInsertData }    





const useInsertDataWithImages = async (url, body) => {

    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }


    const res = await baseUrl.post(url, body, config)
   
    return res






}

const useInsertData = async (url, body) => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`
    //     }
    // }


    const res = await baseUrl.post(url, body)

    return res.data

}



// const useInsertData = async (url, body) => {
//     const config = {
//         headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`
//         }
//     }
//     try {

//         const res = await baseUrl.post(url, body, config)

//         return res

//     } catch (e) {
//         console.log(`error from useister ${e}`)
//         return e.response

//     }
// }

export { useInsertData, useInsertDataWithImages }    