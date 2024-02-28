import { useEffect } from 'react';
import Submit from '../Submit.tsx'
import SubmitHandler from './forms/Change_password_form.ts'
import InvalidInput from './forms/FormMessages/InputErrorMessage.ts'
import ErrorMessage from './forms/FormMessages/ErrorMessage.tsx';
import './Enterance.css'

/* Компонент страницы смены пароля */

/* Props компонента */
type AuthProps = {
    setDisplayError (value: string) : void
    displayError: string;
}

function Change_password(props: AuthProps) {

    /* Смена заголовка вкладки в браузере */
    useEffect(() => {
        document.title = "Change_password";
        props.setDisplayError('');
    }, []);
    
    /* Константа валидного ввода данных формы */
    const validInput=(event: React.FormEvent) => {(event.target as HTMLInputElement).setCustomValidity('')}

    /* Обработка оправки формы */
    const submitForm = (event: React.FormEvent) => {
        SubmitHandler(event, props.setDisplayError)
    }

    /* Форма смены пароля */
    function SuccessMessage() {
        if (props.displayError === 'Password has been changed') {
            return <div className="update mx-auto">Password has been changed<br/>You can close this page</div>
        } else {
            return (
                <>
                    <div className="margin4p" />
                    <h1>Change password</h1>
                    <div className="margin4p" />
                    <input className="inputplace" type="password" name="pass1" placeholder="Enter new password" required pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,45}" onInvalid={InvalidInput} onInput={validInput} title="The password must contain one uppercase letter, one lowercase letter, a number, and one of these special characters! &quot; @ # $ % ^ & * &quot;. Minimum length - 8 symbols." />
                    <div className="margin4p" />
                    <input className="inputplace" type="password" name="pass2" placeholder="Repeat password" required pattern="(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,45}" onInvalid={InvalidInput} onInput={validInput} title="Please repeat the password" />
                    <div className="margin4p" />
                    <Submit text="Change password" style="button_autorisation" />
                </>
            )
        }
    }

    /* Вывод страницы */
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="change_password-form" onSubmit={submitForm}>
                       <SuccessMessage />
                    </form>
                    <ErrorMessage displayError={props.displayError} />
                </div>
            </div>
        </div>
    )
}

export default Change_password