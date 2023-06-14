import React from 'react'
import './styles/summaryBox.css'



export default function summaryBox({
    arriveDate, 
    departDate,
    guests,
    selectedRoom
}) {

  return (
    <div className='sumBox-container'>
        <div>
            <p style={{
                marginTop: '5%',
                marginBottom: '15px',
                textAlign: 'center',
             }} >STAY SUMMARY</p>

            <h1 >EQUINOX HOTEL HUDSON NEW YORK(HOTELNAME)</h1>

        </div>

        <div>
            {(selectedRoom) ? <img alt='RoomLook' src={selectedRoom.images[0].image} /> : <img alt='RoomLook' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg' />}
        </div>
            
        <div className='details' style={{
                textAlign: 'center',

        }}>
            <p>Arriving: {arriveDate}</p>
            <p>Room Type: {(selectedRoom) ? selectedRoom.type : 'N/A'}</p>
            <p>Depart: {departDate}</p>
            <p>Guests: {guests} </p>
           
        </div>

        <div style={{borderTop: '1px solid black',}}>
            <p style={{
                textAlign: 'right',
                marginTop: '5%',
                marginBottom:'40px',
                marginRight: '40px',
        }}>TOTAL : {(selectedRoom) ? selectedRoom.price : '0.0'}</p>
        </div>
    </div>
  )
}
