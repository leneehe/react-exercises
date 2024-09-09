
import {useLocation} from 'react-router-dom'
export const PageNotFound = () => {
    let location = useLocation()
    return (
        <> 
            <h1> Page not Found!</h1>
            <p>Sorry about that, the page {location.pathname} doesn't exist!</p>
        </>
    )
}