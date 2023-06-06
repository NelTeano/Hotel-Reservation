import React from 'react'
import coverpage from './images/coverhomepage.png'

export default function about() {
  return (
    <div style={{ backgroundImage: `url(${coverpage})` }} className='aboutcontainer'>
        <p>Luxury Hotel & Best Resort</p>
        <p>_____</p>
        <h1>Enjoy a Luxury <br></br>Experience</h1>
      <button onClick={() => { console.log("Working") }}>ROOM E SUITES</button>
    </div>
  )
}
