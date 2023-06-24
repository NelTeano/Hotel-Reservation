import React from 'react'
import './styles/Navigation.css'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav >
        <div className='logo'>
            <h1>CayoHotel</h1>
        </div>
        <div className='closeIcon'>
            <Link to='/' >X</Link>
        </div>
    </nav>
  )
}
