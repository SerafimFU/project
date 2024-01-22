/*
import { NavLink, useLocation } from 'react-router-dom'
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

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            login: { value: string };
            pass: { value: string };
            name: { value: string };
            surname: { value: string };
            email: { value: string };
            phone: { value: string };
            pass1: { value: string };
            pass2: { value: string };
        };
       
        if (location.pathname === "/autorisation") {
            const login = target.login.value;
            const pass = target.pass.value;
            console.log(login);
            console.log(pass);

            const response = await fetch('http://localhost:3000', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                login: login,
                password: pass,
            })
            });

            if(response.ok) {
                console.log(await response.json())
            } else {
                console.log(response.status)
            }
        }

        if (location.pathname === "/registration") {
            const name = target.name.value;
            const surname = target.surname.value;
            const email = target.email.value;
            const phone = target.phone.value;
            const pass1 = target.pass1.value;
            const pass2 = target.pass2.value;
            console.log(name);
            console.log(surname);
            console.log(email);
            console.log(phone);
            console.log(pass1);
            console.log(pass2);

            const response = await fetch('http://localhost:3000', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                surname: surname,
                email: email,
                phone_nomber: phone,
                password: pass1,
            })
            });

            if(response.ok) {
                console.log(await response.json())
            } else {
                console.log(response.status)
            }
        }
        
        console.log(location.pathname)
    }

    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col">
                    <form className="enterbox mx-auto" onSubmit={submitHandler}>
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
                                <NavLink to="/forgot_password" className="link">Forgot password?</NavLink>
                                <div className="margin01" />
                                <NavLink to="/registration" className="link">Create new account</NavLink>
                            </>
                        }
                        {location.pathname === "/registration" && 
                            <>
                                <div className="margin01" />
                                <h1>Sign up</h1>
                                <div className="margin03" />
                                <input className="inputplace0" type="text" name="name" placeholder="Name" />
                                <input className="inputplace0" type="text" name="surname" placeholder="Surname" />
                                <input className="inputplace" type="text" name="email" placeholder="Email" />
                                <input className="inputplace" type="text" name="phone" placeholder="Phone number" />
                                <input className="inputplace" type="password" name="pass1" placeholder="Password" />
                                <input className="inputplace" type="password" name="pass2" placeholder="Repeat password" />
                                <Submit text="Sign up" style="button_autorisation" />
                                <div className="margin2p" />
                                <NavLink to="/autorisation" className="link">Log in</NavLink>
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
                                <NavLink to="/autorisation" className="link">Log in</NavLink>
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

export default Enterform */