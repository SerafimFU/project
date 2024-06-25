import { useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import Top_line from './Top_line'
import ChangePlace from './Main_logic/ChangePlace'
import './Profile.css' 


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

    /* Смена заголовка вкладки в браузере закрытие всплывающего меню */
    useEffect(() => {
        document.title = "Profile";
    }, []);

    /* Навигация при перенаправлении */
    const navigate = useNavigate();

    /* Обработка события ChangePlace */
    const ChangePlaceLink = (event: React.FormEvent) => {
        ChangePlace(event, props.handleLogout, props.token, navigate, props.setServerData)
    }

    /* Декодирование полученных из токена данных */
    interface JwtPayload {name: string; surname: string; email: string, phone: string, group_id: string};
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
                                <div className="profile_border">
                                    <div className="usericon">
                                        <img src="../../../images/defaulticon.png" width={250} height={250}></img>
                                    </div>
                                    <div className="user_place_username">{pdata.name} {pdata.surname}</div> 
                                    <div className="user_place_username">Email: <span className="pdata">{pdata.email}</span></div> 
                                    <div className="user_place_username">Phone nomber: <span className="pdata">{pdata.phone}</span></div>
                                    <div className="user_place_username">Group: <span className="pdata">{pdata.group_id}</span></div>
                                    <button className="edit_button" id="/edit_profile" onClick={ChangePlaceLink}>Edit Profile</button>
                                </div>
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