import React from "react";
import { Link } from 'react-router-dom'
import './styles/SuccessModal.css'

function SuccessModal ({show, success, setShow}) {
  const proceed = (e) => {
    if (!success) {
      e.preventDefault();
      setShow(false);
      return;
    }
  }

  return (
    show ? <div className="success-modal-cover">
      <div className="success-modal">
        <div className="success-modal-header"
          style={success ? {background: 'rgb(17, 201, 87)'} : {background: 'rgb(248, 51, 51)'}}
        >
          {success ? <h1>&#x2713;</h1> : <h1>x</h1>}
        </div>
        <div className="success-modal-body">
          <h3>Booking {success ? 'Success' : 'Failed, Try again later'}</h3>
          <Link onClick={proceed} to='/'>continue</Link>
        </div>
      </div>
    </div> : null
  );
}

export default SuccessModal;