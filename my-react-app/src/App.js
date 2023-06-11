import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./pages/homepage";
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
  const [dateArrive, setDateArrive] = React.useState('07/20/2077');
  const [dateDepart, setDateDepart] = React.useState('07/23/2077');

  const [paxAdult, setPaxAdult] = React.useState(0);
  const [paxChild, setPaxChild] = React.useState(0);

  // rooms
  const [selectedRoom, setSelectedRoom] = React.useState('?');
  // ...

  // form
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');


  // ---------- booking data ----------

  // form post request
  const submitBookingForm = (e) => {
    e.preventDefault();

    // booking.js : line 75 - post method.
    // localhost:PORT/book/api/book/test
    fetch('/book/api/book/test', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        dateArrive: dateArrive,
        dateDepart: dateDepart,
        paxAdult: paxAdult,
        paxChild: paxChild,
        selectedRoom: selectedRoom,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNo: phone
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

        <Route path="/homepage" element={<Homepage/>} />

        <Route path="/rooms"    element={
          <RoomList
            arriveDate={dateArrive}
            departDate={dateDepart}
          />
        }/>
        
        <Route path="/form"     element={
          <BookingPage
            arriveDate={dateArrive}
            departDate={dateDepart}

            paxAdult={paxAdult}
            paxChild={paxChild}

            // form field onChange handlers.
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
            setPhone={setPhone}

            // -----
            submitHandler={submitBookingForm}
          />
        }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
