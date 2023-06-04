const express = require('express');
const booking = express.Router();
const pool = require('../database');

// localhost:PORT/test
booking.get('/test', (req, res) => {
  pool.execute('INSERT INTO `hotel_bookings` (`guest_name`, `check_in_date`,`check_out_date`, `room_type`,`num_guests` ) VALUES (?, ?,?,?,?)', [
    'Juan',
    '2023-09-10',
    '2023-09-13',
    'deluxe',
    '4'
  ], (err, result) => {
    if (err) {
      console.log('booking query error', err);
    } else {
      console.log('affected rows = ', result.affectedRows);
      res.send('get request response from client');
    }
  });
});



module.exports = booking;
