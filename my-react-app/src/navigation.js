import React from 'react'
import './navigation.css'

export default function navigation() {
  return (
    <div className='navbar'>
      <div className='navbar-header'>
          <div className='logo' ><a href='/#'>Logo</a></div>
      </div>
      <div class="nav-right">
        <span ><a href='/#'>Home</a></span>
        <span ><a href='/#'>About</a></span>
        <span ><a href='/#'>Contacts</a></span>
      </div>
        
    </div>
  )
}
