import baseUrl from "../Api/baseURL";


const useGetData = async (url)=>{
    const res = await baseUrl.get(url)
    return res.data
}

export {useGetData}