import React from 'react'
import './styles/bookform.css'

export default function Bookform({setFirstName, setLastName, setEmail, setPhone, submitHandler}) {

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
              placeholder='FIRST NAME'
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder='LAST NAME'
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          <div>
            <input
              type="text"
              placeholder='EMAIL'
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="tel"
              placeholder='PHONE'
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='policyBox' style={{borderTop: '1px solid black'}}>
          <p>
            Cancellation Policy: <br></br>  <br></br>
            You may Cancel your Reservation Just go to
            our Cancellation page and fill out the form
            to cancel your reservation so that will inform us you're
            not gonna able to attend 
          </p>

          <input style={{
              backgroundColor: 'transparent',
              border:  'none',
              textDecoration: 'Underline',
              fontWeight: '300',
            }}
            type='submit' value='CONFIRM YOUR STAY' onClick={(e) => submitHandler(e)}
          />
        </div>
      </div>
    </form>
  );
}
  



  