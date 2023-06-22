import React from 'react'
import SuccessModal from './SuccessModal'
import './styles/bookform.css'

export default function Bookform({name, setName, email, setEmail, submitHandler}) {

  const [showSuccessModal, setShowSuccessModal] = React.useState(null);
  const [success, setSuccess] = React.useState(null);

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
            onClick={(e) => {
              submitHandler(e, (status) => {
                setShowSuccessModal(true);
                setSuccess(status === 200);
              })
            }}
          />
        </div>
      </div>
      <SuccessModal show={showSuccessModal} setShow={setShowSuccessModal} success={success}/>
    </form>
  );
}
  



  