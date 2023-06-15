import React from 'react'
import Navbar from '../navigation2'
import EditBox from '../editbox'
import ShowRooms from '../Rooms'

export default function roomlist({
  arriveDate, departDate,
  roomTypes, setRoomTypes,
  setSelectedRoom}) {

  const filterText = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    marginTop: '30px'
  }

  return (
    <>
        <Navbar />
        <EditBox arriveDate={arriveDate} departDate={departDate} previousPage={'/calendar'} />
        <p style={filterText} > FILTER</p>
        <ShowRooms
          roomTypes={roomTypes}
          setSelectedRoom={setSelectedRoom}
        />
    </>
    
  )
}
