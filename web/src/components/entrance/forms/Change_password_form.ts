async function submitHandler(event: React.FormEvent, setDisplayError: (value: number) => void) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
        pass1: { value: string };
        pass2: { value: string, placeholder: string, className: string };
    }
    const pass1 = target.pass1.value;
    const pass2 = target.pass2.value;
    console.log(pass1);
    console.log(pass2);

    if(pass1 === pass2) {
        const response = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: pass1,
        })
        });
        
        setDisplayError(1);

        if(response.ok) {
            console.log(await response.json())
        } else {
            console.log(response.status)
        }
    }  else {
        target.pass2.value = ""
        target.pass2.placeholder = "Passwords are not the same"
        target.pass2.className = "inputplacepass2"
    }
}

export default submitHandler