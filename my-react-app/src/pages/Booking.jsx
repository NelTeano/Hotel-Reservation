import React from 'react'

import Navigation from '../components/Navigation'
import Editbox from '../components/Editbox'
import Form from '../components/Form'
import SummaryBox from '../components/SummaryBox'
import Footer from '../components/Footer'

import PageGuardModal from '../components/PageGuardModal'

import '../assets/Booking.css'

export default function Booking({
  arriveDate, departDate,
  guests,
  name, setName,
  email, setEmail, 
  selectedRoom,
  total, setTotal
})
{
  return (
    <>
      <Navigation />
      <Editbox arriveDate={arriveDate} departDate={departDate} previousPage={'/rooms'}/>
      <div  className='booking-container' >

          <div >
              <Form
                arriveDate={arriveDate} 
                departDate={departDate}

                guests={guests}
                selectedRoom={selectedRoom}
                total={total}

                name={name}
                setName={setName}

                email={email}
                setEmail={setEmail}
              />
          </div>
              
          <div>
              <SummaryBox
                arriveDate={arriveDate} 
                departDate={departDate}

                guests={guests}

                total={total}
                setTotal={setTotal}
                
                selectedRoom={selectedRoom}
              />
          </div>
      </div>
      <Footer />

      {/* when designing the page, you can comment out this component to disable the page guard if it gets annoying */}
      <PageGuardModal
        arriveDate={arriveDate}
        departDate={departDate}
        guests={guests}
        selectedRoom={selectedRoom}
      />
    </>
  )
}
