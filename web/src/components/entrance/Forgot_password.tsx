import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Submit from '../Submit.tsx'
import submitHandler from './forms/Forgot_password_form.ts'
import invalidInput from './forms/Form_message.ts'
import './Enterance.css'

function Forgot_password() {
    useEffect(() => {
        document.title = "Forgot_password";
    }, []);

    const validInput=(event: React.FormEvent) => {(event.target as HTMLInputElement).setCustomValidity('')}

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="forgot_password-form" onSubmit={submitHandler}>
                        <div className="margin03" />
                        <h1>Forgot your password?</h1>
                        <div className="margin05" />
                        <input className="inputplace" type="email" name="email" placeholder="Enter your Email" required minLength={7} maxLength={40} onInvalid={invalidInput} onInput={validInput} title="Please enter your Email address" />
                        <div className="inf">We will send a link to change your password to your Email</div>
                        <div className="margin4p" />
                        <Submit text="Change password" style="button_autorisation" />
                        <div className="margin2p" />
                        <NavLink to="/autorisation" className="link">Log in</NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgot_password