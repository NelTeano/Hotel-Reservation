import React,{useState} from "react";
import './styles/Rooms.css'
import CarouselComponent from "./Carousel";
import { Link } from 'react-router-dom';

export default function Rooms({roomTypes, setSelectedRoom}) {

  const [textFilter, setTextFilter] = React.useState('');

  return (
    <>
      <div className="combo-box">
        <select onChange={(e) => {
          setTextFilter(e.target.value)
        }}>
          <option key={"default"} value="">All</option>
          <option key={"deluxe"} value="deluxe">Deluxe</option>
          <option key={"suite"} value="suite">Suite</option>
          <option key={"junior"} value="junior">Junior</option>
          <option key={"room"} value="room">Room</option>
        </select>
      </div>
      {roomTypes ? roomTypes.map((roomType, index) => {
        if (roomType.name.toLowerCase().includes(textFilter)) {
          return <RoomItem
            key={index}
            roomType={roomType}
            setSelectedRoom={setSelectedRoom}
          />
        } else {
          return null;
        }
      }) : <div style={{textAlign: 'center', padding: '2em'}}>NO ROOMS AVAILABLE</div>}
    </>
  );
}

function RoomItem({roomType, setSelectedRoom}) {

  //BUTTON DESIGN
  const buttonStyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    border: " 1px solid black",
    fontSize: "20px",
    height: "100%",
    // widht: "100%",
    maxHeight: "40px",
    padding: "10px",
    // marginTop: "10px",
    marginLeft: "28%",
    cursor: " pointer",
  };

  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(current => !current);
  };

  return (
    <div className="rooms-container">
      <div className="box-container">
        <div className="room-box">
          <div className="picture-container">
            <CarouselComponent items={roomType.images} />
          </div>

          <div className="room-information">
            <div
              style={{
                width: '55%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85em'
              }}
            >
              <h1
                style={{
                  color: '#1c1c1c'
                }}
              >
                {roomType.name}
              </h1>
              <div style={{width: '85%'}}>
                <p> {roomType.description} </p>
              </div>
            </div>

            <div className="right-content" style={{width: '45%', textAlign: 'right'}}>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75em'
                }}
              >
                <p
                  style={{
                    textAlign: "right",
                    fontSize: "1.4vw",
                    color: '#1c1c1c'
                  }}
                >
                  FROM <br/>
                  $ {roomType.price} / NIGHT
                </p>

                <p> EXCLUDING TAXES & FEES </p>

                <Link
                  to='/form'
                  style={buttonStyle}
                  className="rooms-booknow-btn"
                  onClick={() => {
                    setSelectedRoom(roomType);
                  }}
                >
                  BOOK NOW
                </Link>
              </div>

              <div>
                <button className="additional-details-btn" onClick={handleClick} >AMENITIES & DESCRIPTION ↓</button> 
              </div>
            </div>
          </div>
        </div>

        {isShown && 
      <div className="feautures">
        {
          roomType.amenities.split(',\n').map((descripion, index) => {
            return <div key={index}>
              <p>{descripion}</p> 
            </div>
          })
        }            
    </div>
    }
      </div>
    </div>
  );
}




