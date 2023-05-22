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

const useGetOnData = async (url) => {

    try {

        const res = await baseUrl.get(url)

        return res

    } catch (e) {
        console.log(`error from useister ${e}`)
        return e.response

    }
}
export { useGetData, useGetOnData }