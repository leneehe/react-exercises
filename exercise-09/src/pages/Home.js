import { useContext } from 'react';
import { AppContext } from '../App';
import {useQuery} from '@tanstack/react-query';
import Axios from 'axios';

export const Home = () => {
    const {username} = useContext(AppContext);

    const {data: fact, isLoading, isError, refetch} = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          Axios.get('https://catfact.ninja/fact').then((res) =>
            res.data,
          ),
      })
      
    return (
        <>
            <h1>This is the HOME PAGE</h1>
            <p>The user is {username}</p>
            {isLoading && <p>Loading cat fact...</p>}
            {!isLoading && !isError && <p>{fact?.fact}</p>}
            {isError && <p>Sorry, there was an error.</p>}
            <button onClick={refetch}>Update data</button>
        </>
    )
}