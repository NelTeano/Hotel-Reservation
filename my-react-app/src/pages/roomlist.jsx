import React from 'react'
import Navbar from '../navigation2'
import EditBox from '../editbox'
import ShowRooms from '../Rooms'

export default function roomlist({arriveDate, departDate}) {

  const filterText = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    marginTop: '30px'
  }

  

  return (
    <>
        <Navbar />
        <EditBox arriveDate={arriveDate} departDate={departDate} />
        <p style={filterText} > FILTER</p>
        <ShowRooms />

    </>
    
  )
}
