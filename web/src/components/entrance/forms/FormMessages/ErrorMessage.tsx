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
    if (props.displayError === 4) {
        return <div className="errors mx-auto">User with this email doesn't exist </div>
    }
    if (props.displayError === 5) {
        return <div className="errors mx-auto">Passwords are not the same</div>
    }
    if (props.displayError === 6) {
        return <div className="errors mx-auto">Passwords are not the same</div>
    }
    if (props.displayError === 7) {
        return <div className="errors mx-auto">Passwords are not the same</div>
    }
}

export default ErrorMessage