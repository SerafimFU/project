import { useEffect } from 'react';
import Submit from '../Submit.tsx'
import submitHandler from './forms/Change_password_form.tsx'
import invalidInput from './forms/Form_message.tsx';
import './Enterance.css'

function Change_password() {
    useEffect(() => {
        document.title = "Change_password";
    }, []);

    const validInput=(event: React.FormEvent) => {(event.target as HTMLInputElement).setCustomValidity('')}

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="change_password-form" onSubmit={submitHandler}>
                        <div className="margin4p" />
                        <h1>Change password</h1>
                        <div className="margin4p" />
                        <input className="inputplace" type="password" name="pass1" placeholder="Enter new password" required pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,45}" onInvalid={invalidInput} onInput={validInput} title="The password must contain one uppercase letter, one lowercase letter, a number, and one of these special characters! &quot; @ # $ % ^ & * &quot;. Minimum length - 8 symbols." />
                        <div className="margin03" />
                        <input className="inputplace" type="password" name="pass2" placeholder="Repeat password" required pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,45}" onInvalid={invalidInput} onInput={validInput} title="Please repeat the password" />
                        <div className="margin4p" />
                        <Submit text="Change password" style="button_autorisation" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Change_password