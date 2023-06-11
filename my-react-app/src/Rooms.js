import React,{useState} from "react";
import './styles/Rooms.css'
import SampleRoom from "./images/roomsamplelogo.jpg";
import CarouselComponent from "./Carousel";

export default function Rooms() {

  

  const roomInteriors = [
    {
      type: "deluxe",
      name: "Deluxe Suite",
      price: 1000,
      BedroomDetails:"Soundproofing to ensure a quiet environment and High-quality bedding and linens with Flat-screen TV",
      kitchenDetails:"Cookware, utensils, and dishware provided for guests' convenience.",
      BathroomDetails:"Private bathroom with a shower & bathtub with Toiletries such as shampoo, conditioner, soap, and lotion.",
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
      BedroomDetails:"Comfortable and spacious bed with quality mattress and pillows with Flat-screen TV",
      kitchenDetails:"Fully equipped kitchenette with appliances such as a stove, microwave, refrigerator, and dishwasher.",
      BathroomDetails:"Private bathroom with a shower & bathtub with Toiletries such as shampoo, conditioner and soap.",
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
        <select >
          <option value="default" selected>Room Type</option>
          <option value="default">Deluxe</option>
          <option value="default">Junior</option>
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




