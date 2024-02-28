/* Компонент отправки формы */

function Submit(props: {text: string, style: string}) {
    return (
        <input className={props.style} type="submit" name="sended" value={props.text} />
    )
}

export default Submit
