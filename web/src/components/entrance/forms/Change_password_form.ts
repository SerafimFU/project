/* Функция смены пароля */

/* Объявление массива для таймера */
let timer: Array<number> = [];

async function SubmitHandler(event: React.FormEvent, setDisplayError: (value: string) => void) {
    event.preventDefault();

    /* Остановка таймера */
    timer.forEach((value) => clearTimeout(value))
    timer.length = 0;

    /* Прием значений полей формы */
    const target = event.target as typeof event.target & {
        pass1: { value: string };
        pass2: { value: string, placeholder: string, className: string };
    }
    const pass1 = target.pass1.value;
    const pass2 = target.pass2.value;
    console.log(pass1); /* Trash */
    console.log(pass2); /* Trash */

    /* Отправка значений на сервер */
    /* Здесь надо настроить сервер под это событие */
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

        if(response.ok) {
            console.log(await response.json())
            setDisplayError('Password has been changed');
        } else {
            if ((response.status == 404) || (response.status == 500)) {
                setDisplayError('');
                setDisplayError('1');
            } else {
                const serverResponse = await response.json()
                setDisplayError('');
                setDisplayError(serverResponse.message);
            }
            /* Установка таймера */
            setTimeout(() => setDisplayError(''), 3000)
        }
    }  else {
        /* Ошибка идентичности паролей */
        target.pass2.value = ""
        target.pass2.placeholder = "Passwords are not the same"
        target.pass2.className = "inputplacepass2"
    }
    /* Установка таймера */
    const timerID = setTimeout(() => setDisplayError(''), 3000) 
    timer.push(timerID);
}

export default SubmitHandler