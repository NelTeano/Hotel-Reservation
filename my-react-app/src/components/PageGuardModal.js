import React from "react";
import { Link } from 'react-router-dom'
import '../assets/PageGuardModal.css'

function PageGuardModal ({
  arriveDate, departDate,
  guests, selectedRoom
}) {
  const [goodDate, setGoodDate] = React.useState(null);
  const [goodGuests, setGoodGuests] = React.useState(null);
  const [goodRoom, setGoodRoom] = React.useState(null);

  React.useEffect(() => {
    if (departDate && arriveDate) {
      setGoodDate(new Date(departDate) > new Date(arriveDate));
    } else {
      setGoodDate(false);
    }

    if (guests) {
      setGoodGuests(guests > 0)
    } else {
      setGoodGuests(false)
    }

    if (selectedRoom) {
      setGoodRoom(true);
    } else {
      setGoodRoom(false);
    }

  }, [arriveDate, departDate, guests, selectedRoom, goodDate, goodGuests, goodRoom]);

  return (
    (goodDate && goodGuests && goodRoom) ? null :
    <div className="page-guard-cover">
      <div className="page-guard">
        <div className="page-guard-header">
        {
          (!goodDate || !goodGuests) ?
            <h4>Select a booking date first</h4>
          :
            <h4>Select a room first</h4>
        }
        </div>

        <div className="page-guard-body">
          <Link
            className="page-guard-btn"
            to={(!goodDate || !goodGuests) ? '/calendar' : '/rooms'}
          >proceed</Link>
        </div>
      </div>
    </div>
  );
}

export default PageGuardModal;