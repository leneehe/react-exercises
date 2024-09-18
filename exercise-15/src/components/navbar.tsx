import {Link} from 'react-router-dom'
import {auth} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'

export const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div className='navbar'>
            <div></div>
            <div>
                <Link to="/"> Home</Link>
                <Link to="/login"> Login </Link>
            </div>

            <div className='userInfo'>
                { user && (
                <>
                    <p>{user?.displayName} - {user?.email}</p>
                    <img src={user?.photoURL || ""} width="30" height="30" />
                    <button onClick={logout}>Log Out</button>
                </>
                )}
            </div>
        </div>
    )
}