import React from 'react'
import Footer from '../footer'
import Navbar from '../navigation2'
import EditBox from '../editbox'

import Calendar from 'react-calendar'
// https://www.npmjs.com/package/react-calendar

import '../styles/calendar.css'
import { Link } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';




export default function calendar({
    arriveDate, setArriveDate,
    departDate, setDepartDate,
    setGuests
})

   
    {
        
            const spacer = {
              background: 'linear-gradient(180deg, #FFFFFF 2%, #FFF5EB 100%)',
              height: '20vh',
              widht: '100%'
    }
        return (
            
            <>
                <Navbar />
                <EditBox arriveDate={arriveDate} departDate={departDate} previousPage={'/'} />
                    <div className='calendar-container'>
                        <div className='calendar-box'>

                            <div style={{borderBottom: 'solid black 1px', backgroundColor: '#FFF5EB'}}>
                                <h1>SELECT YOUR DATES</h1>
                            </div>

                            <div className='calendars'>
                                <div>
                                    <p>Arriving Date </p>
                                    <Calendar />
                                </div>

                                <div>
                                <p>Depart Date </p>
                                    <Calendar />
                                </div> 
                            </div>

                            <div className='guest-container'>
                                <p>Number of Guest :</p>
                                    <select onChange={(e) => setGuests(e.target.value)}>
                                        <option key={0} value={1}>---</option>
                                        <option key={1} value={1}>{1}</option>
                                        <option key={2} value={2}>{2}</option>
                                        <option key={3} value={3}>{3}</option>
                                        <option key={4} value={4}>{4}</option>
                                        <option key={5} value={5}>{5}</option>
                                        <option key={6} value={6}>{6}</option>
                                    </select>
                            </div>

                            
                                <Link to='/rooms' className="viewrooms-btn">
                                    View Rooms ➡
                                </Link>
                            
                        </div>
                    </div>
                    <div style={spacer} ></div>
                <Footer />
            </>
          )

     }
 



