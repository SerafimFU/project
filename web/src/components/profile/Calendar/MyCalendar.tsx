import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './MyCalendar.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="calendar">
      <Calendar onChange={onChange} 
      value={value} 
      showNavigation={true}
      locale='EN'
      defaultView='month'
      maxDate={new Date(2024, 6, 30)}
      minDate={new Date(2024, 5, 1)}
      />
    </div>
  );
}

export default MyCalendar