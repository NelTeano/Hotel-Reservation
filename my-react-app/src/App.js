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
import TemporaryDatePicker from "./pages/TemporaryDatePicker";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  // testing if able to pass value from the value gets from another page to another page
  const getDateTesting = {
    arrivingDate: "05/20/2023",
    departingDate: "06/23/2023"
  }

  // ---------- booking data ----------

  // callendar
  const [arriveDate, setArriveDate] = React.useState((new Date()).toLocaleDateString());
  const [departDate, setDepartDate] = React.useState((new Date()).toLocaleDateString());

  const [paxAdult, setPaxAdult] = React.useState(0);
  const [paxChild, setPaxChild] = React.useState(0);

  const [availableRooms, setAvailableRooms] = React.useState([]);

  // rooms
  const [selectedRoom, setSelectedRoom] = React.useState(null);
  
  // room data to be sent to the post request route after successful booking.
  const [selectedRoomData, setSelectedRoomData] = React.useState(null);

  // ...

  // form
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');


  // ---------- booking data ----------

  // form post request
  const submitBookingForm = (e) => {
    // server/booking.js : line 7 - post method.
    // localhost:PORT/book/submit
    if (firstName && lastName && email && phone) {
      e.preventDefault();
      fetch('/book/submit', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({
          arriveDate: arriveDate,
          departDate: departDate,
          paxAdult: paxAdult,
          paxChild: paxChild,
          selectedRoom: selectedRoom,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNo: phone,
          selectedRoom: selectedRoom
        })
      }).then(response => {
        console.log('response = ', response);
        if (response.status === 200) {
          console.log('booking success');
        } else {
          console.log('booking failed : response = ', response);
        }
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
          />
        }/>

        <Route path="/login"    element={<Login />} />

        <Route path="/calendar" element={
          <TemporaryDatePicker
            arriveDate={arriveDate} setArriveDate={setArriveDate}
            departDate={departDate} setDepartDate={setDepartDate}
            setPaxChild={setPaxChild}
            setPaxAdult={setPaxAdult}
          />
        }/>

        <Route path="/rooms"    element={
          <RoomList
            arriveDate={arriveDate}
            departDate={departDate}

            setSelectedRoom={setSelectedRoom}
            setSelectedRoomData={setSelectedRoomData}
          />
        }/>
        
        <Route path="/form"     element={
          <BookingPage
            arriveDate={arriveDate}
            departDate={departDate}

            paxAdult={paxAdult}
            paxChild={paxChild}

            // form field onChange handlers.
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPhone={setPhone}

            selectedRoom={selectedRoom}
            // -----
            submitHandler={submitBookingForm}
          />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
