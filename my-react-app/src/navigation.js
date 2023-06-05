import React from 'react'
import './navigation.css'
import SampleLogo from './images/SampleLogo.png'

export default function navigation() {

  const Logo = {
    alt: 'HotelLogo',
    src: SampleLogo,
    size:{
      width: '70px',
      height: '60px'
    }
  }

  return (
    <div className='navbar'>
      <div className='navbar-header'>
          <div className='logo' ><a href='/#'><img style={Logo.size} alt={Logo.alt} src={Logo.src}></img></a></div>
      </div>
      <div className="nav-right">
        <span ><a href='/#'>Home</a></span>
        <span ><a href='/#'>Contacts</a></span>
      </div>
        
    </div>
  )
}
