import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Submit from '../Submit.tsx'
import SubmitHandler from './forms/Forgot_password_form.ts'
import InvalidInput from './forms/FormMessages/InputErrorMessage.ts'
import ErrorMessage from './forms/FormMessages/ErrorMessage.tsx';
import './Enterance.css'

/* Компонент запроса смены пароля */

/* Props компонента */
type AuthProps = {
    setDisplayError (value: string) : void
    displayError: string;
}

function Forgot_password(props: AuthProps) {
    
    /* Состояния */
    useEffect(() => {
        document.title = "Forgot_password";
        props.setDisplayError('');
    }, []);

    /* Константа валидного ввода данных формы */
    const validInput=(event: React.FormEvent) => {(event.target as HTMLInputElement).setCustomValidity('')}

    /* Обработка оправки формы */
    const submitForm = (event: React.FormEvent) => {
        SubmitHandler(event, props.setDisplayError)
    }

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="forgot_password-form" onSubmit={submitForm}>
                        <div className="margin03" />
                        <h1>Forgot your password?</h1>
                        <div className="margin05" />
                        <input className="inputplace" type="email" name="email" placeholder="Enter your Email" required minLength={7} maxLength={319} onInvalid={InvalidInput} onInput={validInput} title="Please enter your Email address" />
                        <div className="inf">We will send a link to change your password to your Email</div>
                        <div className="margin4p" />
                        <Submit text="Change password" style="button_autorisation" />
                        <div className="margin2p" />
                        <NavLink to="/autorisation" className="link">Log in</NavLink>
                    </form>
                    <ErrorMessage displayError={props.displayError} />
                </div>
            </div>
        </div>
    )
}

export default Forgot_password