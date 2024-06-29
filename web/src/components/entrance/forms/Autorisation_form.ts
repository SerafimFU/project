/* Функция Logoin-а */

/* Объявление массива для таймера */
let timer: Array<number> = [];

async function SubmitHandler(event: React.FormEvent, handlyLogin: () => any, setDisplayError: (value: string) => void, setToken: any, setAvatar: (value: string) => void) {
    event.preventDefault();

    /* Остановка таймера */
    timer.forEach((value) => clearTimeout(value))
    timer.length = 0;

    /* Прием значений полей формы */
    const target = event.target as typeof event.target & {
        login: { value: string };
        pass: { value: string };
    }
    const login = target.login.value;
    const pass = target.pass.value;
    console.log(login); /* Trash */
    console.log(pass); /* Trash */
    
    /* Отправка значений на сервер */
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
    
    /* Если ответ OK получаем токен */
    if(response.status == 201) {
        console.log(response); /* Trash */
        const res = (await response.json());
        setToken(res.token);
        if (res.avatar != null) {
            setAvatar(`${res.avatar.path}/${res.avatar.filename}.${res.avatar.filename_extension}`);
        }
        handlyLogin();
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
        const timerID = setTimeout(() => setDisplayError(''), 3000) 
        timer.push(timerID);
    }
        
}

export default SubmitHandler
