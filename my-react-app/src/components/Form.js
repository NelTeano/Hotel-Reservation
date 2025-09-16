import React from 'react';
import SuccessModal from './SuccessModal';

import '../assets/Form.css';

export default function Form({ arriveDate, departDate, guests, selectedRoom, total, name, setName, email, setEmail }) {
  const [showSuccessModal, setShowSuccessModal] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const [fetched, setFetched] = React.useState(null);
  
  // Additional guest information states
  const [phone, setPhone] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [specialRequests, setSpecialRequests] = React.useState('');
  const [preferredCheckIn, setPreferredCheckIn] = React.useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = React.useState('');
  const [newsletter, setNewsletter] = React.useState(false);
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  // Enhanced form validation
  const validateForm = () => {
    const errors = [];
    
    if (!name.trim()) errors.push('Name is required');
    if (!email.trim()) errors.push('Email is required');
    if (!phone.trim()) errors.push('Phone number is required');
    if (!address.trim()) errors.push('Address is required');
    if (!city.trim()) errors.push('City is required');
    if (!country.trim()) errors.push('Country is required');
    if (!termsAccepted) errors.push('You must accept the terms and conditions');
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      errors.push('Please enter a valid email address');
    }
    
    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (phone && !phoneRegex.test(phone.replace(/\s/g, ''))) {
      errors.push('Please enter a valid phone number');
    }
    
    return errors;
  };

  // Enhanced form submission
  const submitBookingForm = e => {
    e.preventDefault();
    
    const validDateRange = new Date(arriveDate) < new Date(departDate);
    if (!validDateRange) {
      alert('Please pick a valid date range');
      return;
    }
    
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      alert('Please fix the following errors:\n' + validationErrors.join('\n'));
      return;
    }
    
    setShowSuccessModal(true);

    fetch('/api/book/submit', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'post',
      body: JSON.stringify({
        arriveDate: arriveDate,
        departDate: departDate,
        guests: guests,
        selectedRoomID: selectedRoom.id,
        total: total,
        name: name,
        email: email,
        phone: phone,
        address: address,
        city: city,
        country: country,
        specialRequests: specialRequests,
        preferredCheckIn: preferredCheckIn,
        dietaryRestrictions: dietaryRestrictions,
        newsletter: newsletter,
        termsAccepted: termsAccepted,
      }),
    })
      .then(response => {
        if (response.status === 200) {
          setSuccess(true);
        } else {
          setSuccess(null);
        }
      })
      .catch(() => {
        setSuccess(null);
      })
      .finally(() => {
        setFetched(true);
      });
  };

  return (
    <form method='post' onSubmit={submitBookingForm}>
      <div className='form-container'>
        <div className='form-header'>
          <h2>Complete Your Reservation</h2>
          <p>Please provide your details to confirm your booking</p>
        </div>

        <div className='form-sections'>
          {/* Personal Information Section */}
          <div className='form-section'>
            <h3>Personal Information</h3>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='name'>Full Name *</label>
                <input 
                  type='text' 
                  id='name'
                  placeholder='Enter your full name' 
                  onChange={e => setName(e.target.value)} 
                  value={name} 
                  required 
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email Address *</label>
                <input 
                  type='email' 
                  id='email'
                  placeholder='your.email@example.com' 
                  onChange={e => setEmail(e.target.value)} 
                  value={email} 
                  required 
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='phone'>Phone Number *</label>
                <input 
                  type='tel' 
                  id='phone'
                  placeholder='+1 (555) 123-4567' 
                  onChange={e => setPhone(e.target.value)} 
                  value={phone} 
                  required 
                />
              </div>
              <div className='form-group'>
                <label htmlFor='checkin'>Preferred Check-in Time</label>
                <select 
                  id='checkin'
                  value={preferredCheckIn} 
                  onChange={e => setPreferredCheckIn(e.target.value)}
                >
                  <option value=''>Select time</option>
                  <option value='2:00 PM'>2:00 PM</option>
                  <option value='3:00 PM'>3:00 PM</option>
                  <option value='4:00 PM'>4:00 PM</option>
                  <option value='5:00 PM'>5:00 PM</option>
                  <option value='6:00 PM'>6:00 PM</option>
                </select>
              </div>
            </div>
          </div>

          {/* Address Information Section */}
          <div className='form-section'>
            <h3>Address Information</h3>
            <div className='form-group'>
              <label htmlFor='address'>Street Address *</label>
              <input 
                type='text' 
                id='address'
                placeholder='123 Main Street' 
                onChange={e => setAddress(e.target.value)} 
                value={address} 
                required 
              />
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='city'>City *</label>
                <input 
                  type='text' 
                  id='city'
                  placeholder='New York' 
                  onChange={e => setCity(e.target.value)} 
                  value={city} 
                  required 
                />
              </div>
              <div className='form-group'>
                <label htmlFor='country'>Country *</label>
                <input 
                  type='text' 
                  id='country'
                  placeholder='United States' 
                  onChange={e => setCountry(e.target.value)} 
                  value={country} 
                  required 
                />
              </div>
            </div>
          </div>

          {/* Special Requests Section */}
          <div className='form-section'>
            <h3>Special Requests & Preferences</h3>
            <div className='form-group'>
              <label htmlFor='requests'>Special Requests</label>
              <textarea 
                id='requests'
                placeholder='Any special requests or preferences for your stay...' 
                onChange={e => setSpecialRequests(e.target.value)} 
                value={specialRequests}
                rows={3}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='dietary'>Dietary Restrictions</label>
              <input 
                type='text' 
                id='dietary'
                placeholder='Vegetarian, Vegan, Allergies, etc.' 
                onChange={e => setDietaryRestrictions(e.target.value)} 
                value={dietaryRestrictions}
              />
            </div>
          </div>

          {/* Terms and Newsletter Section */}
          <div className='form-section'>
            <div className='checkbox-group'>
              <label className='checkbox-label'>
                <input 
                  type='checkbox' 
                  checked={newsletter} 
                  onChange={e => setNewsletter(e.target.checked)}
                />
                <span className='checkmark'></span>
                Subscribe to our newsletter for exclusive offers and updates
              </label>
            </div>
            <div className='checkbox-group'>
              <label className='checkbox-label'>
                <input 
                  type='checkbox' 
                  checked={termsAccepted} 
                  onChange={e => setTermsAccepted(e.target.checked)}
                  required
                />
                <span className='checkmark'></span>
                I accept the <a href='#' className='terms-link'>Terms and Conditions</a> and <a href='#' className='terms-link'>Privacy Policy</a> *
              </label>
            </div>
          </div>

          {/* Cancellation Policy */}
          <div className='policy-section'>
            <h4>Cancellation Policy</h4>
            <p>
              Free cancellation up to 24 hours before check-in. Cancellations made within 24 hours of check-in 
              will be charged the full amount. In case of genuine emergencies, please contact our customer service 
              team who may be able to assist with special circumstances.
            </p>
          </div>

          <button type='submit' className='form-submit-btn'>
            <span>Complete Reservation</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <SuccessModal
        show={showSuccessModal}
        setShow={setShowSuccessModal}
        success={success}
        setSuccess={setSuccess}
        fetched={fetched}
        setFetched={setFetched}
        setName={setName}
        setEmail={setEmail}
      />
    </form>
  );
}
