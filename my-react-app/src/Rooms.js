import React from "react";
import './styles/Rooms.css'
import SampleRoom from "./images/roomsamplelogo.jpg";
import CarouselComponent from "./Carousel";

export default function Rooms() {
  const roomInteriors = [
    {
      type: "deluxe",
      name: "Deluxe Suite",
      price: 1000,
      images: [
        {
          id: 1,
          name: "Bedroom",
          image: SampleRoom,
        },
        {
          id: 2,
          name: "Living Area",
          image: SampleRoom,
        },
        {
          id: 3,
          name: "Kitchen",
          image: SampleRoom,
        },
      ],
    },
    {
      type: "junior",
      name: "Junior Suite",
      price: 500,
      images: [
        {
            id: 1,
            name: "Bedroom",
            image: SampleRoom,
          },
          {
            id: 2,
            name: "Living Area",
            image: SampleRoom,
          },
          {
            id: 3,
            name: "Kitchen",
            image: SampleRoom,
          },
      ],
    },
  ];

  return (
    <>
      <div className="combo-box">
        <select>
          <option value="default">Room Type</option>
          <option value="default">Room</option>
          <option value="default">Suite</option>
          <option value="default">Accesible</option>
        </select>
      </div>
      {roomInteriors.map((room) => RoomItem(room))}
    </>
  );
}




function RoomItem(room) {

    

  //BUTTON DESIGN
  const buttonStyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "white",
    border: " 1px solid black",
    fontSize: "20px",
    height: "100%",
    widht: "100%",
    maxHeight: "40px",
    padding: "10px",
    marginTop: "10px",
    marginLeft: "28%",
    cursor: " pointer"
  };

  return (
    <div className="rooms-container">
      <div className="box-container">
        <div className="room-box">
          <div className="picture-container">
            <CarouselComponent items={room.images} />
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
                {room.name}
              </h1>
              <ul>
                <li>One King Bed</li>
                <li>Hudson River View</li>
                <li>100 sq; 52 sq m</li>
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
                  $ {room.price} / NIGHT
                </p>
                <p>EXCUDING TAXES & FEES</p>
                <button style={buttonStyle}>BOOK NOW</button>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <button  >ADDITIONAL DETAILS ↓</button> 
              </div>
            </div>
          </div>
        </div>

        <div className="feautures"></div>
      </div>
    </div>
  );
}
