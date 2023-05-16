import baseUrl from "../Api/baseURL";

const useDeleteData = async (url) => {


    const res = await baseUrl.delete(url)
    return res.data
}

export { useDeleteData }