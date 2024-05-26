/* Функция Logout-а */

async function LogOut(event: React.FormEvent, handlyLogout: () => any, token: string) {
    event.preventDefault();
    
    /* Если токен сохранен отправляем информацию о Logout-е на сервер */
    if (token != null) {
        const response = await fetch('http://localhost:3000/auth/logout', {
        method: 'GET',
        headers: {
            'Authorization':  'Bearer ' + token
        }});

        /* Здесь надо добавить обработку ошибок */
        if(response.ok) {
            console.log(response), /* Trash */
            handlyLogout()
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
        console.log('Logout error') /* Trash */
    }
}

export default LogOut