import React,{useState} from "react";
import './styles/Rooms.css'
import CarouselComponent from "./Carousel";
import { Link } from 'react-router-dom';

export default function Rooms({setSelectedRoom, setSelectedRoomData}) {
  const roomInteriors = [
    {
      filterType: "suite",
      roomID: 0, // primary key of the room table ?
      type: "deluxe",
      name: "Deluxe Suite",
      bed: "One King Bed",
      view: "Hudson River View",
      areaSqFeet: 770,
      price: 1000,
      BedroomDetails:"Soundproofing to ensure a quiet environment and High-quality bedding and linens with Flat-screen TV",
      kitchenDetails:"Cookware, utensils, and dishware provided for guests' convenience.",
      BathroomDetails:"Private bathroom with a shower & bathtub with Toiletries such as shampoo, conditioner, soap, and lotion.",
      images: [
        {
          id: 1,
          name: "Bedroom",
          image: new URL('https://libraryhotel.com/_novaimg/4280246-1336162_0_479_4800_2615_2200_1200.rc.jpg')
        },
        {
          id: 2,
          name: "Living Area",
          image: new URL('https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/20/0/HUHH2018-Urban_Duplex-Penthouse-NYC_5.jpg.rend.hgtvcom.966.644.suffix/1524246223442.jpeg'),
        },
        {
          id: 3,
          name: "Kitchen",
          image: new URL('https://www.brilliantkitchens.com.au/images/deluxe%20kitchen_pull-out%20pantries%20and%20undermount%20sink.jpg?crc=127099957'),
        },
      ],
    },
    {
      filterType: "suite",
      roomID: 1,
      type: "junior",
      name: "Junior Suite",
      bed: "One King Bed",
      view: "City View",
      areaSqFeet: 420,
      price: 500,
      BedroomDetails:"Comfortable and spacious bed with quality mattress and pillows with Flat-screen TV",
      kitchenDetails:"Fully equipped kitchenette with appliances such as a stove, microwave, refrigerator, and dishwasher.",
      BathroomDetails:"Private bathroom with a shower & bathtub with Toiletries such as shampoo, conditioner and soap.",
      images: [
        {
          id: 1,
          name: "Bedroom",
          image: new URL("https://image-tc.galaxy.tf/wijpeg-afu0zj5rhmyyirzditj3g96mk/deluxe-room-king-1-2000px_wide.jpg?crop=0%2C98%2C2000%2C1125&width=1140"),
        },
        {
          id: 2,
          name: "Living Area",
          image: new URL("https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2021/6/24/0/IO_Kerrie-Kelly_Stylish-Retreat-06.jpg.rend.hgtvcom.966.644.suffix/1624556760070.jpeg"),
        },
        {
          id: 3,
          name: "Kitchen",
          image: new URL('https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2014/12/17/0/1-340-2015_ChagasKitchen_c.JPG.rend.hgtvcom.966.1449.suffix/1418832463872.jpeg'),
        },
      ],
    },
    {
      filterType: "room",
      roomID: 2,
      type: "deluxe",
      name: "Deluxe Room",
      bed: "One Regular Bed",
      view: "Community Park View",
      areaSqFeet: 220,
      price: 175,
      images: [
        {
          id: 1,
          name: "Bedroom",
          image: new URL("http://www.hallamhotel.com/images/room.jpg"),
        }
      ],
    },
  ];

  return (
    <>
      <div className="combo-box">
        <select >
          <option value="default" selected>Room Type</option>
          <option value="default">Deluxe</option>
          <option value="default">Junior</option>
        </select>
      </div>
      {roomInteriors.map((room) => {
        return <RoomItem
          key={room.roomID}
          room={room}
          setSelectedRoom={setSelectedRoom}
          setSelectedRoomData={setSelectedRoomData}
        />
      })}
    </>
  );
}

function RoomItem({room, setSelectedRoom, setSelectedRoomData}) {

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
                <li> {room.bed} </li>
                <li> {room.view} </li>
                <li> {room.areaSqFeet} sq ft; {Math.round(room.areaSqFeet / 10.764)} sq m </li>
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

                <Link
                  to='/form'
                  style={buttonStyle}
                  className="rooms-booknow-btn"
                  onClick={() => {
                    setSelectedRoom(room);
                    setSelectedRoomData({
                      roomID: room.roomID,
                      test: 1
                    });
                  }}
                >
                  BOOK NOW
                </Link>

              </div>

              <div style={{ marginBottom: "20px" }}>
                <button onClick={handleClick} >ADDITIONAL DETAILS ↓</button> 
              </div>
            </div>
          </div>
        </div>

        {isShown && 
      <div className="feautures">
            <div>
              <img alt="featureslogos" src={SampleRoom}></img>
              <p>{room.BedroomDetails}</p> 
            </div>

            <div>
              <img alt="featureslogos" src={SampleRoom}></img>
              <p>{room.kitchenDetails}</p> 
            </div>

            <div>
              <img alt="featureslogos" src={SampleRoom}></img>
              <p>{room.BathroomDetails}</p> 
            </div>
            
    </div>
    }
      </div>
    </div>
  );
}




