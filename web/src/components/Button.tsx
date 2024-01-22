import { NavLink } from "react-router-dom"

function Button(props: {text: string, style: string, path: string}) {
    return (
        <NavLink to={props.path}>
            <button className={props.style}>
                {props.text}
            </button>
        </NavLink>
    )
}

export default Button
