const express = require('express');
const booking = express.Router();
const pool = require('../database');

function yyyymmdd(date) {
  const yyyy = date.getFullYear().toString().padStart(4, '0');
  const mm = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd = date.getDate().toString().padStart(2, '0');

  return `${yyyy}/${mm}/${dd}`;
}

// localhost:PORT/book/submit
// for the submit button in the booking form page.
booking.post('/submit', (req, res) => {
  console.log('req.body = ', req.body);

  pool.execute(
    'INSERT INTO `hotel_bookings` (`guest_name`, `check_in_date`, `check_out_date`, `room_type`, `num_guests`) VALUES (?, ?, ?, (SELECT id FROM room_types WHERE id=?), ?)', [
      `${req.body.lastName}, ${req.body.firstName}`,
      yyyymmdd(new Date(req.body.arriveDate)),
      yyyymmdd(new Date(req.body.departDate)),
      req.body.selectedRoomID,
      req.body.guests
    ], (err, result) => {
      if (err) {
        console.error('SQL ERROR : ', err);
      } else {
        console.debug('success - result : ', result);
      }
    }
  );

  res.status(200).json({ msg: 'form data received by the backend'});
});

module.exports = booking;
