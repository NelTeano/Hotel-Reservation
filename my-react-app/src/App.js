import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import coverpicture from './images/coverhomepage.png'
import boxImg1 from "./images/beach1.png";
import boxImg2 from "./images/beach2.png";
import reserveCover from "./images/reserveCover.png"
import React from "react";

import Home from './pages/Home'
import DatePicker from './pages/DatePicker'
import Rooms from "./pages/Rooms"
import Booking from './pages/Booking'

import './styles/App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  // ---------- booking data ----------

  // callendar
  const [arriveDate, setArriveDate] = React.useState((new Date()).toLocaleDateString());
  const [departDate, setDepartDate] = React.useState((new Date()).toLocaleDateString());

  const [guests, setGuests] = React.useState(null);

  const [roomTypes, setRoomTypes] = React.useState(null);

  // rooms
  const [selectedRoom, setSelectedRoom] = React.useState(null);
  
  // ...

  // form
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [total, setTotal] = React.useState(0);

  // ---------- rooms ----------

  React.useEffect(() => {
    fetch('http://localhost:3001/rooms', {headers: {
      Accept: 'application/json'
    }})
    .then(response => {
      console.log('response.status = ', response.status);
      if (response.status === 200) {
        response.json().then((data) => {
          setRoomTypes(data);
        });
      } else {
        setRoomTypes(null);
      }
    }).catch(() => setRoomTypes(null));
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/"         element={
          <Home
            smallRectangle={reserveCover}
            facilityImg1={boxImg1}
            facilityImg2={boxImg2}
            coverImg={coverpicture}

            roomTypes={roomTypes}
          />
        }/>

        <Route path='/calendar' element={
          <DatePicker
            arriveDate={arriveDate} setArriveDate={setArriveDate}
            departDate={departDate} setDepartDate={setDepartDate}
            guests={guests}         setGuests={setGuests}
          />
        } />

        <Route path="/rooms"    element={
          <Rooms
            arriveDate={arriveDate}
            departDate={departDate}
            guests={guests}

            roomTypes={roomTypes}
            setRoomTypes={setRoomTypes}

            setSelectedRoom={setSelectedRoom}
          />
        }/>
        
        <Route path="/form"     element={
          <Booking
            arriveDate={arriveDate}
            departDate={departDate}

            guests={guests}

            // form field onChange handlers.
            name={name}
            setName={setName}
            
            email={email}
            setEmail={setEmail}

            selectedRoom={selectedRoom}

            total={total}
            setTotal={setTotal}
          />
        }/>

        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
