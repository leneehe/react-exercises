import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';

export const useGetCat = () => {
    const {data, refetch, isLoading: isCatLoading, isError} = useQuery({
        queryKey:['cat'], 
        queryFn: async() => {
        return Axios.get('https://catfact.ninja/fact').then((res) => res.data)
        }
    })

    const refetchData = () => {
        alert('Data refetched!');
        refetch();
    }

    return {data, refetchData, isCatLoading, isError}
}