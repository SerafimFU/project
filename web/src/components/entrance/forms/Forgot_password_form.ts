/* Функция оправки запроса смены пароля */

/* Объявление массива для таймера */
let timer: Array<number> = [];

async function SubmitHandler(event: React.FormEvent, setDisplayError: (value: string) => void) {
    event.preventDefault();

    /* Остановка таймера */
    timer.forEach((value) => clearTimeout(value))
    timer.length = 0;

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
            setDisplayError('');
            setDisplayError('1');
        } else {
            const serverResponse = await response.json()
            setDisplayError('');
            setDisplayError(serverResponse.message);
        }
    }
    /* Установка таймера */
    const timerID = setTimeout(() => setDisplayError(''), 3000) 
    timer.push(timerID);
}

export default SubmitHandler