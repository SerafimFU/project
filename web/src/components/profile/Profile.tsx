import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import LogOut from './Logout'

/* Компонент профиля */

/* Props компонента */
type AuthProps = {
    handleLogout: () => void
    token: string
}

function Profile(props: AuthProps) {
    
    /* Смена заголовка вкладки в браузере */
    useEffect(() => {
        document.title = "Profile";
    }, []);

    /* Обработка события Logout */
    const LogoutButton = (event: React.FormEvent) => {
        LogOut(event, props.handleLogout, props.token)
    }

    /* Тестовая страница */
    return (
        <>
            <div>sdfdsfsdfdsfsdsfsdf</div>
            <NavLink to="/">main</NavLink><br/>
            <NavLink to="/autorisation">autorisation</NavLink><br/>
            <NavLink to="/registration">registration</NavLink><br/>
            <NavLink to="/forgot_password">forgot_password</NavLink><br/>
            <button onClick={LogoutButton}>Log out</button>
        </>
    )
}

export default Profile