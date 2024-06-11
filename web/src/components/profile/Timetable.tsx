import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Top_line from './Top_line'
import MyCalendar from './Calendar/MyCalendar'
import Schedule from './Main_logic/Schedule'
import './Profile.css' 

/* Компонент расписания */

/* Props компонента */
type AuthProps = {
    handleLogout: () => void
    token: string
    isOpen: boolean
    setOpen: any
    serverData: string
    setServerData: any
}

function Timetable(props: AuthProps) {

    /* Смена заголовка вкладки в браузере закритие всплывающего меню */
    useEffect(() => {
        document.title = "Timetable";
    }, []);


    /* Тестовая страница */
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-md-1"></div> 
                <div className="col-12 col-md-10 mainspace">
                    <Top_line handleLogout={props.handleLogout} token={props.token} isOpen={props.isOpen} setOpen={props.setOpen} setServerData={props.setServerData} />
                    <div className="margin_top_line" ></div>
                    <div className="flex-container">
                        <div className="calendar_table">
                            <div className="calendar_table2">
                                <MyCalendar />
                                <div className="announcement">
                                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                                    <NavLink to="/forgot_password">forgot_password</NavLink><br/>
                                </div>
                            </div>
                        </div>
                        <div className="schedule_table">
                            <Schedule serverData={props.serverData} />
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
                </div>
                <div className="col-md-1"></div>
            </div>    
        </div>
    )
}

export default Timetable