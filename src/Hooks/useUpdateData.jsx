import baseUrl from "../Api/baseURL";


const useUpdateData = async (url, body) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }

    const res = await baseUrl.put(url, body, config)
    return res.data
}

export { useUpdateData }