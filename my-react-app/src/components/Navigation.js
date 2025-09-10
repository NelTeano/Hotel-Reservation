import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/Navigation.css';
import Logo from '../assets/images/logo.png'

export default function Navigation() {
  return (
    <nav>
      <div className='logo'>
        <Link to='/'>
          <img src={Logo} alt="CayoHotel Logo" />
        </Link>
      </div>
    </nav>
  );
}
