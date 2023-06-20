const express = require('express');
const booking = express.Router();
const pool = require('../database');

/** format date into yyyy-mm-dd string form. */ 
function formatDate(date) {
  const yyyy = date.getFullYear().toString().padStart(4, '0');
  const mm = (date.getMonth() + 1).toString().padStart(2, '0');
  const dd = date.getDate().toString().padStart(2, '0');

  return `${yyyy}/${mm}/${dd}`;
}

// localhost:PORT/book/submit
// for the submit button in the booking form page.
booking.post('/submit', (req, res) => {
  console.log('req.body = ', req.body);

  pool.execute(`
    INSERT INTO hotel_bookings (
      guest_name, check_in_date, check_out_date, room_type,
      num_guests, booking_date, status_id, amount_paid, email
    )
    VALUES (
      ?, ?, ?, (SELECT id FROM room_types WHERE id=?),
      ?, ?, (SELECT id FROM status WHERE id=1),
      (SELECT price FROM room_types WHERE id=?), ?
    )`, [
      `${req.body.firstName} ${req.body.lastName}`, // guest_name
      formatDate(new Date(req.body.arriveDate)),    // check_in_date
      formatDate(new Date(req.body.departDate)),    // check_out_date
      req.body.selectedRoomID,                      // room_type
      req.body.guests,                              // num_guests
      formatDate(new Date()),                       // booking_date
      req.body.selectedRoomID,                      // amount_paid - based on room_type price.
      req.body.email                                // email
    ], (err, result) => {
      if (err) {
        res.status(500).json({ msg: 'failed to retrieve data'});
      } else {
        if (result.affectedRows === 1) {
          res.status(200).json({ msg: 'successfully booked'});
        } else {
          res.status(403).json({ msg: 'booking attempt failed'});
        }
      }
    }
  );
});

module.exports = booking;
