import { useRef } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { useClickOutside } from '../hooks/useClickOutside'
import LogOut from './Main_logic/Logout'
import ChangePlace from './Main_logic/ChangePlace'
import './Profile.css'

/* Компонент заглавной линии сайта */

/* Props компонента */
type AuthProps = {
    handleLogout: () => void
    token: string
    isOpen: boolean
    setOpen: any
    setServerData: any
}

function Top_line(props: AuthProps) {

    /* Навигация при перенаправлении */
    const navigate = useNavigate();

    /* Декодирование полученных из токена данных */
    interface JwtPayload {name: string; surname: string};
    let pdata = jwtDecode(props.token) as JwtPayload;

    /* Обработка события Logout */
    const LogoutButton = (event: React.FormEvent) => {
        LogOut(event, props.handleLogout, props.token)
    }

    /* Обработка события ChangePlace */
    const ChangePlaceLink = (event: React.FormEvent) => {
        ChangePlace(event, props.handleLogout, props.token, navigate, props.setServerData)
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
                            <button className="link_button" onClick={ChangePlaceLink} id="/profile/timetable"><li className="menu_item">Timetable</li></button>
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