async function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            login: { value: string };
            pass: { value: string };
        }
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

export default submitHandler
