import {useParams} from 'react-router-dom'

export const Contact = () => {
    let {name} = useParams();

    return (
        <>
            <h1>This is the CONTACT PAGE</h1>
            { name && <p>You are {name}</p>}
        </>
    )
}