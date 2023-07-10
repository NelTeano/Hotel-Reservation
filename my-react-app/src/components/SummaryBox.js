import React from 'react';
import '../assets/SummaryBox.css';

const USD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export default function SummaryBox({ arriveDate, departDate, guests, total, setTotal, selectedRoom }) {
  React.useEffect(() => {
    const departMilliSec = new Date(departDate).getTime();
    const arriveMilliSec = new Date(arriveDate).getTime();
    const checkInDays = (departMilliSec - arriveMilliSec) / (1000 * 3600 * 24);
    setTotal(selectedRoom ? checkInDays * selectedRoom.price : 0);
    console.log('days checked in = ', checkInDays);
  }, [departDate, arriveDate, selectedRoom, total, setTotal]);

  return (
    <div className='sumBox-container'>
      <div>
        <p
          style={{
            marginTop: '5%',
            marginBottom: '15px',
            textAlign: 'center',
          }}
        >
          STAY SUMMARY
        </p>

        <h1>CayoHotel <br></br> Beach And Resort</h1>
      </div>

      <div>
        {selectedRoom ? (
          <img alt='RoomLook' src={selectedRoom.images[0]} />
        ) : (
          <img alt='RoomLook' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/Blank_image.jpg' />
        )}
      </div>

      <div
        className='details'
        style={{
          textAlign: 'center',
        }}
      >
        <p>Arriving: {arriveDate}</p>
        <p>Room Type: {selectedRoom ? selectedRoom.name : 'N/A'}</p>
        <p>Depart: {departDate}</p>
        <p>Guests: {guests} </p>
      </div>

      <div style={{ borderTop: '1px solid gray' }}>
        <p
          style={{
            textAlign: 'right',
            marginTop: '5%',
            marginBottom: '40px',
            marginRight: '40px',
          }}
        >
          TOTAL : {selectedRoom ? USD.format(total) : USD.format(0)}
        </p>
      </div>
    </div>
  );
}
