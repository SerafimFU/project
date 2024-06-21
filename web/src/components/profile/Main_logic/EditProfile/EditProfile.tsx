import { useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import InvalidInput from '../../../entrance/forms/FormMessages/InputErrorMessage'
import Submit from '../../../Submit'
import SubmitHandler from './EditProfileForm'
import ChangePlace from '../ChangePlace'
import ErrorMessage from '../../../entrance/forms/FormMessages/ErrorMessage'
import '../../../entrance/Enterance.css'

/* Функция редактирования профиля */

/* Props компонента */
type AuthProps = {
    setDisplayError (value: string) : void
    displayError: string;
    token: string
    handleLogout: () => void
    setServerData: any
    setToken: any
}

function EditProfile(props: AuthProps) { 

    /* Смена заголовка вкладки в браузере закритие всплывающего меню */
    useEffect(() => {
        document.title = "Edit Profile";
    }, []);

    /* Навигация при перенаправлении */
    const navigate = useNavigate();


    /* Декодирование полученных из токена данных */
    interface JwtPayload {email: string, phone: string};
    let pdata = jwtDecode(props.token) as JwtPayload;

    /* Константа валидного ввода данных формы */
    const validInput=(event: React.FormEvent) => {(event.target as HTMLInputElement).setCustomValidity('')}

    /* Обработка оправки формы */
    const submitForm = (event: React.FormEvent) => {
        SubmitHandler(event, props.setDisplayError, props.token, props.handleLogout, props.setToken, pdata)
    }

    /* Обработка события ChangePlace */
    const ChangePlaceLink = (event: React.FormEvent) => {
        ChangePlace(event, props.handleLogout, props.token, navigate, props.setServerData)
    }

    return(
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="registration-form" onSubmit={submitForm}>
                        <div className="margin01" />
                        <h1>Edit Profile</h1>
                        <div className="margin02" />
                        <input className="inputplace" type="email" name="email" placeholder={pdata.email} minLength={7} maxLength={319} onInvalid={InvalidInput} onInput={validInput} title="Please enter new Email address" />
                        <input className="inputplace" type="text" name="phone" placeholder={pdata.phone} pattern="[0-9\-\+\(\)]{7,22}" onInvalid={InvalidInput} onInput={validInput} title="Please enter new Phone number" />
                        <div className="helptext">To confirm enter your current password</div>
                        <input className="inputplace" type="password" name="pass1" required pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,45}" onInvalid={InvalidInput} onInput={validInput} title="Enter your current password" />
                        <Submit text="Confirm" style="button_autorisation" />
                        <div className="margin2p" />
                        <button className="inbutton" onClick={ChangePlaceLink} id="/profile">Return to Profile</button>
                        <button className="inbutton" onClick={ChangePlaceLink} id="/edit_password">You want to change password</button>
                    </form>
                    <ErrorMessage displayError={props.displayError} />
                </div>
            </div>
        </div>
    )
}

export default EditProfile