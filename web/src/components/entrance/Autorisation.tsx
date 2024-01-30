import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Submit from '../Submit.tsx'
import SubmitHandler from './forms/Autorisation_form.ts'
import InvalidInput from './forms/FormMessages/InputErrorMessage.ts'
import ErrorMessage from './forms/FormMessages/ErrorMessage.tsx';
import './Enterance.css'

type AuthProps = {
    handleLogin: () => void
    setDisplayError (value: number) : void
    displayError: number;
}

function Autorisation(props: AuthProps) {
    useEffect(() => {
        document.title = "Autorisation";
    }, []);

    props.setDisplayError(0);
    
    const validInput=(event: React.FormEvent) => {(event.target as HTMLInputElement).setCustomValidity('')}

    const submitForm = (event: React.FormEvent) => {
        SubmitHandler(event, props.handleLogin, props.setDisplayError)
    }

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="autorisation-form" onSubmit={submitForm}>
                        <div className="margin03" />
                        <h1>Wellcome back</h1>
                        <div className="margin05" />
                        <input className="inputplace" type="text" name="login" placeholder="Email or phone number" required minLength={7} maxLength={40} onInvalid={InvalidInput} onInput={validInput} title="Enter your email or phone number" />
                        <input className="inputplace" type="password" name="pass" placeholder="Password" required pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,45}" onInvalid={InvalidInput} onInput={validInput} title="Password is incorrect" />
                        <div className="margin4p" />
                        <Submit text="Log in" style="button_autorisation" />
                        <div className="margin4p" />
                        <NavLink to="/forgot_password" className="link">Forgot password?</NavLink>
                        <div className="margin01" />
                        <NavLink to="/registration" className="link">Create new account</NavLink>
                    </form>
                    <ErrorMessage displayError={props.displayError} />
                </div>
            </div>
        </div>
    )
}

export default Autorisation