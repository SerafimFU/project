/* Функция смены отображаемого дня в календаре */

async function ChangeDay(day: any, handlyLogout: () => any, token: string, setServerData: any) {
    
    let Day = day.getDate();
    let month = day.getMonth() + 1;
    let year = day.getFullYear();
    let date = `${year}-${month}-${Day}`;
    console.log(date)

    /* Если токен сохранен отправляем запрос о переходе */
    if (token != null) {
        const response = await fetch('http://localhost:3000/auth/profile/timetable', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization':  'Bearer ' + token,
        },
        body: JSON.stringify({
            data: date,
        })
        });
        
        console.log(date)
        /* Здесь надо добавить обработку ошибок */
        if(response.ok) {
            console.log(response) /* Trash */
            const a = (await response.json()) 
            setServerData(a.data)
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

export default ChangeDay