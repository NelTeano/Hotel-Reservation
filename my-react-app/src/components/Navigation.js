import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/Navigation.css';
import Logo from '../assets/images/logo.png'

export default function Navigation() {
  return (
    <nav>
      <div className='logo'>
        <Link to='/'>
          <img src={Logo} style={{width: '300px', marginTop: '30px',height: '150px'}} ></img>
        </Link>
      </div>
    </nav>
  );
}
