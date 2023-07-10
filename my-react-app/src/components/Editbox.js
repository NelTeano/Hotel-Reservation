import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Editbox.css';

export default function Editbox({ arriveDate, departDate, previousPage }) {
  const containerFormat = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '150px',
    width: '100%',
  };

  const boxSize = {
    display: 'flex',
    flexDirection: 'row',
    
    alignItems: 'center',
    position: 'relative',
    border: '1px solid #1c1c1c',
    height: '100%',
    width: '100%',
    maxHeight: '10vh',
    maxWidth: '50vw',
    top: '30%',
  };

  return (
    <div style={containerFormat} className='container'>
      <div style={boxSize} className='edit-box'>
        <div
          className='edit-box-link-btn'
          style={{
            marginRight: '3vw',
            marginLeft: '5%',
            borderRight: '1px solid #1c1c1c',
            height: '100%',
            paddingRight: '20px',
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: '#1c1c1c',
              fontSize: '1vw',
            }}
            to={previousPage}
          >
            <div className='edit-box-reactrouterdom-link'>
              <h2>←</h2>
              <p style={{ fontSize: '18px', color: '#1c1c1c' }}>EDIT</p>
            </div>
          </Link>
        </div>

        <div style={{marginLeft: '10%'}}>
          <h2 style={{ textAlign: 'center', fontSize: '18px', color: '#1c1c1c' }}>CayoHotel </h2>
          <p style={{ fontSize: '18px', color: '#1c1c1c' }}>
            ARRIVE: {arriveDate} | DEPART : {departDate}{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
