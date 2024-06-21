import { useState } from 'react'
import Calendar from 'react-calendar'
import ChangeDay from '../Main_logic/ChangeDay'
import 'react-calendar/dist/Calendar.css'
import './MyCalendar.css'

/* Календарь React */

/* Props компонента */
type AuthProps = {
  handleLogout: () => void
  token: string
  setServerData: any
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyCalendar(props: AuthProps) {
  const [value, onChange] = useState<Value>(new Date());

  const ChangeDayCalendar = (day: any) => {
    ChangeDay(day, props.handleLogout, props.token, props.setServerData)
  }

  return (
    <div className="calendar">
      <Calendar onChange={onChange} onClickDay={(day) => ChangeDayCalendar(day)}
      value={value} 
      showNavigation={true}
      locale='EN'
      defaultView='month'
      //maxDate={new Date(2024, 6, 30)}
      minDate={new Date(2024, 5, 1)}
      />
    </div>
  );
}

export default MyCalendar