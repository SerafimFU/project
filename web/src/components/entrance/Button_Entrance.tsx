import './Button_Entrance.css'

function Button(props: {text: string, link: string}) {
    return (
        <a href={props.link}>
            <button className="button">
                {props.text}
            </button>
        </a>
    )
}

export default Button
