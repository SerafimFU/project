function Button(props: {text: string, style: string, link: string}) {
    return (
        <a href={props.link}>
            <button className={props.style}>
                {props.text}
            </button>
        </a>
    )
}

export default Button
