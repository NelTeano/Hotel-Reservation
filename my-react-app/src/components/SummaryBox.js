import React from 'react';
import '../assets/SummaryBox.css';

const USD = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export default function SummaryBox({ arriveDate, departDate, guests, total, setTotal, selectedRoom }) {
  const [pricingBreakdown, setPricingBreakdown] = React.useState({
    basePrice: 0,
    nights: 0,
    subtotal: 0,
    tax: 0,
    serviceFee: 0,
    total: 0
  });

  React.useEffect(() => {
    const departMilliSec = new Date(departDate).getTime();
    const arriveMilliSec = new Date(arriveDate).getTime();
    const checkInDays = Math.ceil((departMilliSec - arriveMilliSec) / (1000 * 3600 * 24));
    
    if (selectedRoom) {
      const basePrice = selectedRoom.price;
      const subtotal = checkInDays * basePrice;
      const tax = subtotal * 0.12; // 12% tax
      const serviceFee = subtotal * 0.05; // 5% service fee
      const totalAmount = subtotal + tax + serviceFee;
      
      setPricingBreakdown({
        basePrice,
        nights: checkInDays,
        subtotal,
        tax,
        serviceFee,
        total: totalAmount
      });
      
      setTotal(totalAmount);
    } else {
      setPricingBreakdown({
        basePrice: 0,
        nights: 0,
        subtotal: 0,
        tax: 0,
        serviceFee: 0,
        total: 0
      });
      setTotal(0);
    }
  }, [departDate, arriveDate, selectedRoom, setTotal]);

  return (
    <div className='sumBox-container'>
      <div className='summary-header'>
        <h2>Reservation Summary</h2>
        <div className='hotel-info'>
          <h3>CayoHotel Beach & Resort</h3>
          <p>Luxury Beachfront Experience</p>
        </div>
      </div>

      <div className='room-image-container'>
        {selectedRoom ? (
          <img alt='Selected Room' src={selectedRoom.images[0]} className='room-image' />
        ) : (
          <div className='no-room-placeholder'>
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7M3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>No room selected</p>
          </div>
        )}
      </div>

      <div className='booking-details'>
        <h4>Booking Details</h4>
        <div className='detail-row'>
          <span className='detail-label'>Check-in:</span>
          <span className='detail-value'>{arriveDate}</span>
        </div>
        <div className='detail-row'>
          <span className='detail-label'>Check-out:</span>
          <span className='detail-value'>{departDate}</span>
        </div>
        <div className='detail-row'>
          <span className='detail-label'>Nights:</span>
          <span className='detail-value'>{pricingBreakdown.nights}</span>
        </div>
        <div className='detail-row'>
          <span className='detail-label'>Guests:</span>
          <span className='detail-value'>{guests}</span>
        </div>
        <div className='detail-row'>
          <span className='detail-label'>Room Type:</span>
          <span className='detail-value'>{selectedRoom ? selectedRoom.name : 'Not selected'}</span>
        </div>
      </div>

      <div className='pricing-breakdown'>
        <h4>Price Breakdown</h4>
        {selectedRoom ? (
          <>
            <div className='price-row'>
              <span className='price-label'>
                {pricingBreakdown.nights} nights × {USD.format(pricingBreakdown.basePrice)}
              </span>
              <span className='price-value'>{USD.format(pricingBreakdown.subtotal)}</span>
            </div>
            <div className='price-row'>
              <span className='price-label'>Taxes & Fees (12%)</span>
              <span className='price-value'>{USD.format(pricingBreakdown.tax)}</span>
            </div>
            <div className='price-row'>
              <span className='price-label'>Service Fee (5%)</span>
              <span className='price-value'>{USD.format(pricingBreakdown.serviceFee)}</span>
            </div>
            <div className='price-row total-row'>
              <span className='price-label'>Total</span>
              <span className='price-value total-price'>{USD.format(pricingBreakdown.total)}</span>
            </div>
          </>
        ) : (
          <div className='no-pricing'>
            <p>Select a room to see pricing</p>
          </div>
        )}
      </div>

      <div className='summary-footer'>
        <div className='security-badges'>
          <div className='badge'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22S2 18 2 12V5L12 2L22 5V12C22 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Secure Booking</span>
          </div>
          <div className='badge'>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Instant Confirmation</span>
          </div>
        </div>
      </div>
    </div>
  );
}
