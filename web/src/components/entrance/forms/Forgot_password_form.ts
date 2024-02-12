async function SubmitHandler(event: React.FormEvent, setDisplayError: (value: number) => void) {
    event.preventDefault();
    const target = event.target as typeof event.target & {
        email: { value: string };
    }
    const email = target.email.value;
    console.log(email);

    const response = await fetch('http://localhost:3000', {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        email: email,
    })
    });

    if(response.ok) {
        console.log(await response.json())
    } else {
        console.log(response.status)
        setDisplayError(4)
    }
}

export default SubmitHandler