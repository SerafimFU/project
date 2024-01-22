async function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
        pass1: { value: string };
        pass2: { value: string, placeholder: string };
    }
    const pass1 = target.pass1.value;
    const pass2 = target.pass2.value;
    console.log(pass1);
    console.log(pass2);

    if(pass1 === pass2) {
        const response = await fetch('http://localhost:3000', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            password: pass1,
        })
        });

        if(response.ok) {
            console.log(await response.json())
        } else {
            console.log(response.status)
        }
    }  else {
        target.pass2.value = ""
        target.pass2.placeholder = "Passwords are not the same"
    }
}

export default submitHandler