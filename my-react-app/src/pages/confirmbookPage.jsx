import React from 'react'
import Form from '../bookform'
import Navbar from '../navigation2'
import EditBox from '../editbox'
import SummaryBox from '../summaryBox'
import SampleImg from '../images/roomsamplelogo.jpg'
import '../styles/bookingpage.css'

export default function confirmbookPage({arriveDate, departDate}) {

    

  return (
    <>
    <Navbar></Navbar>
    <EditBox arriveDate={arriveDate} departDate={departDate} />
    <div  className='booking-container' >

        <div >
            <Form />
        </div>
            
        <div>
          {/*  Value from other pages can just pass it via props  ex. IMG value will be the one you selected room earlier will change its src*/}
            <SummaryBox Image={SampleImg} numofChild={"2"} numofAdults={"1"}/>
        </div>
    </div>
    </>
    
  )
}
