import React,{useState} from "react";
import './styles/Rooms.css'
import CarouselComponent from "./Carousel";
import { Link } from 'react-router-dom';

export default function Rooms({roomTypes, setSelectedRoom}) {
  
  // the json data was moved in the 'dev-data/available-rooms.js'.
  // the previous calendar page should load that data emulating a post request from the server.

  return (
    <>
      <div className="combo-box">
        <select>
          <option value="deluxe">Room Type</option>
          <option value="deluxe">Deluxe</option>
          <option value="junior">Junior</option>
        </select>
      </div>
      {roomTypes ? roomTypes.map((roomType) => {
        return <RoomItem
          key={roomType.id}
          roomType={roomType}
          setSelectedRoom={setSelectedRoom}
        />
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
    widht: "100%",
    maxHeight: "40px",
    padding: "10px",
    marginTop: "10px",
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
                marginLeft: "20px",
                marginTop: "20px",
              }}
            >
              <h1
                style={{
                  marginBottom: "10px",
                }}
              >
                {roomType.name}
              </h1>
              <ul>
                <li> {roomType.bed_type} </li>
                {/* <li> {room.view} </li>
                <li> {room.areaSqFeet} sq ft; {Math.round(room.areaSqFeet / 10.764)} sq m </li> */}
              </ul>
            </div>

            <div className="right-content">
              <div
                style={{
                  marginTop: "20%",
                  marginRight: "15px",
                }}
              >
                <p
                  style={{
                    textAlign: "right",
                    fontSize: "1.4vw",
                  }}
                >
                  FROM
                </p>

                <p
                  style={{
                    textAlign: "right",
                    fontSize: "1.4vw",
                    marginBottom: "10px",
                  }}
                >
                  $ {roomType.price} / NIGHT
                </p>
                <p>EXCUDING TAXES & FEES</p>

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

              <div style={{ marginBottom: "20px" }}>
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
              {/* <img alt="featureslogos" src={detail.image}></img> */}
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




