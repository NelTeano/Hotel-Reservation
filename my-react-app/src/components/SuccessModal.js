import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/SuccessModal.css';

function SuccessModal({ show, setShow, success, setSuccess, fetched, setFetched, setName, setEmail }) {
  const proceed = e => {
    setSuccess(null);
    setFetched(null);

    if (!success) {
      e.preventDefault();
      setShow(null);
    } else {
      setName('');
      setEmail('');
    }
  };

  return show ? (
    <div className='success-modal-cover'>
      {fetched ? (
        <div className='success-modal'>
          <div
            className='success-modal-header'
            style={success ? { background: 'rgb(17, 201, 87)' } : { background: 'rgb(248, 51, 51)' }}
          >
            {success ? <h1>&#x2713;</h1> : <h1>x</h1>}
          </div>
          <div className='success-modal-body'>
            <h3>Booking {success ? 'Success' : 'Failed'}</h3>
            <Link className='success-modal-btn' onClick={proceed} to='/'>
              {success ? 'continue' : 'try again'}
            </Link>
          </div>
        </div>
      ) : (
        <div className='success-modal-loading'>
          <h1>Please wait...</h1>
          <div className='success-modal-spinner' />
        </div>
      )}
    </div>
  ) : null;
}

export default SuccessModal;
