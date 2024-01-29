import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Submit from '../Submit.tsx'
import SubmitHandler from './forms/Autorisation_form.ts'
import invalidInput from './forms/Form_message.ts'
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
    
    const validInput=(event: React.FormEvent) => {(event.target as HTMLInputElement).setCustomValidity('')}

    const submitForm = (event: React.FormEvent) => {
        SubmitHandler(event, props.handleLogin, props.setDisplayError)
    }
    
    function ErrorMessage() {
        if (props.displayError === 1) {
            return <div className="errors mx-auto">Incorrect login or password</div>
        }
        if (props.displayError === 2) {
            return <div className="errors mx-auto">No conection to server</div>
        }
    }


    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="autorisation-form" onSubmit={submitForm}>
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
                    <ErrorMessage />
                </div>
            </div>
        </div>
    )
}

export default Autorisation