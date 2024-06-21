import { useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Top_line from './Top_line'
import './Profile.css' 
import { jwtDecode } from 'jwt-decode'

/* Компонент профиля */

/* Props компонента */
type AuthProps = {
    handleLogout: () => void
    token: string
    isOpen: boolean
    setOpen: any
    serverData: string
    setServerData: any
}

function Profile(props: AuthProps) {

    /* Смена заголовка вкладки в браузере закритие всплывающего меню */
    useEffect(() => {
        document.title = "Profile";
    }, []);

    /* Декодирование полученных из токена данных */
    interface JwtPayload {name: string; surname: string; email: string};
    let pdata = jwtDecode(props.token) as JwtPayload;

    /* Тестовая страница */
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-md-1"></div> 
                <div className="col-12 col-md-10 mainspace">
                    <Top_line handleLogout={props.handleLogout} token={props.token} isOpen={props.isOpen} setOpen={props.setOpen} setServerData={props.setServerData} />
                    <div className="margin_top_line" ></div>
                    <div className="flex-container">
                        <div className="user_place">
                            <div className="user_data">
                                <div className="user_place_username">{pdata.name} {pdata.surname}</div> 
                                <div className="user_place_username">{pdata.email}</div> 
                            </div>
                        </div>
                        <div className="schedule_table">
                            <NavLink to="/forgot_password">aaaa</NavLink><br/>
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
                    </div>
                    {/* <Bot_line /> */}
                </div>
                <div className="col-md-1"></div>
            </div>    
        </div>
    )
}

export default Profile