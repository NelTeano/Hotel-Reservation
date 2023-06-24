import React from 'react'

import Navigation from '../Navigation'
import Editbox from '../Editbox'
import Form from '../Form'
import SummaryBox from '../SummaryBox'
import Footer from '../Footer'
import PageGuardModal from '../PageGuardModal'

import '../styles/Booking.css'

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
