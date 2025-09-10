import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Editbox.css';

export default function Editbox({ arriveDate, departDate, previousPage }) {
  return (
    <div className='editbox-container'>
      <div className='editbox-content'>
        <Link to={previousPage} className='edit-link'>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Edit Selection</span>
        </Link>

        <div className='booking-info'>
          <div className='hotel-name'>
            <h3>CayoHotel Beach & Resort</h3>
            <p>Luxury Beachfront Experience</p>
          </div>
          
          <div className='date-info'>
            <div className='date-item'>
              <span className='date-label'>Check-in</span>
              <span className='date-value'>{arriveDate}</span>
            </div>
            <div className='date-separator'>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className='date-item'>
              <span className='date-label'>Check-out</span>
              <span className='date-value'>{departDate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
