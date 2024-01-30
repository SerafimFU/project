type AuthProps = {
    displayError: number;
}

function ErrorMessage(props: AuthProps) {
    if (props.displayError === 1) {
        return <div className="errors mx-auto">Incorrect login or password</div>
    }
    if (props.displayError === 2) {
        return <div className="errors mx-auto">No conection to server</div>
    }
    if (props.displayError === 3) {
        return <div className="errors mx-auto">Passwords are not the same</div>
    }
}

export default ErrorMessage