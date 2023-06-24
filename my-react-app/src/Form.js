import React from 'react'
import SuccessModal from './SuccessModal'
import './styles/Form.css'

export default function Form({
  arriveDate, departDate,
  guests, selectedRoom, total,
  name, setName,
  email, setEmail
}) {
  const [showSuccessModal, setShowSuccessModal] = React.useState(null);
  const [success, setSuccess] = React.useState(null);
  const [fetched, setFetched] = React.useState(null);

  // form post request
  const submitBookingForm = (e) => {
    // server/booking.js --> localhost:PORT/book/submit
    const validDateRange = new Date(arriveDate) < new Date(departDate);

    if (!validDateRange) {
      e.preventDefault();
      alert('please pick a valid date range');
      return;
    } else if (name && email ) {
      e.preventDefault();
      setShowSuccessModal(true);

      fetch('http://localhost:3001/book/submit', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
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

        })
      }).then(response => {
        if (response.status === 200) {
          setSuccess(true);
        } else {
          setSuccess(null);
        }
      }).catch(() => {
        setSuccess(null);
      }).finally(() => {
        setFetched(true);
      });
    }
  }
  
  return(
    <form method='post'>
      <div className='form-container'>
        <div>
          <p style={{
            marginTop: '30px',
            fontSize: '20px',
          }}>
            FILL UP THE FORM
          </p>
        </div>

        <div>
          <div>
            <input
              type="text"
              placeholder='NAME'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder='EMAIL'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

          </div>
        </div>

        <div className='policyBox' style={{borderTop: '1px solid black'}}>
          <p>
            Cancellation Policy: <br></br>  <br></br>
            Please reminder that after you submit a your Reservation and its done
             you cannot be able to Cancel your Reservation so please be sure to your
             decision before making a reseervation or book for our room but if its really emergency
             just contact our admin so they can cancel your book.

          </p>

          <input style={{
              backgroundColor: 'transparent',
              textDecoration: 'Underline',
              fontWeight: '300',
            }}
            type='submit' value='CONFIRM YOUR STAY'
            onClick={submitBookingForm}
          />
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
  



  