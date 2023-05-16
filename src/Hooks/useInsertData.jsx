import baseUrl from "../Api/baseURL";

const useInsertData =async (url,body)=>{

    const res = await baseUrl.post(url,body)
    return res.data
}

export {useInsertData}