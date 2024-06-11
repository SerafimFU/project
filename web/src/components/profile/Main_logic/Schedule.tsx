/* Функция вывода расписания */

function Schedule(serverData: any) {

    const lenth = serverData.serverData.length;
    
    let li = [];

    for (let count = 0; count < lenth; count++) {
        li.push(<div key={count} className="lessonplace"><div className="lesson">fkkgdkkdsk</div></div>);
    }
    return li;
}

export default Schedule