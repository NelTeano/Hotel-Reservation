import React from 'react'
import { Link } from 'react-router-dom';
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

import Navigation from '../Navigation'
import Editbox from '../Editbox'
import Footer from '../Footer'

import '../styles/Calendar.css'

export default function DatePicker({
    arriveDate, setArriveDate,
    departDate, setDepartDate,
    guests,     setGuests
})
{
    const [calendarBorder, setCalendarBorder] = React.useState('solid black 1px');
    const [guestDropBoxBorder, setGuestDropBoxBorder] = React.useState('solid black 1px');

    React.useEffect(() => {
        setGuests(0);
        setArriveDate((new Date()).toLocaleDateString());
        setDepartDate((new Date()).toLocaleDateString());
        console.log('test load date picker');
    }, [setGuests, setArriveDate, setDepartDate]);
    
    const spacer = {
        background: 'linear-gradient(180deg, #FFFFFF 2%, #FFF5EB 100%)',
        height: '20vh',
        widht: '100%'
    }

    const checkProceed = (e) => {
        if (new Date(arriveDate) >= new Date(departDate)) {
            e.preventDefault();
            setCalendarBorder('solid red 3px');
            return;
        } else if (guests <= 0) {
            e.preventDefault();
            setGuestDropBoxBorder('solid red 3px')
            return;
        }
    }

    return (
        <>
            <Navigation />
            <Editbox arriveDate={arriveDate} departDate={departDate} previousPage={'/'} />
                <div className='calendar-container'>
                    <div className='calendar-box'>

                        <div style={{borderBottom: 'solid black 1px', backgroundColor: '#FFF5EB'}}>
                            <h1>SELECT YOUR DATES</h1>
                        </div>

                        <div className='calendars' style={{border: calendarBorder}}>
                            <div>
                                <p>Arriving Date </p>
                                <ReactCalendar onChange={(value) => {
                                    setCalendarBorder('solid black 1px');
                                    setArriveDate(value.toLocaleDateString())
                                }} />
                            </div>

                            <div>
                            <p>Depart Date </p>
                                <ReactCalendar onChange={(value) => {
                                    setCalendarBorder('solid black 1px');
                                    setDepartDate(value.toLocaleDateString())
                                }} />
                            </div> 
                        </div>

                        <div className='guest-container'>
                            <p>Number of Guest :</p>
                            <select
                                onChange={(e) => {
                                    setGuestDropBoxBorder('solid black 1px')
                                    setGuests(e.target.value)
                                }}
                                
                                style={{border:guestDropBoxBorder}}>
                                <option key={0} value={1}>---</option>
                                <option key={1} value={1}>{1}</option>
                                <option key={2} value={2}>{2}</option>
                                <option key={3} value={3}>{3}</option>
                                <option key={4} value={4}>{4}</option>
                                <option key={5} value={5}>{5}</option>
                                <option key={6} value={6}>{6}</option>
                            </select>
                        </div>

                        <Link to='/rooms' onClick={checkProceed} className="viewrooms-btn">
                            View Rooms ➡
                        </Link>
                        
                    </div>
                </div>
                <div style={spacer} ></div>
            <Footer />
        </>
    )
}
 



