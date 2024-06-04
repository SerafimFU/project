import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { useClickOutside } from '../hooks/useClickOutside'
import LogOut from './Logout'
import './Profile.css'

/* Компонент заглавной линии сайта */

/* Props компонента */
type AuthProps = {
    handleLogout: () => void
    token: string
    isOpen: boolean
    setOpen: any
}

function Top_line(props: AuthProps) {

    /* Декодирование полученных из токена данных */
    let pdata = jwtDecode(props.token);

    /* Обработка события Logout */
    const LogoutButton = (event: React.FormEvent) => {
        LogOut(event, props.handleLogout, props.token)
    }

    /* Обработка события открытия всплывающего меню */
    const MenuOpen = () => {
        props.setOpen(!props.isOpen)
        console.log(props.isOpen) /* Trash */
    }

    /* Обработка кликов мимо всплывающего меню, для его закрытия */
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => {
        if (props.isOpen == true) {setTimeout(() => props.setOpen(false), 50)};
    });

    return(
        <div className="row top_line">
            <div className="col-6"><h1 className="little_Uname">RBK University</h1></div>
            <div className="col-6">
                <div ref={menuRef}>
                    <button className="main_circle" onClick={MenuOpen}></button>
                    <nav className={(props.isOpen ? "menu_active" : "menu")}>
                        <ul className="menu_list">
                        <NavLink to="/profile/timetable"><li className="menu_item">Timetable</li></NavLink>
                        <NavLink to="/profile"><li className="menu_item">Profile</li></NavLink>
                        <NavLink to="/"><li className="menu_item">main</li></NavLink>
                        <li><button className="logout_button" onClick={LogoutButton}>Log out</button></li>
                        </ul>
                    </nav>
                </div>    
                <div><p className="top_line_username">{pdata.name} {pdata.surname}</p></div>
            </div>
        </div>
    )
}

export default Top_line