/* Функция регистрации пользователя */

/* Объявление массива для таймера */
let timer: Array<number> = [];

async function SubmitHandler(event: React.FormEvent, setDisplayError: (value: string) => void) {
    event.preventDefault();

     /* Остановка таймера */
     timer.forEach((value) => clearTimeout(value))
     timer.length = 0;
    
    /* Прием значений полей формы */
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
    console.log(name); /* Trash */
    console.log(surname); /* Trash */
    console.log(email); /* Trash */
    console.log(phone); /* Trash */
    console.log(pass1); /* Trash */
    console.log(pass2); /* Trash */

    /* Отправка значений на сервер */
    if(pass1 === pass2) {
        const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: name,
            surname: surname,
            email: email,
            phone_number: phone,
            password: pass1,
        })
        });
        
        /* Здесь надо добавить редирект */
        if(response.status == 201) {
            setDisplayError('Done')
        } else { 
            if ((response.status == 404) || (response.status == 500)) {
                setDisplayError('1')
            } else {
                const serverResponse = await response.json()
                setDisplayError(serverResponse.message);
            }
            /* Установка таймера */
            const timerID = setTimeout(() => setDisplayError(''), 3000) 
            timer.push(timerID);
        }
    }  else {
        /* Ошибка идентичности паролей */
        target.pass2.value = ""
        target.pass2.placeholder = "Passwords are not the same"
        target.pass2.className = "inputplacepass2"
    }
}

export default SubmitHandler