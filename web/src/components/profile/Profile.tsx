import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import LogOut from './Logout'
import './Profile.css' 

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

    /* Декодирование полученных из токена данных */
    let pdata = jwtDecode(props.token);

    /* Обработка события Logout */
    const LogoutButton = (event: React.FormEvent) => {
        LogOut(event, props.handleLogout, props.token)
    }

    /* Тестовая страница */
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-md-1"></div> 
                <div className="col-12 col-md-10 mainspace">
                    <div className="row top-line">
                        <div className="col-6"><h1 className="little-Uname">RBK University</h1></div>
                        <div className="col-6">
                            <div className="main-circle"></div>
                            <p className="top-line-username">{pdata.name} {pdata.surname}</p>
                        </div>
                    </div>
                    <NavLink to="/">main</NavLink><br/>
                    <NavLink to="/autorisation">autorisation</NavLink><br/>
                    <NavLink to="/registration">registration</NavLink><br/>
                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                    <button onClick={LogoutButton}>Log out</button>
                </div>
                <div className="col-md-1"></div>
            </div>    
        </div>
    )
}

export default Profile