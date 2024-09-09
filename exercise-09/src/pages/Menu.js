import { useNavigate } from 'react-router-dom';
export const Menu = () => {
    let navigate = useNavigate();

    return (
        <>
            <h1>This is the MENU PAGE</h1>
            <button onClick={() => {navigate("/contact")}}>Goto Contact Page</button>
        </>
    )
}