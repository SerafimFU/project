import { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import Submit from '../../../Submit'
import SubmitHandlerAvatar from './EditAvatarLogic'
import ChangePlace from '../ChangePlace'
import ErrorMessage from '../../../entrance/forms/FormMessages/ErrorMessage'
import '../../../entrance/Enterance.css'
import '../../Profile.css'

/* Функция смены аватара */

/* Props компонента */
type AuthProps = {
    setDisplayError (value: string) : void
    displayError: string;
    token: string
    handleLogout: () => void
    setServerData: any
    setToken: any
}

function EditAvatar(props: AuthProps) { 

    /* Константы изображения */
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState(Object)

    /* Смена заголовка вкладки в браузере загрузка изображения */
    useEffect(() => {
        document.title = "Change Avatar";

        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile]);

    /* Обнуление изображения */
    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }

    /* Навигация при перенаправлении */
    const navigate = useNavigate();

    /* Декодирование полученных из токена данных */
    interface JwtPayload {email: string, phone: string};
    let pdata = jwtDecode(props.token) as JwtPayload;

    /* Обработка оправки формы */
    const submitForm = (event: React.FormEvent) => {
        SubmitHandlerAvatar(event, props.setDisplayError, props.token, props.handleLogout, props.setToken, pdata)
    }

    /* Обработка события ChangePlace */
    const ChangePlaceLink = (event: React.FormEvent) => {
        ChangePlace(event, props.handleLogout, props.token, navigate, props.setServerData)
    }

    return(
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" id="registration-form" onSubmit={submitForm}>
                        <div className="margin01" />
                        <h1>Change Avatar</h1>
                        <div className="margin02" />
                        <label className="input_block">
                            Choose images to upload<br/>(PNG, JPG)
                            <input type="file" accept=".jpg, .jpeg, .png" className="photo_input" onChange={onSelectFile} />
                        </label>
                        <div className={(!selectedFile ? "photo_box" : "photo_box2" )}>{(!selectedFile ? <div className="photo_box_text">Your avatar preview</div> : selectedFile && <img src={preview} className="photo" /> )}</div>
                        <Submit text="Confirm" style="button_autorisation" />
                        <div className="margin2p" />
                        <button className="inbutton" onClick={ChangePlaceLink} id="/edit_password">Do you want to change password?</button>
                        <button className="inbutton" onClick={ChangePlaceLink} id="/profile">Return to Profile</button>
                    </form>
                    <ErrorMessage displayError={props.displayError} />
                </div>
            </div>
        </div>
    )
}

export default EditAvatar