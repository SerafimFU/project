import { useEffect } from 'react';
import Button from '../Button.tsx'
import './Autorisation.css'

function Autorisation() {
    useEffect(() => {
        document.title = "Autorisation";
      }, []);

    return (
        <>
            <div className="container-fluid text-center">
                <div className="row margin15"></div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-12 col-md-4">
                        <div className="enterbox mx-auto">
                            <div className="margin03" />
                            <h1>Welcome back</h1>
                            <input className="inputplace" type="text" name="" placeholder="Email or phone number" />
                            <input className="inputplace" type="password" name="" placeholder="Password" />
                            <Button text="Log in" style="button_autorisation" link="/" />
                        </div>
                    </div>  
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>
      )
}

export default Autorisation