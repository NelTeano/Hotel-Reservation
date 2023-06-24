import React from 'react';
import { Link } from 'react-router-dom';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Navigation from '../components/Navigation';
import Editbox from '../components/Editbox';
import Footer from '../components/Footer';

import '../assets/DatePicker.css';

export default function DatePicker({ arriveDate, setArriveDate, departDate, setDepartDate, guests, setGuests }) {
  const [calendarBorder, setCalendarBorder] = React.useState('solid black 1px');
  const [selectionBorder, setSelectionBorder] = React.useState('solid black 1px');

  React.useEffect(() => {
    setGuests(0);
    setArriveDate(new Date().toLocaleDateString());
    setDepartDate(new Date().toLocaleDateString());
    console.log('test load date picker');
  }, [setGuests, setArriveDate, setDepartDate]);

  const spacer = {
    background: 'linear-gradient(180deg, #FFFFFF 2%, #FFF5EB 100%)',
    height: '20vh',
    widht: '100%',
  };

  const checkProceed = e => {
    if (new Date(arriveDate) >= new Date(departDate)) {
      e.preventDefault();
      setCalendarBorder('solid red 3px');
      return;
    } else if (guests <= 0) {
      e.preventDefault();
      setSelectionBorder('solid red 3px');
      return;
    }
  };

  return (
    <>
      <Navigation />
      <Editbox arriveDate={arriveDate} departDate={departDate} previousPage={'/'} />
      <div className='calendar-container'>
        <div className='calendar-box'>
          <div
            style={{
              borderBottom: 'solid black 1px',
              backgroundColor: '#FFF5EB',
            }}
          >
            <h1>SELECT YOUR DATES</h1>
          </div>

          <div className='calendars' style={{ border: calendarBorder }}>
            <div>
              <p>Arriving Date </p>
              <ReactCalendar
                onChange={value => {
                  setCalendarBorder('solid black 1px');
                  setArriveDate(value.toLocaleDateString());
                }}
              />
            </div>

            <div>
              <p>Depart Date </p>
              <ReactCalendar
                onChange={value => {
                  setCalendarBorder('solid black 1px');
                  setDepartDate(value.toLocaleDateString());
                }}
              />
            </div>
          </div>

          <div className='guest-container'>
            <p>Number of Guest :</p>
            <select
              onChange={e => {
                setSelectionBorder('solid black 1px');
                setGuests(e.target.value);
              }}
              style={{ border: selectionBorder }}
            >
              <option key={0} value={1} label='---' />
              <option key={1} value={1} label='1' />
              <option key={2} value={2} label='2' />
              <option key={3} value={3} label='3' />
              <option key={4} value={4} label='4' />
              <option key={5} value={5} label='5' />
              <option key={6} value={6} label='6' />
            </select>
          </div>

          <Link to='/rooms' onClick={checkProceed} className='viewrooms-btn'>
            View Rooms ➡
          </Link>
        </div>
      </div>
      <div style={spacer}></div>
      <Footer />
    </>
  );
}
