import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import { useClickOutside } from '../hooks/useClickOutside'
import LogOut from './Logout'
import './Profile.css' 

/* Компонент профиля */

/* Props компонента */
type AuthProps = {
    handleLogout: () => void
    token: string
    isOpen: boolean
    setOpen: any
}

function Profile(props: AuthProps) {

    /* Смена заголовка вкладки в браузере */
    useEffect(() => {
        document.title = "Profile";
    }, []);

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

    /* Тестовая страница */
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-md-1"></div> 
                <div className="col-12 col-md-10 mainspace">
                    <div className="row top-line">
                        <div className="col-6"><h1 className="little-Uname">RBK University</h1></div>
                        <div className="col-6">
                            <div ref={menuRef}>
                                <button className="main-circle" onClick={MenuOpen}></button>
                                <nav className={(props.isOpen ? "menu-active" : "menu")}>
                                    <ul className="menu-list">
                                        <li className="menu-item"><NavLink to="/">main</NavLink></li>
                                        <li className="menu-item"><button onClick={LogoutButton}>Log out</button></li>
                                        <li className="menu-item">Out</li>
                                    </ul>
                                </nav>
                            </div>    
                            <div><p className="top-line-username">{pdata.name} {pdata.surname}</p></div>
                        </div>
                    </div>
                    <div className="margin-top-line" ></div>
                    <NavLink to="/">main</NavLink><br/>
                    <NavLink to="/autorisation">autorisation</NavLink><br/>
                    <NavLink to="/registration">registration</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                </div>
                <div className="col-md-1"></div>
            </div>    
        </div>
    )
}

export default Profile