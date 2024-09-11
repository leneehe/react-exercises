import { useContext } from 'react';
import { AppContext } from '../App';
import {ChangeProfile} from './ChangeProfile'

export const Profile = () => {
    const {username, setUsername} = useContext(AppContext);

    return (
        <>
            <h1>Profile view</h1>
            <p>User is: {username}</p>

            <ChangeProfile setUsername={setUsername} />
        </>
    )
}