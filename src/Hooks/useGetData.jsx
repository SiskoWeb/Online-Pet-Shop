import baseUrl from "../Api/baseURL";







const useGetData = async (url) => {

    try {

        const res = await baseUrl.get(url)

        return res.data

    } catch (e) {
        console.log(`error from useister ${e}`)
        return e.response

    }
}
export { useGetData }