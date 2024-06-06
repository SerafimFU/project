/* Функция перехода между страницами авторизованного пользователя */

async function ChangePlace(event: React.FormEvent, handlyLogout: () => any, token: string, navigate: (value: any) => any) {
    event.preventDefault();

    /* Прием пути, который передается как ID текущего объекта */
    const target = event.currentTarget as typeof event.currentTarget
    console.log(target.id) /* Trash */

    /* Формирование адреса запроса */
    const A = 'http://localhost:3000/auth';
    const B = target.id;

    /* Если токен сохранен отправляем запрос о переходе */
    if (token != null) {
        const response = await fetch((A + B), {
        method: 'GET',
        headers: {
            'Authorization':  'Bearer ' + token
        }});

        /* Здесь надо добавить обработку ошибок */
        if(response.ok) {
            console.log(response); /* Trash */
            navigate(target.id);
        } else {
            console.log(response.status) /* Trash */
            if (response.status == 401) {
                handlyLogout()
                console.log('Token has expired') /* Trash */
            }
        }
    /* Если токен не сохранен разлогиниваемся */
    } else {
        handlyLogout()
        console.log('Pass error') /* Trash */
    }
}

export default ChangePlace