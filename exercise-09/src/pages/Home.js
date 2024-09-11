import { useContext } from 'react';
import { AppContext } from '../App';
import {useQuery} from '@tanstack/react-query';
import {Axios} from 'axios';

export const Home = () => {
    const {username} = useContext(AppContext);

    const {data} = useQuery({queryKey:["cat"], queryFn:() => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
      }});
    return (
        <>
            <h1>This is the HOME PAGE</h1>
            <p>The user is {username}</p>
            {/* <p>{data?.fact}</p> */}
        </>
    )
}