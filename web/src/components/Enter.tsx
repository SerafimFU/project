import { useEffect } from 'react';


function Enter() {

    useEffect(() => {
        document.addEventListener("keydown", detectKeyDown, true)
    }, [])

    let a: string = ''
    const detectKeyDown = (e: { key: any; }) => {
        
        console.log(e.key)
        a = e.key
        if(e.key === "Enter") {
            console.log("pressed " + e.key) 
        }
    }

    return (
      <div>
        <h2>hello world {a}</h2>
      </div>
    );
};
  
export default Enter