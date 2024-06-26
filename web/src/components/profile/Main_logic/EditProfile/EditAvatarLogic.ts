/* Функция смены аватара */

/* Объявление массива для таймера */
let timer: Array<number> = [];

async function SubmitHandlerAvatar(event: React.FormEvent, setDisplayError: (value: string) => void, token: string, handleLogout: () => void, selectedFile: any) {
    event.preventDefault();

    /* Остановка таймера */
    timer.forEach((value) => clearTimeout(value))
    timer.length = 0;
    
    console.log(selectedFile); /* Trash */
    /* Отправка значений на сервер */
    if(token != null) {
        if(!selectedFile) {
            setDisplayError('File not selected')
        } else {
            console.log(selectedFile.size)
            const formData = new FormData();
            formData.append('file', selectedFile)

            const response = await fetch('http://localhost:3000/auth/change_avatar', {
            method: 'POST',
            headers: {
                'Authorization':  'Bearer ' + token,
            },
            body: formData
            });
            console.log(selectedFile)
            /* Здесь надо добавить редирект */
            console.log(response) /* Trash */
            if(response.status == 201) {
                setDisplayError('Done')
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
        }
    } else {
        handleLogout()
        console.log('Pass error') /* Trash */
    }
    /* Установка таймера */
    const timerID = setTimeout(() => setDisplayError(''), 3000) 
    timer.push(timerID);
}

export default SubmitHandlerAvatar