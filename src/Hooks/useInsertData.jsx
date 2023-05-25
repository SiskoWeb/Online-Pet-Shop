import baseUrl from "../Api/baseURL";

  





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





export { useInsertData, useInsertDataWithImages }    