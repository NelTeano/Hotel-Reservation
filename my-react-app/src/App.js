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

  // ---------- booking data ----------

  // callendar
  const [arriveDate, setArriveDate] = React.useState((new Date()).toLocaleDateString());
  const [departDate, setDepartDate] = React.useState((new Date()).toLocaleDateString());

  const [paxAdult, setPaxAdult] = React.useState(1);
  const [paxChild, setPaxChild] = React.useState(0);

  // the array of available rooms sent by the server after choosing a
  // range of date in the calendar page.
  const [availableRooms, setAvailableRooms] = React.useState(null);

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
    // server/booking.js --> localhost:PORT/book/submit
    const validDateRange = new Date(arriveDate) < new Date(departDate);

    if (!validDateRange) {
      e.preventDefault();
      alert('please pick a valid date range');
    } else if (firstName && lastName && email && phone) {
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
          selectedRoomData: selectedRoomData,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNo: phone
        })
      }).then(response => {
        console.log('response = ', response);
        if (response.status === 200) {
          console.log('booking success');
          alert('booking success');
        } else {
          console.log('booking failed : response = ', response);
          alert('booking failed');
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
            setAvailableRooms={setAvailableRooms}
          />
        }/>

        <Route path="/rooms"    element={
          <RoomList
            arriveDate={arriveDate}
            departDate={departDate}

            availableRooms={availableRooms}
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
