import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Submit from '../Submit.tsx'
import submitHandler from './forms/Autorisation_form.tsx'
import invalidInput from './forms/Form_message.tsx';
import './Enterance.css'

function Autorisation() {
    useEffect(() => {
        document.title = "Autorisation";
    }, []);
    
    const validInput=(event: React.FormEvent) => {(event.target as HTMLInputElement).setCustomValidity('')}

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="autorisation-form" onSubmit={submitHandler}>
                        <div className="margin03" />
                        <h1>Wellcome back</h1>
                        <div className="margin05" />
                        <input className="inputplace" type="text" name="login" placeholder="Email or phone number" required minLength={7} maxLength={40} onInvalid={invalidInput} onInput={validInput} title="Enter your email or phone number" />
                        <input className="inputplace" type="password" name="pass" placeholder="Password" required pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,45}" onInvalid={invalidInput} onInput={validInput} title="Password is incorrect" />
                        <div className="margin4p" />
                        <Submit text="Log in" style="button_autorisation" />
                        <div className="margin4p" />
                        <NavLink to="/forgot_password" className="link">Forgot password?</NavLink>
                        <div className="margin01" />
                        <NavLink to="/registration" className="link">Create new account</NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Autorisation