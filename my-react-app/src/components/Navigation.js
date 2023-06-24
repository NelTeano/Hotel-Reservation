import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/Navigation.css';

export default function Navigation() {
  return (
    <nav>
      <div className='logo'>
        <h1>CayoHotel</h1>
      </div>
      <div className='closeIcon'>
        <Link to='/'>X</Link>
      </div>
    </nav>
  );
}
