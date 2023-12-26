import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import Submit from '../Submit.tsx'
import './Enterform.css'

function Enterform() {
    useEffect(() => {
        if(location.pathname === "/autorisation") {
            document.title = "Autorisation";
        }
        if(location.pathname === "/registration") {
            document.title = "Registration";
        }
        if(location.pathname === "/forgot_password") {
            document.title = "Forgot_password";
        }
        if(location.pathname === "/change_password") {
            document.title = "Change_password";
        }
    }, []);
    let location = useLocation();


    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" action="">
                        {location.pathname === "/autorisation" && 
                            <>  
                                <div className="margin03" />
                                <h1>Wellcome back</h1>
                                <div className="margin05" />
                                <input className="inputplace" type="text" name="login" placeholder="Email or phone number" />
                                <input className="inputplace" type="password" name="pass" placeholder="Password" />
                                <div className="margin4p" />
                                <Submit text="Log in" style="button_autorisation" />
                                <div className="margin4p" />
                                <a href="/forgot_password" className="link">Forgot password?</a>
                                <div className="margin01" />
                                <a href="/registration" className="link">Create new account</a>
                            </>
                        }
                        {location.pathname === "/registration" && 
                            <>
                                <div className="margin01" />
                                <h1>Sign up</h1>
                                <div className="margin03" />
                                <input className="inputplace0" type="text" name="name" placeholder="Name" />
                                <input className="inputplace0" type="text" name="surname" placeholder="Surname" />
                                <input className="inputplace" type="text" name="login" placeholder="Email" />
                                <input className="inputplace" type="text" name="login" placeholder="Phone number" />
                                <input className="inputplace" type="password" name="pass" placeholder="Password" />
                                <input className="inputplace" type="password" name="pass" placeholder="Repeat password" />
                                <Submit text="Sign up" style="button_autorisation" />
                                <div className="margin2p" />
                                <a href="/autorisation" className="link">Log in</a>
                            </>
                        }
                        {location.pathname === "/forgot_password" && 
                            <>
                                <div className="margin03" />
                                <h1>Forgot your password?</h1>
                                <div className="margin05" />
                                <input className="inputplace" type="text" name="login" placeholder="Enter your Email" />
                                <div className="inf">We will send a link to change your password to your Email</div>
                                <div className="margin4p" />
                                <Submit text="Change password" style="button_autorisation" />
                                <div className="margin2p" />
                                <a href="/autorisation" className="link">Log in</a>
                            </>
                        }
                        {location.pathname === "/change_password" && 
                            <>
                                <div className="margin4p" />
                                <h1>Change password</h1>
                                <div className="margin4p" />
                                <input className="inputplace" type="password" name="pass" placeholder="Enter new password" />
                                <div className="margin03" />
                                <input className="inputplace" type="password" name="pass" placeholder="Repeat password" />
                                <div className="margin4p" />
                                <Submit text="Change password" style="button_autorisation" />
                            </>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Enterform