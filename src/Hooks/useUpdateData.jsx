import baseUrl from "../Api/baseURL";

const useUpdateData = async (url) => {


    const res = await baseUrl.put(url)
    return res.data
}

export { useUpdateData }