import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChangePlace from '../ChangePlace.ts';
import Submit from '../../../Submit.tsx';
import SubmitHandler from '../../../entrance/forms/Forgot_password_form.ts';
import InvalidInput from '../../../entrance/forms/FormMessages/InputErrorMessage.ts';
import ErrorMessage from '../../../entrance/forms/FormMessages/ErrorMessage.tsx';
import '../../../entrance/Enterance.css'

/* Компонент запроса смены пароля из профиля */

/* Props компонента */
type AuthProps = {
    setDisplayError (value: string) : void
    displayError: string;
    token: string
    handleLogout: () => void
    setServerData: any
}

function Edit_password(props: AuthProps) {
    
    /* Состояния */
    useEffect(() => {
        document.title = "Change current password";
        props.setDisplayError('');
    }, []);

    /* Навигация при перенаправлении */
    const navigate = useNavigate();

    /* Константа валидного ввода данных формы */
    const validInput=(event: React.FormEvent) => {(event.target as HTMLInputElement).setCustomValidity('')}

    /* Обработка оправки формы */
    const submitForm = (event: React.FormEvent) => {
        SubmitHandler(event, props.setDisplayError)
    }

    /* Обработка события ChangePlace */
    const ChangePlaceLink = (event: React.FormEvent) => {
        ChangePlace(event, props.handleLogout, props.token, navigate, props.setServerData)
    }

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="forgot_password-form" onSubmit={submitForm}>
                        <div className="margin03" />
                        <h1>Change your password</h1>
                        <div className="margin05" />
                        <input className="inputplace" type="email" name="email" placeholder="Enter your Email" required minLength={7} maxLength={319} onInvalid={InvalidInput} onInput={validInput} title="Please enter your Email address" />
                        <div className="inf">We will send a link to change your password to your Email</div>
                        <div className="margin4p" />
                        <Submit text="Change password" style="button_autorisation" />
                        <div className="margin2p" />
                        <button className="inbutton" onClick={ChangePlaceLink} id="/profile">Return to Profile</button>
                    </form>
                    <ErrorMessage displayError={props.displayError} />
                </div>
            </div>
        </div>
    )
}

export default Edit_password