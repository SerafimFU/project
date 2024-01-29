import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

type AuthProps = {
    handleLogout: () => void
}

function Profile(props: AuthProps) {
    useEffect(() => {
        document.title = "Profile";
    }, []);

    return (
        <>
            <div>sdfdsfsdfdsfsdsfsdf</div>
            <NavLink to="/">main</NavLink><br/>
            <NavLink to="/autorisation">autorisation</NavLink><br/>
            <NavLink to="/registration">registration</NavLink><br/>
            <NavLink to="/forgot_password">forgot_password</NavLink><br/>
            <button onClick={props.handleLogout}>Log out</button>
        </>
    )
}

export default Profile