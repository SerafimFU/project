/* Функция изменения данных пользователя */

/* Объявление массива для таймера */
let timer: Array<number> = [];

async function SubmitHandlerProfile(event: React.FormEvent, setDisplayError: (value: string) => void, token: string, handleLogout: () => void, setToken: any, pdata: any) {
    event.preventDefault();

    /* Остановка таймера */
    timer.forEach((value) => clearTimeout(value))
    timer.length = 0;
    
    /* Прием значений полей формы */
    const target = event.target as typeof event.target & {
        email: { value: string };
        phone: { value: string };
        pass1: { value: string };
    }
    let email = target.email.value;
    let phone = target.phone.value;
    const password = target.pass1.value;
    console.log(email); /* Trash */
    console.log(phone); /* Trash */
    console.log(password); /* Trash */
    if(email === pdata.email) {
        email = ''
    }
    if(phone === pdata.phone) {
        phone = ''
    }

    /* Отправка значений на сервер */
    if(token != null) {
        if((email != '') || (phone != '')) {
            const response = await fetch('http://localhost:3000/auth/edit_profile', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization':  'Bearer ' + token,
            },
            body: JSON.stringify({
                email: email,
                phone_number: phone,
                password: password,
            })
            });
            
            /* Здесь надо добавить редирект */
            console.log(response) /* Trash */
            if(response.status == 201) {
                setDisplayError('Done')
                setToken(await response.json())
            } else { 
                if ((response.status == 404) || (response.status == 500)) {
                    setDisplayError('');
                    setDisplayError('1');
                } else {
                    console.log(response.status) /* Trash */
                    if (response.status == 401) {
                        handleLogout()
                        console.log('Token has expired') /* Trash */
                    } else {
                        const serverResponse = await response.json()
                        setDisplayError('');
                        setDisplayError(serverResponse.message);
                    }
                }
            } 
        } else {
            setDisplayError('There is no updates')
        }
    } else {
        handleLogout()
        console.log('Pass error') /* Trash */
    }
    /* Установка таймера */
    const timerID = setTimeout(() => setDisplayError(''), 3000) 
    timer.push(timerID);
}

export default SubmitHandlerProfile