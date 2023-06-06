import React from 'react'
import Navbar from '../navigation2'
import EditBox from '../editbox'
import ShowRooms from '../Rooms'
import Footer from '../footer'

export default function roomlist() {

  const filterText = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  }

  return (
    <>
        <Navbar />
        <EditBox />
        <p style={filterText} >FILTER</p>
        <ShowRooms />
        <Footer />

    </>
    
  )
}
