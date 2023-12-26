function Button(props: {text: string, style: string, path: string}) {
    return (
        <a href={props.path}>
            <button className={props.style}>
                {props.text}
            </button>
        </a>
    )
}

export default Button
