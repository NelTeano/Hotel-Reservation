import React from 'react';

import Navigation from '../components/Navigation';
import Editbox from '../components/Editbox';
import RoomCollection from '../components/RoomCollection';
import Footer from '../components/Footer';

import PageGuardModal from '../components/PageGuardModal';

export default function Rooms({ arriveDate, departDate, guests, roomTypes, setRoomTypes, setSelectedRoom }) {
  const filterText = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    marginTop: '30px',
  };

  return (
    <div>
      <Navigation />
      <Editbox arriveDate={arriveDate} departDate={departDate} previousPage={'/calendar'} />
      <p style={filterText}>FILTER</p>
      <RoomCollection
        guests={guests}
        roomTypes={roomTypes}
        setRoomTypes={setRoomTypes}
        setSelectedRoom={setSelectedRoom}
      />
      <Footer />

      {/* when designing the page, you can comment out this component to disable the page guard if it gets annoying */}
      <PageGuardModal arriveDate={arriveDate} departDate={departDate} guests={guests} selectedRoom={true} />
    </div>
  );
}
