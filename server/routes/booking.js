const express = require('express');
const booking = express.Router();
const pool = require('../database');

// localhost:PORT/test
booking.get('/test', (req, res) => {
  pool.execute('INSERT INTO `hotel_bookings` (`guest_name`, `check_in_date`,`check_out_date`, `room_type`,`num_guests` ) VALUES (?, ?,?,?,?)', [
    'Maria',
    '2023-09-16',
    '2023-09-19',
    'deluxe',
    '2'
  ], (err, result) => {
    if (err) {
      console.log('booking query error', err);
    } else {
      console.log('affected rows = ', result.affectedRows);
      res.send('get request response from client');
    }
  });
});


//localhost:PORT/get/<id>
booking.get('/get/:id', (req,res) =>{
  const book_id = req.params.id;
  pool.execute('SELECT * FROM `hotel_bookings` WHERE id=?',[book_id], (err, result) =>{
    if (err) {
      console.log('booking query error', err);
    } else {
      console.log('affected rows = ', result.affectedRows);
      res.send(result);
    }
  } )



})

//localhost:PORT/api/book/
booking.post( '/api/book/', (req,res) => {

  const {guestName,checkinDate,checkoutDate,roomType,numGuest} = req.body;

  pool.execute('SELECT id FROM room_types WHERE room_type = ?', [roomType], (err, results) => {
    if (err) {
      console.log('Error querying the RoomTypes table:', err);
      return res.status(500).json({ error: 'An error occurred while processing the booking' });
    }

    if (results.length === 0) {
      console.log('Invalid roomType:', roomType);
      return res.status(400).json({ error: 'Invalid roomType' });
    }

    const roomTypeId = results[0].id;

    // Insert the booking into the bookings table
    pool.execute(
      'INSERT INTO hotel_bookings (guest_name, check_in_date, check_out_date, room_type, num_guests) VALUES (?, ?, ?, ?, ?)',
      [guestName, checkinDate, checkoutDate, roomTypeId, numGuest],
      (error, result) => {
        if (error) {
          console.log('Error inserting into Rooms table:', error);
          return res.status(500).json({ error: 'An error occurred while processing the booking' });
        }

        console.log('affected rows = ', result.affectedRows);
        res.send('post success');
      }
    );
  });
});


module.exports = booking;
