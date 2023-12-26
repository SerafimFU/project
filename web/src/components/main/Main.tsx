import { useEffect } from 'react';
import Button from '../Button.tsx'
import './Main.css'

function Main() {
    useEffect(() => {
        document.title = "Entrance";
    }, []);

    return (
        <>
            <div className="container-fluid text-center">
                <div className="margin1"></div>
                <div className="row">
                  <h1 className="Uname">RBK University</h1>
                </div>
                <div className="row margin2">
                    <div className="col">
                        <div className="row">
                            <div className="col-3 col-md-5"></div>
                            <div className="col-9 col-md-7">
                                <Button text="Log in" style="button_entrance" path="/autorisation" />
                            </div>
                        </div>  
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col-9 col-md-7">
                                <Button text="Sign up" style="button_entrance" path="/registration" />
                            </div>
                            <div className="col-3 col-md-5"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
      )
}

export default Main
