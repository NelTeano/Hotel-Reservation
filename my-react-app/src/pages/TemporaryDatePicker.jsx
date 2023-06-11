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
  setPaxChild, setPaxAdult,
  setAvailableRooms}) {

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

        <label>Number of adult : </label>
        <select onChange={(e) => setPaxAdult(e.target.value)}>
          <option key={1}>{1}</option>
          <option key={2}>{2}</option>
          <option key={3}>{3}</option>
          <option key={4}>{4}</option>
          <option key={5}>{5}</option>
        </select>

        <label>Number of child : </label>
        <select defaultValue={0} onChange={(e) => setPaxChild(e.target.value)}>
          <option key={0}>{0}</option>
          <option key={1}>{1}</option>
          <option key={2}>{2}</option>
          <option key={3}>{3}</option>
          <option key={4}>{4}</option>
          <option key={5}>{5}</option>
        </select>

        <Link
          to='/rooms'
          className="rooms-booknow-btn"
          onClick={() => {

            // pretend 'availableRooms' is an array that came from a post request.
            // the server should implement a post request route where it will look for the only
            // available rooms at a given date range.
            setAvailableRooms(availableRooms);
          }}
        >
          View Available Rooms
        </Link>
      </div>
      <Footer />
    </>
    
  )
}
