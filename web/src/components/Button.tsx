import './Button.css'

function Button(props: {text: string}) {
    return (
        <button className="button">
            {props.text}
        </button>
    )
}

export default Button