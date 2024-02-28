/* Функция оправки запроса смены пароля */

async function SubmitHandler(event: React.FormEvent, setDisplayError: (value: string) => void) {
    event.preventDefault();

    /* Прием значений полей формы */
    const target = event.target as typeof event.target & {
        email: { value: string };
    }
    const email = target.email.value;
    console.log(email); /* Trash */

    /* Отправка значений на сервер */
    /* Здесь надо настроить сервер под это событие */
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
        if ((response.status == 404) || (response.status == 500)) {
            setDisplayError('1')
        } else {
            const serverResponse = await response.json()
            setDisplayError(serverResponse.message);
        }
        /* Установка таймера */
        setTimeout(() => setDisplayError(''), 3000)
    }
}

export default SubmitHandler