/* Функция вывода расписания */

function Schedule(serverData: any) {

    const length = serverData.serverData.length;
    console.log(length)
    console.log(serverData.serverData)
    console.log(serverData.serverData.length)
    console.log(serverData.serverData[0])
    
    let li = [];

    for (let count = 0; count < length; count++) {
        li.push(
            <div key={count} className="lessonplace">
                <div className={((serverData.serverData[count].type == 1) ? "lesson1" : ((serverData.serverData[count].type == 2) ? "lesson2" : "lesson3"))}>
                    <div className="subject">{serverData.serverData[count].subject}</div>
                    <div className="lessonTime">{serverData.serverData[count].lessonTime.slice(0, -3)}</div>
                    <div className="lessonTime">{serverData.serverData[count].teacher}</div>
                    <div className="row lessonTime">
                        <div className="col-6">{'Сlassroom: ' + serverData.serverData[count].place}</div>
                        <div className="col-6">{'Group: ' + serverData.serverData[count].group_id}</div>
                    </div>
                    <div className="lessonTheme">{serverData.serverData[count].theme}</div>
                </div>
            </div>
        );
    }
    return li;
}

export default Schedule