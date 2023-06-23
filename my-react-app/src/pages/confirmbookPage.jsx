import React from 'react'
import Form from '../bookform'
import Navbar from '../navigation2'
import EditBox from '../editbox'
import SummaryBox from '../summaryBox'
import Footer from '../footer'
import PageGuardModal from '../PageGuardModal'
import '../styles/bookingpage.css'

export default function confirmbookPage({
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
      <Navbar></Navbar>
      <EditBox arriveDate={arriveDate} departDate={departDate} previousPage={'/rooms'}/>
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
      <PageGuardModal
        arriveDate={arriveDate}
        departDate={departDate}
        guests={guests}
        selectedRoom={selectedRoom}
      />
    </>
  )
}
