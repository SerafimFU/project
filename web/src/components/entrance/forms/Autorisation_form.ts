async function SubmitHandler(event: React.FormEvent, handlyLogin: () => any, setDisplayError: (value: number) => void, setToken: any) {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            login: { value: string };
            pass: { value: string };
        }
        const login = target.login.value;
        const pass = target.pass.value;
        console.log(login);
        console.log(pass);
        
        const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: login,
            password: pass,
        })
        });
    
        if(response.ok) {
            console.log(response),
            handlyLogin()
            setToken(await response.json())
        } else {
            console.log(response.status)
            if (response.status == 401) {
                console.log('Non Autorisative')
                setDisplayError(1);
            }
            else {
                console.log('Non Conect')
                setDisplayError(2);
            }
        }
        
}

export default SubmitHandler
