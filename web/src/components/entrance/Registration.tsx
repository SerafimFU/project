import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import Submit from '../Submit.tsx'
import SubmitHandler from './forms/Registration_form.ts'
import InvalidInput from './forms/FormMessages/InputErrorMessage.ts'
import ErrorMessage from './forms/FormMessages/ErrorMessage.tsx';
import './Enterance.css'

type AuthProps = {
    setDisplayError (value: number) : void
    displayError: number;
}

function Registration(props: AuthProps) {
    useEffect(() => {
        document.title = "Registration";
    }, []);
    
    const validInput=(event: React.FormEvent) => {(event.target as HTMLInputElement).setCustomValidity('')}

    const submitForm = (event: React.FormEvent) => {
        SubmitHandler(event, props.setDisplayError)
    }

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="registration-form" onSubmit={submitForm}>
                        <div className="margin01" />
                        <h1>Sign up</h1>
                        <div className="margin02" />
                        <input className="inputplace0" type="text" name="name" placeholder="Name" required pattern="^[A-ZΑ-ΩА-Я][a-zA-Zα-ωΑ-Ωа-яА-ЯёЁ\-]{1,20}" onInvalid={InvalidInput} onInput={validInput} title="Please enter your Name with a capital letter" />
                        <input className="inputplace0" type="text" name="surname" placeholder="Surname" required pattern="^[A-ZΑ-ΩА-Я][a-zA-Zα-ωΑ-Ωа-яА-ЯёЁ\-]{1,20}" onInvalid={InvalidInput} onInput={validInput} title="Please enter your Surname with a capital letter" />
                        <input className="inputplace" type="email" name="email" placeholder="Email" required minLength={7} maxLength={40} onInvalid={InvalidInput} onInput={validInput} title="Please enter your Email address" />
                        <input className="inputplace" type="text" name="phone" placeholder="Phone number" required pattern="[0-9\-\+\(\)]{7,22}" onInvalid={InvalidInput} onInput={validInput} title="Please enter your Phone number" />
                        <input className="inputplace" type="password" name="pass1" placeholder="Password" required pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,45}" onInvalid={InvalidInput} onInput={validInput} title="The password must contain one uppercase letter, one lowercase letter, a number, and one of these special characters! &quot; @ # $ % ^ & * &quot;. Minimum length - 8 symbols." />
                        <input className="inputplace" type="password" name="pass2" placeholder="Repeat password" required pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,45}" onInvalid={InvalidInput} onInput={validInput} title="Please repeat the password" />
                        <Submit text="Sign up" style="button_autorisation" />
                        <div className="margin2p" />
                        <NavLink to="/autorisation" className="link">Log in</NavLink>
                    </form>
                    <ErrorMessage displayError={props.displayError} />
                </div>
            </div>
        </div>
    )
}

export default Registration