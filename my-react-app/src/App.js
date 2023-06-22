import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RoomList from "./pages/roomlist";
import BookingPage from './pages/confirmbookPage'
import Home from './pages/home'
import Login from './pages/login'
import coverpicture from './images/coverhomepage.png'
import boxImg1 from "./images/beach1.png";
import boxImg2 from "./images/beach2.png";
import reserveCover from "./images/reserveCover.png"
import React from "react";

import './styles/App.css';
import DatePicker from './pages/calendar'

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

  // ---------- booking data ----------

  // form post request
  const submitBookingForm = (e, statusCB) => {
    // server/booking.js --> localhost:PORT/book/submit
    const validDateRange = new Date(arriveDate) < new Date(departDate);

    if (!validDateRange) {
      e.preventDefault();
      alert('please pick a valid date range');
      return;
    } else if (name && email ) {
      const departDateMillisec = (new Date(departDate)).getTime();
      const arriveDateMillisec = (new Date(arriveDate)).getTime();
      const checkInDays = (departDateMillisec - arriveDateMillisec) / (1000 * 3600 * 24);
      e.preventDefault();
      fetch('http://localhost:3001/book/submit', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
          arriveDate: arriveDate,
          departDate: departDate,
          guests: guests,
          selectedRoomID: selectedRoom.id,
          total: checkInDays * selectedRoom.price,
          name: name,
          email: email,

        })
      }).then(response => {
        statusCB(response.status);
      }).catch(() => {
        statusCB(404);
      });
    }
  }

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

        <Route path="/login"    element={<Login />} />

        <Route path="/rooms"    element={
          <RoomList
            arriveDate={arriveDate}
            departDate={departDate}
            guests={guests}

            roomTypes={roomTypes}
            setRoomTypes={setRoomTypes}

            setSelectedRoom={setSelectedRoom}
          />
        }/>
        
        <Route path="/form"     element={
          <BookingPage
            arriveDate={arriveDate}
            departDate={departDate}

            guests={guests}

            // form field onChange handlers.
            name={name}
            setName={setName}
            
            email={email}
            setEmail={setEmail}

            selectedRoom={selectedRoom}
            // -----
            submitHandler={submitBookingForm}
          />
        }/>
  
        <Route path='/calendar' element={
          <DatePicker
            arriveDate={arriveDate} setArriveDate={setArriveDate}
            departDate={departDate} setDepartDate={setDepartDate}
            guests={guests}         setGuests={setGuests}
          />
        } />
        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
