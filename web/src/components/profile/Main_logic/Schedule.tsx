/* Функция вывода расписания */

function Schedule(serverData: any) {

    /* Объявление переменных */
    const data = serverData.serverData;
    const length = data.length;
    console.log(data)  

    let li = [];

    for (let count = 0; count < length; count++) {
        li.push(
            <div key={count} className="lessonplace">
                <div className={((data[count].type == 1) ? "lesson1" : ((data[count].type == 2) ? "lesson2" : ((data[count].type == 3) ? "lesson3" : "lesson4")))}>
                    <div className="subject">{data[count].subject}</div>
                    <div className="lessonTime">{data[count].lessonTime.slice(0, -3)}</div>
                    <div className="lessonTime">{data[count].teacher}</div>
                    <div className="row lessonTime">
                        <div className="col-6">{'Сlassroom: ' + data[count].place}</div>
                        <div className="col-6">{'Group: ' + data[count].group_id}</div>
                    </div>
                    <div className="lessonTheme">{data[count].theme}</div>
                </div>
            </div>
        );
    }
    return li;
}

export default Schedule