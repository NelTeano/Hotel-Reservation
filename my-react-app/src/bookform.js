import React from 'react'
import './styles/bookform.css'


export default function Bookform() {

   

  return(
    <form method='post'>
      
    <div className='form-container'>
        
    <div>

    <p 
    style={{
        marginTop: '30px',
        fontSize: '20px',
        
    }}
    >FILL UP THE FORM</p>
    </div>

    <div>
          <div >
                 
                  <input
                    type="text"
                    name='firstName'
                    placeholder='FIRST NAME'
                    required
                  />
                  
                  <input
                    type="text"
                    name='lastName'
                    placeholder='LAST NAME'
                    required
                  />
                 
          </div>

          <div >
               
                  <input
                    type="text"
                    name='email'
                    placeholder='EMAIL'
                    required
                  />

                
                <input
                type="tel"
                name='phoneNo'
                placeholder='PHONE'
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
          type='submit' name='submit' value='CONFIRM YOUR STAY' />

      </div>

        

    
  </div>
    </form>
  )
}
  



  