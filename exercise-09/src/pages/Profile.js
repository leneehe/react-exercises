import {ChangeProfile} from './ChangeProfile'

export const Profile = (props) => {
    return (
        <>
            <h1>Profile view</h1>
            <p>User is: {props.username}</p>

            <ChangeProfile setUsername={props.setUsername} />
        </>
    )
}