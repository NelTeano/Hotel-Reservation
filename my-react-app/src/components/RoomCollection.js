import React, { useState } from 'react';
import CarouselComponent from './Carousel';
import { Link } from 'react-router-dom';

import '../assets/RoomCollection.css';

const USD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export default function RoomCollection({ guests, roomTypes, setRoomTypes, setSelectedRoom }) {
  const [textFilter, setTextFilter] = React.useState('');
  const [reloadMsg, setReloadMsg] = React.useState('Failed to load rooms');

  const reloadRooms = () => {
    setReloadMsg('Reloading rooms, please wait...');
    fetch('http://localhost:3001/rooms', {
      headers: {
        Accept: 'application/json',
      },
    })
      .then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            setRoomTypes(data);
          });
        } else {
          setRoomTypes(null);
          setReloadMsg('Failed to reload rooms');
        }
      })
      .catch(() => {
        setRoomTypes(null);
        setReloadMsg('Internal error occured when reloading rooms, try again later');
      });
  };

  return (
    <>
      <div className='combo-box'>
        <select
          onChange={e => {
            setTextFilter(e.target.value);
          }}
        >
          <option key={'default'} value='' label='All' />
          <option key={'deluxe'} value='deluxe' label='Deluxe' />
          <option key={'suite'} value='suite' label='Suite' />
          <option key={'junior'} value='junior' label='Junior' />
          <option key={'room'} value='room' label='room' />
        </select>
      </div>
      {roomTypes ? (
        roomTypes.map((roomType, index) => {
          if (roomType.name.toLowerCase().includes(textFilter) && roomType.capacity >= guests) {
            return <RoomItem key={index} roomType={roomType} setSelectedRoom={setSelectedRoom} />;
          } else {
            return null;
          }
        })
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            gap: '1em',
            height: '12vh',
          }}
        >
          <p>{reloadMsg}</p>
          <div>
            <button className='reload-rooms-btn' onClick={reloadRooms}>
              Reload Rooms
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function RoomItem({ roomType, setSelectedRoom }) {
  //BUTTON DESIGN
  const buttonStyle = {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    border: ' 1px solid black',
    fontSize: '20px',
    height: '100%',
    // widht: "100%",
    maxHeight: '40px',
    padding: '10px',
    // marginTop: "10px",
    marginLeft: '28%',
    cursor: ' pointer',
  };

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <div className='rooms-container'>
      <div className='box-container'>
        <div className='room-box'>
          <div className='picture-container'>
            <CarouselComponent items={roomType.images} />
          </div>

          <div className='room-information'>
            <div
              style={{
                width: '55%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85em',
              }}
            >
              <h1
                style={{
                  color: '#1c1c1c',
                }}
              >
                {roomType.name}
              </h1>
              <div style={{ width: '85%' }}>
                <p> {roomType.description} </p>
              </div>
            </div>

            <div className='right-content' style={{ width: '45%', textAlign: 'right' }}>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75em',
                }}
              >
                <p
                  style={{
                    textAlign: 'right',
                    fontSize: '1.4vw',
                    color: '#1c1c1c',
                  }}
                >
                  FROM <br /> {USD.format(roomType.price)} / NIGHT
                </p>

                <p> EXCLUDING TAXES & FEES </p>

                <Link
                  to='/form'
                  style={buttonStyle}
                  className='rooms-booknow-btn'
                  onClick={() => {
                    setSelectedRoom(roomType);
                  }}
                >
                  BOOK NOW
                </Link>
              </div>

              <div>
                <button className='additional-details-btn' onClick={handleClick}>
                  AMENITIES & DESCRIPTION ↓
                </button>
              </div>
            </div>
          </div>
        </div>

        {isShown && (
          <div className='feautures'>
            {roomType.amenities.split(',\n').map((descripion, index) => {
              return (
                <div key={index}>
                  <p>{descripion}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
