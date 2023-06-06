import React from 'react'
import './styles/summaryBox.css'



export default function summaryBox({
    Image, 
    arrivingDate, 
    departDate,
    numofAdults, 
    numofChild,
    TotalPrice,
    roomType
    }) {

    const props = {
        roomImage: Image,
        arriving: arrivingDate,
        depart: departDate,
        price: TotalPrice,
        roomtype: roomType,
        adults: numofAdults,
        childrens: numofChild
    }

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
            <img  alt='RoomLook' src={props.roomImage}></img>
        </div>
            
        <div className='details' style={{
                textAlign: 'center',

        }}>
            <p>Arriving: {props.arriving}</p>
            <p>Room Type: {props.roomtype}</p>
            <p>Depart: {props.depart}</p>
            <p>Adult: {props.adults} / Children: {props.childrens}</p>
           
        </div>

        <div style={{borderTop: '1px solid black',}}>
            <p style={{
                textAlign: 'right',
                marginTop: '5%',
                marginBottom:'40px',
                marginRight: '40px',
        }}>TOTAL : {props.price}</p>
        </div>
    </div>
  )
}
