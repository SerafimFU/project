/* Функция вывода ошибок */

/* Props компонента */
type AuthProps = {
    displayError: string;
}

function ErrorMessage(props: AuthProps) {

    if (props.displayError != '') {
        if (props.displayError === '1') {
            return <div id="errorWrapper" className="errors mx-auto">No conection to server</div>
        } else {
            return <div id="errorWrapper" className="errors mx-auto">{props.displayError}</div>
        }
    }
}

export default ErrorMessage
