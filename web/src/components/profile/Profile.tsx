import { useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import Top_line from './Top_line'
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

    /* Смена заголовка вкладки в браузере закритие всплывающего меню */
    useEffect(() => {
        document.title = "Profile";
    }, []);

    /* Тестовая страница */
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-md-1"></div> 
                <div className="col-12 col-md-10 mainspace">
                    <Top_line handleLogout={props.handleLogout} token={props.token} isOpen={props.isOpen} setOpen={props.setOpen} setServerData={props.setServerData} />
                    <div className="margin_top_line" ></div>
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