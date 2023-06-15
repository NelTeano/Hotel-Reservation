import React from 'react'
import Navbar from '../navigation2'
import EditBox from '../editbox'
import Footer from '../footer'
import { Link } from 'react-router-dom';

import availableRooms from '../dev-data/available-rooms';

import '../styles/TemporaryDatePicker.css';

export default function TemporaryDatePicker({
  arriveDate, setArriveDate,
  departDate, setDepartDate,
  setGuests
}) {

  return (
    <>
      <Navbar />
      <EditBox arriveDate={arriveDate} departDate={departDate} previousPage={'/'} />
      <h3 style={{textAlign: 'center'}}>Temporary Date Picker</h3>
      <div className='mainDatePickerContainer'>
        <label>Arrive date : </label>
        <input type='date' onChange={ (e) => {
            setArriveDate((new Date(e.target.value)).toLocaleDateString());
          }
        }/>

        <label>Depart date : </label>
        <input type='date' onChange={ (e) => {
            setDepartDate((new Date(e.target.value)).toLocaleDateString());
          }
        }/>

        <label>Number of Guests : </label>

        <select onChange={(e) => setGuests(e.target.value)}>
          <option key={0} value={1}>---</option>
          <option key={1} value={1}>{1}</option>
          <option key={2} value={2}>{2}</option>
          <option key={3} value={3}>{3}</option>
          <option key={4} value={4}>{4}</option>
          <option key={5} value={5}>{5}</option>
          <option key={6} value={6}>{6}</option>
        </select>

        <Link to='/rooms' className="rooms-booknow-btn">
          View Rooms
        </Link>
      </div>
      <Footer />
    </>
    
  )
}
