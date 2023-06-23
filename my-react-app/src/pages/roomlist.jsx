import React from 'react'
import Navbar from '../navigation2'
import EditBox from '../editbox'
import ShowRooms from '../Rooms'
import Footer from '../footer'

import PageGuardModal from '../PageGuardModal'

export default function roomlist({
  arriveDate, departDate, guests,
  roomTypes, setRoomTypes,
  setSelectedRoom}) {

  const filterText = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    marginTop: '30px'
  }

  const spacer = {
    background: 'linear-gradient(180deg, #FFFFFF 2%, #FFF5EB 100%)',
    height: '20vh',
    widht: '100%'
  }

  return (
    <div >
        <Navbar />
        <EditBox arriveDate={arriveDate} departDate={departDate} previousPage={'/calendar'} />
        <p style={filterText} > FILTER</p>
        <ShowRooms
          guests={guests}
          roomTypes={roomTypes}
          setSelectedRoom={setSelectedRoom}
        />
        <div style={spacer} ></div>
        <Footer />
        <PageGuardModal
          arriveDate={arriveDate}
          departDate={departDate}
          guests={guests}
          selectedRoom={true}
        />
    </div>
  )
}
