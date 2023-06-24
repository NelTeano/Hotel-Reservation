import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home'
import DatePicker from './pages/DatePicker'
import Rooms from "./pages/Rooms"
import Booking from './pages/Booking'

import './assets/App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {

  const [arriveDate, setArriveDate] = React.useState((new Date()).toLocaleDateString());
  const [departDate, setDepartDate] = React.useState((new Date()).toLocaleDateString());
  const [guests, setGuests] = React.useState(null);

  const [roomTypes, setRoomTypes] = React.useState(null);
  const [selectedRoom, setSelectedRoom] = React.useState(null);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [total, setTotal] = React.useState(0);

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/"         element={
          <Home
            roomTypes={roomTypes}
            setRoomTypes={setRoomTypes}
          />
        }/>

        <Route path='/calendar' element={
          <DatePicker
            arriveDate={arriveDate}
            setArriveDate={setArriveDate}
            
            departDate={departDate}
            setDepartDate={setDepartDate}
            
            guests={guests}
            setGuests={setGuests}
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

            selectedRoom={selectedRoom}

            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}

            total={total}
            setTotal={setTotal}
          />
        }/>

        </Routes>
     
    </BrowserRouter>
  );
}

export default App;
