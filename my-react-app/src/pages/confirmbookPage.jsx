import React from 'react'
import Form from '../bookform'
import Navbar from '../navigation2'
import EditBox from '../editbox'
import SummaryBox from '../summaryBox'
import Footer from '../footer'
import '../styles/bookingpage.css'

export default function confirmbookPage({
  arriveDate, departDate,
  guests,
  name, setName,
  email, setEmail, 
  selectedRoom,
  total, setTotal,
  submitHandler
})
{
  return (
    <>
    <Navbar></Navbar>
    <EditBox arriveDate={arriveDate} departDate={departDate} previousPage={'/rooms'}/>
    <div  className='booking-container' >

        <div >
            <Form
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              submitHandler={submitHandler}
            />
        </div>
            
        <div>
          {/*  Value from other pages can just pass it via props  ex. IMG value will be the one you selected room earlier will change its src*/}
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
    </>
  )
}
