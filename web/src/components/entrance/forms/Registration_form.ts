async function SubmitHandler(event: React.FormEvent, setDisplayError: (value: number) => void) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
        name: { value: string };
        surname: { value: string };
        email: { value: string };
        phone: { value: string };
        pass1: { value: string };
        pass2: { value: string, placeholder: string, className: string };
    }
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

    setDisplayError(0);

    if(pass1 === pass2) {
        const response = await fetch('http://localhost:3000', {
        method: 'POST',
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
    }  else {
        target.pass2.value = ""
        target.pass2.placeholder = "Passwords are not the same"
        target.pass2.className = "inputplacepass2"
        setDisplayError(3);
    }
}

export default SubmitHandler