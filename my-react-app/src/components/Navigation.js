import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/Navigation.css';

export default function Navigation() {
  return (
    <nav>
      <div className='logo'>
      <Link to='/'><h1>CayoHotel</h1></Link>
      </div>
    </nav>
  );
}
