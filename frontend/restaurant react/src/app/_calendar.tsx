"use client"

import { useState } from 'react';
import Calendar from 'react-calendar';
import './home.css';
import 'react-calendar/dist/Calendar.css';

function Calendario() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>

      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      <p className='text-center'>
        <span className='bold'></span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}

export default Calendario;