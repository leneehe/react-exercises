import { useGetCat } from "../useGetCat"

export const Cat = () => {
    const {data, refetchData, isCatLoading, isError} = useGetCat()

    if (isCatLoading) return <h1>Loading...</h1>

    return (
        <div>
            <button onClick={refetchData}>Get cat facts</button>
            <h1>{data?.fact}</h1>
        </div>
    )
}