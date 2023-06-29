import React from 'react';
import SuccessModal from './SuccessModal';

import '../assets/Form.css';

export default function Form({ arriveDate, departDate, guests, selectedRoom, total, name, setName, email, setEmail }) {
  const [showSuccessModal, setShowSuccessModal] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const [fetched, setFetched] = React.useState(null);

  // form post request
  const submitBookingForm = e => {
    // server/booking.js --> localhost:PORT/book/submit
    const validDateRange = new Date(arriveDate) < new Date(departDate);

    if (!validDateRange) {
      e.preventDefault();
      alert('please pick a valid date range');
      return;
    } else if (name && email) {
      e.preventDefault();
      setShowSuccessModal(true);

      fetch('http://localhost:3001/book/submit', {
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
    }
  };

  return (
    <form method='post'>
      <div className='form-container'>
        <p>FILL UP THE FORM</p>

        <div className='form-fields'>
          <input type='text' placeholder='NAME' onChange={e => setName(e.target.value)} value={name} required />
          <input type='text' placeholder='EMAIL' onChange={e => setEmail(e.target.value)} value={email} required />
        </div>

        <div className='policyBox' style={{ borderTop: '1px solid black' }}>
          <p>
            Cancellation Policy: <br></br> <br></br>
            Kindly note that once you have submitted your reservation and it has been confirmed, it may not be possible
            to cancel it. We kindly advise you to carefully consider your decision before proceeding with the
            reservation or booking a room. However, in the event of a genuine emergency, we recommend reaching out to
            our administrator, as they might be able to assist you with the cancellation process.
          </p>
        </div>

        <input
          className='form-submit-btn'
          style={{
            backgroundColor: 'transparent',
            textDecoration: 'Underline',
            fontWeight: '300',
          }}
          type='submit'
          value='CONFIRM YOUR STAY'
          onClick={submitBookingForm}
        />
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
